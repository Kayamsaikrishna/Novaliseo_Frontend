"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Warp } from "@paper-design/shaders-react";

/* ───────────────────────────── Sector Data ───────────────────────────── */

interface Sector {
  title: string;
  tagline: string;
  image: string;
}

const SECTORS: Sector[] = [
  {
    title: "Defence & Aerospace",
    tagline: "Tactical intelligence for sovereign operations",
    image: "/images/sectors/Defence & Aerospace.jpg",
  },
  {
    title: "Healthcare & Biotech",
    tagline: "AI-driven diagnostics and indigenous pharma",
    image: "/images/sectors/Healthcare and Biotech.jpg",
  },
  {
    title: "Finance & Fintech",
    tagline: "Encrypted sovereign transaction infrastructure",
    image: "/images/sectors/Finance & Fintech.jpg",
  },
  {
    title: "Smart Cities & IoT",
    tagline: "Connected urban intelligence at continental scale",
    image: "/images/sectors/Smart Cities & IOT.jpg",
  },
  {
    title: "Agriculture & AgriTech",
    tagline: "Precision farming with satellite-grade AI",
    image: "/images/sectors/Agriculture & Agritech.jpg",
  },
  {
    title: "Education & EdTech",
    tagline: "Neural learning pathways for the next generation",
    image: "/images/sectors/Education & Edtech.jpg",
  },
];

/* ───────────────────────────── Sector Card ───────────────────────────── */

function SectorCard({ sector, index }: { sector: Sector; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group rounded-2xl overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 60, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${sector.image})` }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent" />

        {/* Glow on hover */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            opacity: isHovered ? 0.15 : 0,
            background:
              "radial-gradient(circle at center, rgba(34,211,238,0.4), transparent 70%)",
          }}
        />
      </div>

      {/* Info */}
      <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
        <h3 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors duration-300">
          {sector.title}
        </h3>
        <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
          {sector.tagline}
        </p>

        {/* Accent line */}
        <div
          className="h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-3 transition-all duration-500"
          style={{ width: isHovered ? "5rem" : "2rem" }}
        />
      </div>

      {/* Border */}
      <div className="absolute inset-0 rounded-2xl border border-white/[0.06] group-hover:border-cyan-500/20 transition-colors duration-500" />
    </motion.div>
  );
}

/* ───────────────────────────── Platforms Section ───────────────────────────── */

export default function Platforms() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden bg-[#020617]"
    >
      {/* Top Atmospheric Blend */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#020617] via-[#020617]/80 to-transparent z-20 pointer-events-none" />

      {/* Warp Shader Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Warp
          style={{ height: "100%", width: "100%" }}
          proportion={0.45}
          softness={1}
          distortion={0.2}
          swirl={0.6}
          swirlIterations={10}
          shape="checks"
          shapeScale={0.1}
          scale={1}
          rotation={0}
          speed={0.6}
          colors={[
            "hsl(210, 100%, 12%)",
            "hsl(192, 90%, 40%)",
            "hsl(200, 100%, 20%)",
            "hsl(195, 100%, 55%)",
          ]}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 py-24 px-6 md:px-16 lg:px-24">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <p className="text-cyan-400 font-mono text-sm tracking-[0.3em] uppercase mb-3">
            Platforms
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Sectors We{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Transform
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Indigenous intelligence deployed across critical sectors — powering
            India's sovereign digital future
          </p>
        </motion.div>

        {/* Sectors Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SECTORS.map((sector, i) => (
            <SectorCard key={sector.title} sector={sector} index={i} />
          ))}
        </div>
      </div>

      {/* Bottom Atmospheric Blend */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#020617] to-transparent z-20 pointer-events-none" />
    </section>
  );
}
