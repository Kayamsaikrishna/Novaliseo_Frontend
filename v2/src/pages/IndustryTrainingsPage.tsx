import { motion } from "framer-motion";
import { ShaderBackground } from "../components/ShaderBackground";

export default function IndustryTrainingsPage() {
  return (
    <div className="min-h-screen bg-[#020617] pt-32 pb-24 text-white relative selection:bg-cyan-500/30 overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ShaderBackground />
        <div className="absolute inset-0 bg-gradient-to-br from-[#020617]/90 via-[#020617]/70 to-[#020617]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 space-y-6"
        >
          <div className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-cyan-500/10 border border-cyan-500/20">
             <span className="text-cyan-400 text-sm font-bold tracking-widest uppercase px-4">Empowering the Future Workforce</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter">
            INDUSTRY <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">TRAININGS</span>
          </h1>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg md:text-xl font-light leading-relaxed pt-6">
            Bridging the gap between academia and industry. We provide cutting-edge training programs for students and professionals in AI, Autonomous Systems, and Advanced Engineering.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-sm"
          >
            <h2 className="text-3xl font-bold text-white mb-6">For Students</h2>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-center gap-3"><span className="text-cyan-400 text-xl">•</span> Autonomous Drone Engineering</li>
              <li className="flex items-center gap-3"><span className="text-cyan-400 text-xl">•</span> AI & Computer Vision Bootcamp</li>
              <li className="flex items-center gap-3"><span className="text-cyan-400 text-xl">•</span> Embedded Systems & IoT</li>
              <li className="flex items-center gap-3"><span className="text-cyan-400 text-xl">•</span> Industrial Robotics</li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-sm"
          >
            <h2 className="text-3xl font-bold text-white mb-6">For Industry Professionals</h2>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-center gap-3"><span className="text-blue-400 text-xl">•</span> Enterprise AI Integration</li>
              <li className="flex items-center gap-3"><span className="text-blue-400 text-xl">•</span> Predictive Maintenance Implementation</li>
              <li className="flex items-center gap-3"><span className="text-blue-400 text-xl">•</span> Digital Twin & Smart Manufacturing</li>
              <li className="flex items-center gap-3"><span className="text-blue-400 text-xl">•</span> Defense & Maritime Autonomous Operations</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
