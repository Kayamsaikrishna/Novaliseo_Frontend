"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { VolumetricStudio } from "./VolumetricStudio";

import researchBg from "../assets/research_chamber_bg.jpg";
import uavVisual from "../assets/trainings/hover_uav_assembly.jpg";
import edgeAiVisual from "../assets/trainings/hover_edge_ai.jpg";
import lidarVisual from "../assets/trainings/hover_lidar_slam.jpg";

interface ResearchDomain {
  id: string;
  num: string;
  title: string;
  description: string;
  image: string;
}

const domains: ResearchDomain[] = [
  {
    id: "01",
    num: "01",
    title: "Autonomous Drone Swarms",
    description: "Decentralized mesh networks, distributed flocking dynamics, and fail-safe formation flight stacks engineered for unconstrained atmospheric environments.",
    image: uavVisual,
  },
  {
    id: "02",
    num: "02",
    title: "Sovereign Edge Silicon",
    description: "Neuromorphic on-chip neural execution, TensorRT low-latency inference, and air-gapped embedded processors operating without external cloud dependency.",
    image: edgeAiVisual,
  },
  {
    id: "03",
    num: "03",
    title: "Physics Digital Twins & SLAM",
    description: "Hardware-in-the-loop simulation testbeds, 3D LiDAR spatial mapping, and Isaac Sim synthetic sensor pipelines for safety-critical deployment.",
    image: lidarVisual,
  },
];

export default function ResearchHeroSection() {
  const [activeId, setActiveId] = useState<string>("01");
  const activeDomain = domains.find((d) => d.id === activeId) || domains[0];

  return (
    <section className="relative w-full h-screen max-h-screen min-h-[700px] bg-[#020617] text-white overflow-hidden flex flex-col justify-between select-none">
      
      {/* ================= 1. CINEMATIC AEROSPACE RESEARCH BACKGROUND ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src={researchBg} 
          alt="Aerospace Research Laboratory" 
          className="w-full h-full object-cover opacity-35" 
        />
        {/* Atmospheric Gradient Overlays for Extreme Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/85 to-[#020617]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/80" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px]" />
      </div>

      {/* Spacer to clear fixed Navbar cleanly */}
      <div className="h-20 sm:h-24 shrink-0" />

      {/* ================= 2. MAIN RESEARCH STAGE (TWO-COLUMN CINEMATIC GALLERY) ================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 flex-1 flex items-center my-auto">
        <div className="w-full grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Clean Editorial Statement & Interactive Domain Selectors (5 Cols) */}
          <div className="lg:col-span-6 text-left max-w-xl z-20">
            
            {/* Master Headline: Pure Unobstructed Editorial Typography */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-[62px] xl:text-[68px] font-bold text-white tracking-tight leading-[1.02] mb-5"
            >
              Research at the <br />
              <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-cyan-400">
                frontier of autonomy.
              </span>
            </motion.h1>

            {/* Concise Mission Narrative */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs sm:text-sm lg:text-base text-slate-300 font-normal leading-relaxed mb-8 max-w-lg"
            >
              We partner with university faculties, sovereign defense laboratories, and deep-tech enterprises to co-develop swarm robotics, edge microprocessors, and physics-accurate simulation testbeds.
            </motion.p>

            {/* Interactive Domain List (Switch active spotlight specimen) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-2.5 mb-8"
            >
              {domains.map((domain) => {
                const isActive = activeId === domain.id;
                return (
                  <div
                    key={domain.id}
                    onClick={() => setActiveId(domain.id)}
                    onMouseEnter={() => setActiveId(domain.id)}
                    className={`group px-4 sm:px-5 py-3 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between ${
                      isActive 
                        ? "bg-white/10 border-cyan-400/40 shadow-[0_4px_20px_rgba(6,182,212,0.15)] backdrop-blur-md" 
                        : "bg-white/[0.02] hover:bg-white/[0.06] border-white/10 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <span className={`text-xs font-mono font-bold transition-colors ${
                        isActive ? "text-cyan-400" : "text-slate-500 group-hover:text-slate-300"
                      }`}>
                        {domain.num}
                      </span>
                      <span className={`text-xs sm:text-sm font-semibold tracking-tight transition-colors ${
                        isActive ? "text-white" : "text-slate-400 group-hover:text-white"
                      }`}>
                        {domain.title}
                      </span>
                    </div>

                    <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${
                      isActive ? "text-cyan-400 translate-x-1" : "text-slate-600 group-hover:text-slate-400"
                    }`} />
                  </div>
                );
              })}
            </motion.div>

            {/* Primary Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <a
                href="/partner"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs sm:text-sm tracking-tight transition-all duration-200 shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:scale-105 active:scale-95"
              >
                <span>Initiate Research Partnership</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

          </div>

          {/* Right Column: 3D Volumetric Spotlight Chamber with Illuminated Specimen (6 Cols) */}
          <div className="lg:col-span-6 relative w-full h-[380px] sm:h-[440px] lg:h-[480px] xl:h-[520px] flex items-center justify-center">
            
            {/* The 3D Volumetric Studio Stage */}
            <VolumetricStudio 
              spots={[50]} 
              className="w-full h-full border border-white/15 shadow-[0_25px_70px_rgba(0,0,0,0.95)]"
            >
              {/* Illuminated Hardware Specimen Floating in the Spotlight Cone */}
              <div className="relative w-full h-full flex flex-col items-center justify-end pb-8 sm:pb-10 px-6 sm:px-10 z-20 pointer-events-auto">
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeDomain.id}
                    initial={{ opacity: 0, scale: 0.9, y: 25 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -20 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full max-w-md flex flex-col items-center text-center"
                  >
                    
                    {/* Floating Illuminated Hardware Photograph (No tags, pure physical visual) */}
                    <div className="relative w-full aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/30 shadow-[0_20px_50px_rgba(0,0,0,0.85)] bg-slate-950/80 mb-4 group">
                      <img 
                        src={activeDomain.image} 
                        alt={activeDomain.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      />
                      {/* Ambient Specular Highlight */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-white/10 pointer-events-none" />
                    </div>

                    {/* Active Specimen Narrative */}
                    <div className="max-w-sm">
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-1">
                        {activeDomain.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed line-clamp-2">
                        {activeDomain.description}
                      </p>
                    </div>

                  </motion.div>
                </AnimatePresence>

              </div>
            </VolumetricStudio>

          </div>

        </div>
      </div>

      {/* Bottom Subtle Status Bar */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-500">
        <span>● Active Laboratory Deployments &amp; Consortia</span>
        <span>AICTE / UGC / Sovereign Defense Aligned</span>
      </div>

    </section>
  );
}
