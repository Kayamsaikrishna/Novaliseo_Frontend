import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Plane, Cpu, ShieldCheck } from "lucide-react";
import NoiseBlobsCanvas from "./NoiseBlobsCanvas";

export default function NoiseBlobsHero() {
  const scrollToTracks = () => {
    const el = document.getElementById("training-tracks");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section className="relative w-full min-h-[100dvh] max-h-[1080px] flex items-center justify-center pt-24 sm:pt-28 pb-10 sm:pb-14 px-6 sm:px-12 lg:px-20 overflow-hidden select-none bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0]">
      
      {/* ================= 1. SILKY-SMOOTH 3D NOISE BLOBS CANVAS ================= */}
      <NoiseBlobsCanvas interactive={true} />

      {/* Atmospheric Luminous Soft Glows for Light Gradient Theme */}
      <div className="absolute top-1/4 -left-20 w-[450px] h-[450px] rounded-full bg-cyan-400/10 blur-[130px] pointer-events-none z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/8 blur-[160px] pointer-events-none z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] rounded-full bg-amber-400/10 blur-[140px] pointer-events-none z-10" />

      {/* Soft Vignette Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#f8fafc]/95 via-[#f8fafc]/65 to-transparent pointer-events-none z-10 w-full lg:w-3/5" />

      {/* ================= 2. MAIN HERO CONTAINER ================= */}
      <div className="relative z-20 w-full max-w-7xl mx-auto flex items-center">
        
        {/* Left Column: Commandingly Styled Typography & Enterprise Substance */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-2xl lg:max-w-3xl text-left my-auto"
        >
          {/* Eyebrow Pill */}
          <motion.div variants={itemVariants} className="mb-4 sm:mb-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/5 hover:bg-slate-900/10 border border-slate-900/10 backdrop-blur-md transition-all">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              <span className="text-xs font-mono font-semibold tracking-widest text-slate-700 uppercase">
                Hands-On Technical Training & Skill Development
              </span>
            </div>
          </motion.div>

          {/* Master Headline: Clean, Sophisticated Dual-Weight without any Gemini icon */}
          <motion.div variants={itemVariants} className="mb-5 sm:mb-6">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[94px] xl:text-[104px] font-black text-slate-950 tracking-[-0.04em] leading-[0.92]">
              Industry <br />
              <span className="font-light text-slate-400">
                trainings
              </span>
            </h1>
          </motion.div>

          {/* Learner-Focused Training Narrative */}
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-slate-600 font-normal leading-relaxed mb-8 sm:mb-9 max-w-xl"
          >
            Practical, industry-grade training programs designed for students, engineering graduates, and working professionals. Master real-world technologies through live project building—from Autonomous Drones & Robotics to Computer Vision, Edge AI, and Embedded Systems.
          </motion.p>

          {/* Primary Action Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 sm:gap-5 mb-10 sm:mb-12"
          >
            <button
              onClick={scrollToTracks}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-slate-950 hover:bg-black text-white text-sm sm:text-base font-semibold tracking-wide transition-all duration-300 hover:scale-105 shadow-[0_12px_30px_rgba(0,0,0,0.16)] active:scale-95"
            >
              <span>Explore Training Tracks</span>
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-1">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/85 hover:bg-white text-slate-900 border border-slate-300/80 text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm"
            >
              <span>Enroll in a Program</span>
            </a>
          </motion.div>

          {/* Training Value Highlights (Focused on Learners & Professionals) */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-6 border-t border-slate-300/60 max-w-2xl"
          >
            <div className="p-3.5 rounded-2xl bg-white/60 hover:bg-white/90 border border-slate-200/80 backdrop-blur-md transition-all shadow-xs group/metric">
              <div className="flex items-center gap-2 mb-1 text-slate-900 font-bold text-base">
                <Plane className="w-4 h-4 text-cyan-600" />
                <span>Hands-On Labs</span>
              </div>
              <p className="text-xs text-slate-500 font-normal leading-snug">
                Build real autonomous drones, robotics kits & AI software
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/60 hover:bg-white/90 border border-slate-200/80 backdrop-blur-md transition-all shadow-xs group/metric">
              <div className="flex items-center gap-2 mb-1 text-slate-900 font-bold text-base">
                <Cpu className="w-4 h-4 text-blue-600" />
                <span>Expert Mentorship</span>
              </div>
              <p className="text-xs text-slate-500 font-normal leading-snug">
                Learn directly from practicing engineers & tech specialists
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/60 hover:bg-white/90 border border-slate-200/80 backdrop-blur-md transition-all shadow-xs group/metric">
              <div className="flex items-center gap-2 mb-1 text-slate-900 font-bold text-base">
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                <span>Certification</span>
              </div>
              <p className="text-xs text-slate-500 font-normal leading-snug">
                Verified industry credentials & portfolio-ready capstones
              </p>
            </div>
          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}
