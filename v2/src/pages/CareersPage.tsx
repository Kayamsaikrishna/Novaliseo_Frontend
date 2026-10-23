"use client"

import React from "react"
import { motion } from "framer-motion"
import { 
  Rocket, 
  Users, 
  Lightbulb, 
  Heart, 
  Medal, 
  Laptop, 
  Coffee, 
  Briefcase, 
  ArrowRight
} from "lucide-react"
import { ShadowOverlay } from "../components/ShadowOverlay"
import { cn } from "../lib/utils"
import careersWorkspaceBg from "../assets/careers_workspace_real.jpg"

/* ═══════════════════════════════════════════════════════════════════════════
   Glossy Card Component
   ═══════════════════════════════════════════════════════════════════════════ */

const GlossyCard = ({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className={cn(
      "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/30 hover:bg-white/10",
      className
    )}
  >
    {/* Top Glow Overlay */}
    <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    
    {/* Inner Gloss */}
    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    
    <div className="relative z-10">{children}</div>
  </motion.div>
)

/* ═══════════════════════════════════════════════════════════════════════════
   Careers Page Content
   ═══════════════════════════════════════════════════════════════════════════ */

const cultureValues = [
  {
    icon: <Rocket className="h-8 w-8 text-purple-400" />,
    title: 'Innovation First',
    description: 'We encourage experimentation and pushing boundaries to solve complex problems.'
  },
  {
    icon: <Users className="h-8 w-8 text-blue-400" />,
    title: 'Collaborative Culture',
    description: 'Work in cross-functional teams where every voice matters and ideas flourish.'
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-cyan-400" />,
    title: 'Continuous Learning',
    description: 'We invest in your growth with learning budgets, conferences, and mentorship.'
  },
  {
    icon: <Heart className="h-8 w-8 text-emerald-400" />,
    title: 'Wellness & Balance',
    description: 'Flexible hours, mental health support, and unlimited PTO for work-life balance.'
  },
  {
    icon: <Medal className="h-8 w-8 text-amber-400" />,
    title: 'Recognition & Rewards',
    description: 'We celebrate achievements and provide competitive compensation and equity.'
  },
  {
    icon: <Laptop className="h-8 w-8 text-pink-400" />,
    title: 'Remote Flexibility',
    description: 'Hybrid work model with remote work options to suit your lifestyle.'
  }
];

const perks = [
  { icon: <Coffee className="h-5 w-5 text-purple-400" />, title: 'Welcome Kit', description: 'Personalized onboarding package with company swag' },
  { icon: <Medal className="h-5 w-5 text-blue-400" />, title: 'Performance Bonuses', description: 'Quarterly rewards for exceptional contributions' },
  { icon: <Laptop className="h-5 w-5 text-cyan-400" />, title: 'Career Development', description: 'Mentorship and skill advancement opportunities' },
  { icon: <Lightbulb className="h-5 w-5 text-emerald-400" />, title: 'Innovation Time', description: 'Dedicated hours for personal creative projects' },
  { icon: <Rocket className="h-5 w-5 text-amber-400" />, title: 'Recognition Programs', description: 'Regular employee and peer nomination awards' },
  { icon: <Users className="h-5 w-5 text-pink-400" />, title: 'Team Building', description: 'Regular events to foster collaboration' }
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* ── HERO SECTION WITH REALISTIC 3D WORKSPACE BACKGROUND ── */}
      <section className="relative z-10 flex min-h-[92vh] lg:min-h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 pb-16 sm:pb-20 overflow-hidden">
        
        {/* Realistic High-Tech Engineering Workspace Background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <img 
            src={careersWorkspaceBg} 
            alt="Novaliseo Engineering & Innovation Workspace" 
            className="w-full h-full object-cover object-center scale-105 filter brightness-[0.55] contrast-[1.1]"
          />
          
          {/* Deep Tech Vignette Overlays for 100% Crisp Foreground Legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#020617]/75 to-[#020617]" />
          
          {/* Center Light Aura */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent pointer-events-none" />

          {/* Minimal Architectural Engineering Grid */}
          <div 
            className="absolute inset-0 opacity-[0.035] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
              backgroundSize: "28px 28px"
            }}
          />
        </div>

        {/* Hero Content Template */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md text-slate-200 text-xs sm:text-sm font-medium tracking-wide mb-6 sm:mb-8 transition-colors shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Careers at Novaliseo</span>
            <span className="text-white/30">•</span>
            <span className="text-cyan-400 font-semibold">We're Hiring</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.12]">
            Build the Systems That{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-white to-blue-300 bg-clip-text text-transparent">
              Define Tomorrow
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 sm:mt-6 text-slate-300 text-base sm:text-lg md:text-xl font-normal max-w-2xl mx-auto leading-relaxed">
            Join a high-caliber team of engineers, researchers, and builders developing autonomous robotics, physical AI, and sovereign intelligence systems.
          </p>

          {/* Interactive CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#openings"
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm sm:text-base tracking-wide shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 flex items-center gap-2 cursor-pointer group"
            >
              <span>Explore Opportunities</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>

            <a
              href="#culture"
              className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md text-white font-medium text-sm sm:text-base tracking-wide hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <span>Our Culture &amp; Values</span>
            </a>
          </div>

          {/* Quick Value Props Highlights Bar */}
          <div className="mt-14 sm:mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 max-w-4xl mx-auto text-left">
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm">
              <div className="text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-1">Impact</div>
              <div className="text-white font-bold text-sm sm:text-base">Real-World Tech</div>
              <div className="text-slate-400 text-xs mt-0.5">Physical autonomy in field</div>
            </div>
            
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm">
              <div className="text-blue-400 text-xs font-mono font-semibold uppercase tracking-wider mb-1">Flexibility</div>
              <div className="text-white font-bold text-sm sm:text-base">Hybrid Culture</div>
              <div className="text-slate-400 text-xs mt-0.5">Focus on output, not hours</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm">
              <div className="text-purple-400 text-xs font-mono font-semibold uppercase tracking-wider mb-1">Rewards</div>
              <div className="text-white font-bold text-sm sm:text-base">Competitive Equity</div>
              <div className="text-slate-400 text-xs mt-0.5">Grow as the company scales</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm">
              <div className="text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-1">Growth</div>
              <div className="text-white font-bold text-sm sm:text-base">Learning Budget</div>
              <div className="text-slate-400 text-xs mt-0.5">Conferences, tools &amp; courses</div>
            </div>
          </div>

        </motion.div>
      </section>

      {/* ── OPENINGS & INTERNSHIPS SECTION ── */}
      <section id="openings" className="relative z-10 py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <h2 className="text-4xl font-black md:text-5xl">Opportunities & Internships</h2>
            <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.8)]" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <GlossyCard className="text-center py-16 px-10">
              <Briefcase className="mx-auto h-16 w-16 text-cyan-400 mb-8" />
              <h3 className="mb-4 text-3xl font-bold">Full-Time Roles</h3>
              <p className="mb-10 text-lg text-slate-400 leading-relaxed">
                We're actively scaling our team and new positions will be announced shortly. 
                In the meantime, we'd love to hear from talented individuals who share our 
                vision for sovereign intelligence in India.
              </p>
              <motion.a
                href="mailto:info@novaliseo.com"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-lg font-black text-white shadow-2xl transition-all hover:shadow-cyan-500/30"
              >
                Apply for Full-Time
                <ArrowRight className="h-5 w-5" />
              </motion.a>
            </GlossyCard>

            <GlossyCard className="text-center py-16 px-10">
              <Rocket className="mx-auto h-16 w-16 text-purple-400 mb-8" />
              <h3 className="mb-4 text-3xl font-bold">Internships & Co-ops</h3>
              <p className="mb-10 text-lg text-slate-400 leading-relaxed">
                Kickstart your career with hands-on experience. We offer 3-6 month internships in AI Research, Frontend Engineering, Backend Development, and Drone Operations for ambitious students.
              </p>
              <motion.a
                href="mailto:info@novaliseo.com"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 px-8 py-4 text-lg font-black text-white shadow-2xl transition-all hover:shadow-purple-500/30"
              >
                Apply for Internship
                <ArrowRight className="h-5 w-5" />
              </motion.a>
            </GlossyCard>
          </div>
        </div>
      </section>

      {/* ── CULTURE SECTION ── */}
      <section id="culture" className="relative z-10 py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <h2 className="text-4xl font-black md:text-5xl tracking-tight">Our Culture Architecture</h2>
            <p className="mt-4 text-lg text-slate-400 font-light">A framework where innovation is decentralized and impact is absolute.</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cultureValues.map((v, i) => (
              <GlossyCard key={i} delay={i * 0.1}>
                <div className="mb-6 inline-flex rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 group-hover:ring-cyan-500/50 transition-all duration-500">
                  {v.icon}
                </div>
                <h3 className="text-xl font-black mb-3">{v.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{v.description}</p>
              </GlossyCard>
            ))}
          </div>

          {/* Perks Nested Card */}
          <div className="mt-20 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-1 backdrop-blur-3xl">
            <div className="rounded-[calc(1.5rem-1px)] bg-slate-900/50 p-12 lg:p-16">
              <div className="mb-16 flex flex-col items-center justify-between gap-8 lg:flex-row">
                <div className="text-center lg:text-left">
                  <h3 className="text-3xl font-black md:text-4xl">System Benefits</h3>
                  <p className="mt-2 text-slate-400">Comprehensive infrastructure for your growth.</p>
                </div>
                <div className="h-px flex-1 bg-white/10 lg:h-px" />
              </div>

              <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
                {perks.map((p, i) => (
                  <div key={i} className="group/perk flex gap-6 mt-1 transition-transform duration-500 hover:translate-x-1">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 transition-all duration-500 group-hover/perk:ring-cyan-400 group-hover/perk:bg-cyan-400/10">
                      {p.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">{p.title}</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">{p.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-40" />
    </div>
  )
}
