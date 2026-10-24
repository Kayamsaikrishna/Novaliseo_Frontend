import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Panoramic High-Tech Background Visual
import earthDawn from "../assets/novaliseo_earth_dawn.jpg";

// Photorealistic Physical Autonomous Systems Visuals
import aerialUav from "../assets/loader/loader_aerial_uav.jpg";
import edgeCompute from "../assets/loader/loader_edge_compute.jpg";
import carbonFrame from "../assets/loader/loader_carbon_frame.jpg";
import lidarTerrain from "../assets/loader/loader_lidar_terrain.jpg";

export default function IntroLoader() {
  const [phase, setPhase] = useState<"toss" | "settle" | "open" | "done">("toss");

  useEffect(() => {
    // Stage 1: Single Dignified 3D Coin Toss & Landing (0 -> 1500ms)
    const tSettle = setTimeout(() => {
      setPhase("settle");
    }, 1500);

    // Stage 2: Settle & Lens Gleam, Clean Brand Presence (1500 -> 2700ms)
    const tOpen = setTimeout(() => {
      setPhase("open");
    }, 2700);

    // Stage 3: Split Curtains Part Open Cleanly & Unmount (2700 -> 3550ms)
    const tDone = setTimeout(() => {
      setPhase("done");
    }, 3550);

    return () => {
      clearTimeout(tSettle);
      clearTimeout(tOpen);
      clearTimeout(tDone);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div className="fixed inset-0 z-[99999] pointer-events-none select-none overflow-hidden font-sans">
      
      {/* ================= SEAMLESS PANORAMIC SPLIT CURTAINS ================= */}
      <div className="absolute inset-0 flex pointer-events-auto">
        
        {/* Left Door */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: phase === "open" ? "-100%" : 0 }}
          transition={{ duration: 0.85, ease: [0.77, 0, 0.175, 1] }}
          className="w-1/2 h-full relative overflow-hidden bg-slate-950 border-r border-cyan-500/30 shadow-[20px_0_50px_rgba(0,0,0,0.6)]"
        >
          {/* Left Half of Panoramic Background Image */}
          <div className="absolute top-0 left-0 w-[100vw] h-full pointer-events-none">
            <img
              src={earthDawn}
              alt=""
              className="w-full h-full object-cover object-center"
            />
            {/* Atmospheric Deep Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/60 to-slate-950/40 backdrop-blur-[1px]" />
          </div>
        </motion.div>

        {/* Right Door */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: phase === "open" ? "100%" : 0 }}
          transition={{ duration: 0.85, ease: [0.77, 0, 0.175, 1] }}
          className="w-1/2 h-full relative overflow-hidden bg-slate-950 border-l border-cyan-500/30 shadow-[-20px_0_50px_rgba(0,0,0,0.6)]"
        >
          {/* Right Half of Panoramic Background Image */}
          <div className="absolute top-0 right-0 w-[100vw] h-full pointer-events-none">
            <img
              src={earthDawn}
              alt=""
              className="w-full h-full object-cover object-center"
            />
            {/* Atmospheric Deep Overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-slate-950/80 via-slate-950/60 to-slate-950/40 backdrop-blur-[1px]" />
          </div>
        </motion.div>

      </div>

      {/* ================= STRUCTURED RESPONSIVE STAGE (ZERO OVERLAP / CLEAN LAYOUT) ================= */}
      <div className="absolute inset-0 z-30 pointer-events-none flex flex-col justify-center py-6 sm:py-8 lg:py-12 px-6 sm:px-10 lg:px-16 xl:px-20 max-w-[1700px] mx-auto">
        
        {/* --- MAIN 3-COLUMN CONTENT ROW --- */}
        <div className="flex items-center justify-between gap-6 lg:gap-10 xl:gap-16 relative w-full">
          
          {/* === LEFT COLUMN: 2 VISUAL HARDWARE CARDS (SECURE LEFT WING) === */}
          <motion.div 
            animate={{ 
              x: phase === "open" ? -140 : 0, 
              opacity: phase === "open" ? 0 : 1 
            }}
            transition={{ duration: 0.7, ease: [0.77, 0, 0.175, 1] }}
            className="hidden lg:flex flex-col gap-5 xl:gap-6 w-48 xl:w-56 shrink-0 pointer-events-none"
          >
            {/* Card 1: Aerial Flight Autonomy */}
            <motion.div
              initial={{ opacity: 0, x: -30, scale: 0.95 }}
              animate={{ 
                opacity: 1, 
                x: 0, 
                scale: 1,
                y: [0, -5, 0]
              }}
              transition={{ 
                opacity: { duration: 0.7, delay: 0.15 },
                x: { duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] },
                y: { duration: 4.2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="aspect-[4/3] rounded-2xl p-1 bg-slate-900/60 backdrop-blur-md border border-white/20 shadow-[0_20px_45px_rgba(0,0,0,0.5)]"
            >
              <div className="w-full h-full rounded-xl overflow-hidden relative bg-slate-900">
                <img
                  src={aerialUav}
                  alt="Autonomous Aerial Flight Systems"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 left-3">
                  <span className="text-[9px] xl:text-[10px] font-mono font-bold tracking-widest text-cyan-300 uppercase drop-shadow-md">
                    AERIAL AUTONOMY
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Embedded Edge Silicon */}
            <motion.div
              initial={{ opacity: 0, x: -30, scale: 0.95 }}
              animate={{ 
                opacity: 1, 
                x: 0, 
                scale: 1,
                y: [0, 5, 0]
              }}
              transition={{ 
                opacity: { duration: 0.7, delay: 0.3 },
                x: { duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] },
                y: { duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
              }}
              className="aspect-[4/3] rounded-2xl p-1 bg-slate-900/60 backdrop-blur-md border border-white/20 shadow-[0_20px_45px_rgba(0,0,0,0.5)]"
            >
              <div className="w-full h-full rounded-xl overflow-hidden relative bg-slate-900">
                <img
                  src={edgeCompute}
                  alt="Edge Neural Silicon Architecture"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 left-3">
                  <span className="text-[9px] xl:text-[10px] font-mono font-bold tracking-widest text-cyan-300 uppercase drop-shadow-md">
                    EDGE NEURAL SILICON
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* === CENTER COLUMN: DEDICATED ARENA (COIN TOSS + BRAND TITLE) === */}
          <div 
            className="flex-1 flex flex-col items-center justify-center text-center max-w-lg mx-auto pointer-events-none z-20"
            style={{ perspective: 1400 }}
          >
            {/* Luminous Atmospheric Center Glow Aura */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ 
                opacity: phase === "open" ? 0 : [0.35, 0.75, 0.55],
                scale: phase === "open" ? 1.5 : 1
              }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute w-72 sm:w-84 md:w-96 aspect-square rounded-full bg-gradient-to-tr from-cyan-500/25 via-blue-600/20 to-purple-600/15 blur-3xl pointer-events-none"
            />

            {/* 3D Coin Toss: SINGLE MAJESTIC FLIP (0 -> 360 deg) */}
            <motion.div
              initial={{
                opacity: 0,
                y: 55,
                scale: 0.75,
                rotateY: 0,
                rotateX: 16,
              }}
              animate={
                phase === "open"
                  ? {
                      opacity: 0,
                      scale: 1.3,
                      filter: "brightness(1.2) blur(5px)",
                      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] }
                    }
                  : {
                      opacity: [0, 1, 1],
                      y: [55, -28, 0],
                      scale: [0.75, 1.08, 1.0],
                      rotateY: [0, 180, 360], // Exactly ONE single 360 flip!
                      rotateX: [16, -10, 0],
                    }
              }
              transition={{
                duration: 1.5,
                times: [0, 0.5, 1],
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative flex flex-col items-center justify-center"
            >
              
              {/* Circular Novaliseo Ecosystem Medallion (from About Page) */}
              <div className="relative group w-40 sm:w-52 md:w-60 lg:w-68 aspect-square rounded-full p-1 bg-gradient-to-tr from-cyan-400 via-slate-300 to-blue-500 shadow-[0_0_50px_rgba(6,182,212,0.4),0_25px_60px_rgba(0,0,0,0.6)] flex items-center justify-center">
                
                {/* Metallic Bezel Rim */}
                <div className="w-full h-full rounded-full overflow-hidden border border-white/30 bg-slate-950 relative flex items-center justify-center">
                  <img
                    src="/images/about_hero.jpeg"
                    alt="Novaliseo Ecosystem Medallion"
                    className="w-full h-full object-cover scale-[1.02]"
                  />

                  {/* Lens Sheen Sweep upon Landing */}
                  <motion.div
                    initial={{ x: "-160%", opacity: 0 }}
                    animate={{
                      x: phase === "settle" || phase === "open" ? "180%" : "-160%",
                      opacity: phase === "settle" || phase === "open" ? [0, 0.85, 0] : 0,
                    }}
                    transition={{ duration: 0.85, ease: "easeInOut" }}
                    className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/70 to-transparent skew-x-[-25deg] pointer-events-none"
                  />
                </div>

                {/* Glowing Ring Halo */}
                <div className="absolute -inset-1 rounded-full border border-cyan-400/40 animate-pulse pointer-events-none" />
              </div>

              {/* Dynamic Contact Floor Shadow */}
              <motion.div
                initial={{ scale: 0.45, opacity: 0.2 }}
                animate={
                  phase === "open"
                    ? { scale: 1.3, opacity: 0, transition: { duration: 0.6 } }
                    : {
                        scale: [0.45, 0.7, 1.0],
                        opacity: [0.2, 0.35, 0.6],
                      }
                }
                transition={{
                  duration: 1.5,
                  times: [0, 0.5, 1],
                  ease: "easeInOut",
                }}
                className="w-32 sm:w-44 md:w-52 h-4 rounded-[100%] bg-cyan-950/70 blur-lg mt-5 pointer-events-none"
              />

            </motion.div>

            {/* --- CLEAN BRAND TYPOGRAPHY (SHORT SIMPLE ENGLISH TAGLINE) --- */}
            <AnimatePresence>
              {(phase === "settle" || phase === "open") && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={
                    phase === "open"
                      ? { opacity: 0, y: -8, transition: { duration: 0.4 } }
                      : { opacity: 1, y: 0 }
                  }
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-6 flex flex-col items-center text-center pointer-events-none z-30 px-2"
                >
                  {/* Full Official Company Name */}
                  <h2 className="text-sm sm:text-base md:text-lg font-bold tracking-[0.22em] text-white uppercase drop-shadow-md whitespace-nowrap">
                    Novaliseo Global Tech Pvt Ltd
                  </h2>

                  {/* Short, Simple English Tagline */}
                  <p className="mt-1.5 text-[10px] sm:text-[11px] md:text-xs font-mono font-medium tracking-[0.22em] text-cyan-300 uppercase drop-shadow-sm">
                    Building Autonomous Systems
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* === RIGHT COLUMN: 2 VISUAL HARDWARE CARDS (SECURE RIGHT WING) === */}
          <motion.div 
            animate={{ 
              x: phase === "open" ? 140 : 0, 
              opacity: phase === "open" ? 0 : 1 
            }}
            transition={{ duration: 0.7, ease: [0.77, 0, 0.175, 1] }}
            className="hidden lg:flex flex-col gap-5 xl:gap-6 w-48 xl:w-56 shrink-0 pointer-events-none"
          >
            {/* Card 3: 3D Spatial LiDAR Perception */}
            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.95 }}
              animate={{ 
                opacity: 1, 
                x: 0, 
                scale: 1,
                y: [0, -5, 0]
              }}
              transition={{ 
                opacity: { duration: 0.7, delay: 0.2 },
                x: { duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
                y: { duration: 4.4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }
              }}
              className="aspect-[4/3] rounded-2xl p-1 bg-slate-900/60 backdrop-blur-md border border-white/20 shadow-[0_20px_45px_rgba(0,0,0,0.5)]"
            >
              <div className="w-full h-full rounded-xl overflow-hidden relative bg-slate-900">
                <img
                  src={lidarTerrain}
                  alt="3D LiDAR Perception & Mapping"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 right-3 text-right">
                  <span className="text-[9px] xl:text-[10px] font-mono font-bold tracking-widest text-cyan-300 uppercase drop-shadow-md">
                    3D LIDAR PERCEPTION
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Card 4: Carbon Composite CNC Machining */}
            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.95 }}
              animate={{ 
                opacity: 1, 
                x: 0, 
                scale: 1,
                y: [0, 5, 0]
              }}
              transition={{ 
                opacity: { duration: 0.7, delay: 0.35 },
                x: { duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] },
                y: { duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }
              }}
              className="aspect-[4/3] rounded-2xl p-1 bg-slate-900/60 backdrop-blur-md border border-white/20 shadow-[0_20px_45px_rgba(0,0,0,0.5)]"
            >
              <div className="w-full h-full rounded-xl overflow-hidden relative bg-slate-900">
                <img
                  src={carbonFrame}
                  alt="Composite Hardware Prototyping"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 right-3 text-right">
                  <span className="text-[9px] xl:text-[10px] font-mono font-bold tracking-widest text-cyan-300 uppercase drop-shadow-md">
                    COMPOSITE HARDWARE
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>

      </div>

    </div>
  );
}
