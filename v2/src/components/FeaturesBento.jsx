import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, Network, Zap } from 'lucide-react';

const FeaturesBento = () => {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden" id="solutions">
      {/* Background glow for integration with Hero */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6">
              Intelligence at the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Absolute Edge.
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed">
              We specialize in decentralized, sovereign platforms that process complex environments in real-time. Powering advanced industries without reliance on vulnerable clouds.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[380px]">
          
          {/* Main Large Card (Spans 2 columns on desktop) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 relative group rounded-[2rem] bg-white/5 border border-white/10 overflow-hidden"
          >
            {/* Hover Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
              <div className="mb-4 w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                <Cpu className="text-blue-400 w-6 h-6" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Native Silicon Core</h3>
              <p className="text-slate-400 font-light max-w-md">100% locally developed processor architectures designed for extreme resilience and sub-millisecond decision cycles.</p>
            </div>
            
            {/* Abstract Graphic Element */}
            <div className="absolute top-0 right-0 w-[80%] h-[80%] opacity-30 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none">
                <div className="absolute top-10 right-10 w-64 h-64 border border-blue-500/20 rounded-full animate-pulse" />
                <div className="absolute top-20 right-20 w-44 h-44 border-[2px] border-cyan-500/20 rounded-full" />
                <div className="absolute top-32 right-32 w-20 h-20 bg-blue-500/20 blur-2xl rounded-full" />
            </div>
          </motion.div>

          {/* Secondary Card (Spans 1 col, top right) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative group rounded-[2rem] bg-white/5 border border-white/10 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30">
                <Network className="text-cyan-400 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Swarm Topology</h3>
                <p className="text-sm text-slate-400 font-light">Decentralized mesh networking that heals instantly when nodes fail.</p>
              </div>
            </div>
          </motion.div>

          {/* Third Card (Spans 1 col, bottom left) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-start-1 relative group rounded-[2rem] bg-white/5 border border-white/10 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
                <Zap className="text-purple-400 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Zero-Latency Edge</h3>
                <p className="text-sm text-slate-400 font-light">Eradicating cloud dependency for immediate, localized logic execution.</p>
              </div>
            </div>
          </motion.div>

          {/* Fourth Card (Spans 2 cols, bottom right) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-2 relative group rounded-[2rem] bg-white/5 border border-white/10 overflow-hidden"
          >
             <div className="absolute inset-0 bg-gradient-to-tl from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="absolute inset-0 p-8 flex sm:flex-row flex-col items-start sm:items-center justify-between z-20 gap-6">
              <div className="max-w-sm">
                <div className="mb-4 w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                  <Shield className="text-emerald-400 w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Post-Quantum Trust</h3>
                <p className="text-slate-400 font-light">Hardware-hardened enclaves protecting core algorithms against advanced cryptographic interception.</p>
              </div>
              
              {/* Data streams visual */}
              <div className="flex-1 w-full h-full min-h-[100px] flex items-center justify-end overflow-hidden opacity-50 group-hover:opacity-80 transition-opacity">
                 <div className="flex flex-col gap-2 w-full max-w-[200px]">
                    {[40, 70, 45, 90, 30].map((width, i) => (
                      <motion.div 
                        key={i}
                        animate={{ opacity: [0.3, 1, 0.3], x: [0, 10, 0] }}
                        transition={{ duration: 2 + i * 0.5, repeat: Infinity }}
                        className="h-1 bg-emerald-500/40 rounded-full"
                        style={{ width: `${width}%` }}
                      />
                    ))}
                 </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesBento;
