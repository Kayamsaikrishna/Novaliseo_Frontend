import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

// Brand-new, photorealistic physical autonomous systems visuals
import aerialUav from "../assets/loader/loader_aerial_uav.jpg";
import edgeCompute from "../assets/loader/loader_edge_compute.jpg";
import carbonFrame from "../assets/loader/loader_carbon_frame.jpg";
import lidarTerrain from "../assets/loader/loader_lidar_terrain.jpg";

export default function IntroLoader() {
  const [phase, setPhase] = useState<"words" | "reveal" | "split" | "done">("words");
  const [progress, setProgress] = useState(0);

  const introWords = ["PHYSICAL", "REALITY", "OVER", "SIMULATIONS"];

  useEffect(() => {
    // Smooth progress counter over 4.8 seconds for relaxed, cinematic readability
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return Math.min(prev + 2, 100);
      });
    }, 80);

    // Phase 1 -> Phase 2 (Reveal all: Logo, Full Title, and Visual Gallery): at 1800ms
    const tReveal = setTimeout(() => {
      setPhase("reveal");
    }, 1800);

    // Phase 2 -> Phase 3 (Split Screen Doors): at 4800ms (gives a full 3 seconds to see the images!)
    const tSplit = setTimeout(() => {
      setPhase("split");
    }, 4800);

    // Phase 3 -> Phase 4 (Unmount): at 5650ms
    const tDone = setTimeout(() => {
      setPhase("done");
    }, 5650);

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
          className="w-1/2 h-full bg-gradient-to-br from-[#ffffff] via-[#f8fafc] to-[#f1f5f9] border-r border-slate-200/90 relative overflow-hidden shadow-2xl flex items-center justify-end pr-8 sm:pr-14 lg:pr-20"
        >
          {/* Subtle Ambient Blueprint Grid */}
          <div 
            className="absolute inset-0 opacity-[0.22] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#94a3b8 1px, transparent 1px)",
              backgroundSize: "28px 28px"
            }}
          />

          {/* Left Visual Cards: Spacious, Symmetrical, Straight (No Clumsy Overlap) */}
          <div className="flex flex-col gap-5 sm:gap-6 pointer-events-none z-10">
            
            {/* Visual Card 1: Aerial UAV in Mountain Fog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ 
                opacity: phase === "words" ? 0.35 : 1, 
                scale: 1, 
                y: 0 
              }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-48 sm:w-60 lg:w-72 aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.12)] border border-white/90 bg-slate-900 transition-all duration-700"
            >
              <img
                src={aerialUav}
                alt="Autonomous Aerial Vehicle"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-2.5 left-3 sm:bottom-3 sm:left-4">
                <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-widest text-white/95 uppercase drop-shadow-md">
                  AERIAL AUTONOMY
                </span>
              </div>
            </motion.div>

            {/* Visual Card 2: Embedded Edge Silicon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ 
                opacity: phase === "words" ? 0.35 : 1, 
                scale: 1, 
                y: 0 
              }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="w-48 sm:w-60 lg:w-72 aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.12)] border border-white/90 bg-slate-900 transition-all duration-700 hidden sm:block"
            >
              <img
                src={edgeCompute}
                alt="Edge AI Silicon"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-2.5 left-3 sm:bottom-3 sm:left-4">
                <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-widest text-white/95 uppercase drop-shadow-md">
                  EDGE NEURAL SILICON
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
          className="w-1/2 h-full bg-gradient-to-bl from-[#ffffff] via-[#f8fafc] to-[#f1f5f9] border-l border-slate-200/90 relative overflow-hidden shadow-2xl flex items-center justify-start pl-8 sm:pl-14 lg:pl-20"
        >
          {/* Subtle Ambient Blueprint Grid */}
          <div 
            className="absolute inset-0 opacity-[0.22] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#94a3b8 1px, transparent 1px)",
              backgroundSize: "28px 28px"
            }}
          />

          {/* Right Visual Cards: Spacious, Symmetrical, Straight (No Clumsy Overlap) */}
          <div className="flex flex-col gap-5 sm:gap-6 pointer-events-none z-10">
            
            {/* Visual Card 3: 3D LiDAR Point Cloud Terrain Scan */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ 
                opacity: phase === "words" ? 0.35 : 1, 
                scale: 1, 
                y: 0 
              }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="w-48 sm:w-60 lg:w-72 aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.12)] border border-white/90 bg-slate-900 transition-all duration-700"
            >
              <img
                src={lidarTerrain}
                alt="3D LiDAR Perception"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-2.5 right-3 sm:bottom-3 sm:right-4 text-right">
                <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-widest text-white/95 uppercase drop-shadow-md">
                  3D LIDAR SLAM
                </span>
              </div>
            </motion.div>

            {/* Visual Card 4: Carbon Fiber Chassis CNC Machining */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ 
                opacity: phase === "words" ? 0.35 : 1, 
                scale: 1, 
                y: 0 
              }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-48 sm:w-60 lg:w-72 aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.12)] border border-white/90 bg-slate-900 transition-all duration-700 hidden sm:block"
            >
              <img
                src={carbonFrame}
                alt="Carbon Composite Prototyping"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-2.5 right-3 sm:bottom-3 sm:right-4 text-right">
                <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-widest text-white/95 uppercase drop-shadow-md">
                  COMPOSITE HARDWARE
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
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-30 px-6 text-center"
          >
            <div className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-5 gap-y-2 max-w-2xl">
              {introWords.map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.25,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="font-mono text-sm sm:text-base md:text-lg font-semibold tracking-[0.28em] text-slate-800 uppercase drop-shadow-xs"
                >
                  {word}
                </motion.span>
              ))}
            </div>

            {/* Subtle Minimal Line Indicator */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
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
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-30 px-6 text-center"
          >
            {/* Logo Mark with Soft Ambient Glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-4"
            >
              <div className="absolute -inset-6 rounded-full bg-cyan-400/25 blur-2xl animate-pulse" />
              <img
                src={logo}
                alt="Novaliseo"
                className="h-14 sm:h-16 md:h-20 object-contain relative z-10 drop-shadow-sm"
              />
            </motion.div>

            {/* Full Company Name: Novaliseo Global Tech Pvt Ltd (Clean & Refined) */}
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-xl md:text-2xl font-bold text-slate-900 tracking-[0.18em] uppercase mb-2"
            >
              Novaliseo Global Tech Pvt Ltd
            </motion.h2>

            {/* Subtitle Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-[11px] sm:text-xs font-mono font-semibold tracking-[0.24em] text-slate-500 uppercase mb-6"
            >
              Brain Behind Intelligent Operations
            </motion.p>

            {/* Precision Loading Line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-36 sm:w-48 h-1 rounded-full bg-slate-200 overflow-hidden"
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
