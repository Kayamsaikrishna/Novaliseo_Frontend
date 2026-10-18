"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, Sparkles, Cpu, Radio, Layers } from "lucide-react";
import { VolumetricStudio } from "./VolumetricStudio";

import uavVisual from "../assets/trainings/hover_uav_assembly.jpg";
import edgeAiVisual from "../assets/trainings/hover_edge_ai.jpg";
import lidarVisual from "../assets/trainings/hover_lidar_slam.jpg";

interface ResearchThrustCard {
  number: string;
  tag: string;
  title: string;
  subtitle: string;
  spec: string;
  icon: React.ElementType;
  image: string;
}

const thrusts: ResearchThrustCard[] = [
  {
    number: "01",
    tag: "AEROSPACE SWARMS",
    title: "Multi-Agent Swarm Autonomy",
    subtitle: "Decentralized mesh networks, distributed flocking dynamics, and fail-safe formation control.",
    spec: "PX4 / ROS2 · <15ms Mesh",
    icon: Radio,
    image: uavVisual,
  },
  {
    number: "02",
    tag: "SOVEREIGN SILICON",
    title: "Neuromorphic Edge Intelligence",
    subtitle: "Air-gapped on-chip neural execution, TensorRT acceleration, and zero-cloud dependency.",
    spec: "NVIDIA SOM · Sub-10ms Inference",
    icon: Cpu,
    image: edgeAiVisual,
  },
  {
    number: "03",
    tag: "PHYSICS TWINS",
    title: "Isaac Sim & 3D Spatial SLAM",
    subtitle: "Hardware-in-the-loop validation, photorealistic synthetic sensors, and LiDAR occupancy mapping.",
    spec: "Isaac Sim · 64-Beam LiDAR",
    icon: Layers,
    image: lidarVisual,
  },
];

export default function ResearchHeroSection() {
  const scrollToForm = () => {
    const el = document.getElementById("partnership-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-[92vh] sm:min-h-screen bg-black overflow-hidden flex items-center justify-center pt-20 pb-16">
      
      {/* 3D Volumetric Studio with Spotlight Projection */}
      <VolumetricStudio className="w-full h-full min-h-[92vh] sm:min-h-screen">
        
        {/* Main Stage UI */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col items-center justify-center text-center my-auto min-h-[85vh] sm:min-h-[90vh]">
          
          {/* Eyebrow Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 pointer-events-auto"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-white/80 text-[11px] sm:text-xs font-mono font-semibold tracking-[0.22em] uppercase">
              Novaliseo Advanced Research &amp; Labs
            </span>
          </motion.div>

          {/* Master Headline: Volumetric Editorial Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] leading-[0.98] mb-6 font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white/95 to-white/40 drop-shadow-2xl"
          >
            Research in a <br />
            <span className="italic font-serif font-normal text-white">
              new physical dimension.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-base md:text-lg max-w-2xl mb-8 text-white/60 font-normal leading-relaxed"
          >
            We partner with leading academic faculties, sovereign deep-tech labs, and enterprise engineering teams to push the physical frontier of swarm robotics, edge silicon, and physics digital twins.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-14 pointer-events-auto"
          >
            {/* Primary Pill Button */}
            <button
              onClick={scrollToForm}
              className="px-8 py-3.5 sm:py-4 rounded-full bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs sm:text-sm tracking-tight transition-all duration-200 shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:scale-105 active:scale-95 flex items-center gap-2 group cursor-pointer"
            >
              <span>Apply for Research Collaboration</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Secondary Glass Button */}
            <button
              onClick={() => {
                const el = document.getElementById("research-thrusts");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-7 py-3.5 sm:py-4 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/15 text-xs sm:text-sm font-semibold tracking-tight transition-all duration-200 hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Research Thrusts</span>
              <ArrowDown className="w-4 h-4 text-white/60" />
            </button>
          </motion.div>

          {/* ================= THREE ILLUMINATED RESEARCH VISUAL PODS ================= */}
          {/* Positioned directly under the 3 ceiling spotlight beams (35%, 50%, 65%) */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 pointer-events-auto max-w-5xl"
          >
            {thrusts.map((t, idx) => {
              const Icon = t.icon;
              return (
                <div
                  key={idx}
                  className="group relative rounded-2xl sm:rounded-3xl bg-black/60 hover:bg-black/80 border border-white/10 hover:border-white/25 p-4 sm:p-5 backdrop-blur-xl transition-all duration-500 shadow-[0_15px_40px_rgba(0,0,0,0.8)] text-left flex flex-col justify-between overflow-hidden"
                >
                  {/* Subtle Top Spotlight Reflection Glow */}
                  <div className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Tactile Hardware Photo */}
                  <div className="relative w-full aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden mb-4 border border-white/10 shadow-lg">
                    <img 
                      src={t.image} 
                      alt={t.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Top Spec Pill */}
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-mono text-cyan-300 font-semibold uppercase tracking-wider">
                      {t.tag}
                    </div>

                    {/* Bottom Metric */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[11px] font-mono text-white/80">
                      <span>{t.spec}</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-xs font-mono font-bold text-white/40">
                        {t.number}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                        {t.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-[13px] text-white/60 leading-relaxed font-normal">
                      {t.subtitle}
                    </p>
                  </div>

                </div>
              );
            })}
          </motion.div>

        </div>

      </VolumetricStudio>

    </section>
  );
}
