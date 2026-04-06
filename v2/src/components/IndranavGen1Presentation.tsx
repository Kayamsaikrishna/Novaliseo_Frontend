import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import heroImg from '../assets/indranav_industrial_hero.png';
import fusionImg from '../assets/indranav_fusion.png';
import terrainImg from '../assets/indranav_terrain.png';

const IndranavGen1Presentation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="indranav-revert-container relative bg-transparent text-white selection:bg-cyan-500/30 overflow-hidden font-sans pt-24 pb-40">
      {/* Scoped Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400..900&display=swap');
        
        .indranav-font-serif {
          font-family: 'Playfair Display', serif;
          font-style: italic;
        }

        .glass-panel {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
        }

        .tech-glow-cyan {
          text-shadow: 0 0 15px rgba(34, 211, 238, 0.4);
        }

        .indranav-text-stroke {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
          color: transparent;
        }

        .marquee-line {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.3), transparent);
        }
      `}} />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex flex-col gap-2 mb-10 group cursor-default">
                <div className="flex items-center gap-4">
                  <div className="h-[1px] w-8 bg-cyan-500/50" />
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-cyan-400">
                    Indigenous Distributed Resilient
                  </span>
                </div>
                <div className="flex items-center gap-4 pl-12">
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/50">
                    Autonomous Navigation — Gen 1
                  </span>
                </div>
              </div>

              <h1 className="text-7xl lg:text-[110px] font-black leading-[0.9] tracking-tighter uppercase mb-6 relative">
                <div className="absolute -left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-cyan-500 via-transparent to-transparent opacity-40 hidden lg:block" />
                Indranav <br />
                <span className="indranav-font-serif lowercase font-normal italic text-cyan-400 tech-glow-cyan text-6xl lg:text-8xl">Generation 1</span>
              </h1>

              <p className="text-xl lg:text-2xl font-light text-slate-400 leading-relaxed max-w-xl mb-12">
                Decisive superiority in <span className="text-white font-medium">denied environments</span> — a native breakthrough in resilient edge positioning
              </p>

              <div className="flex flex-wrap gap-10 border-t border-white/10 pt-10">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400/60 mb-2">DESIGN GOALS</p>
                  <p className="text-2xl font-black text-white">Native Arch</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-2">TARGET PRECISION</p>
                  <p className="text-2xl font-black text-white">0.28M CEP</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-2">LATENCY</p>
                  <p className="text-2xl font-black text-white">30MS Target</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative group h-[500px] lg:h-[650px] flex items-center justify-center pt-20"
            >
              <div className="absolute inset-0 bg-cyan-500/10 rounded-full blur-[120px] opacity-30" />
              <div className="relative w-full h-full glass-panel rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center group">
                <img src={heroImg} className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-[4000ms] opacity-90 p-8" alt="Indranav Hardware" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/40 via-transparent to-transparent opacity-60 pointer-events-none" />
                <div className="absolute top-6 left-6 p-4 glass-panel rounded-xl">
                  <span className="text-[10px] font-mono text-cyan-400 block tracking-widest uppercase mb-1">UNIT_ID // IND-G1</span>
                  <p className="text-[10px] font-bold text-white uppercase tracking-widest">Native Edge Module</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Marquee */}
      <div className="relative py-12 z-10 border-y border-white/5 bg-[#020617]/40 backdrop-blur-sm mt-20">
        <motion.div
          animate={{ x: [0, -2000] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex whitespace-nowrap items-center gap-24 text-4xl lg:text-6xl font-black uppercase tracking-tighter text-white/5"
        >
          {Array(15).fill(0).map((_, i) => (
            <React.Fragment key={i}>
              <span className="indranav-text-stroke">GPS-DENIED OPS</span>
              <span className="text-cyan-500/20">✦</span>
              <span className="tech-glow-cyan text-white/20">tactical resilience</span>
              <span className="text-cyan-500/20">✦</span>
              <span className="indranav-text-stroke">Resilient Link</span>
              <span className="text-cyan-500/20">✦</span>
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* Technical Narrative */}
      <section className="relative py-44 z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-12 mb-16">
              <h2 className="text-[11px] font-bold uppercase tracking-[0.5em] text-cyan-400 mb-6">// The Operational Context</h2>
              <h3 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-tight max-w-4xl">
                Inverting the paradigm of <span className="indranav-font-serif lowercase font-normal italic text-slate-500">absolute trust</span>
              </h3>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-8">
              {[
                { title: 'GNSS Disruption', desc: 'Sustained adversary jamming and spoofing across multiple constellations.' },
                { title: 'Sub-Surface Ops', desc: 'Drift-free navigation in tunnels, urban canyons, and indoor theaters.' },
                { title: 'Zero Dependence', desc: 'Eliminating the kill-switch risk from foreign satellite data reliance.' }
              ].map((item, i) => (
                <div key={i} className="glass-panel p-10 rounded-2xl hover:border-cyan-500/30 transition-all duration-500 group">
                  <span className="text-[10px] font-mono text-cyan-500/60 mb-3 block">0{i + 1} // CORE_LOGIC</span>
                  <h4 className="text-2xl font-black uppercase mb-4 tracking-tight group-hover:text-cyan-400 transition-colors">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="lg:col-span-7 flex flex-col justify-center gap-16 lg:pl-12">
              <div className="relative glass-panel p-12 lg:p-20 rounded-3xl overflow-hidden group">
                <div className="absolute top-0 right-0 p-8">
                  <span className="text-8xl font-serif text-cyan-500/10 rotate-12">"</span>
                </div>
                <blockquote className="text-4xl lg:text-6xl indranav-font-serif text-slate-300 leading-[1.05] relative z-10 italic">
                  When the map is no longer provided by the cloud, it must be <span className="text-white not-italic font-black glow-text group-hover:text-cyan-400 transition-colors">computed by the edge</span>
                </blockquote>
              </div>

              <div className="flex flex-col gap-12">
                <div className="w-full aspect-video rounded-3xl overflow-hidden group flex items-center justify-center bg-[#020617]/50 border border-white/5">
                  <img src={fusionImg} className="w-full h-full object-contain transition-all duration-1000 group-hover:scale-105" alt="Sensor Fusion" />
                </div>
                <div className="bg-cyan-600 rounded-3xl flex flex-col justify-end p-10 lg:p-14 shadow-[0_0_50px_rgba(8,145,178,0.2)]">
                  <span className="text-[10px] font-mono text-white/50 mb-6 tracking-[0.4em]">TECH_PROTOCOL</span>
                  <p className="text-4xl lg:text-5xl font-black uppercase text-white leading-none tracking-tighter">Native <br />Precision Architecture</p>
                  <p className="text-white/70 mt-6 text-lg lg:text-xl font-light max-w-2xl italic leading-relaxed">Proprietary IMU + Vision + LiDAR fusion logic ensuring zero external reliance for absolute positioning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Layer Stack */}
      <section className="relative py-44 z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-12">
            <div className="max-w-2xl">
              <h2 className="text-[11px] font-bold uppercase tracking-[0.5em] text-cyan-400 mb-6">// Engineering Pillars</h2>
              <h3 className="text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-none text-white">
                Native Strategic Navigation <br /> <span className="text-white/40">Framework</span>
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Fused Navigation', tag: 'SYSTEM.FUSION', desc: 'Proprietary IMU + Vision + LiDAR fusion logic ensuring zero external reliance for absolute positioning' },
              { title: 'Terrain Native', tag: 'SYSTEM.SPATIAL', desc: 'Direct on-edge processing of topological maps for terrain-relative navigation in denied theaters' },
              { title: 'Adversarial Shield', tag: 'SYSTEM.SIGNAL', desc: 'Anti-jamming logic hardcoded into the baseband, maintaining mission integrity during electronic warfare' }
            ].map((pillar, i) => (
              <div key={i} className="glass-panel p-12 rounded-3xl group hover:-translate-y-2 transition-all duration-500">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-10 border border-cyan-500/20 group-hover:bg-cyan-500 group-hover:text-white transition-all text-cyan-400">
                  <span className="font-black text-xl">0{i + 1}</span>
                </div>
                <h4 className="text-3xl font-black uppercase mb-3 tracking-tighter">{pillar.title}</h4>
                <p className="text-[10px] font-bold text-cyan-500 uppercase tracking-widest mb-8">{pillar.tag}</p>
                <p className="text-slate-500 text-xs leading-relaxed font-medium">L6 Security Baseline with standalone auth tokens</p>
                <p className="text-slate-400 leading-relaxed font-medium group-hover:text-slate-200 transition-colors">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tactical Stats */}
      <section className="relative py-44 z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="glass-panel rounded-[40px] p-12 lg:p-24 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[500px] h-full opacity-30 blur-[100px] pointer-events-none">
              <div className="bg-cyan-500 w-full h-full rounded-full" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
              <div>
                <h2 className="text-[11px] font-bold uppercase tracking-[0.5em] text-cyan-400 mb-12">// Operational Targets</h2>
                <div className="space-y-12">
                  {[
                    { label: 'Airborne Velocity', value: 'Mach 0.9+', detail: 'High-subsonic design goal' },
                    { label: 'Position Deviation', value: '< 0.28M', detail: 'Target urban denied precision' },
                    { label: 'System Latency', value: '30MS', detail: 'Real-time edge compute target' }
                  ].map((stat, i) => (
                    <div key={i} className="group border-b border-white/10 pb-8 last:border-0 hover:border-cyan-500/40 transition-all">
                      <p className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em] mb-4">METRIC_0{i + 1} // {stat.label}</p>
                      <p className="text-5xl lg:text-7xl font-black tracking-tighter mb-4 group-hover:text-cyan-400 transition-colors uppercase">{stat.value}</p>
                      <p className="indranav-font-serif text-lg text-slate-500 italic group-hover:text-slate-300 transition-colors">{stat.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative flex items-center justify-center">
                <div className="relative w-full aspect-square rounded-[32px] overflow-hidden shadow-2xl flex items-center justify-center bg-[#020617]/50 border border-white/5">
                  <img src={terrainImg} className="w-full h-full object-contain hover:scale-110 transition-all duration-[2000ms]" alt="Terrain Intel" />
                  <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none">
                    <span className="text-[10px] font-black uppercase text-cyan-400 tracking-[0.3em] mb-4 block">// Reliability Architecture</span>
                    <p className="text-2xl lg:text-3xl font-black uppercase leading-tight">Built for extreme Electronic Theaters</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Massive CTA */}
      <section className="relative py-60 z-10 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-6xl lg:text-[140px] font-black uppercase leading-[0.8] tracking-tighter mb-16">
            Strategic <br />
            <span className="text-white/40">Autonomy</span>
          </h3>
          <p className="text-2xl lg:text-3xl font-light text-slate-400 mb-16 max-w-2xl mx-auto leading-relaxed">
            Architecting the future of independent navigation — Indranav Gen 1 sets the design baseline for <span className="text-white font-medium">endogenous strategic resilience</span>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="w-16 h-[1px] bg-cyan-500" />
            <span className="text-[12px] font-mono text-cyan-400 uppercase tracking-[0.5em] font-bold">Indranav Internal // 2026</span>
            <div className="w-16 h-[1px] bg-cyan-500" />
          </div>
        </div>

        {/* Massive Background Accents */}
        <div className="absolute inset-x-0 bottom-0 pointer-events-none opacity-[0.08] select-none translate-y-1/2">
          <p className="text-[40vw] font-black uppercase leading-none text-center text-white">INDRA</p>
        </div>
      </section>
    </div>
  );
};

export default IndranavGen1Presentation;
