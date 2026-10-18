import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, GraduationCap, Briefcase, ArrowRight, ShieldCheck, Cpu, Plane, Sparkles } from "lucide-react";
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

      {/* ================= 3. SPECIALIZED CURRICULUM TRAINING TRACKS ================= */}
      <section 
        id="training-tracks" 
        className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-20 sm:py-28 relative z-10"
      >
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/5 border border-slate-900/10 text-slate-700 text-xs font-mono font-semibold tracking-wider uppercase mb-3.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>Specialized Pathways</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Workforce Acceleration <span className="text-slate-400 font-light">Tracks</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base md:text-lg font-normal leading-relaxed">
            Targeted immersive curriculums engineered to transition engineers from purely academic simulation to physical autonomous hardware, edge AI deployment, and flight-tested systems.
          </p>
        </div>

        {/* Polished Light Glassmorphic Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Student Pathway Card */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="group relative rounded-[2.5rem] bg-white/85 hover:bg-white border border-slate-200/90 p-8 sm:p-12 backdrop-blur-2xl overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_60px_rgba(6,182,212,0.12)] transition-all duration-500 text-left flex flex-col justify-between"
          >
            {/* Top Accent Gradient Line */}
            <div className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs font-mono text-cyan-600 font-semibold tracking-wider uppercase">Path 01</span>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                    For <span className="text-cyan-600">Students</span>
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 shadow-2xs">
                  <GraduationCap className="w-6 h-6" />
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base mb-8 leading-relaxed font-normal">
                Gain practical experience with production-grade autonomous systems. Our student programs are structured to fast-track careers into robotics, aerospace autonomy, and edge intelligence.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  'Autonomous Drone Flight Stack & PX4 Autopilots',
                  'Embedded Edge AI & Low-Latency Computer Vision',
                  'Hardened IoT, Sensor Fusion & LiDAR SLAM',
                  'Industrial Robotics & Kinematics Control'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3.5 text-slate-800 font-medium text-sm sm:text-base group/item">
                    <div className="w-7 h-7 rounded-full bg-cyan-50 text-cyan-600 group-hover/item:bg-cyan-600 group-hover/item:text-white flex items-center justify-center transition-all duration-300 shrink-0 shadow-2xs">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                    <span className="group-hover/item:text-slate-950 transition-colors duration-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500 font-medium">Cohort Duration: 6 - 12 Weeks</span>
              <a
                href="/partner"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-cyan-700 hover:text-cyan-900 group/link"
              >
                <span>View Syllabus</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </a>
            </div>
          </motion.div>

          {/* Industry Professional Pathway Card */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative rounded-[2.5rem] bg-white/85 hover:bg-white border border-slate-200/90 p-8 sm:p-12 backdrop-blur-2xl overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_60px_rgba(37,99,235,0.12)] transition-all duration-500 text-left flex flex-col justify-between"
          >
            {/* Top Accent Gradient Line */}
            <div className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs font-mono text-blue-600 font-semibold tracking-wider uppercase">Path 02</span>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                    For <span className="text-blue-600">Professionals</span>
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-2xs">
                  <Briefcase className="w-6 h-6" />
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base mb-8 leading-relaxed font-normal">
                Upskill technical teams with targeted enterprise programs focusing on custom silicon integration, physics-accurate digital twins, and mission-critical autonomous deployments.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  'Enterprise Embedded AI & Neural Edge Pipelines',
                  'Predictive Maintenance & Vibration Telemetry',
                  'Digital Twin Simulation & Rapid Prototyping',
                  'Air-Gapped Sovereign Hardware Architecture'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3.5 text-slate-800 font-medium text-sm sm:text-base group/item">
                    <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white flex items-center justify-center transition-all duration-300 shrink-0 shadow-2xs">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                    <span className="group-hover/item:text-slate-950 transition-colors duration-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500 font-medium">Enterprise Sprints: 2 - 6 Weeks</span>
              <a
                href="/partner"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-700 hover:text-blue-900 group/link"
              >
                <span>Request Custom Syllabus</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </a>
            </div>
          </motion.div>
          
        </div>
      </section>

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
