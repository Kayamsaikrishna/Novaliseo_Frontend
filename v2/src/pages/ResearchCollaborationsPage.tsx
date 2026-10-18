import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Building2, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Send
} from "lucide-react";
import ResearchHeroSection from "../components/ResearchHeroSection";

export default function ResearchCollaborationsPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white relative selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* ================= 1. 3D VOLUMETRIC STUDIO HERO SECTION ================= */}
      <ResearchHeroSection />

      {/* ================= 2. RESEARCH COLLABORATION PILLARS ================= */}
      <section 
        id="research-thrusts" 
        className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-24 sm:py-32 relative z-10"
      >
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-mono font-semibold tracking-wider uppercase mb-3.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Institutional Framework</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Co-Development <span className="text-white/40 font-light">Models</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
            We partner with university research departments, sovereign institutions, and aerospace laboratories through four structured collaboration pathways.
          </p>
        </div>

        {/* 4-Card Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Building2,
              title: "Turnkey CoE Labs",
              desc: "On-campus optical motion-capture flight arenas, sensor fusion testbenches, and compute workstations.",
              tag: "Infrastructure",
            },
            {
              icon: Award,
              title: "Joint Patents & IP",
              desc: "Co-authoring breakthrough patent filings in aerial swarm coordination, LiDAR SLAM, and neuromorphic edge silicon.",
              tag: "Intellectual Property",
            },
            {
              icon: GraduationCap,
              title: "Faculty Fellowships",
              desc: "Sabbatical programs and co-mentored Ph.D. residencies embedded directly within Novaliseo physical deployment arenas.",
              tag: "Academic Growth",
            },
            {
              icon: ShieldCheck,
              title: "Grant Consortia",
              desc: "Collaborative proposals for national defense research grants, aerospace innovation funds, and deep-tech grants.",
              tag: "Funded Research",
            },
          ].map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-7 rounded-3xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-white/50 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                      {card.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ================= 3. PARTNERSHIP PROPOSAL APPLICATION FORM ================= */}
      <section 
        id="partnership-form" 
        className="w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-14 pb-28 sm:pb-36 relative z-10"
      >
        <div className="relative rounded-[3rem] bg-white/[0.02] border border-white/10 p-8 sm:p-14 lg:p-16 backdrop-blur-2xl shadow-[0_30px_90px_rgba(0,0,0,0.8)] overflow-hidden">
          
          {/* Subtle Ambient Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-purple-500/10 blur-[130px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            
            {/* Form Header */}
            <div className="text-center mb-10 sm:mb-14">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
                Research Advisory Board
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                Submit Research Collaboration Proposal
              </h2>
              <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
                Our research team evaluates incoming university and enterprise partnership inquiries on a bi-weekly cycle.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-10 rounded-3xl bg-cyan-500/10 border border-cyan-500/30 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Proposal Received</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Thank you for submitting your research proposal. Our technical review committee will evaluate your domain focus and get in touch within 3 business days.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                <div className="grid md:grid-cols-2 gap-7">
                  
                  {/* Organization Name */}
                  <div className="relative group text-left">
                    <label htmlFor="orgName" className="block text-xs font-mono font-medium text-slate-400 mb-2 uppercase tracking-wider">
                      Organization / University Name *
                    </label>
                    <input 
                      type="text" 
                      id="orgName" 
                      required 
                      placeholder="e.g. Stanford Robotics Lab or Aerospace Inc."
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                    />
                  </div>

                  {/* Organization Type */}
                  <div className="relative group text-left">
                    <label htmlFor="orgType" className="block text-xs font-mono font-medium text-slate-400 mb-2 uppercase tracking-wider">
                      Organization Category *
                    </label>
                    <select 
                      id="orgType" 
                      required 
                      defaultValue=""
                      className="w-full bg-[#0a0f1d] border border-white/10 rounded-2xl px-4 py-3.5 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="text-slate-500">Select Organization Type</option>
                      <option value="university">University / Academic Institution</option>
                      <option value="corporate_rd">Corporate R&amp;D Division</option>
                      <option value="government_lab">Government / Defense Laboratory</option>
                      <option value="deeptech_startup">DeepTech Startup</option>
                    </select>
                  </div>

                </div>

                <div className="grid md:grid-cols-2 gap-7">
                  
                  {/* Contact Person Name */}
                  <div className="relative group text-left">
                    <label htmlFor="contactName" className="block text-xs font-mono font-medium text-slate-400 mb-2 uppercase tracking-wider">
                      Principal Investigator / Lead Contact *
                    </label>
                    <input 
                      type="text" 
                      id="contactName" 
                      required 
                      placeholder="Dr. Full Name"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                    />
                  </div>

                  {/* Email */}
                  <div className="relative group text-left">
                    <label htmlFor="email" className="block text-xs font-mono font-medium text-slate-400 mb-2 uppercase tracking-wider">
                      Institutional Email Address *
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      required 
                      placeholder="pi@university.edu"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                    />
                  </div>

                </div>

                {/* Research Domain */}
                <div className="relative group text-left">
                  <label htmlFor="domainInterest" className="block text-xs font-mono font-medium text-slate-400 mb-2 uppercase tracking-wider">
                    Primary Research Thrust / Domain of Interest *
                  </label>
                  <select 
                    id="domainInterest" 
                    required 
                    defaultValue=""
                    className="w-full bg-[#0a0f1d] border border-white/10 rounded-2xl px-4 py-3.5 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="text-slate-500">Select Primary Research Area</option>
                    <option value="swarms">Autonomous Drone Swarms &amp; Distributed Flocking</option>
                    <option value="silicon">Sovereign Edge Silicon &amp; Neuromorphic AI</option>
                    <option value="sim_real">Isaac Sim Physics Twins &amp; LiDAR SLAM</option>
                    <option value="turnkey_lab">Campus Center of Excellence (CoE) Laboratory Setup</option>
                    <option value="joint_patent">Joint Patent Filing / Sponsored Grant</option>
                  </select>
                </div>

                {/* Collaboration Proposal Message */}
                <div className="relative group text-left">
                  <label htmlFor="proposal" className="block text-xs font-mono font-medium text-slate-400 mb-2 uppercase tracking-wider">
                    Executive Summary / Technical Scope *
                  </label>
                  <textarea 
                    id="proposal" 
                    rows={4} 
                    required 
                    placeholder="Briefly outline your research objective, current testbed capabilities, expected co-authorship/IP terms, or laboratory setup requirements..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button 
                    type="submit" 
                    className="group relative w-full py-4 sm:py-4.5 rounded-full bg-white hover:bg-slate-100 text-slate-950 font-bold text-sm tracking-wide overflow-hidden transition-all duration-200 shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Submit Collaboration Proposal</span>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>
      </section>

    </div>
  );
}
