"use client"

import { motion } from " f_motion"
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
    <section className="relative z-10 py-24 md:py-32 overflow-hidden bg-gradient-to-b from-transparent to-[#020617]/50">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* Header & Logos - Placeholders */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center gap-6 mb-8"
          >
            {/* Logo Text Placeholder */}
            <div className="h-24 md:h-32 w-[320px] md:w-[450px] bg-white/[0.03] border border-white/10 rounded-[2.5rem] flex items-center justify-center backdrop-blur-md">
              <span className="text-white/20 font-bold tracking-widest uppercase">PEARLIXAI LOGO</span>
            </div>
            <p className="text-emerald-400 font-medium tracking-[0.2em] text-sm uppercase">AI-Powered Metallurgical Analysis</p>
          </motion.div>
        </div>

        {/* Hero Split Layout */}
        <div className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-32 items-center mb-32">

          {/* Left: Product Visual Placeholder */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/10 bg-white/[0.02] flex items-center justify-center group">
               <div className="text-white/10 text-xl font-medium">MICROSTRUCTURE VISUAL PLACEHOLDER</div>
               <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Right: Intro & Features */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-12">
              <div className="space-y-6">
                <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">Mastering Microstructures</h3>
                <p className="text-slate-200 leading-relaxed text-lg lg:text-xl font-light">
                   Pearlixai transforms metallurgical quality control from a subjective manual process into an automated, high-precision digital workflow. Instantly classify graphite formations with AI-driven certainty.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {features.map((feature, idx) => (
                  <div key={idx} className="space-y-4 group">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-all">
                      <feature.icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div className="space-y-2">
                       <h4 className="text-lg font-bold text-white tracking-wide">{feature.title}</h4>
                       <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Impact Panel */}
        <motion.div
          className="bg-gradient-to-r from-emerald-500/5 to-transparent border border-white/10 rounded-[3rem] p-10 md:p-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             <div className="space-y-2">
                <span className="text-3xl font-bold text-white">Zero</span>
                <p className="text-slate-400 text-sm">Subjectivity in Grading</p>
             </div>
             <div className="space-y-2">
                <span className="text-3xl font-bold text-white">95%</span>
                <p className="text-slate-400 text-sm">Reduction in Inspection Time</p>
             </div>
             <div className="space-y-2">
                <span className="text-3xl font-bold text-white">100%</span>
                <p className="text-slate-400 text-sm">Digital Audit Traceability</p>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
