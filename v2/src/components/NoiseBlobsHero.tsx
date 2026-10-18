import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";

import droneMountainHero from "../assets/trainings/drone_mountain_hero.jpg";
import droneSensorMacro from "../assets/trainings/drone_sensor_macro.jpg";
import groundRobotMacro from "../assets/trainings/ground_robot_macro.jpg";

export default function NoiseBlobsHero() {
  const scrollToTracks = () => {
    const el = document.getElementById("training-tracks");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative w-full h-[100dvh] max-h-screen flex items-center justify-center overflow-hidden select-none bg-[#090d16]">
      
      {/* ================= 1. CINEMATIC MULTI-DOMAIN AUTONOMOUS HORIZON BACKGROUND ================= */}
      <div className="absolute inset-0 z-0">
        <img
          src={droneMountainHero}
          alt="Novaliseo Autonomous Systems in Multi-Domain Operating Environment"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />

        {/* Atmospheric Mountain Mist & Soft Vignettes */}
        {/* Soft Left Luminous Radial Mist (Guarantees 100% Text Contrast & Readability) */}
        <div 
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background: "radial-gradient(ellipse 65% 75% at 22% 52%, rgba(255, 255, 255, 0.94) 0%, rgba(255, 255, 255, 0.82) 42%, rgba(255, 255, 255, 0.25) 75%, transparent 100%)"
          }}
        />

        {/* Top Gradient for Clean Navbar Readability */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/70 via-white/30 to-transparent pointer-events-none z-10" />

        {/* Bottom Soft Transition Gradient */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#f8fafc] via-[#f8fafc]/60 to-transparent pointer-events-none z-10" />

        {/* Right Subtle Depth Vignette */}
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black/25 to-transparent pointer-events-none z-10 hidden lg:block" />
      </div>

      {/* ================= 2. MAIN EDITORIAL HERO CONTENT ================= */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-24 sm:pt-28 pb-8 flex flex-col lg:flex-row items-center lg:items-end justify-between gap-10 sm:gap-12 my-auto">
        
        {/* ================= LEFT COLUMN: EDITORIAL SERIF TYPOGRAPHY ================= */}
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

          {/* Master Headline: Editorial Serif with Slanting Italics (Eagle Style) */}
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

          {/* Comprehensive Editorial Narrative */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs sm:text-sm md:text-[15px] lg:text-base text-slate-600 font-normal leading-relaxed mb-6 sm:mb-7 max-w-md sm:max-w-lg"
          >
            We transition engineers from theoretical simulation into physical hardware across autonomous transport vehicles, unmanned aerial robotics, industrial kinematics, and real-time edge intelligence. Production-grade kits, real deployment arenas, and zero fluff.
          </motion.p>

          {/* Action Button Group (Eagle Style Warm Amber Pill + Angled Text Link) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-5 sm:gap-6"
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

        </div>

        {/* ================= RIGHT COLUMN: FLOATING ARCHITECTURAL SPEC CARDS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start lg:items-end w-full lg:w-auto"
        >
          {/* Social Proof Header Pill (High Contrast Glass Pill) */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-2xs mb-3.5">
            <div className="flex -space-x-1.5">
              <div className="w-5 h-5 rounded-full bg-slate-950 border border-white flex items-center justify-center text-[8px] font-bold text-white shadow-2xs">
                AI
              </div>
              <div className="w-5 h-5 rounded-full bg-blue-600 border border-white flex items-center justify-center text-[8px] font-bold text-white shadow-2xs">
                AGV
              </div>
              <div className="w-5 h-5 rounded-full bg-cyan-600 border border-white flex items-center justify-center text-[8px] font-bold text-white shadow-2xs">
                ROS
              </div>
            </div>
            <span className="text-[10px] sm:text-[11px] font-mono tracking-wider font-bold text-slate-700 uppercase">
              Trained 500+ Engineers &amp; Defense Labs
            </span>
          </div>

          {/* Cards Row: Two Floating Glass Cards with Top Tab Notches */}
          <div className="flex flex-row items-center gap-3 sm:gap-4 max-w-full">
            
            {/* Card 1: Optical Detection & Edge Latency */}
            <div className="w-40 sm:w-48 rounded-[20px] bg-black/80 hover:bg-black/90 backdrop-blur-2xl border border-white/20 p-2.5 sm:p-3 text-white shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-[1.03] group/card">
              {/* Top Tab Notch Header */}
              <div className="flex items-center justify-end mb-1.5 px-1">
                <span className="text-[9px] sm:text-[10px] font-mono font-medium text-slate-400 uppercase tracking-widest">
                  Perception
                </span>
              </div>

              {/* Macro Preview Image */}
              <div className="relative w-full aspect-square rounded-[14px] overflow-hidden mb-2 bg-slate-900 border border-white/10">
                <img
                  src={droneSensorMacro}
                  alt="Multi-Spectral Optical Sensor"
                  className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
                <p className="absolute bottom-1.5 left-2 right-2 text-[9px] text-slate-300 font-medium leading-tight line-clamp-2">
                  Multi-spectral vision, SLAM &amp; real-time edge inference
                </p>
              </div>

              {/* Large Metric & Indicator Dots */}
              <div className="px-1 pt-1">
                <div className="text-xl sm:text-2xl font-bold font-mono tracking-tight text-white leading-none">
                  12ms
                </div>
                <div className="flex items-center gap-1 mt-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400/50" />
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400/25" />
                </div>
              </div>
            </div>

            {/* Card 2: Autonomous Ground Mobility & Drivetrain Kinematics */}
            <div className="w-40 sm:w-48 rounded-[20px] bg-black/80 hover:bg-black/90 backdrop-blur-2xl border border-white/20 p-2.5 sm:p-3 text-white shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-[1.03] group/card">
              {/* Top Tab Notch Header */}
              <div className="flex items-center justify-end mb-1.5 px-1">
                <span className="text-[9px] sm:text-[10px] font-mono font-medium text-slate-400 uppercase tracking-widest">
                  Mobility
                </span>
              </div>

              {/* Macro Preview Image */}
              <div className="relative w-full aspect-square rounded-[14px] overflow-hidden mb-2 bg-slate-900 border border-white/10">
                <img
                  src={groundRobotMacro}
                  alt="Autonomous Ground Vehicle Drivetrain & Kinematics"
                  className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
                <p className="absolute bottom-1.5 left-2 right-2 text-[9px] text-slate-300 font-medium leading-tight line-clamp-2">
                  Autonomous ground rovers, flight stacks &amp; kinematics
                </p>
              </div>

              {/* Large Metric & Indicator Dots */}
              <div className="px-1 pt-1">
                <div className="text-xl sm:text-2xl font-bold font-mono tracking-tight text-white leading-none">
                  100%
                </div>
                <div className="flex items-center gap-1 mt-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/50" />
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/25" />
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>

    </section>
  );
}
