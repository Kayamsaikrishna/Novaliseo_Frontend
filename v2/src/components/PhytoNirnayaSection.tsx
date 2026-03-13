"use client"

import { motion } from "framer-motion"
import { ScanSearch, Sprout, ShoppingCart, Leaf, Map, Smartphone, CloudRain, Users, Mic, Landmark } from "lucide-react"

const allFeatures = [
  {
    icon: ScanSearch,
    title: "Image-Based Diagnosis",
    description: "Upload pictures of plant leaves or affected areas. Intelligent core analyzes visual patterns to detect potential diseases with high accuracy."
  },
  {
    icon: Sprout,
    title: "Actionable Insights",
    description: "Goes beyond diagnosis. Provides detailed information about the specific disease and exactly how it affects the plant's health."
  },
  {
    icon: Leaf,
    title: "Supplement Recommendations",
    description: "Acts as a holistic guide, suggesting appropriate agricultural supplements, remedies, and treatments required to cure the specific diagnosed disease."
  },
  {
    icon: ShoppingCart,
    title: "Integrated Marketplace",
    description: "Dedicated marketplace section to discover and potentially procure the recommended supplements, organic treatments, or agricultural tools."
  },
  {
    icon: Smartphone,
    title: "Real-Time AR Camera Analysis",
    description: "Point mobile camera at the plant for instant real-time video feed analysis, highlighting diseased areas on the screen like a virtual scanner."
  },
  {
    icon: Map,
    title: "Predictive Outbreak Mapping",
    description: "Live heat maps created by anonymously logging locations of diagnosed diseases to warn local farming communities of spreading crop diseases."
  },
  {
    icon: CloudRain,
    title: "IoT Soil & Weather Integration",
    description: "Connects to physical farm soil sensors and local weather forecasts to predict diseases before physical visual symptoms even appear on the leaves."
  },
  {
    icon: Users,
    title: "24/7 Expert Community Hub",
    description: "Instant consultation via chat or video calls with verified agronomists, plus a community forum for local farmers to share localized tips."
  },
  {
    icon: Mic,
    title: "Voice-Assisted Multi-Lingual UI",
    description: "Regional language support and voice commands ('What's wrong with my tomato plant?') making the app usable regardless of digital literacy."
  },
  {
    icon: Landmark,
    title: "Crop Yield Health Forecasting",
    description: "Analyzes overall plant health and growth over time through regular photos to estimate final harvest yield and suggest optimal harvesting times."
  }
]

export function PhytoNirnayaSection() {
  return (
    <section className="relative z-10 py-24 md:py-32 overflow-hidden border-t border-white/[0.05]">
      {/* Background Glows for Agritech Theme (Emerald/Forest/Slate) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/2 left-0 w-[600px] h-[600px] bg-emerald-800/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-lime-500/5 rounded-full blur-[100px] pointer-events-none" />



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
                src="/images/phytonirnaya/logo-text.png" 
                alt="PhytoNirnaya" 
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
            <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(16,185,129,0.1)] group">
              <div className="absolute inset-0 flex items-center justify-center p-0">
                <img 
                  src="/images/phytonirnaya/hero.png" 
                  alt="PhytoNirnaya Visual" 
                  className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/40 via-transparent to-transparent opacity-60 pointer-events-none" />
              <div className="absolute inset-0 border border-emerald-500/20 rounded-[3rem] pointer-events-none" />
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
                  src="/images/phytonirnaya/logo-3d.png" 
                  alt="" 
                  className="w-full h-full object-contain grayscale filter invert mix-blend-screen brightness-150"
                />
              </div>

              <div className="relative z-10 space-y-12">
                <div className="space-y-6">
                  <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">AI-Driven Botanical Diagnosis</h3>
                  <p className="text-slate-200 leading-relaxed text-lg lg:text-xl font-light">
                    PhytoNirnaya is a comprehensive digital platform designed to help farmers identify and treat plant diseases instantly. Ensuring botanical health right from the field through precision AI.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  {allFeatures.slice(0, 6).map((feature, idx) => (
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

        {/* Unified Features Grid */}
        <motion.div
           className="mt-20 bg-gradient-to-br from-white/[0.08] to-transparent backdrop-blur-2xl rounded-[3rem] border border-white/10 shadow-2xl shadow-black/50 p-10 md:p-14 relative shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 lg:gap-y-12 relative z-10">
            {allFeatures.map((feature, idx) => (
              <div 
                key={idx}
                className="flex gap-6 group"
              >
                <div className="shrink-0 w-16 h-16 rounded-2xl bg-emerald-950/40 flex items-center justify-center border border-emerald-900/50 group-hover:bg-emerald-600 group-hover:border-emerald-400 transition-all duration-300 shadow-xl">
                  <feature.icon className="w-8 h-8 text-emerald-500 group-hover:text-white transition-all duration-300" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-slate-200 text-sm md:text-base leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
