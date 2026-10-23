import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  ArrowRight,
  Send,
  Lock,
  ShieldCheck,
  Clock,
  Sparkles,
  Building2,
  Microscope,
  Zap
} from "lucide-react";
import ResearchHeroSection from "../components/ResearchHeroSection";
import { ShowcaseCard } from "../components/ShowcaseCard";

import collabUniversitiesImg from "../assets/collab_universities_real.jpg";
import collabLabsImg from "../assets/collab_labs_real.jpg";
import collabIndustryImg from "../assets/collab_industry_real.jpg";
import researchFacilityBg from "../assets/research_intake_facility_bg.jpg";

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

      {/* ================= 3. DIRECT COLLABORATION PROPOSAL CONSOLE (AUTO-FIT TO SCREEN) ================= */}
      <section 
        id="collab-form" 
        className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20 sm:scroll-mt-24 min-h-[calc(100vh-5rem)] lg:min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Photorealistic Research Facility Background with Blueprint Engineering Grid */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <img 
            src={researchFacilityBg} 
            alt="Novaliseo Autonomous Systems Laboratory" 
            className="w-full h-full object-cover object-center scale-105 filter brightness-105"
          />
          
          {/* Light Glassmorphic Diffusion Veil: Ensures Laboratory Depth While Keeping Foreground 100% Legible */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/92 via-slate-100/85 to-slate-200/92 backdrop-blur-[2px]" />

          {/* Precision Engineering Blueprint Dot Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.045] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#0f172a 1px, transparent 1px)",
              backgroundSize: "24px 24px"
            }}
          />

          {/* Ambient Volumetric Atmospheric Lighting */}
          <div className="absolute -top-32 -left-32 w-[30rem] h-[30rem] bg-cyan-400/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-[30rem] h-[30rem] bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Outer Research Console Container */}
        <div className="relative z-10 w-full max-w-5xl 2xl:max-w-6xl mx-auto rounded-[2rem] sm:rounded-[2.5rem] bg-white/95 border border-slate-200/90 shadow-[0_25px_80px_rgba(15,23,42,0.09),0_4px_24px_rgba(0,0,0,0.04)] backdrop-blur-2xl overflow-hidden">
          
          {/* Top Technical Console Header Bar */}
          <div className="px-5 sm:px-8 py-3 bg-slate-900/[0.03] border-b border-slate-200/80 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-600">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-semibold text-slate-800 tracking-wide">DIRECT RESEARCH INTAKE PROTOCOL</span>
              <span className="hidden md:inline text-slate-300">|</span>
              <span className="hidden md:inline text-slate-500">REF: NOV-R&amp;D-2026</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500 text-[11px]">
              <Lock className="w-3.5 h-3.5 text-cyan-600" />
              <span>256-Bit TLS Direct Transmission</span>
            </div>
          </div>

          {/* Main Console Body: Responsive 2-Column Architecture */}
          <div className="p-5 sm:p-7 lg:p-9">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 sm:p-12 rounded-2xl bg-cyan-50/70 border border-cyan-200 text-center max-w-lg mx-auto my-8"
              >
                <div className="w-14 h-14 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center mx-auto mb-4 shadow-xs">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mb-2">Research Inquiry Transmitted</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Thank you for reaching out to Novaliseo Research. Our technical committee has received your submission and will review the domain scope within 2 business days.
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-cyan-200 text-cyan-800 text-xs font-mono">
                  <span>Routing ID: #{Math.floor(100000 + Math.random() * 900000)}</span>
                </div>
              </motion.div>
            ) : (
              <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                
                {/* Left Panel: Institutional Narrative & Tracks (5 Columns) */}
                <div className="lg:col-span-5 flex flex-col justify-between text-left space-y-4 sm:space-y-5">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-[11px] font-mono font-semibold tracking-wider uppercase mb-2">
                      <Sparkles className="w-3 h-3 text-cyan-600" />
                      <span>Co-Development Gateway</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-black text-slate-950 tracking-tight leading-tight">
                      Start a Research{" "}
                      <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        Dialogue
                      </span>
                    </h2>
                    <p className="mt-2 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                      Whether you are an academic professor with a grant proposal, a laboratory head seeking telemetry infrastructure, or an enterprise team wanting to build together—let's connect.
                    </p>
                  </div>

                  {/* 3 Interactive Pathway Quick-Picks */}
                  <div className="space-y-2">
                    <button 
                      type="button" 
                      onClick={() => {
                        const select = document.getElementById("interest") as HTMLSelectElement | null;
                        if (select) select.value = "grant";
                      }}
                      className="w-full p-2.5 rounded-xl bg-slate-50/80 hover:bg-cyan-50/60 border border-slate-200/80 hover:border-cyan-300 text-left transition-all duration-200 group cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-3.5 h-3.5 text-cyan-600" />
                          <span className="font-semibold text-xs text-slate-900 group-hover:text-cyan-950">Academic &amp; Consortia</span>
                        </div>
                        <span className="text-[10px] font-mono text-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity">Select →</span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5">Joint grants, co-authored papers &amp; doctoral seats.</p>
                    </button>

                    <button 
                      type="button" 
                      onClick={() => {
                        const select = document.getElementById("interest") as HTMLSelectElement | null;
                        if (select) select.value = "slam";
                      }}
                      className="w-full p-2.5 rounded-xl bg-slate-50/80 hover:bg-blue-50/60 border border-slate-200/80 hover:border-blue-300 text-left transition-all duration-200 group cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Microscope className="w-3.5 h-3.5 text-blue-600" />
                          <span className="font-semibold text-xs text-slate-900 group-hover:text-blue-950">Labs &amp; Testbeds</span>
                        </div>
                        <span className="text-[10px] font-mono text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">Select →</span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5">Mocap flight arena, HIL benches &amp; 100Hz telemetry.</p>
                    </button>

                    <button 
                      type="button" 
                      onClick={() => {
                        const select = document.getElementById("interest") as HTMLSelectElement | null;
                        if (select) select.value = "custom";
                      }}
                      className="w-full p-2.5 rounded-xl bg-slate-50/80 hover:bg-amber-50/60 border border-slate-200/80 hover:border-amber-300 text-left transition-all duration-200 group cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Zap className="w-3.5 h-3.5 text-amber-600" />
                          <span className="font-semibold text-xs text-slate-900 group-hover:text-amber-950">Industry &amp; Defense PoC</span>
                        </div>
                        <span className="text-[10px] font-mono text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity">Select →</span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5">Accelerated hardware PoCs &amp; mission FMEA reviews.</p>
                    </button>
                  </div>

                  {/* Institutional Assurances with Real Lucide SVG Icons */}
                  <div className="pt-3 border-t border-slate-200/80 grid grid-cols-2 gap-3 text-left">
                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-semibold text-slate-900">48h Fast Review</div>
                        <div className="text-[10.5px] text-slate-500">Technical committee triage</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-semibold text-slate-900">IP Preservation</div>
                        <div className="text-[10.5px] text-slate-500">Mutual NDA protected</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Panel: Executive Form Console (7 Columns) */}
                <div className="lg:col-span-7 bg-slate-50/80 p-4 sm:p-5 lg:p-6 rounded-2xl border border-slate-200/80">
                  <form onSubmit={handleSubmit} className="space-y-3">
                    
                    {/* Row 1: Name & Email */}
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="text-left">
                        <label htmlFor="name" className="block text-xs font-semibold text-slate-700 tracking-tight mb-1">
                          Your Name / Title <span className="text-cyan-600">*</span>
                        </label>
                        <input 
                          type="text" 
                          id="name" 
                          required 
                          placeholder="e.g. Dr. Rajesh Kumar"
                          className="w-full bg-white hover:bg-slate-50/60 focus:bg-white border border-slate-200/90 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/15 rounded-xl px-3.5 py-2 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm font-medium transition-all shadow-2xs outline-none"
                        />
                      </div>

                      <div className="text-left">
                        <label htmlFor="email" className="block text-xs font-semibold text-slate-700 tracking-tight mb-1">
                          Institutional / Corporate Email <span className="text-cyan-600">*</span>
                        </label>
                        <input 
                          type="email" 
                          id="email" 
                          required 
                          placeholder="name@university.edu"
                          className="w-full bg-white hover:bg-slate-50/60 focus:bg-white border border-slate-200/90 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/15 rounded-xl px-3.5 py-2 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm font-medium transition-all shadow-2xs outline-none"
                        />
                      </div>
                    </div>

                    {/* Row 2: Organization & Interest */}
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="text-left">
                        <label htmlFor="org" className="block text-xs font-semibold text-slate-700 tracking-tight mb-1">
                          Organization / University <span className="text-cyan-600">*</span>
                        </label>
                        <input 
                          type="text" 
                          id="org" 
                          required 
                          placeholder="e.g. Stanford / DRDO / DeepTech Lab"
                          className="w-full bg-white hover:bg-slate-50/60 focus:bg-white border border-slate-200/90 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/15 rounded-xl px-3.5 py-2 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm font-medium transition-all shadow-2xs outline-none"
                        />
                      </div>

                      <div className="text-left">
                        <label htmlFor="interest" className="block text-xs font-semibold text-slate-700 tracking-tight mb-1">
                          Collaboration Focus <span className="text-cyan-600">*</span>
                        </label>
                        <div className="relative">
                          <select 
                            id="interest" 
                            required 
                            defaultValue=""
                            className="w-full bg-white hover:bg-slate-50/60 focus:bg-white border border-slate-200/90 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/15 rounded-xl px-3.5 py-2 text-slate-900 text-xs sm:text-sm font-medium transition-all shadow-2xs outline-none appearance-none cursor-pointer pr-10"
                          >
                            <option value="" disabled className="text-slate-400">Select Track</option>
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

                    {/* Row 3: Message Outline */}
                    <div className="text-left">
                      <label htmlFor="message" className="block text-xs font-semibold text-slate-700 tracking-tight mb-1 flex items-center justify-between">
                        <span>Collaboration Outline / Hardware Scope <span className="text-cyan-600">*</span></span>
                        <span className="text-[10px] text-slate-400 font-mono">Brief Summary</span>
                      </label>
                      <textarea 
                        id="message" 
                        rows={2} 
                        required 
                        placeholder="Brief summary of your research thesis, grant proposal, or required testbed infrastructure..."
                        className="w-full bg-white hover:bg-slate-50/60 focus:bg-white border border-slate-200/90 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/15 rounded-xl p-3 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm font-medium transition-all shadow-2xs outline-none resize-none min-h-[64px] sm:min-h-[72px]"
                      />
                    </div>

                    {/* Submit Button & Direct Note */}
                    <div className="pt-1 space-y-2">
                      <button 
                        type="submit" 
                        className="w-full py-2.5 sm:py-3 px-6 rounded-xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 hover:from-cyan-950 hover:via-blue-900 hover:to-slate-950 text-white font-semibold text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-md hover:shadow-cyan-500/15 hover:scale-[1.006] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer group"
                      >
                        <span>Transmit Research Proposal</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </button>

                      <p className="text-[11px] font-mono text-slate-400 text-center">
                        Direct transmission to Novaliseo Research Review Committee • research@novaliseo.com
                      </p>
                    </div>

                  </form>
                </div>

              </div>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
