import { motion } from "framer-motion";
import { ShaderBackground } from "../components/ShaderBackground";

export default function ResearchCollaborationsPage() {
  return (
    <div className="min-h-screen bg-[#020617] pt-32 pb-24 text-white relative selection:bg-cyan-500/30 overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ShaderBackground />
        <div className="absolute inset-0 bg-gradient-to-br from-[#020617]/90 via-[#020617]/70 to-[#020617]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-6"
        >
          <div className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-cyan-500/10 border border-cyan-500/20">
             <span className="text-cyan-400 text-sm font-bold tracking-widest uppercase px-4">Innovate Together</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter">
            RESEARCH <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">COLLABORATIONS</span>
          </h1>
          <p className="text-slate-400 text-lg font-light leading-relaxed pt-4">
            We partner with leading universities, institutions, and visionary companies to push the boundaries of AI, robotics, and advanced engineering. Apply for a collaboration below.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-md"
        >
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">Organization Name *</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="University or Company Name" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">Organization Type *</label>
                <select className="w-full bg-[#0f172a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" required>
                  <option value="">Select Type</option>
                  <option value="university">University / Academia</option>
                  <option value="company">Company / Enterprise</option>
                  <option value="research_institute">Research Institute</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">Contact Person Name *</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="John Doe" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">Email Address *</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="john@example.com" required />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-300">Research Area / Domain of Interest *</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="e.g. AI in Drone Navigation, Healthcare Intelligence..." required />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-300">Collaboration Proposal or Message *</label>
              <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Briefly describe the proposed research or collaboration goals..." required></textarea>
            </div>

            <button type="button" className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all">
              Submit Collaboration Request
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
