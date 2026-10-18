import { motion } from "framer-motion";
import { ChevronRight, GraduationCap, Briefcase } from "lucide-react";
import NoiseBlobsHero from "../components/NoiseBlobsHero";

export default function IndustryTrainingsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] text-slate-900 relative selection:bg-cyan-500/20 overflow-x-hidden">
      
      {/* ================= 1. FULL-SCREEN 3D NOISE BLOBS HERO (AUTOMATIC SCREEN FIT) ================= */}
      <NoiseBlobsHero />

      {/* ================= 2. CURRICULUM TRAINING TRACKS (AUTOMATIC SCREEN FIT) ================= */}
      <section 
        id="training-tracks" 
        className="min-h-[100dvh] w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-16 sm:py-20 flex flex-col justify-center relative z-10"
      >
        {/* Section Header */}
        <div className="text-left mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/5 border border-slate-900/10 text-slate-700 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <span>Specialized Pathways</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Workforce Acceleration <span className="text-slate-400 font-light">Tracks</span>
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-xl font-normal">
            Targeted immersive curriculums engineered to transition engineers from software simulation to real-world defense silicon and physical hardware deployment.
          </p>
        </div>

        {/* Polished Light Glassmorphic Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Student Card */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="group relative rounded-[2.5rem] bg-white/80 hover:bg-white border border-slate-200/90 p-8 sm:p-12 backdrop-blur-2xl overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_60px_rgba(6,182,212,0.12)] transition-all duration-500 text-left"
          >
            {/* Top Accent Light Bar */}
            <div className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                For <span className="text-cyan-600">Students</span>
              </h3>
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 shadow-sm">
                <GraduationCap className="w-6 h-6" />
              </div>
            </div>

            <p className="text-slate-600 text-sm sm:text-base mb-8 leading-relaxed font-normal">
              Gain hands-on experience with production-grade autonomous systems. Our student programs are structured to fast-track careers into sovereign robotics, aerospace, and edge intelligence.
            </p>
            
            <ul className="space-y-4">
              {[
                'Autonomous Drone Engineering & Flight Control',
                'Embedded AI & Real-Time Computer Vision',
                'Hardened IoT, Sensor Fusion & SLAM',
                'Industrial Robotics & Kinematics Control'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3.5 text-slate-800 font-medium text-sm sm:text-base group/item">
                  <div className="w-7 h-7 rounded-full bg-cyan-50 text-cyan-600 group-hover/item:bg-cyan-600 group-hover/item:text-white flex items-center justify-center transition-all duration-300 shrink-0 shadow-xs">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                  <span className="group-hover/item:text-slate-950 transition-colors duration-200">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Industry Professional Card */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative rounded-[2.5rem] bg-white/80 hover:bg-white border border-slate-200/90 p-8 sm:p-12 backdrop-blur-2xl overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_60px_rgba(37,99,235,0.12)] transition-all duration-500 text-left"
          >
            {/* Top Accent Light Bar */}
            <div className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="flex items-center justify-between mb-6">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                For <span className="text-blue-600">Professionals</span>
              </h3>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-sm">
                <Briefcase className="w-6 h-6" />
              </div>
            </div>

            <p className="text-slate-600 text-sm sm:text-base mb-8 leading-relaxed font-normal">
              Upskill technical teams with targeted enterprise programs focusing on sovereign silicon integration, physics-accurate digital twins, and autonomous operations.
            </p>
            
            <ul className="space-y-4">
              {[
                'Enterprise AI & Neural Edge Deployment',
                'Predictive Vibration & Maintenance Implementation',
                'Digital Twin Simulation & Smart Tooling Fabric',
                'Air-Gapped Sovereign Hardware Architecture'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3.5 text-slate-800 font-medium text-sm sm:text-base group/item">
                  <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white flex items-center justify-center transition-all duration-300 shrink-0 shadow-xs">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                  <span className="group-hover/item:text-slate-950 transition-colors duration-200">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
        </div>
      </section>

    </div>
  );
}
