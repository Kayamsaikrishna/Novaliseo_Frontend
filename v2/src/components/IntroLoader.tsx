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
  const [stage, setStage] = useState<"showcase" | "split" | "done">("showcase");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth, cinematic progress ticker
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return Math.min(prev + 4, 100);
      });
    }, 45);

    // Split curtains open at 2.4s
    const tSplit = setTimeout(() => {
      setStage("split");
    }, 2400);

    // Completely unmount at 3.2s
    const tDone = setTimeout(() => {
      setStage("done");
    }, 3200);

    return () => {
      clearInterval(timer);
      clearTimeout(tSplit);
      clearTimeout(tDone);
    };
  }, []);

  if (stage === "done") return null;

  return (
    <div className="fixed inset-0 z-[99999] pointer-events-none select-none overflow-hidden font-sans">
      
      {/* ================= SPLIT SCREEN DOORS (CLEAN DAYLIGHT FINISH) ================= */}
      <div className="absolute inset-0 flex pointer-events-auto">
        
        {/* ================= LEFT HALF ================= */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: stage === "split" ? "-100%" : 0 }}
          transition={{ duration: 0.85, ease: [0.77, 0, 0.175, 1] }}
          className="w-1/2 h-full bg-gradient-to-br from-[#ffffff] via-[#f8fafc] to-[#f1f5f9] border-r border-slate-200/90 relative overflow-hidden shadow-2xl"
        >
          {/* Subtle Ambient Blueprint Grid */}
          <div 
            className="absolute inset-0 opacity-[0.25] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#94a3b8 1px, transparent 1px)",
              backgroundSize: "28px 28px"
            }}
          />

          {/* Left Collage Cards */}
          <div className="absolute inset-0 pointer-events-none">
            
            {/* Visual Card 1: Aerial UAV in Mountain Fog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 35, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotate: -2 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-6 sm:left-12 lg:left-16 top-10 sm:top-14 w-44 sm:w-56 lg:w-64 aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(15,23,42,0.18)] border border-white/80 transition-transform duration-700 hover:scale-105"
            >
              <img
                src={aerialUav}
                alt="Autonomous Aerial Vehicle"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-white/95 uppercase drop-shadow-md">
                  AERIAL AUTONOMY
                </span>
              </div>
            </motion.div>

            {/* Visual Card 2: Embedded Edge Silicon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotate: 2 }}
              transition={{ duration: 0.85, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-10 sm:left-20 lg:left-28 bottom-8 sm:bottom-12 w-40 sm:w-52 lg:w-60 aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(15,23,42,0.18)] border border-white/80 transition-transform duration-700 hover:scale-105 hidden sm:block"
            >
              <img
                src={edgeCompute}
                alt="Edge AI Silicon"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-white/95 uppercase drop-shadow-md">
                  EDGE NEURAL SILICON
                </span>
              </div>
            </motion.div>

            {/* Visual Card 3: Deep Maritime Unmanned Vessel (Desktop) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88, x: -30 }}
              animate={{ opacity: 0.95, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -left-12 lg:left-4 top-1/2 -translate-y-1/2 w-36 sm:w-44 lg:w-48 aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.15)] border border-white/80 transition-transform duration-700 hover:scale-105 hidden xl:block"
            >
              <img
                src={navalVessel}
                alt="Naval Autonomy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3">
                <span className="text-[10px] font-mono font-bold tracking-widest text-white/95 uppercase drop-shadow-md">
                  MARITIME USV
                </span>
              </div>
            </motion.div>

          </div>
        </motion.div>

        {/* ================= RIGHT HALF ================= */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: stage === "split" ? "100%" : 0 }}
          transition={{ duration: 0.85, ease: [0.77, 0, 0.175, 1] }}
          className="w-1/2 h-full bg-gradient-to-bl from-[#ffffff] via-[#f8fafc] to-[#f1f5f9] border-l border-slate-200/90 relative overflow-hidden shadow-2xl"
        >
          {/* Subtle Ambient Blueprint Grid */}
          <div 
            className="absolute inset-0 opacity-[0.25] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#94a3b8 1px, transparent 1px)",
              backgroundSize: "28px 28px"
            }}
          />

          {/* Right Collage Cards */}
          <div className="absolute inset-0 pointer-events-none">
            
            {/* Visual Card 4: 3D LiDAR Point Cloud Terrain Scan */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 35, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotate: 2 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-6 sm:right-12 lg:right-16 top-10 sm:top-14 w-44 sm:w-56 lg:w-64 aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(15,23,42,0.18)] border border-white/80 transition-transform duration-700 hover:scale-105"
            >
              <img
                src={lidarTerrain}
                alt="3D LiDAR Perception"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 text-right">
                <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-white/95 uppercase drop-shadow-md">
                  3D LIDAR SLAM
                </span>
              </div>
            </motion.div>

            {/* Visual Card 5: Carbon Fiber Chassis CNC Machining */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotate: -2 }}
              transition={{ duration: 0.85, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-10 sm:right-20 lg:right-28 bottom-8 sm:bottom-12 w-40 sm:w-52 lg:w-60 aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(15,23,42,0.18)] border border-white/80 transition-transform duration-700 hover:scale-105 hidden sm:block"
            >
              <img
                src={carbonFrame}
                alt="Carbon Composite Prototyping"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 text-right">
                <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-white/95 uppercase drop-shadow-md">
                  COMPOSITE HARDWARE
                </span>
              </div>
            </motion.div>

            {/* Visual Card 6: All-Terrain Ground Rover (Desktop) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88, x: 30 }}
              animate={{ opacity: 0.95, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -right-12 lg:right-4 top-1/2 -translate-y-1/2 w-36 sm:w-44 lg:w-48 aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.15)] border border-white/80 transition-transform duration-700 hover:scale-105 hidden xl:block"
            >
              <img
                src={groundRover}
                alt="All-Terrain Rover"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 right-3 text-right">
                <span className="text-[10px] font-mono font-bold tracking-widest text-white/95 uppercase drop-shadow-md">
                  PHYSICAL AUTONOMY
                </span>
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>

      {/* ================= CENTER PURE BRAND FOCAL POINT (NO WHITE BOXES!) ================= */}
      <AnimatePresence>
        {stage !== "split" && (
          <motion.div
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-30 px-6 text-center"
          >
            {/* Logo Mark with Subtle Aura */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-3"
            >
              <div className="absolute -inset-6 rounded-full bg-cyan-400/25 blur-2xl animate-pulse" />
              <img
                src={logo}
                alt="Novaliseo"
                className="h-14 sm:h-16 md:h-20 object-contain relative z-10 drop-shadow-sm"
              />
            </motion.div>

            {/* Brand Wordmark */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-950 tracking-[0.2em] uppercase mb-2"
            >
              NOVALISEO
            </motion.h1>

            {/* Core Mission Tagline (Clean & Editorial) */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs sm:text-sm md:text-base font-mono font-semibold tracking-[0.26em] text-slate-600 uppercase mb-5"
            >
              PHYSICAL REALITY OVER SIMULATIONS
            </motion.p>

            {/* Minimal High-Precision Loading Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-36 sm:w-48 h-1 rounded-full bg-slate-200 overflow-hidden">
                <motion.div
                  className="h-full bg-slate-950 rounded-full transition-all duration-100"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-[10px] font-mono tracking-widest text-slate-400">
                INITIALIZING // {progress}%
              </span>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
