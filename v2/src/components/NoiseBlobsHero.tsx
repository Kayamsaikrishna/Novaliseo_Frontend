import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import NoiseBlobsCanvas from "./NoiseBlobsCanvas";

export default function NoiseBlobsHero() {
  const scrollToTracks = () => {
    const el = document.getElementById("training-tracks");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative w-full h-[100dvh] min-h-[600px] flex items-center justify-center px-6 sm:px-12 lg:px-20 overflow-hidden select-none bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0]">
      
      {/* ================= 1. SILKY-SMOOTH 3D NOISE BLOBS CANVAS ================= */}
      <NoiseBlobsCanvas interactive={true} />

      {/* Atmospheric Luminous Soft Glows for Light Gradient Theme */}
      <div className="absolute top-1/4 -left-20 w-[450px] h-[450px] rounded-full bg-cyan-400/10 blur-[130px] pointer-events-none z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/8 blur-[160px] pointer-events-none z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] rounded-full bg-amber-400/10 blur-[140px] pointer-events-none z-10" />

      {/* Soft Vignette Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#f8fafc]/95 via-[#f8fafc]/65 to-transparent pointer-events-none z-10 w-full lg:w-3/5" />

      {/* ================= 2. PURE & ELEGANT EDITORIAL CONTENT ================= */}
      <div className="relative z-20 w-full max-w-7xl mx-auto flex items-center text-left py-6">
        <div className="max-w-xl lg:max-w-2xl">
          
          {/* Headline: Clean, Sophisticated Dual-Weight ("Industry trainings") */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 sm:mb-6"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[84px] font-extrabold text-slate-900 tracking-[-0.035em] leading-[0.96]">
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
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-base sm:text-lg md:text-xl text-slate-600 font-normal leading-relaxed mb-8 sm:mb-10 max-w-xl"
          >
            Autonomous flight architectures, physical hardware-in-the-loop simulation, and sovereign silicon edge deployment. Intensive engineering cohorts engineered for aerospace, defense, and high-reliability systems.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap items-center gap-4 sm:gap-5"
          >
            <button
              onClick={scrollToTracks}
              className="group inline-flex items-center gap-3 px-7 py-3.5 sm:py-4 rounded-full bg-slate-900 hover:bg-black text-white text-sm sm:text-base font-semibold tracking-wide transition-all duration-300 hover:scale-105 shadow-[0_10px_25px_rgba(0,0,0,0.14)] active:scale-95"
            >
              <span>Explore Training Tracks</span>
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-1">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>

            <a
              href="/partner"
              className="inline-flex items-center gap-2 px-6 py-3.5 sm:py-4 rounded-full bg-white/80 hover:bg-white text-slate-800 border border-slate-300/80 text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm"
            >
              <span>Partner With Us</span>
            </a>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
