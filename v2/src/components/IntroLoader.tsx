import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

// Brand-new, photorealistic physical autonomous systems visuals
import aerialUav from "../assets/loader/loader_aerial_uav.jpg";
import edgeCompute from "../assets/loader/loader_edge_compute.jpg";
import carbonFrame from "../assets/loader/loader_carbon_frame.jpg";
import lidarTerrain from "../assets/loader/loader_lidar_terrain.jpg";
import navalVessel from "../assets/loader/loader_naval_vessel.jpg";
import groundRover from "../assets/loader/loader_ground_rover.jpg";

export default function IntroLoader() {
  const [phase, setPhase] = useState<"words" | "reveal" | "split" | "done">("words");
  const [progress, setProgress] = useState(0);

  const introWords = ["PHYSICAL", "REALITY", "OVER", "SIMULATIONS"];

  useEffect(() => {
    // Smooth progress counter over 2.6 seconds
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return Math.min(prev + 3, 100);
      });
    }, 45);

    // Phase 1 -> Phase 2 (Reveal all: Full Company Title & Logo): at 1300ms
    const tReveal = setTimeout(() => {
      setPhase("reveal");
    }, 1300);

    // Phase 2 -> Phase 3 (Split Screen Doors): at 2600ms
    const tSplit = setTimeout(() => {
      setPhase("split");
    }, 2600);

    // Phase 3 -> Phase 4 (Unmount): at 3450ms
    const tDone = setTimeout(() => {
      setPhase("done");
    }, 3450);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(tReveal);
      clearTimeout(tSplit);
      clearTimeout(tDone);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div className="fixed inset-0 z-[99999] pointer-events-none select-none overflow-hidden font-sans">
      
      {/* ================= SPLIT SCREEN DOORS (CLEAN DAYLIGHT FINISH) ================= */}
      <div className="absolute inset-0 flex pointer-events-auto">
        
        {/* ================= LEFT DOOR ================= */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: phase === "split" ? "-100%" : 0 }}
          transition={{ duration: 0.85, ease: [0.77, 0, 0.175, 1] }}
          className="w-1/2 h-full bg-gradient-to-br from-[#ffffff] via-[#f8fafc] to-[#f1f5f9] border-r border-slate-200/90 relative overflow-hidden shadow-2xl"
        >
          {/* Subtle Ambient Blueprint Grid */}
          <div 
            className="absolute inset-0 opacity-[0.22] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#94a3b8 1px, transparent 1px)",
              backgroundSize: "28px 28px"
            }}
          />

          {/* Left Collage Cards */}
          <div className="absolute inset-0 pointer-events-none">
            
            {/* Visual Card 1: Aerial UAV in Mountain Fog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30, rotate: -2 }}
              animate={{ 
                opacity: phase === "words" ? 0.45 : 1, 
                scale: 1, 
                y: 0, 
                rotate: -2 
              }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-6 sm:left-12 lg:left-16 top-10 sm:top-14 w-44 sm:w-56 lg:w-64 aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(15,23,42,0.18)] border border-white/80 transition-all duration-700"
            >
              <img
                src={aerialUav}
                alt="Autonomous Aerial Vehicle"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-white/95 uppercase drop-shadow-md">
                  AERIAL AUTONOMY
                </span>
              </div>
            </motion.div>

            {/* Visual Card 2: Embedded Edge Silicon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 35, rotate: 2 }}
              animate={{ 
                opacity: phase === "words" ? 0.35 : 1, 
                scale: 1, 
                y: 0, 
                rotate: 2 
              }}
              transition={{ duration: 0.85, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-10 sm:left-20 lg:left-28 bottom-8 sm:bottom-12 w-40 sm:w-52 lg:w-60 aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(15,23,42,0.18)] border border-white/80 transition-all duration-700 hidden sm:block"
            >
              <img
                src={edgeCompute}
                alt="Edge AI Silicon"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-white/95 uppercase drop-shadow-md">
                  EDGE NEURAL SILICON
                </span>
              </div>
            </motion.div>

            {/* Visual Card 3: Deep Maritime Unmanned Vessel (Desktop) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88, x: -30 }}
              animate={{ 
                opacity: phase === "words" ? 0.3 : 0.95, 
                scale: 1, 
                x: 0 
              }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -left-12 lg:left-4 top-1/2 -translate-y-1/2 w-36 sm:w-44 lg:w-48 aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.15)] border border-white/80 transition-all duration-700 hidden xl:block"
            >
              <img
                src={navalVessel}
                alt="Naval Autonomy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3">
                <span className="text-[10px] font-mono font-bold tracking-widest text-white/95 uppercase drop-shadow-md">
                  MARITIME USV
                </span>
              </div>
            </motion.div>

          </div>
        </motion.div>

        {/* ================= RIGHT DOOR ================= */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: phase === "split" ? "100%" : 0 }}
          transition={{ duration: 0.85, ease: [0.77, 0, 0.175, 1] }}
          className="w-1/2 h-full bg-gradient-to-bl from-[#ffffff] via-[#f8fafc] to-[#f1f5f9] border-l border-slate-200/90 relative overflow-hidden shadow-2xl"
        >
          {/* Subtle Ambient Blueprint Grid */}
          <div 
            className="absolute inset-0 opacity-[0.22] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#94a3b8 1px, transparent 1px)",
              backgroundSize: "28px 28px"
            }}
          />

          {/* Right Collage Cards */}
          <div className="absolute inset-0 pointer-events-none">
            
            {/* Visual Card 4: 3D LiDAR Point Cloud Terrain Scan */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30, rotate: 2 }}
              animate={{ 
                opacity: phase === "words" ? 0.45 : 1, 
                scale: 1, 
                y: 0, 
                rotate: 2 
              }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-6 sm:right-12 lg:right-16 top-10 sm:top-14 w-44 sm:w-56 lg:w-64 aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(15,23,42,0.18)] border border-white/80 transition-all duration-700"
            >
              <img
                src={lidarTerrain}
                alt="3D LiDAR Perception"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 text-right">
                <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-white/95 uppercase drop-shadow-md">
                  3D LIDAR SLAM
                </span>
              </div>
            </motion.div>

            {/* Visual Card 5: Carbon Fiber Chassis CNC Machining */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 35, rotate: -2 }}
              animate={{ 
                opacity: phase === "words" ? 0.35 : 1, 
                scale: 1, 
                y: 0, 
                rotate: -2 
              }}
              transition={{ duration: 0.85, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-10 sm:right-20 lg:right-28 bottom-8 sm:bottom-12 w-40 sm:w-52 lg:w-60 aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(15,23,42,0.18)] border border-white/80 transition-all duration-700 hidden sm:block"
            >
              <img
                src={carbonFrame}
                alt="Carbon Composite Prototyping"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 text-right">
                <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-white/95 uppercase drop-shadow-md">
                  COMPOSITE HARDWARE
                </span>
              </div>
            </motion.div>

            {/* Visual Card 6: All-Terrain Ground Rover (Desktop) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88, x: 30 }}
              animate={{ 
                opacity: phase === "words" ? 0.3 : 0.95, 
                scale: 1, 
                x: 0 
              }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -right-12 lg:right-4 top-1/2 -translate-y-1/2 w-36 sm:w-44 lg:w-48 aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.15)] border border-white/80 transition-all duration-700 hidden xl:block"
            >
              <img
                src={groundRover}
                alt="All-Terrain Rover"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 right-3 text-right">
                <span className="text-[10px] font-mono font-bold tracking-widest text-white/95 uppercase drop-shadow-md">
                  PHYSICAL AUTONOMY
                </span>
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>

      {/* ================= CENTER STAGE CONTENT ================= */}
      <AnimatePresence mode="wait">
        
        {/* PHASE 1: FEW WORDS FIRST (HOOK THE VISITOR BEFORE REVEALING) */}
        {phase === "words" && (
          <motion.div
            key="words-phase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-30 px-6 text-center"
          >
            <div className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-5 gap-y-2 max-w-2xl">
              {introWords.map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: i * 0.22,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="font-mono text-xs sm:text-sm md:text-base font-semibold tracking-[0.28em] text-slate-800 uppercase drop-shadow-xs"
                >
                  {word}
                </motion.span>
              ))}
            </div>

            {/* Subtle Minimal Line Indicator */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
              className="w-16 sm:w-24 h-0.5 bg-slate-300 rounded-full mt-6"
            />
          </motion.div>
        )}

        {/* PHASE 2: THEN REVEAL ALL (LOGO & FULL COMPANY TITLE: NOVALISEO GLOBAL TECH PVT LTD) */}
        {phase === "reveal" && (
          <motion.div
            key="reveal-phase"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.94 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-30 px-6 text-center"
          >
            {/* Logo Mark with Soft Ambient Glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-3.5"
            >
              <div className="absolute -inset-6 rounded-full bg-cyan-400/25 blur-2xl animate-pulse" />
              <img
                src={logo}
                alt="Novaliseo"
                className="h-12 sm:h-14 md:h-16 object-contain relative z-10 drop-shadow-sm"
              />
            </motion.div>

            {/* Full Company Name: Novaliseo Global Tech Pvt Ltd (Clean & Refined) */}
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-xl md:text-2xl font-bold text-slate-900 tracking-[0.18em] uppercase mb-1.5"
            >
              Novaliseo Global Tech Pvt Ltd
            </motion.h2>

            {/* Subtitle Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[11px] sm:text-xs font-mono font-semibold tracking-[0.24em] text-slate-500 uppercase mb-5"
            >
              Brain Behind Intelligent Operations
            </motion.p>

            {/* Precision Loading Line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="w-36 sm:w-44 h-1 rounded-full bg-slate-200 overflow-hidden"
            >
              <motion.div
                className="h-full bg-slate-950 rounded-full transition-all duration-100"
                style={{ width: `${progress}%` }}
              />
            </motion.div>

          </motion.div>
        )}

      </AnimatePresence>

    </div>
  );
}
