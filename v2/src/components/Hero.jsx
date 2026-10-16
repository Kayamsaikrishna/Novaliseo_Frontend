import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import earthDawnBg from "../assets/novaliseo_earth_dawn.jpg";
import icon from "../assets/icon.png";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen lg:h-screen flex items-end justify-start overflow-hidden bg-white selection:bg-sky-500/20 pt-28 pb-20 md:pb-28 2xl:pb-36 px-6 sm:px-10 lg:px-16 2xl:px-24">
      
      {/* 1. PANORAMIC ATMOSPHERIC BACKGROUND (EARTH AT DAWN WITH CELESTIAL SKY & LIGHT MIST) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center select-none"
        style={{
          backgroundImage: `url(${earthDawnBg})`,
          backgroundPosition: "center 20%",
        }}
      />

      {/* 2. SOFT LUMINOUS MIST (LOCALIZED UNDER TEXT FOR LEGIBILITY WITHOUT DROWNING EARTH) */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 45% 40% at 18% 85%, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.4) 45%, transparent 80%)",
        }}
      />

      {/* 3. SUBTLE BOTTOM TRANSITION FADE */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/70 to-transparent pointer-events-none z-10" />

      {/* ================= HERO EDITORIAL CONTENT (LEFT-ALIGNED, BOLD, CLEAN) ================= */}
      <div className="relative z-20 w-full max-w-4xl 2xl:max-w-6xl text-left">
        
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] 2xl:text-[92px] font-medium tracking-[-0.035em] text-[#0f172a] leading-[1.04] mb-6 2xl:mb-8"
        >
          Intelligent solutions <br />
          at your fingertips
        </motion.h1>

        {/* Narrative Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg md:text-xl 2xl:text-2xl text-[#334155] font-normal leading-relaxed max-w-xl 2xl:max-w-3xl mb-10 2xl:mb-14"
        >
          Novaliseo builds next-generation intelligent solutions across critical industries. Advanced engineering, autonomous systems, and data intelligence designed to empower modern operations.
        </motion.p>

        {/* Action Group: Sleek Dark Button with Icon Badge + Text Link */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
        >
          {/* Primary Action Button */}
          <Link
            to="/projects"
            className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#0a0f1d] hover:bg-[#1e293b] text-white font-medium text-sm tracking-tight transition-all duration-200 shadow-[0_10px_25px_rgba(15,23,42,0.25)] hover:scale-[1.02] active:scale-[0.98] group"
          >
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-sky-400 via-blue-500 to-indigo-600 p-1 flex items-center justify-center shadow-inner">
              <img src={icon} alt="" className="w-full h-full object-contain filter drop-shadow-[0_0_4px_rgba(255,255,255,0.8)]" />
            </div>
            <span className="pr-1 font-medium">Explore Solutions</span>
          </Link>

          {/* Secondary Inline Link */}
          <Link
            to="/about"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1e293b] hover:text-black transition-colors group py-2"
          >
            <span>About Novaliseo</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#475569] group-hover:text-black" />
          </Link>
        </motion.div>

      </div>

    </section>
  );
}
