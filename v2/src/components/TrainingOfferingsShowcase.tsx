import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, 
  ArrowRight, 
  Sparkles, 
  X,
  ExternalLink,
  GraduationCap,
  Building2,
  Briefcase,
  CheckCircle2
} from "lucide-react";

import uavImg from "../assets/trainings/hover_uav_assembly.jpg";
import ugvImg from "../assets/trainings/hover_ground_ugv.jpg";
import lidarImg from "../assets/trainings/hover_lidar_slam.jpg";
import edgeAiImg from "../assets/trainings/hover_edge_ai.jpg";
import arenaImg from "../assets/trainings/hover_indoor_arena.jpg";

type AudienceFilter = "all" | "students" | "universities" | "industries";

interface OfferingItem {
  id: string;
  num: string;
  title: string;
  headline: string;
  description: string;
  audiences: AudienceFilter[];
  audienceLabel: string;
  tags: string[];
  image: string;
  photoCaption: string;
  ctaText: string;
  ctaLink: string;
  rotation: number;
}

const offerings: OfferingItem[] = [
  {
    id: "01",
    num: "01",
    title: "AUTONOMOUS FLIGHT & UAVs",
    headline: "Carbon-Fiber Drone Assembly, PX4 Autopilots & Swarm Flight",
    description: "Assemble custom quadcopters from bare frames, solder telemetry microchips, calibrate ESC motor dynamics, and program autonomous waypoint navigation with fail-safe return-to-launch in real wind conditions.",
    audiences: ["all", "students", "universities", "industries"],
    audienceLabel: "Students · Campus Labs · Industry Cohorts",
    tags: ["PX4 & ArduPilot", "PID Tuning", "Swarm Telemetry", "Fail-Safe RTL"],
    image: uavImg,
    photoCaption: "Field Workbench · Quadcopter Avionics Stack",
    ctaText: "View Flight Stack Syllabus",
    ctaLink: "/partner",
    rotation: -3.5,
  },
  {
    id: "02",
    num: "02",
    title: "GROUND AUTONOMY & UGVs",
    headline: "All-Terrain Rovers, Ackerman Steering & CAN Bus Drive Systems",
    description: "Build rugged unmanned ground vehicles capable of traversing unstructured terrain. Master CAN bus telemetry protocols, high-torque brushless drive controllers, RTOS firmware, and industrial kinematics.",
    audiences: ["all", "students", "industries"],
    audienceLabel: "Robotics Engineers · Enterprise Teams",
    tags: ["CAN Bus Control", "Ackerman Steering", "RTOS Firmware", "Rugged UGV"],
    image: ugvImg,
    photoCaption: "Tactile Testing · High-Torque UGV Rover Chassis",
    ctaText: "View Ground Robotics Track",
    ctaLink: "/partner",
    rotation: 3.2,
  },
  {
    id: "03",
    num: "03",
    title: "ROS2, SLAM & 3D PERCEPTION",
    headline: "Real-Time 3D LiDAR Mapping & Stereo Depth Estimation",
    description: "Equip mobile rovers and aerial robotics with LiDAR point clouds, stereo depth perception, Kalman filter sensor fusion, and Isaac Sim physics-accurate digital twin navigation.",
    audiences: ["all", "students", "universities", "industries"],
    audienceLabel: "Perception Specialists · Research Labs",
    tags: ["3D LiDAR SLAM", "Isaac Sim Digital Twins", "Kalman Fusion", "Obstacle Avoidance"],
    image: lidarImg,
    photoCaption: "Sensor Testbench · LiDAR & Stereo Depth Optics",
    ctaText: "Explore SLAM Perception Track",
    ctaLink: "/partner",
    rotation: -4.0,
  },
  {
    id: "04",
    num: "04",
    title: "EMBEDDED EDGE AI & VISION",
    headline: "NVIDIA Jetson Silicon, TensorRT & Low-Latency Neural Inference",
    description: "Deploy deep neural networks on power-constrained edge silicon. Optimize custom YOLO vision models with TensorRT for sub-10ms object detection, aerial tracking, and thermal-hardened edge compute.",
    audiences: ["all", "students", "industries"],
    audienceLabel: "AI Engineers · Edge Silicon Architects",
    tags: ["NVIDIA Jetson SOM", "TensorRT Engine", "Sub-10ms Inference", "Thermal Hardening"],
    image: edgeAiImg,
    photoCaption: "Silicon Workbench · Jetson Compute Module & MIPI Camera",
    ctaText: "Explore Edge AI Curriculum",
    ctaLink: "/partner",
    rotation: 3.5,
  },
  {
    id: "05",
    num: "05",
    title: "TURNKEY LABS & WORKFORCE R&D",
    headline: "Indoor Motion-Capture Flight Arenas & Institutional Centers of Excellence",
    description: "Turnkey provisioning of optical motion-capture drone flight cages, AICTE-accredited curriculum modules for colleges, and accelerated hardware-in-the-loop (HIL) upskilling sprints for corporate engineering teams.",
    audiences: ["all", "universities", "industries"],
    audienceLabel: "Colleges · Universities · Corporate R&D",
    tags: ["Netted Flight Cages", "Optical MoCap Tracking", "AICTE Syllabi", "HIL Simulation"],
    image: arenaImg,
    photoCaption: "Campus Facility · Optical MoCap Indoor Drone Arena",
    ctaText: "Request Campus CoE Consultation",
    ctaLink: "/partner",
    rotation: -3.0,
  },
];

export default function TrainingOfferingsShowcase() {
  const [activeId, setActiveId] = useState<string>("02");
  const [activeFilter, setActiveFilter] = useState<AudienceFilter>("all");

  const filteredOfferings = offerings.filter(
    (item) => activeFilter === "all" || item.audiences.includes(activeFilter)
  );

  return (
    <section className="relative w-full py-20 sm:py-28 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] text-slate-900 overflow-hidden">
      
      {/* Background Soft Ambient Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-cyan-500/5 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[400px] rounded-full bg-amber-500/5 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/5 border border-slate-900/10 text-slate-700 text-xs font-mono font-semibold tracking-wider uppercase mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>Interactive Program Capabilities</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-[1.1]">
            What We Do &amp; <span className="font-light text-slate-400">What We Offer</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
            A hands-on breakdown of what we teach and deploy across students, universities, and enterprise engineering teams. Hover over any capability to inspect the physical hardware, toolchains, and deployment arenas.
          </p>

          {/* Audience Filter Pills */}
          <div className="mt-8 inline-flex p-1.5 rounded-full bg-slate-200/80 border border-slate-300/80 shadow-xs max-w-full overflow-x-auto">
            {[
              { id: "all", label: "All Capabilities" },
              { id: "students", label: "For Students", icon: GraduationCap },
              { id: "universities", label: "For Colleges & Universities", icon: Building2 },
              { id: "industries", label: "For Industry Teams", icon: Briefcase },
            ].map((tab) => {
              const isActive = activeFilter === tab.id;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveFilter(tab.id as AudienceFilter);
                    const matching = offerings.filter(o => tab.id === "all" || o.audiences.includes(tab.id as AudienceFilter));
                    if (matching.length > 0 && !matching.some(m => m.id === activeId)) {
                      setActiveId(matching[0].id);
                    }
                  }}
                  className={`relative px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 whitespace-nowrap ${
                    isActive 
                      ? "text-white shadow-sm shadow-slate-950/25" 
                      : "text-slate-600 hover:text-slate-950 hover:bg-white/50"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterPill"
                      className="absolute inset-0 rounded-full bg-slate-950"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {Icon && <Icon className="w-3.5 h-3.5" />}
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

        {/* ================= MAIN TACTILE HOVER LIST CARD ================= */}
        <div className="relative w-full rounded-[2.5rem] bg-[#f5f4ef] border border-[#e2e0d8] shadow-[0_20px_60px_rgba(0,0,0,0.06)] overflow-hidden transition-all duration-500">
          
          {/* Card Top Utility Bar */}
          <div className="px-6 sm:px-10 py-5 border-b border-black/[0.07] flex items-center justify-between">
            
            {/* Left Pill: CARD / OFFERINGS */}
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1 rounded-full bg-[#2a2a2a] text-white text-[10px] font-mono tracking-widest uppercase font-bold shadow-xs">
                CARD
              </span>
              <span className="text-xs font-mono font-medium text-slate-500 hidden sm:inline-block">
                NOVALISEO WORKFORCE &amp; CAPABILITY MATRIX
              </span>
            </div>

            {/* Right Status / Indicator Badge */}
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-xs font-mono font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Active Sprints
              </span>
            </div>

          </div>

          {/* Numbered Rows List */}
          <div className="divide-y divide-black/[0.07]">
            {filteredOfferings.map((item) => {
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
                    
                    {/* Top Row: Number, Title & Action Circle */}
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
                          aria-label={`Open ${item.title}`}
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

                    {/* Expanded Detail Panel with Text & Swinging Picture */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: "auto", marginTop: 24 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pt-2 pb-3 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 sm:gap-10">
                            
                            {/* Left Text Column: Headline, Description, Tags & CTA */}
                            <div className="max-w-xl text-left pl-0 sm:pl-16 lg:pl-24">
                              
                              {/* Audience Tag */}
                              <div className="inline-block px-3 py-1 rounded-full bg-slate-950/5 border border-slate-950/10 text-slate-700 text-[11px] font-mono font-semibold tracking-wider uppercase mb-3">
                                {item.audienceLabel}
                              </div>

                              {/* Specific Capability Headline */}
                              <h4 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mb-2">
                                {item.headline}
                              </h4>

                              {/* Concise Narrative Description */}
                              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                                {item.description}
                              </p>

                              {/* Technical Tags Grid */}
                              <div className="flex flex-wrap items-center gap-2 mb-7">
                                {item.tags.map((tag, tIdx) => (
                                  <span 
                                    key={tIdx}
                                    className="px-2.5 py-1 rounded-md bg-white border border-slate-300/80 text-slate-700 text-xs font-mono font-medium shadow-2xs"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>

                              {/* Action Link Button */}
                              <div>
                                <a
                                  href={item.ctaLink}
                                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-950 hover:bg-black text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md hover:scale-105 active:scale-95 transition-all"
                                >
                                  <span>{item.ctaText}</span>
                                  <ArrowRight className="w-4 h-4" />
                                </a>
                              </div>

                            </div>

                            {/* Right: Swinging Picture (Swings in from steep angle to settle at slight lean) */}
                            <motion.div
                              initial={{ opacity: 0, scale: 0.85, rotate: -15, y: 30 }}
                              animate={{ opacity: 1, scale: 1, rotate: item.rotation, y: 0 }}
                              exit={{ opacity: 0, scale: 0.85, rotate: 6, y: -20 }}
                              transition={{ type: "spring", stiffness: 240, damping: 20 }}
                              className="relative w-full sm:w-80 md:w-96 lg:w-[410px] aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.25)] border-2 border-white/95 shrink-0 self-center lg:self-auto"
                            >
                              <img 
                                src={item.image} 
                                alt={item.title} 
                                className="w-full h-full object-cover select-none pointer-events-none" 
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-mono px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                                <span>{item.photoCaption}</span>
                                <span className="text-cyan-400 font-semibold uppercase text-[10px]">Physical Lab</span>
                              </div>
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

          {/* Bottom Card Footer Strip */}
          <div className="px-6 sm:px-10 py-5 bg-[#eeece6]/60 border-t border-black/[0.07] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-600" />
              100% Physical Hardware &amp; Real-Flight Certification
            </span>
            <a 
              href="/partner" 
              className="inline-flex items-center gap-1.5 text-slate-800 hover:text-slate-950 font-semibold underline underline-offset-4 transition-colors"
            >
              <span>Download Comprehensive Academy Prospectus</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}
