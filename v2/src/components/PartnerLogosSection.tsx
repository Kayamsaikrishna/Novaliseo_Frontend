import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  ShieldCheck, 
  Cpu, 
  Compass, 
  Radio, 
  Layers, 
  Globe, 
  Atom, 
  Lock, 
  Building2,
  Sparkles
} from "lucide-react";

interface PartnerPlaceholder {
  id: string;
  name: string;
  category: string;
  status: string;
  icon: React.ElementType;
}

const PARTNER_ROW_1: PartnerPlaceholder[] = [
  {
    id: "aero-defense",
    name: "Aeronautics & Defense Directorate",
    category: "Autonomous Flight",
    status: "DISCLOSURE PENDING",
    icon: Compass,
  },
  {
    id: "ai-cluster",
    name: "Deep-Tech AI Research Institute",
    category: "Compute & Rentals",
    status: "ONBOARDING",
    icon: Cpu,
  },
  {
    id: "sovereign-ip",
    name: "Sovereign Industrial Systems",
    category: "Air-Gapped Silicon",
    status: "IN CLEARANCE",
    icon: Lock,
  },
  {
    id: "maritime-fleet",
    name: "Oceanic Autonomous Navigation Lab",
    category: "Fleet Logistics",
    status: "DISCLOSURE PENDING",
    icon: Globe,
  },
  {
    id: "quantum-cfd",
    name: "Computational Physics Consortia",
    category: "HPC Simulation",
    status: "ONBOARDING",
    icon: Atom,
  },
  {
    id: "swarm-directorate",
    name: "Multi-Agent Robotics Directorate",
    category: "Swarm Odometry",
    status: "IN CLEARANCE",
    icon: Radio,
  },
];

const PARTNER_ROW_2: PartnerPlaceholder[] = [
  {
    id: "embedded-foundry",
    name: "Hardened Silicon Foundry Partner",
    category: "Custom Silicon",
    status: "ONBOARDING",
    icon: Layers,
  },
  {
    id: "defense-systems",
    name: "Strategic Defense & Avionics Unit",
    category: "GPS-Denied Navigation",
    status: "DISCLOSURE PENDING",
    icon: ShieldCheck,
  },
  {
    id: "university-lab",
    name: "Autonomous Systems Center of Excellence",
    category: "Academic Partner",
    status: "ANNOUNCING SOON",
    icon: Building2,
  },
  {
    id: "edge-compute",
    name: "Sovereign Edge Computing Alliance",
    category: "Cluster Nodes",
    status: "IN CLEARANCE",
    icon: Cpu,
  },
  {
    id: "field-tactical",
    name: "Tactical Sensor Fusion Consortia",
    category: "Thermal & Avionics",
    status: "DISCLOSURE PENDING",
    icon: Sparkles,
  },
  {
    id: "marine-corridors",
    name: "Deep-Sea Telemetry Research Group",
    category: "Oceanic Systems",
    status: "ONBOARDING",
    icon: Compass,
  },
];

export default function PartnerLogosSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white text-[#0f172a] py-14 sm:py-20 lg:py-24 px-4 sm:px-8 select-none border-b border-slate-100">
      
      {/* Background Ambience: Subtle technical coordinate dots */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `radial-gradient(rgba(148, 163, 184, 0.25) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 95%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 95%)",
        }}
      />
      
      {/* Soft Ambient Radial Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-sky-100/35 rounded-full blur-[140px] pointer-events-none -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto w-full text-center">
        
        {/* ================= COMPACT HEADER & DISCLOSURE STATUS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-10 sm:mb-14 px-4"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200/90 shadow-xs mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
            <span className="text-[10px] sm:text-[11px] font-mono tracking-wider uppercase text-slate-700 font-semibold">
              PARTNERSHIP ECOSYSTEM · OFFICIAL ANNOUNCEMENTS SOON
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight text-[#0f172a] mb-2.5">
            Institutional Alliances & Enterprise Collaborations
          </h2>

          <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed max-w-xl mx-auto">
            Formal institutional logos and joint program debriefs will soon be officially updated here as active research deployments achieve public clearance.
          </p>
        </motion.div>

        {/* ================= INFINITE MARQUEE STRIP (ROW 1: DRIFT LEFT) ================= */}
        <div className="relative w-full overflow-hidden mb-4 sm:mb-6">
          {/* Left & Right Gradient Fade Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          <motion.div 
            className="flex items-center gap-4 sm:gap-6 w-max"
            animate={{ x: [0, -1800] }}
            transition={{
              repeat: Infinity,
              duration: 40,
              ease: "linear",
            }}
          >
            {/* Duplicate array for seamless endless looping */}
            {[...PARTNER_ROW_1, ...PARTNER_ROW_1, ...PARTNER_ROW_1].map((partner, index) => {
              const IconComp = partner.icon;
              return (
                <div
                  key={`${partner.id}-${index}`}
                  className="group relative flex items-center gap-3.5 px-5 py-3.5 rounded-2xl bg-slate-50/70 hover:bg-white border border-slate-200/70 hover:border-sky-300 transition-all duration-300 shadow-xs hover:shadow-[0_8px_24px_-8px_rgba(14,165,233,0.18)] cursor-default whitespace-nowrap min-w-[280px]"
                >
                  {/* Stylized Emblem Icon */}
                  <div className="w-9 h-9 rounded-xl bg-white border border-slate-200/80 group-hover:border-sky-300 flex items-center justify-center text-slate-700 group-hover:text-sky-600 transition-colors shadow-xs">
                    <IconComp className="w-4 h-4" />
                  </div>

                  {/* Partner Text & Status */}
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-semibold text-slate-800 group-hover:text-slate-950 transition-colors tracking-tight">
                      {partner.name}
                    </span>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[10px] text-slate-500 font-normal">
                        {partner.category}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-slate-300" />
                      <span className="text-[9px] font-mono tracking-wider font-semibold text-sky-600">
                        {partner.status}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* ================= INFINITE MARQUEE STRIP (ROW 2: DRIFT RIGHT) ================= */}
        <div className="relative w-full overflow-hidden mb-10 sm:mb-12">
          {/* Left & Right Gradient Fade Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          <motion.div 
            className="flex items-center gap-4 sm:gap-6 w-max"
            animate={{ x: [-1800, 0] }}
            transition={{
              repeat: Infinity,
              duration: 44,
              ease: "linear",
            }}
          >
            {/* Duplicate array for seamless endless looping */}
            {[...PARTNER_ROW_2, ...PARTNER_ROW_2, ...PARTNER_ROW_2].map((partner, index) => {
              const IconComp = partner.icon;
              return (
                <div
                  key={`${partner.id}-${index}`}
                  className="group relative flex items-center gap-3.5 px-5 py-3.5 rounded-2xl bg-slate-50/70 hover:bg-white border border-slate-200/70 hover:border-sky-300 transition-all duration-300 shadow-xs hover:shadow-[0_8px_24px_-8px_rgba(14,165,233,0.18)] cursor-default whitespace-nowrap min-w-[280px]"
                >
                  {/* Stylized Emblem Icon */}
                  <div className="w-9 h-9 rounded-xl bg-white border border-slate-200/80 group-hover:border-sky-300 flex items-center justify-center text-slate-700 group-hover:text-sky-600 transition-colors shadow-xs">
                    <IconComp className="w-4 h-4" />
                  </div>

                  {/* Partner Text & Status */}
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-semibold text-slate-800 group-hover:text-slate-950 transition-colors tracking-tight">
                      {partner.name}
                    </span>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[10px] text-slate-500 font-normal">
                        {partner.category}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-slate-300" />
                      <span className="text-[9px] font-mono tracking-wider font-semibold text-sky-600">
                        {partner.status}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* ================= BOTTOM ENGAGEMENT CTA ================= */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs text-slate-500 font-normal">
          <span>Inquiring for collaborative deployments or sovereign compute access?</span>
          <Link
            to="/partner"
            className="inline-flex items-center gap-1.5 font-semibold text-slate-900 hover:text-sky-600 transition-colors group"
          >
            <span>Partner with Novaliseo</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>

    </section>
  );
}
