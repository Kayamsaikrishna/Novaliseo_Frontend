import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  { id: "all", label: "All Systems", targetId: "drone-intelligence" },
  { id: "drone", label: "Drone Swarms", targetId: "drone-intelligence" },
  { id: "healthcare", label: "Healthcare AI", targetId: "healthcare-intelligence" },
  { id: "mfg", label: "Industrial IoT", targetId: "manufacturing-intelligence" },
  { id: "marine", label: "Maritime & Naval", targetId: "maritime-intelligence" },
  { id: "digital", label: "Digital Core", targetId: "digital-intelligence" },
];

const projects = [
  {
    id: "drone-intelligence",
    domain: "DRONE INTELLIGENCE",
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

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const scrollToSection = (targetId: string) => {
    const el = document.getElementById(targetId);
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
                      scrollToSection(cat.targetId);
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
                onClick={() => scrollToSection("drone-intelligence")}
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
      {/* 2. REFINED SOLUTIONS DOMAIN SECTIONS                                       */}
      {/* ========================================================================= */}
      <div className="space-y-0 relative z-10">
        {projects.map((project, idx) => (
          <section 
            id={project.id} 
            key={project.domain} 
            className="relative min-h-[90vh] flex items-center justify-center py-24 sm:py-32 overflow-hidden group border-t border-white/5"
          >
            
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0 transition-transform duration-[20s] ease-linear group-hover:scale-110">
              <img src={project.bgImage} alt={project.domain} className="w-full h-full object-cover" />
            </div>
            
            {/* Dark/Gradient Overlays */}
            <div className="absolute inset-0 z-0 bg-[#02040a]/85" />
            <div className={`absolute inset-0 z-0 bg-gradient-to-t ${project.color} to-transparent opacity-50`} />
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#02040a] via-transparent to-[#02040a]" />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid xl:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Domain Info */}
              <div className="xl:col-span-5 space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                >
                  <div className={`w-20 h-2 mb-8 bg-gradient-to-r ${project.color.replace('/20', '')} to-transparent rounded-full`} />
                  <h2 className="text-4xl md:text-5xl xl:text-5xl font-black tracking-tight mb-6 drop-shadow-2xl leading-[1.1]">
                    {project.domain.split(' ').map((word, i) => (
                      <span key={i} className={i === 1 ? project.accent : "text-white"}>{word} </span>
                    ))}
                  </h2>
                  <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed backdrop-blur-md bg-black/40 p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl">
                    {project.desc}
                  </p>
                </motion.div>
              </div>

              {/* Right Column: Bento Grid of Items */}
              <div className="xl:col-span-7">
                <div className="grid md:grid-cols-2 gap-6">
                  {project.items.map((item, itemIdx) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, delay: itemIdx * 0.15 }}
                      className="group/card relative rounded-[2rem] bg-white/5 border border-white/10 p-7 sm:p-8 backdrop-blur-xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden"
                    >
                      {/* Top Inner Glow on Hover */}
                      <div className={`absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-${project.accent.split('-')[1]}-400 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500`} />
                      
                      <div className="relative z-10 flex flex-col h-full">
                        <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover/card:scale-110 group-hover/card:${project.accent} transition-all duration-500`}>
                          <item.icon className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">{item.title}</h3>
                        <p className="text-slate-400 font-light leading-relaxed text-sm sm:text-base mt-auto">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </section>
        ))}
      </div>
      
    </div>
  );
}

