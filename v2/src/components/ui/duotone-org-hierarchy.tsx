"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { tritoneTables, mixHex, resolvePalette } from "./duotone-team-roster";

export interface OrgMember {
  id: string;
  name: string;
  role: string;
  department: "executive" | "operations" | "advisory";
  craft: string;
  photo?: string;
  monogram?: string;
  focus?: string;
  bio?: string;
}

export interface DuotoneOrgHierarchyProps {
  className?: string;
  preset?: "ember" | "cobalt" | "moss" | "mono";
  photos?: Record<string, string>;
  onSelectMember?: (member: OrgMember) => void;
}

export default function DuotoneOrgHierarchy({
  className = "",
  preset = "cobalt",
  photos = {},
  onSelectMember,
}: DuotoneOrgHierarchyProps) {
  const pal = resolvePalette(preset, undefined);
  const rawId = React.useId();
  const uid = "org" + rawId.replace(/[^a-zA-Z0-9]/g, "");
  const filterId = uid + "-tone";

  // Build SVG tritone tables identical to DuotoneTeamRoster
  const mid = mixHex(pal.hot, pal.highlight, 0.35);
  const tables = tritoneTables(
    mixHex(pal.shadow, pal.deep, 0.4),
    mid,
    mixHex(pal.highlight, pal.ink, 0.5)
  );

  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Executive node (Root)
  const executiveLeader: OrgMember = {
    id: "thejaa",
    name: "Kayam Thejaa",
    role: "Founder & CEO | Director – External Relations & Strategic Affairs",
    department: "executive",
    craft: "Founder & CEO",
    focus: "50% 20%",
    bio: "Steering Novaliseo's grand strategy, global partnerships, deep-tech research roadmaps, and sovereign intelligence systems.",
  };

  // Operations & Strategic Planning Division (Left group)
  const operationsGroup: OrgMember[] = [
    {
      id: "kushanthraj",
      name: "Kushanthraj S. N.",
      role: "Director of Operations",
      department: "operations",
      craft: "Operations",
      focus: "50% 20%",
      bio: "Overseeing day-to-day manufacturing, supply-chain logistics, and multi-domain testing operations across facilities.",
    },
    {
      id: "saikrishna",
      name: "Sai Krishna",
      role: "Core Engineering & Systems",
      department: "operations",
      craft: "Core Systems",
      monogram: "SK",
      focus: "50% 20%",
      bio: "Architecting non-linear flight guidance, physical autonomy software, and real-time edge telemetry pipelines.",
    },
    {
      id: "sharanraj",
      name: "S. N. Sharanraj",
      role: "Head of Strategic Planning & Business Analytics",
      department: "operations",
      craft: "Strategy & Analytics",
      focus: "50% 20%",
      bio: "Directing strategic resource allocation, financial modeling, industry market analytics, and operational scalability.",
    },
  ];

  // Corporate, Advisory & Technology Division (Right group)
  const advisoryGroup: OrgMember[] = [
    {
      id: "annarao",
      name: "Anguluri Annarao",
      role: "Head of Corporate Affairs",
      department: "advisory",
      craft: "Corporate Affairs",
      focus: "50% 20%",
      bio: "Leading regulatory compliance, legal architecture, institutional liaisons, and strategic corporate governance.",
    },
    {
      id: "shubha",
      name: "Shubha V",
      role: "Aerospace Technology & Innovation Advisor",
      department: "advisory",
      craft: "Aerospace Advisor",
      focus: "50% 25%",
      bio: "Senior aerospace luminary guiding aerodynamic modeling, flight propulsion advances, and high-altitude guidance validation.",
    },
    {
      id: "ravi",
      name: "Ravi Kumar",
      role: "Head of Technology Development & Delivery",
      department: "advisory",
      craft: "Technology Delivery",
      focus: "50% 20%",
      bio: "Directing embedded hardware production, precision assembly lines, and client deployment schedules.",
    },
    {
      id: "sampathkumaran",
      name: "Dr. P. Sampathkumaran",
      role: "Head of Material Development",
      department: "advisory",
      craft: "Material Development",
      focus: "50% 20%",
      bio: "Principal research authority spearheading advanced carbon composites, aerospace metallurgy, and wear-resistant materials.",
    },
  ];

  const handleMemberClick = (member: OrgMember) => {
    setSelectedId(selectedId === member.id ? null : member.id);
    if (onSelectMember) onSelectMember(member);
  };

  return (
    <div
      className={`relative w-full rounded-[2.5rem] overflow-hidden border border-white/10 bg-gradient-to-b from-slate-950 via-[#03061f] to-[#020617] text-white p-6 sm:p-10 md:p-16 select-none ${className}`}
      style={
        {
          ["--dtr-ground" as any]: pal.ground,
          ["--dtr-deep" as any]: pal.deep,
          ["--dtr-hot" as any]: pal.hot,
          ["--dtr-glow" as any]: pal.glow,
          ["--dtr-ink" as any]: pal.ink,
        } as React.CSSProperties
      }
    >
      {/* SVG Duotone Tritone Filter Definition */}
      <svg className="absolute w-0 h-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <filter id={filterId} colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="0.2126 0.7152 0.0722 0 0  0.2126 0.7152 0.0722 0 0  0.2126 0.7152 0.0722 0 0  0 0 0 1 0"
          />
          <feComponentTransfer>
            <feFuncR type="table" tableValues="0 0.13 0.5 0.9 1" />
            <feFuncG type="table" tableValues="0 0.13 0.5 0.9 1" />
            <feFuncB type="table" tableValues="0 0.13 0.5 0.9 1" />
          </feComponentTransfer>
          <feComponentTransfer>
            <feFuncR type="table" tableValues={tables[0]} />
            <feFuncG type="table" tableValues={tables[1]} />
            <feFuncB type="table" tableValues={tables[2]} />
          </feComponentTransfer>
        </filter>
      </svg>

      {/* Atmospheric Background Ambient Radial Lighting */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-[130px] rounded-full" />
        <div className="absolute bottom-10 left-1/4 w-[500px] h-[300px] bg-cyan-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[300px] bg-indigo-600/10 blur-[120px] rounded-full" />
      </div>

      {/* Header Section */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-14 md:mb-18 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 backdrop-blur-md text-[11px] font-bold tracking-[0.2em] text-cyan-300 uppercase shadow-inner">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          Novaliseo Governance
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          Organisation Structure
        </h2>
        <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed max-w-xl mx-auto">
          Executive leadership, mission-critical operations, technology delivery, and aerospace research councils.
        </p>
      </div>

      {/* ================= HIERARCHY TREE ================= */}
      <div className="relative z-10 flex flex-col items-center max-w-6xl mx-auto">
        
        {/* LEVEL 1: EXECUTIVE LEADERSHIP (ROOT NODE) */}
        <div className="relative flex flex-col items-center">
          <motion.div
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onMouseEnter={() => setHoveredId(executiveLeader.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => handleMemberClick(executiveLeader)}
            className={`cursor-pointer relative z-20 w-80 sm:w-96 rounded-2xl p-6 sm:p-7 text-center transition-all duration-300 backdrop-blur-xl border ${
              hoveredId === executiveLeader.id || selectedId === executiveLeader.id
                ? "bg-slate-900/95 border-cyan-400 shadow-[0_0_35px_rgba(46,87,245,0.45)] ring-2 ring-cyan-400/30"
                : "bg-slate-950/80 border-cyan-500/30 shadow-2xl"
            }`}
          >
            {/* Craft Pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold tracking-wider uppercase text-cyan-300 bg-cyan-950/60 border border-cyan-500/40 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              {executiveLeader.craft}
            </div>

            {/* Portrait Frame with Duotone Transition */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-4 rounded-2xl overflow-hidden border-2 border-cyan-400/60 shadow-[0_0_20px_rgba(46,87,245,0.3)] bg-slate-900 group">
              <img
                src={photos[executiveLeader.id] || ""}
                alt={executiveLeader.name}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                style={{
                  filter:
                    hoveredId === executiveLeader.id || selectedId === executiveLeader.id
                      ? "none"
                      : `url(#${filterId})`,
                  objectPosition: executiveLeader.focus || "50% 20%",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Name and Designation */}
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              {executiveLeader.name}
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-cyan-200/90 font-medium leading-snug">
              {executiveLeader.role}
            </p>

            {/* Click indicator / expandable bio */}
            <AnimatePresence>
              {selectedId === executiveLeader.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 pt-3 border-t border-cyan-500/20 text-xs text-slate-300 leading-relaxed text-left"
                >
                  {executiveLeader.bio}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Stem downwards from CEO */}
          <div className="w-0.5 h-10 sm:h-12 bg-gradient-to-b from-cyan-400 to-blue-500 relative">
            <div className="absolute bottom-0 -left-1 w-2.5 h-2.5 rounded-full bg-cyan-400 ring-4 ring-cyan-500/20 shadow-[0_0_10px_#22d3ee]" />
          </div>
        </div>

        {/* ================= CONNECTING SVG TREE (Desktop & Tablet) ================= */}
        <div className="hidden md:block w-full h-12 relative pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1000 48" fill="none" preserveAspectRatio="none">
            {/* Central Vertical Feed */}
            <path d="M 500 0 L 500 24" stroke="url(#tree-grad)" strokeWidth="2" />
            {/* Horizontal Bus Line spanning left to right division */}
            <path d="M 235 24 L 765 24" stroke="url(#tree-grad)" strokeWidth="2" strokeDasharray="4 2" />
            {/* Left drop to Operations */}
            <path d="M 235 24 L 235 48" stroke="url(#tree-grad)" strokeWidth="2" />
            {/* Right drop to Advisory */}
            <path d="M 765 24 L 765 48" stroke="url(#tree-grad)" strokeWidth="2" />
            
            <defs>
              <linearGradient id="tree-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="50%" stopColor="#2e57f5" />
                <stop offset="100%" stopColor="#38bdf8" />
              </linearGradient>
            </defs>
          </svg>
          {/* Glowing Junction Dots */}
          <div className="absolute top-[21px] left-[23.5%] -translate-x-1/2 w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]" />
          <div className="absolute top-[21px] left-[76.5%] -translate-x-1/2 w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]" />
        </div>

        {/* Mobile vertical line connector */}
        <div className="md:hidden w-0.5 h-6 bg-gradient-to-b from-blue-500 to-transparent" />

        {/* ================= LEVEL 2: TWO DIVISION CARDS ================= */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 mt-2">
          
          {/* DIVISION 1: OPERATIONS & STRATEGIC PLANNING (Left Container) */}
          <div className="lg:col-span-5 flex flex-col rounded-3xl p-6 sm:p-8 bg-slate-950/60 border border-blue-500/20 backdrop-blur-xl shadow-2xl relative group">
            {/* Division Top Accent */}
            <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_12px_#3b82f6]" />
                <h4 className="text-base sm:text-lg font-bold tracking-tight text-white">
                  Operations &amp; Strategy
                </h4>
              </div>
              <span className="text-[11px] font-semibold text-blue-400 uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-blue-950/80 border border-blue-500/30">
                3 Leaders
              </span>
            </div>

            {/* Member Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 flex-1">
              {operationsGroup.map((m) => {
                const isHovered = hoveredId === m.id;
                const isSelected = selectedId === m.id;
                const photoSrc = photos[m.id];

                return (
                  <motion.div
                    key={m.id}
                    whileHover={{ y: -4, scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() => setHoveredId(m.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    onClick={() => handleMemberClick(m)}
                    className={`cursor-pointer rounded-2xl p-4 text-center transition-all duration-300 border flex flex-col items-center justify-between ${
                      isHovered || isSelected
                        ? "bg-slate-900/90 border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.35)]"
                        : "bg-slate-900/40 border-white/5 hover:border-blue-500/30"
                    }`}
                  >
                    {/* Portrait or Monogram Avatar */}
                    <div className="relative w-18 h-18 sm:w-20 sm:h-20 mb-3 rounded-xl overflow-hidden border-2 border-blue-400/50 shadow-md bg-slate-900 flex items-center justify-center">
                      {photoSrc ? (
                        <img
                          src={photoSrc}
                          alt={m.name}
                          className="w-full h-full object-cover transition-all duration-300"
                          style={{
                            filter: isHovered || isSelected ? "none" : `url(#${filterId})`,
                            objectPosition: m.focus || "50% 20%",
                          }}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-950 via-slate-900 to-black flex items-center justify-center font-black text-xl text-blue-300">
                          {m.monogram || m.name.charAt(0)}
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="space-y-1 w-full">
                      <h5 className="text-xs sm:text-sm font-bold text-white tracking-tight line-clamp-1">
                        {m.name}
                      </h5>
                      <p className="text-[11px] text-blue-200/80 font-normal leading-tight line-clamp-2 min-h-[28px]">
                        {m.role}
                      </p>
                    </div>

                    {/* Chip */}
                    <span className="mt-3 inline-block px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-blue-300 bg-blue-950/70 border border-blue-500/30 rounded">
                      {m.craft}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* DIVISION 2: CORPORATE, ADVISORY & TECHNOLOGY (Right Container) */}
          <div className="lg:col-span-7 flex flex-col rounded-3xl p-6 sm:p-8 bg-slate-950/60 border border-amber-500/20 backdrop-blur-xl shadow-2xl relative group">
            {/* Division Top Accent */}
            <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-amber-400 shadow-[0_0_12px_#fbbf24]" />
                <h4 className="text-base sm:text-lg font-bold tracking-tight text-white">
                  Corporate, Advisory &amp; Technology
                </h4>
              </div>
              <span className="text-[11px] font-semibold text-amber-300 uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-amber-950/80 border border-amber-500/30">
                4 Advisory &amp; Tech Heads
              </span>
            </div>

            {/* Member Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 flex-1">
              {advisoryGroup.map((m) => {
                const isHovered = hoveredId === m.id;
                const isSelected = selectedId === m.id;
                const photoSrc = photos[m.id];

                return (
                  <motion.div
                    key={m.id}
                    whileHover={{ y: -4, scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() => setHoveredId(m.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    onClick={() => handleMemberClick(m)}
                    className={`cursor-pointer rounded-2xl p-4 text-center transition-all duration-300 border flex flex-col items-center justify-between ${
                      isHovered || isSelected
                        ? "bg-slate-900/90 border-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.35)]"
                        : "bg-slate-900/40 border-white/5 hover:border-amber-500/30"
                    }`}
                  >
                    {/* Portrait Frame */}
                    <div className="relative w-18 h-18 sm:w-20 sm:h-20 mb-3 rounded-xl overflow-hidden border-2 border-amber-400/50 shadow-md bg-slate-900 flex items-center justify-center">
                      {photoSrc ? (
                        <img
                          src={photoSrc}
                          alt={m.name}
                          className="w-full h-full object-cover transition-all duration-300"
                          style={{
                            filter: isHovered || isSelected ? "none" : `url(#${filterId})`,
                            objectPosition: m.focus || "50% 20%",
                          }}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-amber-950 via-slate-900 to-black flex items-center justify-center font-black text-xl text-amber-300">
                          {m.monogram || m.name.charAt(0)}
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="space-y-1 w-full">
                      <h5 className="text-xs sm:text-sm font-bold text-white tracking-tight line-clamp-1">
                        {m.name}
                      </h5>
                      <p className="text-[11px] text-amber-200/80 font-normal leading-tight line-clamp-2 min-h-[28px]">
                        {m.role}
                      </p>
                    </div>

                    {/* Chip */}
                    <span className="mt-3 inline-block px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-amber-300 bg-amber-950/70 border border-amber-500/30 rounded">
                      {m.craft}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>

      {/* Selected Member Expanded Spotlight Panel */}
      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="mt-10 max-w-2xl mx-auto rounded-2xl p-5 bg-slate-900/90 border border-cyan-500/30 text-center backdrop-blur-xl relative z-20 shadow-2xl"
          >
            {(() => {
              const all = [executiveLeader, ...operationsGroup, ...advisoryGroup];
              const mem = all.find((m) => m.id === selectedId);
              if (!mem) return null;
              return (
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
                      {mem.craft}
                    </span>
                    <span className="text-slate-500">•</span>
                    <span className="text-xs text-slate-400 capitalize">{mem.department} Leadership</span>
                  </div>
                  <h4 className="text-xl font-bold text-white">{mem.name}</h4>
                  <p className="text-sm text-cyan-200 font-medium">{mem.role}</p>
                  {mem.bio && <p className="text-xs sm:text-sm text-slate-300 font-light max-w-lg mx-auto pt-1">{mem.bio}</p>}
                </div>
              );
            })()}
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
