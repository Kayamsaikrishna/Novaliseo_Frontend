import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  Radio, 
  ArrowRight, 
  Sparkles, 
  MessageSquarePlus,
  Clock,
  Lock
} from "lucide-react";

interface ReviewSubmission {
  organization: string;
  contactEmail: string;
  projectDomain: string;
  reviewText: string;
}

export default function QuoteDeck() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<ReviewSubmission>({
    organization: "",
    contactEmail: "",
    projectDomain: "Autonomous Robotics & Swarms",
    reviewText: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section 
      id="reviews"
      className="relative w-full overflow-hidden bg-gradient-to-b from-slate-100/60 via-slate-50/80 to-white text-[#0f172a] min-h-screen lg:h-screen flex flex-col justify-center py-14 lg:py-0 px-4 sm:px-8 lg:px-12 2xl:px-16 selection:bg-sky-500/20"
    >
      {/* Background Ambience: Precision grid & soft ambient glows */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(148, 163, 184, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(148, 163, 184, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 40%, transparent 95%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 40%, transparent 95%)",
        }}
      />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-sky-100/40 rounded-full blur-[160px] pointer-events-none -z-0" />

      <div className="relative z-10 max-w-7xl 2xl:max-w-[1650px] 3xl:max-w-[1900px] mx-auto w-full">
        
        {/* ================= COMPACT HEADER: AUTHENTIC POSITIONING ================= */}
        <div className="max-w-3xl 2xl:max-w-4xl mb-6 lg:mb-8 2xl:mb-12 text-left">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
              <span className="text-[10px] sm:text-[11px] font-mono tracking-wider uppercase text-sky-700 font-semibold">
                PARTNER REVIEWS · INTAKE & VERIFICATION PORTAL
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-medium tracking-[-0.03em] text-[#0f172a] leading-[1.12] mb-1.5 sm:mb-2">
              Verified Mission Reviews & Field Debriefs.
            </h2>

            <p className="text-xs sm:text-sm lg:text-base text-slate-600 font-normal leading-relaxed max-w-2xl">
              Novaliseo upholds zero fabricated testimonials. As active deployments conclude and clearance protocols finalize, genuine verified partner debriefs and telemetry reviews will be published directly here.
            </p>
          </motion.div>
        </div>

        {/* ================= 2-COLUMN ENGAGING BALANCED HUB ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 2xl:gap-8 items-stretch">
          
          {/* LEFT: LIVE DEPLOYMENT PIPELINE & VERIFICATION BOARD (7 COLS) */}
          <motion.div 
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 rounded-2xl sm:rounded-3xl bg-white/90 backdrop-blur-xl border border-slate-200/90 p-5 sm:p-7 shadow-[0_12px_36px_-12px_rgba(15,23,42,0.06)] flex flex-col justify-between text-left"
          >
            <div>
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-sky-600" />
                  <span className="text-xs font-mono font-semibold tracking-wider uppercase text-slate-800">
                    Active Deployments Awaiting Review Release
                  </span>
                </div>
                <span className="text-[10px] font-mono font-medium text-slate-400 bg-slate-50 px-2 py-0.5 rounded-full">
                  3 Pipeline Tracks
                </span>
              </div>

              {/* 3 Pipeline Tracks */}
              <div className="space-y-3">
                
                {/* Track 1: GPS-Denied Swarm Navigation */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50/70 border border-slate-200/60 hover:bg-white hover:border-sky-200 hover:shadow-xs transition-all duration-200">
                  <div className="flex items-center justify-between gap-3 mb-1.5">
                    <div className="flex items-center gap-2">
                      <Radio className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                      <span className="text-xs font-semibold text-slate-900">
                        Autonomous Flight & GPS-Denied Simulation
                      </span>
                    </div>
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200/80">
                      STAGE: CLEARANCE AUDIT
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-normal leading-relaxed">
                    Multi-agent visual-inertial odometry testing across defense simulation theaters. Official mission debrief will be added upon declassification.
                  </p>
                </div>

                {/* Track 2: Sovereign Compute Cluster Rentals */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50/70 border border-slate-200/60 hover:bg-white hover:border-sky-200 hover:shadow-xs transition-all duration-200">
                  <div className="flex items-center justify-between gap-3 mb-1.5">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                      <span className="text-xs font-semibold text-slate-900">
                        High-Throughput Deep-Tech Compute Rentals
                      </span>
                    </div>
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-sky-50 text-sky-700 font-semibold border border-sky-200/80">
                      STAGE: BENCHMARK LOGGING
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-normal leading-relaxed">
                    University robotics labs & enterprise teams verifying model training throughput on Bengaluru clusters. Client reviews publish as projects wrap.
                  </p>
                </div>

                {/* Track 3: Air-Gapped Embedded Silicon */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50/70 border border-slate-200/60 hover:bg-white hover:border-sky-200 hover:shadow-xs transition-all duration-200">
                  <div className="flex items-center justify-between gap-3 mb-1.5">
                    <div className="flex items-center gap-2">
                      <Lock className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                      <span className="text-xs font-semibold text-slate-900">
                        Sovereign Core IP & Silicon Trust Enclaves
                      </span>
                    </div>
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 font-semibold border border-indigo-200/80">
                      STAGE: FIELD TRIALS
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-normal leading-relaxed">
                    Hardened silicon thermal enclosures and deterministic logic buses undergoing operational stress tests. Full case report will be posted here.
                  </p>
                </div>

              </div>
            </div>

            {/* Bottom Transparency Notice */}
            <div className="pt-3.5 mt-3.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="text-[11px] font-mono">
                Verified reviews automatically appear in this feed once approved by partners.
              </span>
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            </div>
          </motion.div>

          {/* RIGHT: INTERACTIVE PARTNER ENGAGEMENT & SUBMISSION PORTAL (5 COLS) */}
          <motion.div 
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 rounded-2xl sm:rounded-3xl bg-white/95 backdrop-blur-xl border border-slate-200/90 p-5 sm:p-7 shadow-[0_12px_36px_-12px_rgba(15,23,42,0.06)] flex flex-col justify-between text-left"
          >
            <AnimatePresence mode="wait">
              {!isFormOpen ? (
                /* Mode 1: Engaging Partner Invitation */
                <motion.div
                  key="invitation"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-[10px] font-mono font-semibold mb-3">
                      <Sparkles className="w-3 h-3" />
                      <span>PARTNER PARTICIPATION</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-[#0f172a] mb-2">
                      Deploying with Novaliseo?
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                      Are you a university research group, pilot collaborator, or enterprise cluster partner? Share your verified feedback or operational debrief with our systems engineering team.
                    </p>

                    {/* Feature bullets */}
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                        <span>Direct review by engineering leadership</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                        <span>Option for declassified public co-branding</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                        <span>Featured placement on this live verification wall</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2.5 pt-4 border-t border-slate-100">
                    <button
                      onClick={() => setIsFormOpen(true)}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0f172a] hover:bg-[#1e293b] text-white text-xs font-semibold tracking-tight transition-all shadow-md hover:scale-[1.01] active:scale-[0.99]"
                    >
                      <MessageSquarePlus className="w-4 h-4" />
                      <span>Submit Project Feedback / Review</span>
                    </button>

                    <a
                      href="mailto:official@novaliseo.com?subject=Partner%20Deployment%20Review"
                      className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-mono text-slate-600 hover:text-sky-600 transition-colors"
                    >
                      <span>Direct Debrief Submission via Email</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </motion.div>
              ) : !submitted ? (
                /* Mode 2: Interactive Review Submission Form */
                <motion.div
                  key="form"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono tracking-wider uppercase text-sky-600 font-semibold">
                        SUBMIT PROJECT DEBRIEF
                      </span>
                      <button
                        onClick={() => setIsFormOpen(false)}
                        className="text-xs text-slate-400 hover:text-slate-700 transition-colors font-mono"
                      >
                        Cancel
                      </button>
                    </div>

                    <h4 className="text-base sm:text-lg font-semibold text-[#0f172a] mb-1">
                      Share Your Deployment Experience
                    </h4>
                    <p className="text-[11px] text-slate-500 mb-3">
                      Your debrief will be reviewed by our systems team and added here once verified.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-2.5">
                      <div>
                        <label className="text-[11px] font-medium text-slate-700 block mb-0.5">
                          Organization / University Lab
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Robotics Center of Excellence"
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          className="w-full px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/15"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="text-[11px] font-medium text-slate-700 block mb-0.5">
                            Official Email
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="name@domain.edu"
                            value={formData.contactEmail}
                            onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                            className="w-full px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/15"
                          />
                        </div>

                        <div>
                          <label className="text-[11px] font-medium text-slate-700 block mb-0.5">
                            Focus Area
                          </label>
                          <select
                            value={formData.projectDomain}
                            onChange={(e) => setFormData({ ...formData, projectDomain: e.target.value })}
                            className="w-full px-2 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/15"
                          >
                            <option>Autonomous Robotics</option>
                            <option>Compute Cluster Rental</option>
                            <option>Hardware Silicon IP</option>
                            <option>Academic Research</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="text-[11px] font-medium text-slate-700 block mb-0.5">
                          Deployment Feedback / Review
                        </label>
                        <textarea
                          required
                          rows={2}
                          placeholder="Share technical performance, reliability, and engineering collaboration notes..."
                          value={formData.reviewText}
                          onChange={(e) => setFormData({ ...formData, reviewText: e.target.value })}
                          className="w-full px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/15 resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0f172a] hover:bg-[#1e293b] text-white text-xs font-semibold shadow-md transition-all mt-1"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Submit for Verification & Publication</span>
                      </button>
                    </form>
                  </div>
                </motion.div>
              ) : (
                /* Mode 3: Success Confirmation */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-center my-auto"
                >
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                  <h4 className="text-base font-semibold text-slate-950 mb-1">
                    Review Submitted to Engineering Team
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Thank you. Your project debrief will be verified against system telemetry and published directly to this portal upon partner clearance.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setIsFormOpen(false);
                    }}
                    className="text-xs font-mono text-emerald-700 font-semibold hover:underline"
                  >
                    Done
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
