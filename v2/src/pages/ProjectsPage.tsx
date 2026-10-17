import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { 
  Leaf, ScanSearch, Navigation, Plane, Box, 
  ClipboardList, ShieldCheck, HeartPulse, 
  Settings, Factory, MonitorPlay, BarChart, 
  Ship, FileText, ArrowRight, Radio, Cpu, 
  Activity, Sparkles, Terminal, ChevronDown
} from "lucide-react";

import solutionsRobotHero from "../assets/solutions_robot_hero.jpg";
import droneBg from "../assets/projects/real_drone_clean.jpg";
import healthBg from "../assets/projects/real_health_lab.jpg";
import mfgBg from "../assets/projects/real_industry_factory.jpg";
import marineBg from "../assets/projects/real_maritime_vessel.jpg";
import digitalBg from "../assets/novaliseo_servers_pure.jpg";

const CATEGORIES = [
  { id: "all", label: "All Systems", targetIndex: 0 },
  { id: "drone", label: "Drone Swarms", targetIndex: 0 },
  { id: "healthcare", label: "Healthcare AI", targetIndex: 1 },
  { id: "mfg", label: "Industrial IoT", targetIndex: 2 },
  { id: "marine", label: "Maritime & Naval", targetIndex: 3 },
  { id: "digital", label: "Digital Core", targetIndex: 4 },
];

const projects = [
  {
    id: "drone-intelligence",
    domain: "Autonomous Aerial Swarms",
    hugeName: "Swarms",
    tagline: "High-Altitude Mapping & Tactical UAV Systems",
    color: "from-blue-500/20",
    accent: "text-blue-400",
    bgImage: droneBg,
    desc: "Heavy-duty autonomous UAV architectures, GPS-denied sensor fusion, and multi-spectral computer vision for large-scale topographical surveying and tactical intelligence.",
    items: [
      { title: "Topographical & Crop Health Mapping", desc: "Aerial multispectral monitoring for terrain assessment, foliar pathogen detection, and high-precision coverage.", icon: Leaf },
      { title: "Infrastructure & Vessel Inspection", desc: "Automated aerial inspection systems utilizing edge computer vision and real-time structural anomaly reporting.", icon: ScanSearch },
      { title: "GPS-Denied Autonomous Flight", desc: "Hardened navigation pipelines powered by visual-inertial SLAM and multi-sensor fusion in contested airspace.", icon: Navigation },
      { title: "Coordinated Multi-Agent Operations", desc: "Distributed fleet orchestration protocols enabling synchronized aerial surveying and search operations.", icon: Plane }
    ]
  },
  {
    id: "healthcare-intelligence",
    domain: "Medical Diagnostic Intelligence",
    hugeName: "Health",
    tagline: "Air-Gapped Clinical Diagnostics & Telemetry",
    color: "from-purple-500/20",
    accent: "text-purple-400",
    bgImage: healthBg,
    desc: "Air-gapped clinical intelligence consoles, high-resolution radiological analysis, and secure predictive supply chains for modern healthcare infrastructure.",
    items: [
      { title: "Predictive Supply Chain Management", desc: "Autonomous inventory forecasting, pharmaceutical cold-chain integrity, and emergency logistics optimization.", icon: Box },
      { title: "Clinical Operations & Patient Flow", desc: "Telemetry platforms for hospital workflow automation, ICU bed allocation, and operational capacity planning.", icon: ClipboardList },
      { title: "Regulatory Compliance & Audit Trails", desc: "Automated validation frameworks ensuring airtight compliance and tamper-evident health protocol audits.", icon: ShieldCheck },
      { title: "Radiological Diagnostics Assistant", desc: "High-resolution neural computer vision assisting in rapid MRI/CT multi-planar anomaly detection.", icon: HeartPulse }
    ]
  },
  {
    id: "manufacturing-intelligence",
    domain: "Industrial Automation & Robotics",
    hugeName: "Industry",
    tagline: "Precision Edge Compute & Digital Twin Facilities",
    color: "from-amber-500/20",
    accent: "text-amber-400",
    bgImage: mfgBg,
    desc: "Deterministic industrial edge compute, multi-axis robotic automation, and real-time digital twin synchronization for zero-downtime manufacturing plants.",
    items: [
      { title: "Automated Robotic Inspection", desc: "Micro-millimeter surface defect detection using high-speed optical vision systems on active assembly lines.", icon: Settings },
      { title: "Predictive Machine Maintenance", desc: "Vibration and thermal telemetry analysis predicting mechanical wear weeks ahead of physical component failure.", icon: Factory },
      { title: "Zero-Latency Digital Twin", desc: "Synchronized virtual telemetry environments simulating assembly kinematics and optimizing cycle times.", icon: MonitorPlay }
    ]
  },
  {
    id: "maritime-intelligence",
    domain: "Maritime & Naval Intelligence",
    hugeName: "Maritime",
    tagline: "Naval Surveillance & Smart Port Robotics",
    color: "from-blue-400/20",
    accent: "text-blue-300",
    bgImage: marineBg,
    desc: "Autonomous naval surface surveillance, deep-water coastal acoustic perimeter monitoring, and high-throughput container terminal robotics.",
    items: [
      { title: "Vessel Health & Predictive Telemetry", desc: "Full-spectrum naval condition assessment, hull vibration monitoring, and predictive lifecycle intelligence.", icon: BarChart },
      { title: "Autonomous Coastal Surveillance", desc: "Long-range optical and radar perimeter monitoring for maritime border defense and surface navigation safety.", icon: Ship },
      { title: "Container Terminal Automation", desc: "Vision-guided gantry optimization and automated freight flow routing for high-density shipping hubs.", icon: Box }
    ]
  },
  {
    id: "digital-intelligence",
    domain: "Cyber Defense & Enterprise Fabric",
    hugeName: "Cyber",
    tagline: "Sovereign Threat Hunting & Datacenter Core",
    color: "from-indigo-500/20",
    accent: "text-indigo-400",
    bgImage: digitalBg,
    desc: "Air-gapped server infrastructure, real-time cyber threat hunting pipelines, and high-velocity sovereign data architectures with zero external cloud dependencies.",
    items: [
      { title: "Document & Signal Analytics", desc: "High-speed cryptographic parsing of unstructured intelligence streams and automated executive synthesis.", icon: FileText },
      { title: "Autonomous Threat Hunting", desc: "Deep packet inspection and behavioral telemetry models neutralizing zero-day intrusions in real time.", icon: ShieldCheck },
      { title: "Sovereign Datacenter Fabric", desc: "High-throughput deterministic data fabric running on air-gapped on-premise hardware clusters.", icon: BarChart }
    ]
  }
];

// =========================================================================
// 2. SCROLL INDEX SYSTEMS SHOWCASE (SCROLL-DRIVEN TRANSITION ANIMATION)
// =========================================================================
function ScrollIndexSection({ 
  projectsList,
  selectedIndex,
  onSelectIndex
}: { 
  projectsList: typeof projects;
  selectedIndex: number;
  onSelectIndex: (idx: number) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [internalIndex, setInternalIndex] = useState(selectedIndex);
  const [showDetails, setShowDetails] = useState(false);

  // Sync internalIndex with parent prop
  React.useEffect(() => {
    setInternalIndex(selectedIndex);
  }, [selectedIndex]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress (0 to 1) to project index (0 to 4)
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const total = projectsList.length;
    const nextIdx = Math.min(total - 1, Math.max(0, Math.floor(latest * total)));
    if (nextIdx !== internalIndex) {
      setInternalIndex(nextIdx);
      onSelectIndex(nextIdx);
    }
  });

  const activeProject = projectsList[internalIndex] || projectsList[0];

  const selectProject = (idx: number) => {
    setInternalIndex(idx);
    onSelectIndex(idx);
    if (containerRef.current) {
      const containerTop = containerRef.current.offsetTop;
      const totalHeight = containerRef.current.offsetHeight - window.innerHeight;
      const targetScroll = containerTop + (idx / (projectsList.length - 1 || 1)) * totalHeight;
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  return (
    <div 
      id="systems-index" 
      ref={containerRef} 
      className="relative h-[450vh] bg-[#02040a]"
    >
      {/* Sticky Viewport Stage — Pins to Screen During Scroll */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between select-none">
        
        {/* Full-Bleed Animated Background with Smooth Crossfade */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 z-0"
          >
            <img 
              src={activeProject.bgImage} 
              alt={activeProject.domain} 
              className="w-full h-full object-cover object-center" 
            />
            {/* Cinematic Ambient Vignettes */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/35 to-black/90" />
            <div className="absolute inset-0 bg-black/20" />
            <div className={`absolute inset-0 bg-gradient-to-t ${activeProject.color} to-transparent opacity-30`} />
          </motion.div>
        </AnimatePresence>

        {/* ================= TOP STATUS BAR & CLEAN PROGRESS ================= */}
        <div className="relative z-20 pt-24 sm:pt-28 px-6 sm:px-10 lg:px-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono tracking-wider text-slate-300 uppercase">
                {activeProject.domain}
              </span>
              <span className="text-white/30 text-xs">/</span>
              <span className="text-xs font-mono font-bold text-white">
                0{internalIndex + 1}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-xs font-mono font-medium tracking-wider text-slate-300 hover:text-white bg-black/60 hover:bg-black/90 border border-white/15 px-4 py-1.5 rounded-full backdrop-blur-xl transition-all duration-300"
            >
              {showDetails ? "Hide Architecture Specs ▲" : "View Architecture Specs ▼"}
            </button>
          </div>
        </div>

        {/* ================= CENTER: 100% UNOBSTRUCTED GIANT TYPOGRAPHY ================= */}
        <div className="relative z-20 flex-1 flex items-center justify-center px-4 overflow-hidden">
          
          {/* Giant Word Across the Center — COMPLETELY UNOBSTRUCTED, NOTHING BLOCKING IT */}
          <div className="w-full flex items-center justify-center pointer-events-none">
            <AnimatePresence mode="wait">
              <motion.h2
                key={activeProject.hugeName}
                initial={{ opacity: 0, y: 35, letterSpacing: "-0.04em" }}
                animate={{ opacity: 0.88, y: 0, letterSpacing: "-0.02em" }}
                exit={{ opacity: 0, y: -35 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="text-7xl sm:text-9xl md:text-[140px] lg:text-[180px] xl:text-[220px] 2xl:text-[260px] font-black text-white/95 drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)] text-center leading-none tracking-tighter"
              >
                {activeProject.hugeName}
              </motion.h2>
            </AnimatePresence>
          </div>

        </div>

        {/* ================= SLEEK RIGHT-SIDE FLOATING THUMBNAIL DOCK ================= */}
        <div className="absolute right-4 sm:right-8 lg:right-12 top-1/2 -translate-y-1/2 z-30 pointer-events-auto">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-black/65 backdrop-blur-2xl border border-white/15 rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 flex flex-col gap-2 sm:gap-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.85)] ring-1 ring-white/10"
          >
            {projectsList.map((p, idx) => {
              const isActive = internalIndex === idx;
              return (
                <button
                  key={p.id}
                  onClick={() => selectProject(idx)}
                  className="relative group/thumb focus:outline-none transition-transform duration-300"
                  title={p.domain}
                >
                  {/* Active Thumbnail Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeScrollThumb"
                      className="absolute -inset-1 rounded-xl sm:rounded-2xl border-2 border-white shadow-[0_0_16px_rgba(255,255,255,0.7)]"
                      transition={{ type: "spring", stiffness: 380, damping: 28 }}
                    />
                  )}

                  <div className="relative overflow-hidden rounded-lg sm:rounded-xl">
                    <img 
                      src={p.bgImage} 
                      alt={p.hugeName} 
                      className={`w-11 h-13 sm:w-12 sm:h-15 md:w-14 md:h-16 object-cover transition-all duration-300 ${
                        isActive 
                          ? "scale-105 brightness-110" 
                          : "opacity-40 hover:opacity-85 grayscale hover:grayscale-0 hover:scale-105"
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* ================= BOTTOM: PROJECT NARRATIVE & SPECS CARDS ================= */}
        <div className="relative z-20 pb-8 sm:pb-10 px-6 sm:px-10 lg:px-14">
          
          {/* Main Info Row */}
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
            <div className="max-w-xl text-left">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-xs sm:text-sm font-mono tracking-wider text-amber-300 font-semibold mb-1">
                    {activeProject.tagline}
                  </p>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F3F2EB] tracking-tight">
                    {activeProject.domain}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-slate-300 font-normal leading-relaxed drop-shadow-md">
                    {activeProject.desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Quick System Stepper Buttons */}
            <div className="flex items-center gap-3">
              <button
                disabled={internalIndex === 0}
                onClick={() => selectProject(internalIndex - 1)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed border border-white/15 flex items-center justify-center text-white backdrop-blur-md transition-all duration-200"
                aria-label="Previous System"
              >
                ←
              </button>
              <button
                disabled={internalIndex === projectsList.length - 1}
                onClick={() => selectProject(internalIndex + 1)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed border border-white/15 flex items-center justify-center text-white backdrop-blur-md transition-all duration-200"
                aria-label="Next System"
              >
                →
              </button>
            </div>
          </div>

          {/* Expandable Architecture Module Bento Cards */}
          <AnimatePresence>
            {showDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-6xl mx-auto overflow-hidden"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-white/10">
                  {activeProject.items.map((item) => (
                    <div 
                      key={item.title}
                      className="p-5 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 hover:border-white/25 transition-all duration-300 text-left"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center mb-3 text-white">
                        <item.icon className="w-5 h-5 text-amber-300" />
                      </div>
                      <h4 className="text-sm font-bold text-white mb-1.5 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </div>
  );
}

// =========================================================================
// MAIN PROJECTS PAGE
// =========================================================================
export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedSystemIndex, setSelectedSystemIndex] = useState(0);

  const selectSystem = (targetIndex: number) => {
    setSelectedSystemIndex(targetIndex);
    const el = document.getElementById("systems-index");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#02040a] text-white selection:bg-amber-400/20">
      
      {/* ========================================================================= */}
      {/* 1. CINEMATIC PRISMA-STYLE SOLUTIONS HERO SECTION                          */}
      {/* ========================================================================= */}
      <section className="relative pt-24 sm:pt-28 pb-8 sm:pb-12 px-3 sm:px-6 lg:px-8 max-w-[1780px] mx-auto w-full">
        
        {/* Main Hero Framing Card */}
        <div className="relative w-full h-[88vh] min-h-[660px] max-h-[960px] rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] overflow-hidden border border-white/10 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.85)] group select-none">
          
          {/* Background Image: Autonomous Robot Scout on Cliff Edge Over Golden Sunset Clouds */}
          <div className="absolute inset-0 z-0">
            <img 
              src={solutionsRobotHero} 
              alt="Novaliseo Autonomous Robot Scout" 
              className="w-full h-full object-cover object-center transition-transform duration-[16s] ease-out group-hover:scale-105" 
            />

            {/* Cinematic Gradient Overlays for Depth and Contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/85" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />
            <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-[#02040a] via-[#02040a]/70 to-transparent" />
          </div>

          {/* ================= TOP FLOATING NAVIGATION PILL (PRISMA STYLE) ================= */}
          <div className="absolute top-5 sm:top-7 inset-x-0 z-30 flex justify-center px-4">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="bg-black/80 backdrop-blur-2xl border border-white/15 rounded-full px-3 sm:px-6 py-2 sm:py-2.5 flex items-center gap-2 sm:gap-6 md:gap-7 shadow-[0_12px_36px_rgba(0,0,0,0.5)]"
            >
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      selectSystem(cat.targetIndex);
                    }}
                    className={`relative px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-[13px] font-medium transition-all duration-300 ${
                      isActive 
                        ? "text-white font-semibold" 
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeHeroPill"
                        className="absolute inset-0 bg-white/15 rounded-full border border-white/20 shadow-inner"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{cat.label}</span>
                  </button>
                );
              })}
            </motion.div>
          </div>

          {/* ================= BOTTOM CONTENT ROW (PRISMA STYLE) ================= */}
          <div className="absolute inset-x-0 bottom-0 z-20 p-6 sm:p-10 lg:p-14 xl:p-16 flex flex-col lg:flex-row lg:items-end justify-between gap-8 sm:gap-10">
            
            {/* Left: Giant Iconic Wordmark ("Solutions*") */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-baseline"
            >
              <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[130px] xl:text-[155px] 2xl:text-[180px] font-semibold tracking-[-0.035em] text-[#F3F2EB] leading-[0.88] drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)]">
                Solutions
                <span className="text-[#F3F2EB] font-serif font-light text-6xl sm:text-7xl lg:text-[110px] align-super ml-1 sm:ml-2 drop-shadow-xl animate-pulse">
                  *
                </span>
              </h1>
            </motion.div>

            {/* Right: Editorial Narrative + Pill CTA Button */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-md lg:max-w-lg xl:max-w-xl text-left flex flex-col items-start lg:items-start"
            >
              <p className="text-sm sm:text-base lg:text-[16px] xl:text-[17px] text-[#E5E2D9] font-normal leading-relaxed drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)] mb-5 sm:mb-6">
                A sovereign architecture of deterministic intelligence, hardened edge silicon, and autonomous multi-agent swarms—engineered without compromise for defense, critical infrastructure, and national autonomy.
              </p>

              <button
                onClick={() => selectSystem(0)}
                className="group/btn inline-flex items-center gap-3 sm:gap-4 bg-black/85 hover:bg-black text-[#F3F2EB] text-sm sm:text-base font-medium px-6 sm:px-7 py-3 sm:py-3.5 rounded-full border border-white/25 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition-all duration-300 hover:scale-105 hover:border-white/40 active:scale-95"
              >
                <span>Explore capabilities</span>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/15 flex items-center justify-center transition-all duration-300 group-hover/btn:bg-white group-hover/btn:text-black group-hover/btn:translate-x-1">
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </button>
            </motion.div>

          </div>

          {/* Bottom Edge Cinematic Glow Accent */}
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent pointer-events-none" />

        </div>

      </section>

      {/* ========================================================================= */}
      {/* 2. SCROLL INDEX SYSTEMS SHOWCASE (SCROLL-DRIVEN TRANSITION ANIMATION)      */}
      {/* ========================================================================= */}
      <ScrollIndexSection 
        projectsList={projects} 
        selectedIndex={selectedSystemIndex} 
        onSelectIndex={setSelectedSystemIndex} 
      />

    </div>
  );
}

