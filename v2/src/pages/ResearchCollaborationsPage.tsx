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
import { ShowcaseCard } from "../components/ShowcaseCard";

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
      el.scrollIntoView({ behavior: "smooth", block: "start" });
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

      {/* ================= 2. COLLABORATIVE PATHWAYS MATRIX (SHOWCASE CARDS) ================= */}
      <section 
        id="collaboration-models" 
        className="w-full max-w-7xl 2xl:max-w-[1550px] 3xl:max-w-[1750px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 2xl:py-16 relative z-10 flex flex-col justify-center min-h-[calc(100vh-5rem)] lg:min-h-screen"
      >
        {/* Section Header: Clean, Uncluttered, No Top Tags, Compact Height */}
        <div className="text-left max-w-3xl mb-5 sm:mb-6 lg:mb-8 2xl:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            How We Partner &amp;{" "}
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Co-Develop
            </span>
          </h2>
          <p className="mt-1.5 text-slate-600 text-xs sm:text-sm md:text-base 2xl:text-lg font-normal leading-relaxed">
            We believe the most impactful technologies emerge when academia, active research scholars, and industry engineering teams pool resources and test directly in physical reality.
          </p>
        </div>

        {/* 3 Showcase Cards: Light-theme luxury case-study cards with chips, overview, and blurred foot */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 2xl:gap-8">
          
          {/* Pathway 1: For Universities & Professors */}
          <ShowcaseCard
            image={collabUniversitiesImg}
            alt="Quantum Optics & Laser Breadboard Laboratory Bench"
            title="Universities & Professors"
            subTitle="Academic Consortia"
            buttonText="Propose Consortia"
            onAction={() => scrollToForm("grant")}
            overview="Joint defense and national R&D consortia with embedded flight arena residencies."
            chips={["Defense Grants", "Joint IP Filings", "Faculty Residencies"]}
            description="We partner with university faculties to co-author peer-reviewed publications, sponsor doctoral candidates, and secure competitive national R&D grants with co-assigned intellectual property."
            accentColor="cyan"
          />

          {/* Pathway 2: For Labs & Scholars */}
          <ShowcaseCard
            image={collabLabsImg}
            alt="Optical Motion-Capture Drone Flight Arena & Telemetry Station"
            title="Labs & Scholars"
            subTitle="Telemetry Testbeds"
            buttonText="Request Access"
            onAction={() => scrollToForm("slam")}
            overview="Calibrated hardware testbenches, optical mocap cages, and 100Hz telemetry for thesis validation."
            chips={["HIL Bench Access", "Mocap Flight Cages", "100Hz Datasets"]}
            description="Scholars and visiting lab teams gain dedicated access to physical flight test arenas, hardware-in-the-loop sensor benches, and continuous raw sensor telemetry streams for validating novel autonomy algorithms."
            accentColor="blue"
          />

          {/* Pathway 3: For Industry & Startups */}
          <ShowcaseCard
            image={collabIndustryImg}
            alt="Industrial Articulated Robotics Cell & Rapid Prototyping Facility"
            title="Industry & Startups"
            subTitle="Commercial PoC"
            buttonText="Initiate PoC"
            onAction={() => scrollToForm("custom")}
            overview="Accelerate custom autonomy development, conduct FMEA safety reviews, and de-risk mission architectures."
            chips={["Rapid PoC Prototyping", "FMEA Hardening", "Field Sandbox Advisory"]}
            description="Enterprises and startups tap our accelerated hardware engineering pipeline to translate autonomy concepts into flight-tested prototypes, de-risking operational deployments before commercial scale-up."
            accentColor="amber"
          />

        </div>
      </section>

      {/* ================= 3. DIRECT COLLABORATION PROPOSAL FORM (AUTO-FIT TO SCREEN) ================= */}
      <section 
        id="collab-form" 
        className="w-full max-w-4xl 2xl:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-14 scroll-mt-24 sm:scroll-mt-28 relative z-10 flex flex-col justify-center items-center min-h-[calc(100vh-5rem)] lg:min-h-screen"
      >
        <div className="relative w-full rounded-[2rem] sm:rounded-[2.5rem] bg-white/95 border border-slate-200/90 p-5 sm:p-7 lg:p-9 backdrop-blur-2xl shadow-[0_20px_70px_rgba(15,23,42,0.06)] hover:shadow-[0_25px_80px_rgba(37,99,235,0.08)] transition-all duration-500 overflow-hidden">
          
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="max-w-2xl mx-auto text-center mb-4 sm:mb-5 lg:mb-6 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/5 border border-slate-900/10 text-slate-700 text-[11px] font-mono font-semibold tracking-wider uppercase mb-2 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
              <span>Direct Research Intake</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-[2.75rem] font-black text-slate-950 tracking-tight leading-tight">
              Start a Research{" "}
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Dialogue
              </span>
            </h2>
            <p className="mt-1.5 text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed font-normal max-w-xl mx-auto">
              Whether you are an academic professor with a grant proposal, a laboratory head seeking testing infrastructure, or an enterprise team wanting to build together—let's connect.
            </p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 sm:p-10 rounded-2xl bg-cyan-50/80 border border-cyan-200 text-center max-w-lg mx-auto"
            >
              <div className="w-12 h-12 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center mx-auto mb-3 shadow-xs">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mb-1.5">Inquiry Received</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Thank you for reaching out to Novaliseo Research. Our technical research committee will review your domain interests and follow up within 2 business days.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5 max-w-3xl mx-auto relative z-10">
              <div className="grid md:grid-cols-2 gap-3 sm:gap-3.5">
                
                {/* Name */}
                <div className="text-left">
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-700 tracking-tight mb-1">
                    Your Name / Title <span className="text-cyan-600">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    placeholder="e.g. Dr. Rajesh Kumar"
                    className="w-full bg-slate-50/80 hover:bg-slate-50 focus:bg-white border border-slate-200/90 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/15 rounded-xl px-3.5 py-2 sm:py-2.5 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm font-medium transition-all shadow-2xs outline-none"
                  />
                </div>

                {/* Email */}
                <div className="text-left">
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-700 tracking-tight mb-1">
                    Institutional / Corporate Email <span className="text-cyan-600">*</span>
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    placeholder="name@university.edu"
                    className="w-full bg-slate-50/80 hover:bg-slate-50 focus:bg-white border border-slate-200/90 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/15 rounded-xl px-3.5 py-2 sm:py-2.5 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm font-medium transition-all shadow-2xs outline-none"
                  />
                </div>

              </div>

              <div className="grid md:grid-cols-2 gap-3 sm:gap-3.5">
                
                {/* Organization */}
                <div className="text-left">
                  <label htmlFor="org" className="block text-xs font-semibold text-slate-700 tracking-tight mb-1">
                    Organization / University <span className="text-cyan-600">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="org" 
                    required 
                    placeholder="Institution Name"
                    className="w-full bg-slate-50/80 hover:bg-slate-50 focus:bg-white border border-slate-200/90 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/15 rounded-xl px-3.5 py-2 sm:py-2.5 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm font-medium transition-all shadow-2xs outline-none"
                  />
                </div>

                {/* Area of Interest */}
                <div className="text-left">
                  <label htmlFor="interest" className="block text-xs font-semibold text-slate-700 tracking-tight mb-1">
                    Collaboration Interest <span className="text-cyan-600">*</span>
                  </label>
                  <div className="relative">
                    <select 
                      id="interest" 
                      required 
                      defaultValue=""
                      className="w-full bg-slate-50/80 hover:bg-slate-50 focus:bg-white border border-slate-200/90 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/15 rounded-xl px-3.5 py-2 sm:py-2.5 text-slate-900 text-xs sm:text-sm font-medium transition-all shadow-2xs outline-none appearance-none cursor-pointer pr-10"
                    >
                      <option value="" disabled className="text-slate-400">Select Collaboration Focus</option>
                      <option value="grant">Joint Grant / Co-Authored Paper (Academia)</option>
                      <option value="slam">Hardware-in-the-Loop &amp; Flight Arena (Labs)</option>
                      <option value="flight">Aerial Autonomy &amp; Flight Mechanics</option>
                      <option value="ugv">Ground Robotics &amp; Terrestrial Mobility</option>
                      <option value="edge_ai">Embedded Edge AI &amp; Vision Pipelines</option>
                      <option value="lab">Campus CoE Laboratory Setup</option>
                      <option value="custom">Rapid Autonomy PoC (Industry &amp; Defense)</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-slate-500">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

              </div>

              {/* Message */}
              <div className="text-left">
                <label htmlFor="message" className="block text-xs font-semibold text-slate-700 tracking-tight mb-1 flex items-center justify-between">
                  <span>Collaboration Outline / Project Idea <span className="text-cyan-600">*</span></span>
                  <span className="text-[10px] text-slate-400 font-mono">Brief Summary</span>
                </label>
                <textarea 
                  id="message" 
                  rows={2} 
                  required 
                  placeholder="Share a short summary of what you're working on and how you'd like to collaborate with our research team..."
                  className="w-full bg-slate-50/80 hover:bg-slate-50 focus:bg-white border border-slate-200/90 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/15 rounded-xl p-3 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm font-medium transition-all shadow-2xs outline-none resize-none min-h-[64px] sm:min-h-[72px]"
                />
              </div>

              {/* Submit Button & Trust Note */}
              <div className="pt-1 space-y-2">
                <button 
                  type="submit" 
                  className="w-full py-2.5 sm:py-3 px-6 rounded-xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 hover:from-cyan-950 hover:via-blue-900 hover:to-slate-950 text-white font-semibold text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-md hover:shadow-cyan-500/15 hover:scale-[1.008] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <span>Send Collaboration Message</span>
                  <Send className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>

                <div className="flex items-center justify-center gap-3 sm:gap-4 text-[11px] font-mono text-slate-400 pt-0.5">
                  <span>⚡ 48h Technical Committee Review</span>
                  <span>•</span>
                  <span>🔒 NDA &amp; IP Protection Guaranteed</span>
                </div>
              </div>

            </form>
          )}

        </div>
      </section>

    </div>
  );
}
