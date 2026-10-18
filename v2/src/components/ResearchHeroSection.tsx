"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, Sparkles, ChevronRight, Layers, Cpu, Plane, Radio, Terminal } from "lucide-react";

import uavImg from "../assets/trainings/hover_uav_assembly.jpg";
import ugvImg from "../assets/trainings/hover_ground_ugv.jpg";
import lidarImg from "../assets/trainings/hover_lidar_slam.jpg";
import edgeAiImg from "../assets/trainings/hover_edge_ai.jpg";
import hilImg from "../assets/trainings/hover_faculty_industry.jpg";

interface ResearchAspect {
  id: string;
  num: string;
  title: string;
  category: string;
  description: string;
  image: string;
  focus: string[];
}

const aspects: ResearchAspect[] = [
  {
    id: "01",
    num: "01",
    title: "Autonomous Aerial & Flight Dynamics",
    category: "Aerospace",
    description: "Developing custom flight controllers, multi-rotor aerodynamics, and autonomous waypoint guidance stacks tested in real-world wind and environmental conditions.",
    image: uavImg,
    focus: ["PX4 & ArduPilot Autopilots", "Swarm Telemetry Protocols", "Custom Airframe Design"],
  },
  {
    id: "02",
    num: "02",
    title: "Ground Robotics & Mobile Kinematics",
    category: "Robotics",
    description: "Engineering all-terrain rovers, Ackerman steering kinematics, CAN bus drive controllers, and rugged chassis built for unstructured and GPS-denied environments.",
    image: ugvImg,
    focus: ["CAN Bus Telemetry", "High-Torque BLDC Drives", "All-Terrain Suspension"],
  },
  {
    id: "03",
    num: "03",
    title: "Embedded Edge AI & Low-Latency Vision",
    category: "Edge AI",
    description: "Porting deep neural networks to constrained edge hardware. Accelerating real-time vision pipelines with TensorRT for high-framerate on-device inferencing.",
    image: edgeAiImg,
    focus: ["NVIDIA Jetson Architectures", "Sub-10ms Inference", "Thermal & Power Budgets"],
  },
  {
    id: "04",
    num: "04",
    title: "3D Spatial Mapping, SLAM & Perception",
    category: "Perception & SLAM",
    description: "Integrating 3D LiDAR point clouds, stereo depth sensors, Kalman sensor fusion, and Isaac Sim physics-accurate digital twin validation for safety-critical platforms.",
    image: lidarImg,
    focus: ["3D LiDAR Odometry", "Isaac Sim Physics Twins", "Sensor Fusion Filters"],
  },
  {
    id: "05",
    num: "05",
    title: "Hardware-in-the-Loop & Bench Validation",
    category: "HIL Testing",
    description: "Rapid prototyping and rigorous electrical testing using oscilloscopes, real-time waveform telemetry, and hardware-in-the-loop (HIL) automated regression testbenches.",
    image: hilImg,
    focus: ["HIL Simulation Racks", "Firmware Regression Testing", "Oscilloscope Diagnostics"],
  },
];

export default function ResearchHeroSection() {
  const [activeId, setActiveId] = useState<string>("01");
  const activeAspect = aspects.find((a) => a.id === activeId) || aspects[0];

  const scrollToCollab = () => {
    const el = document.getElementById("collaboration-models");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-[100dvh] lg:h-[100dvh] lg:max-h-[100dvh] bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] text-slate-900 overflow-y-auto lg:overflow-hidden flex flex-col justify-between pt-[clamp(68px,9vh,82px)] pb-[clamp(10px,1.5vh,18px)] select-none">
      
      {/* Background Soft Ambient Lighting Blobs */}
      <div className="absolute top-20 right-10 w-[550px] h-[550px] rounded-full bg-cyan-500/10 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[550px] h-[550px] rounded-full bg-blue-600/8 blur-[160px] pointer-events-none" />

      {/* Main Content Container - Fits in available screen space */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex-1 flex items-center min-h-0 my-auto">
        <div className="w-full grid lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-12 items-center">
          
          {/* Left Column: Clean Editorial Statement & Narrative (6 Cols) */}
          <div className="lg:col-span-6 text-left max-w-xl flex flex-col justify-center">
            
            {/* Category Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2 mb-2 sm:mb-2.5"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-600 animate-pulse" />
              <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-[0.2em] text-slate-500 uppercase">
                Interdisciplinary Research &amp; Co-Development
              </span>
            </motion.div>

            {/* Master Headline: Dynamically scales with screen width & height */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(1.75rem,2.8vw,3.25rem)] font-normal font-serif text-[#1e293b] leading-[1.08] tracking-tight mb-2.5 sm:mb-3"
            >
              Multidisciplinary research, <br />
              <span className="italic text-[#0f172a] block mt-0.5 font-serif">
                built for open collaboration.
              </span>
            </motion.h1>

            {/* Narrative Explaining our Research Team across Multiple Aspects */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs sm:text-[13px] lg:text-[13px] xl:text-[14px] text-slate-600 font-normal leading-relaxed mb-3 sm:mb-4 max-w-lg line-clamp-3 sm:line-clamp-4"
            >
              At Novaliseo, our dedicated research team works across multiple technical aspects—from autonomous flight mechanics and ground robotics to embedded neural hardware, edge algorithms, and sensor telemetry. We actively partner with university faculties, research scholars, and enterprise R&amp;D teams who are willing to collaborate, co-innovate, and build real-world physical technologies.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 mb-3.5 sm:mb-4.5"
            >
              <a
                href="/partner"
                className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-slate-950 hover:bg-black text-white font-semibold text-xs sm:text-sm tracking-tight transition-all duration-200 shadow-md hover:scale-105 active:scale-95 flex items-center gap-2 group"
              >
                <span>Collaborate With Our Team</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                onClick={scrollToCollab}
                className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-300/80 font-semibold text-xs sm:text-sm tracking-tight transition-all duration-200 shadow-xs hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <span>How We Partner</span>
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-500" />
              </button>
            </motion.div>

            {/* Multi-Aspect Coverage Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-2.5 sm:pt-3 border-t border-slate-300/70 flex flex-wrap items-center gap-2.5 sm:gap-4 text-[10px] sm:text-[11px] xl:text-xs font-mono font-medium text-slate-600"
            >
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-600" />
                Flight Dynamics
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                Ground Robotics
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                Edge AI &amp; Vision
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                Sensor SLAM
              </span>
            </motion.div>

          </div>

          {/* Right Column: Interactive Multi-Aspect Visual Showcase (6 Cols) */}
          <div className="lg:col-span-6 w-full flex flex-col justify-center">
            
            {/* Interactive Showcase Card */}
            <div className="relative w-full rounded-2xl sm:rounded-3xl lg:rounded-[2rem] bg-[#f5f4ef] border border-[#e2e0d8] p-[clamp(12px,1.8vh,22px)] shadow-[0_15px_35px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col justify-between">
              
              {/* Aspect Selector Tabs */}
              <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto pb-2 mb-2 sm:mb-2.5 border-b border-black/[0.08] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {aspects.map((aspect) => {
                  const isActive = activeId === aspect.id;
                  return (
                    <button
                      key={aspect.id}
                      onClick={() => setActiveId(aspect.id)}
                      className={`px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] xl:text-xs font-mono font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-slate-950 text-white shadow-xs"
                          : "bg-black/[0.04] text-slate-600 hover:bg-black/[0.08] hover:text-slate-950"
                      }`}
                    >
                      {aspect.num} {aspect.category}
                    </button>
                  );
                })}
              </div>

              {/* Active Visual Aspect Presentation */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeAspect.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col text-left"
                >
                  
                  {/* Aspect Hardware Photograph */}
                  <div className="relative w-full h-[clamp(130px,19vh,205px)] rounded-xl sm:rounded-2xl overflow-hidden border border-white/90 shadow-[0_10px_25px_rgba(0,0,0,0.08)] mb-2 sm:mb-2.5 bg-slate-900 group shrink-0">
                    <img 
                      src={activeAspect.image} 
                      alt={activeAspect.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                  </div>

                  {/* Aspect Title & Narrative */}
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-slate-950 tracking-tight mb-0.5 sm:mb-1">
                    {activeAspect.title}
                  </h3>
                  <p className="text-slate-600 text-[11px] sm:text-xs xl:text-[12.5px] leading-relaxed mb-2 font-normal line-clamp-2">
                    {activeAspect.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-black/[0.06]">
                    {activeAspect.focus.map((item, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-white border border-slate-200/90 text-slate-700 text-[10px] sm:text-[11px] font-mono shadow-2xs whitespace-nowrap"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                </motion.div>
              </AnimatePresence>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
