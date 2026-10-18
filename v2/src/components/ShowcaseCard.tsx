import React from "react";
import { ChevronUp, ArrowRight } from "lucide-react";

export interface ShowcaseCardProps {
  image: string;
  alt: string;
  title: string;
  subTitle: string;
  buttonText: string;
  onAction: () => void;
  overview: string;
  chips: string[];
  description: string;
  accentColor?: "cyan" | "blue" | "amber";
}

export const ShowcaseCard: React.FC<ShowcaseCardProps> = ({
  image,
  alt,
  title,
  subTitle,
  buttonText,
  onAction,
  overview,
  chips,
  description,
  accentColor = "blue",
}) => {
  // Balanced light-theme accent highlights
  const accentClasses = {
    cyan: {
      hoverBorder: "hover:border-cyan-300",
      hoverShadow: "hover:shadow-[0_20px_50px_rgba(6,182,212,0.12)]",
      chipHover: "group-hover:border-cyan-200 group-hover:bg-cyan-50/60 group-hover:text-cyan-950",
      btnHover: "hover:bg-cyan-600 hover:text-white hover:border-cyan-500",
      chevronColor: "text-cyan-500",
    },
    blue: {
      hoverBorder: "hover:border-blue-300",
      hoverShadow: "hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)]",
      chipHover: "group-hover:border-blue-200 group-hover:bg-blue-50/60 group-hover:text-blue-950",
      btnHover: "hover:bg-blue-600 hover:text-white hover:border-blue-500",
      chevronColor: "text-blue-500",
    },
    amber: {
      hoverBorder: "hover:border-amber-300",
      hoverShadow: "hover:shadow-[0_20px_50px_rgba(245,158,11,0.12)]",
      chipHover: "group-hover:border-amber-200 group-hover:bg-amber-50/60 group-hover:text-amber-950",
      btnHover: "hover:bg-amber-600 hover:text-white hover:border-amber-500",
      chevronColor: "text-amber-500",
    },
  }[accentColor];

  return (
    <div
      className={`group relative rounded-[2.2rem] bg-white border border-slate-200/90 shadow-[0_10px_35px_rgba(0,0,0,0.04)] ${accentClasses.hoverBorder} ${accentClasses.hoverShadow} transition-all duration-500 flex flex-col justify-between text-left overflow-hidden hover:-translate-y-1.5`}
    >
      {/* Upper Portion: Rounded Visual Media Frame */}
      <div className="p-3 sm:p-3.5 pb-0">
        <div className="relative w-full h-44 sm:h-48 xl:h-52 2xl:h-56 rounded-[1.8rem] overflow-hidden bg-slate-950 shadow-inner group/media">
          {/* Realistic physical hardware photograph */}
          <img
            src={image}
            alt={alt}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Dark gradient bottom veil for clean text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent pointer-events-none" />

          {/* Image Overlay: Bottom Bar (Title + Subtitle on Left, Frosted Action Pill on Right) */}
          <div className="absolute bottom-3 left-3.5 right-3.5 flex items-end justify-between gap-2 z-10">
            <div className="min-w-0 pr-2">
              <h3 className="text-white font-bold text-sm sm:text-base xl:text-lg tracking-tight truncate drop-shadow-sm">
                {title}
              </h3>
              <p className="text-slate-300 text-[11px] sm:text-xs font-mono drop-shadow-sm truncate">
                {subTitle}
              </p>
            </div>

            {/* Frosted Glass Action Button (matches reference "View project") */}
            <button
              onClick={onAction}
              className="shrink-0 px-3.5 py-1.5 rounded-full bg-white/20 hover:bg-white/35 backdrop-blur-md border border-white/30 text-white text-[11px] sm:text-xs font-mono font-medium tracking-wide shadow-sm hover:scale-105 transition-all duration-200 cursor-pointer flex items-center gap-1.5"
            >
              <span>{buttonText}</span>
              <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover/media:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Lower Portion: Case-Study Summary (Overview, Chips, Description & Blurred Foot) */}
      <div className="p-4 sm:p-5 pt-3.5 flex flex-col justify-between flex-1 relative">
        <div>
          {/* One-Line Overview Hook */}
          <p className="text-slate-900 font-semibold text-xs sm:text-[13.5px] xl:text-sm leading-snug mb-3">
            {overview}
          </p>

          {/* Chips / Pills Row */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3">
            {chips.map((chip, idx) => (
              <span
                key={idx}
                className={`px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-medium tracking-tight transition-colors duration-300 ${accentClasses.chipHover}`}
              >
                {chip}
              </span>
            ))}
          </div>

          {/* Detailed Narrative Description (Sharpens from soft blur on hover) */}
          <p className="text-slate-600 text-xs sm:text-[12.5px] xl:text-[13px] leading-relaxed transition-all duration-500 filter blur-[0.3px] group-hover:blur-none opacity-85 group-hover:opacity-100">
            {description}
          </p>
        </div>

        {/* Progressively Blurred Foot with Centered Chevron Up (Matches Reference) */}
        <div className="pt-5 relative">
          <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none group-hover:opacity-0 transition-opacity duration-500" />
          <div className="flex justify-center items-center relative z-10 pt-1">
            <ChevronUp
              className={`w-4 h-4 text-slate-400 group-hover:${accentClasses.chevronColor} transition-transform duration-300 group-hover:-translate-y-1`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
