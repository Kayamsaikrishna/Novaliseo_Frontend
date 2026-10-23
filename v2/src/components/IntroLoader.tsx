import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";
import droneFlight from "../assets/real_specs/drone_flight_real.jpg";
import cleanroomLab from "../assets/real_specs/cleanroom_lab_real.jpg";
import cncMachine from "../assets/real_specs/real_cnc_machining.jpg";
import datacenterAisle from "../assets/real_specs/real_sovereign_datacenter.jpg";

export default function IntroLoader() {
  const [stage, setStage] = useState<"words" | "logo" | "split" | "done">("words");

  // Tagline sequence words
  const words = ["PHYSICAL", "REALITY", "OVER", "SIMULATIONS"];

  useEffect(() => {
    // Phase 1: Tagline builds word-by-word (0ms -> 1000ms)
    const t1 = setTimeout(() => {
      setStage("logo");
    }, 1200);

    // Phase 2: Logo and streaming cards (1200ms -> 2400ms)
    const t2 = setTimeout(() => {
      setStage("split");
    }, 2400);

    // Phase 3: Split curtain opens and unmounts (2400ms -> 3200ms)
    const t3 = setTimeout(() => {
      setStage("done");
    }, 3200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (stage === "done") return null;

  return (
    <div className="fixed inset-0 z-[99999] pointer-events-none select-none overflow-hidden">
      {/* ================= SPLIT SCREEN CURTAINS ================= */}
      <div className="absolute inset-0 flex pointer-events-auto">
        {/* Left Curtain */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: stage === "split" ? "-100%" : 0 }}
          transition={{ duration: 0.85, ease: [0.77, 0, 0.175, 1] }}
          className="w-1/2 h-full bg-[#0a0f1d] border-r border-white/10 relative overflow-hidden"
        >
          {/* Subtle Grid Crosshair & Corner Dot */}
          <div className="absolute top-8 left-8 text-white/30 font-mono text-xs tracking-widest">
            + 01 // SYS.INIT
          </div>
          <div className="absolute bottom-8 left-8 text-white/20 font-mono text-[10px] tracking-widest">
            LAT: 12.9716° N • LON: 77.5946° E
          </div>

          {/* Left Floating Stream Card */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ 
              opacity: stage === "logo" ? 0.35 : 0, 
              y: stage === "logo" ? -20 : 60 
            }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute left-12 top-1/3 w-48 h-64 rounded-2xl overflow-hidden border border-white/20 shadow-2xl pointer-events-none hidden md:block"
          >
            <img src={droneFlight} alt="Flight" className="w-full h-full object-cover brightness-75" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ 
              opacity: stage === "logo" ? 0.25 : 0, 
              y: stage === "logo" ? -40 : 80 
            }}
            transition={{ duration: 1.4, delay: 0.1, ease: "easeOut" }}
            className="absolute left-24 bottom-16 w-40 h-52 rounded-2xl overflow-hidden border border-white/15 shadow-xl pointer-events-none hidden lg:block"
          >
            <img src={cleanroomLab} alt="Lab" className="w-full h-full object-cover brightness-75" />
          </motion.div>
        </motion.div>

        {/* Right Curtain */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: stage === "split" ? "100%" : 0 }}
          transition={{ duration: 0.85, ease: [0.77, 0, 0.175, 1] }}
          className="w-1/2 h-full bg-[#0a0f1d] border-l border-white/10 relative overflow-hidden"
        >
          {/* Subtle Grid Crosshair & Corner Dot */}
          <div className="absolute top-8 right-8 text-white/30 font-mono text-xs tracking-widest text-right">
            [ SECURE BOOT ] +
          </div>
          <div className="absolute bottom-8 right-8 text-white/20 font-mono text-[10px] tracking-widest text-right">
            AUTONOMOUS OPERATING LAYER
          </div>

          {/* Right Floating Stream Card */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ 
              opacity: stage === "logo" ? 0.35 : 0, 
              y: stage === "logo" ? -30 : 70 
            }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute right-12 top-1/4 w-48 h-64 rounded-2xl overflow-hidden border border-white/20 shadow-2xl pointer-events-none hidden md:block"
          >
            <img src={cncMachine} alt="Hardware" className="w-full h-full object-cover brightness-75" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 90 }}
            animate={{ 
              opacity: stage === "logo" ? 0.25 : 0, 
              y: stage === "logo" ? -50 : 90 
            }}
            transition={{ duration: 1.4, delay: 0.1, ease: "easeOut" }}
            className="absolute right-24 bottom-20 w-44 h-56 rounded-2xl overflow-hidden border border-white/15 shadow-xl pointer-events-none hidden lg:block"
          >
            <img src={datacenterAisle} alt="Telemetry" className="w-full h-full object-cover brightness-75" />
          </motion.div>
        </motion.div>
      </div>

      {/* ================= CENTER CONTENT OVERLAY ================= */}
      <AnimatePresence>
        {stage !== "split" && (
          <motion.div
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10"
          >
            {/* Center Vertical Guideline */}
            <div className="absolute inset-y-0 w-px bg-white/10" />
            <div className="absolute inset-x-0 h-px bg-white/10" />

            {/* Stage 1: Word-by-word Tagline Build */}
            {stage === "words" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-2 sm:gap-4 px-6 z-20 flex-wrap justify-center"
              >
                {words.map((word, i) => (
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: i * 0.18,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="font-mono text-xs sm:text-sm md:text-base tracking-[0.28em] text-white/90 font-semibold uppercase"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.div>
            )}

            {/* Stage 2: Logo and Master Wordmark */}
            {stage === "logo" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center justify-center text-center px-6 z-20"
              >
                {/* Logo Mark with Soft Glow */}
                <div className="relative mb-4">
                  <div className="absolute -inset-4 rounded-full bg-cyan-500/20 blur-xl animate-pulse" />
                  <img
                    src={logo}
                    alt="Novaliseo"
                    className="h-14 sm:h-16 md:h-20 object-contain relative z-10 drop-shadow-[0_10px_30px_rgba(0,180,255,0.3)]"
                  />
                </div>

                {/* Brand Wordmark (Northfield / Novaliseo Style) */}
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-[0.16em] uppercase drop-shadow-lg mb-2">
                  NOVALISEO
                </h1>

                {/* Subtitle Tagline */}
                <p className="text-[11px] sm:text-xs font-mono tracking-[0.24em] text-cyan-300/80 uppercase">
                  Brain Behind Intelligent Operations
                </p>

                {/* Pulsing Readiness Indicator */}
                <div className="flex items-center gap-2 mt-6 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-mono text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>INITIALIZING SOVEREIGN RUNTIME</span>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
