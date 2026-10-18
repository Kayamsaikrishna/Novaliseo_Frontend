import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import NoiseBlobsHero from "../components/NoiseBlobsHero";
import TrainingOfferingsShowcase from "../components/TrainingOfferingsShowcase";
import { TrainingTestimonial } from "../components/TrainingTestimonial";

export default function IndustryTrainingsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] text-slate-900 relative selection:bg-cyan-500/20 overflow-x-hidden">
      
      {/* ================= 1. FULL-SCREEN 3D NOISE BLOBS HERO (AUTOMATIC SINGLE SCREEN FIT) ================= */}
      <NoiseBlobsHero />

      {/* ================= 2. WHAT WE DO & WHAT WE OFFER SHOWCASE ================= */}
      <TrainingOfferingsShowcase />



      {/* ================= 4. MAGNETIC PARALLAX TESTIMONIAL COMPONENT ================= */}
      <TrainingTestimonial />

      {/* ================= 5. CALL TO ACTION CONVERSION BANNER ================= */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pb-24 sm:pb-32 relative z-10">
        <div className="relative rounded-[3rem] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-10 sm:p-16 lg:p-20 text-white overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.18)]">
          {/* Subtle Ambient Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-cyan-500/15 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-blue-600/15 blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-400 text-xs font-mono font-semibold tracking-wider uppercase mb-5">
              Empowering the Next Generation
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Ready to Build Real <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
                Autonomous Systems?
              </span>
            </h2>

            <p className="mt-5 text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Join upcoming cohorts or partner with Novaliseo to establish accredited robotics labs and corporate training modules. Real hardware. Real impact.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/partner"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white hover:bg-slate-100 text-slate-950 text-xs sm:text-sm font-bold tracking-wide transition-all shadow-lg hover:scale-105 active:scale-95"
              >
                <span>Enroll in Next Cohort</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/partner"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs sm:text-sm font-semibold transition-all hover:scale-105 active:scale-95"
              >
                <span>Partner for Institution Labs</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
