import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Briefcase, 
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  MapPin,
  Clock,
  Compass,
  CheckCircle2,
  Cpu,
  Layers,
  Plane,
  Radio,
  ShieldCheck,
  GraduationCap,
  Heart,
  Coffee,
  Laptop,
  Users,
  Code2,
  Wrench,
  Eye,
  Send,
  X,
  Building,
  Target,
  FileCheck,
  Award
} from "lucide-react";

import WorksWheel, { WorksWheelItem } from "../components/WorksWheel";
import CareerApplicationModal from "../components/CareerApplicationModal";
import TiltedGridHero, { TiltedGridImage } from "../components/ui/TiltedGridHero";

// Hero Visual & Realistic Hardware Assets
import careersDaylightStudio from "../assets/careers_daylight_studio.jpg";
import careersFlightCardNew from "../assets/careers_flight_card_new.jpg";
import careersFlightBgNew from "../assets/careers_flight_bg_new.jpg";
import careersVisionCardNew from "../assets/careers_vision_card_new.jpg";
import careersVisionBgNew from "../assets/careers_vision_bg_new.jpg";
import careersCardMechatronics from "../assets/careers_card_mechatronics.jpg";
import realCncMachining from "../assets/real_specs/real_cnc_machining.jpg";
import careersCardTelemetry from "../assets/careers_card_telemetry.jpg";
import collabLabsReal from "../assets/collab_labs_real.jpg";
import realSovereignDatacenter from "../assets/real_specs/real_sovereign_datacenter.jpg";
import researchIntakeFacilityBg from "../assets/research_intake_facility_bg.jpg";

// Brand-New Photorealistic Autonomous Physical Systems Visuals for Tilted Grid Hero
import tiltedFlightHangar from "../assets/tilted/tilted_flight_hangar.jpg";
import tiltedRoverLab from "../assets/tilted/tilted_rover_lab.jpg";
import tiltedEdgeBench from "../assets/tilted/tilted_edge_bench.jpg";
import tiltedCompositeCnc from "../assets/tilted/tilted_composite_cnc.jpg";
import tiltedSwarmArena from "../assets/tilted/tilted_swarm_arena.jpg";

const bespokeTiltedImages: TiltedGridImage[] = [
  { src: tiltedFlightHangar, alt: "Autonomous Flight Testing Hangar" },
  { src: tiltedRoverLab, alt: "Mechatronics Rover Dynamics Lab" },
  { src: tiltedEdgeBench, alt: "Edge Neural Compute Workbench" },
  { src: tiltedCompositeCnc, alt: "Aerospace Precision CFRP Layup" },
  { src: tiltedSwarmArena, alt: "Multi-Agent Swarm Arena" },
];

interface JobRole {
  id: string;
  title: string;
  category: "all" | "flight" | "ai" | "hardware" | "research";
  domain: string;
  location: string;
  workMode: "Hybrid" | "Onsite Lab" | "Flexible";
  type: string;
  experience: string;
  compensation: string;
  summary: string;
  responsibilities: string[];
  skills: string[];
}

export default function CareersPage() {
  const [applyingRole, setApplyingRole] = useState<JobRole | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [candidateData, setCandidateData] = useState({
    name: "",
    email: "",
    portfolio: "",
    builtNote: ""
  });

  const roles: JobRole[] = [
    {
      id: "flight-engineer",
      title: "Autonomous Flight Systems Engineer",
      category: "flight",
      domain: "Aerial Robotics & Guidance",
      location: "Bengaluru, IN",
      workMode: "Hybrid",
      type: "Full-Time",
      experience: "2-5+ Years in Robotics / GNC",
      compensation: "Competitive Tier + Meaningful Equity",
      summary: "Architect non-linear flight control loops, fail-safe RTL behaviors, and GPS-denied state estimation for multi-rotor and fixed-wing autonomous aircraft operating in challenging weather.",
      responsibilities: [
        "Design and tune PX4/ROS2 trajectory trackers and EKF2 sensor fusion pipelines.",
        "Validate fail-safe state machines and automated emergency recovery protocols in physical flight arenas.",
        "Integrate custom RTK-GPS, optical flow, and forward LiDAR obstacle telemetry on low-latency CAN-FD buses."
      ],
      skills: ["PX4 Autopilot", "ROS2 / C++20", "EKF2 State Estimation", "Gazebo / HIL", "CAN-FD Bus"]
    },
    {
      id: "edge-ai-lead",
      title: "Edge AI & Computer Vision Lead",
      category: "ai",
      domain: "Embedded Perception",
      location: "Bengaluru, IN",
      workMode: "Hybrid",
      type: "Full-Time",
      experience: "3-6+ Years in Deep Learning / Edge",
      compensation: "Lead Tier + Equity Grant",
      summary: "Deploy low-latency object detection, stereo visual SLAM, and multi-spectral sensor fusion pipelines on power-constrained edge silicon (NVIDIA Jetson Orin, Hailo, custom accelerators).",
      responsibilities: [
        "Optimize neural networks via TensorRT and INT8 quantization for sub-10ms real-time perception inference.",
        "Build robust visual-inertial odometry (VIO) pipelines that hold accuracy under severe lighting and vibration shifts.",
        "Benchmark thermal throttling, dynamic power scaling, and model resilience during full-throttle operations."
      ],
      skills: ["TensorRT / CUDA", "Stereo SLAM / VIO", "PyTorch / ONNX", "NVIDIA Jetson Orin", "C++"]
    },
    {
      id: "hardware-lead",
      title: "Mechatronics & Hardware Prototyping Lead",
      category: "hardware",
      domain: "Physical Engineering & Airframes",
      location: "Bengaluru, IN",
      workMode: "Onsite Lab",
      type: "Full-Time",
      experience: "3-7+ Years in Hardware / Mechanical",
      compensation: "Lead Tier + Equity Grant",
      summary: "Lead end-to-end hardware prototyping of composite carbon-fiber airframes, high-torque brushless drive powertrains, double-wishbone suspension rovers, and environmental FMEA hardening.",
      responsibilities: [
        "Engineer ultra-lightweight structural airframes utilizing vacuum-bagged carbon prepreg and CNC machined aluminum.",
        "Perform finite element analysis (FEA) on structural load paths and dynamic vibration resonance frequencies.",
        "Oversee the optical motion-capture testing arena, propulsion dynamometer testbenches, and environmental chambers."
      ],
      skills: ["SolidWorks / Fusion 360", "FEA Structural Analysis", "CNC / Carbon Prepreg", "Brushless Dyno", "FMEA Hardening"]
    },
    {
      id: "mission-control",
      title: "Mission Control & Distributed Telemetry Lead",
      category: "flight",
      domain: "Distributed Swarms & Ground Stations",
      location: "Bengaluru, IN",
      workMode: "Hybrid",
      type: "Full-Time",
      experience: "3-6+ Years in Distributed Systems",
      compensation: "Lead Tier + Equity Grant",
      summary: "Engineer high-throughput ground station software, encrypted telemetry radio links, 100Hz real-time sensor streams, and multi-agent coordination interfaces.",
      responsibilities: [
        "Architect low-latency C++/Rust telemetry engines supporting multi-drone swarm coordination.",
        "Implement robust radio link fail-safe algorithms and RTK base station synchronization.",
        "Build intuitive, ruggedized operator UI dashboards for real-time field deployments."
      ],
      skills: ["Rust / C++", "WebRTC / MQTT", "Encrypted Telemetry", "RTK-GPS Base Stations", "Mesh Comms"]
    },
    {
      id: "research-intern",
      title: "Robotics Research Intern / Fellow",
      category: "research",
      domain: "University Residency & R&D",
      location: "Bengaluru, IN",
      workMode: "Onsite Lab",
      type: "3-6 Month Paid Fellowship",
      experience: "Undergrad / Master / Ph.D. Scholars",
      compensation: "Generous Monthly Stipend + Housing Support",
      summary: "Hands-on engineering residency for ambitious university scholars and graduate researchers. Work directly on physical flight arena telemetry, motion capture validation, and autonomous testbeds.",
      responsibilities: [
        "Collaborate directly with senior engineers on flight telemetry collection, optical SLAM benchmarks, and testbed rigs.",
        "Implement and test micro-controller firmware and sensor communication drivers (UART, I2C, SPI, CAN).",
        "Co-author engineering whitepapers and open-source tooling developed during your residency."
      ],
      skills: ["Python / C++", "ROS2 Basics", "Micro-controller Firmware", "Physical Hardware Curiosity", "Data Analysis"]
    }
  ];

  // The 5 Rotating Disciplines on WorksWheel with All-New Hardware Images
  const wheelItems: WorksWheelItem[] = [
    {
      title: "Autonomous Flight Systems",
      domain: "Aerial Robotics & Guidance",
      image: careersFlightCardNew,
      bgImage: careersFlightBgNew,
      location: "Bengaluru, IN • Hybrid",
      type: "Full-Time",
      description: "Architect and benchmark non-linear flight control loops, fail-safe RTL states, and GPS-denied state estimation using PX4, ROS2, and custom telemetry protocols in physical reality.",
      skills: ["PX4 Autopilot", "ROS2 / C++20", "EKF2 State Estimation", "HIL Simulation", "CAN-FD Bus"],
      onApply: () => {
        setApplyingRole(roles[0]);
        setFormSubmitted(false);
      }
    },
    {
      title: "Edge AI & Computer Vision",
      domain: "Embedded Perception",
      image: careersVisionCardNew,
      bgImage: careersVisionBgNew,
      location: "Bengaluru, IN • Hybrid",
      type: "Full-Time",
      description: "Deploy and optimize low-latency object detection, optical flow, and multi-sensor fusion pipelines on power-constrained edge silicon (NVIDIA Jetson, Hailo, custom FPGA accelerators).",
      skills: ["TensorRT / CUDA", "Stereo SLAM / VIO", "PyTorch / ONNX", "NVIDIA Jetson Orin", "Sub-10ms Inference"],
      onApply: () => {
        setApplyingRole(roles[1]);
        setFormSubmitted(false);
      }
    },
    {
      title: "Mechatronics & Hardware",
      domain: "Physical Engineering & Airframes",
      image: careersCardMechatronics,
      bgImage: realCncMachining,
      location: "Bengaluru, IN • Onsite Lab",
      type: "Full-Time",
      description: "Lead end-to-end hardware development of carbon-fiber airframes, high-torque brushless drive powertrains, double-wishbone suspension rovers, and environmental FMEA hardening.",
      skills: ["SolidWorks / Fusion 360", "FEA Structural Analysis", "CNC / Carbon Prepreg", "Brushless Dyno", "FMEA Hardening"],
      onApply: () => {
        setApplyingRole(roles[2]);
        setFormSubmitted(false);
      }
    },
    {
      title: "Mission Control & Telemetry",
      domain: "Distributed Swarms & Ground Stations",
      image: careersCardTelemetry,
      bgImage: realSovereignDatacenter,
      location: "Bengaluru, IN • Hybrid",
      type: "Full-Time",
      description: "Engineer high-throughput ground station software, encrypted telemetry radio links, 100Hz real-time sensor streams, and multi-agent coordination interfaces.",
      skills: ["Rust / C++", "WebRTC / MQTT", "Encrypted Telemetry", "RTK-GPS Base Stations", "Mesh Comms"],
      onApply: () => {
        setApplyingRole(roles[3]);
        setFormSubmitted(false);
      }
    },
    {
      title: "Robotics Research Residencies",
      domain: "University Fellowships & R&D",
      image: collabLabsReal,
      bgImage: researchIntakeFacilityBg,
      location: "Bengaluru, IN • Onsite Lab",
      type: "3-6 Month Fellowship",
      description: "Hands-on engineering residency for ambitious university scholars and graduate students. Work directly on physical flight arena telemetry, motion capture validation, and autonomous testbeds.",
      skills: ["Python / C++", "ROS2 Basics", "Micro-controller Firmware", "Physical Hardware Curiosity", "Data Analysis"],
      onApply: () => {
        setApplyingRole(roles[4]);
        setFormSubmitted(false);
      }
    }
  ];

  const hiringSteps = [
    {
      step: "01",
      title: "Portfolio & Real Work Review",
      description: "No boilerplate LeetCode trivia. We look at GitHub repos, physical robots built, CAD models, schematics, or flight footage."
    },
    {
      step: "02",
      title: "Technical Systems Conversation",
      description: "A 45-minute technical dialogue with a senior engineer. We explore your past design trade-offs, debugging stories, and systems intuition."
    },
    {
      step: "03",
      title: "Lab Day / Collaborative Challenge",
      description: "Spend a day (or virtual sprint) solving an open-ended physical problem with our team using our actual hardware testbeds."
    },
    {
      step: "04",
      title: "Transparent Offer & Equity Alignment",
      description: "Direct, transparent compensation and equity packages. Clear ownership expectations from day one with zero bureaucratic layers."
    }
  ];

  const culturePrinciples = [
    {
      icon: <Target className="w-5 h-5 text-blue-600" />,
      num: "01",
      title: "Physical Reality Over Simulations",
      description: "Simulations are starting points, not proof. Our software flies in open wind, climbs rocky inclines, and endures real-world physical forces."
    },
    {
      icon: <Users className="w-5 h-5 text-cyan-600" />,
      num: "02",
      title: "Extreme Engineering Ownership",
      description: "Engineers own their systems from schematic design to field validation. No handoffs to distant departments or endless committees."
    },
    {
      icon: <Wrench className="w-5 h-5 text-amber-600" />,
      num: "03",
      title: "Cross-Disciplinary Proximity",
      description: "Firmware developers sit directly beside carbon-fiber fabricators, aerodynamicists, and perception researchers to co-solve bottlenecks."
    },
    {
      icon: <Sparkles className="w-5 h-5 text-indigo-600" />,
      num: "04",
      title: "Dedicated Field Sprints",
      description: "We step away from desks regularly to test our hardware in real agricultural fields, maritime shores, and mountain ranges."
    }
  ];

  const benefits = [
    { icon: <Cpu className="w-5 h-5 text-blue-600" />, title: "World-Class Hardware Lab", description: "Direct access to optical mocap arenas, 3D printers, multi-axis CNC mills, and dynamometer testbenches." },
    { icon: <Award className="w-5 h-5 text-blue-600" />, title: "Competitive Pay & Equity", description: "Top-market compensation packages with meaningful equity ownership in our long-term sovereign mission." },
    { icon: <Laptop className="w-5 h-5 text-blue-600" />, title: "Output-Focused Flexibility", description: "We respect your circadian rhythm and focus. Output, reliability, and code health matter — not desk hours." },
    { icon: <GraduationCap className="w-5 h-5 text-blue-600" />, title: "Learning & Conference Grant", description: "Annual grant for international robotics conferences (ICRA, IROS), technical books, and specialized certifications." },
    { icon: <Heart className="w-5 h-5 text-blue-600" />, title: "Comprehensive Health", description: "Extensive health, dental, and vision insurance coverage for you and your dependents with wellness support." },
    { icon: <Compass className="w-5 h-5 text-blue-600" />, title: "Field Test Retreats", description: "Quarterly field trials across scenic terrains to test multi-domain autonomy in extreme climates." }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const scrollToRoles = () => {
    const el = document.getElementById("build-with-us");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Auto-snap #build-with-us to 100% full screen when scrolled into view
  React.useEffect(() => {
    const el = document.getElementById("build-with-us");
    if (!el) return;
    let isSnapping = false;

    const handleScroll = () => {
      if (isSnapping) return;
      const rect = el.getBoundingClientRect();
      if (rect.top > 8 && rect.top < window.innerHeight * 0.6) {
        isSnapping = true;
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        setTimeout(() => { isSnapping = false; }, 850);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] text-slate-900 relative selection:bg-blue-500/20 overflow-x-hidden">
      
      {/* ========================================================================= */}
      {/* 1. CINEMATIC DAYLIGHT ENGINEERING STUDIO HERO (100% FULL SCREEN FIT)       */}
      {/* ========================================================================= */}
      <section className="relative w-full h-[100dvh] min-h-[100dvh] max-h-[100dvh] flex items-center justify-center overflow-hidden select-none bg-[#090e1a]">
        
        {/* ================= 1. CINEMATIC BACKGROUND VISUAL ================= */}
        <div className="absolute inset-0 z-0">
          <img
            src={careersDaylightStudio}
            alt="Novaliseo Autonomous Systems Engineering Studio"
            className="w-full h-full object-cover object-center scale-100 transition-transform duration-1000 ease-out"
          />

          {/* Soft Radial Mist Overlay on the Left for 100% Crisp Text Contrast */}
          <div 
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background: "radial-gradient(ellipse 68% 88% at 20% 50%, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.84) 42%, rgba(255, 255, 255, 0.22) 76%, transparent 100%)"
            }}
          />

          {/* Top Vignette for Navbar Readability */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/80 via-white/35 to-transparent pointer-events-none z-10" />

          {/* Bottom Soft Transition Fade into Roles Section */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f8fafc] via-[#f8fafc]/60 to-transparent pointer-events-none z-10" />
        </div>

        {/* ================= 2. MAIN EDITORIAL HERO CONTENT ================= */}
        <div className="relative z-20 w-full max-w-7xl 2xl:max-w-[1550px] mx-auto px-6 sm:px-10 lg:px-14 pt-16 sm:pt-20 pb-4 flex items-center justify-between my-auto">
          
          {/* Left-Aligned Editorial Column */}
          <div className="max-w-xl lg:max-w-2xl text-left">
            
            {/* Category Eyebrow Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2 mb-3"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] sm:text-xs font-mono font-semibold tracking-[0.24em] text-slate-500 uppercase">
                Careers &amp; Residencies // We're Hiring
              </span>
            </motion.div>

            {/* Master Headline: Editorial Serif with Slanting Italics */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-normal font-serif text-[#1e293b] leading-[0.98] tracking-tight mb-3.5 sm:mb-4 drop-shadow-xs"
            >
              Build the systems <br />
              that define <span className="italic text-[#0f172a] block mt-1">physical reality</span>
            </motion.h1>

            {/* Narrative Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-5 sm:mb-6 max-w-md sm:max-w-xl"
            >
              Join an autonomous robotics and physical AI collective developing autonomous flight vehicles, power-efficient edge perception, and sovereign intelligence systems. We build hardware that thrives outside clean rooms.
            </motion.p>

            {/* Action Button Group */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-5 sm:gap-6 mb-5 sm:mb-6"
            >
              {/* Primary Pill Button */}
              <button
                onClick={scrollToRoles}
                className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm tracking-tight transition-all duration-200 shadow-[0_10px_25px_rgba(0,0,0,0.18)] hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
              >
                <span>Explore Open Roles ({roles.length})</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Inline Diagonal Link */}
              <a
                href="#culture"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-800 hover:text-slate-950 transition-colors group py-2"
              >
                <span>Our Culture &amp; Lab Principles</span>
                <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-slate-950 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>

            {/* Bottom Highlights Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-3 border-t border-slate-300/70 flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono font-medium text-slate-600"
            >
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                5 Active Disciplines
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-600" />
                Hardware Lab: Bengaluru (HQ)
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                100% Direct Review
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                Substantial Equity
              </span>
            </motion.div>

          </div>

          {/* Right-Aligned Floating Highlights Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="hidden xl:flex flex-col gap-4 text-left p-6 sm:p-7 rounded-[2rem] bg-white/70 backdrop-blur-md border border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.06)] max-w-xs"
          >
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span>Active Talent Intake</span>
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <div className="text-3xl font-black text-slate-950 font-mono">05</div>
                <div className="text-xs text-slate-600 font-medium">Bespoke Engineering Disciplines</div>
              </div>
              <div className="border-t border-slate-200/80 pt-2">
                <div className="text-3xl font-black text-slate-950 font-mono">02</div>
                <div className="text-xs text-slate-600 font-medium">Physical Prototyping Labs</div>
              </div>
              <div className="border-t border-slate-200/80 pt-2">
                <div className="text-3xl font-black text-slate-950 font-mono">0</div>
                <div className="text-xs text-slate-600 font-medium">Bureaucratic Management Layers</div>
              </div>
            </div>

            <div className="pt-2 text-[11px] font-mono text-slate-500 border-t border-slate-200/80">
              Physical Reality Over Simulations.
            </div>
          </motion.div>

        </div>

      </section>

      {/* ========================================================================= */}
      {/* 2. BUILD WITH US: FULL SECTION SCREEN 3D PERSPECTIVE DRUM                 */}
      {/* ========================================================================= */}
      <section 
        id="build-with-us" 
        className="relative w-full h-[100dvh] min-h-[100dvh] max-h-[100dvh] overflow-hidden select-none bg-slate-950 scroll-mt-0 snap-start snap-always"
      >
        <WorksWheel 
          items={wheelItems}
          label="Build With Us '26"
          action="Explore & Apply"
        />
      </section>

      {/* Bespoke / General Intake Section with 3D Cylindrical Curved TiltedGridHero */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl 2xl:max-w-[1550px] mx-auto w-full">
        <TiltedGridHero
          images={bespokeTiltedImages}
          speed={4.5}
          tileHeight={32}
          aspectRatio={16 / 9}
          curve={75}
          fade={14}
          axis={52}
          gap={8}
          className="rounded-[2.5rem] border border-slate-200/90 shadow-[0_20px_50px_rgba(15,23,42,0.06)] bg-gradient-to-b from-slate-50/90 via-white to-slate-50/90 h-[520px] sm:h-[560px] md:h-[600px] flex items-center justify-center p-6 sm:p-10"
        >
          <div className="relative z-10 max-w-3xl w-full p-8 sm:p-10 md:p-12 rounded-[2.2rem] bg-white/92 backdrop-blur-md border border-white/80 shadow-[0_20px_60px_rgba(15,23,42,0.12)] text-left flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/60 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                <span className="text-[11px] font-mono font-bold text-amber-700 uppercase tracking-wider">
                  Bespoke Applications
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
                Don't see your exact role listed on the wheel?
              </h3>
              <p className="mt-2.5 text-slate-600 text-xs sm:text-sm leading-relaxed">
                We frequently open bespoke positions for exceptional contributors across autonomous systems, aerodynamic design, and embedded hardware security. If you have built something notable in physical reality, we want to see it.
              </p>
            </div>

            <a
              href="mailto:info@novaliseo.com?subject=Open%20Engineering%20Application%20-%20Novaliseo"
              className="shrink-0 inline-flex items-center gap-2 px-7 py-4 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm transition-all hover:scale-105 active:scale-95 shadow-md group"
            >
              <span>Submit General Portfolio</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </TiltedGridHero>
      </section>

      {/* ========================================================================= */}
      {/* 3. HOW WE HIRE (TRANSPARENT 4-STAGE PIPELINE)                             */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl 2xl:max-w-[1550px] mx-auto w-full border-t border-slate-200">
        
        <div className="text-left max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-mono font-bold tracking-wider text-blue-600 uppercase">
            Hiring Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight mt-1">
            How We Evaluate.
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
            We respect your time. Our hiring pipeline is fast, respectful, and focused entirely on your engineering competence and real-world creations.
          </p>
        </div>

        {/* 4 Stages Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hiringSteps.map((step, idx) => (
            <div 
              key={idx}
              className="p-6 sm:p-7 rounded-[2rem] bg-white border border-slate-200/90 shadow-sm text-left flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl sm:text-4xl font-black text-blue-600/80 font-mono mb-4 block">
                  {step.step}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-950 mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ========================================================================= */}
      {/* 4. CULTURE ARCHITECTURE & ENGINEERING VALUES                              */}
      {/* ========================================================================= */}
      <section id="culture" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl 2xl:max-w-[1550px] mx-auto w-full border-t border-slate-200">
        
        <div className="text-left max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-mono font-bold tracking-wider text-blue-600 uppercase">
            Workplace Ethos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight mt-1">
            Culture Architecture.
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
            Engineered for high autonomy, zero bureaucracy, direct feedback, and rapid physical deployment.
          </p>
        </div>

        {/* 4 Culture Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {culturePrinciples.map((val, idx) => (
            <div 
              key={idx}
              className="p-7 rounded-[2rem] bg-white border border-slate-200 shadow-sm text-left flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-5">
                  {val.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-950 mb-2">
                  {val.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {val.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* System Benefits & Lab Infrastructure */}
        <div className="rounded-[2.5rem] bg-white border border-slate-200 p-8 sm:p-12 lg:p-14 text-left shadow-md">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono font-bold tracking-wider text-blue-600 uppercase">
              Total Support
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 mt-1">
              System Benefits &amp; Lab Infrastructure
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
              We provide the institutional tooling, equipment, computing clusters, and comprehensive security so you can focus completely on building state-of-the-art autonomy.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((p, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0">
                  {p.icon}
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-950 mb-1">
                    {p.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* 5. INTERACTIVE APPLICATION MODAL / DIALOG                                 */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {applyingRole && (
          <CareerApplicationModal
            role={applyingRole}
            onClose={() => setApplyingRole(null)}
            bannerImage={
              applyingRole.id === "flight-engineer" ? careersFlightCardNew :
              applyingRole.id === "edge-ai-lead" ? careersVisionCardNew :
              applyingRole.id === "hardware-lead" ? careersCardMechatronics :
              applyingRole.id === "mission-control" ? careersCardTelemetry :
              collabLabsReal
            }
          />
        )}
      </AnimatePresence>

      <div className="h-16" />
    </div>
  );
}
