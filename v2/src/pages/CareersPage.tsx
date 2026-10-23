import React from "react";
import { motion } from "framer-motion";
import { 
  Briefcase, 
  ArrowRight,
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
  Users
} from "lucide-react";
import careersStudioHero from "../assets/careers_studio_hero.jpg";

export default function CareersPage() {
  const roles = [
    {
      title: "Autonomous Flight Systems Engineer",
      domain: "Aerial Robotics & Guidance",
      location: "Bengaluru, IN (Hybrid)",
      type: "Full-Time",
      description: "Architect and benchmark non-linear flight control loops, fail-safe RTL states, and GPS-denied state estimation using PX4, ROS2, and custom telemetry protocols in physical reality.",
      skills: ["PX4 Autopilot", "ROS2 / C++", "EKF2 State Estimation", "HIL Simulation"]
    },
    {
      title: "Edge AI & Computer Vision Lead",
      domain: "Embedded Perception",
      location: "Hyderabad, IN (Hybrid)",
      type: "Full-Time",
      description: "Deploy and optimize low-latency object detection, optical flow, and multi-sensor fusion pipelines on power-constrained edge silicon (NVIDIA Jetson, Hailo, custom FPGA accelerators).",
      skills: ["TensorRT", "CUDA / C++", "YOLO / Stereo SLAM", "Sub-10ms Inference"]
    },
    {
      title: "Mechatronics & Hardware Prototyping Lead",
      domain: "Physical Engineering",
      location: "Bengaluru, IN (Onsite Lab)",
      type: "Full-Time",
      description: "Lead end-to-end hardware development of carbon-fiber airframes, high-torque brushless drive powertrains, double-wishbone suspension rovers, and environmental FMEA hardening.",
      skills: ["SolidWorks / Fusion 360", "FEA Structural Analysis", "CNC / Carbon Prepreg", "CAN-FD Bus"]
    },
    {
      title: "Robotics Research Intern / Fellow",
      domain: "University Residency",
      location: "Bengaluru or Hyderabad",
      type: "3-6 Month Internship",
      description: "Hands-on engineering residency for ambitious university scholars and graduate students. Work directly on flight arena telemetry, motion capture validation, and autonomous testbeds.",
      skills: ["Python / C++", "ROS2 Basics", "Micro-controller Firmware", "Physical Hardware Curiosity"]
    }
  ];

  const cultureValues = [
    {
      num: "01",
      title: "Physical Reality Over Simulations",
      description: "We don't stop at digital twins. Our code flies in real wind, drives over unstructured terrain, and endures real-world physical stress."
    },
    {
      num: "02",
      title: "Extreme Engineering Ownership",
      description: "Engineers own their systems from schematic design to field validation. No bureaucratic layers or artificial barriers."
    },
    {
      num: "03",
      title: "Multidisciplinary Collaboration",
      description: "Firmware developers sit beside carbon-fiber fabricators, aerodynamicists, and perception researchers to co-solve physical bottlenecks."
    },
    {
      num: "04",
      title: "Continuous Learning & Sprints",
      description: "We provide dedicated research budgets, access to calibrated testbenches, and regular peer-led technical deep-dives."
    }
  ];

  const perks = [
    { icon: <Cpu className="w-5 h-5 text-amber-600" />, title: "Hardware Lab Access", description: "Unlimited access to optical mocap arenas, 3D printers, CNC mills, and dyno testbeds." },
    { icon: <Sparkles className="w-5 h-5 text-amber-600" />, title: "Competitive Equity & Pay", description: "Industry-leading compensation packages with meaningful equity in our long-term growth." },
    { icon: <Laptop className="w-5 h-5 text-amber-600" />, title: "Hybrid & Output-Focused", description: "We care about the quality and resilience of your engineering output, not arbitrary desk hours." },
    { icon: <GraduationCap className="w-5 h-5 text-amber-600" />, title: "Learning & Conference Grant", description: "Generous annual stipend for technical textbooks, certifications, and international conferences." },
    { icon: <Heart className="w-5 h-5 text-amber-600" />, title: "Comprehensive Health", description: "Full healthcare coverage for you and your dependents, with wellness and mental support." },
    { icon: <Users className="w-5 h-5 text-amber-600" />, title: "Field Expeditions", description: "Regular hands-on field testing retreats in mountainous, coastal, and agricultural testing terrains." }
  ];

  return (
    <div className="min-h-screen bg-[#02040a] text-white selection:bg-amber-400/20">
      
      {/* ========================================================================= */}
      {/* 1. CINEMATIC SOLUTIONS-STYLE CAREERS HERO SECTION                         */}
      {/* ========================================================================= */}
      <section className="relative pt-24 sm:pt-28 pb-8 sm:pb-12 px-3 sm:px-6 lg:px-8 max-w-[1780px] mx-auto w-full">
        
        {/* Main Hero Framing Card (Matches Solutions Prisma Design) */}
        <div className="relative w-full h-[88vh] min-h-[660px] max-h-[960px] rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] overflow-hidden border border-white/10 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.85)] group select-none">
          
          {/* Background Image: Twilight High-Tech Headquarters Studio Over Dawn Skyline */}
          <div className="absolute inset-0 z-0">
            <img 
              src={careersStudioHero} 
              alt="Novaliseo Autonomous Systems Engineering Headquarters" 
              className="w-full h-full object-cover object-center transition-transform duration-[16s] ease-out group-hover:scale-105" 
            />

            {/* Cinematic Gradient Overlays for Depth and Contrast (Identical to Solutions) */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/85" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />
            <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-[#02040a] via-[#02040a]/70 to-transparent" />
          </div>

          {/* Top Info Bar inside the Frame */}
          <div className="absolute top-6 sm:top-10 inset-x-6 sm:inset-x-12 z-20 flex items-center justify-between text-xs sm:text-sm font-mono text-[#E5E2D9] pointer-events-none">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>ACTIVE HIRING CYCLE // 2026-2027</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>BENGALURU • HYDERABAD • HYBRID</span>
            </div>
          </div>

          {/* ================= BOTTOM CONTENT ROW (PRISMA / SOLUTIONS STYLE) ================= */}
          <div className="absolute inset-x-0 bottom-0 z-20 p-6 sm:p-10 lg:p-14 xl:p-16 flex flex-col lg:flex-row lg:items-end justify-between gap-8 sm:gap-10">
            
            {/* Left: Giant Iconic Wordmark ("Careers*") */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-baseline"
            >
              <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[130px] xl:text-[155px] 2xl:text-[180px] font-semibold tracking-[-0.035em] text-[#F3F2EB] leading-[0.88] drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)]">
                Careers
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
                An engineering home for those who build in physical reality. We are assembling an elite team across autonomous robotics, edge perception, mission control firmware, and sovereign AI.
              </p>

              <a
                href="#openings"
                className="group/btn inline-flex items-center gap-3 sm:gap-4 bg-black/85 hover:bg-black text-[#F3F2EB] text-sm sm:text-base font-medium px-6 sm:px-7 py-3 sm:py-3.5 rounded-full border border-white/25 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition-all duration-300 hover:scale-105 hover:border-white/40 active:scale-95 cursor-pointer"
              >
                <span>Explore open roles</span>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/15 flex items-center justify-center transition-all duration-300 group-hover/btn:bg-white group-hover/btn:text-black group-hover/btn:translate-x-1">
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </a>
            </motion.div>

          </div>

          {/* Bottom Edge Cinematic Glow Accent */}
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent pointer-events-none" />

        </div>

      </section>

      {/* ========================================================================= */}
      {/* 2. OPEN ROLES & INTERNSHIPS (TACTILE LIGHT CARDS IN DARK CANVAS)          */}
      {/* ========================================================================= */}
      <section id="openings" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-[1780px] mx-auto w-full">
        
        {/* Section Header */}
        <div className="text-left mb-12 sm:mb-16 max-w-3xl">
          <span className="text-xs sm:text-sm font-mono font-semibold tracking-wider text-amber-500 uppercase">
            Active Engineering Opportunities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F3F2EB] mt-2">
            Open Positions &amp; Residencies
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            We hire individuals with proven technical curiosity, mathematical depth, and a passion for building real physical systems that operate outdoors.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {roles.map((role, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-[32px] sm:rounded-[36px] bg-gradient-to-b from-[#f8f9fa] via-[#eff2f6] to-[#e0e4eb] text-slate-900 border border-white/80 p-7 sm:p-9 shadow-xl flex flex-col justify-between text-left hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                {/* Meta Badge Row */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-slate-900/10 text-slate-800 text-xs font-mono font-semibold">
                    {role.domain}
                  </span>
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-500">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {role.location}
                    </span>
                    <span>•</span>
                    <span className="font-semibold text-amber-700">{role.type}</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mb-3 tracking-tight">
                  {role.title}
                </h3>
                
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {role.description}
                </p>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {role.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-2.5 py-1 rounded-lg bg-white/80 border border-slate-300/80 text-slate-700 text-xs font-mono font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Row */}
              <div className="pt-4 border-t border-slate-300/60 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono">Direct Technical Review</span>
                <a
                  href={`mailto:info@novaliseo.com?subject=Application:%20${encodeURIComponent(role.title)}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-950 hover:bg-black text-white text-xs sm:text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-md"
                >
                  <span>Apply for Role</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* General Application Callout */}
        <div className="mt-12 rounded-[32px] bg-white/[0.04] border border-white/10 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#F3F2EB]">Don't see your exact role listed?</h3>
            <p className="mt-1.5 text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl">
              We frequently create bespoke positions for exceptional contributors across robotics, aerodynamic design, and hardware security. Send us your GitHub, portfolio, or past projects.
            </p>
          </div>
          <a
            href="mailto:info@novaliseo.com?subject=Open%20Application%20-%20Novaliseo%20Engineering"
            className="shrink-0 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-[#F3F2EB] text-sm font-medium transition-all hover:scale-105"
          >
            Submit Open Application
          </a>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* 3. CULTURE ARCHITECTURE & VALUES                                          */}
      {/* ========================================================================= */}
      <section id="culture" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-[1780px] mx-auto w-full border-t border-white/10">
        
        <div className="text-left mb-12 sm:mb-16 max-w-3xl">
          <span className="text-xs sm:text-sm font-mono font-semibold tracking-wider text-amber-500 uppercase">
            Engineering Principles
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F3F2EB] mt-2">
            Our Culture Architecture
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            A framework engineered for high autonomy, zero bureaucracy, and rapid technical deployment.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cultureValues.map((val, idx) => (
            <div 
              key={idx}
              className="p-7 rounded-[28px] bg-white/[0.03] border border-white/10 hover:border-amber-400/30 transition-all duration-300 text-left flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl sm:text-3xl font-mono font-bold text-amber-400/80 mb-4 block">
                  {val.num}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#F3F2EB] mb-2.5">
                  {val.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {val.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* System Benefits & Infrastructure */}
        <div className="mt-16 rounded-[36px] bg-gradient-to-b from-[#f8f9fa] via-[#eff2f6] to-[#e0e4eb] text-slate-900 border border-white/80 p-8 sm:p-12 lg:p-14 text-left shadow-2xl">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono font-semibold tracking-wider text-amber-700 uppercase">
              Total Support
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 mt-1">
              System Benefits &amp; Resources
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
              We provide the institutional infrastructure, high-performance tooling, and financial security to ensure you can do the most meaningful work of your career.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {perks.map((p, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-300 flex items-center justify-center shrink-0 shadow-xs">
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

      <div className="h-24" />
    </div>
  );
}
