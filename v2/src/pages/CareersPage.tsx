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
import TigerTearReveal from "../components/ui/tiger-tear-reveal";

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
import careersEvaluatePosterBg from "../assets/careers_evaluate_poster_bg.jpg";
import AnimatedTabs, { Tab } from "../components/ui/animated-tabs";
import evalStage1Portfolio from "../assets/eval_stage1_portfolio.jpg";
import evalStage2Technical from "../assets/eval_stage2_technical.jpg";
import evalStage3LabDay from "../assets/eval_stage3_labday.jpg";
import evalStage4Offer from "../assets/eval_stage4_offer.jpg";
import evalBgPortfolio from "../assets/eval_bg_portfolio.jpg";
import evalBgDialogue from "../assets/eval_bg_dialogue.jpg";
import evalBgLabday from "../assets/eval_bg_labday.jpg";
import evalBgOffer from "../assets/eval_bg_offer.jpg";

// Brand-New Photorealistic Autonomous Physical Systems Visuals (100% Pure Hardware, Zero People, Zero Third-Party Brands)
import tiltedVtolHardware from "../assets/tilted/tilted_vtol_hardware.jpg";
import tiltedRoverHardware from "../assets/tilted/tilted_rover_hardware.jpg";
import tiltedGimbalHardware from "../assets/tilted/tilted_gimbal_hardware.jpg";
import tiltedPropulsionHardware from "../assets/tilted/tilted_propulsion_hardware.jpg";
import tiltedNavalHardware from "../assets/tilted/tilted_naval_hardware.jpg";
import loaderCarbonFrame from "../assets/loader/loader_carbon_frame.jpg";
import loaderEdgeCompute from "../assets/loader/loader_edge_compute.jpg";

const bespokeTiltedImages: TiltedGridImage[] = [
  { src: tiltedVtolHardware, alt: "Autonomous VTOL Aircraft System" },
  { src: tiltedRoverHardware, alt: "Autonomous All-Terrain Rover Platform" },
  { src: tiltedGimbalHardware, alt: "Multi-Spectral Optical Sensor Gimbal" },
  { src: tiltedPropulsionHardware, alt: "Brushless Powertrain Dynamometer Rig" },
  { src: tiltedNavalHardware, alt: "Autonomous Surface Naval Vessel" },
  { src: loaderCarbonFrame, alt: "Carbon Composite Airframe CNC Machining" },
  { src: loaderEdgeCompute, alt: "Edge Neural Compute Silicon Architecture" },
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
  const [activeEvalTab, setActiveEvalTab] = useState("stage1");
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

  const evalStageBgImages: Record<string, string> = {
    stage1: evalBgPortfolio,
    stage2: evalBgDialogue,
    stage3: evalBgLabday,
    stage4: evalBgOffer,
  };

  const evaluationTabs: Tab[] = [
    {
      id: "stage1",
      label: "01. Portfolio Review",
      badge: "48h",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-stretch w-full">
          {/* Left: Engineering Artifacts Inspector HUD */}
          <div className="lg:col-span-5 bg-white/70 backdrop-blur-md border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-200/80 mb-3">
                <span className="text-[11px] font-mono font-bold text-blue-700 bg-blue-50 border border-blue-200/80 px-2 py-0.5 rounded-md">
                  STAGE 01 // 48-HR INTAKE
                </span>
                <span className="text-[11px] font-mono text-emerald-600 flex items-center gap-1.5 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Direct Lead Review
                </span>
              </div>

              <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2 font-semibold">
                Technical Artifacts Inspected:
              </div>

              <div className="space-y-2">
                {[
                  "Flight Logs & Telemetry Blackbox (CSV/ULog)",
                  "ROS2 / C++ Firmware Repositories",
                  "3D CAD Assemblies (SolidWorks / Fusion)",
                  "Custom PCB Hardware & Schematics",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 mt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Standard: Real Physical Artifacts</span>
              <span className="text-slate-800 font-bold">No LeetCode</span>
            </div>
          </div>

          {/* Right: Ethos, Description & Criteria */}
          <div className="lg:col-span-7 flex flex-col justify-center gap-y-3 text-left">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-md">
                STAGE 01
              </span>
              <span className="text-xs font-mono text-slate-500 font-medium">48-Hour Turnaround</span>
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-950 tracking-tight">
              Portfolio &amp; Real Work Review
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              No boilerplate trivia. We look at GitHub repos, physical robots built, CAD models, schematics, or flight footage that prove your engineering intuition.
            </p>

            <div className="space-y-2 pt-1 text-xs text-slate-700">
              <div className="flex items-start gap-2.5 bg-slate-50/80 border border-slate-200/70 p-2.5 rounded-xl">
                <FileCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900">Physical Reality Over Quizzes:</span>{" "}
                  Real CAD assemblies, motor dynamometer graphs, and firmware diffs that solved real problems.
                </div>
              </div>
              <div className="flex items-start gap-2.5 bg-slate-50/80 border border-slate-200/70 p-2.5 rounded-xl">
                <Award className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900">Direct Lead Review:</span>{" "}
                  Evaluated only by practicing autonomous robotics engineers who design and fly our sovereign platforms.
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {["CAD Assemblies", "Git Commits", "Flight Logs", "Custom PCB", "Kinematics"].map((tag, i) => (
                <span key={i} className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/90 border border-slate-200 text-slate-700 font-medium shadow-2xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "stage2",
      label: "02. Systems Dialogue",
      badge: "45m",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-stretch w-full">
          {/* Left: Engineering Artifacts Inspector HUD */}
          <div className="lg:col-span-5 bg-white/70 backdrop-blur-md border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-200/80 mb-3">
                <span className="text-[11px] font-mono font-bold text-blue-700 bg-blue-50 border border-blue-200/80 px-2 py-0.5 rounded-md">
                  STAGE 02 // 45-MIN ARCHITECTURE
                </span>
                <span className="text-[11px] font-mono text-emerald-600 flex items-center gap-1.5 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Systems Architect Peer
                </span>
              </div>

              <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2 font-semibold">
                Core Domains Explored:
              </div>

              <div className="space-y-2">
                {[
                  "Extended Kalman Filter (EKF) State Estimation",
                  "Quaternion Attitude Kinematics & Loops",
                  "LiDAR SLAM & Point Cloud Odometry",
                  "Real-World Hardware Debugging War Stories",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 mt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Format: First-Principles Dialogue</span>
              <span className="text-slate-800 font-bold">Sub-10ms Loops</span>
            </div>
          </div>

          {/* Right: Ethos, Description & Criteria */}
          <div className="lg:col-span-7 flex flex-col justify-center gap-y-3 text-left">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-md">
                STAGE 02
              </span>
              <span className="text-xs font-mono text-slate-500 font-medium">45-Minute Dialogue</span>
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-950 tracking-tight">
              Technical Systems Conversation
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              A 45-minute technical dialogue with a senior engineer. We explore past design trade-offs, debugging stories, and systems intuition.
            </p>

            <div className="space-y-2 pt-1 text-xs text-slate-700">
              <div className="flex items-start gap-2.5 bg-slate-50/80 border border-slate-200/70 p-2.5 rounded-xl">
                <Cpu className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900">First-Principles Dialogue:</span>{" "}
                  Nonlinear control loops, Kalman filter covariance tuning, and low-latency zero-copy pipelines.
                </div>
              </div>
              <div className="flex items-start gap-2.5 bg-slate-50/80 border border-slate-200/70 p-2.5 rounded-xl">
                <Wrench className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900">Field War Stories:</span>{" "}
                  We want to hear what broke in real wind, dynamic vibration, or telemetry dropouts, and how you fixed it.
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {["ROS2 / C++", "State Estimation", "Hardware Debugging", "Sub-10ms Loops", "Sensor Fusion"].map((tag, i) => (
                <span key={i} className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/90 border border-slate-200 text-slate-700 font-medium shadow-2xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "stage3",
      label: "03. Lab Day Sprint",
      badge: "1 Day",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-stretch w-full">
          {/* Left: Engineering Artifacts Inspector HUD */}
          <div className="lg:col-span-5 bg-white/70 backdrop-blur-md border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-200/80 mb-3">
                <span className="text-[11px] font-mono font-bold text-blue-700 bg-blue-50 border border-blue-200/80 px-2 py-0.5 rounded-md">
                  STAGE 03 // FULL DAY SPRINT
                </span>
                <span className="text-[11px] font-mono text-emerald-600 flex items-center gap-1.5 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Fully Compensated
                </span>
              </div>

              <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2 font-semibold">
                Live Hardware Access:
              </div>

              <div className="space-y-2">
                {[
                  "Live Optical Mocap Trajectory Tracking Arena",
                  "Dynamometer Thrust Stand & Motor Testing",
                  "Autonomous Ground Rover / UAV Co-Testing",
                  "Hardware-in-the-Loop (HIL) Fault Injection",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 mt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Environment: Flight Net Arena</span>
              <span className="text-slate-800 font-bold">Paid Daily Rate</span>
            </div>
          </div>

          {/* Right: Ethos, Description & Criteria */}
          <div className="lg:col-span-7 flex flex-col justify-center gap-y-3 text-left">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-md">
                STAGE 03
              </span>
              <span className="text-xs font-mono text-slate-500 font-medium">Full Day Lab Sprint (Compensated)</span>
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-950 tracking-tight">
              Lab Day / Collaborative Challenge
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Spend a day solving an open-ended physical problem with our team using our actual hardware testbeds, flight net, and sensor arenas.
            </p>

            <div className="space-y-2 pt-1 text-xs text-slate-700">
              <div className="flex items-start gap-2.5 bg-slate-50/80 border border-slate-200/70 p-2.5 rounded-xl">
                <Target className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900">Real Hardware Access:</span>{" "}
                  Optical mocap flight net arena, dynamic test stands, rovers, and spectrum analyzers.
                </div>
              </div>
              <div className="flex items-start gap-2.5 bg-slate-50/80 border border-slate-200/70 p-2.5 rounded-xl">
                <Award className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900">Fully Compensated:</span>{" "}
                  Your time, focus, and contributions are respected and paid at top market day rates.
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {["Mocap Arena", "Physical Testbeds", "HIL Simulation", "Sensor Fusion", "UAV Flight Net"].map((tag, i) => (
                <span key={i} className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/90 border border-slate-200 text-slate-700 font-medium shadow-2xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "stage4",
      label: "04. Equity & Offer",
      badge: "Direct",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-stretch w-full">
          {/* Left: Engineering Artifacts Inspector HUD */}
          <div className="lg:col-span-5 bg-white/70 backdrop-blur-md border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-200/80 mb-3">
                <span className="text-[11px] font-mono font-bold text-blue-700 bg-blue-50 border border-blue-200/80 px-2 py-0.5 rounded-md">
                  STAGE 04 // TRANSPARENT OFFER
                </span>
                <span className="text-[11px] font-mono text-emerald-600 flex items-center gap-1.5 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Direct Alignment
                </span>
              </div>

              <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2 font-semibold">
                Guaranteed Foundations:
              </div>

              <div className="space-y-2">
                {[
                  "Transparent Equity Formula & Cap Table Model",
                  "Top-Market Compensation & Direct Bonuses",
                  "Zero Bureaucratic Management Layers",
                  "Full Technical Ownership on Day One",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 mt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Mission: Sovereign Autonomy</span>
              <span className="text-slate-800 font-bold">Meaningful Pool</span>
            </div>
          </div>

          {/* Right: Ethos, Description & Criteria */}
          <div className="lg:col-span-7 flex flex-col justify-center gap-y-3 text-left">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-md">
                STAGE 04
              </span>
              <span className="text-xs font-mono text-slate-500 font-medium">Direct Alignment</span>
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-950 tracking-tight">
              Transparent Offer &amp; Equity Alignment
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Direct, transparent compensation and equity packages. Clear ownership expectations from day one with zero bureaucratic layers.
            </p>

            <div className="space-y-2 pt-1 text-xs text-slate-700">
              <div className="flex items-start gap-2.5 bg-slate-50/80 border border-slate-200/70 p-2.5 rounded-xl">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900">Meaningful Equity:</span>{" "}
                  Substantial ownership stake in our long-term sovereign autonomy mission.
                </div>
              </div>
              <div className="flex items-start gap-2.5 bg-slate-50/80 border border-slate-200/70 p-2.5 rounded-xl">
                <Award className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900">Zero Bureaucracy:</span>{" "}
                  Flat reporting, extreme engineering ownership, and immediate autonomy from day one.
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {["Direct Equity", "Top Market Pay", "High Autonomy", "No Bureaucracy", "Sovereign Mission"].map((tag, i) => (
                <span key={i} className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/90 border border-slate-200 text-slate-700 font-medium shadow-2xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ),
    },
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
    <div className="min-h-screen bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] text-slate-900 relative selection:bg-blue-500/20 overflow-x-clip">
      
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

      {/* ========================================================================= */}
      {/* 2.5 BESPOKE INTAKE: FULL-SCREEN 3D CYLINDRICAL TILTED GRID HERO           */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-screen lg:h-screen lg:min-h-[850px] overflow-hidden bg-[#f8fafc] border-t border-slate-200/90 flex flex-col justify-between select-none">
        
        {/* Full-Bleed Engineering Facility Background Visual */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <img
            src={researchIntakeFacilityBg}
            alt="Novaliseo Autonomous Systems Facility"
            className="w-full h-full object-cover object-center opacity-85 scale-100"
          />
          {/* Reduced Transparency Overlay: softer, elegant white diffusion that keeps the lab clearly visible without competing with text */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/65 to-white/80" />
          {/* Soft luminous highlight behind the top headline area for pristine text legibility */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[950px] h-[400px] bg-white/75 blur-3xl rounded-full pointer-events-none" />
        </div>

        {/* 3D Cylindrical Curved TiltedGridHero (Full-Width Continuous Stream with Long/Tall Hardware Images) */}
        <TiltedGridHero
          images={bespokeTiltedImages}
          speed={4}
          tileHeight={50}
          aspectRatio={16 / 10}
          curve={42}
          fade={8}
          axis={72}
          gap={3}
          className="relative z-10 w-full h-full min-h-screen lg:h-screen flex flex-col justify-between py-10 sm:py-14"
        >
          {/* Crisp, 100% High-Contrast Front Typography & Call to Action (Floating Open Layout) */}
          <div className="relative z-30 w-full max-w-4xl mx-auto px-4 sm:px-6 pt-4 sm:pt-8 flex flex-col items-center text-center pointer-events-auto">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 mb-4 shadow-xs backdrop-blur-xs">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-widest">
                Bespoke Applications
              </span>
            </div>

            {/* Main Heading (100% High-Contrast Slate-950) */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.12] drop-shadow-xs">
              Don't see your exact role listed on the wheel?
            </h2>

            {/* Supporting Description */}
            <p className="mt-4 text-slate-700 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed font-medium drop-shadow-2xs">
              We frequently open bespoke positions for exceptional contributors across autonomous systems, aerodynamic design, and embedded hardware security. If you have built something notable in physical reality, we want to see it.
            </p>

            {/* High-Impact CTA Button */}
            <div className="mt-6 flex items-center justify-center">
              <a
                href="mailto:info@novaliseo.com?subject=Open%20Engineering%20Application%20-%20Novaliseo"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-bold text-sm sm:text-base shadow-xl hover:scale-105 active:scale-95 transition-all group cursor-pointer"
              >
                <span>Submit General Portfolio</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </TiltedGridHero>
      </section>

      {/* ========================================================================= */}
      {/* 3. HOW WE HIRE: 3-PHASE TEAR REVEAL (TEAR OPEN -> FULL SCREEN -> CLOSE)   */}
      {/* ========================================================================= */}
      <section id="evaluation" className="w-full relative bg-[#f8fafc] border-t border-slate-200">
        
        {/* Interactive Scroll Paper Tear Reveal: slowly tears open, covers full screen with evaluation pipeline, and slowly closes on continued scroll */}
        <TigerTearReveal
          tagline="HIRING PHILOSOPHY // 4-STAGE PIPELINE"
          word="EVALUATE"
          bgImage={careersEvaluatePosterBg}
          bgOpacity={0.85}
          wordGradient={["#0f172a", "#1e293b", "#334155", "#0f172a"]}
          taglineColor="#475569"
          ink="#0f172a"
          paper="#f8fafc"
          height="100svh"
          scrollDistance="320svh"
          closeOnExit={true}
        >
          {/* Revealed Content: Full-Bleed Dynamic Background & Interactive Glassmorphism HUD */}
          <div className="relative w-full h-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-4 sm:py-6 overflow-hidden pointer-events-auto">
            
            {/* FULL-BLEED DYNAMIC BACKGROUND VISUAL - Vivid, immersive, clearly visible! */}
            <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeEvalTab}
                  src={evalStageBgImages[activeEvalTab] || evalBgPortfolio}
                  alt="Evaluation Stage Background Visual"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 0.90, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full object-cover object-center"
                />
              </AnimatePresence>
              {/* Luminous daylight gradient scrim: keeps the rich laboratory visual vivid while guaranteeing text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/35 to-white/85 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-transparent to-white/60 pointer-events-none" />
            </div>

            <div className="w-full max-w-6xl 2xl:max-w-7xl mx-auto flex flex-col justify-center items-center">
              {/* Header Area with High-Contrast Typography & Glass Badge */}
              <div className="w-full flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="text-left max-w-3xl">
                  <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-blue-600 uppercase bg-white/90 border border-blue-200/60 px-3 py-1 rounded-full shadow-2xs backdrop-blur-md">
                    Evaluation Architecture // 4-Stage Intake
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 tracking-tight mt-2 drop-shadow-[0_2px_12px_rgba(255,255,255,0.9)]">
                    How We Evaluate.
                  </h2>
                  <p className="mt-1 text-slate-700 text-xs sm:text-sm leading-relaxed font-medium max-w-2xl drop-shadow-[0_1px_6px_rgba(255,255,255,0.8)]">
                    We respect your time. Our hiring pipeline is fast, respectful, and focused entirely on physical engineering competence.
                  </p>
                </div>

                <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200/90 text-slate-800 text-xs font-mono font-semibold self-start sm:self-auto shrink-0 shadow-sm backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Direct Engineering Review</span>
                </div>
              </div>

              {/* Interactive AnimatedTabs Component with Changing Showcase Visuals & Auto-shift */}
              <AnimatedTabs
                tabs={evaluationTabs}
                activeTab={activeEvalTab}
                onTabChange={setActiveEvalTab}
                autoShiftInterval={4500}
                className="w-full pointer-events-auto"
              />
            </div>
          </div>
        </TigerTearReveal>

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
