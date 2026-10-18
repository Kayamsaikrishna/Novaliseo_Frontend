import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, ShieldCheck, Plane, Terminal, ChevronDown } from "lucide-react";
import NoiseBlobsCanvas from "./NoiseBlobsCanvas";

export default function NoiseBlobsHero() {
  const scrollToTracks = () => {
    const el = document.getElementById("training-tracks");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative w-full min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden select-none">
      
      {/* ================= 1. FULL-SCREEN 3D NOISE BLOBS CANVAS ================= */}
      <NoiseBlobsCanvas interactive={true} />

      {/* Atmospheric Cinematic Lighting Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/95 via-[#020617]/75 to-transparent pointer-events-none z-10 w-full lg:w-3/5" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#020617] via-[#020617]/70 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#020617]/80 to-transparent pointer-events-none z-10" />

      {/* Ambient Luminous Color Halos */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-cyan-500/15 blur-[120px] pointer-events-none z-10 animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none z-10" />

      {/* ================= 2. HERO CONTENT CONTAINER (AUTONOMOUS WORKFORCE) ================= */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-24 pb-16 flex flex-col justify-between min-h-[80vh]">
        
        {/* Top Space / Alignment */}
        <div />

        {/* Main Editorial Text & Action Row */}
        <div className="max-w-2xl lg:max-w-3xl text-left my-auto">
          
          {/* Official Company Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl mb-6 shadow-[0_4px_20px_rgba(6,182,212,0.15)]"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-cyan-300">
              Novaliseo Workforce Academy
            </span>
          </motion.div>

          {/* Master Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.02] mb-6 drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
          >
            Autonomous Systems <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
              Industry Trainings
            </span>
          </motion.h1>

          {/* Genuine Novaliseo Editorial Narrative */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl drop-shadow-md"
          >
            Bridging academic theory and sovereign defense execution. Intensive hands-on engineering programs in autonomous drone swarms, edge computer vision, hardware-in-the-loop SLAM, and physical robotics deployment.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 sm:gap-5 mb-10"
          >
            <button
              onClick={scrollToTracks}
              className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm sm:text-base tracking-wide transition-all duration-300 hover:scale-105 shadow-[0_10px_35px_rgba(6,182,212,0.4)] active:scale-95"
            >
              <span>Explore Training Tracks</span>
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-1">
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>

            <a
              href="/partner"
              className="inline-flex items-center gap-2.5 px-6 py-4 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-xl text-white font-medium text-sm sm:text-base transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
            >
              <span>Partner With Us</span>
            </a>
          </motion.div>

          {/* Enterprise Capability Pillars Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/15 max-w-2xl"
          >
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium">
              <Plane className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Drone Swarms</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium">
              <Cpu className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Edge Silicon</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium">
              <Terminal className="w-4 h-4 text-purple-400 shrink-0" />
              <span>SLAM & Vision</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Accreditation</span>
            </div>
          </motion.div>

        </div>

        {/* Bottom Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="pt-6 flex items-center justify-between text-xs font-mono text-slate-400"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Interactive Real-Time Sensor & Simulation Fabric</span>
          </div>

          <button 
            onClick={scrollToTracks}
            className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <span>Scroll to Tracks</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
          </button>
        </motion.div>

      </div>

    </section>
  );
}
