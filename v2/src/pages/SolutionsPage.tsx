"use client"

import { useEffect, useState } from "react"
import { MeshGradient } from "@paper-design/shaders-react"
import { FeatureSteps } from "../components/FeatureSteps"
import { KachehriAISection } from "../components/KachehriAISection"
import { CuraVoxSection } from "../components/CuraVoxSection"
import { PhytoNirnayaSection } from "../components/PhytoNirnayaSection"
import { MachTrolleySection } from "../components/MachTrolleySection"
import { PearlixaiSection } from "../components/PearlixaiSection"
import { ChromiqSection } from "../components/ChromiqSection"

import { GLSLHills } from "../components/GLSLHills"
import { motion } from "framer-motion"

/* ───────────────────────────── SHIVA Profile Data ───────────────────────────── */

interface ShivaProfile {
  id: string
  title: string
  focus: string
  chip: string
  color: string
  textColor: string
  hex: string
  borderColor: string
  useCases: string[]
  caps: string[]
}

const profiles: ShivaProfile[] = [
  {
    id: "S",
    title: "Simple",
    focus: "Commercial & Routine Logistics",
    chip: "/images/shiva/chip_s.png",
    color: "bg-amber-500",
    textColor: "text-amber-400",
    hex: "#f59e0b",
    borderColor: "border-amber-500",
    useCases: ["Goods delivery", "Automated takeoff/landing", "Infrastructure inspection"],
    caps: ["GNSS-based navigation", "Standard obstacle avoidance", "Mission replay"],
  },
  {
    id: "H",
    title: "Hyper-Critical",
    focus: "Military-Grade Combat",
    chip: "/images/shiva/chip_h.png",
    color: "bg-red-600",
    textColor: "text-red-400",
    hex: "#dc2626",
    borderColor: "border-red-600",
    useCases: ["Border patrol", "Combat resupply", "Tactical payload deployment"],
    caps: ["Encrypted communication stack", "Anti-interference resilience", "Hardened fail-safes"],
  },
  {
    id: "I",
    title: "Intelligent",
    focus: "GNSS-Denied & Dynamic Environments",
    chip: "/images/shiva/chip_i.png",
    color: "bg-cyan-500",
    textColor: "text-cyan-400",
    hex: "#06b6d4",
    borderColor: "border-cyan-500",
    useCases: ["Urban canyons", "Indoor navigation", "Swarm collaboration"],
    caps: ["Visual-Inertial SLAM", "Onboard AI acceleration", "Sensor fusion engine"],
  },
  {
    id: "V",
    title: "Vulnerable Zone",
    focus: "High-Threat & Hazardous Zones",
    chip: "/images/shiva/chip_v.png",
    color: "bg-slate-400",
    textColor: "text-slate-300",
    hex: "#94a3b8",
    borderColor: "border-slate-400",
    useCases: ["Disaster response", "Mining risk inspection", "Signal-compromised regions"],
    caps: ["GNSS disruption detection", "Redundant navigation", "Terrain-adaptive routing"],
  },
  {
    id: "A",
    title: "Adaptive Autonomous",
    focus: "Strategic Counter-Threat",
    chip: "/images/shiva/chip_a.png",
    color: "bg-emerald-500",
    textColor: "text-emerald-400",
    hex: "#10b981",
    borderColor: "border-emerald-500",
    useCases: ["Counter-UAV operations", "Autonomous patrol", "Strategic deployment"],
    caps: ["Autonomous threat classification", "Defensive maneuver algorithms", "Swarm protocols"],
  },
]



/* ───────────────────────────── Solutions Page ───────────────────────────── */

export default function SolutionsPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-[#020617] relative overflow-hidden">
      {/* MeshGradient Background */}
      <div className="fixed inset-0 z-0">
        {mounted && (
          <>
            <MeshGradient
              className="absolute inset-0 w-full h-full"
              colors={["#020617", "#06b6d4", "#0891b2", "#164e63", "#030712"]}
              speed={0.3}
            />
            <MeshGradient
              className="absolute inset-0 w-full h-full opacity-50"
              colors={["#020617", "#ffffff", "#06b6d4", "#0e4a5c"]}
              speed={0.2}
            />
            <div className="absolute inset-0 pointer-events-none bg-black/15" />
          </>
        )}
      </div>

      {/* Hero Section */}
      <main className="relative z-20 min-h-screen flex items-center justify-center pt-32 px-6 overflow-hidden">
        {/* GLSL Hills Shader Background */}
        <GLSLHills 
          width="100%" 
          height="100%" 
          cameraZ={110} 
          planeSize={200}
          speed={0.4} 
        />

        <div className="max-w-5xl text-center w-full relative z-30">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-none uppercase drop-shadow-[0_0_30px_rgba(6,182,212,0.4)]"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              Sovereign <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Intelligence</span>
            </motion.h1>
            
            <motion.p 
              className="text-slate-400 text-lg md:text-2xl font-light tracking-[0.3em] uppercase max-w-3xl mx-auto leading-relaxed border-t border-white/10 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Architecting the Future of <br />
              <span className="text-white font-medium">Indigenous Autonomous Operations</span>
            </motion.p>
          </motion.div>
        </div>
      </main>

      {/* ═══════════ SHIVA System Doctrine (Feature Steps) ═══════════ */}
      <section className="relative z-10 pt-32 md:pt-40 pb-20">
        <FeatureSteps
          features={profiles.map(p => ({
            step: `Type ${p.id}`,
            title: `${p.id} - ${p.title}`,
            content: `${p.focus}. Designed for ${p.useCases.join(", ").toLowerCase()}.`,
            image: p.chip
          }))}
          title="Sovereign Intelligence Ecosystem"
          autoPlayInterval={5000}
        />
      </section>

      {/* ═══════════ KachehriAI Section ═══════════ */}
      <KachehriAISection />

      {/* ═══════════ CuraVox Section ═══════════ */}
      <CuraVoxSection />

      {/* ═══════════ PhytoNirnaya Section ═══════════ */}
      <PhytoNirnayaSection />

      {/* ═══════════ MachTrolley Section ═══════════ */}
      <MachTrolleySection />

      {/* ═══════════ Industrial AI Solutions ═══════════ */}
      <PearlixaiSection />
      <ChromiqSection />
    </div>
  )
}
