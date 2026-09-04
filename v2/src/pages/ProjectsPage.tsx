import { motion } from "framer-motion";
import { 
  Leaf, ScanSearch, Navigation, Plane, Box, 
  ClipboardList, ShieldCheck, HeartPulse, 
  Settings, Factory, MonitorPlay, BarChart, 
  Ship, FileText 
} from "lucide-react";

import droneBg from "../assets/projects/drone_bg_1788369697669.jpg";
import healthBg from "../assets/projects/health_bg_1788369710610.jpg";
import mfgBg from "../assets/projects/mfg_bg_1788369729188.jpg";
import marineBg from "../assets/projects/marine_bg_1788369743426.jpg";
import digitalBg from "../assets/projects/digital_bg_1788369758908.jpg";

const projects = [
  {
    domain: "DRONE INTELLIGENCE",
    color: "from-blue-500/20",
    accent: "text-blue-400",
    bgImage: droneBg,
    desc: "Autonomous systems for intelligent aerial operations and actionable insights.",
    items: [
      { title: "Agri Crop Health Monitoring System", desc: "AI-powered aerial monitoring for crop health, disease detection, yield prediction, and precision agriculture.", icon: Leaf },
      { title: "Ship Inspection Intelligence", desc: "Autonomous aerial and onboard inspection solutions for ships using AI vision, anomaly detection, and digital reporting.", icon: ScanSearch },
      { title: "GPS Denied Navigation", desc: "Advanced navigation systems for UAVs with sensor fusion, SLAM, and AI for reliable operations in GPS denied environments.", icon: Navigation },
      { title: "Swarm AI Operations", desc: "Coordinated multi-drone operations for vast area surveillance and search & rescue missions.", icon: Plane }
    ]
  },
  {
    domain: "HEALTHCARE INTELLIGENCE",
    color: "from-purple-500/20",
    accent: "text-purple-400",
    bgImage: healthBg,
    desc: "Intelligent digital solutions to enhance healthcare delivery, operations, and compliance.",
    items: [
      { title: "Healthcare Supply Chain Management", desc: "AI-driven platform for demand forecasting, inventory optimization, supplier management, and logistics intelligence.", icon: Box },
      { title: "Digital Operations Platform", desc: "End-to-end digital platform for patient management, workflows, resource allocation, and operational efficiency.", icon: ClipboardList },
      { title: "Inspection & Compliance System", desc: "Digital solution for automated inspections, regulatory compliance, audit management, and risk assessment.", icon: ShieldCheck },
      { title: "AI Medical Diagnostics Assistant", desc: "Computer vision and NLP integration to assist in rapid radiological analysis and patient record summarization.", icon: HeartPulse }
    ]
  },
  {
    domain: "MANUFACTURING INTELLIGENCE",
    color: "from-cyan-500/20",
    accent: "text-cyan-400",
    bgImage: mfgBg,
    desc: "AI-powered solutions for smart manufacturing, quality, and operational excellence.",
    items: [
      { title: "AI Quality Inspection", desc: "Computer vision-based defect detection to reduce downtime, improve quality, and enhance machine performance.", icon: Settings },
      { title: "Predictive Maintenance AI", desc: "IoT sensor data analytics to predict machinery failure before it happens, optimizing maintenance schedules.", icon: Factory },
      { title: "Digital Twin Orchestration", desc: "Real-time virtual replicas of manufacturing lines to simulate efficiency improvements and workflow bottlenecks.", icon: MonitorPlay }
    ]
  },
  {
    domain: "MARITIME INTELLIGENCE",
    color: "from-blue-400/20",
    accent: "text-blue-300",
    bgImage: marineBg,
    desc: "Smart maritime solutions for safer operations and sustainable growth.",
    items: [
      { title: "Ship Analytics & Predictive Maintenance", desc: "Comprehensive platform for ship condition assessment, predictive maintenance, lifecycle management, and operational analytics.", icon: BarChart },
      { title: "Autonomous Naval Surveillance", desc: "AI-powered optical and sonar integration for threat detection and coastal perimeter security.", icon: Ship },
      { title: "Smart Port Logistics", desc: "Automated container tracking and crane optimization using computer vision for high-throughput port environments.", icon: Box }
    ]
  },
  {
    domain: "DIGITAL INTELLIGENCE",
    color: "from-indigo-500/20",
    accent: "text-indigo-400",
    bgImage: digitalBg,
    desc: "AI-driven platforms that transform data into intelligent decisions.",
    items: [
      { title: "AI Document & Report Intelligence", desc: "AI platform to extract, analyze, and summarize documents and reports, enabling intelligent search and automated reporting.", icon: FileText },
      { title: "Cyber Threat Hunting Platform", desc: "Real-time anomaly detection and AI behavioral analysis to preemptively secure network infrastructures.", icon: ShieldCheck },
      { title: "Enterprise Data Lake Analytics", desc: "Unifying structured and unstructured data streams for high-velocity predictive business intelligence.", icon: BarChart }
    ]
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-cyan-500/30">
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 text-center z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-black tracking-tighter mb-6"
        >
          OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">INNOVATIONS</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed"
        >
          Explore our suite of sovereign intelligence platforms engineered to redefine operations across defense, healthcare, manufacturing, and digital ecosystems.
        </motion.p>
      </section>

      {/* Domain Sections */}
      <div className="space-y-0">
        {projects.map((project, idx) => (
          <section key={project.domain} className="relative min-h-[90vh] flex items-center justify-center py-32 overflow-hidden group border-t border-white/5">
            
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0 transition-transform duration-[20s] ease-linear group-hover:scale-110">
              <img src={project.bgImage} alt={project.domain} className="w-full h-full object-cover" />
            </div>
            
            {/* Dark/Gradient Overlays */}
            <div className="absolute inset-0 z-0 bg-[#020617]/80" />
            <div className={`absolute inset-0 z-0 bg-gradient-to-t ${project.color} to-transparent opacity-50`} />
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />

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
                  <h2 className="text-4xl md:text-5xl xl:text-6xl font-black tracking-tight mb-6 drop-shadow-2xl leading-[1.1] break-words">
                    {project.domain.split(' ').map((word, i) => (
                      <span key={i} className={i === 1 ? project.accent : "text-white"}>{word} </span>
                    ))}
                  </h2>
                  <p className="text-xl text-slate-300 font-light leading-relaxed backdrop-blur-sm bg-black/20 p-6 rounded-2xl border border-white/10 shadow-2xl">
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
                      className="group/card relative rounded-[2rem] bg-white/5 border border-white/10 p-8 backdrop-blur-xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden"
                    >
                      {/* Top Inner Glow on Hover */}
                      <div className={`absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-${project.accent.split('-')[1]}-400 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500`} />
                      
                      <div className="relative z-10 flex flex-col h-full">
                        <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover/card:scale-110 group-hover/card:${project.accent} transition-all duration-500`}>
                          <item.icon className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 leading-snug">{item.title}</h3>
                        <p className="text-slate-400 font-light leading-relaxed mt-auto">{item.desc}</p>
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
