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

// =========================================================================
// 1. 3D FLUID RIBBON COMPONENT (FOR CARD BOOKMARK ARTWORK)
// =========================================================================
function FluidRibbon({ accent }: { accent: string }) {
  const gradientId = `ribbon-grad-${accent}`;
  const glowId = `ribbon-glow-${accent}`;
  
  const colors: Record<string, { start: string; mid: string; end: string }> = {
    cyan: { start: "#38bdf8", mid: "#0284c7", end: "#0369a1" },
    blue: { start: "#60a5fa", mid: "#2563eb", end: "#1d4ed8" },
    amber: { start: "#fbbf24", mid: "#f59e0b", end: "#b45309" },
    orange: { start: "#fb923c", mid: "#ea580c", end: "#9a3412" },
    purple: { start: "#c084fc", mid: "#9333ea", end: "#6b21a8" },
    fuchsia: { start: "#e879f9", mid: "#c026d3", end: "#86198f" },
    violet: { start: "#a78bfa", mid: "#7c3aed", end: "#5b21b6" },
    emerald: { start: "#34d399", mid: "#059669", end: "#047857" },
    teal: { start: "#2dd4bf", mid: "#0d9488", end: "#0f766e" },
    indigo: { start: "#818cf8", mid: "#4f46e5", end: "#3730a3" },
  };

  const c = colors[accent] || colors.blue;

  return (
    <svg 
      className="absolute inset-0 w-full h-full pointer-events-none opacity-80 group-hover/bm:opacity-100 group-hover/bm:scale-105 transition-all duration-700 ease-out" 
      viewBox="0 0 280 140" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={c.start} stopOpacity="0.95" />
          <stop offset="50%" stopColor={c.mid} stopOpacity="0.9" />
          <stop offset="100%" stopColor={c.end} stopOpacity="0.8" />
        </linearGradient>
        <filter id={glowId} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      
      {/* Background Soft Glow Wave */}
      <path 
        d="M 15 105 C 65 40, 115 125, 175 60 C 215 15, 255 70, 275 80" 
        stroke={`url(#${gradientId})`} 
        strokeWidth="14" 
        strokeLinecap="round" 
        opacity="0.25"
        filter={`url(#${glowId})`}
      />

      {/* Main Ribbed Helical Strands */}
      <path 
        d="M 10 100 C 60 30, 120 120, 180 50 C 220 5, 260 65, 275 75" 
        stroke={`url(#${gradientId})`} 
        strokeWidth="5" 
        strokeLinecap="round" 
        opacity="0.9" 
      />
      <path 
        d="M 12 92 C 62 25, 122 112, 182 44 C 222 2, 262 58, 273 68" 
        stroke={`url(#${gradientId})`} 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        opacity="0.75" 
      />
      <path 
        d="M 14 108 C 64 35, 124 128, 184 56 C 224 8, 264 72, 272 82" 
        stroke={`url(#${gradientId})`} 
        strokeWidth="3" 
        strokeLinecap="round" 
        opacity="0.6" 
      />
      <path 
        d="M 20 85 C 70 20, 130 105, 190 38 C 230 -2, 268 52, 270 60" 
        stroke="#ffffff" 
        strokeWidth="1.2" 
        strokeLinecap="round" 
        opacity="0.65" 
      />
    </svg>
  );
}

// =========================================================================
// 2. CARD BOOKMARK COMPONENT (INTERACTIVE BOOKMARK TAB SILHOUETTE)
// =========================================================================
function BookmarkCard({ 
  item, 
  index 
}: { 
  item: any; 
  index: number; 
}) {
  const bloomGradients: Record<string, string> = {
    cyan: "from-cyan-500/35 via-sky-600/15 to-transparent",
    blue: "from-blue-600/35 via-indigo-600/15 to-transparent",
    amber: "from-amber-500/40 via-orange-600/20 to-transparent",
    orange: "from-orange-500/40 via-rose-600/20 to-transparent",
    purple: "from-purple-600/40 via-violet-600/20 to-transparent",
    fuchsia: "from-fuchsia-600/40 via-pink-600/20 to-transparent",
    violet: "from-violet-600/40 via-purple-600/20 to-transparent",
    emerald: "from-emerald-500/35 via-teal-600/15 to-transparent",
    teal: "from-teal-500/35 via-cyan-600/15 to-transparent",
    indigo: "from-indigo-600/35 via-blue-600/15 to-transparent",
  };

  const borderBlooms: Record<string, string> = {
    cyan: "group-hover/bm:border-cyan-400/50 group-hover/bm:shadow-[0_20px_50px_-10px_rgba(6,182,212,0.35)]",
    blue: "group-hover/bm:border-blue-400/50 group-hover/bm:shadow-[0_20px_50px_-10px_rgba(59,130,246,0.35)]",
    amber: "group-hover/bm:border-amber-400/50 group-hover/bm:shadow-[0_20px_50px_-10px_rgba(245,158,11,0.35)]",
    orange: "group-hover/bm:border-orange-400/50 group-hover/bm:shadow-[0_20px_50px_-10px_rgba(249,115,22,0.35)]",
    purple: "group-hover/bm:border-purple-400/50 group-hover/bm:shadow-[0_20px_50px_-10px_rgba(168,85,247,0.35)]",
    fuchsia: "group-hover/bm:border-fuchsia-400/50 group-hover/bm:shadow-[0_20px_50px_-10px_rgba(217,70,239,0.35)]",
    violet: "group-hover/bm:border-violet-400/50 group-hover/bm:shadow-[0_20px_50px_-10px_rgba(139,92,246,0.35)]",
    emerald: "group-hover/bm:border-emerald-400/50 group-hover/bm:shadow-[0_20px_50px_-10px_rgba(16,185,129,0.35)]",
    teal: "group-hover/bm:border-teal-400/50 group-hover/bm:shadow-[0_20px_50px_-10px_rgba(20,184,166,0.35)]",
    indigo: "group-hover/bm:border-indigo-400/50 group-hover/bm:shadow-[0_20px_50px_-10px_rgba(99,102,241,0.35)]",
  };

  const activeBloom = bloomGradients[item.accent] || bloomGradients.blue;
  const activeBorder = borderBlooms[item.accent] || borderBlooms.blue;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="group/bm relative cursor-pointer flex flex-col transition-transform duration-500 ease-out hover:-translate-y-2 text-left"
    >
      {/* 1. Bookmark Tab Header (Asymmetrical folder tab like Reference) */}
      <div className="flex items-end justify-between -mb-[1px] relative z-10 pl-3 pr-2">
        {/* Tab protruding at top-left */}
        <div className="px-4 py-1.5 rounded-t-xl bg-black/85 border-t border-x border-white/20 backdrop-blur-xl transition-all duration-300 group-hover/bm:border-white/40 shadow-lg">
          <span className="text-[10px] font-mono font-bold tracking-widest text-slate-300 group-hover/bm:text-white uppercase">
            — {item.subtitle || `Module 0${index + 1}`}
          </span>
        </div>
        {/* Subtle right-side label */}
        <div className="pb-1 text-[10px] font-mono tracking-wider text-slate-500 group-hover/bm:text-slate-300 transition-colors">
          0{index + 1}
        </div>
      </div>

      {/* 2. Main Bookmark Card Body with Lower-Edge Notch */}
      <div className={`relative rounded-b-2xl rounded-tr-2xl bg-black/85 backdrop-blur-2xl border border-white/15 p-4 sm:p-5 flex flex-col justify-between overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.85)] transition-all duration-500 ${activeBorder}`}>
        
        {/* Saturated Bloom on Hover ("artwork blooms into saturated colour on hover") */}
        <div className={`absolute inset-0 opacity-0 group-hover/bm:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-br ${activeBloom} mix-blend-screen`} />

        {/* 3. Inner Artwork Frame with 3D Fluid Ribbon & Quote */}
        <div className="relative h-36 sm:h-40 rounded-xl overflow-hidden bg-[#07090e] border border-white/10 group-hover/bm:border-white/25 transition-all duration-500 p-3.5 flex flex-col justify-between">
          {/* Subtle internal vignette */}
          <div className="absolute inset-0 bg-radial from-transparent to-black/75 pointer-events-none" />
          
          {/* Luminous 3D Kinetic Ribbon SVG */}
          <FluidRibbon accent={item.accent} />

          {/* Quote text inside artwork */}
          <div className="relative z-10 pt-1">
            <p className="text-[11px] sm:text-xs text-white/95 font-medium leading-relaxed drop-shadow-md">
              "{item.quote}"
            </p>
          </div>

          {/* Inner badge */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="w-6 h-6 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-white backdrop-blur-md">
              <item.icon className="w-3.5 h-3.5 text-amber-300" />
            </div>
            <span className="text-[9px] font-mono tracking-wider uppercase text-slate-400 bg-black/60 px-2 py-0.5 rounded-md border border-white/10">
              {item.metric}
            </span>
          </div>
        </div>

        {/* 4. Large Typographic Hook & Narrative */}
        <div className="pt-4 flex flex-col gap-1 relative z-10">
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight group-hover/bm:text-amber-200 transition-colors drop-shadow-sm">
            {item.hook}
          </h3>
          <h4 className="text-xs sm:text-sm font-bold text-slate-200 group-hover/bm:text-white transition-colors leading-snug">
            {item.title}
          </h4>
          <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed mt-1 font-light">
            {item.desc}
          </p>
        </div>

        {/* 5. Bottom Bookmark Accent Dots (...) */}
        <div className="flex items-center justify-between pt-4 mt-2 border-t border-white/5 relative z-10">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-white/70 group-hover/bm:bg-amber-400 group-hover/bm:scale-125 transition-all duration-300" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover/bm:bg-white/60 transition-colors" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover/bm:bg-white/60 transition-colors" />
          </div>
          <span className="text-[10px] font-mono text-slate-500 group-hover/bm:text-slate-300 transition-colors">
            Spec Verified
          </span>
        </div>

      </div>
    </motion.div>
  );
}

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
      { 
        title: "Topographical & Crop Health Mapping", 
        subtitle: "Multispectral SLAM",
        hook: "Sub-Meter.",
        quote: "High-density terrain mesh & autonomous multispectral foliar diagnostics.",
        metric: "±2cm Mesh",
        accent: "cyan",
        desc: "Aerial multispectral monitoring for terrain assessment, foliar pathogen detection, and high-precision coverage.", 
        icon: Leaf 
      },
      { 
        title: "Infrastructure & Vessel Inspection", 
        subtitle: "Anomaly Vision",
        hook: "0-Defect.",
        quote: "Real-time structural fatigue telemetry on mission-critical assets.",
        metric: "99.9% Recall",
        accent: "blue",
        desc: "Automated aerial inspection systems utilizing edge computer vision and real-time structural anomaly reporting.", 
        icon: ScanSearch 
      },
      { 
        title: "GPS-Denied Autonomous Flight", 
        subtitle: "Visual-Inertial",
        hook: "SLAM Core.",
        quote: "Hardened sensor fusion pipelines navigating contested airspace.",
        metric: "<8ms Drift",
        accent: "amber",
        desc: "Hardened navigation pipelines powered by visual-inertial SLAM and multi-sensor fusion in contested airspace.", 
        icon: Navigation 
      },
      { 
        title: "Coordinated Multi-Agent Operations", 
        subtitle: "Swarm Protocol",
        hook: "Swarm Fleet.",
        quote: "Distributed mesh protocol orchestrating synchronized multi-UAV sorties.",
        metric: "64 Nodes",
        accent: "emerald",
        desc: "Distributed fleet orchestration protocols enabling synchronized aerial surveying and search operations.", 
        icon: Plane 
      }
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
      { 
        title: "Predictive Supply Chain Management", 
        subtitle: "Cold-Chain AI",
        hook: "99.98% SLA.",
        quote: "Autonomous pharmaceutical cold-chain forecasting & emergency inventory routing.",
        metric: "Zero-Waste",
        accent: "purple",
        desc: "Autonomous inventory forecasting, pharmaceutical cold-chain integrity, and emergency logistics optimization.", 
        icon: Box 
      },
      { 
        title: "Clinical Operations & Patient Flow", 
        subtitle: "Hospital Telemetry",
        hook: "Real-Time.",
        quote: "Automated telemetry allocating ICU beds and surgical theatre throughput.",
        metric: "-42% Wait",
        accent: "fuchsia",
        desc: "Telemetry platforms for hospital workflow automation, ICU bed allocation, and operational capacity planning.", 
        icon: ClipboardList 
      },
      { 
        title: "Regulatory Compliance & Audit Trails", 
        subtitle: "Tamper-Proof",
        hook: "Air-Gapped.",
        quote: "Cryptographically verified audit logging adhering to global medical standards.",
        metric: "ISO 13485",
        accent: "indigo",
        desc: "Automated validation frameworks ensuring airtight compliance and tamper-evident health protocol audits.", 
        icon: ShieldCheck 
      },
      { 
        title: "Radiological Diagnostics Assistant", 
        subtitle: "Neuro-Imaging",
        hook: "0.02s Infer.",
        quote: "High-resolution neural computer vision assisting in micro-lesion detection.",
        metric: "0.1mm Res",
        accent: "violet",
        desc: "High-resolution neural computer vision assisting in rapid MRI/CT multi-planar anomaly detection.", 
        icon: HeartPulse 
      }
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
      { 
        title: "Automated Robotic Inspection", 
        subtitle: "Optical QC",
        hook: "Sub-Mil.",
        quote: "Micro-millimeter surface defect scanning on rapid automotive lines.",
        metric: "1200 ppm",
        accent: "amber",
        desc: "Micro-millimeter surface defect detection using high-speed optical vision systems on active assembly lines.", 
        icon: Settings 
      },
      { 
        title: "Predictive Machine Maintenance", 
        subtitle: "Vibration Acoustic",
        hook: "Zero-Fail.",
        quote: "Thermal and harmonic telemetry predicting spindle failure weeks ahead.",
        metric: "14 Days Adv",
        accent: "orange",
        desc: "Vibration and thermal telemetry analysis predicting mechanical wear weeks ahead of physical component failure.", 
        icon: Factory 
      },
      { 
        title: "Zero-Latency Digital Twin", 
        subtitle: "Kinematic Sim",
        hook: "Twin Fabric.",
        quote: "Real-time bidirectional synchronization between physical line and virtual twin.",
        metric: "<3ms Sync",
        accent: "cyan",
        desc: "Synchronized virtual telemetry environments simulating assembly kinematics and optimizing cycle times.", 
        icon: MonitorPlay 
      }
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
      { 
        title: "Vessel Health & Predictive Telemetry", 
        subtitle: "Hull Telemetry",
        hook: "Continuous.",
        quote: "Full-spectrum naval condition assessment, hull vibration, and propulsion telemetry.",
        metric: "100% Uptime",
        accent: "blue",
        desc: "Full-spectrum naval condition assessment, hull vibration monitoring, and predictive lifecycle intelligence.", 
        icon: BarChart 
      },
      { 
        title: "Autonomous Coastal Surveillance", 
        subtitle: "Perimeter Radar",
        hook: "120km Range.",
        quote: "Long-range optical and radar perimeter monitoring for coastline sovereignty.",
        metric: "24/7 Radar",
        accent: "cyan",
        desc: "Long-range optical and radar perimeter monitoring for maritime border defense and surface navigation safety.", 
        icon: Ship 
      },
      { 
        title: "Container Terminal Automation", 
        subtitle: "Smart Port",
        hook: "Autonomous.",
        quote: "Vision-guided gantry optimization and automated container yard dispatch.",
        metric: "+35% Moves",
        accent: "teal",
        desc: "Vision-guided gantry optimization and automated freight flow routing for high-density shipping hubs.", 
        icon: Box 
      }
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
      { 
        title: "Document & Signal Analytics", 
        subtitle: "Crypto Parse",
        hook: "Encrypted.",
        quote: "High-velocity cryptographic parsing of classified intelligence documents.",
        metric: "10GB/sec",
        accent: "indigo",
        desc: "High-speed cryptographic parsing of unstructured intelligence streams and automated executive synthesis.", 
        icon: FileText 
      },
      { 
        title: "Autonomous Threat Hunting", 
        subtitle: "Zero-Day Shield",
        hook: "Zero-Trust.",
        quote: "Deep packet inspection neutralizing zero-day vector intrusions in milliseconds.",
        metric: "<1ms Block",
        accent: "violet",
        desc: "Deep packet inspection and behavioral telemetry models neutralizing zero-day intrusions in real time.", 
        icon: ShieldCheck 
      },
      { 
        title: "Sovereign Datacenter Fabric", 
        subtitle: "Air-Gapped Mesh",
        hook: "Air-Gapped.",
        quote: "Deterministic distributed computing running on isolated on-premise hardware.",
        metric: "Zero-Cloud",
        accent: "purple",
        desc: "High-throughput deterministic data fabric running on air-gapped on-premise hardware clusters.", 
        icon: BarChart 
      }
    ]
  }
];

// =========================================================================
// 3. SCROLL INDEX SYSTEMS SHOWCASE (SCROLL-DRIVEN TRANSITION ANIMATION)
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

        {/* ================= TOP STATUS BAR (CLEAN, ZERO TAGS) ================= */}
        <div className="relative z-20 pt-24 sm:pt-28 px-6 sm:px-10 lg:px-14 flex items-center justify-end">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-xs font-mono font-medium tracking-wider text-slate-300 hover:text-white bg-black/70 hover:bg-black/95 border border-white/20 px-4 py-1.5 rounded-full backdrop-blur-xl transition-all duration-300 shadow-xl hover:scale-105 active:scale-95"
          >
            {showDetails ? "Hide Architecture Specs ▲" : "View Architecture Specs ▼"}
          </button>
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
            <div className="max-w-2xl text-left">
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
          </div>

          {/* Expandable Architecture Module Bookmark Cards */}
          <AnimatePresence>
            {showDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-6xl mx-auto overflow-hidden"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-6 border-t border-white/10">
                  {activeProject.items.map((item: any, idx: number) => (
                    <BookmarkCard 
                      key={item.title}
                      item={item}
                      index={idx}
                    />
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

