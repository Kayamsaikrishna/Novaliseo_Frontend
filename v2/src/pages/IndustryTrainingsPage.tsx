import { motion } from "framer-motion";
import { ShaderBackground } from "../components/ShaderBackground";
import { ChevronRight } from "lucide-react";

export default function IndustryTrainingsPage() {
  return (
    <div className="min-h-screen bg-[#020617] pt-40 pb-32 text-white relative selection:bg-cyan-500/30 overflow-hidden">
      
      {/* Background System */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ShaderBackground />
        
        {/* Immersive mesh gradients for the hero */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-500/10 blur-[150px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-600/10 blur-[150px] animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />
        <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-purple-600/5 blur-[150px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }} />
        
        <div className="absolute inset-0 bg-[#020617]/80 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Massive Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-32 space-y-8"
        >
          <div className="inline-flex items-center justify-center p-[1px] mb-4 rounded-full bg-gradient-to-r from-cyan-500/50 via-blue-500/50 to-purple-500/50">
             <div className="bg-[#020617] rounded-full px-6 py-2">
               <span className="text-cyan-400 text-xs md:text-sm font-bold tracking-[0.2em] uppercase">Empowering the Future Workforce</span>
             </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tighter leading-[0.9] drop-shadow-2xl">
            INDUSTRY<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">TRAININGS</span>
          </h1>
          
          <p className="text-slate-400 max-w-3xl mx-auto text-xl md:text-2xl font-light leading-relaxed pt-8">
            Bridging the gap between academia and industry. We provide cutting-edge training programs for students and professionals in AI, Autonomous Systems, and Advanced Engineering.
          </p>
        </motion.div>

        {/* Polished Glassmorphic Cards */}
        <div className="grid lg:grid-cols-2 gap-10">
          
          {/* Student Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group relative rounded-[3rem] bg-white/[0.02] border border-white/10 p-10 md:p-16 backdrop-blur-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
            {/* Inner Glows */}
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] -z-10 group-hover:bg-cyan-500/20 transition-colors duration-700" />
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">For <span className="text-cyan-400">Students</span></h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed font-light">
              Gain hands-on experience with industry-grade tools. Our student programs are designed to fast-track your career in sovereign tech.
            </p>
            
            <ul className="space-y-6">
              {['Autonomous Drone Engineering', 'AI & Computer Vision Bootcamp', 'Embedded Systems & IoT', 'Industrial Robotics'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-300 font-medium text-lg group/item cursor-pointer">
                  <div className="p-2 rounded-full bg-cyan-500/10 text-cyan-400 group-hover/item:bg-cyan-500 group-hover/item:text-white transition-all duration-300">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                  <span className="group-hover/item:text-white transition-colors duration-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Industry Professional Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative rounded-[3rem] bg-white/[0.02] border border-white/10 p-10 md:p-16 backdrop-blur-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
            {/* Inner Glows */}
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -z-10 group-hover:bg-blue-500/20 transition-colors duration-700" />

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">For <span className="text-blue-400">Professionals</span></h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed font-light">
              Upskill your workforce with targeted programs focusing on AI integration, digital twins, and autonomous operations.
            </p>
            
            <ul className="space-y-6">
              {['Enterprise AI Integration', 'Predictive Maintenance Implementation', 'Digital Twin & Smart Manufacturing', 'Defense & Maritime Autonomous Ops'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-300 font-medium text-lg group/item cursor-pointer">
                  <div className="p-2 rounded-full bg-blue-500/10 text-blue-400 group-hover/item:bg-blue-500 group-hover/item:text-white transition-all duration-300">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                  <span className="group-hover/item:text-white transition-colors duration-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
}
