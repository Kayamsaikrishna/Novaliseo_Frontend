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
  Award,
  Server
} from "lucide-react";

import WorksWheel, { WorksWheelItem } from "../components/WorksWheel";
import CareerApplicationModal from "../components/CareerApplicationModal";
import TiltedGridHero, { TiltedGridImage } from "../components/ui/TiltedGridHero";
import TigerTearReveal from "../components/ui/tiger-tear-reveal";
import { BentoCard } from "../components/ui/bento";
import { FeatureSteps, Feature } from "../components/ui/feature-section";

// Bento Grid Realistic Generated Visual Assets
import bentoHardwareLab from "../assets/bento_hardware_lab.jpg";
import bentoFieldSprints from "../assets/bento_field_sprints.jpg";
import bentoPcbOwnership from "../assets/bento_pcb_ownership.jpg";
import bentoComputeCluster from "../assets/bento_compute_cluster.jpg";
import careersWorkspaceReal from "../assets/careers_workspace_real.jpg";

// System Benefits Generated Visual Assets (100% Pure Physical Hardware, Zero Humans, Zero Brand Logos)
import benefit1HardwareLab from "../assets/benefit_1_hardware_lab.jpg";
import benefit2ComputeCluster from "../assets/benefit_2_compute_cluster.jpg";
import benefit3FieldSprints from "../assets/benefit_3_field_sprints.jpg";
import benefit4Dynamometer from "../assets/benefit_4_dynamometer.jpg";
import benefit5RoverTestbed from "../assets/benefit_5_rover_testbed.jpg";

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
      label: "01. Application Review",
      badge: "48h",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-stretch w-full">
          {/* Left: Stage Summary Card */}
          <div className="lg:col-span-5 bg-white/75 backdrop-blur-md border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-200/80 mb-3">
                <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200/80 px-2.5 py-1 rounded-lg">
                  Stage 01 of 04
                </span>
                <span className="text-xs text-emerald-600 flex items-center gap-1.5 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  48-Hour Response
                </span>
              </div>

              <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5">
                What We Look For:
              </div>

              <div className="space-y-2.5">
                {[
                  "Real-world track record and projects you have contributed to",
                  "Craft, attention to detail, and pride in execution",
                  "Clear communication and how you explain technical trade-offs",
                  "Thoughtful problem-solving and eagerness to learn",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 mt-3 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
              <span>Reviewed by team leads</span>
              <span className="text-slate-900 font-semibold">No Automated Filters</span>
            </div>
          </div>

          {/* Right: Ethos & Clear Description */}
          <div className="lg:col-span-7 flex flex-col justify-center gap-y-3 text-left">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-md">
                Stage 01
              </span>
              <span className="text-xs text-slate-500 font-medium">Initial Work Review</span>
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-950 tracking-tight">
              Application &amp; Real Work Review
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              We respect your time. Instead of generic quiz tests or artificial trivia, our team directly reviews what you’ve built, contributed to, and learned from in the real world.
            </p>

            <div className="space-y-2 pt-1 text-xs text-slate-700">
              <div className="flex items-start gap-2.5 bg-slate-50/80 border border-slate-200/70 p-3 rounded-xl">
                <FileCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900">Real Contributions Over Quizzes:</span>{" "}
                  We review your actual work — whether that’s code repositories, design portfolios, physical prototypes, or architectural case studies.
                </div>
              </div>
              <div className="flex items-start gap-2.5 bg-slate-50/80 border border-slate-200/70 p-3 rounded-xl">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900">Guaranteed Fast Feedback:</span>{" "}
                  Every application is directly reviewed by practicing team leads, with prompt updates and clear next steps within 48 hours.
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {["Work Review", "Past Projects", "Fast Feedback", "Direct Human Review"].map((tag, i) => (
                <span key={i} className="text-xs px-2.5 py-0.5 rounded-lg bg-white/90 border border-slate-200 text-slate-700 font-medium shadow-2xs">
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
      label: "02. Conversational Dialogue",
      badge: "45m",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-stretch w-full">
          {/* Left: Stage Summary Card */}
          <div className="lg:col-span-5 bg-white/75 backdrop-blur-md border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-200/80 mb-3">
                <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200/80 px-2.5 py-1 rounded-lg">
                  Stage 02 of 04
                </span>
                <span className="text-xs text-blue-600 flex items-center gap-1.5 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                  45-Minute Video Call
                </span>
              </div>

              <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5">
                What to Expect:
              </div>

              <div className="space-y-2.5">
                {[
                  "Two-way dialogue to explore shared technical vision",
                  "Discussion on real problems you’ve solved and trade-offs made",
                  "How you like to collaborate and communicate in a team",
                  "Dedicated time for you to ask us any questions",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 mt-3 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
              <span>Discussion, not an interrogation</span>
              <span className="text-slate-900 font-semibold">Mutual Fit</span>
            </div>
          </div>

          {/* Right: Ethos & Clear Description */}
          <div className="lg:col-span-7 flex flex-col justify-center gap-y-3 text-left">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-md">
                Stage 02
              </span>
              <span className="text-xs text-slate-500 font-medium">Conversational Dialogue</span>
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-950 tracking-tight">
              Technical &amp; Cultural Dialogue
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              A casual, in-depth conversation with your future team lead. We treat this as an open two-way dialogue to see if our work culture, mission, and technical standards align.
            </p>

            <div className="space-y-2 pt-1 text-xs text-slate-700">
              <div className="flex items-start gap-2.5 bg-slate-50/80 border border-slate-200/70 p-3 rounded-xl">
                <Users className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900">Collaborative Discussion:</span>{" "}
                  No high-pressure riddles or trick questions. We talk through your past engineering challenges, trade-offs, and design intuition.
                </div>
              </div>
              <div className="flex items-start gap-2.5 bg-slate-50/80 border border-slate-200/70 p-3 rounded-xl">
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900">Open Q&amp;A For You:</span>{" "}
                  We believe hiring is a mutual choice. You get dedicated time to ask about our technical stack, culture, growth roadmap, and daily life.
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {["Team Dialogue", "Problem Solving", "Two-Way Q&A", "Culture Fit"].map((tag, i) => (
                <span key={i} className="text-xs px-2.5 py-0.5 rounded-lg bg-white/90 border border-slate-200 text-slate-700 font-medium shadow-2xs">
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
      label: "03. Practical Challenge",
      badge: "1 Day",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-stretch w-full">
          {/* Left: Stage Summary Card */}
          <div className="lg:col-span-5 bg-white/75 backdrop-blur-md border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-200/80 mb-3">
                <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200/80 px-2.5 py-1 rounded-lg">
                  Stage 03 of 04
                </span>
                <span className="text-xs text-emerald-600 flex items-center gap-1.5 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Fully Compensated
                </span>
              </div>

              <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5">
                How It Works:
              </div>

              <div className="space-y-2.5">
                {[
                  "Work on a practical challenge relevant to your specific domain",
                  "Collaborate directly with the team to iterate and solve problems",
                  "Flexible format: completed as a live working sprint or take-home",
                  "Experience what working together on daily tasks really feels like",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 mt-3 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
              <span>Realistic working session</span>
              <span className="text-slate-900 font-semibold">Paid Standard Rate</span>
            </div>
          </div>

          {/* Right: Ethos & Clear Description */}
          <div className="lg:col-span-7 flex flex-col justify-center gap-y-3 text-left">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-md">
                Stage 03
              </span>
              <span className="text-xs text-slate-500 font-medium">Hands-On Collaboration</span>
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-950 tracking-tight">
              Collaborative Practical Challenge
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Experience real collaboration. We partner on a practical, open-ended challenge designed around the everyday responsibilities of your specific role.
            </p>

            <div className="space-y-2 pt-1 text-xs text-slate-700">
              <div className="flex items-start gap-2.5 bg-slate-50/80 border border-slate-200/70 p-3 rounded-xl">
                <Target className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900">Real-World Problem Solving:</span>{" "}
                  No artificial exam puzzles. You work on a realistic challenge tailored to your field where you can showcase your craft and creative thinking.
                </div>
              </div>
              <div className="flex items-start gap-2.5 bg-slate-50/80 border border-slate-200/70 p-3 rounded-xl">
                <Award className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900">Fairly Paid &amp; Respectful:</span>{" "}
                  We value your expertise and time. Any dedicated working challenge or collaborative sprint is fully paid at standard day rates.
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {["Practical Challenge", "Collaboration", "Fairly Compensated", "Real Workflows"].map((tag, i) => (
                <span key={i} className="text-xs px-2.5 py-0.5 rounded-lg bg-white/90 border border-slate-200 text-slate-700 font-medium shadow-2xs">
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
      label: "04. Offer & Welcome",
      badge: "Direct",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-stretch w-full">
          {/* Left: Stage Summary Card */}
          <div className="lg:col-span-5 bg-white/75 backdrop-blur-md border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-200/80 mb-3">
                <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200/80 px-2.5 py-1 rounded-lg">
                  Stage 04 of 04
                </span>
                <span className="text-xs text-emerald-600 flex items-center gap-1.5 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Transparent Agreement
                </span>
              </div>

              <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5">
                What We Offer:
              </div>

              <div className="space-y-2.5">
                {[
                  "Competitive, top-market compensation and direct bonuses",
                  "Meaningful equity ownership in our long-term mission",
                  "Flat hierarchy with high autonomy and day-one ownership",
                  "Comprehensive health coverage, learning grants, and retreats",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 mt-3 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
              <span>Direct, clear communication</span>
              <span className="text-slate-900 font-semibold">Ownership from Day One</span>
            </div>
          </div>

          {/* Right: Ethos & Clear Description */}
          <div className="lg:col-span-7 flex flex-col justify-center gap-y-3 text-left">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-md">
                Stage 04
              </span>
              <span className="text-xs text-slate-500 font-medium">Offer &amp; Onboarding</span>
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-950 tracking-tight">
              Transparent Offer &amp; Alignment
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              We believe in transparent, straightforward partnerships. When there is mutual alignment, we move quickly to deliver a competitive offer with meaningful ownership.
            </p>

            <div className="space-y-2 pt-1 text-xs text-slate-700">
              <div className="flex items-start gap-2.5 bg-slate-50/80 border border-slate-200/70 p-3 rounded-xl">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900">Transparent Compensation &amp; Equity:</span>{" "}
                  Clear terms, competitive market pay, and substantial equity with no hidden fine print or unnecessary waiting periods.
                </div>
              </div>
              <div className="flex items-start gap-2.5 bg-slate-50/80 border border-slate-200/70 p-3 rounded-xl">
                <ArrowUpRight className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900">Immediate Autonomy:</span>{" "}
                  Flat reporting with extreme engineering and domain ownership from day one. You are empowered to make key decisions immediately.
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {["Transparent Offer", "Top Market Pay", "Meaningful Equity", "Direct Ownership"].map((tag, i) => (
                <span key={i} className="text-xs px-2.5 py-0.5 rounded-lg bg-white/90 border border-slate-200 text-slate-700 font-medium shadow-2xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ),
    },
  ];


  const benefitSteps: Feature[] = [
    {
      step: "Benefit 01",
      title: "World-Class Prototyping & Optical Mocap Arenas",
      content: "Direct 24/7 access to optical motion-capture flight arenas, multi-axis precision CNC mills, brushless dynamometers, and carbon-composite autoclave testbeds.",
      image: benefit1HardwareLab,
    },
    {
      step: "Benefit 02",
      title: "Sovereign AI Compute & Embedded Acceleration",
      content: "Dedicated local GPU clusters for perception training, low-latency edge AI silicon testbenches (NVIDIA Jetson, Hailo), and hardware-in-the-loop (HIL) simulators.",
      image: benefit2ComputeCluster,
    },
    {
      step: "Benefit 03",
      title: "Quarterly Flight Expeditions & Real Terrains",
      content: "We step away from desks regularly to test multi-domain autonomous UAVs and UGVs across open agricultural crops, maritime shores, and rugged mountain ranges.",
      image: benefit3FieldSprints,
    },
    {
      step: "Benefit 04",
      title: "Powertrain Dyno & Wind Tunnel Testbeds",
      content: "High-torque brushless motor dynamometer testbenches, aerodynamic thrust load cells, non-linear vibration rigs, and environmental stress screening chambers.",
      image: benefit4Dynamometer,
    },
    {
      step: "Benefit 05",
      title: "All-Terrain Obstacle Courses & Perception Rigs",
      content: "Dedicated physical obstacle courses for LiDAR-based ground rovers, optical sensor calibration benches, and full sovereign equity alignment with family care.",
      image: benefit5RoverTestbed,
    },
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

  // Auto-snap full-screen sections (#build-with-us and #benefits) to 100% full screen when scrolled into view
  React.useEffect(() => {
    const snapTargets = ["build-with-us", "benefits"];
    let isSnapping = false;

    const handleScroll = () => {
      if (isSnapping) return;
      for (const id of snapTargets) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top > 10 && rect.top < window.innerHeight * 0.45) {
          isSnapping = true;
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          setTimeout(() => { isSnapping = false; }, 850);
          break;
        }
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
                href="mailto:official@novaliseo.com?subject=Open%20Engineering%20Application%20-%20Novaliseo"
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
          tagline="HIRING PROCESS · 4 TRANSPARENT STAGES"
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
                  <span className="text-xs sm:text-sm font-semibold tracking-wider text-blue-600 uppercase bg-white/90 border border-blue-200/60 px-3 py-1 rounded-full shadow-2xs backdrop-blur-md">
                    Hiring Journey · 4-Stage Process
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight mt-2 drop-shadow-[0_2px_12px_rgba(255,255,255,0.9)]">
                    How We Evaluate.
                  </h2>
                  <p className="mt-1 text-slate-700 text-xs sm:text-sm leading-relaxed font-medium max-w-2xl drop-shadow-[0_1px_6px_rgba(255,255,255,0.8)]">
                    We respect your time. Our hiring process is transparent, collaborative, and designed to understand your real-world experience and craft.
                  </p>
                </div>

                <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200/90 text-slate-800 text-xs font-semibold self-start sm:self-auto shrink-0 shadow-sm backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Direct Team Review</span>
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
      {/* 4. CULTURE ARCHITECTURE & LAB INFRASTRUCTURE (BENTO GRID SHOWCASE)        */}
      {/* ========================================================================= */}
      <section id="culture" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl 2xl:max-w-[1550px] mx-auto w-full border-t border-slate-200">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="text-left max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 mb-3">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-wider text-blue-700 uppercase">
                Workplace Ethos &amp; Lab Reality
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight">
              Culture Architecture.
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
              Engineered for high autonomy, zero bureaucracy, direct feedback, rapid physical deployment, and comprehensive sovereign support.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>05 Core Architectural Pillars</span>
          </div>
        </div>

        {/* Dynamic Bento Grid */}
        <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-6 mb-12">
          {/* Card 1: Hardware Lab & Optical Mocap (lg:col-span-3) */}
          <BentoCard
            eyebrow={
              <span className="flex items-center gap-2 text-blue-400">
                <Target className="w-4 h-4 text-blue-400" />
                <span>01 • PHYSICAL REALITY OVER SIMULATIONS</span>
              </span>
            }
            title="World-Class Prototyping & Motion-Capture Lab"
            description="Simulations are starting points, not proof. Direct daily access to optical motion-capture test arenas, multi-axis CNC mills, brushless dynamometers, and carbon autoclave testbeds. Software that flies in open sky, not just in simulation."
            graphic={
              <img
                src={bentoHardwareLab}
                alt="Prototyping Hardware Lab with Optical Motion Capture"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            }
            fade={["top", "bottom"]}
            className="lg:col-span-3 lg:rounded-tl-[2.5rem] rounded-2xl"
          />

          {/* Card 2: Dedicated Field Sprints (lg:col-span-3) */}
          <BentoCard
            eyebrow={
              <span className="flex items-center gap-2 text-emerald-400">
                <Compass className="w-4 h-4 text-emerald-400" />
                <span>02 • DEDICATED FIELD SPRINTS</span>
              </span>
            }
            title="Open Skies, High Terrains & Real Trials"
            description="We step away from desks regularly to test our hardware in real agricultural fields, maritime shores, and mountain ranges. Real physical aerodynamic and terrain forces with zero proxy lag."
            graphic={
              <img
                src={bentoFieldSprints}
                alt="Autonomous Systems Mountain Field Testing Station"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            }
            fade={["top", "bottom"]}
            className="lg:col-span-3 lg:rounded-tr-[2.5rem] rounded-2xl"
          />

          {/* Card 3: Extreme Engineering Ownership (lg:col-span-2) */}
          <BentoCard
            eyebrow={
              <span className="flex items-center gap-2 text-cyan-400">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>03 • EXTREME OWNERSHIP</span>
              </span>
            }
            title="Zero Bureaucracy, End-to-End Ownership"
            description="Engineers own their systems from schematic design to field validation. Firmware developers sit beside carbon fabricators and aerodynamicists to co-solve bottlenecks directly."
            graphic={
              <img
                src={bentoPcbOwnership}
                alt="Flight Avionics and Extreme Ownership Circuitry"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            }
            fade={["top", "bottom"]}
            className="lg:col-span-2 lg:rounded-bl-[2.5rem] rounded-2xl"
          />

          {/* Card 4: High-Density AI & Simulation Compute (lg:col-span-2) */}
          <BentoCard
            eyebrow={
              <span className="flex items-center gap-2 text-amber-400">
                <Server className="w-4 h-4 text-amber-400" />
                <span>04 • SOVEREIGN COMPUTE</span>
              </span>
            }
            title="High-Density GPU Clusters & HIL Rigs"
            description="Dedicated high-throughput local GPU clusters, low-latency edge AI silicon testbeds, and hardware-in-the-loop (HIL) simulators for real-time model verification and rapid sensor fusion benchmarking."
            graphic={
              <img
                src={bentoComputeCluster}
                alt="Sovereign AI Compute Cluster Aisle"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            }
            fade={["top", "bottom"]}
            className="lg:col-span-2 rounded-2xl"
          />

          {/* Card 5: Total Support & Equity Alignment (lg:col-span-2) */}
          <BentoCard
            eyebrow={
              <span className="flex items-center gap-2 text-purple-400">
                <Award className="w-4 h-4 text-purple-400" />
                <span>05 • TOTAL SUPPORT</span>
              </span>
            }
            title="Top-Tier Equity, Flexibility & Full Care"
            description="Top-market compensation packages with meaningful equity ownership in our sovereign mission, output-focused circadian flexibility, international conference travel grants (ICRA/IROS), and comprehensive family healthcare."
            graphic={
              <img
                src={careersWorkspaceReal}
                alt="Engineering Design Studio and Total Institutional Support"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            }
            fade={["top", "bottom"]}
            className="lg:col-span-2 lg:rounded-br-[2.5rem] rounded-2xl"
          />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SYSTEM BENEFITS & LAB INFRASTRUCTURE (100% SINGLE SCREEN FIT)          */}
      {/* ========================================================================= */}
      <section 
        id="benefits" 
        className="relative w-full min-h-[100dvh] lg:h-[100dvh] lg:max-h-[100dvh] flex flex-col justify-center items-center py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 border-t border-slate-200/80 bg-gradient-to-b from-white via-slate-50/50 to-slate-100/60 overflow-hidden select-none"
      >
        <div className="w-full h-full max-w-7xl 2xl:max-w-[1550px] mx-auto flex flex-col justify-center">
          <FeatureSteps
            features={benefitSteps}
            title="System Benefits & Lab Infrastructure"
            subtitle="We provide the institutional tooling, equipment, computing clusters, and comprehensive security so you can focus completely on building state-of-the-art autonomy."
            autoPlayInterval={4000}
            className="p-0 w-full h-full flex flex-col justify-center"
          />
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
