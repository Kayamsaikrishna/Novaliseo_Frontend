import React from 'react';
import { motion } from 'framer-motion';
import { Anchor, Waves, Eye, ShieldAlert, Navigation, Ship } from 'lucide-react';

const MarinePresentation = () => {
  return (
    <div className="relative w-full pt-24 pb-40 text-white selection:bg-blue-500/30 font-sans">
      
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 lg:px-8 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto flex flex-col items-center gap-6"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md mb-6">
            <Anchor className="w-5 h-5 text-blue-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Maritime Intelligence</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[100px] font-black leading-[0.9] tracking-tighter uppercase mb-8">
            Marine <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">Inspection Systems</span>
          </h1>

          <p className="text-xl lg:text-2xl font-light text-slate-400 leading-relaxed max-w-3xl mb-12">
            Advanced underwater and surface robotics for structural analysis, autonomous monitoring, and maritime security.
          </p>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="relative py-32 z-10 border-y border-white/5 bg-[#020617]/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
             <h2 className="text-sm font-bold uppercase tracking-[0.5em] text-blue-400 mb-4">// Capabilities</h2>
             <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Sub-Surface Operations</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Waves, title: 'Hull Inspection', desc: 'Autonomous scanning of vessel hulls to detect micro-fractures, corrosion, and biofouling without drydocking.' },
              { icon: Eye, title: 'Sonar Mapping', desc: 'High-resolution acoustic imaging for seabed topography and underwater infrastructure analysis.' },
              { icon: ShieldAlert, title: 'Threat Detection', desc: 'Real-time AI analysis for identifying anomalies, unauthorized access, or hazardous materials in ports.' }
            ].map((feature, idx) => (
              <div key={idx} className="p-10 rounded-3xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 hover:border-blue-500/30 transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[40px] group-hover:bg-blue-500/20 transition-colors" />
                <feature.icon className="w-12 h-12 text-blue-400 mb-8" />
                <h4 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight">{feature.title}</h4>
                <p className="text-slate-400 leading-relaxed font-light">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Specs */}
      <section className="relative py-32 z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="p-12 lg:p-20 rounded-[3rem] bg-blue-950/20 border border-blue-900/30 relative overflow-hidden">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
                <div>
                  <h3 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-8">Deep Sea Resilience</h3>
                  <p className="text-slate-300 text-lg leading-relaxed mb-12">
                    Engineered to withstand extreme hydrostatic pressure and corrosive environments while maintaining stable communication links.
                  </p>
                  
                  <div className="space-y-8">
                    {[
                      { label: 'Depth Rating', value: '300 Meters' },
                      { label: 'Endurance', value: '8+ Hours' },
                      { label: 'Propulsion', value: 'Omnidirectional' }
                    ].map((stat, i) => (
                      <div key={i} className="border-b border-blue-500/20 pb-4">
                        <p className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-2">{stat.label}</p>
                        <p className="text-3xl font-black uppercase text-white">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-center relative">
                   <div className="w-full aspect-square rounded-full border border-blue-500/20 flex items-center justify-center relative overflow-hidden bg-black/20">
                     <div className="absolute inset-0 bg-blue-500/10 blur-[50px] animate-pulse" />
                     <Ship className="w-32 h-32 text-blue-500/30 relative z-10" />
                     <div className="absolute bottom-10 text-center w-full z-10">
                        <p className="text-sm font-mono text-blue-400 uppercase tracking-widest">Marine ROV Platform</p>
                     </div>
                   </div>
                </div>
             </div>
           </div>
        </div>
      </section>

    </div>
  );
};

export default MarinePresentation;
