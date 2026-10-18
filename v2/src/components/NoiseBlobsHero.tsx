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
      <div className="absolute inset-0 bg-gradient-to-r from-[#f8fafc]/95 via-[#f8fafc]/70 to-transparent pointer-events-none z-10 w-full lg:w-3/5" />

      {/* ================= 2. MAIN HERO CONTAINER (FITS 100% IN ONE SCREEN) ================= */}
      <div className="relative z-20 w-full max-w-7xl mx-auto my-auto flex items-center">
        
        {/* Left Column: Clean Editorial Typography & Learner Training Value */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-2xl lg:max-w-3xl text-left"
        >
          {/* Master Headline: Cohesive, Balanced, Sophisticated Editorial Typography */}
          <motion.div variants={itemVariants} className="mb-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] xl:text-[82px] font-semibold tracking-[-0.035em] text-[#0f172a] leading-[1.04]">
              Industry <br />
              <span className="font-medium text-[#1e293b]">
                Trainings
              </span>
            </h1>
          </motion.div>

          {/* Genuine Learner Training Narrative */}
          <motion.p 
            variants={itemVariants}
            className="text-sm sm:text-base md:text-[17px] text-[#334155] font-normal leading-relaxed mb-6 max-w-xl"
          >
            Practical, industry-grade training programs designed for students, engineering graduates, and working professionals. Master real-world technologies through live project building—from Autonomous Drones &amp; Robotics to Computer Vision, Edge AI, and Embedded Systems.
          </motion.p>

          {/* Primary Action Buttons (Styled cleanly like Home Hero) */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 mb-6"
          >
            <button
              onClick={scrollToTracks}
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-[#0a0f1d] hover:bg-[#1e293b] text-white font-medium text-sm tracking-tight transition-all duration-200 shadow-[0_10px_25px_rgba(15,23,42,0.18)] hover:scale-[1.02] active:scale-[0.98] group"
            >
              <span>Explore Training Tracks</span>
              <ArrowRight className="w-4 h-4 text-slate-300 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="/partner"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/90 hover:bg-white text-[#0f172a] border border-slate-200/90 font-medium text-sm tracking-tight transition-all duration-200 shadow-xs hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Enroll in a Program</span>
            </a>
          </motion.div>

          {/* Training Value Highlights (Refined, Spaced, No Overlap with 3D Blobs) */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-5 border-t border-slate-200/90 max-w-2xl"
          >
            <div className="p-3.5 rounded-2xl bg-white/80 hover:bg-white border border-slate-200/80 backdrop-blur-md transition-all shadow-xs group">
              <div className="flex items-center gap-2.5 mb-1.5">
                <div className="w-7 h-7 rounded-xl bg-cyan-50 border border-cyan-100/80 flex items-center justify-center text-cyan-600 shrink-0">
                  <Plane className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#0f172a]">Applied Hardware</span>
              </div>
              <p className="text-xs text-[#64748b] font-normal leading-snug">
                Autonomous drones, robotics kits &amp; embedded software
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/80 hover:bg-white border border-slate-200/80 backdrop-blur-md transition-all shadow-xs group">
              <div className="flex items-center gap-2.5 mb-1.5">
                <div className="w-7 h-7 rounded-xl bg-blue-50 border border-blue-100/80 flex items-center justify-center text-blue-600 shrink-0">
                  <Cpu className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#0f172a]">Expert Mentorship</span>
              </div>
              <p className="text-xs text-[#64748b] font-normal leading-snug">
                Learn directly from practicing engineers &amp; tech leads
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/80 hover:bg-white border border-slate-200/80 backdrop-blur-md transition-all shadow-xs group">
              <div className="flex items-center gap-2.5 mb-1.5">
                <div className="w-7 h-7 rounded-xl bg-amber-50 border border-amber-100/80 flex items-center justify-center text-amber-600 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#0f172a]">Industry Credentials</span>
              </div>
              <p className="text-xs text-[#64748b] font-normal leading-snug">
                Verified project capstones &amp; completion certification
              </p>
            </div>
          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}
