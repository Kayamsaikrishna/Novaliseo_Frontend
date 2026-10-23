"use client";

// A portfolio index built as a wheel you turn.
//
// At rest the work sits in a ring around a title, each card tangent to the
// circle. The first notch of scroll blows the ring open into a vertical drum:
// the card at the front lies flat and full size, the ones above and below
// rotate away into hard perspective and run off the top and bottom of the
// frame. Keep turning and the drum carries the next piece round to the front.
//
// The whole thing is one number - `turn` - read by a single rAF pass that writes
// transforms straight to the DOM. 0 is the ring, 1 is the drum with item 0 at
// the front, and every whole number after that is one more item turned past.
import * as React from "react";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export interface WorksWheelItem {
  /** Project/Role name. Shown beside the front card and in the index. */
  title: string;
  /** Cover art. Any src an <img> takes. */
  image: string;
  /** Atmospheric background visual that dynamically fades in when active. */
  bgImage?: string;
  /** Where the card links to. Omit for a wheel that only browses. */
  href?: string;
  /** Sub-domain or specialty. */
  domain?: string;
  /** Location (e.g. Bengaluru, IN • Hybrid). */
  location?: string;
  /** Role employment type. */
  type?: string;
  /** High-level description of what the engineer builds. */
  description?: string;
  /** Technical skill tags. */
  skills?: string[];
  /** Callback when applying or clicking the card. */
  onApply?: () => void;
}

export interface WorksWheelProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "children"
> {
  items: WorksWheelItem[];
  /** Sits in the middle of the ring. @default undefined */
  label?: string;
  /** Label on the card's hover affordance. Omit to drop it. @default undefined */
  action?: string;
  /** Callback when active index changes. */
  onActiveChange?: (index: number) => void;
}

/* Geometry. The card is measured against the stage; everything else is measured
   against the card, so a narrow stage - where the card is capped by width, not
   height - scales the whole wheel down with it instead of leaving a small card
   swinging on a huge drum. The three that matter are tuned together: STEP
   against DRUM sets how hard the neighbours rotate away, and DRUM against LENS
   decides whether they land inside the frame or run off it. */
const CARD_H = 0.38; // front card height, of the stage
const CARD_MAX_W = 0.34; // ... but never wider than this much of the stage
const CARD_RATIO = 1.45; // card width / height
const STEP = 40; // degrees between cards on the drum
const DRUM = 2.22; // drum radius, in card heights - and everything below likewise
const LENS = 2.7; // perspective distance
const RING_R = 1.14; // ring radius
/* The drum alone hangs the work on a plumb line. It isn't one: the strip curves
   away round an arc whose centre sits off to the LEFT, so the piece at the front
   is at the arc's near point - dead centre - and its neighbours have already
   swung back left as well as up and down. BOW is that arc's radius; nothing else
   makes the difference between a stack of cards and a wheel seen side on. */
const BOW = 1.82;
const TITLE = 0.124; // ring label and front-card title
const INDEX = 0.04; // the index down the right-hand side
/** Items either side of the front still worth drawing. Past this a card is
    edge-on, and further round it would stack up on the vanishing point. */
const CULL = 1.6;

/** How much of a wheel-notch or a dragged pixel counts as one item. */
const WHEEL_UNITS = 900;
const DRAG_UNITS = 420;
/** Quiet time after the last wheel event before the wheel settles on an item. */
const SETTLE = 140;
/** Fraction of the remaining distance closed each frame. 1 = no smoothing. */
const EASE = 0.12;

const clamp = (v: number, lo: number, hi: number) =>
  Math.min(hi, Math.max(lo, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

type Stage = { w: number; h: number };

const rad = (deg: number) => (deg * Math.PI) / 180;

/** How far left the arc has carried something that has turned `drumDeg` off the
    front. Zero at the front, so the piece being read stays centred. */
const bowAt = (drumDeg: number, bow: number) =>
  -bow * (1 - Math.cos(rad(drumDeg)));

/** Both states in one chain: the ring terms fall away as `m` reaches the drum,
    and the drum terms are still zero while the ring is up. The bow is applied
    first, in the wheel's own plane, so it slides the card sideways rather than
    turning with it - and perspective still shrinks it with distance. */
function place(
  ringDeg: number,
  drumDeg: number,
  ringR: number,
  drumR: number,
  bow: number,
  m: number,
) {
  return (
    `translateX(${m * bowAt(drumDeg, bow)}px)` +
    ` rotateZ(${(1 - m) * ringDeg}deg) translateY(${-(1 - m) * ringR}px)` +
    ` rotateX(${m * drumDeg}deg) translateZ(${m * drumR}px)`
  );
}

export function WorksWheel({
  items,
  label = "Works '26",
  action = "Explore Role",
  className,
  onActiveChange,
  ...props
}: WorksWheelProps) {
  const stageRef = React.useRef<HTMLDivElement>(null);
  const wheelRef = React.useRef<HTMLDivElement>(null);
  const cardRefs = React.useRef<(HTMLElement | null)[]>([]);
  const labelRef = React.useRef<HTMLDivElement>(null);
  const titleRef = React.useRef<HTMLDivElement>(null);

  // The wheel's position, and where it is heading. Only `active` is state -
  // everything else is written to the DOM, so turning the wheel is not a render.
  const turn = React.useRef(0);
  const target = React.useRef(0);
  const [active, setActive] = React.useState(0);
  const [stage, setStage] = React.useState<Stage>({ w: 0, h: 0 });

  const count = items.length;
  const last = Math.max(count - 1, 0);

  // Notify parent of active index change
  React.useEffect(() => {
    onActiveChange?.(active);
  }, [active, onActiveChange]);

  // Read after mount, not during render: the server has no matchMedia, and
  // branching on it inline is a hydration mismatch. Reduced motion drops the
  // easing, so the wheel lands where it is put instead of gliding there.
  const [reduced, setReduced] = React.useState(false);
  React.useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const read = () => setReduced(query.matches);
    read();
    query.addEventListener("change", read);
    return () => query.removeEventListener("change", read);
  }, []);

  React.useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const read = () => setStage({ w: el.clientWidth, h: el.clientHeight });
    read();
    const ro = new ResizeObserver(read);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const metrics = React.useMemo(() => {
    const { w, h } = stage;
    const cardW = Math.min(h * CARD_H * CARD_RATIO, w * CARD_MAX_W);
    const cardH = cardW / CARD_RATIO;
    const drumR = cardH * DRUM;
    const ringR = cardH * RING_R;
    // Shrink the ring's cards until the circle reads as a closed loop rather
    // than beads on a wire, however many pieces the wheel is given.
    const ringScale = count
      ? clamp((((2 * Math.PI * ringR) / count) * 0.82) / (cardW || 1), 0.16, 1)
      : 1;
    return {
      cardW,
      cardH,
      ringR,
      ringScale,
      drumR,
      bow: cardH * BOW,
      depth: cardH * LENS,
      title: cardH * TITLE,
      index: cardH * INDEX,
    };
  }, [stage, count]);

  // One pass per frame: ease toward the target, then write every transform.
  React.useEffect(() => {
    if (!stage.h) return;
    let frame = 0;
    const { ringR, ringScale, drumR, bow } = metrics;

    const draw = () => {
      frame = requestAnimationFrame(draw);
      const gap = target.current - turn.current;
      if (Math.abs(gap) < 0.0005) turn.current = target.current;
      else turn.current += gap * (reduced ? 1 : EASE);

      const t = turn.current;
      const m = clamp(t, 0, 1);
      const pos = Math.max(0, t - 1);

      // The drum is pulled back so its front face lands on the picture plane.
      // That set-back has to arrive with the drum, or the ring would sit at the
      // far side of the perspective and render at half its size.
      if (wheelRef.current) {
        wheelRef.current.style.transform = `translateZ(${-m * drumR}px)`;
      }

      for (let i = 0; i < count; i++) {
        const d = i - pos;
        const drumDeg = d * STEP;
        const card = cardRefs.current[i];
        if (card) {
          card.style.transform = place(
            d * (360 / count),
            drumDeg,
            ringR,
            drumR,
            bow,
            m,
          );
          // Culled by distance, not by angle: at a full turn the far side comes
          // back round to face us, and everything past the neighbours lands on
          // the vanishing point in a heap.
          card.style.opacity = m > 0.5 && Math.abs(d) > CULL ? "0" : "1";
          card.style.zIndex = String(Math.round(100 - Math.abs(d) * 2));
        }
        const face = card?.firstElementChild as HTMLElement | null;
        if (face) face.style.transform = `scale(${lerp(ringScale, 1, m)})`;
      }

      if (labelRef.current) labelRef.current.style.opacity = String(1 - m);
      if (titleRef.current) titleRef.current.style.opacity = String(m);
      const near = clamp(Math.round(pos), 0, last);
      setActive((prev) => (prev === near ? prev : near));
    };

    frame = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(frame);
  }, [metrics, stage.h, count, last, reduced]);

  const to = React.useCallback(
    (next: number) => {
      target.current = clamp(next, 0, last + 1);
    },
    [last],
  );

  // Native listener, because the wheel has to be cancellable - and it only
  // cancels while it still has somewhere to go, so the page scrolls on at
  // either end instead of trapping the reader.
  React.useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const onWheel = (event: WheelEvent) => {
      const next = target.current + event.deltaY / WHEEL_UNITS;
      if (next > 0 && next < last + 1) event.preventDefault();
      to(next);
      // A wheel gesture arrives as a burst of events with no end of its own, so
      // the rest position is whatever notch it happened to stop on. Left there
      // the drum sits between two cards - nothing at the front, and the pair
      // either side of the gap both turned half away. Settle onto an item.
      window.clearTimeout(settling.current);
      settling.current = window.setTimeout(
        () => to(Math.round(target.current)),
        SETTLE,
      );
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", onWheel);
      window.clearTimeout(settling.current);
    };
  }, [to, last]);

  const drag = React.useRef<number | null>(null);
  const settling = React.useRef(0);

  const activeItem = items[active];

  return (
    <section
      aria-label={label}
      className={cn(
        "relative h-full min-h-[38rem] sm:min-h-[44rem] w-full overflow-hidden select-none bg-slate-900 text-slate-900",
        className,
      )}
      {...props}
    >
      {/* ================= DYNAMIC BACKGROUND CROSS-FADE ================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-all duration-1000 ease-out ${
              active === idx 
                ? "opacity-100 scale-100 z-1" 
                : "opacity-0 scale-105 pointer-events-none z-0"
            }`}
          >
            <img
              src={item.bgImage || item.image}
              alt={item.title}
              className="w-full h-full object-cover object-center filter brightness-[0.92] saturate-[0.9]"
            />
            {/* Luminous Architectural Glass Veil for High Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-50/95 via-slate-100/85 to-slate-200/90 backdrop-blur-[3px]" />
            
            {/* Technical Blueprint Dot Overlay */}
            <div 
              className="absolute inset-0 opacity-[0.035] pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(#0f172a 1px, transparent 1px)",
                backgroundSize: "24px 24px"
              }}
            />
          </div>
        ))}

        {/* Ambient Top & Bottom Lighting Voids */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#f8fafc] via-[#f8fafc]/60 to-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#f8fafc] via-[#f8fafc]/70 to-transparent z-10" />
      </div>

      {/* ================= WHEEL STAGE VIEWPORT ================= */}
      <div
        ref={stageRef}
        tabIndex={0}
        role="listbox"
        aria-label={label}
        aria-activedescendant={`works-wheel-${active}`}
        className="focus-visible:outline-foreground absolute inset-0 z-10 cursor-grab touch-pan-x outline-none focus-visible:outline-2 focus-visible:-outline-offset-4 active:cursor-grabbing"
        style={{ perspective: `${metrics.depth}px` }}
        onPointerDown={(event) => {
          drag.current = event.clientY;
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerMove={(event) => {
          if (drag.current === null) return;
          to(target.current + (drag.current - event.clientY) / DRAG_UNITS);
          drag.current = event.clientY;
        }}
        onPointerUp={() => {
          // Land on an item rather than between two.
          drag.current = null;
          if (target.current > 1) to(Math.round(target.current));
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown") to(Math.round(target.current) + 1);
          else if (event.key === "ArrowUp") to(Math.round(target.current) - 1);
          else return;
          event.preventDefault();
        }}
      >
        <div
          ref={wheelRef}
          className="absolute top-1/2 left-1/2 [transform-style:preserve-3d]"
        >
          {items.map((item, i) => {
            return (
              <div
                key={item.title}
                id={`works-wheel-${i}`}
                role="option"
                aria-selected={i === active}
                ref={(node: HTMLElement | null) => {
                  cardRefs.current[i] = node;
                }}
                onClick={() => {
                  if (i !== active) {
                    to(i + 1);
                  } else if (item.onApply) {
                    item.onApply();
                  }
                }}
                className="group absolute [backface-visibility:hidden] cursor-pointer"
                style={{
                  width: metrics.cardW,
                  height: metrics.cardH,
                  marginLeft: -metrics.cardW / 2,
                  marginTop: -metrics.cardH / 2,
                }}
              >
                <span className="relative block size-full overflow-hidden rounded-[24px] sm:rounded-[28px] border border-white/80 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.18)] transition-all duration-300 group-hover:shadow-[0_25px_65px_rgba(0,0,0,0.25)]">
                  <img
                    src={item.image}
                    alt={item.title}
                    draggable={false}
                    className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Gradient shadow for text legibility on the card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

                  {/* Card Overlay Info */}
                  <div className="absolute bottom-3 sm:bottom-4 left-4 right-4 flex items-end justify-between gap-2 z-10 pointer-events-none">
                    <div className="min-w-0 pr-2">
                      <span className="text-[10px] sm:text-xs font-mono font-semibold text-blue-300 block truncate">
                        {item.domain || "Novaliseo Robotics"}
                      </span>
                      <h4 className="text-white font-bold text-sm sm:text-base md:text-lg tracking-tight truncate drop-shadow-sm">
                        {item.title}
                      </h4>
                    </div>

                    {/* Action Pill */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        item.onApply?.();
                      }}
                      className="shrink-0 pointer-events-auto px-3 py-1.5 rounded-full bg-white/20 hover:bg-white text-white hover:text-slate-950 backdrop-blur-md border border-white/30 text-[11px] font-mono font-medium shadow-sm transition-all duration-200 cursor-pointer flex items-center gap-1 hover:scale-105 active:scale-95"
                    >
                      <span>{action}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Ring title and front-card title trade places across the transition */}
      <div
        ref={labelRef}
        className="pointer-events-none absolute inset-0 z-20 grid place-items-center tracking-tight font-serif text-slate-800 font-medium drop-shadow-sm"
        style={{ fontSize: metrics.title }}
      >
        {label}
      </div>

      {/* Front-card details panel on the left (Fades in when wheel opens) */}
      <div
        ref={titleRef}
        className="pointer-events-none absolute top-1/2 left-[5%] sm:left-[8%] -translate-y-1/2 z-20 tracking-tight opacity-0 max-w-sm sm:max-w-md text-left transition-opacity duration-300"
      >
        <div className="p-5 sm:p-6 rounded-[2rem] bg-white/80 backdrop-blur-md border border-white/90 shadow-xl pointer-events-auto">
          {activeItem?.domain && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-semibold mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              <span>{activeItem.domain}</span>
            </div>
          )}

          <h3 
            className="font-serif font-normal text-slate-950 leading-tight mb-2 tracking-tight"
            style={{ fontSize: `clamp(1.4rem, 2.4vw, 2.2rem)` }}
          >
            {activeItem?.title}
          </h3>

          {activeItem?.description && (
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
              {activeItem.description}
            </p>
          )}

          {activeItem?.skills && (
            <div className="flex flex-wrap gap-1.5 mb-5">
              {activeItem.skills.map((skill, sIdx) => (
                <span 
                  key={sIdx}
                  className="px-2 py-0.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-mono font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}

          {activeItem?.onApply && (
            <button
              onClick={() => activeItem.onApply?.()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-950 hover:bg-blue-600 text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-md hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Apply for {activeItem.title}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Right-Hand Index Selector */}
      <ol
        className="absolute top-[8%] sm:top-[7.5%] right-[3%] sm:right-[2.5%] z-20 text-right leading-[1.8] pointer-events-auto"
        style={{ fontSize: `clamp(11px, 1.4vw, 15px)` }}
      >
        <li className="text-[10px] sm:text-xs font-mono font-bold tracking-wider text-slate-400 uppercase mb-2">
          Index ({items.length})
        </li>
        {items.map((item, i) => (
          <li key={item.title}>
            <button
              type="button"
              onClick={() => to(i + 1)}
              className={cn(
                "focus-visible:outline-foreground cursor-pointer transition-all outline-none font-mono text-xs sm:text-sm",
                i === active 
                  ? "text-blue-700 font-bold scale-105 underline decoration-blue-500 decoration-2 underline-offset-4" 
                  : "text-slate-500 hover:text-slate-900 font-normal",
              )}
            >
              0{i + 1} — {item.title}
            </button>
          </li>
        ))}
      </ol>

      {/* Bottom Wheel Drag Hint */}
      <div className="absolute bottom-5 inset-x-0 z-20 flex justify-center items-center pointer-events-none">
        <div className="px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-slate-200 text-slate-500 text-[11px] font-mono tracking-widest uppercase shadow-xs flex items-center gap-2">
          <span>⟷</span>
          <span>Scroll or Drag Wheel to Turn</span>
          <span>⟷</span>
        </div>
      </div>
    </section>
  );
}

export default WorksWheel;
