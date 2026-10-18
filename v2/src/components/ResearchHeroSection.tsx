"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, Sparkles, ChevronRight, Layers, Cpu, Plane, Radio, Terminal } from "lucide-react";

import researchChamberBg from "../assets/research_chamber_bg.jpg";
import propulsionDynoImg from "../assets/trainings/drone_rotor_macro.jpg";
import opticalSensorImg from "../assets/trainings/drone_sensor_macro.jpg";
import roverKinematicsImg from "../assets/trainings/ground_robot_macro.jpg";
import alpineAutonomousImg from "../assets/trainings/drone_mountain_hero.jpg";

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
    title: "Aerodynamic Propulsion & Thrust Dyno Profiling",
    category: "Propulsion",
    description: "Benchmarking non-linear thrust curves, thermal dissipation across magnetic stators, and aero-elastic composite propeller deformation under simulated high-altitude stress.",
    image: propulsionDynoImg,
    focus: ["BLDC Stator Dyno Profiling", "Aero-Elastic Blade Dynamics", "Boundary-Layer Stress Testing"],
  },
  {
    id: "02",
    num: "02",
    title: "Multi-Axis Optoelectronic Payloads & Gyro Telemetry",
    category: "Perception",
    description: "Engineering custom vibration-isolated optical gimbals with real-time target tracking, low-lux telemetry, and sub-milliradian closed-loop inertial stabilization.",
    image: opticalSensorImg,
    focus: ["Sub-Milliradian Gyro Stability", "Micro-Vibration Isolation", "Low-Lux Optical Telemetry"],
  },
  {
    id: "03",
    num: "03",
    title: "Heavy-Duty Kinematics & High-Torque Hub Powertrains",
    category: "Kinematics",
    description: "Developing rugged double-wishbone suspension geometry, CAN-FD brushless hub motor drives, and real-time traction control for unstructured obstacle traversal.",
    image: roverKinematicsImg,
    focus: ["CAN-FD In-Wheel Hub Drives", "Independent Double Wishbones", "Active Dynamic Slip Control"],
  },
  {
    id: "04",
    num: "04",
    title: "Extreme-Environment Autonomy & High-Altitude Flight",
    category: "Autonomy",
    description: "Validating autonomous guidance algorithms against severe wind shear, sub-zero battery thermal drop, and non-GPS waypoint navigation across mountainous terrain.",
    image: alpineAutonomousImg,
    focus: ["Wind-Shear Rejection Algorithms", "Sub-Zero Thermal Management", "Non-GPS Terrain Navigation"],
  },
];

export default function ResearchHeroSection() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Automatically cycle through images and content slides one by one
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % aspects.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const activeAspect = aspects[activeIdx];

  const scrollToCollab = () => {
    const el = document.getElementById("collaboration-models");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-[100dvh] lg:h-[100dvh] lg:max-h-[100dvh] bg-[#0b111e] text-slate-900 overflow-y-auto lg:overflow-hidden flex flex-col justify-between pt-20 sm:pt-22 lg:pt-24 pb-6 sm:pb-8 select-none">
      
      {/* Background Architectural Research Facility Visual (Vividly & Clearly Visible) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <img 
          src={researchChamberBg} 
          alt="Novaliseo Research Facility" 
          className="w-full h-full object-cover object-[center_32%] scale-100 transition-transform duration-1000 ease-out" 
        />

        {/* Soft Radial Mist Overlay on the Left for 100% Crisp Text Contrast (Identical to Trainings Hero) */}
        <div 
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background: "radial-gradient(ellipse 65% 85% at 20% 50%, rgba(255, 255, 255, 0.96) 0%, rgba(255, 255, 255, 0.88) 38%, rgba(255, 255, 255, 0.25) 70%, transparent 100%)"
          }}
        />

        {/* Top Vignette for Navbar Readability */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/80 via-white/35 to-transparent pointer-events-none z-10" />

        {/* Bottom Soft Transition Fade into Next Section */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f8fafc] via-[#f8fafc]/60 to-transparent pointer-events-none z-10" />
      </div>

      {/* Ambient High-Tech Lighting Accents */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] rounded-full bg-cyan-400/15 blur-[140px] pointer-events-none z-10" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[140px] pointer-events-none z-10" />

      {/* Main Content Container - Spaciously fits dynamically in screen */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex-1 flex items-center min-h-0 my-auto">
        <div className="w-full grid lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          
          {/* Left Column: Editorial Statement & Collaborative Narrative (6 Cols) */}
          <div className="lg:col-span-6 text-left max-w-xl flex flex-col justify-center">
            
            {/* Category Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2 mb-3"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-600 animate-pulse" />
              <span className="text-xs font-mono font-semibold tracking-[0.2em] text-slate-600 uppercase">
                Interdisciplinary Research &amp; Co-Development
              </span>
            </motion.div>

            {/* Master Headline: Dignified, Spacious & Commanding */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] font-normal font-serif text-[#1e293b] leading-[1.08] tracking-tight mb-3.5 sm:mb-4"
            >
              Multidisciplinary research, <br />
              <span className="italic text-[#0f172a] block mt-0.5 font-serif">
                built for open collaboration.
              </span>
            </motion.h1>

            {/* Narrative: Completely Visible (No Truncation) */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs sm:text-sm lg:text-[14.5px] text-slate-700 font-normal leading-relaxed mb-5 sm:mb-6 max-w-lg"
            >
              At Novaliseo, our dedicated research team works across multiple technical aspects—from autonomous flight mechanics and ground robotics to embedded neural hardware, edge algorithms, and sensor telemetry. We actively partner with university faculties, research scholars, and enterprise R&amp;D teams who are willing to collaborate, co-innovate, and build real-world physical technologies.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-3.5 mb-5 sm:mb-6"
            >
              <a
                href="/partner"
                className="px-6 py-3 rounded-full bg-slate-950 hover:bg-black text-white font-semibold text-xs sm:text-sm tracking-tight transition-all duration-200 shadow-md hover:scale-105 active:scale-95 flex items-center gap-2 group"
              >
                <span>Collaborate With Our Team</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                onClick={scrollToCollab}
                className="px-5 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-300/80 font-semibold text-xs sm:text-sm tracking-tight transition-all duration-200 shadow-xs hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <span>How We Partner</span>
                <ArrowUpRight className="w-4 h-4 text-slate-500" />
              </button>
            </motion.div>

            {/* Multi-Aspect Coverage Strip (Maps 1-to-1 to the 4 Slides) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-3.5 sm:pt-4 border-t border-slate-300/80 flex flex-wrap items-center gap-3 sm:gap-5 text-xs font-mono font-medium text-slate-700"
            >
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-600" />
                Propulsion Dyno
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                Optical Payloads
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                Chassis Kinematics
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                Autonomous Flight
              </span>
            </motion.div>

          </div>

          {/* Right Column: Interactive Multi-Aspect Auto-Sliding Showcase (6 Cols) */}
          <div className="lg:col-span-6 w-full flex flex-col justify-center">
            
            {/* Interactive Showcase Card with Hover-to-Pause Auto-Slide */}
            <div 
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="relative w-full rounded-2xl sm:rounded-3xl lg:rounded-[2rem] bg-white/92 lg:bg-white/88 backdrop-blur-xl border border-white/80 p-5 sm:p-6 lg:p-6 shadow-[0_25px_60px_rgba(0,0,0,0.22)] overflow-hidden flex flex-col justify-between"
            >
              
              {/* Aspect Selector Tabs with Animated Auto-Slide Progress Bar */}
              <div className="flex items-center gap-1.5 sm:gap-2 mb-3.5 sm:mb-4 pb-2.5 border-b border-black/[0.08]">
                {aspects.map((aspect, idx) => {
                  const isActive = activeIdx === idx;
                  return (
                    <button
                      key={aspect.id}
                      onClick={() => setActiveIdx(idx)}
                      className={`relative flex-1 py-1.5 sm:py-2 px-2 text-center rounded-full text-[11px] sm:text-xs font-mono font-semibold transition-all duration-300 overflow-hidden cursor-pointer ${
                        isActive
                          ? "bg-slate-950 text-white shadow-sm"
                          : "bg-black/[0.04] text-slate-600 hover:bg-black/[0.08] hover:text-slate-950"
                      }`}
                    >
                      {/* Active Slide Progress Line */}
                      {isActive && !isPaused && (
                        <motion.div
                          key={`prog-${activeAspect.id}`}
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 4.5, ease: "linear" }}
                          className="absolute bottom-0 left-0 h-[2.5px] bg-cyan-400"
                        />
                      )}
                      <span className="relative z-10">{aspect.num} {aspect.category}</span>
                    </button>
                  );
                })}
              </div>

              {/* Active Visual Aspect Presentation (Smooth Auto-Slide Animation) */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeAspect.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col text-left"
                >
                  
                  {/* Aspect Hardware Photograph */}
                  <div className="relative w-full h-[180px] sm:h-[210px] lg:h-[215px] xl:h-[240px] rounded-xl sm:rounded-2xl overflow-hidden border border-white/90 shadow-md mb-3 sm:mb-3.5 bg-slate-950 group shrink-0">
                    <img 
                      src={activeAspect.image} 
                      alt={activeAspect.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                  </div>

                  {/* Aspect Title & Narrative */}
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-950 tracking-tight mb-1">
                    {activeAspect.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed mb-3 font-normal">
                    {activeAspect.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-2.5 border-t border-black/[0.06]">
                    {activeAspect.focus.map((item, idx) => (
                      <span 
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-800 text-[11px] font-mono shadow-2xs whitespace-nowrap font-medium"
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
