import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  Plane, 
  HeartPulse, 
  Factory, 
  Ship, 
  MonitorPlay,
  Leaf,
  ScanSearch,
  Navigation,
  Box,
  ClipboardList,
  ShieldCheck,
  Settings,
  BarChart,
  FileText
} from "lucide-react";
import { MeshGradient } from "@paper-design/shaders-react";
import { useState, useEffect } from "react";

const projects = [
  {
    domain: "DRONE INTELLIGENCE",
    color: "from-blue-500/20",
    icon: Plane,
    desc: "Autonomous systems for intelligent aerial operations and actionable insights.",
    items: [
      {
        title: "Agri Crop Health Monitoring System",
        desc: "AI-powered aerial monitoring for crop health, disease detection, yield prediction, and precision agriculture.",
        icon: Leaf
      },
      {
        title: "Ship Inspection Intelligence",
        desc: "Autonomous aerial and onboard inspection solutions for ships using AI vision, anomaly detection, and digital reporting.",
        icon: ScanSearch
      },
      {
        title: "GPS Denied Navigation",
        desc: "Advanced navigation systems for UAVs with sensor fusion, SLAM, and AI for reliable operations in GPS denied environments.",
        icon: Navigation
      }
    ]
  },
  {
    domain: "HEALTHCARE INTELLIGENCE",
    color: "from-purple-500/20",
    icon: HeartPulse,
    desc: "Intelligent digital solutions to enhance healthcare delivery, operations, and compliance.",
    items: [
      {
        title: "Healthcare Supply Chain Management Platform",
        desc: "AI-driven platform for demand forecasting, inventory optimization, supplier management, and logistics intelligence.",
        icon: Box
      },
      {
        title: "Healthcare Management & Digital Operations Platform",
        desc: "End-to-end digital platform for patient management, workflows, resource allocation, and operational efficiency.",
        icon: ClipboardList
      },
      {
        title: "Inspection & Compliance Management Platform",
        desc: "Digital solution for automated inspections, regulatory compliance, audit management, and risk assessment.",
        icon: ShieldCheck
      }
    ]
  },
  {
    domain: "MANUFACTURING INTELLIGENCE",
    color: "from-cyan-500/20",
    icon: Factory,
    desc: "AI-powered solutions for smart manufacturing, quality, and operational excellence.",
    items: [
      {
        title: "AI Quality Inspection and Predictive Maintenance for Machines",
        desc: "Computer vision-based defect detection and AI-driven predictive maintenance to reduce downtime, improve quality, and enhance machine performance.",
        icon: Settings
      }
    ]
  },
  {
    domain: "MARITIME INTELLIGENCE",
    color: "from-blue-400/20",
    icon: Ship,
    desc: "Smart maritime solutions for safer operations and sustainable growth.",
    items: [
      {
        title: "Ship Analytics Platform for Inspection and Predictive Maintenance Intelligence",
        desc: "Comprehensive platform for ship condition assessment, predictive maintenance, lifecycle management, and operational analytics.",
        icon: BarChart
      }
    ]
  },
  {
    domain: "DIGITAL INTELLIGENCE",
    color: "from-indigo-500/20",
    icon: MonitorPlay,
    desc: "AI-driven platforms that transform data into intelligent decisions.",
    items: [
      {
        title: "AI-Powered Document & Report Intelligence Platform",
        desc: "AI platform to extract, analyze, and summarize documents and reports, enabling intelligent search, insights, and automated reporting.",
        icon: FileText
      }
    ]
  }
];

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position} -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position} ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position} ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg className="w-full h-full text-white" viewBox="0 0 696 316" fill="none">
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.03 + path.id * 0.008}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{ pathLength: 1, opacity: [0.3, 0.6, 0.3], pathOffset: [0, 1, 0] }}
            transition={{ duration: 20 + Math.random() * 10, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </svg>
    </div>
  )
}

function ProjectSection({ project, index }: { project: typeof projects[0], index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="flex flex-col lg:flex-row gap-12 items-start relative mb-40"
    >
      {/* Sticky Domain Sidebar */}
      <div className={`w-full lg:w-1/3 lg:sticky top-32 p-10 rounded-[3rem] bg-gradient-to-br ${project.color} to-transparent border border-white/10 shadow-2xl backdrop-blur-md`}>
        <div className="p-4 bg-white/5 rounded-2xl w-max mb-8 border border-white/10">
          <project.icon className="w-12 h-12 text-white" />
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4">{project.domain}</h2>
        <p className="text-slate-300 font-light text-lg leading-relaxed">{project.desc}</p>
      </div>

      {/* Project Cards List */}
      <div className="w-full lg:w-2/3 space-y-6">
        {project.items.map((item, itemIdx) => (
          <div 
            key={itemIdx} 
            className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group relative overflow-hidden backdrop-blur-sm"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500 pointer-events-none">
              <item.icon className="w-32 h-32 text-cyan-400" />
            </div>
            
            <div className="flex gap-6 items-start relative z-10">
              <div className="p-4 rounded-[1.5rem] bg-black/40 border border-white/5 shrink-0 shadow-inner group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 transition-all duration-300">
                <item.icon className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">{item.title}</h4>
                <p className="text-slate-400 font-light text-base md:text-lg leading-relaxed mb-6">{item.desc}</p>
                <button className="flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors group/btn">
                  View More Details
                  <span className="transform group-hover/btn:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const containerRef = useRef(null);
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  useEffect(() => { setMounted(true) }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-[#020617] pt-32 pb-24 text-white relative selection:bg-cyan-500/30">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {mounted && (
          <>
            <MeshGradient
              className="absolute inset-0 w-full h-full"
              colors={["#020617", "#06b6d4", "#0891b2", "#164e63", "#030712"]}
              speed={0.3}
              backgroundColor="#020617"
            />
            <MeshGradient
              className="absolute inset-0 w-full h-full opacity-40"
              colors={["#020617", "#ffffff", "#06b6d4", "#0e4a5c"]}
              speed={0.2}
              wireframe={true}
              backgroundColor="transparent"
            />
            <div className="absolute inset-0 pointer-events-none bg-black/40 backdrop-blur-[2px]" />
          </>
        )}
      </div>

      {/* Floating SVG Paths overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-50">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-32 space-y-6"
        >
          <div className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-cyan-500/10 border border-cyan-500/20">
             <span className="text-cyan-400 text-sm font-bold tracking-widest uppercase px-4">Innovating. Integrating. Transforming.</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter">
            OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">PROJECTS</span>
          </h1>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg md:text-xl font-light leading-relaxed pt-6">
            Novaliseo is building next-generation intelligent solutions across five strategic domains. Our ongoing projects are designed to solve real-world challenges with AI, advanced engineering, and data-driven intelligence.
          </p>
        </motion.div>

        {/* Projects List using Sticky Sidebar Layout */}
        <div>
          {projects.map((project, idx) => (
            <ProjectSection key={idx} project={project} index={idx} />
          ))}
        </div>

      </div>
    </div>
  );
}
