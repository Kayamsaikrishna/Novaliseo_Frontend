"use client"

import { motion } from "framer-motion"
import { Microscope, Database, FileText, CheckCircle2 } from "lucide-react"

const features = [
  {
    icon: Microscope,
    title: "AI Microstructure Classification",
    description: "Instant classification of graphite formations (Type A-E) in cast iron using high-resolution microscope imagery. Eliminates subjective manual grading."
  },
  {
    icon: CheckCircle2,
    title: "Industrial Compliance Engine",
    description: "Automatic grading and compliance verification against ISO international standards, ensuring every batch meets strict metallurgical specifications."
  },
  {
    icon: Database,
    title: "Traceable Digital Records",
    description: "Every inspection is digitally logged with confidence scores and timestamps, creating a permanent, audit-ready quality record for the facility."
  },
  {
    icon: FileText,
    title: "Automated Report Generation",
    description: "One-click export of detailed sample reports to Excel and PDF formats, including microstructure imagery and compliance summaries."
  }
]

export function PearlixaiSection() {
  return (
    <section className="relative z-10 py-24 md:py-32 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* Header & Logos - Placeholders */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center gap-6 mb-8 lg:mb-12"
          >
            {/* Logo Text Placeholder */}
            <div className="h-24 sm:h-28 md:h-36 w-[320px] md:w-[500px] px-4 md:px-0 bg-gradient-to-br from-white/[0.08] to-transparent backdrop-blur-2xl rounded-[2.5rem] border border-white/10 flex items-center justify-center shadow-2xl overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
              <span className="text-white/20 font-bold tracking-[0.3em] text-xl sm:text-2xl uppercase">PEARLIXAI LOGO</span>
            </div>
            <p className="text-emerald-400 font-medium tracking-[0.2em] text-sm md:text-base uppercase">AI-Powered Metallurgical Analysis</p>
          </motion.div>
        </div>

        {/* Hero Split Layout - Alternating (Visual Right, Info Left) */}
        <div className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-32 items-center mb-32">

          {/* Right: Product Visual Placeholder */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(16,185,129,0.1)] group bg-white/[0.02] flex items-center justify-center p-0">
               <div className="text-white/10 text-center px-10 border-2 border-dashed border-white/5 rounded-[2rem] py-24 uppercase tracking-[0.3em] text-sm">
                 Microstructure Analysis Interface
               </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/40 via-transparent to-transparent opacity-60 pointer-events-none" />
              <div className="absolute inset-0 border border-emerald-500/10 rounded-[3rem] pointer-events-none" />
            </div>
          </motion.div>

          {/* Left: Intro & Features List - Full Glossy Panel */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-white/[0.08] to-transparent backdrop-blur-2xl rounded-[4rem] p-10 md:p-14 border border-white/10 shadow-2xl shadow-black/50 relative shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
              {/* 3D Logo Watermark Placeholder */}
              <div className="absolute top-1/2 left-[30%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] opacity-5 pointer-events-none flex items-center justify-center z-0">
                 <div className="w-full h-full border-4 border-emerald-500/20 rounded-full flex items-center justify-center">
                    <span className="text-white/5 text-9xl font-bold italic uppercase tracking-tighter">P</span>
                 </div>
              </div>

              <div className="relative z-10 space-y-12">
                <div className="space-y-6">
                  <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">Metallurgical Intelligence</h3>
                  <p className="text-slate-200 leading-relaxed text-lg lg:text-xl font-light">
                    Transform your metallurgical workflow with Pearlixai. Automated, objective, and fully digital microstructure analysis that eliminates subjective grading and drives industrial excellence.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  {features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col gap-5 group"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-emerald-950/80 flex items-center justify-center border border-emerald-500/30 group-hover:bg-emerald-600 transition-all duration-300 shadow-xl">
                        <feature.icon className="w-8 h-8 text-emerald-400 group-hover:text-white" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-xl font-bold text-slate-100 group-hover:text-emerald-300 transition-colors">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-slate-200 leading-relaxed font-light">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Impact Footer */}
        <motion.div
          className="mt-20 bg-gradient-to-br from-white/[0.08] to-transparent backdrop-blur-2xl rounded-[3rem] border border-white/10 shadow-2xl shadow-black/50 p-10 md:p-12 relative shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10 text-center">
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">Zero</div>
              <p className="text-slate-300 text-sm font-medium uppercase tracking-widest">Subjectivity in Grading</p>
              <p className="text-xs text-slate-500 mt-2 font-light">Objective, repeatable grading across all operators.</p>
            </div>
            <div className="group border-y md:border-y-0 md:border-x border-white/10 py-8 md:py-0 px-4 md:px-8">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">Seconds</div>
              <p className="text-slate-300 text-sm font-medium uppercase tracking-widest">Inspection Throughput</p>
              <p className="text-xs text-slate-500 mt-2 font-light">Reduced from several minutes to instant AI classification.</p>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">Digital</div>
              <p className="text-slate-300 text-sm font-medium uppercase tracking-widest">Audit & Traceability</p>
              <p className="text-xs text-slate-500 mt-2 font-light">Every result logged with full metadata for quality records.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
