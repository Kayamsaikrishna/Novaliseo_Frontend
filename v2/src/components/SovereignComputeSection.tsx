import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, ArrowRight, ShieldCheck, Cpu } from "lucide-react";
import pureServersImg from "../assets/novaliseo_servers_pure.jpg";

export default function SovereignComputeSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Autonomous Robotics / Simulation",
    duration: "1–4 Weeks",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section 
      id="infrastructure"
      className="relative w-full overflow-hidden bg-gradient-to-b from-slate-50 via-slate-100/70 to-slate-50 text-[#0f172a] min-h-screen lg:h-screen flex flex-col justify-center py-14 lg:py-0 px-4 sm:px-8 lg:px-12 2xl:px-16 selection:bg-sky-500/20 scroll-mt-28"
    >
      
      {/* Background Ambience: Light atmospheric gradient mesh and soft glows */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(148, 163, 184, 0.14) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(148, 163, 184, 0.14) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 95%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 95%)",
        }}
      />
      
      {/* Soft Ambient Light Gradient Orbs */}
      <div className="absolute top-1/6 right-1/12 w-[550px] h-[550px] bg-sky-200/40 rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute bottom-1/6 left-1/12 w-[600px] h-[600px] bg-blue-100/45 rounded-full blur-[160px] pointer-events-none -z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-indigo-50/50 rounded-full blur-[150px] pointer-events-none -z-0" />

      <div className="relative z-10 max-w-7xl 2xl:max-w-[1650px] 3xl:max-w-[1900px] mx-auto w-full">
        
        {/* ================= COMPACT HEADER ================= */}
        <div className="max-w-3xl 2xl:max-w-4xl mb-4 sm:mb-6 2xl:mb-8 text-left">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] 2xl:text-5xl font-semibold tracking-[-0.03em] text-[#0f172a] leading-snug mb-1.5 2xl:mb-2">
              Dedicated High-Performance Server Infrastructure.
            </h2>

            <p className="text-xs sm:text-sm 2xl:text-base text-slate-600 font-normal leading-relaxed max-w-2xl 2xl:max-w-3xl">
              Novaliseo operates proprietary compute clusters for deep-tech workloads. Based on availability, dedicated server capacity is open for rentals to university research teams and enterprise partners.
            </p>
          </motion.div>
        </div>

        {/* ================= SINGLE SCREEN BALANCED 2-COLUMN GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 2xl:gap-8 items-stretch">
          
          {/* LEFT: PURE REALISTIC DATA CENTER PHOTOGRAPH (7 COLS) */}
          <motion.div 
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 shadow-[0_12px_36px_-12px_rgba(15,23,42,0.12)] relative h-[360px] sm:h-[385px] lg:h-[400px] 2xl:h-[480px] 3xl:h-[540px] flex flex-col justify-between group bg-slate-900"
          >
            {/* Real Human-Free Data Center Photograph */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
              style={{
                backgroundImage: `url(${pureServersImg})`,
              }}
            />

            {/* Subtle Contrast Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-slate-950/20 pointer-events-none" />

            {/* Top Clean Status Pills */}
            <div className="relative z-10 p-4 sm:p-5 2xl:p-6 flex items-center justify-between text-xs font-mono">
              <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-white font-medium text-[11px] 2xl:text-xs">
                Novaliseo Server Facility
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-sky-300 font-medium text-[11px] 2xl:text-xs">
                Bengaluru Data Centre
              </span>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="relative z-10 p-4 sm:p-5 2xl:p-6 text-left text-white mt-auto">
              <h3 className="text-base sm:text-lg 2xl:text-xl font-medium tracking-tight text-white mb-1">
                Sovereign High-Throughput Clusters
              </h3>
              <p className="text-[11px] sm:text-xs 2xl:text-sm text-slate-300 max-w-lg 2xl:max-w-xl leading-relaxed font-normal">
                Air-gapped security, zero egress fees, and direct engineering onboarding for simulation, autonomous robotics, and AI model verification.
              </p>
            </div>
          </motion.div>

          {/* RIGHT: COMPACT ENTERPRISE INQUIRY FORM (5 COLS - FITS SCREEN) */}
          <motion.div 
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 rounded-2xl sm:rounded-3xl bg-white/95 backdrop-blur-xl border border-slate-200/90 p-5 sm:p-6 2xl:p-8 shadow-[0_12px_36px_-12px_rgba(15,23,42,0.08)] flex flex-col justify-between text-left h-[360px] sm:h-[385px] lg:h-[400px] 2xl:h-[480px] 3xl:h-[540px]"
          >
            <div>
              <div className="mb-3 2xl:mb-5">
                <span className="text-[10px] 2xl:text-xs font-mono tracking-wider uppercase text-sky-600 font-semibold block mb-0.5">
                  PROJECT ALLOCATION & RENTALS
                </span>
                <h3 className="text-lg sm:text-xl 2xl:text-2xl font-semibold tracking-tight text-[#0f172a]">
                  Request Server Availability
                </h3>
                <p className="text-[11px] 2xl:text-xs text-slate-500 leading-normal font-normal mt-0.5">
                  Submit your project requirements. Our engineering team will review cluster capacity and connect directly.
                </p>
              </div>

              {/* Inquiry Form */}
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-2.5">
                    <div>
                      <label className="text-[11px] font-medium text-slate-700 block mb-0.5">
                        Name & University / Organization
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dr. Rajesh Kumar, Robotics Lab"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/15 transition-all"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-medium text-slate-700 block mb-0.5">
                        Official Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@university.edu or official email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/15 transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      <div>
                        <label className="text-[11px] font-medium text-slate-700 block mb-0.5">
                          Project Domain
                        </label>
                        <select
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full px-2.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/15 transition-all"
                        >
                          <option>Autonomous Systems</option>
                          <option>AI / Deep Learning</option>
                          <option>Physics / CFD Sim</option>
                          <option>Academic Research</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-[11px] font-medium text-slate-700 block mb-0.5">
                          Rental Timeline
                        </label>
                        <select
                          value={formData.duration}
                          onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                          className="w-full px-2.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/15 transition-all"
                        >
                          <option>1–4 Weeks</option>
                          <option>A Few Days</option>
                          <option>Monthly</option>
                          <option>Milestone-Based</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0f172a] hover:bg-[#1e293b] text-white text-xs font-medium tracking-tight transition-all duration-200 shadow-md hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span>Checking Availability...</span>
                      ) : (
                        <>
                          <span>Submit Request</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-center"
                  >
                    <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                    <h4 className="text-sm font-semibold text-slate-950 mb-1">
                      Inquiry Received
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      Our systems engineering team will review cluster availability and contact your email within 24 hours to discuss project access.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-mono text-emerald-700 font-semibold hover:underline"
                    >
                      Submit another inquiry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Direct Official Contact Link */}
            <div className="pt-2.5 border-t border-slate-200/80 mt-2.5 flex items-center justify-between text-xs text-slate-500 font-mono">
              <span>Direct Queries:</span>
              <a
                href="mailto:official@novaliseo.com?subject=Server%20Infrastructure%20Rental%20Query"
                className="text-slate-900 font-medium hover:text-sky-600 transition-colors flex items-center gap-1"
              >
                <span>official@novaliseo.com</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
