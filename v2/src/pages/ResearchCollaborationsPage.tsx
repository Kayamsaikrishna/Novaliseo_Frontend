import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
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
import { BookmarkCard } from "../components/BookmarkCard";

import collabUniversitiesImg from "../assets/collab_universities_real.jpg";
import collabLabsImg from "../assets/collab_labs_real.jpg";
import collabIndustryImg from "../assets/collab_industry_real.jpg";

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

      {/* ================= 2. COLLABORATIVE PATHWAYS MATRIX (CARD BOOKMARKS) ================= */}
      <section 
        id="collaboration-models" 
        className="w-full max-w-7xl 2xl:max-w-[1550px] 3xl:max-w-[1750px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 2xl:py-16 relative z-10 flex flex-col justify-center"
      >
        {/* Section Header: Clean, Uncluttered, No Top Tags, Compact Height */}
        <div className="text-left max-w-3xl mb-6 lg:mb-8 2xl:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            How We Partner &amp;{" "}
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Co-Develop
            </span>
          </h2>
          <p className="mt-2 text-slate-600 text-xs sm:text-sm md:text-base 2xl:text-lg font-normal leading-relaxed">
            We believe the most impactful technologies emerge when academia, active research scholars, and industry engineering teams pool resources and test directly in physical reality.
          </p>
        </div>

        {/* 3 Pathway Bookmark Cards: Bookmark-tab with bite taken out of lower edge; blooms on hover */}
        <div className="grid md:grid-cols-3 gap-5 lg:gap-6 2xl:gap-8">
          
          {/* Pathway 1: For Universities & Professors */}
          <BookmarkCard
            tabLabel="— Academic Consortia"
            tabPosition="left"
            category="Path 01"
            artworkImage={collabUniversitiesImg}
            artworkAlt="Quantum Optics & Laser Breadboard Laboratory Bench"
            artworkQuote="Co-Authored IP & Sovereign Grant Consortia"
            accentColor="cyan"
            title="For Universities & Professors"
            description="Joint grant consortia, co-authored peer-reviewed research papers, and sabbatical research residencies embedded in physical flight test arenas."
            highlights={[
              "National & Defense Grant Consortia",
              "Joint Patent & IP Co-Filings",
              "Student Research Mentorship"
            ]}
            buttonText="Propose Consortia"
            onAction={() => scrollToForm("grant")}
            activeDot={1}
          />

          {/* Pathway 2: For Labs & Scholars */}
          <BookmarkCard
            tabLabel="— Scholar Testbeds"
            tabPosition="left"
            category="Path 02"
            artworkImage={collabLabsImg}
            artworkAlt="Optical Motion-Capture Drone Flight Arena & Telemetry Station"
            artworkQuote="6-DoF Optical Flight Arena & HIL Bench"
            accentColor="blue"
            title="For Labs & Scholars"
            description="Access calibrated hardware testbenches, optical motion-capture drone arenas, and high-framerate sensor pipelines for thesis validation."
            highlights={[
              "Hardware-in-the-Loop Bench Access",
              "Motion-Capture Indoor Flight Cages",
              "Raw Telemetry & Flight Datasets"
            ]}
            buttonText="Request Bench Access"
            onAction={() => scrollToForm("slam")}
            activeDot={2}
          />

          {/* Pathway 3: For Industry & Startups */}
          <BookmarkCard
            tabLabel="— Industry Autonomy"
            tabPosition="left"
            category="Path 03"
            artworkImage={collabIndustryImg}
            artworkAlt="Industrial Articulated Robotics Cell & Rapid Prototyping Facility"
            artworkQuote="Rapid Autonomy PoC & FMEA De-Risking"
            accentColor="amber"
            title="For Industry & Startups"
            description="Accelerate custom autonomy development. Co-create proof-of-concept prototypes, conduct FMEA safety analysis, and de-risk mission architectures."
            highlights={[
              "Rapid Proof-of-Concept Prototyping",
              "Sensor Hardening & Firmware Reviews",
              "Field Deployment Risk Advisory"
            ]}
            buttonText="Accelerate PoC"
            onAction={() => scrollToForm("custom")}
            activeDot={3}
          />

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
