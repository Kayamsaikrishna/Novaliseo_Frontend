import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import GlassFolder from "./ui/GlassFolder";

const CAPABILITY_FOLDERS = [
  {
    id: "autonomous-swarms",
    label: "Autonomous Swarms",
    meta: "3 Modules · Live",
    art: "glacier",
    seed: 104,
    desc: "Deterministic path-planning, GPS-denied visual-inertial odometry, and distributed multi-agent swarm synchronization.",
    files: [
      { name: "GPS-Denied Navigation", meta: "VIO · Real-Time", art: "glacier" },
      { name: "Swarm Routing Engine", meta: "Mesh Protocol", art: "aurora" },
      { name: "Obstacle Avoidance Core", meta: "<10ms Reaction", art: "verdant" },
    ],
  },
  {
    id: "sovereign-core",
    label: "Sovereign Core IP",
    meta: "3 Modules · Proprietary",
    art: "aurora",
    seed: 208,
    desc: "100% native architecture built from first principles. Complete data sovereignty, air-gapped security, zero external vendor lock-in.",
    files: [
      { name: "Native Decision Kernel", meta: "Air-Gapped IP", art: "aurora" },
      { name: "Hardware Trust Enclave", meta: "Formal Proof", art: "ember" },
      { name: "Deterministic Logic Bus", meta: "Sub-microsecond", art: "dusk" },
    ],
  },
  {
    id: "hardened-silicon",
    label: "Hardened Silicon",
    meta: "3 Modules · Custom HW",
    art: "ember",
    seed: 312,
    desc: "Tailored edge compute boards, avionics bus interfaces, and mission-hardened thermal enclosures engineered for extreme physical theaters.",
    files: [
      { name: "Edge Compute Board", meta: "MIL-STD-810G", art: "ember" },
      { name: "Thermal Subsystem", meta: "-40°C to +85°C", art: "dusk" },
      { name: "Dual Power Bus", meta: "Redundant Rail", art: "aurora" },
    ],
  },
  {
    id: "mission-intelligence",
    label: "Mission Operations",
    meta: "3 Modules · Field Ready",
    art: "verdant",
    seed: 416,
    desc: "Sub-second telemetry processing, predictive system health analytics, and autonomous tactical mission execution in the field.",
    files: [
      { name: "Telemetry Uplink Bus", meta: "Sub-Second Sync", art: "verdant" },
      { name: "Health Analytics Node", meta: "Predictive AI", art: "glacier" },
      { name: "Blackbox Mission Logger", meta: "Cryptographic", art: "ember" },
    ],
  },
];

export default function PurposeBuiltIntelligence() {
  const [activeFile, setActiveFile] = useState(null);
  const [dims, setDims] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });

  useEffect(() => {
    const handleResize = () => {
      setDims({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Compute dynamic auto-scaled folder width based on both screen width and height
  // to ensure the entire section fits seamlessly in one full screen!
  const folderWidth = React.useMemo(() => {
    const w = dims.width;
    const h = dims.height;

    // Mobile (1 column)
    if (w < 768) {
      return Math.min(290, Math.max(220, w - 56));
    }
    // Tablet (2 columns)
    if (w < 1024) {
      return Math.min(280, Math.floor((w - 96) / 2));
    }
    // Desktop (4 columns fitting in 1 full screen)
    const maxWFromWidth = (Math.min(w * 0.92, 1750) - 96) / 4;
    // Scale down on shorter laptop displays, scale up on 1440p / 4K displays
    const maxWFromHeight = (h - 260) / 1.45;

    const calculated = Math.floor(Math.min(maxWFromWidth, maxWFromHeight));
    return Math.max(215, Math.min(360, calculated));
  }, [dims.width, dims.height]);

  return (
    <section 
      id="intelligence"
      className="relative w-full overflow-hidden bg-gradient-to-b from-white via-slate-50/80 to-slate-100/60 text-[#0f172a] min-h-screen lg:h-screen flex flex-col justify-center py-14 lg:py-0 px-4 sm:px-8 lg:px-12 2xl:px-16 selection:bg-sky-500/20"
    >
      
      {/* ================= RICH BACKGROUND VISUALS ================= */}
      {/* 1. Precision Technical Coordinate Grid */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-70"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(148, 163, 184, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(148, 163, 184, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 75% 65% at 50% 40%, black 50%, transparent 95%)",
          WebkitMaskImage: "radial-gradient(ellipse 75% 65% at 50% 40%, black 50%, transparent 95%)",
        }}
      />

      {/* 2. Luminous Ambient Glow Orbs for Depth */}
      <div className="absolute top-1/4 left-1/10 w-[550px] h-[550px] bg-sky-200/40 rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute top-1/2 right-1/12 w-[600px] h-[600px] bg-indigo-200/35 rounded-full blur-[160px] pointer-events-none -z-0" />
      <div className="absolute bottom-1/6 left-1/3 w-[500px] h-[500px] bg-cyan-100/45 rounded-full blur-[130px] pointer-events-none -z-0" />

      <div className="relative z-10 max-w-7xl 2xl:max-w-[1650px] 3xl:max-w-[1900px] mx-auto w-full">
        
        {/* ================= SECTION HEADER (DYNAMICALLY PROPORTIONED) ================= */}
        <div className="max-w-3xl 2xl:max-w-4xl mb-6 lg:mb-8 2xl:mb-12 text-left">
          
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] 2xl:text-5xl font-medium tracking-[-0.035em] text-[#0f172a] leading-[1.12] mb-2 lg:mb-3">
              Intelligence engineered around your exact operational requirements.
            </h2>

            <p className="text-xs sm:text-sm lg:text-[15px] 2xl:text-lg text-slate-600 font-normal leading-relaxed">
              Most technology providers sell generic, off-the-shelf software. Novaliseo builds from first principles—designing custom embedded compute, deterministic decision logic, and hardened edge platforms tailored to the physical constraints of our partners.
            </p>
          </motion.div>

        </div>

        {/* ================= 4 DYNAMICALLY SCALED INTERACTIVE GLASS FOLDER CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-4 xl:gap-6 2xl:gap-8 justify-items-center w-full">
          {CAPABILITY_FOLDERS.map((folder, idx) => (
            <motion.div
              key={folder.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center w-full"
              style={{ maxWidth: folderWidth + 24 }}
            >
              {/* Glass Folder Canvas Component with dynamic responsive width */}
              <div className="p-1.5 sm:p-2 rounded-2xl sm:rounded-3xl bg-white/40 backdrop-blur-sm border border-white/80 shadow-[0_10px_28px_-10px_rgba(15,23,42,0.08)] hover:shadow-[0_18px_36px_-10px_rgba(15,23,42,0.14)] transition-all duration-300">
                <GlassFolder
                  label={folder.label}
                  meta={folder.meta}
                  art={folder.art}
                  seed={folder.seed}
                  files={folder.files}
                  width={folderWidth}
                  action="none"
                  onFileSelect={(file) => setActiveFile(file)}
                />
              </div>

              {/* Explanatory Context Under Folder */}
              <div className="mt-3 lg:mt-4 text-left px-1 w-full">
                <p className="text-[11px] lg:text-xs 2xl:text-sm text-slate-600 leading-relaxed font-normal">
                  {folder.desc}
                </p>
                <div className="mt-1.5 flex items-center gap-1 text-[11px] font-mono font-semibold text-sky-600 hover:text-sky-700 transition-colors cursor-pointer">
                  <span>Explore architectural specs</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
