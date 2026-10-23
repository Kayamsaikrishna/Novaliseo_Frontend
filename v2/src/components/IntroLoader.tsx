import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroLoader() {
  const [phase, setPhase] = useState<"toss" | "settle" | "open" | "done">("toss");

  useEffect(() => {
    // 1. Toss and 3D flip: 0 -> 1800ms
    const tSettle = setTimeout(() => {
      setPhase("settle");
    }, 1800);

    // 2. Open split curtains & reveal website: at 2700ms
    const tOpen = setTimeout(() => {
      setPhase("open");
    }, 2700);

    // 3. Complete and unmount: at 3550ms
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
      
      {/* ================= SPLIT CURTAINS (DEEP OBSIDIAN THEATER) ================= */}
      <div className="absolute inset-0 flex pointer-events-auto">
        
        {/* Left Curtain */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: phase === "open" ? "-100%" : 0 }}
          transition={{ duration: 0.85, ease: [0.77, 0, 0.175, 1] }}
          className="w-1/2 h-full bg-[#05070c] border-r border-cyan-500/20 relative overflow-hidden shadow-[10px_0_40px_rgba(0,0,0,0.8)]"
        >
          {/* Subtle Ambient Blueprint Tech Grid */}
          <div 
            className="absolute inset-0 opacity-[0.12] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#38bdf8 1px, transparent 1px)",
              backgroundSize: "32px 32px"
            }}
          />
          {/* Subtle Cyan Edge Flare */}
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-cyan-500/10 to-transparent pointer-events-none" />
        </motion.div>

        {/* Right Curtain */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: phase === "open" ? "100%" : 0 }}
          transition={{ duration: 0.85, ease: [0.77, 0, 0.175, 1] }}
          className="w-1/2 h-full bg-[#05070c] border-l border-cyan-500/20 relative overflow-hidden shadow-[-10px_0_40px_rgba(0,0,0,0.8)]"
        >
          {/* Subtle Ambient Blueprint Tech Grid */}
          <div 
            className="absolute inset-0 opacity-[0.12] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#38bdf8 1px, transparent 1px)",
              backgroundSize: "32px 32px"
            }}
          />
          {/* Subtle Cyan Edge Flare */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-cyan-500/10 to-transparent pointer-events-none" />
        </motion.div>

      </div>

      {/* ================= CENTER 3D MEDALLION FLIP & TOSS STAGE ================= */}
      <div 
        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-30 px-6"
        style={{ perspective: 1400 }}
      >
        {/* Soft Center Neon Aura */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ 
            opacity: phase === "open" ? 0 : [0.4, 0.8, 0.6],
            scale: phase === "open" ? 1.6 : 1
          }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute w-96 h-96 rounded-full bg-gradient-to-tr from-cyan-500/25 via-blue-600/20 to-purple-600/15 blur-3xl pointer-events-none"
        />

        {/* 3D Coin Toss & Flip Container */}
        <motion.div
          initial={{
            opacity: 0,
            y: 110,
            scale: 0.5,
            rotateY: 0,
            rotateX: 25,
          }}
          animate={
            phase === "open"
              ? {
                  opacity: 0,
                  scale: 1.35,
                  filter: "brightness(1.4) blur(4px)",
                  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] }
                }
              : {
                  opacity: [0, 1, 1, 1],
                  y: [110, -55, 10, 0],
                  scale: [0.5, 1.12, 0.98, 1.0],
                  rotateY: [0, 360, 720, 1080],
                  rotateX: [25, -18, 6, 0],
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
          
          {/* The Circular Novaliseo Medallion from About Page */}
          <div className="relative group w-48 sm:w-60 md:w-72 aspect-square rounded-full p-1 bg-gradient-to-tr from-cyan-400 via-slate-300 to-blue-500 shadow-[0_0_55px_rgba(6,182,212,0.45)] flex items-center justify-center">
            
            {/* Inner Metallic Bezel Rim */}
            <div className="w-full h-full rounded-full overflow-hidden border border-white/20 bg-black relative flex items-center justify-center">
              <img
                src="/images/about_hero.jpeg"
                alt="Novaliseo Ecosystem Medallion"
                className="w-full h-full object-cover scale-[1.02]"
              />

              {/* Dynamic Sheen / Gleam Sweep on Landing */}
              <motion.div
                initial={{ x: "-150%", opacity: 0 }}
                animate={{
                  x: phase === "settle" || phase === "open" ? "180%" : "-150%",
                  opacity: phase === "settle" || phase === "open" ? [0, 0.8, 0] : 0,
                }}
                transition={{ duration: 0.85, ease: "easeInOut" }}
                className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-25deg] pointer-events-none"
              />
            </div>

            {/* Glowing Ring Halo */}
            <div className="absolute -inset-1.5 rounded-full border border-cyan-400/30 animate-pulse pointer-events-none" />
          </div>

          {/* Dynamic 3D Drop Shadow on Floor Plane */}
          <motion.div
            initial={{ scale: 0.35, opacity: 0.2 }}
            animate={
              phase === "open"
                ? { scale: 1.5, opacity: 0, transition: { duration: 0.6 } }
                : {
                    scale: [0.35, 0.6, 1.05, 1.0],
                    opacity: [0.2, 0.35, 0.8, 0.7],
                  }
            }
            transition={{
              duration: 1.8,
              times: [0, 0.45, 0.85, 1],
              ease: "easeInOut",
            }}
            className="w-40 sm:w-52 md:w-64 h-6 rounded-[100%] bg-cyan-950/80 blur-xl mt-6 pointer-events-none"
          />

        </motion.div>

        {/* ================= TYPOGRAPHY REVEAL ON MEDALLION SETTLE ================= */}
        <AnimatePresence>
          {(phase === "settle" || phase === "open") && (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={
                phase === "open"
                  ? { opacity: 0, y: -10, transition: { duration: 0.5 } }
                  : { opacity: 1, y: 0 }
              }
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 flex flex-col items-center text-center pointer-events-none z-30"
            >
              {/* Full Company Name */}
              <h2 className="text-base sm:text-lg md:text-xl font-bold tracking-[0.22em] text-white uppercase drop-shadow-md">
                Novaliseo Global Tech Pvt Ltd
              </h2>

              {/* Tagline */}
              <p className="mt-1 text-[10px] sm:text-[11px] font-mono tracking-[0.26em] text-cyan-400/90 uppercase">
                Brain Behind Intelligent Operations
              </p>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

    </div>
  );
}
