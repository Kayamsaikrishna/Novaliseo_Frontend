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
import careersDaylightStudio from "../assets/careers_daylight_studio.jpg";

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
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [applyingRole, setApplyingRole] = useState<JobRole | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [candidateData, setCandidateData] = useState({
    name: "",
    email: "",
    portfolio: "",
    builtNote: ""
  });

  const categories = [
    { id: "all", label: "All Openings", count: 4 },
    { id: "flight", label: "Flight Autonomy", count: 1 },
    { id: "ai", label: "Edge AI & Vision", count: 1 },
    { id: "hardware", label: "Mechatronics & Lab", count: 1 },
    { id: "research", label: "Fellowships & Interns", count: 1 },
  ];

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
      location: "Hyderabad, IN",
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
      skills: ["SolidWorks / Fusion 360", "FEA Structural Analysis", "CNC / Carbon Prepreg", "Brushless Dyno Profiling", "FMEA Hardening"]
    },
    {
      id: "research-intern",
      title: "Robotics Research Intern / Fellow",
      category: "research",
      domain: "University Residency & R&D",
      location: "Bengaluru or Hyderabad",
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

  const filteredRoles = selectedCategory === "all" 
    ? roles 
    : roles.filter(r => r.category === selectedCategory);

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
    const el = document.getElementById("open-roles-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] text-slate-900 relative selection:bg-blue-500/20 overflow-x-hidden">
      
      {/* ========================================================================= */}
      {/* 1. FRESH, ARCHITECTURAL DAYLIGHT HERO SECTION                             */}
      {/* ========================================================================= */}
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl 2xl:max-w-[1550px] mx-auto w-full">
        
        {/* Subtle Ambient Background Accents */}
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-200/40 via-cyan-100/40 to-teal-100/40 blur-3xl pointer-events-none -z-10 rounded-full" />

        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono font-semibold tracking-wider text-slate-700 uppercase">
              Engineering Careers at Novaliseo • We're Hiring
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-950 tracking-tight leading-[1.08] mb-6">
            Architect the Systems That Operate in{" "}
            <span className="bg-gradient-to-r from-blue-700 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
              Physical Reality.
            </span>
          </h1>

          {/* Subtitle / Narrative */}
          <p className="text-base sm:text-lg md:text-xl text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-10">
            Join an engineering collective developing autonomous flight vehicles, power-efficient edge perception, and sovereign intelligence systems. We build hardware that thrives outside clean rooms.
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={scrollToRoles}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-medium text-sm sm:text-base shadow-lg shadow-slate-950/15 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <span>Explore Open Positions ({roles.length})</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#culture"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-medium text-sm sm:text-base border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all duration-200"
            >
              <span>Our Culture &amp; Lab Principles</span>
              <ArrowUpRight className="w-4 h-4 text-slate-500" />
            </a>
          </div>

          {/* Hiring Highlights Bar */}
          <div className="mt-12 pt-8 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
            <div className="p-3">
              <div className="text-2xl sm:text-3xl font-black text-slate-950">4 Roles</div>
              <div className="text-xs text-slate-500 font-mono mt-0.5">Active Hiring Cycle</div>
            </div>
            <div className="p-3">
              <div className="text-2xl sm:text-3xl font-black text-slate-950">2 Labs</div>
              <div className="text-xs text-slate-500 font-mono mt-0.5">Bengaluru &amp; Hyderabad</div>
            </div>
            <div className="p-3">
              <div className="text-2xl sm:text-3xl font-black text-slate-950">100%</div>
              <div className="text-xs text-slate-500 font-mono mt-0.5">Direct Engineer Review</div>
            </div>
            <div className="p-3">
              <div className="text-2xl sm:text-3xl font-black text-slate-950">Equity</div>
              <div className="text-xs text-slate-500 font-mono mt-0.5">Long-Term Value Grants</div>
            </div>
          </div>

        </div>

        {/* Hero Visual Display: Sunlit Autonomous Robotics Studio */}
        <div className="relative w-full rounded-[2.5rem] overflow-hidden border border-slate-200/90 shadow-2xl bg-white group">
          <div className="relative aspect-[16/9] max-h-[640px] w-full overflow-hidden">
            <img 
              src={careersDaylightStudio} 
              alt="Novaliseo Autonomous Systems Hardware Studio" 
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
            />
            
            {/* Subtle Gradient Veil for Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent pointer-events-none" />

            {/* Bottom Overlay Inside Studio Display */}
            <div className="absolute bottom-6 sm:bottom-8 inset-x-6 sm:inset-x-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white z-10">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-mono text-white mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Novaliseo Autonomous Systems Laboratory</span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white drop-shadow-md">
                  Where Physical Hardware Meets Edge Intelligence.
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 max-w-xl mt-1 drop-shadow-sm">
                  Optical motion-capture testbenches, dynamometer propulsion profiling, and sub-10ms neural inferencing on production carbon airframes.
                </p>
              </div>

              <div className="hidden md:flex items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-xl bg-black/40 backdrop-blur-md border border-white/20 text-xs font-mono text-slate-200">
                  Lab 01: Hardware Arena
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-black/40 backdrop-blur-md border border-white/20 text-xs font-mono text-slate-200">
                  Lab 02: Perception R&amp;D
                </span>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* 2. OPEN ENGINEERING ROLES BOARD (INTERACTIVE CATEGORY FILTERING)          */}
      {/* ========================================================================= */}
      <section id="open-roles-section" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl 2xl:max-w-[1550px] mx-auto w-full">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12 text-left">
          <div className="max-w-2xl">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-wider text-blue-600 uppercase">
              Available Engineering Positions
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight mt-1">
              Build With Us.
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
              We look for individuals with rigorous first-principles reasoning, high autonomy, and a genuine passion for physical mechanics and low-level code.
            </p>
          </div>

          {/* Live Count Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-xs sm:text-sm font-mono font-medium text-slate-700 self-start md:self-auto shadow-xs">
            <Briefcase className="w-4 h-4 text-blue-600" />
            <span>Showing {filteredRoles.length} of {roles.length} roles</span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-slate-200">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-slate-950 text-white shadow-md shadow-slate-950/10 scale-102"
                  : "bg-white text-slate-600 hover:text-slate-950 hover:bg-slate-100 border border-slate-200/80"
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[11px] px-1.5 py-0.2 rounded-full font-mono ${
                selectedCategory === cat.id ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Roles List */}
        <div className="space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredRoles.map((role) => (
              <motion.div
                key={role.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-[2rem] bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 p-6 sm:p-8 text-left"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                  
                  {/* Left Column: Role Details */}
                  <div className="flex-1">
                    
                    {/* Badges Row */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-semibold">
                        {role.domain}
                      </span>
                      <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {role.location}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-mono font-medium">
                        {role.workMode}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200 text-xs font-mono font-medium">
                        {role.experience}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight group-hover:text-blue-700 transition-colors duration-200">
                      {role.title}
                    </h3>

                    {/* Summary */}
                    <p className="mt-2 text-slate-600 text-sm leading-relaxed max-w-3xl">
                      {role.summary}
                    </p>

                    {/* What You'll Build */}
                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <div className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider mb-2">
                        Key Responsibilities &amp; Impact:
                      </div>
                      <ul className="space-y-1.5">
                        {role.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                            <span className="text-blue-500 font-bold shrink-0 mt-0.5">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills Chips */}
                    <div className="flex flex-wrap gap-1.5 mt-5">
                      {role.skills.map((skill, sIdx) => (
                        <span 
                          key={sIdx}
                          className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 text-xs font-mono font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                  </div>

                  {/* Right Column: Compensation & Apply CTA */}
                  <div className="lg:w-64 shrink-0 flex flex-col justify-between items-start lg:items-end pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                    <div className="lg:text-right mb-4">
                      <div className="text-[11px] font-mono text-slate-500 uppercase">Package &amp; Terms</div>
                      <div className="text-xs sm:text-sm font-semibold text-slate-900 mt-0.5">
                        {role.compensation}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-1">
                        {role.type}
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setApplyingRole(role);
                        setFormSubmitted(false);
                      }}
                      className="w-full sm:w-auto px-6 py-3 rounded-full bg-slate-950 hover:bg-blue-600 text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                    >
                      <span>Apply for Position</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Open Application Card */}
        <div className="mt-12 rounded-[2.2rem] bg-white border border-slate-200 p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold text-amber-600 uppercase tracking-wider">
              General Intake
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mt-1">
              Don't see your exact role listed?
            </h3>
            <p className="mt-2 text-slate-600 text-xs sm:text-sm leading-relaxed">
              We frequently open bespoke positions for exceptional contributors across robotics, aerodynamics, embedded security, and deep learning. If you have built something notable, we want to hear from you.
            </p>
          </div>

          <a
            href="mailto:info@novaliseo.com?subject=Open%20Engineering%20Application%20-%20Novaliseo"
            className="shrink-0 px-6 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold text-xs sm:text-sm border border-slate-300 transition-all hover:scale-105 active:scale-95"
          >
            Submit General Portfolio
          </a>
        </div>

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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-xl rounded-[2.5rem] bg-white border border-slate-200 shadow-2xl p-6 sm:p-8 text-left overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setApplyingRole(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-all cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              {!formSubmitted ? (
                <>
                  <div className="pr-10 mb-6">
                    <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-semibold">
                      {applyingRole.domain}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mt-2 tracking-tight">
                      Apply: {applyingRole.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      {applyingRole.location} • {applyingRole.type}
                    </p>
                  </div>

                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-mono font-semibold text-slate-700 uppercase mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={candidateData.name}
                        onChange={(e) => setCandidateData({ ...candidateData, name: e.target.value })}
                        placeholder="e.g., Arjun Rao"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-semibold text-slate-700 uppercase mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={candidateData.email}
                        onChange={(e) => setCandidateData({ ...candidateData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-semibold text-slate-700 uppercase mb-1">
                        GitHub / Portfolio / CAD Link *
                      </label>
                      <input
                        type="url"
                        required
                        value={candidateData.portfolio}
                        onChange={(e) => setCandidateData({ ...candidateData, portfolio: e.target.value })}
                        placeholder="https://github.com/your-username or portfolio URL"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-semibold text-slate-700 uppercase mb-1">
                        What is something remarkable you have built physically?
                      </label>
                      <textarea
                        rows={3}
                        value={candidateData.builtNote}
                        onChange={(e) => setCandidateData({ ...candidateData, builtNote: e.target.value })}
                        placeholder="Briefly describe a hardware or autonomy challenge you solved hands-on..."
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                      />
                    </div>

                    <div className="pt-2 flex items-center justify-between gap-4">
                      <a
                        href={`mailto:info@novaliseo.com?subject=Application:%20${encodeURIComponent(applyingRole.title)}`}
                        className="text-xs text-blue-600 hover:underline font-mono"
                      >
                        Prefer standard email? Click here
                      </a>

                      <button
                        type="submit"
                        className="px-6 py-2.5 rounded-full bg-slate-950 hover:bg-blue-600 text-white font-semibold text-sm transition-all hover:scale-105 active:scale-95 shadow-md cursor-pointer"
                      >
                        Submit Application
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="py-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-950">Application Received!</h3>
                  <p className="text-slate-600 text-sm mt-2 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-slate-900">{candidateData.name}</span>. Our engineering team reviews all applications directly. We will examine your portfolio and get back to you within 3 business days.
                  </p>
                  <button
                    onClick={() => setApplyingRole(null)}
                    className="mt-6 px-6 py-2.5 rounded-full bg-slate-950 text-white text-sm font-semibold hover:bg-slate-800 transition-all cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="h-16" />
    </div>
  );
}
