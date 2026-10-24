"use client";

import React from "react";
import { clsx } from "clsx";
import { motion } from "framer-motion";

export interface BentoCardProps {
  dark?: boolean;
  className?: string;
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  graphic?: React.ReactNode;
  fade?: ("top" | "bottom")[];
}

export function BentoCard({
  dark = false,
  className = "",
  eyebrow,
  title,
  description,
  graphic,
  fade = [],
}: BentoCardProps) {
  return (
    <motion.div
      initial="idle"
      whileHover="active"
      variants={{ idle: {}, active: {} }}
      data-dark={dark ? "true" : undefined}
      className={clsx(
        className,
        "group relative flex flex-col overflow-hidden rounded-2xl sm:rounded-[2rem]",
        "bg-slate-950 dark:bg-slate-950/90 transform-gpu border border-slate-800/80 dark:border-white/10 shadow-lg shadow-black/25 ring-1 ring-white/10",
        "data-[dark]:bg-gray-900 data-[dark]:ring-white/15"
      )}
    >
      <div className="relative h-[24rem] sm:h-[28rem] shrink-0 overflow-hidden">
        {graphic}
        {fade.includes("top") && (
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/30 to-transparent opacity-60 pointer-events-none" />
        )}
        {fade.includes("bottom") && (
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent opacity-90 pointer-events-none" />
        )}
      </div>
      <div className="relative p-6 sm:p-8 lg:p-10 z-20 isolate mt-[-125px] min-h-[13rem] backdrop-blur-xl bg-slate-950/80 border-t border-white/10 text-white flex flex-col justify-end">
        <div className="text-xs sm:text-sm font-mono font-bold tracking-wider text-blue-400 uppercase">
          {eyebrow}
        </div>
        <p className="mt-1 text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-blue-200 transition-colors duration-200">
          {title}
        </p>
        <p className="mt-2 max-w-[620px] text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export interface FUIBentoGridDarkProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function FUIBentoGridDark({
  badge = "ENGINEERING ETHOS & INFRASTRUCTURE",
  title = "Culture Architecture & Lab Reality",
  subtitle = "Engineered for high autonomy, zero bureaucracy, direct feedback, and rapid physical deployment.",
  className = "",
}: FUIBentoGridDarkProps) {
  return (
    <div className={clsx("w-full flex flex-col p-4 sm:p-6 lg:p-10", className)}>
      <div className="text-left max-w-3xl mb-8 sm:mb-12">
        {badge && (
          <span className="text-xs sm:text-sm font-mono font-bold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
            {badge}
          </span>
        )}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 dark:text-white tracking-tight mt-1">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-6">
        <BentoCard
          eyebrow="Insight • 01"
          title="Get perfect clarity"
          description="Autonomous systems built in physical reality. Know your flight telemetry, actuator limits, and real-world forces before field deployment."
          graphic={
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
          }
          fade={["top", "bottom"]}
          className="lg:col-span-3 rounded-2xl"
        />
        <BentoCard
          eyebrow="Analysis • 02"
          title="Undercut your competitors"
          description="Direct hardware prototyping with advanced multi-axis CNC machining, composite curing, and precision dynamometers."
          graphic={
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
          }
          fade={["top", "bottom"]}
          className="lg:col-span-3 rounded-2xl"
        />
        <BentoCard
          eyebrow="Speed • 03"
          title="Built for power users"
          description="Streamlined engineering workflows. Zero bureaucratic friction between schematic design and field validation."
          graphic={
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
          }
          fade={["top", "bottom"]}
          className="lg:col-span-2 rounded-2xl"
        />
        <BentoCard
          eyebrow="Source • 04"
          title="Get the furthest reach"
          description="Tested in open wind, agriculture fields, maritime waters, and high mountain ranges."
          graphic={
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
          }
          fade={["top", "bottom"]}
          className="lg:col-span-2 rounded-2xl"
        />
        <BentoCard
          eyebrow="Limitless • 05"
          title="Sell globally"
          description="Sovereign high-density compute clusters and long-term equity alignment for total engineering focus."
          graphic={
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
          }
          fade={["top", "bottom"]}
          className="lg:col-span-2 rounded-2xl"
        />
      </div>
    </div>
  );
}
