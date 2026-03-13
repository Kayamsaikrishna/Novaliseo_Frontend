"use client"

import { useEffect, useState } from "react"
import { MeshGradient } from "@paper-design/shaders-react"
import { LayeredText } from "../components/LayeredText"
import { FeatureSteps } from "../components/FeatureSteps"
import { KachehriAISection } from "../components/KachehriAISection"
import { CuraVoxSection } from "../components/CuraVoxSection"
import { PhytoNirnayaSection } from "../components/PhytoNirnayaSection"
import { MachTrolleySection } from "../components/MachTrolleySection"
import { PearlixaiSection } from "../components/PearlixaiSection"
import { ChromiqSection } from "../components/ChromiqSection"

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

const HERO_LINES = [
  { top: "\u00A0", bottom: "SOVEREIGN" },
  { top: "SOVEREIGN", bottom: "INTELLIGENCE" },
  { top: "INTELLIGENCE", bottom: "AUTONOMOUS" },
  { top: "AUTONOMOUS", bottom: "OPERATIONS" },
  { top: "OPERATIONS", bottom: "INDIGENOUS" },
  { top: "INDIGENOUS", bottom: "FUTURE" },
  { top: "FUTURE", bottom: "\u00A0" },
];

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
              backgroundColor="#020617"
            />
            <MeshGradient
              className="absolute inset-0 w-full h-full opacity-50"
              colors={["#020617", "#ffffff", "#06b6d4", "#0e4a5c"]}
              speed={0.2}
              wireframe="true"
              backgroundColor="transparent"
            />
            <div className="absolute inset-0 pointer-events-none bg-black/15" />
          </>
        )}
      </div>

      {/* Hero Section */}
      <main className="relative z-20 min-h-screen flex items-center justify-center pt-32 px-8 md:px-16 lg:px-20 overflow-hidden">
        <div className="max-w-7xl text-center w-full">
          <LayeredText
            lines={HERO_LINES}
            fontSize="clamp(35px, 6vw, 100px)"
            className="drop-shadow-[0_0_20px_rgba(6,182,212,0.6)]"
          />
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
