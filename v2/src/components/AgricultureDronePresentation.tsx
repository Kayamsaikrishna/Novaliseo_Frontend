import React from 'react';
import { motion } from 'framer-motion';
import { Tractor, Leaf, Droplets, MapPin, ScanLine, Sprout } from 'lucide-react';

const AgricultureDronePresentation = () => {
  return (
    <div className="relative w-full pt-24 pb-40 text-white selection:bg-green-500/30 font-sans">
      
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 lg:px-8 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto flex flex-col items-center gap-6"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-green-500/30 bg-green-500/10 backdrop-blur-md mb-6">
            <Tractor className="w-5 h-5 text-green-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-green-400">Agri-Intelligence</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[100px] font-black leading-[0.9] tracking-tighter uppercase mb-8">
            Precision <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Agriculture Drone</span>
          </h1>

          <p className="text-xl lg:text-2xl font-light text-slate-400 leading-relaxed max-w-3xl mb-12">
            Deploying sovereign aerial intelligence to optimize crop yields, monitor soil health, and revolutionize modern farming.
          </p>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="relative py-32 z-10 border-y border-white/5 bg-[#020617]/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
             <h2 className="text-sm font-bold uppercase tracking-[0.5em] text-green-400 mb-4">// Capabilities</h2>
             <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Aerial Farming Optimization</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Sprout, title: 'Crop Health Mapping', desc: 'Multispectral imaging identifies nutrient deficiencies and disease outbreaks before they become visible to the naked eye.' },
              { icon: Droplets, title: 'Precision Spraying', desc: 'Targeted application of fertilizers and pesticides reduces chemical usage by up to 30% while maximizing effectiveness.' },
              { icon: ScanLine, title: 'Topographical Analysis', desc: 'High-resolution 3D terrain mapping for optimal irrigation planning and soil erosion prevention.' }
            ].map((feature, idx) => (
              <div key={idx} className="p-10 rounded-3xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 hover:border-green-500/30 transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-[40px] group-hover:bg-green-500/20 transition-colors" />
                <feature.icon className="w-12 h-12 text-green-400 mb-8" />
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
           <div className="p-12 lg:p-20 rounded-[3rem] bg-green-950/20 border border-green-900/30 relative overflow-hidden">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
                <div>
                  <h3 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-8">Built for the Fields</h3>
                  <p className="text-slate-300 text-lg leading-relaxed mb-12">
                    Engineered to withstand harsh agricultural environments while delivering real-time actionable data to farmers.
                  </p>
                  
                  <div className="space-y-8">
                    {[
                      { label: 'Flight Time', value: '45+ Minutes' },
                      { label: 'Payload Capacity', value: 'Up to 20kg' },
                      { label: 'Coverage', value: '100 Acres / Flight' }
                    ].map((stat, i) => (
                      <div key={i} className="border-b border-green-500/20 pb-4">
                        <p className="text-xs font-bold text-green-500 uppercase tracking-widest mb-2">{stat.label}</p>
                        <p className="text-3xl font-black uppercase text-white">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-center relative">
                   {/* Placeholder for Drone Image */}
                   <div className="w-full aspect-square rounded-full border border-green-500/20 flex items-center justify-center relative overflow-hidden bg-black/20">
                     <div className="absolute inset-0 bg-green-500/10 blur-[50px] animate-pulse" />
                     <Tractor className="w-32 h-32 text-green-500/30 relative z-10" />
                     <div className="absolute bottom-10 text-center w-full z-10">
                        <p className="text-sm font-mono text-green-400 uppercase tracking-widest">Agri-Drone Platform</p>
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

export default AgricultureDronePresentation;
