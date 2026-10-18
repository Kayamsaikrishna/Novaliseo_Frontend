import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export interface BookmarkCardProps {
  tabLabel: string;
  tabPosition?: "left" | "right";
  artworkImage: string;
  artworkAlt: string;
  artworkQuote: string;
  accentColor: "cyan" | "blue" | "amber";
  title: string;
  category: string;
  description: string;
  highlights: string[];
  buttonText: string;
  onAction: () => void;
  activeDot: 1 | 2 | 3;
}

export const BookmarkCard: React.FC<BookmarkCardProps> = ({
  tabLabel,
  tabPosition = "left",
  artworkImage,
  artworkAlt,
  artworkQuote,
  accentColor,
  title,
  category,
  description,
  highlights,
  buttonText,
  onAction,
  activeDot,
}) => {
  // Theme color maps for glow, borders, and dots
  const colorMap = {
    cyan: {
      cardGlow: "group-hover:shadow-[0_20px_60px_-15px_rgba(6,182,212,0.35)]",
      cardBorder: "border-slate-800/80 group-hover:border-cyan-500/50",
      topTabBorder: "border-cyan-500/30",
      artworkGlow: "from-cyan-500/60 via-blue-500/30 to-transparent",
      accentText: "text-cyan-400",
      activeDot: "bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.9)]",
      btnBg: "bg-cyan-950/40 hover:bg-cyan-500 text-cyan-200 hover:text-slate-950 border-cyan-800/60 hover:border-cyan-400",
      checkIcon: "text-cyan-400",
      subtleBg: "from-cyan-950/20 via-slate-950/80 to-slate-950",
    },
    blue: {
      cardGlow: "group-hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.35)]",
      cardBorder: "border-slate-800/80 group-hover:border-blue-500/50",
      topTabBorder: "border-blue-500/30",
      artworkGlow: "from-blue-500/60 via-indigo-500/30 to-transparent",
      accentText: "text-blue-400",
      activeDot: "bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.9)]",
      btnBg: "bg-blue-950/40 hover:bg-blue-500 text-blue-200 hover:text-slate-950 border-blue-800/60 hover:border-blue-400",
      checkIcon: "text-blue-400",
      subtleBg: "from-blue-950/20 via-slate-950/80 to-slate-950",
    },
    amber: {
      cardGlow: "group-hover:shadow-[0_20px_60px_-15px_rgba(245,158,11,0.35)]",
      cardBorder: "border-slate-800/80 group-hover:border-amber-500/50",
      topTabBorder: "border-amber-500/30",
      artworkGlow: "from-amber-500/60 via-orange-500/30 to-transparent",
      accentText: "text-amber-400",
      activeDot: "bg-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.9)]",
      btnBg: "bg-amber-950/40 hover:bg-amber-500 text-amber-200 hover:text-slate-950 border-amber-800/60 hover:border-amber-400",
      checkIcon: "text-amber-400",
      subtleBg: "from-amber-950/20 via-slate-950/80 to-slate-950",
    },
  }[accentColor];

  // Clip path polygon:
  // Tab at top-left or top-right, with bite taken out of lower-right edge!
  const isRightTab = tabPosition === "right";
  const clipPathStyle = isRightTab
    ? "polygon(0% 16px, 56% 16px, 56% 0%, 100% 0%, 100% calc(100% - 22px), 58% calc(100% - 22px), 58% 100%, 0% 100%)"
    : "polygon(0% 0%, 44% 0%, 44% 16px, 100% 16px, 100% calc(100% - 22px), 58% calc(100% - 22px), 58% 100%, 0% 100%)";

  return (
    <div className="relative group flex flex-col transition-transform duration-500 hover:-translate-y-2">
      {/* Dynamic Ambient Background Glow that blooms on card hover */}
      <div
        className={`absolute -inset-2 bg-gradient-to-b ${colorMap.subtleBg} rounded-3xl blur-2xl opacity-30 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
      />

      {/* Main Bookmark-Tab Card with Bite taken out of lower-right edge */}
      <div
        style={{ clipPath: clipPathStyle }}
        className={`relative w-full bg-[#0c101a] border ${colorMap.cardBorder} ${colorMap.cardGlow} transition-all duration-500 p-4 sm:p-5 xl:p-6 flex flex-col justify-between text-left`}
      >
        {/* Top Header / Bookmark Tab Bar */}
        <div className="flex items-center justify-between mb-4 pt-1">
          {isRightTab ? (
            <>
              <span className="text-[11px] xl:text-xs font-mono uppercase tracking-wider text-slate-400 group-hover:text-slate-200 transition-colors">
                {category}
              </span>
              <span className={`text-[11px] xl:text-xs font-mono font-medium ${colorMap.accentText}`}>
                {tabLabel}
              </span>
            </>
          ) : (
            <>
              <span className={`text-[11px] xl:text-xs font-mono font-medium ${colorMap.accentText}`}>
                {tabLabel}
              </span>
              <span className="text-[11px] xl:text-xs font-mono uppercase tracking-wider text-slate-400 group-hover:text-slate-200 transition-colors">
                {category}
              </span>
            </>
          )}
        </div>

        {/* Artwork Container: Blooms into saturated color on hover; dissolves into glow */}
        <div className="relative w-full h-36 sm:h-40 xl:h-44 2xl:h-48 rounded-2xl overflow-hidden mb-4 bg-slate-950 border border-white/5">
          {/* Intense ambient bloom underneath that radiates outward */}
          <div
            className={`absolute -inset-4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] ${colorMap.artworkGlow} blur-2xl opacity-25 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700 pointer-events-none`}
          />

          {/* Realistic physical hardware photograph */}
          <img
            src={artworkImage}
            alt={artworkAlt}
            className="w-full h-full object-cover filter saturate-[0.7] contrast-[1.08] brightness-[0.85] group-hover:saturate-[1.5] group-hover:contrast-[1.15] group-hover:brightness-[1.12] group-hover:scale-105 transition-all duration-700 ease-out"
          />

          {/* Dissolve Veil: Dissolves lower and ambient edges into the glow rather than being painted over */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c101a] via-transparent to-transparent pointer-events-none opacity-80 group-hover:opacity-40 transition-opacity duration-700" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c101a]/40 via-transparent to-[#0c101a]/90 pointer-events-none" />

          {/* Floating Artwork Inset Quote */}
          <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] xl:text-xs font-mono text-slate-200/90 pointer-events-none">
            <span className="truncate drop-shadow-md">{artworkQuote}</span>
          </div>
        </div>

        {/* Narrative & Specifications Hook */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-lg sm:text-xl xl:text-[22px] font-bold text-white tracking-tight mb-1.5 group-hover:text-white transition-colors">
              {title}
            </h3>
            <p className="text-slate-400 text-xs sm:text-[13px] leading-relaxed mb-3.5 line-clamp-2">
              {description}
            </p>

            {/* Concise Feature Bullets */}
            <ul className="space-y-1.5 text-xs sm:text-[12.5px] text-slate-300 font-medium mb-4">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className={`w-3.5 h-3.5 ${colorMap.checkIcon} shrink-0`} />
                  <span className="truncate">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Row: 3 Status Dots + Action CTA */}
          <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between">
            {/* 3 Status Bookmark Dots */}
            <div className="flex items-center gap-1.5">
              <span
                className={`transition-all duration-300 ${
                  activeDot === 1
                    ? `w-2 h-2 rounded-full ${colorMap.activeDot}`
                    : "w-1.5 h-1.5 rounded-full bg-slate-700"
                }`}
              />
              <span
                className={`transition-all duration-300 ${
                  activeDot === 2
                    ? `w-2 h-2 rounded-full ${colorMap.activeDot}`
                    : "w-1.5 h-1.5 rounded-full bg-slate-700"
                }`}
              />
              <span
                className={`transition-all duration-300 ${
                  activeDot === 3
                    ? `w-2 h-2 rounded-full ${colorMap.activeDot}`
                    : "w-1.5 h-1.5 rounded-full bg-slate-700"
                }`}
              />
            </div>

            {/* Tactical Action CTA Button */}
            <button
              onClick={onAction}
              className={`py-2 px-3.5 rounded-xl border text-[11px] xl:text-xs font-mono font-semibold flex items-center gap-2 transition-all duration-300 cursor-pointer shadow-sm ${colorMap.btnBg}`}
            >
              <span>{buttonText}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
