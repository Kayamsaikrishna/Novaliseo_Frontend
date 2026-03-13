"use client"

import { motion } from "framer-motion"
import { Ruler, Activity, Layers, FileSpreadsheet } from "lucide-react"

const features = [
  {
    icon: Ruler,
    title: "Micron-Level Precision",
    description: "Computer vision-powered measurement of chrome coating layers calibrated to real-world reference scales. Eliminates parallax error."
  },
  {
    icon: Activity,
    title: "Live Vision Annotation",
    description: "Direct on-screen measurement overlays on live microscope feeds. Instantly compute thickness across multiple component positions."
  },
  {
    icon: Layers,
    title: "Multi-Position Profiling",
    description: "Efficiently session-log measurements for various ring positions (e.g., Top, Middle, Bottom) in a single unified workflow."
  },
  {
    icon: FileSpreadsheet,
    title: "Automated QC Reports",
    description: "Generate structured Excel reports with conditional pass/fail formatting based on your engineering specification limits."
  }
]

export function ChromiqSection() {
  return (
    <section className="relative z-10 py-24 md:py-32 bg-[#020617]/30 border-y border-white/5">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* Header - Placeholders */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-6"
          >
             {/* Logo Placeholder */}
            <div className="h-20 md:h-28 w-[300px] md:w-[400px] bg-white/[0.02] border border-white/10 rounded-[2rem] flex items-center justify-center">
              <span className="text-white/10 font-bold tracking-widest uppercase">CHROMIQ LOGO</span>
            </div>
            <p className="text-blue-400 font-medium tracking-[0.25em] text-xs uppercase underline underline-offset-8 decoration-blue-500/40">Chrome Coating Metrology Suite</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Precision in Every µm</h3>
              <p className="text-slate-300 text-lg font-light leading-relaxed">
                Chromiq replaces tedious manual alignment with a vision-based measurement system for piston rings and engine components, ensuring 100% accuracy in layer verification.
              </p>
            </div>

            <div className="space-y-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{feature.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Visual Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[4/3] rounded-[4rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 flex items-center justify-center p-10 overflow-hidden group">
               <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="text-white/5 text-center px-10 border-2 border-dashed border-white/5 rounded-[2rem] py-20 uppercase tracking-[0.3em]">
                 Coating Measurement Analysis Interface
               </div>
               
               {/* Decorative Accents */}
               <div className="absolute top-10 left-10 w-4 h-4 border-t-2 border-l-2 border-blue-500/40" />
               <div className="absolute bottom-10 right-10 w-4 h-4 border-b-2 border-r-2 border-blue-500/40" />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
