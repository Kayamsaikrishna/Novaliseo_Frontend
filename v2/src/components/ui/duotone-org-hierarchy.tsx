"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  photos?: Record<string, string>;
  onSelectMember?: (member: OrgMember) => void;
}

export default function DuotoneOrgHierarchy({
  className = "",
  photos = {},
  onSelectMember,
}: DuotoneOrgHierarchyProps) {
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
    bio: "Steering Novaliseo's vision, global strategic partnerships, research alliances, and deep-tech autonomous intelligence roadmap.",
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
      bio: "Spearheading multi-facility manufacturing, production scheduling, supply-chain logistics, and deployment operations.",
    },
    {
      id: "saikrishna",
      name: "Sai Krishna",
      role: "Chief Technology Officer (CTO)",
      department: "operations",
      craft: "CTO",
      monogram: "SK",
      focus: "50% 20%",
      bio: "Chief Technology Officer driving core autonomy software, flight control systems, non-linear guidance, and real-time computing pipelines.",
    },
    {
      id: "sharanraj",
      name: "S. N. Sharanraj",
      role: "Head of Strategic Planning & Business Analytics",
      department: "operations",
      craft: "Strategy & Analytics",
      focus: "50% 20%",
      bio: "Leading strategic planning, corporate financial architecture, data analytics, and operational scalability modeling.",
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
      bio: "Managing institutional partnerships, corporate legal frameworks, regulatory certifications, and corporate affairs.",
    },
    {
      id: "shubha",
      name: "Shubha V",
      role: "Aerospace Technology & Innovation Advisor",
      department: "advisory",
      craft: "Aerospace Advisor",
      focus: "50% 25%",
      bio: "Senior aerospace technology authority guiding aerodynamic performance, flight stability, propulsion advances, and high-altitude validation.",
    },
    {
      id: "ravi",
      name: "Ravi Kumar",
      role: "Head of Technology Development & Delivery",
      department: "advisory",
      craft: "Technology Delivery",
      focus: "50% 20%",
      bio: "Directing precision embedded hardware delivery, system conforming, testing cycles, and end-to-end client integration.",
    },
    {
      id: "sampathkumaran",
      name: "Dr. P. Sampathkumaran",
      role: "Head of Material Development",
      department: "advisory",
      craft: "Material Development",
      focus: "50% 20%",
      bio: "Principal research authority spearheading advanced polymer composites, aerospace structural metallurgy, and tribological durability.",
    },
  ];

  const handleMemberClick = (member: OrgMember) => {
    setSelectedId(selectedId === member.id ? null : member.id);
    if (onSelectMember) onSelectMember(member);
  };

  return (
    <div
      className={`relative w-full rounded-[2.5rem] overflow-hidden border border-slate-200/90 bg-gradient-to-b from-white via-sky-50/20 to-slate-50/80 text-slate-900 p-6 sm:p-10 md:p-16 shadow-2xl shadow-slate-200/60 select-none ${className}`}
    >
      {/* Background Grid & Ambient Glow (Light Theme) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(#0284c7 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-400/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[250px] bg-blue-400/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[250px] bg-amber-400/10 blur-[100px] rounded-full" />
      </div>

      {/* Header Section */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-300 bg-sky-50 text-xs font-bold tracking-[0.2em] text-sky-800 uppercase shadow-sm">
          <span className="w-2 h-2 rounded-full bg-sky-600 animate-pulse" />
          NOVALISEO GOVERNANCE
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          Organisation Structure
        </h2>
        <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-xl mx-auto">
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
            className={`cursor-pointer relative z-20 w-80 sm:w-[420px] rounded-2xl p-6 sm:p-7 text-center transition-all duration-300 border ${
              hoveredId === executiveLeader.id || selectedId === executiveLeader.id
                ? "bg-white border-sky-500 shadow-2xl shadow-sky-200/80 ring-4 ring-sky-100"
                : "bg-white/95 border-slate-200 shadow-lg hover:shadow-xl hover:border-sky-400"
            }`}
          >
            {/* Craft Pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase text-sky-800 bg-sky-50 border border-sky-300 mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
              {executiveLeader.craft}
            </div>

            {/* Portrait Frame */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-4 rounded-2xl overflow-hidden border-2 border-sky-500/70 shadow-md bg-slate-100 group">
              <img
                src={photos[executiveLeader.id] || ""}
                alt={executiveLeader.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{
                  objectPosition: executiveLeader.focus || "50% 20%",
                }}
              />
            </div>

            {/* Name and Designation - Full text without truncation */}
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {executiveLeader.name}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-sky-800 font-semibold leading-relaxed px-2">
              {executiveLeader.role}
            </p>

            {/* Click indicator / expandable bio */}
            <AnimatePresence>
              {selectedId === executiveLeader.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 pt-4 border-t border-slate-200 text-xs sm:text-sm text-slate-600 leading-relaxed text-left bg-slate-50/70 p-3 rounded-xl"
                >
                  {executiveLeader.bio}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Stem downwards from CEO */}
          <div className="w-0.5 h-10 sm:h-12 bg-gradient-to-b from-sky-500 to-blue-600 relative">
            <div className="absolute bottom-0 -left-1 w-2.5 h-2.5 rounded-full bg-sky-600 ring-4 ring-sky-200 shadow-sm" />
          </div>
        </div>

        {/* ================= CONNECTING SVG TREE (Desktop & Tablet) ================= */}
        <div className="hidden md:block w-full h-12 relative pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1000 48" fill="none" preserveAspectRatio="none">
            {/* Central Vertical Feed */}
            <path d="M 500 0 L 500 24" stroke="url(#tree-grad-light)" strokeWidth="2.5" />
            {/* Horizontal Bus Line spanning left to right division */}
            <path d="M 235 24 L 765 24" stroke="url(#tree-grad-light)" strokeWidth="2.5" strokeDasharray="5 3" />
            {/* Left drop to Operations */}
            <path d="M 235 24 L 235 48" stroke="url(#tree-grad-light)" strokeWidth="2.5" />
            {/* Right drop to Advisory */}
            <path d="M 765 24 L 765 48" stroke="url(#tree-grad-light)" strokeWidth="2.5" />
            
            <defs>
              <linearGradient id="tree-grad-light" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0284c7" />
                <stop offset="50%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
            </defs>
          </svg>
          {/* Glowing Junction Dots */}
          <div className="absolute top-[20px] left-[23.5%] -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-sky-600 shadow-sm" />
          <div className="absolute top-[20px] left-[76.5%] -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-sky-600 shadow-sm" />
        </div>

        {/* Mobile vertical line connector */}
        <div className="md:hidden w-0.5 h-6 bg-gradient-to-b from-sky-500 to-transparent" />

        {/* ================= LEVEL 2: TWO DIVISION CARDS ================= */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 mt-2">
          
          {/* DIVISION 1: OPERATIONS & STRATEGY (Left Container) */}
          <div className="lg:col-span-5 flex flex-col rounded-3xl p-6 sm:p-7 bg-white/95 border border-sky-200/90 shadow-xl shadow-sky-100/60 relative group">
            {/* Division Top Accent */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-sky-600 shadow-sm" />
                <h4 className="text-base sm:text-lg font-bold tracking-tight text-slate-900">
                  Operations &amp; Strategy
                </h4>
              </div>
              <span className="text-[11px] font-bold text-sky-800 uppercase tracking-widest px-3 py-1 rounded-full bg-sky-50 border border-sky-200">
                3 Leaders
              </span>
            </div>

            {/* Member Cards - Ample width & height, NO text truncation */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-1 items-stretch">
              {operationsGroup.map((m) => {
                const isHovered = hoveredId === m.id;
                const isSelected = selectedId === m.id;
                const photoSrc = photos[m.id];

                return (
                  <motion.div
                    key={m.id}
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() => setHoveredId(m.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    onClick={() => handleMemberClick(m)}
                    className={`cursor-pointer rounded-2xl p-4 text-center transition-all duration-300 border flex flex-col items-center justify-between min-h-[260px] ${
                      isHovered || isSelected
                        ? "bg-sky-50/70 border-sky-400 shadow-xl shadow-sky-100 ring-2 ring-sky-200"
                        : "bg-white border-slate-200 hover:border-sky-300 hover:shadow-md"
                    }`}
                  >
                    {/* Portrait or Monogram Avatar */}
                    <div className="relative w-20 h-20 mb-3 rounded-xl overflow-hidden border-2 border-sky-400/80 shadow-sm bg-slate-100 flex items-center justify-center shrink-0">
                      {photoSrc ? (
                        <img
                          src={photoSrc}
                          alt={m.name}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          style={{
                            objectPosition: m.focus || "50% 20%",
                          }}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-sky-100 via-sky-50 to-blue-100 flex items-center justify-center font-black text-xl text-sky-800">
                          {m.monogram || m.name.charAt(0)}
                        </div>
                      )}
                    </div>

                    {/* Info - Full text completely visible without ellipsis */}
                    <div className="w-full my-auto flex flex-col justify-center">
                      <h5 className="text-sm font-extrabold text-slate-900 tracking-tight leading-snug break-words">
                        {m.name}
                      </h5>
                      <p className="text-xs text-sky-800 font-semibold leading-relaxed mt-1.5 break-words">
                        {m.role}
                      </p>
                    </div>

                    {/* Chip */}
                    <span className="mt-3 inline-block px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-sky-800 bg-sky-50 border border-sky-300 rounded-full shrink-0 shadow-sm">
                      {m.craft}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* DIVISION 2: CORPORATE, ADVISORY & TECHNOLOGY (Right Container) */}
          <div className="lg:col-span-7 flex flex-col rounded-3xl p-6 sm:p-7 bg-white/95 border border-amber-200/90 shadow-xl shadow-amber-100/50 relative group">
            {/* Division Top Accent */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-amber-500 shadow-sm" />
                <h4 className="text-base sm:text-lg font-bold tracking-tight text-slate-900">
                  Corporate, Advisory &amp; Technology
                </h4>
              </div>
              <span className="text-[11px] font-bold text-amber-800 uppercase tracking-widest px-3 py-1 rounded-full bg-amber-50 border border-amber-200">
                4 Advisory &amp; Tech Heads
              </span>
            </div>

            {/* Member Cards - Ample width & height, NO text truncation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 flex-1 items-stretch">
              {advisoryGroup.map((m) => {
                const isHovered = hoveredId === m.id;
                const isSelected = selectedId === m.id;
                const photoSrc = photos[m.id];

                return (
                  <motion.div
                    key={m.id}
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() => setHoveredId(m.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    onClick={() => handleMemberClick(m)}
                    className={`cursor-pointer rounded-2xl p-4 text-center transition-all duration-300 border flex flex-col items-center justify-between min-h-[260px] ${
                      isHovered || isSelected
                        ? "bg-amber-50/70 border-amber-400 shadow-xl shadow-amber-100 ring-2 ring-amber-200"
                        : "bg-white border-slate-200 hover:border-amber-300 hover:shadow-md"
                    }`}
                  >
                    {/* Portrait Frame */}
                    <div className="relative w-20 h-20 mb-3 rounded-xl overflow-hidden border-2 border-amber-400/80 shadow-sm bg-slate-100 flex items-center justify-center shrink-0">
                      {photoSrc ? (
                        <img
                          src={photoSrc}
                          alt={m.name}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          style={{
                            objectPosition: m.focus || "50% 20%",
                          }}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-amber-100 via-amber-50 to-orange-100 flex items-center justify-center font-black text-xl text-amber-800">
                          {m.monogram || m.name.charAt(0)}
                        </div>
                      )}
                    </div>

                    {/* Info - Full text completely visible without ellipsis */}
                    <div className="w-full my-auto flex flex-col justify-center">
                      <h5 className="text-sm font-extrabold text-slate-900 tracking-tight leading-snug break-words">
                        {m.name}
                      </h5>
                      <p className="text-xs text-amber-900 font-semibold leading-relaxed mt-1.5 break-words">
                        {m.role}
                      </p>
                    </div>

                    {/* Chip */}
                    <span className="mt-3 inline-block px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-amber-800 bg-amber-50 border border-amber-300 rounded-full shrink-0 shadow-sm">
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
            className="mt-10 max-w-2xl mx-auto rounded-2xl p-6 bg-white border-2 border-sky-400 text-center shadow-xl shadow-sky-100 relative z-20"
          >
            {(() => {
              const all = [executiveLeader, ...operationsGroup, ...advisoryGroup];
              const mem = all.find((m) => m.id === selectedId);
              if (!mem) return null;
              return (
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-xs font-extrabold text-sky-800 bg-sky-50 px-3 py-0.5 rounded-full border border-sky-300 uppercase tracking-widest">
                      {mem.craft}
                    </span>
                    <span className="text-slate-400">•</span>
                    <span className="text-xs font-semibold text-slate-600 capitalize">{mem.department} Leadership</span>
                  </div>
                  <h4 className="text-2xl font-black text-slate-900">{mem.name}</h4>
                  <p className="text-sm text-sky-800 font-bold">{mem.role}</p>
                  {mem.bio && (
                    <p className="text-xs sm:text-sm text-slate-700 font-normal max-w-lg mx-auto pt-2 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                      {mem.bio}
                    </p>
                  )}
                </div>
              );
            })()}
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
