import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";

import uavImg from "../assets/trainings/hover_uav_assembly.jpg";
import ugvImg from "../assets/trainings/hover_ground_ugv.jpg";
import lidarImg from "../assets/trainings/hover_lidar_slam.jpg";
import edgeAiImg from "../assets/trainings/hover_edge_ai.jpg";
import arenaImg from "../assets/trainings/hover_indoor_arena.jpg";
import facultyIndustryImg from "../assets/trainings/hover_faculty_industry.jpg";

interface OfferingItem {
  id: string;
  num: string;
  title: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  rotation: number;
}

const offerings: OfferingItem[] = [
  {
    id: "01",
    num: "01",
    title: "AUTONOMOUS FLIGHT & UAVs",
    description: "Assemble custom quadcopters from bare frames, solder telemetry microchips, calibrate ESC motor dynamics, and program autonomous waypoint navigation with fail-safe return-to-launch in real wind conditions.",
    image: uavImg,
    ctaText: "Explore Flight Stack",
    ctaLink: "/partner",
    rotation: -3.5,
  },
  {
    id: "02",
    num: "02",
    title: "GROUND AUTONOMY & UGVs",
    description: "Build rugged unmanned ground vehicles capable of traversing unstructured terrain. Master CAN bus telemetry protocols, high-torque brushless drive controllers, RTOS firmware, and industrial kinematics.",
    image: ugvImg,
    ctaText: "Explore Ground Robotics",
    ctaLink: "/partner",
    rotation: 3.2,
  },
  {
    id: "03",
    num: "03",
    title: "ROS2, SLAM & 3D PERCEPTION",
    description: "Equip mobile rovers and aerial robotics with LiDAR point clouds, stereo depth perception, Kalman filter sensor fusion, and Isaac Sim physics-accurate digital twin navigation.",
    image: lidarImg,
    ctaText: "Explore SLAM Perception",
    ctaLink: "/partner",
    rotation: -4.0,
  },
  {
    id: "04",
    num: "04",
    title: "EMBEDDED EDGE AI & VISION",
    description: "Deploy deep neural networks on power-constrained edge silicon. Optimize custom YOLO vision models with TensorRT for sub-10ms object detection, aerial tracking, and thermal-hardened edge compute.",
    image: edgeAiImg,
    ctaText: "Explore Edge AI",
    ctaLink: "/partner",
    rotation: 3.5,
  },
  {
    id: "05",
    num: "05",
    title: "TURNKEY LABS & WORKFORCE R&D",
    description: "Turnkey provisioning of optical motion-capture drone flight cages, AICTE-accredited curriculum modules for colleges, and accelerated hardware-in-the-loop (HIL) upskilling sprints for corporate engineering teams.",
    image: arenaImg,
    ctaText: "Explore Campus Labs",
    ctaLink: "/partner",
    rotation: -3.0,
  },
  {
    id: "06",
    num: "06",
    title: "FACULTY & INDUSTRY PROGRAMS",
    description: "Intensive Faculty Development Programs (FDP) and custom corporate engineering sprints. Master production toolchains, hardware-in-the-loop (HIL) validation, and rapid curriculum modernization.",
    image: facultyIndustryImg,
    ctaText: "Explore Faculty & Industry Track",
    ctaLink: "/partner",
    rotation: 3.0,
  },
];

export default function TrainingOfferingsShowcase() {
  const [activeId, setActiveId] = useState<string>("02");

  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] text-slate-900 overflow-hidden">
      
      {/* Background Soft Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-cyan-500/5 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[400px] rounded-full bg-amber-500/5 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* ================= CLEAN, MINIMAL SECTION HEADER ================= */}
        <div className="text-left mb-8 sm:mb-12">
          <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-[0.2em] text-slate-500 uppercase">
            Curriculum &amp; Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight mt-1">
            What We Offer
          </h2>
        </div>

        {/* ================= PURE TACTILE HOVER LIST CARD ================= */}
        <div className="relative w-full rounded-[2.5rem] bg-[#f5f4ef] border border-[#e2e0d8] shadow-[0_20px_50px_rgba(0,0,0,0.06)] overflow-hidden transition-all duration-500">
          
          {/* Numbered Rows List */}
          <div className="divide-y divide-black/[0.07]">
            {offerings.map((item) => {
              const isActive = activeId === item.id;

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveId(item.id)}
                  onClick={() => setActiveId(item.id)}
                  className={`group relative transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? "bg-[#eeece6]/80" 
                      : "hover:bg-[#eeece6]/40"
                  }`}
                >
                  <div className="px-6 sm:px-10 lg:px-12 py-8 sm:py-10 transition-all duration-300">
                    
                    {/* Top Row: Number, Title & Circular Arrow */}
                    <div className="flex items-center justify-between gap-6">
                      
                      {/* Left: Big Number & Title */}
                      <div className="flex items-baseline gap-6 sm:gap-10 lg:gap-14 flex-1">
                        
                        {/* Number */}
                        <span 
                          className={`font-sans font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight transition-colors duration-300 select-none ${
                            isActive 
                              ? "text-slate-950" 
                              : "text-slate-400 group-hover:text-slate-600"
                          }`}
                        >
                          {item.num}
                        </span>

                        {/* Title */}
                        <h3 
                          className={`font-black uppercase tracking-tight text-xl sm:text-2xl md:text-3xl lg:text-4xl transition-colors duration-300 ${
                            isActive 
                              ? "text-slate-950" 
                              : "text-slate-400 group-hover:text-slate-600"
                          }`}
                        >
                          {item.title}
                        </h3>

                      </div>

                      {/* Right: Circular Arrow Button */}
                      <div className="shrink-0">
                        <button
                          type="button"
                          aria-label={`Select ${item.title}`}
                          className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-xs ${
                            isActive 
                              ? "bg-slate-950 text-white scale-105" 
                              : "bg-slate-900/10 text-slate-700 group-hover:bg-slate-900 group-hover:text-white"
                          }`}
                        >
                          {isActive ? (
                            <ArrowRight className="w-5 h-5 transition-transform" />
                          ) : (
                            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          )}
                        </button>
                      </div>

                    </div>

                    {/* Expanded Detail Panel with Text & Pure Swinging Picture */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: "auto", marginTop: 24 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pt-2 pb-2 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 sm:gap-10">
                            
                            {/* Left Text Column: Clean Description & Link */}
                            <div className="max-w-xl text-left pl-0 sm:pl-16 lg:pl-24">
                              
                              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                                {item.description}
                              </p>

                              <div className="mt-6">
                                <a
                                  href={item.ctaLink}
                                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-900 hover:text-black group/link py-1"
                                >
                                  <span>{item.ctaText}</span>
                                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                                </a>
                              </div>

                            </div>

                            {/* Right: Pure Swinging Picture (100% hardware-only, no humans, clean photograph at a slight lean) */}
                            <motion.div
                              initial={{ opacity: 0, scale: 0.85, rotate: -15, y: 30 }}
                              animate={{ opacity: 1, scale: 1, rotate: item.rotation, y: 0 }}
                              exit={{ opacity: 0, scale: 0.85, rotate: 6, y: -20 }}
                              transition={{ type: "spring", stiffness: 240, damping: 20 }}
                              className="relative w-full sm:w-80 md:w-96 lg:w-[410px] aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.22)] border-2 border-white/95 shrink-0 self-center lg:self-auto"
                            >
                              <img 
                                src={item.image} 
                                alt={item.title} 
                                className="w-full h-full object-cover select-none pointer-events-none" 
                              />
                            </motion.div>

                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>

    </section>
  );
}
