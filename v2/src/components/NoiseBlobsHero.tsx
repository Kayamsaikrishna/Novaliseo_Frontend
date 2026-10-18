import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import multidomainHero from "../assets/trainings/multidomain_autonomous_hero.jpg";

export default function NoiseBlobsHero() {
  const scrollToTracks = () => {
    const el = document.getElementById("training-tracks");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative w-full h-[100dvh] max-h-screen flex items-center justify-center overflow-hidden select-none bg-[#090d16]">
      
      {/* ================= 1. MULTI-DOMAIN AUTONOMOUS SYSTEMS CINEMATIC BACKGROUND ================= */}
      <div className="absolute inset-0 z-0">
        <img
          src={multidomainHero}
          alt="Novaliseo Multi-Domain Autonomous Transportation and Robotics Testbed"
          className="w-full h-full object-cover object-center scale-100 transition-transform duration-1000 ease-out"
        />

        {/* Soft Radial Mist Overlay on the Left for 100% Crisp Text Contrast */}
        <div 
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background: "radial-gradient(ellipse 65% 85% at 20% 50%, rgba(255, 255, 255, 0.94) 0%, rgba(255, 255, 255, 0.82) 42%, rgba(255, 255, 255, 0.20) 78%, transparent 100%)"
          }}
        />

        {/* Top Vignette for Navbar Readability */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/75 via-white/30 to-transparent pointer-events-none z-10" />

        {/* Bottom Soft Transition Fade into Next Section */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#f8fafc] via-[#f8fafc]/60 to-transparent pointer-events-none z-10" />
      </div>

      {/* ================= 2. MAIN EDITORIAL HERO CONTENT ================= */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-24 sm:pt-28 pb-8 flex items-center my-auto">
        
        {/* Left-Aligned Editorial Column */}
        <div className="max-w-xl lg:max-w-2xl text-left">
          
          {/* Category Eyebrow Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 mb-3.5 sm:mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-[10px] sm:text-xs font-mono font-semibold tracking-[0.24em] text-slate-500 uppercase">
              Autonomous Transportation, Robotics &amp; Intelligence
            </span>
          </motion.div>

          {/* Master Headline: Editorial Serif with Slanting Italics */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[88px] font-normal font-serif text-[#1e293b] leading-[0.98] tracking-tight mb-4 sm:mb-5 drop-shadow-xs"
          >
            Mastery in <br />
            <span className="italic text-[#0f172a] block mt-1">
              transport &amp; autonomy
            </span>
          </motion.h1>

          {/* Multi-Domain Training Narrative */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs sm:text-sm md:text-[15px] lg:text-base text-slate-600 font-normal leading-relaxed mb-6 sm:mb-7 max-w-md sm:max-w-xl"
          >
            We transition engineers from theoretical simulation into physical hardware across autonomous transport vehicles, unmanned aerial robotics, industrial kinematics, and real-time edge intelligence. Production-grade kits, real deployment arenas, and zero fluff.
          </motion.p>

          {/* Action Button Group */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-5 sm:gap-6 mb-7 sm:mb-9"
          >
            {/* Warm Amber Pill Button */}
            <button
              onClick={scrollToTracks}
              className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#f59e0b] hover:bg-[#d97706] text-slate-950 font-semibold text-xs sm:text-sm tracking-tight transition-all duration-200 shadow-[0_10px_25px_rgba(245,158,11,0.35)] hover:scale-105 active:scale-95"
            >
              Explore Tracks
            </button>

            {/* Inline Diagonal Link */}
            <a
              href="/partner"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-800 hover:text-slate-950 transition-colors group py-2"
            >
              <span>View curriculum &amp; labs</span>
              <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-slate-950 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          {/* Multi-Domain Coverage Strip (Proves Complete Training Scope) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-5 border-t border-slate-300/70 flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono font-medium text-slate-600"
          >
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-600" />
              Ground Autonomy &amp; UGVs
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              Aerial UAVs &amp; Swarms
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
              Robotics &amp; Edge Vision
            </span>
          </motion.div>

        </div>

      </div>

    </section>
  );
}
