import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Building2, 
  GraduationCap, 
  Briefcase, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Send,
  Share2,
  FileText,
  Lightbulb,
  Cpu,
  Layers,
  Activity,
  ArrowUpRight
} from "lucide-react";
import ResearchHeroSection from "../components/ResearchHeroSection";

import academicConsortiaImg from "../assets/academic_consortia_network.jpg";
import hilTelemetryImg from "../assets/maritime/gnss_denied_navigation.png";
import industrialPocImg from "../assets/maritime/maritime_port_intelligence_main.jpg";

export default function ResearchCollaborationsPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollToForm = (focusValue?: string) => {
    const el = document.getElementById("collab-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      if (focusValue) {
        const select = document.getElementById("interest") as HTMLSelectElement | null;
        if (select) select.value = focusValue;
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] text-slate-900 relative selection:bg-cyan-500/20 overflow-x-hidden">
      
      {/* ================= 1. MULTIDISCIPLINARY RESEARCH HERO SECTION ================= */}
      <ResearchHeroSection />

      {/* ================= 2. COLLABORATIVE PATHWAYS MATRIX ================= */}
      <section 
        id="collaboration-models" 
        className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-20 sm:py-28 relative z-10"
      >
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/5 border border-slate-900/10 text-slate-700 text-xs font-mono font-semibold tracking-wider uppercase mb-3.5 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>Open Co-Innovation Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            How We Partner &amp; <span className="text-slate-400 font-light">Co-Develop</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base md:text-lg font-normal leading-relaxed">
            We believe the most impactful technologies emerge when academia, active research scholars, and industry engineering teams pool resources and test directly in physical reality.
          </p>
        </div>

        {/* 3 Pathway Cards with Rich Hardware & Telemetry Visuals */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Pathway 1: Universities & Faculties */}
          <div className="p-5 sm:p-6 rounded-[2.2rem] bg-white/95 hover:bg-white border border-slate-200/90 shadow-[0_15px_45px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_60px_rgba(6,182,212,0.14)] transition-all duration-500 flex flex-col justify-between text-left group hover:-translate-y-1.5">
            <div>
              {/* Rich Visual Media Frame with Floating Badges */}
              <div className="relative w-full h-48 sm:h-52 overflow-hidden rounded-2xl mb-5 border border-slate-200/80 bg-slate-950 shadow-inner group">
                <img 
                  src={academicConsortiaImg} 
                  alt="Academic Grant Consortia & Interdisciplinary Research Network"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating Top Left Pill Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono shadow-md">
                  <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Academic Network</span>
                </div>

                {/* Floating Top Right Path Identifier */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-950/80 backdrop-blur-md border border-cyan-500/40 text-cyan-300 text-[10px] font-mono font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  Path 01
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-slate-300">
                  <span className="truncate">Multi-Faculty Grant Consortia</span>
                  <span className="text-cyan-400 font-semibold shrink-0">Open IP</span>
                </div>
              </div>

              {/* Card Title & Narrative */}
              <h3 className="text-xl sm:text-[22px] font-bold text-slate-950 tracking-tight mb-2.5 group-hover:text-cyan-900 transition-colors">
                For Universities &amp; Professors
              </h3>
              <p className="text-slate-600 text-xs sm:text-[13.5px] leading-relaxed mb-5 font-normal">
                Joint grant consortia, co-authored peer-reviewed research papers, and sabbatical research residencies embedded in physical flight test arenas.
              </p>

              {/* Bullet Highlights */}
              <ul className="space-y-2.5 text-xs sm:text-[13px] text-slate-700 font-medium mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>National &amp; Defense Grant Consortia</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>Joint Patent &amp; IP Co-Filings</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>Student Research Mentorship</span>
                </li>
              </ul>
            </div>

            {/* Bottom Action CTA */}
            <button
              onClick={() => scrollToForm("grant")}
              className="w-full py-3 px-4 rounded-xl bg-slate-50 hover:bg-cyan-50 border border-slate-200 hover:border-cyan-200 text-slate-800 hover:text-cyan-900 text-xs font-mono font-semibold flex items-center justify-between transition-all duration-200 group/btn cursor-pointer shadow-2xs"
            >
              <span>Propose Academic Consortium</span>
              <ArrowRight className="w-4 h-4 text-cyan-600 transition-transform duration-200 group-hover/btn:translate-x-1" />
            </button>
          </div>

          {/* Pathway 2: Research Scholars & Labs */}
          <div className="p-5 sm:p-6 rounded-[2.2rem] bg-white/95 hover:bg-white border border-slate-200/90 shadow-[0_15px_45px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_60px_rgba(37,99,235,0.14)] transition-all duration-500 flex flex-col justify-between text-left group hover:-translate-y-1.5">
            <div>
              {/* Rich Visual Media Frame with Floating Badges */}
              <div className="relative w-full h-48 sm:h-52 overflow-hidden rounded-2xl mb-5 border border-slate-200/80 bg-slate-950 shadow-inner group">
                <img 
                  src={hilTelemetryImg} 
                  alt="LiDAR Point Cloud, IMU Telemetry & Hardware-in-the-Loop Testbed"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating Top Left Pill Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono shadow-md">
                  <Building2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>Telemetry Testbeds</span>
                </div>

                {/* Floating Top Right Path Identifier */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-950/80 backdrop-blur-md border border-blue-500/40 text-blue-300 text-[10px] font-mono font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                  Path 02
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-slate-300">
                  <span className="truncate">HIL &amp; 6-DoF Sensor Pipelines</span>
                  <span className="text-blue-400 font-semibold shrink-0">100Hz Datasets</span>
                </div>
              </div>

              {/* Card Title & Narrative */}
              <h3 className="text-xl sm:text-[22px] font-bold text-slate-950 tracking-tight mb-2.5 group-hover:text-blue-900 transition-colors">
                For Labs &amp; Scholars
              </h3>
              <p className="text-slate-600 text-xs sm:text-[13.5px] leading-relaxed mb-5 font-normal">
                Access calibrated hardware testbenches, optical motion-capture drone arenas, and high-framerate sensor pipelines for thesis validation.
              </p>

              {/* Bullet Highlights */}
              <ul className="space-y-2.5 text-xs sm:text-[13px] text-slate-700 font-medium mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Hardware-in-the-Loop Bench Access</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Motion-Capture Indoor Flight Cages</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Raw Telemetry &amp; Flight Datasets</span>
                </li>
              </ul>
            </div>

            {/* Bottom Action CTA */}
            <button
              onClick={() => scrollToForm("slam")}
              className="w-full py-3 px-4 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 text-slate-800 hover:text-blue-900 text-xs font-mono font-semibold flex items-center justify-between transition-all duration-200 group/btn cursor-pointer shadow-2xs"
            >
              <span>Request Testbed Access</span>
              <ArrowRight className="w-4 h-4 text-blue-600 transition-transform duration-200 group-hover/btn:translate-x-1" />
            </button>
          </div>

          {/* Pathway 3: Enterprises & Startups */}
          <div className="p-5 sm:p-6 rounded-[2.2rem] bg-white/95 hover:bg-white border border-slate-200/90 shadow-[0_15px_45px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_60px_rgba(245,158,11,0.14)] transition-all duration-500 flex flex-col justify-between text-left group hover:-translate-y-1.5">
            <div>
              {/* Rich Visual Media Frame with Floating Badges */}
              <div className="relative w-full h-48 sm:h-52 overflow-hidden rounded-2xl mb-5 border border-slate-200/80 bg-slate-950 shadow-inner group">
                <img 
                  src={industrialPocImg} 
                  alt="Autonomous Multi-Domain Robotics Prototyping & Field De-Risking"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating Top Left Pill Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono shadow-md">
                  <Briefcase className="w-3.5 h-3.5 text-amber-400" />
                  <span>Industry PoC</span>
                </div>

                {/* Floating Top Right Path Identifier */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-950/80 backdrop-blur-md border border-amber-500/40 text-amber-300 text-[10px] font-mono font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  Path 03
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-slate-300">
                  <span className="truncate">Rapid Autonomy Prototyping</span>
                  <span className="text-amber-400 font-semibold shrink-0">Field Sandbox</span>
                </div>
              </div>

              {/* Card Title & Narrative */}
              <h3 className="text-xl sm:text-[22px] font-bold text-slate-950 tracking-tight mb-2.5 group-hover:text-amber-900 transition-colors">
                For Industry &amp; Startups
              </h3>
              <p className="text-slate-600 text-xs sm:text-[13.5px] leading-relaxed mb-5 font-normal">
                Accelerate custom autonomy development. Co-create proof-of-concept prototypes, conduct FMEA safety analysis, and de-risk mission architectures.
              </p>

              {/* Bullet Highlights */}
              <ul className="space-y-2.5 text-xs sm:text-[13px] text-slate-700 font-medium mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Rapid Proof-of-Concept Prototyping</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Sensor Hardening &amp; Firmware Reviews</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Field Deployment Risk Advisory</span>
                </li>
              </ul>
            </div>

            {/* Bottom Action CTA */}
            <button
              onClick={() => scrollToForm("custom")}
              className="w-full py-3 px-4 rounded-xl bg-slate-50 hover:bg-amber-50 border border-slate-200 hover:border-amber-200 text-slate-800 hover:text-amber-900 text-xs font-mono font-semibold flex items-center justify-between transition-all duration-200 group/btn cursor-pointer shadow-2xs"
            >
              <span>Accelerate Commercial PoC</span>
              <ArrowRight className="w-4 h-4 text-amber-600 transition-transform duration-200 group-hover/btn:translate-x-1" />
            </button>
          </div>

        </div>
      </section>

      {/* ================= 3. DIRECT COLLABORATION PROPOSAL FORM ================= */}
      <section 
        id="collab-form" 
        className="w-full max-w-5xl mx-auto px-6 sm:px-10 lg:px-14 pb-24 sm:pb-32 relative z-10"
      >
        <div className="relative rounded-[3rem] bg-white/90 border border-slate-200/90 p-8 sm:p-14 lg:p-16 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.04)] overflow-hidden">
          
          <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-slate-900/5 border border-slate-900/10 text-slate-700 text-xs font-mono font-semibold tracking-wider uppercase mb-3 shadow-2xs">
              Direct Research Contact
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Start a Research Dialogue
            </h2>
            <p className="mt-2.5 text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
              Whether you are an academic professor with a grant proposal, a laboratory head seeking testing infrastructure, or an enterprise team wanting to build together—let's connect.
            </p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-10 rounded-3xl bg-cyan-50 border border-cyan-200 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center mx-auto mb-4 shadow-xs">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-950 mb-2">Inquiry Received</h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                Thank you for reaching out to Novaliseo Research. Our technical research committee will review your domain interests and follow up within 2 business days.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* Name */}
                <div className="text-left">
                  <label htmlFor="name" className="block text-xs font-mono font-medium text-slate-500 uppercase tracking-wider mb-2">
                    Your Name / Title *
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    placeholder="e.g. Dr. Rajesh Kumar"
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-600 focus:bg-white focus:ring-1 focus:ring-cyan-600 transition-all text-sm"
                  />
                </div>

                {/* Email */}
                <div className="text-left">
                  <label htmlFor="email" className="block text-xs font-mono font-medium text-slate-500 uppercase tracking-wider mb-2">
                    Institutional / Corporate Email *
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    placeholder="name@university.edu"
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-600 focus:bg-white focus:ring-1 focus:ring-cyan-600 transition-all text-sm"
                  />
                </div>

              </div>

              <div className="grid md:grid-cols-2 gap-6">
                
                {/* Organization */}
                <div className="text-left">
                  <label htmlFor="org" className="block text-xs font-mono font-medium text-slate-500 uppercase tracking-wider mb-2">
                    Organization / University *
                  </label>
                  <input 
                    type="text" 
                    id="org" 
                    required 
                    placeholder="Institution Name"
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-600 focus:bg-white focus:ring-1 focus:ring-cyan-600 transition-all text-sm"
                  />
                </div>

                {/* Area of Interest */}
                <div className="text-left">
                  <label htmlFor="interest" className="block text-xs font-mono font-medium text-slate-500 uppercase tracking-wider mb-2">
                    Collaboration Interest *
                  </label>
                  <select 
                    id="interest" 
                    required 
                    defaultValue=""
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-slate-900 focus:outline-none focus:border-cyan-600 focus:bg-white focus:ring-1 focus:ring-cyan-600 transition-all text-sm appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="text-slate-400">Select Collaboration Focus</option>
                    <option value="flight">Aerial Autonomy &amp; Flight Mechanics</option>
                    <option value="ugv">Ground Robotics &amp; Terrestrial Mobility</option>
                    <option value="edge_ai">Embedded Edge AI &amp; Vision Pipelines</option>
                    <option value="slam">Spatial LiDAR Mapping &amp; SLAM</option>
                    <option value="lab">Campus CoE Laboratory Setup</option>
                    <option value="grant">Joint Grant / Co-Authored Paper</option>
                    <option value="custom">Other Interdisciplinary Project</option>
                  </select>
                </div>

              </div>

              {/* Message */}
              <div className="text-left">
                <label htmlFor="message" className="block text-xs font-mono font-medium text-slate-500 uppercase tracking-wider mb-2">
                  Collaboration Outline / Project Idea *
                </label>
                <textarea 
                  id="message" 
                  rows={4} 
                  required 
                  placeholder="Share a short summary of what you're working on and how you'd like to collaborate with our research team..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-600 focus:bg-white focus:ring-1 focus:ring-cyan-600 transition-all text-sm resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button 
                  type="submit" 
                  className="w-full py-4 rounded-full bg-slate-950 hover:bg-black text-white font-semibold text-sm tracking-wide transition-all shadow-md hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Send Collaboration Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>

            </form>
          )}

        </div>
      </section>

    </div>
  );
}
