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

import foliarScan from "../assets/agriculture/foliar_pathogen_scan.jpg";
import realDroneClean from "../assets/projects/real_drone_clean.jpg";
import realSurveyDrone from "../assets/projects/real_survey_drone.jpg";
import solutionsCliffHero from "../assets/solutions_cliff_hero.jpg";

import healthSupplyChain from "../assets/healthcare/healthcare_supply_chain.jpg";
import digitalOpsPlatform from "../assets/healthcare/digital_operations_platform.jpg";
import complianceSystem from "../assets/healthcare/inspection_compliance_system.jpg";
import realHealthLab from "../assets/projects/real_health_lab.jpg";

import realIndustryFactory from "../assets/projects/real_industry_factory.jpg";
import indranavIndustrial from "../assets/indranav_industrial_hero.png";
import indranavFusion from "../assets/indranav_fusion.png";

import realMaritimeVessel from "../assets/projects/real_maritime_vessel.jpg";
import portIntelligenceMain from "../assets/maritime/maritime_port_intelligence_main.jpg";
import portInfrastructure from "../assets/maritime/port_infrastructure_intelligence.jpg";

import novaliseoServersPure from "../assets/novaliseo_servers_pure.jpg";
import novaliseoDatacenterServers from "../assets/novaliseo_datacenter_servers.jpg";

// =========================================================================
// SHOWCASE CARD COMPONENT (EXACT FIDELITY TO REFERENCE DESIGN)
// =========================================================================
function ShowcaseCard({ 
  item, 
  index,
  onSelect
}: { 
  item: any; 
  index: number; 
  onSelect?: (item: any) => void;
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => onSelect && onSelect(item)}
      className="group/sc relative flex flex-col justify-between rounded-[32px] sm:rounded-[36px] bg-gradient-to-b from-[#e3e7ee] via-[#d5dbe4] to-[#c4cbd6] text-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.65)] hover:shadow-[0_28px_70px_rgba(0,0,0,0.85)] border border-white/80 p-3 sm:p-3.5 transition-all duration-500 ease-out hover:-translate-y-2 select-none overflow-hidden text-left cursor-pointer"
    >
      {/* 1. TOP MEDIA SECTION (Rounded Inner Image with Floating Bottom Glass Bar) */}
      <div className="relative aspect-[16/11] w-full rounded-[22px] sm:rounded-[26px] overflow-hidden bg-slate-950 shadow-md">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover/sc:scale-105"
        />

        {/* Ambient Dark Gradient on bottom of image for readability */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

        {/* Floating Glass Pill Bar across bottom of image (matching reference screenshot) */}
        <div className="absolute inset-x-2.5 bottom-2.5 z-10 flex items-center justify-between p-2 sm:p-2.5 rounded-2xl bg-black/45 backdrop-blur-xl border border-white/15">
          <div className="text-left pl-1 pr-2 max-w-[65%]">
            <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight leading-tight truncate">
              {item.title}
            </h4>
            <p className="text-[10px] sm:text-[11px] text-white/70 font-medium truncate">
              {item.subtitle}
            </p>
          </div>

          <button 
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              if (onSelect) onSelect(item);
            }}
            className="px-3.5 py-1.5 rounded-full bg-white/20 hover:bg-white/35 backdrop-blur-md text-[11px] font-semibold text-white border border-white/25 transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm whitespace-nowrap"
          >
            View project
          </button>
        </div>
      </div>

      {/* 2. BOTTOM CONTENT SECTION (Case-study summary, chips, sharpening description) */}
      <div className="p-3.5 sm:p-4 flex flex-col justify-between flex-1 text-left">
        <div>
          {/* Overview sentence */}
          <p className="text-sm sm:text-[15px] font-bold text-slate-900 leading-snug mb-3 tracking-tight">
            {item.overview}
          </p>

          {/* Chips Row */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-3.5">
            {item.chips.map((chip: string) => (
              <span 
                key={chip}
                className="px-2.5 sm:px-3 py-1 rounded-full bg-black/5 group-hover/sc:bg-black/10 text-slate-700 text-[10px] sm:text-[11px] font-semibold border border-black/5 transition-colors"
              >
                {chip}
              </span>
            ))}
          </div>

          {/* Description Paragraph with sharpening effect from blur as requested */}
          <p className="text-xs sm:text-[12.5px] text-slate-600 leading-relaxed font-normal transition-all duration-500 opacity-90 group-hover/sc:opacity-100 group-hover/sc:text-slate-800 line-clamp-3 filter group-hover/sc:blur-0 blur-[0.3px]">
            {item.desc}
          </p>
        </div>

        {/* 3. PROGRESSIVELY BLURRED FOOT WITH INTERACTION INDICATOR */}
        <div className="relative pt-4 mt-2 flex items-center justify-center border-t border-black/5">
          {/* Subtle gesture / swipe hand icon as in reference */}
          <div className="flex items-center justify-center text-slate-400 group-hover/sc:text-slate-700 transition-colors">
            <svg 
              className="w-5 h-5 transition-transform duration-300 group-hover/sc:-translate-y-1" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.6" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
              <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
              <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
              <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
            </svg>
          </div>
          {/* Subtle progressive blur glow */}
          <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-slate-300/40 to-transparent pointer-events-none rounded-b-[32px]" />
        </div>
      </div>
    </motion.div>
  );
}

// =========================================================================
// CASE STUDY MODAL FOR DETAILED SPECIFICATIONS
// =========================================================================
function CaseStudyModal({ 
  item, 
  onClose 
}: { 
  item: any; 
  onClose: () => void; 
}) {
  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl rounded-[32px] sm:rounded-[36px] bg-gradient-to-b from-[#e8ecf2] to-[#cfd6e0] text-slate-900 border border-white/80 shadow-[0_30px_90px_rgba(0,0,0,0.85)] overflow-hidden p-5 sm:p-7 text-left max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-20 w-9 h-9 rounded-full bg-black/50 hover:bg-black/75 backdrop-blur-md text-white flex items-center justify-center transition-all duration-200 border border-white/20 hover:scale-105 active:scale-95"
            aria-label="Close Case Study"
          >
            ✕
          </button>

          {/* Media Header */}
          <div className="relative aspect-[16/9] w-full rounded-[24px] overflow-hidden bg-slate-950 mb-5 shadow-inner">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />
            <div className="absolute inset-x-5 bottom-5 z-10">
              <span className="text-[11px] font-mono uppercase tracking-wider text-amber-300 font-semibold mb-1 block">
                {item.subtitle}
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                {item.title}
              </h2>
            </div>
          </div>

          {/* Details */}
          <div className="px-1 sm:px-2">
            <p className="text-base sm:text-lg font-bold text-slate-900 leading-snug mb-3">
              {item.overview}
            </p>

            {/* Chips */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {item.chips.map((chip: string) => (
                <span 
                  key={chip}
                  className="px-3 py-1 rounded-full bg-black/5 text-slate-800 text-xs font-semibold border border-black/10"
                >
                  {chip}
                </span>
              ))}
            </div>

            <p className="text-sm text-slate-700 leading-relaxed font-normal mb-6">
              {item.desc}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-black/10">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                Sovereign Architecture Specification
              </span>
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-full bg-slate-900 hover:bg-black text-white text-xs font-semibold tracking-wide transition-all shadow-md"
              >
                Close Spec
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
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
        title: "Crop Health & Terrain Mapping", 
        subtitle: "Multispectral SLAM",
        image: foliarScan,
        overview: "High-density terrain mesh and autonomous multispectral foliar pathology detection.",
        chips: ["Multispectral", "±2cm Mesh", "Autonomous"],
        desc: "Aerial multispectral monitoring for agricultural terrain assessment, foliar pathogen detection, and high-precision survey coverage under adverse environmental conditions."
      },
      { 
        title: "Critical Infrastructure & Vessel Inspection", 
        subtitle: "Edge Computer Vision",
        image: realDroneClean,
        overview: "Real-time structural fatigue telemetry and zero-defect optical anomaly inspection.",
        chips: ["Edge CV", "99.9% Recall", "0-Defect"],
        desc: "Automated aerial inspection platforms executing close-proximity optical and thermal telemetry to detect structural micro-fractures across naval hulls and industrial infrastructure."
      },
      { 
        title: "GPS-Denied Autonomous Flight", 
        subtitle: "Visual-Inertial SLAM",
        image: realSurveyDrone,
        overview: "Hardened sensor fusion pipelines navigating contested or shielded airspace.",
        chips: ["Visual SLAM", "<8ms Drift", "Hardened"],
        desc: "Deterministic navigation architecture powered by visual-inertial odometry, optical flow, and multi-spectral fusion operating with zero satellite dependencies."
      },
      { 
        title: "Coordinated Multi-Agent Operations", 
        subtitle: "Mesh Swarm Protocol",
        image: solutionsCliffHero,
        overview: "Distributed multi-agent mesh protocol orchestrating synchronized sorties.",
        chips: ["64 Nodes", "Mesh Protocol", "Zero-Latency"],
        desc: "Decentralized peer-to-peer aerial mesh networking enabling dozens of autonomous UAVs to dynamically partition search sectors, survey perimeters, and share target telemetry."
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
        title: "Pharmaceutical Supply Chain Core", 
        subtitle: "Cold-Chain Intelligence",
        image: healthSupplyChain,
        overview: "Autonomous cold-chain forecasting and emergency medication dispatch routing.",
        chips: ["Cold-Chain", "99.98% SLA", "Zero-Waste"],
        desc: "Predictive telemetry system monitoring vaccine temperature integrity, hospital pharmacy burn rates, and dynamic inventory re-routing across regional clinical networks."
      },
      { 
        title: "Clinical Operations & Patient Flow", 
        subtitle: "Hospital Telemetry Hub",
        image: digitalOpsPlatform,
        overview: "Automated operational telemetry allocating ICU beds and surgical throughput.",
        chips: ["Telemetry", "-42% Wait", "Real-Time"],
        desc: "Deterministic hospital workflow orchestration predicting patient bed turnarounds, ER admission bottlenecks, and surgical equipment sterilization schedules."
      },
      { 
        title: "Regulatory Compliance & Audit Trails", 
        subtitle: "Cryptographic Ledger",
        image: complianceSystem,
        overview: "Cryptographically verified audit logs adhering to international medical standards.",
        chips: ["ISO 13485", "Air-Gapped", "Audit Mesh"],
        desc: "Air-gapped verification frameworks ensuring tamper-evident tracking of clinical software pipelines, medical device telemetry, and patient privacy records."
      },
      { 
        title: "Radiological Diagnostics Assistant", 
        subtitle: "Neural Micro-Imaging",
        image: realHealthLab,
        overview: "High-resolution neural computer vision assisting in micro-lesion detection.",
        chips: ["0.02s Infer", "0.1mm Res", "FDA Tier"],
        desc: "Multi-planar convolutional inference engine assisting radiologists with millisecond detection of micro-lesions, neurological anomalies, and pulmonary scans."
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
        title: "High-Speed Robotic Optical Inspection", 
        subtitle: "Surface Defect Telemetry",
        image: realIndustryFactory,
        overview: "Micro-millimeter surface defect scanning on high-velocity production lines.",
        chips: ["1200 PPM", "Sub-Mil", "Optical QC"],
        desc: "High-speed multi-axis computer vision modules inspecting precision machined assemblies, welds, and composite structures at assembly-line velocity."
      },
      { 
        title: "Predictive Machine Maintenance", 
        subtitle: "Acoustic & Vibration Matrix",
        image: indranavIndustrial,
        overview: "Harmonic and thermal telemetry predicting spindle failure weeks ahead of breakdown.",
        chips: ["14 Days Adv", "Harmonics", "Zero-Downtime"],
        desc: "Edge vibration harmonics and thermal sensor telemetry identifying bearing micro-pitting and mechanical fatigue long before catastrophic line failure occurs."
      },
      { 
        title: "Deterministic Digital Twin Sim", 
        subtitle: "Assembly Kinematics",
        image: indranavFusion,
        overview: "Real-time bidirectional synchronization between physical line and virtual simulation.",
        chips: ["<3ms Sync", "Kinematics", "Twin Fabric"],
        desc: "Bidirectional physics-accurate digital twin models orchestrating robotic arms, AGVs, and tooling kinematics to eliminate line bottlenecks and retooling delays."
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
        title: "Naval Vessel Diagnostics & Telemetry", 
        subtitle: "Hull Vibration Matrix",
        image: realMaritimeVessel,
        overview: "Full-spectrum naval condition assessment, hull vibration, and propulsion telemetry.",
        chips: ["100% Uptime", "Propulsion", "Continuous"],
        desc: "Real-time telemetry networks aggregating shaft torque, hull hydrodynamic stress, and fuel efficiency metrics across commercial and naval maritime fleets."
      },
      { 
        title: "Autonomous Coastal Radar & Surveillance", 
        subtitle: "Long-Range Optical",
        image: portIntelligenceMain,
        overview: "Long-range optical and radar perimeter monitoring for coastline sovereignty.",
        chips: ["120km Range", "24/7 Radar", "Optical Sweep"],
        desc: "Autonomous coastal radar stations combining high-gain FMCW radar, thermal optical tracking, and AIS fusion to secure territorial waters against dark vessels."
      },
      { 
        title: "Container Terminal Freight Automation", 
        subtitle: "Smart Port Freight Flow",
        image: portInfrastructure,
        overview: "Vision-guided gantry crane optimization and automated container yard dispatch.",
        chips: ["+35% Moves", "Vision Gantry", "Smart Port"],
        desc: "Deep-water port intelligence system orchestrating automated straddle carriers, STS crane cycles, and container stack sequencing for zero-congestion turnarounds."
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
        title: "Cryptographic Document & Signal Parser", 
        subtitle: "Hardware-Accelerated NLP",
        image: novaliseoServersPure,
        overview: "High-velocity cryptographic parsing of unstructured classified intelligence streams.",
        chips: ["10GB/sec", "Encrypted", "Zero-Leak"],
        desc: "Hardware-accelerated tokenization and semantic entity extraction ingesting sovereign signals, multi-lingual transcripts, and encrypted operational feeds."
      },
      { 
        title: "Autonomous Zero-Day Threat Hunting", 
        subtitle: "Kernel-Level Behavioral Shield",
        image: novaliseoDatacenterServers,
        overview: "Deep packet inspection neutralizing zero-day intrusion vectors in milliseconds.",
        chips: ["<1ms Block", "Zero-Trust", "Deep Packet"],
        desc: "Autonomous behavioral models monitoring kernel-level telemetry and network fabric anomalies to isolate lateral movements before privilege escalation."
      },
      { 
        title: "Air-Gapped Sovereign Datacenter Core", 
        subtitle: "High-Throughput On-Prem Mesh",
        image: novaliseoServersPure,
        overview: "Deterministic distributed compute fabric running on isolated sovereign hardware.",
        chips: ["Zero-Cloud", "Air-Gapped", "On-Prem Core"],
        desc: "Low-latency containerized compute clusters engineered for defense installations and sovereign data processing with zero external Internet dependencies."
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
  onSelectIndex,
  onSelectModalItem
}: { 
  projectsList: typeof projects;
  selectedIndex: number;
  onSelectIndex: (idx: number) => void;
  onSelectModalItem?: (item: any) => void;
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

        {/* Clean top spacing */}
        <div className="relative z-20 pt-20" />

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

            {/* Interactive Architecture Specs Toggle Button */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="group/specs inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-xl text-white text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105 shadow-xl active:scale-95 whitespace-nowrap"
              >
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>{showDetails ? "Hide Architecture Cards ▲" : `Architecture Specs (${activeProject.items.length}) ▼`}</span>
              </button>
            </div>
          </div>

          {/* Expandable Architecture Module Showcase Cards */}
          <AnimatePresence>
            {showDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-6xl mx-auto overflow-hidden"
              >
                <div className={`grid grid-cols-1 sm:grid-cols-2 ${
                  activeProject.items.length === 3 ? "lg:grid-cols-3 max-w-5xl" : "lg:grid-cols-4"
                } gap-5 sm:gap-6 pt-6 border-t border-white/10 mx-auto max-h-[62vh] overflow-y-auto pr-2`}>
                  {activeProject.items.map((item: any, idx: number) => (
                    <ShowcaseCard 
                      key={item.title}
                      item={item}
                      index={idx}
                      onSelect={(it) => onSelectModalItem && onSelectModalItem(it)}
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
  const [selectedModalItem, setSelectedModalItem] = useState<any>(null);

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
        onSelectModalItem={setSelectedModalItem}
      />

      {/* ========================================================================= */}
      {/* 3. SYSTEM ARCHITECTURE & CAPABILITIES CATALOG (SHOWCASE CARDS)            */}
      {/* ========================================================================= */}
      <section id="capabilities-catalog" className="relative py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto text-left">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-white/10 pb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-amber-300 font-semibold mb-2 block">
              Case-Study Architecture Specifications
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F3F2EB] tracking-tight">
              Modular System Capabilities
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-xl">
              Explore sovereign engineering specifications across all deployment sectors. Click any case study to review telemetry and architectural parameters.
            </p>
          </div>

          {/* Domain Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {projects.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setSelectedSystemIndex(idx)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  selectedSystemIndex === idx
                    ? "bg-white text-black shadow-lg scale-105"
                    : "bg-white/5 hover:bg-white/15 text-slate-300 border border-white/10"
                }`}
              >
                {p.hugeName}
              </button>
            ))}
          </div>
        </div>

        {/* Showcase Cards Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${
          projects[selectedSystemIndex].items.length === 3 ? "lg:grid-cols-3 max-w-5xl" : "lg:grid-cols-4"
        } gap-6 mx-auto`}>
          {projects[selectedSystemIndex].items.map((item: any, idx: number) => (
            <ShowcaseCard 
              key={item.title} 
              item={item} 
              index={idx} 
              onSelect={(it) => setSelectedModalItem(it)}
            />
          ))}
        </div>
      </section>

      {/* Case Study Modal */}
      <CaseStudyModal 
        item={selectedModalItem} 
        onClose={() => setSelectedModalItem(null)} 
      />

    </div>
  );
}

