"use client"

import { motion } from "framer-motion"
import { QrCode, ScanBarcode, Scale, CreditCard, Globe, TrendingDown, Zap, PackageSearch, BarChart4, Sun } from "lucide-react"

const customerFeatures = [
  {
    icon: QrCode,
    title: "Quick Start",
    description: "Scan a QR code on the trolley using your smartphone to instantly register and unlock the cart for your shopping trip."
  },
  {
    icon: ScanBarcode,
    title: "Scan As You Go",
    description: "Use your smartphone camera to seamlessly scan products as you place them directly into the trolley."
  },
  {
    icon: Scale,
    title: "Built-In Weighing",
    description: "Integrated weighing system for fresh fruits and vegetables completely eliminates waiting in line at separate weighing stations."
  },
  {
    icon: CreditCard,
    title: "Queue-less Checkout",
    description: "Digital payments handled via smartphone. Glowing LED indicators on the trolley confirm payment, letting you simply walk out."
  },
  {
    icon: Globe,
    title: "Inclusive Accessibility",
    description: "Offers an offline mode for poor supermarket internet and supports 10 Indian regional languages (Hindi, English, Tamil, etc.)."
  }
]

const retailerBenefits = [
  {
    icon: TrendingDown,
    title: "Massive Cost Savings",
    description: "70% cheaper to implement than traditional 'smart carts' by leveraging the customer's own phone instead of expensive built-in touchscreens."
  },
  {
    icon: Zap,
    title: "Operational Efficiency",
    description: "Eliminates checkout bottlenecks, drastically increasing hypermarket foot traffic capacity without expanding checkout staff."
  },
  {
    icon: PackageSearch,
    title: "Inventory Management",
    description: "Automatically tracks what is being bought in real-time, providing immediate low-stock alerts and reducing inventory errors."
  },
  {
    icon: BarChart4,
    title: "Customer Insights",
    description: "Grants retailers rich, real-time analytics on shopping behavior, heavily enhancing store layout and targeted promotional strategies."
  },
  {
    icon: Sun,
    title: "Sustainable Operation",
    description: "Trolleys feature solar charging capabilities to maintain continuous operation without requiring massive, space-consuming plug-in bays."
  }
]

export function MachTrolleySection() {
  return (
    <section className="relative z-10 py-24 md:py-32 overflow-hidden border-t border-white/[0.05]">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/2 left-0 w-[600px] h-[600px] bg-slate-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />



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
                src="/images/machtrolley/logo-text.png" 
                alt="MachTrolley" 
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
            <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(251,191,36,0.1)] group">
              <div className="absolute inset-0 flex items-center justify-center p-0">
                <img 
                  src="/images/machtrolley/hero.png" 
                  alt="MachTrolley Visual" 
                  className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/40 via-transparent to-transparent opacity-60 pointer-events-none" />
              <div className="absolute inset-0 border border-amber-500/20 rounded-[3rem] pointer-events-none" />
            </div>
          </motion.div>

          {/* Right: Intro & Features Highlight - Full Glossy Panel */}
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
                  src="/images/machtrolley/logo-3d.png" 
                  alt="" 
                  className="w-full h-full object-contain grayscale filter invert mix-blend-screen brightness-150"
                />
              </div>

              <div className="relative z-10 space-y-12">
                <div className="space-y-6">
                  <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">Smart Retail Transformation</h3>
                  <p className="text-slate-200 leading-relaxed text-lg lg:text-xl font-light">
                    Experience the future of shopping with our AI-powered smart trolley. Instant weighing, automated billing, and seamless checkout—designed for the modern Indian retail landscape.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  {customerFeatures.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex flex-col gap-5 group">
                      <div className="w-16 h-16 rounded-2xl bg-amber-950/80 flex items-center justify-center border border-amber-500/30 group-hover:bg-amber-600 transition-all duration-300 shadow-xl">
                        <feature.icon className="w-8 h-8 text-amber-400 group-hover:text-white" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-xl font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
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

        {/* Features Split Section (Customers vs Retailers) */}
        <motion.div
           className="mt-20 bg-gradient-to-br from-white/[0.08] to-transparent backdrop-blur-2xl rounded-[3rem] border border-white/10 shadow-2xl shadow-black/50 p-10 md:p-14 relative shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
            {/* Customer Experience */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">The Customer Experience</h3>
              <div className="flex flex-col gap-8">
                {customerFeatures.map((feature, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="shrink-0 w-14 h-14 rounded-2xl bg-orange-950/80 flex items-center justify-center border border-orange-500/30 group-hover:bg-orange-600 transition-all duration-300 shadow-xl">
                      <feature.icon className="w-7 h-7 text-orange-400 group-hover:text-white transition-all duration-300" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-orange-300 transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-slate-200 text-sm md:text-base leading-relaxed font-light">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Retailer Value Proposition */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">Retailer Value Proposition</h3>
              <div className="flex flex-col gap-8">
                {retailerBenefits.map((feature, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="shrink-0 w-14 h-14 rounded-2xl bg-slate-800/80 flex items-center justify-center border border-slate-700/50 group-hover:bg-slate-600 transition-all duration-300 shadow-xl">
                      <feature.icon className="w-7 h-7 text-slate-300 group-hover:text-white transition-all duration-300" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-white transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-slate-200 text-sm md:text-base leading-relaxed font-light">
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
    </section>
  )
}
