"use client"

import { motion } from "framer-motion"
import { ScanFace, Mic, ShieldAlert, HeartPulse, UserCheck, Eye, SmartphoneNfc } from "lucide-react"

const features = [
  {
    icon: ScanFace,
    title: "Intelligent Medicine Scanner",
    description: "Auto-detects and reads medicine packages instantly. Smart filtering automatically rejects non-medicine items like receipts, minimizing errors and saving time."
  },
  {
    icon: Mic,
    title: "Voice-Activated Expert",
    description: "Press a single button to ask questions in natural language. Receives clear, spoken, human-like responses translating complex pharmacological data."
  },
  {
    icon: ShieldAlert,
    title: "Clinical Safety Checker",
    description: "Compares multiple medications to proactively warn about severe, moderate, or minor interactions, translating medical jargon into practical advice."
  },
  {
    icon: HeartPulse,
    title: "Health Vault & Reminders",
    description: "Securely logs every scanned medicine. Set voice reminders like 'Remind me to take my pill at 8 AM' and sync seamlessly across devices for caregivers."
  }
]

export function CuraVoxSection() {
  return (
    <section className="relative z-10 py-24 md:py-32 overflow-hidden border-t border-white/[0.05]">
      {/* Background Glows for CuraVox Theme (Navy/Cyan/Green) */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-700/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none" />



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
            {/* Wordmark Logo */}
            <div className="h-24 sm:h-28 md:h-36 w-[320px] md:w-[450px] px-4 md:px-0 bg-gradient-to-br from-white/[0.08] to-transparent backdrop-blur-2xl rounded-[2.5rem] border border-white/10 flex items-center justify-center shadow-2xl overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
              <img
                src="/images/curavox/logo-text.png"
                alt="CuraVox The Voice of Care"
                className="w-full h-auto object-contain brightness-0 invert opacity-90 scale-90"
              />
            </div>
          </motion.div>
        </div>

        {/* Hero Split Layout */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center mb-32">

          {/* Left: Product Visual */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[9/20] max-h-[750px] max-w-[300px] md:max-w-sm mx-auto rounded-[3.5rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(6,182,212,0.15)] group bg-[#020617]/80">
              <div className="absolute inset-0 flex items-center justify-center p-0.5">
                <img
                  src="/images/curavox/home.jpeg"
                  alt="CuraVox Dashboard visual"
                  className="w-full h-full object-contain opacity-95 group-hover:scale-[1.02] transition-transform duration-1000"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/60 via-transparent to-transparent opacity-80 pointer-events-none" />
              <div className="absolute inset-0 border border-cyan-500/20 rounded-[3rem] pointer-events-none" />
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
            <div className="bg-gradient-to-br from-white/[0.08] to-transparent backdrop-blur-2xl rounded-[4rem] p-10 md:p-14 border border-white/10 shadow-2xl shadow-black/50 relative shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
              {/* 3D Logo Watermark - Moved inside for sharpness */}
              <div className="absolute top-1/2 left-[70%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] opacity-10 pointer-events-none flex items-center justify-center z-0">
                <img
                  src="/images/curavox/logo-3d.png"
                  alt=""
                  className="w-full h-full object-contain grayscale filter invert mix-blend-screen brightness-150"
                />
              </div>

              <div className="relative z-10 space-y-12">
                <div className="space-y-6">
                  <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">Revolutionary Voice-First Health Assistant</h3>
                  <p className="text-slate-200 leading-relaxed text-lg lg:text-xl font-light">
                    CuraVox is an intelligent personal health assistant designed to make medication management safe, accessible, and effortless. Built practically for individuals with visual impairments and the elderly.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  {features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col gap-5 group"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-cyan-950/80 flex items-center justify-center border border-cyan-500/30 group-hover:bg-cyan-600 transition-all duration-300 shadow-xl">
                        <feature.icon className="w-8 h-8 text-cyan-400 group-hover:text-white" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
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

        {/* Accessibility & Target Audience Highlight */}
        <motion.div
          className="rounded-[3rem] bg-gradient-to-br from-white/[0.08] to-transparent backdrop-blur-2xl border border-white/10 p-10 md:p-14 relative shadow-2xl shadow-black/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16 relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Empowering Independence</h3>
            <p className="text-slate-200 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              Accessibility is the foundation. CuraVox operates reliably offline, ensuring absolute privacy, and utilizes high-contrast UI, voice-first commands, and intelligent haptics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
            <div className="flex flex-col items-center text-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl border border-cyan-500/20 flex items-center justify-center bg-cyan-950/40 text-cyan-400 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300 shadow-lg">
                <Eye className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-slate-200 text-lg group-hover:text-cyan-400 transition-colors">Visually Impaired</h4>
                <p className="text-sm text-slate-300 font-light leading-relaxed">Independence in identifying and managing daily medications.</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl border border-cyan-500/20 flex items-center justify-center bg-cyan-950/40 text-cyan-400 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300 shadow-lg">
                <UserCheck className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-slate-200 text-lg group-hover:text-cyan-400 transition-colors">The Elderly</h4>
                <p className="text-sm text-slate-300 font-light leading-relaxed">Conversational interface that doesn't require complex navigation.</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl border border-cyan-500/20 flex items-center justify-center bg-cyan-950/40 text-cyan-400 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300 shadow-lg">
                <HeartPulse className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-slate-200 text-lg group-hover:text-cyan-400 transition-colors">Chronic Illness</h4>
                <p className="text-sm text-slate-300 font-light leading-relaxed">Safely tracking and managing multi-drug, complex regimens.</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl border border-cyan-500/20 flex items-center justify-center bg-cyan-950/40 text-cyan-400 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300 shadow-lg">
                <SmartphoneNfc className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-slate-200 text-lg group-hover:text-cyan-400 transition-colors">Caregivers</h4>
                <p className="text-sm text-slate-300 font-light leading-relaxed">Synchronized track records and remote adherence monitoring.</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
