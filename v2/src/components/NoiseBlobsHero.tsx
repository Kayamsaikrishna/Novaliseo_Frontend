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
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section className="relative w-full h-[100dvh] max-h-screen flex flex-col justify-center pt-16 sm:pt-20 pb-4 sm:pb-6 px-6 sm:px-12 lg:px-20 overflow-hidden select-none bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0]">
      
      {/* ================= 1. SILKY-SMOOTH 3D NOISE BLOBS CANVAS ================= */}
      <NoiseBlobsCanvas interactive={true} />

      {/* Atmospheric Luminous Soft Glows for Light Gradient Theme */}
      <div className="absolute top-1/4 -left-20 w-[420px] h-[420px] rounded-full bg-cyan-400/10 blur-[130px] pointer-events-none z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[460px] h-[460px] rounded-full bg-blue-500/8 blur-[160px] pointer-events-none z-10" />
      <div className="absolute top-1/3 right-10 w-[320px] h-[320px] rounded-full bg-amber-400/10 blur-[140px] pointer-events-none z-10" />

      {/* Soft Vignette Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#f8fafc]/95 via-[#f8fafc]/65 to-transparent pointer-events-none z-10 w-full lg:w-3/5" />

      {/* ================= 2. MAIN HERO CONTAINER (FITS 100% IN ONE SCREEN) ================= */}
      <div className="relative z-20 w-full max-w-7xl mx-auto my-auto flex items-center">
        
        {/* Left Column: Clean Typography & Learner Training Value */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-2xl lg:max-w-3xl text-left"
        >
          {/* Master Headline: Large, Clean, Refined Dual-Weight (No Star, No Hands-on Eyebrow Tag) */}
          <motion.div variants={itemVariants} className="mb-2.5 sm:mb-3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] xl:text-[84px] font-black text-slate-950 tracking-[-0.035em] leading-[0.92]">
              Industry <br />
              <span className="font-light text-slate-400">
                trainings
              </span>
            </h1>
          </motion.div>

          {/* Genuine Learner Training Narrative */}
          <motion.p 
            variants={itemVariants}
            className="text-xs sm:text-sm md:text-[15px] lg:text-base text-slate-600 font-normal leading-relaxed mb-4 sm:mb-5 max-w-xl"
          >
            Practical, industry-grade training programs designed for students, engineering graduates, and working professionals. Master real-world technologies through live project building—from Autonomous Drones & Robotics to Computer Vision, Edge AI, and Embedded Systems.
          </motion.p>

          {/* Primary Action Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-5"
          >
            <button
              onClick={scrollToTracks}
              className="group inline-flex items-center gap-2.5 px-6 py-2.5 sm:py-3 rounded-full bg-slate-950 hover:bg-black text-white text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105 shadow-[0_10px_25px_rgba(0,0,0,0.14)] active:scale-95"
            >
              <span>Explore Training Tracks</span>
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-1">
                <ArrowRight className="w-3 h-3" />
              </div>
            </button>

            <a
              href="/partner"
              className="inline-flex items-center gap-2 px-5 py-2.5 sm:py-3 rounded-full bg-white/85 hover:bg-white text-slate-900 border border-slate-300/80 text-xs sm:text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm"
            >
              <span>Enroll in a Program</span>
            </a>
          </motion.div>

          {/* Training Value Highlights Bar (Fits cleanly within viewport) */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-3 sm:pt-4 border-t border-slate-300/60 max-w-2xl"
          >
            <div className="p-2.5 sm:p-3 rounded-2xl bg-white/75 hover:bg-white border border-slate-200/80 backdrop-blur-md transition-all shadow-xs group/metric">
              <div className="flex items-center gap-2 mb-1 text-slate-900 font-bold text-xs sm:text-sm">
                <Plane className="w-4 h-4 text-cyan-600 shrink-0" />
                <span>Applied Hardware Labs</span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 font-normal leading-tight">
                Build real autonomous drones, robotics kits & AI software
              </p>
            </div>

            <div className="p-2.5 sm:p-3 rounded-2xl bg-white/75 hover:bg-white border border-slate-200/80 backdrop-blur-md transition-all shadow-xs group/metric">
              <div className="flex items-center gap-2 mb-1 text-slate-900 font-bold text-xs sm:text-sm">
                <Cpu className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Expert Mentorship</span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 font-normal leading-tight">
                Learn directly from practicing engineers & tech specialists
              </p>
            </div>

            <div className="p-2.5 sm:p-3 rounded-2xl bg-white/75 hover:bg-white border border-slate-200/80 backdrop-blur-md transition-all shadow-xs group/metric">
              <div className="flex items-center gap-2 mb-1 text-slate-900 font-bold text-xs sm:text-sm">
                <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Industry Credentials</span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 font-normal leading-tight">
                Verified portfolio capstones & project completion certificates
              </p>
            </div>
          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}
