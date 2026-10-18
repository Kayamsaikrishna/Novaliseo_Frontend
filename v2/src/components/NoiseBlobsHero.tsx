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
    <section className="relative w-full h-[100dvh] min-h-[640px] max-h-[960px] flex flex-col justify-between pt-24 sm:pt-28 pb-6 sm:pb-8 px-6 sm:px-12 lg:px-20 overflow-hidden select-none bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0]">
      
      {/* ================= 1. 3D NOISE BLOBS CANVAS (LIQUID MARBLE SCULPTURES) ================= */}
      <NoiseBlobsCanvas interactive={true} />

      {/* Atmospheric Luminous Soft Glows for Light Gradient Theme */}
      <div className="absolute top-1/4 -left-20 w-[450px] h-[450px] rounded-full bg-cyan-400/10 blur-[130px] pointer-events-none z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/8 blur-[160px] pointer-events-none z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] rounded-full bg-amber-400/10 blur-[140px] pointer-events-none z-10" />

      {/* Soft Vignette Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#f8fafc]/90 via-[#f8fafc]/60 to-transparent pointer-events-none z-10 w-full lg:w-3/5" />

      {/* ================= 2. TOP ALIGNMENT ROW ================= */}
      <div className="relative z-20 w-full max-w-7xl mx-auto flex items-center justify-between">
        {/* Subtle Academy Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 hover:bg-white border border-slate-200/90 shadow-sm backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
          <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-800">
            Novaliseo Workforce Academy
          </span>
        </motion.div>

        {/* Live Cohorts Indicator */}
        <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-500 bg-white/50 px-3 py-1 rounded-full border border-slate-200/60">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>Active Q4 Immersion Cohorts</span>
        </div>
      </div>

      {/* ================= 3. MAIN EDITORIAL CONTENT (REFINED LOWTIDE TYPOGRAPHY) ================= */}
      <div className="relative z-20 w-full max-w-7xl mx-auto my-auto text-left py-2">
        <div className="max-w-xl lg:max-w-2xl">
          
          {/* Headline: Clean, Sophisticated Dual-Weight ("Industry trainings") */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 sm:mb-5"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[82px] font-extrabold text-slate-900 tracking-[-0.035em] leading-[0.96]">
              Industry
              <span className="font-light text-slate-400 ml-3 sm:ml-4 tracking-[-0.02em] block sm:inline">
                trainings
              </span>
            </h1>
          </motion.div>

          {/* Genuine Novaliseo Editorial Narrative */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-slate-600 font-normal leading-relaxed mb-6 sm:mb-8 max-w-xl"
          >
            Autonomous flight architectures, physical hardware-in-the-loop simulation, and sovereign silicon edge deployment. Intensive engineering cohorts engineered for aerospace, defense, and high-reliability systems.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-6 sm:mb-8"
          >
            <button
              onClick={scrollToTracks}
              className="group inline-flex items-center gap-3 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-slate-900 hover:bg-black text-white text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105 shadow-[0_10px_25px_rgba(0,0,0,0.14)] active:scale-95"
            >
              <span>Explore Training Tracks</span>
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-1">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>

            <a
              href="/partner"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-white/80 hover:bg-white text-slate-800 border border-slate-300/80 text-xs sm:text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm"
            >
              <span>Partner With Us</span>
            </a>
          </motion.div>

          {/* Enterprise Capability Pillars Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-4 sm:pt-5 border-t border-slate-300/70 max-w-xl text-xs sm:text-sm font-medium text-slate-700"
          >
            <div className="flex items-center gap-2">
              <Plane className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
              <span>Drone Swarms</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>Edge Silicon</span>
            </div>
            <div className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-purple-600 shrink-0" />
              <span>SLAM & Vision</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>Accreditation</span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ================= 4. BOTTOM STATUS ROW (AUTOMATIC FIT) ================= */}
      <div className="relative z-20 w-full max-w-7xl mx-auto flex items-center justify-between text-xs font-mono text-slate-500 pt-2 border-t border-slate-200/80">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
          <span>Interactive Real-Time Sensor & Simulation Fabric</span>
        </div>

        <button 
          onClick={scrollToTracks}
          className="flex items-center gap-1.5 text-slate-600 hover:text-slate-900 transition-colors font-medium"
        >
          <span>Scroll to tracks</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
        </button>
      </div>

    </section>
  );
}
