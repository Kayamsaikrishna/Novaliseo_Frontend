import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Photorealistic Physical Autonomous Systems Visuals
import aerialUav from "../assets/loader/loader_aerial_uav.jpg";
import edgeCompute from "../assets/loader/loader_edge_compute.jpg";
import carbonFrame from "../assets/loader/loader_carbon_frame.jpg";
import lidarTerrain from "../assets/loader/loader_lidar_terrain.jpg";

export default function IntroLoader() {
  const [phase, setPhase] = useState<"toss" | "settle" | "open" | "done">("toss");

  useEffect(() => {
    // Stage 1: Medallion 3D Toss & Cards Floating Emergence (0 -> 1800ms)
    const tSettle = setTimeout(() => {
      setPhase("settle");
    }, 1800);

    // Stage 2: Settle & Gleam, Full Brand Presence (1800 -> 3000ms)
    const tOpen = setTimeout(() => {
      setPhase("open");
    }, 3000);

    // Stage 3: Split Curtains Glide Open & Unmount (3000 -> 3850ms)
    const tDone = setTimeout(() => {
      setPhase("done");
    }, 3850);

    return () => {
      clearTimeout(tSettle);
      clearTimeout(tOpen);
      clearTimeout(tDone);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div className="fixed inset-0 z-[99999] pointer-events-none select-none overflow-hidden font-sans">
      
      {/* ================= LUMINOUS DAYLIGHT SPLIT CURTAINS ================= */}
      <div className="absolute inset-0 flex pointer-events-auto">
        
        {/* ================= LEFT DOOR ================= */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: phase === "open" ? "-100%" : 0 }}
          transition={{ duration: 0.85, ease: [0.77, 0, 0.175, 1] }}
          className="w-1/2 h-full bg-gradient-to-br from-[#ffffff] via-[#f8fafc] to-[#f1f5f9] border-r border-slate-200/90 relative overflow-hidden shadow-[15px_0_40px_rgba(15,23,42,0.06)]"
        >
          {/* Architectural Coordinate Blueprint Grid */}
          <div 
            className="absolute inset-0 opacity-[0.24] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#94a3b8 1.2px, transparent 1.2px)",
              backgroundSize: "30px 30px"
            }}
          />

          {/* Top Aerospace Telemetry Coordinate */}
          <div className="absolute top-6 left-6 sm:top-8 sm:left-10 lg:left-14 flex items-center gap-2 pointer-events-none">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-ping" />
            <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-[0.22em] text-slate-500 uppercase">
              SYS // NOVALISEO GLOBAL TECH
            </span>
          </div>

          {/* Bottom Telemetry Coordinate */}
          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-10 lg:left-14 hidden sm:block pointer-events-none">
            <span className="text-[10px] font-mono font-semibold tracking-[0.24em] text-slate-400 uppercase">
              LAT: 12.9716° N // BENGALURU AIRSPACE
            </span>
          </div>

          {/* LEFT VISUAL CARDS: Anchored to Outer Wing (Guaranteed Zero Center Collision) */}
          <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-6 sm:left-10 lg:left-14 xl:left-20 flex-col gap-6 lg:gap-8 pointer-events-none z-10">
            
            {/* Visual Card 1: Aerial Flight Autonomy */}
            <motion.div
              initial={{ opacity: 0, x: -40, scale: 0.94 }}
              animate={{ 
                opacity: 1, 
                x: 0, 
                scale: 1,
                y: [0, -6, 0]
              }}
              transition={{ 
                opacity: { duration: 0.8, delay: 0.2 },
                x: { duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
                y: { duration: 4.2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="w-44 lg:w-56 xl:w-64 aspect-[4/3] rounded-2xl p-1 bg-white/80 backdrop-blur-md border border-slate-200/90 shadow-[0_20px_45px_rgba(15,23,42,0.1)] transition-transform"
            >
              <div className="w-full h-full rounded-xl overflow-hidden relative bg-slate-900">
                <img
                  src={aerialUav}
                  alt="Autonomous Aerial Flight Systems"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 left-3 sm:bottom-3 sm:left-3.5">
                  <span className="text-[9px] lg:text-[10px] font-mono font-bold tracking-widest text-white uppercase drop-shadow-md">
                    AERIAL AUTONOMY
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Visual Card 2: Embedded Edge Silicon */}
            <motion.div
              initial={{ opacity: 0, x: -40, scale: 0.94 }}
              animate={{ 
                opacity: 1, 
                x: 0, 
                scale: 1,
                y: [0, 6, 0]
              }}
              transition={{ 
                opacity: { duration: 0.8, delay: 0.35 },
                x: { duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] },
                y: { duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
              }}
              className="w-44 lg:w-56 xl:w-64 aspect-[4/3] rounded-2xl p-1 bg-white/80 backdrop-blur-md border border-slate-200/90 shadow-[0_20px_45px_rgba(15,23,42,0.1)] transition-transform"
            >
              <div className="w-full h-full rounded-xl overflow-hidden relative bg-slate-900">
                <img
                  src={edgeCompute}
                  alt="Edge Neural Silicon Architecture"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 left-3 sm:bottom-3 sm:left-3.5">
                  <span className="text-[9px] lg:text-[10px] font-mono font-bold tracking-widest text-white uppercase drop-shadow-md">
                    EDGE NEURAL SILICON
                  </span>
                </div>
              </div>
            </motion.div>

          </div>

        </motion.div>

        {/* ================= RIGHT DOOR ================= */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: phase === "open" ? "100%" : 0 }}
          transition={{ duration: 0.85, ease: [0.77, 0, 0.175, 1] }}
          className="w-1/2 h-full bg-gradient-to-bl from-[#ffffff] via-[#f8fafc] to-[#f1f5f9] border-l border-slate-200/90 relative overflow-hidden shadow-[-15px_0_40px_rgba(15,23,42,0.06)]"
        >
          {/* Architectural Coordinate Blueprint Grid */}
          <div 
            className="absolute inset-0 opacity-[0.24] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#94a3b8 1.2px, transparent 1.2px)",
              backgroundSize: "30px 30px"
            }}
          />

          {/* Top Right Aerospace Status */}
          <div className="absolute top-6 right-6 sm:top-8 sm:right-10 lg:right-14 flex items-center gap-2 pointer-events-none">
            <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-[0.22em] text-slate-500 uppercase">
              AUTONOMOUS • PERCEPTION • SILICON
            </span>
          </div>

          {/* Bottom Right Telemetry */}
          <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-10 lg:right-14 hidden sm:block pointer-events-none text-right">
            <span className="text-[10px] font-mono font-semibold tracking-[0.24em] text-slate-400 uppercase">
              HARDWARE-CENTRIC PHYSICAL INTELLIGENCE
            </span>
          </div>

          {/* RIGHT VISUAL CARDS: Anchored to Outer Wing (Guaranteed Zero Center Collision) */}
          <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-6 sm:right-10 lg:right-14 xl:right-20 flex-col gap-6 lg:gap-8 pointer-events-none z-10">
            
            {/* Visual Card 3: 3D Spatial LiDAR Perception */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.94 }}
              animate={{ 
                opacity: 1, 
                x: 0, 
                scale: 1,
                y: [0, -6, 0]
              }}
              transition={{ 
                opacity: { duration: 0.8, delay: 0.25 },
                x: { duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] },
                y: { duration: 4.4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }
              }}
              className="w-44 lg:w-56 xl:w-64 aspect-[4/3] rounded-2xl p-1 bg-white/80 backdrop-blur-md border border-slate-200/90 shadow-[0_20px_45px_rgba(15,23,42,0.1)] transition-transform"
            >
              <div className="w-full h-full rounded-xl overflow-hidden relative bg-slate-900">
                <img
                  src={lidarTerrain}
                  alt="3D LiDAR Perception & Mapping"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 right-3 sm:bottom-3 sm:right-3.5 text-right">
                  <span className="text-[9px] lg:text-[10px] font-mono font-bold tracking-widest text-white uppercase drop-shadow-md">
                    3D LIDAR PERCEPTION
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Visual Card 4: Carbon Composite CNC Machining */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.94 }}
              animate={{ 
                opacity: 1, 
                x: 0, 
                scale: 1,
                y: [0, 6, 0]
              }}
              transition={{ 
                opacity: { duration: 0.8, delay: 0.4 },
                x: { duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] },
                y: { duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }
              }}
              className="w-44 lg:w-56 xl:w-64 aspect-[4/3] rounded-2xl p-1 bg-white/80 backdrop-blur-md border border-slate-200/90 shadow-[0_20px_45px_rgba(15,23,42,0.1)] transition-transform"
            >
              <div className="w-full h-full rounded-xl overflow-hidden relative bg-slate-900">
                <img
                  src={carbonFrame}
                  alt="Composite Hardware Prototyping"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 right-3 sm:bottom-3 sm:right-3.5 text-right">
                  <span className="text-[9px] lg:text-[10px] font-mono font-bold tracking-widest text-white uppercase drop-shadow-md">
                    COMPOSITE HARDWARE
                  </span>
                </div>
              </div>
            </motion.div>

          </div>

        </motion.div>

      </div>

      {/* ================= CENTER STAGE: 3D MEDALLION FLIP & TOSS ARENA ================= */}
      <div 
        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-30 px-6"
        style={{ perspective: 1400 }}
      >
        {/* Luminous Daylight Cyan/Sky Center Glow Aura */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ 
            opacity: phase === "open" ? 0 : [0.35, 0.7, 0.5],
            scale: phase === "open" ? 1.6 : 1
          }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute w-80 sm:w-96 md:w-[460px] aspect-square rounded-full bg-gradient-to-tr from-cyan-400/25 via-sky-300/20 to-indigo-400/15 blur-3xl pointer-events-none"
        />

        {/* 3D Coin Toss & Flip Motion Container */}
        <motion.div
          initial={{
            opacity: 0,
            y: 95,
            scale: 0.52,
            rotateY: 0,
            rotateX: 24,
          }}
          animate={
            phase === "open"
              ? {
                  opacity: 0,
                  scale: 1.32,
                  filter: "brightness(1.15) blur(5px)",
                  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] }
                }
              : {
                  opacity: [0, 1, 1, 1],
                  y: [95, -45, 8, 0],
                  scale: [0.52, 1.12, 0.98, 1.0],
                  rotateY: [0, 360, 720, 1080],
                  rotateX: [24, -16, 6, 0],
                }
          }
          transition={{
            duration: 1.8,
            times: [0, 0.45, 0.85, 1],
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ transformStyle: "preserve-3d" }}
          className="relative flex flex-col items-center justify-center"
        >
          
          {/* The Circular Novaliseo Medallion (from About Page) */}
          <div className="relative group w-44 sm:w-56 md:w-64 lg:w-72 aspect-square rounded-full p-1 bg-gradient-to-tr from-cyan-400 via-slate-200 to-blue-500 shadow-[0_15px_45px_rgba(6,182,212,0.32),0_25px_60px_rgba(15,23,42,0.12)] flex items-center justify-center">
            
            {/* Inner Metallic Bezel Rim */}
            <div className="w-full h-full rounded-full overflow-hidden border border-white/90 bg-slate-950 relative flex items-center justify-center">
              <img
                src="/images/about_hero.jpeg"
                alt="Novaliseo Ecosystem Medallion"
                className="w-full h-full object-cover scale-[1.02]"
              />

              {/* Dynamic Lens Gleam / Sheen Sweep on Settle */}
              <motion.div
                initial={{ x: "-160%", opacity: 0 }}
                animate={{
                  x: phase === "settle" || phase === "open" ? "180%" : "-160%",
                  opacity: phase === "settle" || phase === "open" ? [0, 0.85, 0] : 0,
                }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[-25deg] pointer-events-none"
              />
            </div>

            {/* Glowing Ring Halo */}
            <div className="absolute -inset-1.5 rounded-full border border-cyan-400/35 animate-pulse pointer-events-none" />
          </div>

          {/* Dynamic Floor Contact Shadow */}
          <motion.div
            initial={{ scale: 0.4, opacity: 0.2 }}
            animate={
              phase === "open"
                ? { scale: 1.4, opacity: 0, transition: { duration: 0.6 } }
                : {
                    scale: [0.4, 0.65, 1.05, 1.0],
                    opacity: [0.2, 0.3, 0.7, 0.6],
                  }
            }
            transition={{
              duration: 1.8,
              times: [0, 0.45, 0.85, 1],
              ease: "easeInOut",
            }}
            className="w-36 sm:w-48 md:w-56 h-5 rounded-[100%] bg-slate-900/20 blur-lg mt-5 pointer-events-none"
          />

        </motion.div>

        {/* ================= REFINED BRAND TYPOGRAPHY (AMPLITUDE CLEARANCE) ================= */}
        <AnimatePresence>
          {(phase === "settle" || phase === "open") && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={
                phase === "open"
                  ? { opacity: 0, y: -8, transition: { duration: 0.45 } }
                  : { opacity: 1, y: 0 }
              }
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 flex flex-col items-center text-center pointer-events-none z-30 max-w-sm sm:max-w-md px-4"
            >
              {/* Full Company Name */}
              <h2 className="text-sm sm:text-base md:text-lg font-bold tracking-[0.22em] text-slate-900 uppercase drop-shadow-xs">
                Novaliseo Global Tech Pvt Ltd
              </h2>

              {/* Tagline */}
              <p className="mt-1 text-[9px] sm:text-[10px] md:text-[11px] font-mono font-semibold tracking-[0.26em] text-cyan-600 uppercase">
                Brain Behind Intelligent Operations
              </p>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

    </div>
  );
}
