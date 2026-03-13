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
    <section className="relative z-10 py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* Header & Logos */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center gap-6 mb-8 lg:mb-12"
          >
            {/* Logo Text */}
            <div className="h-24 sm:h-28 md:h-36 w-[320px] md:w-[450px] flex items-center justify-center">
              <img 
                src="/images/Chromiq/logo-text.png" 
                alt="Chromiq" 
                className="h-full w-full object-contain filter brightness-200"
              />
            </div>
            <p className="text-blue-400 font-medium tracking-[0.2em] text-sm md:text-base uppercase underline underline-offset-8 decoration-blue-500/40">Precision Chrome Metrology Suite</p>
          </motion.div>
        </div>

        {/* Hero Split Layout - Consistent Alignment (Visual Left, Info Right) */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">

          {/* Left: Product Visual */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(59,130,246,0.15)] group">
              <img 
                src="/images/Chromiq/home.png" 
                alt="Metrology Analysis Interface" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-transparent to-transparent opacity-60 pointer-events-none" />
              <div className="absolute inset-0 border border-blue-500/10 rounded-[3rem] pointer-events-none" />
            </div>
          </motion.div>

          {/* Right: Intro & Features List - Full Glossy Panel */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-white/[0.08] to-transparent backdrop-blur-2xl rounded-[4rem] p-10 md:p-14 border border-white/10 shadow-2xl shadow-black/50 relative shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)]">
              {/* 3D Logo Watermark */}
              <div className="absolute top-1/2 left-[70%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] opacity-[0.03] pointer-events-none flex items-center justify-center z-0">
                 <img src="/images/Chromiq/logo-3d.png" alt="" className="w-full h-full object-contain filter grayscale" />
              </div>
              <div className="relative z-10 space-y-12">
                <div className="space-y-6">
                  <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">Micron-Level Verification</h3>
                  <p className="text-slate-200 leading-relaxed text-lg lg:text-xl font-light">
                    Achieve absolute precision in chrome coating thickness measurement. Chromiq combines computer vision with industrial expertise.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  {features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col gap-5 group"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-blue-950/80 flex items-center justify-center border border-blue-500/30 group-hover:bg-blue-600 transition-all duration-300 shadow-xl">
                        <feature.icon className="w-8 h-8 text-blue-400 group-hover:text-white" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-xl font-bold text-slate-100 group-hover:text-blue-300 transition-colors">
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
      </div>
    </section>
  )
}
