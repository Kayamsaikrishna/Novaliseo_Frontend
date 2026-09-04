import { motion } from "framer-motion";
import collabBg from "../assets/collab_visual_1788369933479.jpg";

export default function ResearchCollaborationsPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-white relative selection:bg-cyan-500/30 overflow-hidden flex flex-col lg:flex-row">
      
      {/* Left Column: Visual Split Screen */}
      <div className="relative w-full lg:w-5/12 min-h-[40vh] lg:min-h-screen flex items-end p-10 lg:p-16 border-r border-white/10 z-10">
        <div className="absolute inset-0 z-0">
          <img src={collabBg} alt="Collaborative AI Neural Network" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#020617]" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 w-full"
        >
          <div className="inline-flex items-center justify-center p-[1px] mb-6 rounded-full bg-gradient-to-r from-cyan-500/50 to-blue-500/50">
             <div className="bg-[#020617] rounded-full px-5 py-2">
               <span className="text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase">Innovate Together</span>
             </div>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1] mb-6 drop-shadow-2xl">
            RESEARCH<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">COLLABORATIONS</span>
          </h1>
          <p className="text-slate-300 text-lg font-light leading-relaxed max-w-sm drop-shadow-lg">
            We partner with leading universities and visionary companies to push the boundaries of automation, digital technologies, and advanced engineering.
          </p>
        </motion.div>
      </div>

      {/* Right Column: Premium Form */}
      <div className="relative w-full lg:w-7/12 flex items-center justify-center p-6 sm:p-12 lg:p-20 z-10">
        
        {/* Subtle Background Glows on the Form Side */}
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-cyan-500/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-purple-500/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-2xl bg-white/[0.02] border border-white/10 p-10 sm:p-14 rounded-[3rem] backdrop-blur-xl shadow-2xl"
        >
          <h2 className="text-3xl font-bold text-white mb-10 tracking-tight">Apply for a Partnership</h2>
          
          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Floating Label Input: Organization Name */}
              <div className="relative group">
                <input type="text" id="orgName" className="peer w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder-transparent" placeholder="Organization Name" required />
                <label htmlFor="orgName" className="absolute left-0 top-3 text-slate-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-cyan-400 font-medium">Organization Name *</label>
              </div>
              
              {/* Floating Label Select: Organization Type */}
              <div className="relative group">
                <select id="orgType" className="peer w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors appearance-none cursor-pointer" required defaultValue="">
                  <option value="" disabled className="bg-slate-900 text-slate-400">Select Type *</option>
                  <option value="university" className="bg-slate-900">University / Academia</option>
                  <option value="company" className="bg-slate-900">Company / Enterprise</option>
                  <option value="research_institute" className="bg-slate-900">Research Institute</option>
                  <option value="other" className="bg-slate-900">Other</option>
                </select>
                <div className="absolute right-0 top-4 pointer-events-none text-slate-400 group-hover:text-cyan-400 transition-colors">▼</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Floating Label Input: Contact Person */}
              <div className="relative group">
                <input type="text" id="contactName" className="peer w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder-transparent" placeholder="Contact Person Name" required />
                <label htmlFor="contactName" className="absolute left-0 top-3 text-slate-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-cyan-400 font-medium">Contact Person Name *</label>
              </div>
              
              {/* Floating Label Input: Email */}
              <div className="relative group">
                <input type="email" id="email" className="peer w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder-transparent" placeholder="Email Address" required />
                <label htmlFor="email" className="absolute left-0 top-3 text-slate-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-cyan-400 font-medium">Email Address *</label>
              </div>
            </div>

            {/* Floating Label Input: Domain of Interest */}
            <div className="relative group">
              <input type="text" id="domainInterest" className="peer w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder-transparent" placeholder="Research Area" required />
              <label htmlFor="domainInterest" className="absolute left-0 top-3 text-slate-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-cyan-400 font-medium">Research Area / Domain of Interest *</label>
            </div>

            {/* Floating Label Textarea: Proposal */}
            <div className="relative group pt-4">
              <textarea id="proposal" rows={4} className="peer w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder-transparent resize-none" placeholder="Collaboration Proposal" required></textarea>
              <label htmlFor="proposal" className="absolute left-4 top-8 text-slate-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-8 peer-focus:top-0 peer-focus:text-xs peer-focus:text-cyan-400 font-medium bg-[#020617] px-2 rounded-full">Collaboration Proposal / Message *</label>
            </div>

            <button type="button" className="group relative w-full py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-bold tracking-widest uppercase overflow-hidden transition-all hover:border-cyan-500/50 mt-4">
              {/* Animated Sweep Gradient */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent -translate-x-full group-hover:animate-[sweep_1.5s_ease-in-out_infinite]" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all">Submit Request</span>
            </button>
            
          </form>
        </motion.div>
      </div>

      {/* Global CSS for Sweep Animation */}
      <style>{`
        @keyframes sweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>

    </div>
  );
}
