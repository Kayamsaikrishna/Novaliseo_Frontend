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
const CARD_H = 0.30; // front card height, of the stage (tuned to comfortably fit below navbar & header)
const CARD_MAX_W = 0.26; // ... but never wider than this much of the stage
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
  label = "Build With Us '26",
  action = "Explore & Apply",
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

  // Read after mount, not during render
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
    // Shrink the ring's cards until the circle reads as a closed loop
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
          // Culled by distance, not by angle
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

  // Native listener with wheel handling
  React.useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const onWheel = (event: WheelEvent) => {
      const next = target.current + event.deltaY / WHEEL_UNITS;
      if (next > 0 && next < last + 1) event.preventDefault();
      to(next);
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
        "relative h-full w-full min-h-[100dvh] max-h-[100dvh] overflow-hidden select-none bg-slate-950 text-white",
        className,
      )}
      {...props}
    >
      {/* ================= 1. CRISP, VIVID BACKGROUND IMAGE CROSS-FADE (NO BLUR) ================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
              active === idx 
                ? "opacity-100 scale-100 z-1" 
                : "opacity-0 scale-105 pointer-events-none z-0"
            }`}
          >
            {/* 100% Crisp, Vivid Background Photo (Zero Blur!) */}
            <img
              src={item.bgImage || item.image}
              alt={item.title}
              className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.04]"
            />

            {/* Cinematic Directional Vignettes for Text Contrast (Background remains 100% visible) */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 via-transparent to-transparent pointer-events-none" />
            
            {/* Subtle Blueprint Grid Accent */}
            <div 
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
                backgroundSize: "28px 28px"
              }}
            />
          </div>
        ))}
      </div>

      {/* ================= 2. TOP HEADER INTEGRATED IN STAGE (SAFELY BELOW NAVBAR) ================= */}
      <div className="absolute top-20 sm:top-24 left-4 sm:left-8 lg:left-12 z-30 pointer-events-none text-left max-w-xs sm:max-w-sm">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] sm:text-[11px] font-mono text-cyan-300 font-semibold mb-1 pointer-events-auto shadow-md">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>ACTIVE DISCIPLINES // 3D DRUM</span>
        </div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight drop-shadow-lg">
          Build With Us.
        </h2>
      </div>

      {/* ================= 3. WHEEL STAGE VIEWPORT ================= */}
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
          className="absolute top-[52%] left-1/2 [transform-style:preserve-3d]"
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
                <span className="relative block size-full overflow-hidden rounded-[24px] sm:rounded-[30px] border border-white/30 bg-slate-900 shadow-[0_25px_60px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover:shadow-[0_30px_75px_rgba(0,0,0,0.7)] group-hover:border-cyan-400/60">
                  <img
                    src={item.image}
                    alt={item.title}
                    draggable={false}
                    className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Gradient shadow for text legibility on the card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                  {/* Card Overlay Info */}
                  <div className="absolute bottom-3 sm:bottom-4 left-4 right-4 flex items-end justify-between gap-2 z-10 pointer-events-none">
                    <div className="min-w-0 pr-2 text-left">
                      <span className="text-[10px] sm:text-xs font-mono font-semibold text-cyan-300 block truncate drop-shadow-sm">
                        {item.domain || "Novaliseo Robotics"}
                      </span>
                      <h4 className="text-white font-bold text-sm sm:text-base md:text-lg tracking-tight truncate drop-shadow-md">
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
                      className="shrink-0 pointer-events-auto px-3.5 py-1.5 rounded-full bg-white/25 hover:bg-white text-white hover:text-slate-950 backdrop-blur-md border border-white/40 text-[11px] font-mono font-semibold shadow-md transition-all duration-200 cursor-pointer flex items-center gap-1 hover:scale-105 active:scale-95"
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

      {/* Ring title in the center when wheel is closed */}
      <div
        ref={labelRef}
        className="pointer-events-none absolute inset-0 z-20 grid place-items-center tracking-tight font-serif text-white/90 font-medium drop-shadow-lg"
        style={{ fontSize: metrics.title }}
      >
        {label}
      </div>

      {/* ================= 4. ACTIVE ROLE DETAILS (BOTTOM-LEFT IN STAGE) ================= */}
      <div
        ref={titleRef}
        className="pointer-events-none absolute bottom-8 sm:bottom-12 left-6 sm:left-12 lg:left-16 z-30 tracking-tight opacity-0 max-w-sm sm:max-w-md lg:max-w-lg text-left transition-opacity duration-300"
      >
        <div className="p-5 sm:p-6 rounded-[26px] bg-black/60 backdrop-blur-md border border-white/20 text-white shadow-2xl pointer-events-auto">
          {activeItem?.domain && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-semibold mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>{activeItem.domain}</span>
            </div>
          )}

          <h3 
            className="font-serif font-normal text-white leading-tight mb-2 tracking-tight drop-shadow-md"
            style={{ fontSize: `clamp(1.3rem, 2.2vw, 2rem)` }}
          >
            {activeItem?.title}
          </h3>

          {activeItem?.description && (
            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed mb-4 drop-shadow-xs line-clamp-3">
              {activeItem.description}
            </p>
          )}

          {activeItem?.skills && (
            <div className="flex flex-wrap gap-1.5 mb-5">
              {activeItem.skills.slice(0, 4).map((skill, sIdx) => (
                <span 
                  key={sIdx}
                  className="px-2 py-0.5 rounded-lg bg-white/10 border border-white/15 text-slate-200 text-[11px] font-mono"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}

          {activeItem?.onApply && (
            <button
              onClick={() => activeItem.onApply?.()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-cyan-400 text-slate-950 font-semibold text-xs sm:text-sm transition-all duration-200 shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Apply for {activeItem.title}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* ================= 5. RIGHT-HAND INDEX SELECTOR (SAFELY BELOW NAVBAR) ================= */}
      <ol
        className="absolute top-20 sm:top-24 right-4 sm:right-8 lg:right-12 z-30 text-right leading-[1.8] pointer-events-auto"
        style={{ fontSize: `clamp(11px, 1.3vw, 14px)` }}
      >
        <li className="text-[10px] sm:text-xs font-mono font-bold tracking-wider text-slate-400 uppercase mb-2">
          INDEX ({items.length})
        </li>
        {items.map((item, i) => (
          <li key={item.title}>
            <button
              type="button"
              onClick={() => to(i + 1)}
              className={cn(
                "focus-visible:outline-foreground cursor-pointer transition-all outline-none font-mono text-xs sm:text-sm px-3.5 py-1 rounded-full my-0.5",
                i === active 
                  ? "bg-white text-slate-950 font-bold shadow-lg scale-105" 
                  : "text-slate-300 hover:text-white bg-black/40 backdrop-blur-sm border border-white/10 font-normal hover:bg-black/60",
              )}
            >
              <span>0{i + 1}</span>
              <span className="hidden sm:inline"> — {item.title}</span>
            </button>
          </li>
        ))}
      </ol>

      {/* Bottom Center Wheel Drag Hint */}
      <div className="absolute bottom-5 inset-x-0 z-30 flex justify-center items-center pointer-events-none">
        <div className="px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-slate-300 text-[11px] font-mono tracking-widest uppercase shadow-sm flex items-center gap-2">
          <span>⟷</span>
          <span>Scroll or Drag Wheel to Turn</span>
          <span>⟷</span>
        </div>
      </div>
    </section>
  );
}

export default WorksWheel;
