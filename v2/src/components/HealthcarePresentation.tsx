import React from 'react';
import { motion } from 'framer-motion';
import { CuraVoxSection } from './CuraVoxSection';
import { HeartPulse, Search, CalendarCheck, ShieldCheck, Stethoscope, Building2, PlaneTakeoff, Globe2 } from 'lucide-react';

const HealthcarePresentation = () => {
  return (
    <div className="relative w-full pt-24 pb-40 text-white selection:bg-cyan-500/30 font-sans">
      
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 lg:px-8 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto flex flex-col items-center gap-6"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md mb-6">
            <HeartPulse className="w-5 h-5 text-cyan-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Global Health Card</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[100px] font-black leading-[0.9] tracking-tighter uppercase mb-8">
            Smart Healthcare <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Medical Tourism</span>
          </h1>

          <p className="text-xl lg:text-2xl font-light text-slate-400 leading-relaxed max-w-3xl mb-12">
            Connecting patients with the right healthcare, at the right time, through one trusted platform.
          </p>

          <a 
            href="https://peppy-florentine-5f7b4a.netlify.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-cyan-600 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-cyan-500 transition-colors shadow-[0_0_30px_rgba(8,145,178,0.4)]"
          >
            Explore Platform Demo
          </a>
        </motion.div>
      </section>

      {/* Vision & Objectives */}
      <section className="relative py-32 z-10 border-y border-white/5 bg-[#020617]/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-sm font-bold uppercase tracking-[0.5em] text-emerald-400 mb-6">// Our Vision</h2>
            <h3 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-tight">
              A Trusted Healthcare Marketplace
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              Create a trusted marketplace where patients can compare hospitals, doctors, treatment packages and outcomes before booking.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { title: 'Objectives', items: ['Simplify healthcare discovery', 'Enable better comparison', 'Provide transparent information', 'Connect the care journey'] },
              { title: 'Benefits', items: ['Better patient choices', 'Convenient access', 'Care coordination', 'Provider visibility'] }
            ].map((block, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-emerald-500/30 transition-colors">
                <h4 className="text-xl font-bold uppercase text-white mb-6">{block.title}</h4>
                <ul className="space-y-4">
                  {block.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works - Patient Journey */}
      <section className="relative py-32 z-10">
         <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-sm font-bold uppercase tracking-[0.5em] text-cyan-400 mb-16 text-center">// How It Works</h2>
            
            <div className="flex flex-wrap justify-center gap-4 lg:gap-8 mb-24">
              {['DISCOVER', 'COMPARE', 'CHOOSE', 'BOOK', 'CARE'].map((step, idx, arr) => (
                <div key={idx} className="flex items-center gap-4 lg:gap-8">
                  <div className="px-6 py-3 rounded-full border border-cyan-500/20 bg-cyan-950/30 text-cyan-400 font-bold tracking-widest text-sm shadow-lg shadow-cyan-900/20">
                    {step}
                  </div>
                  {idx < arr.length - 1 && <span className="text-cyan-500/50">→</span>}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Search, title: 'Patient Requirement', desc: 'Find treatments, doctors & hospitals' },
                { icon: Stethoscope, title: 'Treatment Selection', desc: 'Compare and select recommended doctors' },
                { icon: PlaneTakeoff, title: 'Travel & Accommodation', desc: 'Embassy, Medical Visa & Travel Services' },
                { icon: ShieldCheck, title: 'Treatment & Follow-up', desc: 'Care execution and post-care coordination' }
              ].map((step, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-[40px] group-hover:bg-cyan-500/20 transition-colors" />
                  <step.icon className="w-10 h-10 text-cyan-400 mb-6" />
                  <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* Global Reach */}
      <section className="relative py-32 z-10 border-y border-white/5 bg-[#020617]/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Globe2 className="w-16 h-16 text-emerald-400 mx-auto mb-8 opacity-80" />
          <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-16">Global Healthcare Reach</h3>
          
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
            {['India', 'UAE', 'USA', 'UK', 'Germany', 'Singapore', 'Thailand', 'Malaysia', 'Turkey', 'South Korea', 'Australia', 'Canada'].map((country, idx) => (
              <div key={idx} className="px-8 py-4 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-emerald-950/40 hover:border-emerald-500/30 transition-all cursor-default">
                <span className="font-bold text-slate-300 tracking-wide">{country}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CuraVox Inclusion */}
      <div className="relative mt-20">
        <CuraVoxSection />
      </div>

    </div>
  );
};

export default HealthcarePresentation;
