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
import droneBg from "../assets/projects/drone_bg_1788369697669.jpg";
import healthBg from "../assets/projects/health_bg_1788369710610.jpg";
import mfgBg from "../assets/projects/mfg_bg_1788369729188.jpg";
import marineBg from "../assets/projects/marine_bg_1788369743426.jpg";
import digitalBg from "../assets/projects/digital_bg_1788369758908.jpg";

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
    domain: "DRONE INTELLIGENCE",
    hugeName: "Swarms",
    tagline: "Autonomous Multi-Agent Aerial Swarms",
    color: "from-blue-500/20",
    accent: "text-blue-400",
    bgImage: droneBg,
    desc: "Autonomous multi-agent swarms, GPS-denied navigation, and computer vision systems engineered for tactical aerial operations and precision field mapping.",
    items: [
      { title: "Agri Crop Health Monitoring System", desc: "Advanced aerial monitoring for foliar health, disease detection, yield prediction, and precision agriculture.", icon: Leaf },
      { title: "Ship Inspection Solutions", desc: "Automated aerial and onboard inspection solutions for ships using computer vision, anomaly detection, and digital reporting.", icon: ScanSearch },
      { title: "GPS Denied Navigation", desc: "Advanced navigation systems for UAVs with sensor fusion and SLAM for reliable operations in GPS denied environments.", icon: Navigation },
      { title: "Coordinated Aerial Operations", desc: "Coordinated multi-drone operations for vast area surveillance and search & rescue missions.", icon: Plane }
    ]
  },
  {
    id: "healthcare-intelligence",
    domain: "HEALTHCARE INTELLIGENCE",
    hugeName: "Health",
    tagline: "Air-Gapped Medical & Diagnostic Intelligence",
    color: "from-purple-500/20",
    accent: "text-purple-400",
    bgImage: healthBg,
    desc: "Air-gapped digital platforms for medical compliance, predictive supply chains, and rapid diagnostic intelligence.",
    items: [
      { title: "Healthcare Supply Chain Management", desc: "Data-driven platform for demand forecasting, inventory optimization, supplier management, and logistics planning.", icon: Box },
      { title: "Digital Operations Platform", desc: "End-to-end digital platform for patient management, workflows, resource allocation, and operational efficiency.", icon: ClipboardList },
      { title: "Inspection & Compliance System", desc: "Digital solution for automated inspections, regulatory compliance, audit management, and risk assessment.", icon: ShieldCheck },
      { title: "Medical Diagnostics Assistant", desc: "Advanced analytics and NLP integration to assist in rapid radiological analysis and patient record summarization.", icon: HeartPulse }
    ]
  },
  {
    id: "manufacturing-intelligence",
    domain: "MANUFACTURING INTELLIGENCE",
    hugeName: "Industry",
    tagline: "Deterministic Edge Compute & Digital Twins",
    color: "from-cyan-500/20",
    accent: "text-cyan-400",
    bgImage: mfgBg,
    desc: "Deterministic edge compute and digital twin orchestration tailored for high-precision manufacturing and zero-downtime facilities.",
    items: [
      { title: "Automated Quality Inspection", desc: "Computer vision-based defect detection to reduce downtime, improve quality, and enhance machine performance.", icon: Settings },
      { title: "Predictive Maintenance", desc: "IoT sensor data analytics to predict machinery failure before it happens, optimizing maintenance schedules.", icon: Factory },
      { title: "Digital Twin Orchestration", desc: "Real-time virtual replicas of manufacturing lines to simulate efficiency improvements and workflow bottlenecks.", icon: MonitorPlay }
    ]
  },
  {
    id: "maritime-intelligence",
    domain: "MARITIME INTELLIGENCE",
    hugeName: "Maritime",
    tagline: "Naval Surveillance & Smart Port Robotics",
    color: "from-blue-400/20",
    accent: "text-blue-300",
    bgImage: marineBg,
    desc: "Autonomous naval surveillance, coastal sonar integration, and high-throughput smart port logistics infrastructure.",
    items: [
      { title: "Ship Analytics & Predictive Maintenance", desc: "Comprehensive platform for ship condition assessment, predictive maintenance, lifecycle management, and operational analytics.", icon: BarChart },
      { title: "Automated Naval Surveillance", desc: "Advanced optical and sonar integration for threat detection and coastal perimeter security.", icon: Ship },
      { title: "Smart Port Logistics", desc: "Automated container tracking and crane optimization using computer vision for high-throughput port environments.", icon: Box }
    ]
  },
  {
    id: "digital-intelligence",
    domain: "DIGITAL INTELLIGENCE",
    hugeName: "Cyber",
    tagline: "Sovereign Cyber Threat Hunting & Data Lakes",
    color: "from-indigo-500/20",
    accent: "text-indigo-400",
    bgImage: digitalBg,
    desc: "Sovereign cyber threat hunting, high-velocity data lake engines, and cryptographically verified enterprise analytics.",
    items: [
      { title: "Document & Report Analytics", desc: "Advanced platform to extract, analyze, and summarize documents and reports, enabling structured search and automated reporting.", icon: FileText },
      { title: "Cyber Threat Hunting Platform", desc: "Real-time anomaly detection and behavioral analysis to preemptively secure network infrastructures.", icon: ShieldCheck },
      { title: "Enterprise Data Lake Analytics", desc: "Unifying structured and unstructured data streams for high-velocity predictive business insights.", icon: BarChart }
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
            initial={{ opacity: 0, scale: 1.08 }}
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
            <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/45 to-black/90" />
            <div className="absolute inset-0 bg-black/25 backdrop-blur-[0.5px]" />
            <div className={`absolute inset-0 bg-gradient-to-t ${activeProject.color} to-transparent opacity-40`} />
          </motion.div>
        </AnimatePresence>

        {/* ================= TOP STATUS BAR & INDEX COUNTER ================= */}
        <div className="relative z-20 pt-24 sm:pt-28 px-6 sm:px-10 lg:px-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold tracking-widest text-amber-300/90 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full backdrop-blur-md">
              SYSTEM 0{internalIndex + 1} / 0{projectsList.length}
            </span>
            <span className="hidden sm:inline text-xs font-mono tracking-wider text-slate-300 font-semibold uppercase">
              {activeProject.domain}
            </span>
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

        {/* ================= CENTER: HUGE TYPOGRAPHY + VERTICAL THUMBNAIL STRIP ================= */}
        <div className="relative z-20 flex-1 flex items-center justify-center px-4 overflow-hidden">
          
          {/* Giant Word Across the Center (e.g. Swarms, Health, Industry, Maritime, Cyber) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <AnimatePresence mode="wait">
              <motion.h2
                key={activeProject.hugeName}
                initial={{ opacity: 0, y: 40, letterSpacing: "-0.04em" }}
                animate={{ opacity: 0.85, y: 0, letterSpacing: "-0.02em" }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="text-7xl sm:text-9xl md:text-[140px] lg:text-[180px] xl:text-[220px] 2xl:text-[260px] font-black text-white/90 drop-shadow-[0_25px_60px_rgba(0,0,0,0.9)] text-center leading-none tracking-tighter"
              >
                {activeProject.hugeName}
              </motion.h2>
            </AnimatePresence>
          </div>

          {/* Centered Vertical Thumbnail Strip (Marks Your Place — Exactly like Reference) */}
          <div className="relative z-30">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-black/75 backdrop-blur-2xl border border-white/20 rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 flex flex-col gap-2 sm:gap-2.5 shadow-[0_25px_60px_rgba(0,0,0,0.85)] ring-1 ring-black/40"
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
                    {/* Active Thumbnail Glowing Border Pill */}
                    {isActive && (
                      <motion.div
                        layoutId="activeScrollThumb"
                        className="absolute -inset-1 rounded-xl sm:rounded-2xl border-2 border-white shadow-[0_0_18px_rgba(255,255,255,0.7)]"
                        transition={{ type: "spring", stiffness: 380, damping: 28 }}
                      />
                    )}

                    <div className="relative overflow-hidden rounded-lg sm:rounded-xl">
                      <img 
                        src={p.bgImage} 
                        alt={p.hugeName} 
                        className={`w-11 h-13 sm:w-13 sm:h-16 md:w-14 md:h-18 object-cover transition-all duration-300 ${
                          isActive 
                            ? "scale-105 brightness-110" 
                            : "opacity-45 hover:opacity-90 grayscale-[40%] hover:grayscale-0 hover:scale-105"
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </motion.div>
          </div>

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

