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
        <div className="relative z-10 w-full max-w-5xl 2xl:max-w-6xl mx-auto rounded-[2rem] sm:rounded-[2.5rem] bg-white/95 border border-slate-200/90 shadow-[0_20px_60px_rgba(15,23,42,0.07),0_4px_20px_rgba(0,0,0,0.03)] backdrop-blur-2xl overflow-hidden p-6 sm:p-8 lg:p-10">
          
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 sm:p-12 rounded-2xl bg-slate-50 border border-slate-200 text-center max-w-lg mx-auto my-8"
            >
              <div className="w-14 h-14 rounded-full bg-slate-100 text-slate-800 flex items-center justify-center mx-auto mb-4 shadow-xs">
                <CheckCircle2 className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Message Sent Successfully!</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Thank you for reaching out to us. A member of our team will review your message and get in touch with you within 2 business days.
              </p>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs">
                <span>Confirmation #{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
            </motion.div>
          ) : (
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              
              {/* Left Panel: Narrative & Tracks (5 Columns) */}
              <div className="lg:col-span-5 flex flex-col justify-between text-left space-y-5">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-slate-700 text-xs font-medium mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                    <span>Get in Touch</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-[2.1rem] font-bold text-slate-900 tracking-tight leading-snug">
                    Let's Build Together
                  </h2>
                  <p className="mt-2.5 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                    Whether you are a university professor, student researcher, startup founder, or an enterprise team—we are here to collaborate with you.
                  </p>
                </div>

                {/* 3 Interactive Pathway Quick-Picks */}
                <div className="space-y-2.5">
                  <button 
                    type="button" 
                    onClick={() => {
                      const select = document.getElementById("interest") as HTMLSelectElement | null;
                      if (select) select.value = "grant";
                    }}
                    className="w-full p-3 rounded-xl bg-slate-50 hover:bg-slate-100/90 border border-slate-200 text-left transition-all duration-200 group cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <Building2 className="w-4 h-4 text-slate-700" />
                        <span className="font-semibold text-xs sm:text-sm text-slate-800">Colleges &amp; Universities</span>
                      </div>
                      <span className="text-xs text-slate-400 group-hover:text-slate-700 transition-colors">Select →</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1 pl-6.5">Joint research, student internships &amp; academic grants.</p>
                  </button>

                  <button 
                    type="button" 
                    onClick={() => {
                      const select = document.getElementById("interest") as HTMLSelectElement | null;
                      if (select) select.value = "slam";
                    }}
                    className="w-full p-3 rounded-xl bg-slate-50 hover:bg-slate-100/90 border border-slate-200 text-left transition-all duration-200 group cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <Microscope className="w-4 h-4 text-slate-700" />
                        <span className="font-semibold text-xs sm:text-sm text-slate-800">Labs &amp; Researchers</span>
                      </div>
                      <span className="text-xs text-slate-400 group-hover:text-slate-700 transition-colors">Select →</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1 pl-6.5">Access to drone test cages, robotics hardware &amp; sensors.</p>
                  </button>

                  <button 
                    type="button" 
                    onClick={() => {
                      const select = document.getElementById("interest") as HTMLSelectElement | null;
                      if (select) select.value = "custom";
                    }}
                    className="w-full p-3 rounded-xl bg-slate-50 hover:bg-slate-100/90 border border-slate-200 text-left transition-all duration-200 group cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <Zap className="w-4 h-4 text-slate-700" />
                        <span className="font-semibold text-xs sm:text-sm text-slate-800">Startups &amp; Companies</span>
                      </div>
                      <span className="text-xs text-slate-400 group-hover:text-slate-700 transition-colors">Select →</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1 pl-6.5">Build custom prototypes, test hardware &amp; launch products.</p>
                  </button>
                </div>

                {/* Assurances with Real Lucide SVG Icons */}
                <div className="pt-3.5 border-t border-slate-200 grid grid-cols-2 gap-4 text-left">
                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-semibold text-slate-800">Quick Response</div>
                      <div className="text-[11px] text-slate-500">We reply within 2 business days</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-semibold text-slate-800">Complete Privacy</div>
                      <div className="text-[11px] text-slate-500">Your ideas stay safe with us</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Panel: Form Console (7 Columns) */}
              <div className="lg:col-span-7 bg-slate-50/90 p-5 sm:p-6 lg:p-7 rounded-2xl border border-slate-200/90">
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  
                  {/* Row 1: Name & Email */}
                  <div className="grid sm:grid-cols-2 gap-3.5">
                    <div className="text-left">
                      <label htmlFor="name" className="block text-xs font-medium text-slate-700 mb-1">
                        Full Name <span className="text-slate-400">*</span>
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        required 
                        placeholder="Enter your name"
                        className="w-full bg-white hover:bg-white focus:bg-white border border-slate-200 focus:border-slate-400 focus:ring-2 focus:ring-slate-300/30 rounded-xl px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm font-normal transition-all shadow-2xs outline-none"
                      />
                    </div>

                    <div className="text-left">
                      <label htmlFor="email" className="block text-xs font-medium text-slate-700 mb-1">
                        Email Address <span className="text-slate-400">*</span>
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        required 
                        placeholder="name@example.com"
                        className="w-full bg-white hover:bg-white focus:bg-white border border-slate-200 focus:border-slate-400 focus:ring-2 focus:ring-slate-300/30 rounded-xl px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm font-normal transition-all shadow-2xs outline-none"
                      />
                    </div>
                  </div>

                  {/* Row 2: Organization & Interest */}
                  <div className="grid sm:grid-cols-2 gap-3.5">
                    <div className="text-left">
                      <label htmlFor="org" className="block text-xs font-medium text-slate-700 mb-1">
                        Company / University / College <span className="text-slate-400">*</span>
                      </label>
                      <input 
                        type="text" 
                        id="org" 
                        required 
                        placeholder="Where are you from?"
                        className="w-full bg-white hover:bg-white focus:bg-white border border-slate-200 focus:border-slate-400 focus:ring-2 focus:ring-slate-300/30 rounded-xl px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm font-normal transition-all shadow-2xs outline-none"
                      />
                    </div>

                    <div className="text-left">
                      <label htmlFor="interest" className="block text-xs font-medium text-slate-700 mb-1">
                        What would you like to work on? <span className="text-slate-400">*</span>
                      </label>
                      <div className="relative">
                        <select 
                          id="interest" 
                          required 
                          defaultValue=""
                          className="w-full bg-white hover:bg-white focus:bg-white border border-slate-200 focus:border-slate-400 focus:ring-2 focus:ring-slate-300/30 rounded-xl px-3.5 py-2.5 text-slate-900 text-xs sm:text-sm font-normal transition-all shadow-2xs outline-none appearance-none cursor-pointer pr-10"
                        >
                          <option value="" disabled className="text-slate-400">Select an option</option>
                          <option value="grant">Academic research &amp; student projects</option>
                          <option value="slam">Drone testing &amp; flight arena access</option>
                          <option value="flight">Drone flight systems &amp; aerodynamics</option>
                          <option value="ugv">Autonomous ground robotics (UGVs)</option>
                          <option value="edge_ai">AI, computer vision &amp; smart sensors</option>
                          <option value="lab">Setting up a robotics lab on campus</option>
                          <option value="custom">Custom prototype or company project</option>
                          <option value="other">Other collaboration idea</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-slate-400">
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Message Outline */}
                  <div className="text-left">
                    <label htmlFor="message" className="block text-xs font-medium text-slate-700 mb-1 flex items-center justify-between">
                      <span>Tell us about your project or idea <span className="text-slate-400">*</span></span>
                      <span className="text-[11px] text-slate-400">Brief Summary</span>
                    </label>
                    <textarea 
                      id="message" 
                      rows={2} 
                      required 
                      placeholder="Share a brief overview of what you are working on and how we can work together..."
                      className="w-full bg-white hover:bg-white focus:bg-white border border-slate-200 focus:border-slate-400 focus:ring-2 focus:ring-slate-300/30 rounded-xl p-3 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm font-normal transition-all shadow-2xs outline-none resize-none min-h-[64px] sm:min-h-[72px]"
                    />
                  </div>

                  {/* Submit Button & Direct Note */}
                  <div className="pt-1.5 space-y-2.5">
                    <button 
                      type="submit" 
                      className="w-full py-3 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs sm:text-sm tracking-wide transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer group"
                    >
                      <span>Send Message</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </button>

                    <p className="text-xs text-slate-500 text-center">
                      We review every message directly • research@novaliseo.com
                    </p>
                  </div>

                </form>
              </div>

            </div>
          )}

        </div>
      </section>

    </div>
  );
}
