import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { 
  Leaf, ScanSearch, Navigation, Plane, Box, 
  ClipboardList, ShieldCheck, HeartPulse, 
  Settings, Factory, MonitorPlay, BarChart, 
  Ship, FileText, ArrowRight, Radio, Cpu, 
  Activity, Sparkles, Terminal, ChevronDown,
  ChevronLeft, ChevronRight
} from "lucide-react";

import solutionsRobotHero from "../assets/solutions_robot_hero.jpg";
import droneBg from "../assets/projects/real_drone_clean.jpg";
import healthBg from "../assets/projects/real_health_lab.jpg";
import mfgBg from "../assets/projects/real_industry_factory.jpg";
import marineBg from "../assets/projects/real_maritime_vessel.jpg";
import digitalBg from "../assets/novaliseo_servers_pure.jpg";

import realAgriCropMapping from "../assets/real_specs/real_agri_crop_mapping.jpg";
import realDroneClean from "../assets/projects/real_drone_clean.jpg";
import realSurveyDrone from "../assets/projects/real_survey_drone.jpg";
import realDroneFleet from "../assets/real_specs/real_drone_fleet.jpg";

import realPharmaColdChain from "../assets/real_specs/real_pharma_cold_chain.jpg";
import realHospitalTelemetry from "../assets/real_specs/real_hospital_telemetry.jpg";
import realMedicalCleanroom from "../assets/real_specs/real_medical_cleanroom.jpg";
import realHealthLab from "../assets/projects/real_health_lab.jpg";

import realIndustryFactory from "../assets/projects/real_industry_factory.jpg";
import realCncMachining from "../assets/real_specs/real_cnc_machining.jpg";
import realRoboticAssembly from "../assets/real_specs/real_robotic_assembly.jpg";

import realMaritimeVessel from "../assets/projects/real_maritime_vessel.jpg";
import realNavalSurveillance from "../assets/real_specs/real_naval_surveillance.jpg";
import portInfrastructure from "../assets/maritime/port_infrastructure_intelligence.jpg";

import novaliseoServersPure from "../assets/novaliseo_servers_pure.jpg";
import serverRoomAisle from "../assets/real_specs/server_room_aisle.jpg";
import realSovereignDatacenter from "../assets/real_specs/real_sovereign_datacenter.jpg";

// =========================================================================
// STORY DECK COMPONENT (AUTHENTIC ARCHITECTURE SPECS - ZERO EXTRA PERSONAS)
// =========================================================================
function StoryDeck({
  stories,
  systemName,
  onClose,
  isModal = false
}: {
  stories: any[];
  systemName: string;
  onClose?: () => void;
  isModal?: boolean;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = stories.length;
  const activeStory = stories[currentIndex] || stories[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
    setProgress(0);
  };

  // Autoplay timer with progress ring (advances every 6 seconds if not hovered/dragged)
  React.useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + 1.2;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [currentIndex, isPaused, total]);

  return (
    <div 
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full rounded-[32px] sm:rounded-[42px] bg-gradient-to-b from-[#f8f9fa] via-[#eff2f6] to-[#e0e4eb] text-slate-900 border border-white/80 shadow-[0_30px_90px_rgba(0,0,0,0.8)] p-6 sm:p-10 lg:p-12 overflow-hidden text-left select-none"
    >
      {/* ================= TOP BAR (CLEAN, NO CARD BADGE) ================= */}
      {onClose && (
        <div className="flex items-center justify-end mb-4 sm:mb-6">
          <button
            onClick={onClose}
            aria-label="Close Story Deck"
            className="w-10 h-10 rounded-full bg-slate-900 hover:bg-black text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-md border border-white/20 text-sm font-bold"
          >
            ✕
          </button>
        </div>
      )}

      {/* ================= MAIN 2-COLUMN LAYOUT ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        
        {/* LEFT COLUMN: ARCHITECTURAL SPECS & CONTROLS (7 of 12) */}
        <div className="lg:col-span-7 flex flex-col justify-between h-full">
          <div>
            {/* Step Counter Line & Category */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs sm:text-sm font-mono font-bold text-slate-400 tracking-wider">
                {`0${currentIndex + 1} / 0${total}`}
              </span>
              <span className="text-xs font-mono font-semibold text-amber-600 uppercase tracking-wider">
                {activeStory.subtitle}
              </span>
              <div className="h-px flex-1 bg-slate-300/80" />
            </div>

            {/* Architecture Capability Title */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStory.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-3">
                  {activeStory.title}
                </h3>

                {/* Technical Architecture Description */}
                <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed mb-5 max-w-xl">
                  {activeStory.desc}
                </p>

                {/* Operational Field Narrative */}
                <div className="p-4 rounded-2xl bg-black/5 border border-black/5 mb-6 max-w-xl">
                  <p className="text-xs sm:text-sm text-slate-800 font-medium italic leading-relaxed">
                    “{activeStory.quote}”
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Controls Row: Arrows + Circular Progress Ring + Drag Hint */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-200/80">
            {/* Navigation Stepper with Autoplay Ring */}
            <div className="flex items-center gap-3">
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                aria-label="Previous card"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/5 hover:bg-black/10 text-slate-800 flex items-center justify-center border border-black/10 transition-all hover:scale-105 active:scale-95 shadow-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next Button with Circular Progress Ring */}
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center">
                <svg className="absolute inset-0 w-11 h-11 sm:w-12 sm:h-12 -rotate-90 pointer-events-none" viewBox="0 0 48 48">
                  <circle
                    cx="24"
                    cy="24"
                    r="21"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    fill="none"
                    className="text-slate-300"
                  />
                  <circle
                    cx="24"
                    cy="24"
                    r="21"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    fill="none"
                    strokeDasharray={132}
                    strokeDashoffset={132 - (132 * progress) / 100}
                    className="text-slate-900 transition-all duration-75 ease-linear"
                    strokeLinecap="round"
                  />
                </svg>
                <button
                  onClick={handleNext}
                  aria-label="Next card"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-900 hover:bg-black text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-md z-10"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            {/* Drag Hint */}
            <div className="flex items-center gap-2 text-slate-400 font-mono text-[10px] sm:text-[11px] tracking-widest uppercase font-semibold">
              <span className="text-sm">⟷</span>
              <span>DRAG THE CARD</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: 3D STACKED DRAGGABLE CARD DECK (5 of 12) */}
        <div className="lg:col-span-5 flex items-center justify-center py-4">
          <div className="relative flex items-center justify-center w-[250px] sm:w-[290px] md:w-[330px] aspect-[3/4]">
            
            {/* Card 3 (Bottom Layer in Stack) */}
            {stories[(currentIndex + 2) % total] && (
              <div 
                className="absolute inset-0 rounded-[28px] sm:rounded-[34px] overflow-hidden border-4 border-white/70 shadow-lg pointer-events-none transition-all duration-500 ease-out translate-x-6 sm:translate-x-8 translate-y-3 sm:translate-y-4 rotate-4 sm:rotate-6 scale-[0.91] opacity-70 bg-slate-950"
              >
                <img 
                  src={stories[(currentIndex + 2) % total].image} 
                  alt="Stacked spec" 
                  className="w-full h-full object-cover" 
                />
              </div>
            )}

            {/* Card 2 (Middle Layer in Stack) */}
            {stories[(currentIndex + 1) % total] && (
              <div 
                className="absolute inset-0 rounded-[28px] sm:rounded-[34px] overflow-hidden border-4 border-white/85 shadow-xl pointer-events-none transition-all duration-500 ease-out translate-x-3 sm:translate-x-4 translate-y-1.5 sm:translate-y-2 rotate-2 sm:rotate-3 scale-[0.96] opacity-90 bg-slate-950"
              >
                <img 
                  src={stories[(currentIndex + 1) % total].image} 
                  alt="Stacked spec" 
                  className="w-full h-full object-cover" 
                />
              </div>
            )}

            {/* Card 1 (Top Layer in Stack - Draggable / Flingable) */}
            <AnimatePresence mode="popLayout">
              <motion.div
                key={currentIndex}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.65}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -70 || info.velocity.x < -300) {
                    handleNext();
                  } else if (info.offset.x > 70 || info.velocity.x > 300) {
                    handlePrev();
                  }
                }}
                initial={{ scale: 0.95, opacity: 0, x: 40 }}
                animate={{ scale: 1, opacity: 1, x: 0 }}
                exit={{ scale: 0.85, opacity: 0, x: -220, rotate: -16 }}
                transition={{ type: "spring", stiffness: 350, damping: 26 }}
                className="relative z-30 w-full h-full rounded-[28px] sm:rounded-[34px] overflow-hidden border-4 sm:border-[5px] border-white shadow-[0_25px_60px_rgba(0,0,0,0.4)] cursor-grab active:cursor-grabbing bg-slate-950 group/deckcard"
              >
                <img 
                  src={activeStory.image} 
                  alt={activeStory.title} 
                  className="w-full h-full object-cover pointer-events-none transition-transform duration-700 ease-out group-hover/deckcard:scale-105" 
                />
                {/* Subtle Cinematic Vignette for Depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
}

// =========================================================================
// STORY DECK MODAL FOR FULLSCREEN PRESENTATION
// =========================================================================
function StoryDeckModal({
  system,
  onClose
}: {
  system: any;
  onClose: () => void;
}) {
  if (!system) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-2xl overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 25 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-5xl"
        >
          <StoryDeck 
            stories={system.stories}
            systemName={system.domain}
            onClose={onClose}
            isModal={true}
          />
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
    stories: [
      {
        id: "swarm-1",
        step: "01 / 04",
        title: "Crop Health & Terrain Mapping",
        subtitle: "Multispectral SLAM",
        desc: "Aerial multispectral monitoring for agricultural terrain assessment, foliar pathogen detection, and high-precision survey coverage under adverse environmental conditions.",
        quote: "Autonomous multi-spectral passes identify fungal pathogen vectors three days before visible canopy wilting, profiling twenty square kilometers with sub-centimeter mesh precision.",
        image: realAgriCropMapping
      },
      {
        id: "swarm-2",
        step: "02 / 04",
        title: "Infrastructure & Vessel Inspection",
        subtitle: "Edge Computer Vision",
        desc: "Automated aerial inspection platforms executing close-proximity optical and thermal telemetry to detect structural micro-fractures across naval hulls and industrial infrastructure.",
        quote: "Edge computer vision pipelines flag 0.1-millimeter structural micro-fractures along naval superstructures and turbine towers without halting daily commercial operations.",
        image: realDroneClean
      },
      {
        id: "swarm-3",
        step: "03 / 04",
        title: "GPS-Denied Autonomous Flight",
        subtitle: "Visual-Inertial SLAM",
        desc: "Deterministic navigation architecture powered by visual-inertial odometry, optical flow, and multi-spectral fusion operating with zero satellite dependencies.",
        quote: "Visual-inertial odometry fused with optical contour SLAM maintains under 8-millimeter drift per hour through heavily contested and electronic-countermeasure airspace.",
        image: realSurveyDrone
      },
      {
        id: "swarm-4",
        step: "04 / 04",
        title: "Coordinated Multi-Agent Operations",
        subtitle: "Distributed Mesh Protocol",
        desc: "Decentralized peer-to-peer aerial mesh networking enabling dozens of autonomous UAVs to dynamically partition search sectors, survey perimeters, and share target telemetry.",
        quote: "A decentralized peer-to-peer mesh protocol autonomously partitions sweeping search grids across mountainous perimeters with zero single points of network failure.",
        image: realDroneFleet
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
    stories: [
      {
        id: "health-1",
        step: "01 / 04",
        title: "Pharmaceutical Supply Chain Core",
        subtitle: "Cold-Chain Intelligence",
        desc: "Predictive telemetry system monitoring vaccine temperature integrity, hospital pharmacy burn rates, and dynamic inventory re-routing across regional clinical networks.",
        quote: "Continuous thermodynamic sensors and predictive logistics automatically re-route temperature-sensitive pharmaceutical batches before clinical cold-chain thresholds are breached.",
        image: realPharmaColdChain
      },
      {
        id: "health-2",
        step: "02 / 04",
        title: "Clinical Operations & Patient Flow",
        subtitle: "Hospital Telemetry Hub",
        desc: "Deterministic hospital workflow orchestration predicting patient bed turnarounds, ER admission bottlenecks, and surgical equipment sterilization schedules.",
        quote: "Hospital telemetry models anticipate emergency ward surges and ICU bed availability forty-two minutes ahead, eliminating clinical throughput bottlenecks entirely.",
        image: realHospitalTelemetry
      },
      {
        id: "health-3",
        step: "03 / 04",
        title: "Regulatory Compliance & Audit Trails",
        subtitle: "Cryptographic Ledger",
        desc: "Air-gapped verification frameworks ensuring tamper-evident tracking of clinical software pipelines, medical device telemetry, and patient privacy records.",
        quote: "Air-gapped cryptographic logging ensures every diagnostic pipeline execution and patient telemetry query adheres strictly to ISO 13485 compliance standards.",
        image: realMedicalCleanroom
      },
      {
        id: "health-4",
        step: "04 / 04",
        title: "Radiological Diagnostics Assistant",
        subtitle: "Neural Micro-Imaging",
        desc: "Multi-planar convolutional inference engine assisting radiologists with millisecond detection of micro-lesions, neurological anomalies, and pulmonary scans.",
        quote: "High-resolution convolutional neural networks assist clinical staff by detecting sub-millimeter neurological anomalies with zero cloud dependency and zero latency.",
        image: realHealthLab
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
    stories: [
      {
        id: "mfg-1",
        step: "01 / 03",
        title: "High-Speed Robotic Optical Inspection",
        subtitle: "Surface Defect Telemetry",
        desc: "High-speed multi-axis computer vision modules inspecting precision machined assemblies, welds, and composite structures at assembly-line velocity.",
        quote: "Optical laser profiling monitors complex titanium geometries at twelve hundred parts per minute, eliminating assembly flaws before components enter final integration.",
        image: realIndustryFactory
      },
      {
        id: "mfg-2",
        step: "02 / 03",
        title: "Predictive Machine Maintenance",
        subtitle: "Acoustic & Vibration Matrix",
        desc: "Edge vibration harmonics and thermal sensor telemetry identifying bearing micro-pitting and mechanical fatigue long before catastrophic line failure occurs.",
        quote: "Acoustic vibration harmonic analysis flags bearing micro-spalling two weeks prior to component fatigue, maintaining continuous production schedules across heavy plant facilities.",
        image: realCncMachining
      },
      {
        id: "mfg-3",
        step: "03 / 03",
        title: "Deterministic Digital Twin Sim",
        subtitle: "Assembly Kinematics",
        desc: "Bidirectional physics-accurate digital twin models orchestrating robotic arms, AGVs, and tooling kinematics to eliminate line bottlenecks and retooling delays.",
        quote: "Bidirectional kinematics synchronization between physical robotic cells and simulation models cuts retooling changeover times from days to twenty minutes.",
        image: realRoboticAssembly
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
    stories: [
      {
        id: "mar-1",
        step: "01 / 03",
        title: "Naval Vessel Diagnostics & Telemetry",
        subtitle: "Hull Vibration Matrix",
        desc: "Real-time telemetry networks aggregating shaft torque, hull hydrodynamic stress, and fuel efficiency metrics across commercial and naval maritime fleets.",
        quote: "Subsurface hydrodynamic telemetry continuously monitors hull vibration, shaft torque, and propulsion efficiency across thousands of nautical miles in open waters.",
        image: realMaritimeVessel
      },
      {
        id: "mar-2",
        step: "02 / 03",
        title: "Autonomous Coastal Radar & Surveillance",
        subtitle: "Long-Range Optical",
        desc: "Autonomous coastal radar stations combining high-gain FMCW radar, thermal optical tracking, and AIS fusion to secure territorial waters against dark vessels.",
        quote: "Autonomous shore-based FMCW radar stations and long-range optical feeds fuse AIS data to track dark vessel incursions through dense sea fog and heavy squalls.",
        image: realNavalSurveillance
      },
      {
        id: "mar-3",
        step: "03 / 03",
        title: "Container Terminal Freight Automation",
        subtitle: "Smart Port Freight Flow",
        desc: "Deep-water port intelligence system orchestrating automated straddle carriers, STS crane cycles, and container stack sequencing for zero-congestion turnarounds.",
        quote: "Vision-guided ship-to-shore gantry cranes and autonomous straddle carriers synchronize container yard moves with 35% higher container throughput per berth hour.",
        image: portInfrastructure
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
    stories: [
      {
        id: "cyber-1",
        step: "01 / 03",
        title: "Cryptographic Document & Signal Parser",
        subtitle: "Hardware-Accelerated NLP",
        desc: "Hardware-accelerated tokenization and semantic entity extraction ingesting sovereign signals, multi-lingual transcripts, and encrypted operational feeds.",
        quote: "Hardware-accelerated cryptographic tokenization ingests multi-lingual intelligence feeds, extracting actionable entities in real time with zero external network egress.",
        image: novaliseoServersPure
      },
      {
        id: "cyber-2",
        step: "02 / 03",
        title: "Autonomous Zero-Day Threat Hunting",
        subtitle: "Kernel-Level Behavioral Shield",
        desc: "Autonomous behavioral models monitoring kernel-level telemetry and network fabric anomalies to isolate lateral movements before privilege escalation can occur.",
        quote: "Autonomous behavioral kernel sensors detect and terminate unauthorized memory execution and lateral movement before privilege escalation can occur.",
        image: serverRoomAisle
      },
      {
        id: "cyber-3",
        step: "03 / 03",
        title: "Air-Gapped Sovereign Datacenter Core",
        subtitle: "High-Throughput On-Prem Mesh",
        desc: "Deterministic distributed high-throughput database clusters execute sovereign defense computations entirely on isolated on-premise hardware fabrics.",
        quote: "Deterministic distributed high-throughput database clusters execute sovereign defense computations entirely on isolated on-premise hardware fabrics.",
        image: realSovereignDatacenter
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
  onOpenSpecs
}: { 
  projectsList: typeof projects;
  selectedIndex: number;
  onSelectIndex: (idx: number) => void;
  onOpenSpecs?: (idx: number) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [internalIndex, setInternalIndex] = useState(selectedIndex);

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
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6 mb-2">
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

            {/* Interactive Architecture Specs Button (Opens Story Deck) */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => onOpenSpecs && onOpenSpecs(internalIndex)}
                className="group/specs inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-xl text-white text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105 shadow-xl active:scale-95 whitespace-nowrap"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                <span>{`Architecture Specs (${activeProject.stories.length}) ↗`}</span>
              </button>
            </div>
          </div>

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
  const [specsModalSystem, setSpecsModalSystem] = useState<any>(null);

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
        onOpenSpecs={(idx) => setSpecsModalSystem(projects[idx])}
      />

      {/* ========================================================================= */}
      {/* 3. SYSTEM ARCHITECTURE & CAPABILITIES CATALOG (STORY DECK)                */}
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
              Fling the top card or use controls to cycle through authentic operational specifications, real-time telemetry pipelines, and field reports.
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

        {/* Interactive Story Deck Container */}
        <div className="w-full max-w-5xl mx-auto">
          <StoryDeck 
            stories={projects[selectedSystemIndex].stories}
            systemName={projects[selectedSystemIndex].domain}
          />
        </div>
      </section>

      {/* Story Deck Modal when opened from the Specs button in ScrollIndexSection */}
      {specsModalSystem && (
        <StoryDeckModal 
          system={specsModalSystem} 
          onClose={() => setSpecsModalSystem(null)} 
        />
      )}

    </div>
  );
}

