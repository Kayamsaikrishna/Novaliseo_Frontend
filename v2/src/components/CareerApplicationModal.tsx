import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Upload, 
  Loader2, 
  AtSign, 
  User, 
  Mail, 
  Github, 
  Globe, 
  FileText, 
  CheckCircle2, 
  X, 
  Sparkles,
  MapPin,
  Clock,
  Briefcase
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface JobRoleInfo {
  id: string;
  title: string;
  domain: string;
  location: string;
  workMode: string;
  type: string;
  image?: string;
  summary?: string;
}

interface CareerApplicationModalProps {
  role: JobRoleInfo | null;
  onClose: () => void;
  bannerImage?: string;
}

const FADE_UP_VARIANTS = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 380, damping: 28 } },
};

export default function CareerApplicationModal({
  role,
  onClose,
  bannerImage,
}: CareerApplicationModalProps) {
  const [candidateData, setCandidateData] = React.useState({
    name: "",
    email: "",
    github: "",
    portfolio: "",
    builtNote: "",
  });

  const [resumeFile, setResumeFile] = React.useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const fileInputRef = React.useRef<HTMLInputElement>(null);

  if (!role) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate high-reliability intake dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / 1048576).toFixed(1) + " MB";
  };

  const activeImage = bannerImage || role.image;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 bg-slate-950/70 backdrop-blur-md overflow-y-auto no-scrollbar">
      {/* Background Dim Dismissal */}
      <div className="fixed inset-0" onClick={onClose} />

      <motion.div
        role="dialog"
        aria-modal="true"
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        transition={{ type: "spring", damping: 26, stiffness: 350 }}
        className="relative w-full max-w-lg sm:max-w-xl max-h-[92vh] overflow-y-auto no-scrollbar rounded-3xl border border-slate-200/80 bg-white/95 dark:bg-slate-900/95 shadow-2xl backdrop-blur-2xl text-slate-900 dark:text-white z-10 my-auto"
      >
        {/* ================= 1. DECORATIVE BANNER IMAGE ================= */}
        {activeImage && (
          <div className="relative h-36 sm:h-44 w-full overflow-hidden bg-slate-950">
            <img
              src={activeImage}
              alt={role.title}
              className="w-full h-full object-cover brightness-[0.82] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Close Button Top Right */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/75 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-md border border-white/20 hover:scale-105 active:scale-95"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Role Header Pills on Banner */}
            <div className="absolute bottom-3 left-5 right-5 flex items-center justify-between text-left">
              <div>
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/25 border border-cyan-400/40 text-cyan-200 text-[10px] font-mono font-semibold uppercase">
                  {role.domain}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight drop-shadow-md mt-1 truncate">
                  {role.title}
                </h3>
              </div>
            </div>
          </div>
        )}

        {/* ================= 2. MODAL BODY ================= */}
        <div className="p-6 sm:p-8 text-left">
          {!isSubmitted ? (
            <motion.form
              initial="hidden"
              animate="show"
              variants={{
                show: { transition: { staggerChildren: 0.08 } },
              }}
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              {/* If no banner image, show clean text header */}
              {!activeImage && (
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[10px] font-mono font-semibold uppercase">
                      {role.domain}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight mt-1.5 text-slate-950 dark:text-white">
                      Apply: {role.title}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-all"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Location & Employment Info */}
              <motion.div variants={FADE_UP_VARIANTS} className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-mono">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-blue-600" />
                  {role.location}
                </span>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <Briefcase className="w-3.5 h-3.5 text-cyan-600" />
                  {role.type}
                </span>
                <span>•</span>
                <span className="text-emerald-600 font-semibold">100% Direct Review</span>
              </motion.div>

              {/* ================= RESUME / CV UPLOAD CARD ================= */}
              <motion.div
                variants={FADE_UP_VARIANTS}
                className="rounded-2xl border border-slate-200 dark:border-white/15 bg-slate-50/80 dark:bg-white/5 p-4 flex items-center justify-between gap-4 transition-all hover:border-blue-400"
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                />

                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-semibold truncate text-slate-900 dark:text-white">
                      {resumeFile ? resumeFile.name : "Resume / CV (PDF or DOCX)"}
                    </p>
                    <p className="text-[11px] text-slate-500 font-mono">
                      {resumeFile 
                        ? `${formatFileSize(resumeFile.size)} • Ready to submit` 
                        : "Up to 10MB • Direct engineering review"}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="shrink-0 px-4 py-2 rounded-xl border border-slate-300 dark:border-white/20 bg-white dark:bg-white/10 hover:bg-slate-100 dark:hover:bg-white/20 text-xs font-semibold text-slate-900 dark:text-white transition-all shadow-xs flex items-center gap-1.5 cursor-pointer active:scale-95"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>{resumeFile ? "Change" : "Upload"}</span>
                </button>
              </motion.div>

              {/* ================= INPUT FIELDS ================= */}
              <motion.div variants={FADE_UP_VARIANTS} className="grid sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-[11px] font-mono font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      value={candidateData.name}
                      onChange={(e) => setCandidateData({ ...candidateData, name: e.target.value })}
                      placeholder="e.g., Arjun Rao"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 dark:border-white/20 bg-white dark:bg-white/5 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-[11px] font-mono font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      required
                      value={candidateData.email}
                      onChange={(e) => setCandidateData({ ...candidateData, email: e.target.value })}
                      placeholder="you@domain.com"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 dark:border-white/20 bg-white dark:bg-white/5 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div variants={FADE_UP_VARIANTS} className="grid sm:grid-cols-2 gap-4">
                {/* GitHub Profile URL */}
                <div>
                  <label className="block text-[11px] font-mono font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">
                    GitHub / GitLab *
                  </label>
                  <div className="relative">
                    <Github className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="url"
                      required
                      value={candidateData.github}
                      onChange={(e) => setCandidateData({ ...candidateData, github: e.target.value })}
                      placeholder="https://github.com/..."
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 dark:border-white/20 bg-white dark:bg-white/5 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                </div>

                {/* Portfolio / CAD Link */}
                <div>
                  <label className="block text-[11px] font-mono font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">
                    Portfolio / CAD / Flight Log
                  </label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="url"
                      value={candidateData.portfolio}
                      onChange={(e) => setCandidateData({ ...candidateData, portfolio: e.target.value })}
                      placeholder="https://portfolio.com or Drive"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 dark:border-white/20 bg-white dark:bg-white/5 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Physical Build Note */}
              <motion.div variants={FADE_UP_VARIANTS}>
                <label className="block text-[11px] font-mono font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">
                  Remarkable Physical Project or Challenge Solved
                </label>
                <textarea
                  rows={3}
                  value={candidateData.builtNote}
                  onChange={(e) => setCandidateData({ ...candidateData, builtNote: e.target.value })}
                  placeholder="Tell us about a physical autonomous system, PCB, non-linear controller, or hardware rig you built and debugged hands-on..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-white/20 bg-white dark:bg-white/5 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all leading-relaxed"
                />
              </motion.div>

              {/* Submit & Secondary Actions */}
              <motion.div variants={FADE_UP_VARIANTS} className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <a
                  href={`mailto:careers@novaliseo.com?subject=Application:%20${encodeURIComponent(role.title)}`}
                  className="text-xs text-blue-600 dark:text-cyan-400 hover:underline font-mono"
                >
                  Prefer email dispatch? Click here
                </a>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-7 py-3 rounded-full bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-semibold text-xs sm:text-sm transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Dossier...</span>
                    </>
                  ) : (
                    <span>Submit Application</span>
                  )}
                </button>
              </motion.div>
            </motion.form>
          ) : (
            /* ================= 3. SUCCESS STATE ================= */
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-950 dark:text-white">
                Dossier Transmitted!
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-slate-900 dark:text-white">{candidateData.name}</span>. Your portfolio and technical profile for <span className="font-semibold">{role.title}</span> have reached our engineering lead.
              </p>
              <p className="text-xs text-slate-500 font-mono">
                We review hardware builds directly and will respond within 3 business days.
              </p>
              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="px-8 py-3 rounded-full bg-slate-950 dark:bg-white text-white dark:text-slate-950 text-sm font-semibold hover:opacity-90 transition-all cursor-pointer shadow-md"
                >
                  Return to Careers
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
