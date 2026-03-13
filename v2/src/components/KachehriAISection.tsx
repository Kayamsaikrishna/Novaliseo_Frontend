"use client"

import { motion } from "framer-motion"
import { Scale, BookOpen, BarChart3, ShieldCheck } from "lucide-react"

const features = [
  {
    icon: Scale,
    title: "Interactive Case Files & Roleplay",
    description: "Realistic Legal Scenarios with dynamic AI conversations. Characters react to your tone and empathy, featuring voice-enabled interactions for a true-to-life practice environment."
  },
  {
    icon: BookOpen,
    title: "The Professional Legal Library",
    description: "Instant access to digitized Indian law documents. Fully updated with BNS, BNSS, and BSA alongside the Constitution, with seamless multilingual support in English, Hindi, and Kannada."
  },
  {
    icon: BarChart3,
    title: "The 'Law Firm' Analytics Suite",
    description: "Continuous competency profiling across Research, Analysis, Drafting, Advocacy, and Ethics. Includes a gamified rank progression from Legal Intern to Senior Partner."
  },
  {
    icon: ShieldCheck,
    title: "Premium Aesthetics & Security",
    description: "The 'Supreme Court' Interface features elegant Platinum, Navy, and Gold styling. Personalized, highly secure cloud workspaces save unfinished files and career analytics."
  }
]

export function KachehriAISection() {
  return (
    <section className="relative z-10 py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-600/5 rounded-full blur-[150px] pointer-events-none" />

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
                src="/images/kachehriai/logo-text.png"
                alt="KachehriAI"
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
            <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(79,70,229,0.1)] group">
              <div className="absolute inset-0 flex items-center justify-center p-0">
                <img
                  src="/images/kachehriai/hero.png"
                  alt="KachehriAI Visual"
                  className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/40 via-transparent to-transparent opacity-60 pointer-events-none" />
              <div className="absolute inset-0 border border-indigo-500/10 rounded-[3rem] pointer-events-none" />
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
              {/* 3D Logo Watermark */}
              <div className="absolute top-1/2 left-[70%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] opacity-10 pointer-events-none flex items-center justify-center z-0">
                <img 
                  src="/images/kachehriai/logo-3d.png" 
                  alt="" 
                  className="w-full h-full object-contain grayscale filter invert mix-blend-screen brightness-150"
                />
              </div>

              <div className="relative z-10 space-y-12">
                <div className="space-y-6">
                  <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">AI Legal Practice Simulator</h3>
                  <p className="text-slate-200 leading-relaxed text-lg lg:text-xl font-light">
                    Step into the role of a practicing lawyer with KachehriAI. Investigate and argue hyper-realistic "Legal Mysteries" against highly responsive AI characters, powered by the BNS, BNSS, and BSA.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  {features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col gap-5 group"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-indigo-950/80 flex items-center justify-center border border-indigo-500/30 group-hover:bg-indigo-600 transition-all duration-300 shadow-xl">
                        <feature.icon className="w-8 h-8 text-indigo-400 group-hover:text-white" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-xl font-bold text-slate-100 group-hover:text-indigo-300 transition-colors">
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

        {/* Target Audience Footer */}
        <motion.div
          className="mt-20 bg-gradient-to-br from-white/[0.08] to-transparent backdrop-blur-2xl rounded-[3rem] border border-white/10 shadow-2xl shadow-black/50 p-10 md:p-12 relative shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            <div className="text-center group">
              <h4 className="text-white font-bold text-xl mb-3 group-hover:text-indigo-400 transition-colors">Law Students</h4>
              <p className="text-sm text-slate-200 leading-relaxed font-light">Bridge the gap between textbook theory and the unpredictable reality of interviewing clients and facing judges.</p>
            </div>
            <div className="text-center group border-y md:border-y-0 md:border-x border-white/10 py-8 md:py-0 px-4 md:px-8">
              <h4 className="text-white font-bold text-xl mb-3 group-hover:text-indigo-400 transition-colors">Junior Associates</h4>
              <p className="text-sm text-slate-200 leading-relaxed font-light">Practice complex case strategies in a safe, simulated environment before doing it in a real courtroom.</p>
            </div>
            <div className="text-center group">
              <h4 className="text-white font-bold text-xl mb-3 group-hover:text-indigo-400 transition-colors">Experienced Advocates</h4>
              <p className="text-sm text-slate-200 leading-relaxed font-light">Familiarize with navigating and applying the newly implemented BNS, BNSS, and BSA laws through hands-on practice.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
