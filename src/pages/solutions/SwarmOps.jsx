import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FaProjectDiagram, FaCheckCircle, FaArrowRight,
    FaExclamationTriangle, FaNetworkWired, FaBroadcastTower,
    FaBan, FaCogs, FaMicrochip, FaUsers
} from 'react-icons/fa';

import HeroImg from '../../assets/defence/defence_hero_v6_webp_1771334667890.png';
import Img1 from '../../assets/defence/strategic_mesh_nodes_v2_1771334837767.png';
import Img2 from '../../assets/defence/sovereign_intelligence_abstract_v2_1771334796018.png';
import Img3 from '../../assets/defence/indigenous_core_abstract_v2_1771334339840.png';

// Section & Scenario Assets
import ProblemImg from '../../assets/defence/sovereign_intelligence_abstract_v2_1771334796018.png';
import FrontierImg from '../../assets/defence/Boarder Security.png';
import UrbanImg from '../../assets/defence/strategic_mesh_nodes_v2_1771334837767.png';
import DesertImg from '../../assets/defence/defence_hero_strategic_v2_1771334764385.png';
import HeterogeneousImg from '../../assets/defence/indigenous_core_abstract_v2_1771334339840.png';

const scenarios = [
    { title: 'Frontier Search & Rescue', sub: 'Coordinating dozens of platforms to sweep vast Himalayan sectors.', img: FrontierImg, detail: 'Covering vast, high-altitude terrain with a single platform is a race against time. A coordinated swarm divides the search area autonomously, dynamically re-tasking when priority targets are discovered or when nodes face atmospheric challenges.' },
    { title: 'Urban Perimeter Mesh', sub: 'Persistent coverage with self-healing gaps in dense cityscapes.', img: UrbanImg, detail: 'In dense metropolitan areas, line-of-sight is constantly broken. A decentralised mesh of platforms maintains persistent coverage. If a node loses a target due to building occlusion, neighbouring platforms autonomously reposition to maintain the track.' },
    { title: 'Desert Wide-Area ISR', sub: 'Saturating the Thar Desert with persistent distributed sensing.', img: DesertImg, detail: 'Large-scale reconnaissance in flat desert regions becomes efficient through mass. A swarm of low-cost platforms provides a "high-resolution" intelligence grid that is impossible to achieve with a single expensive high-altitude asset.' },
    { title: 'Heterogeneous Coordination', sub: 'Air, ground, and maritime platforms operating as a unified force.', img: HeterogeneousImg, detail: 'The most capable force is one that combines modalities. Our architecture enables multi-domain platforms to share local models and coordinate action as an integrated hive — sharing a single unified mental model of the battlespace.' },
];

const layers = [
    { num: 1, color: 'amber', side: 'left', img: Img1, title: 'Mesh Task Allocation', body: 'The swarm divides the mission into tasks and allocates them across available platforms based on position and capability — without a central scheduler assigning each platform individually.', hud: [['TASK', 'DIST'], ['ALLOC', 'AUTO'], ['SCHED', 'NONE']], items: ['Self-organising task distribution', 'No central command bottleneck', 'Dynamic node join/leave handling', 'Automated workload balancing'] },
    { num: 2, color: 'orange', side: 'right', img: Img2, title: 'Peer-to-Peer Sync', body: 'Platforms communicate directly with their neighbors using compressed state packets. This creates emergent coordination without the need for high-bandwidth centralised comms infrastructure.', hud: [['PEER', 'ACTIVE'], ['COMMS', 'MESH'], ['PACKET', 'SYNC']], items: ['Minimal bandwidth state-sharing', 'RF-silent operation modes', 'Distributed consensus protocol', 'Graceful network degradation'] },
    { num: 3, color: 'amber', side: 'left', img: Img3, title: 'Emergent Intelligence', body: 'Simple local rules produce complex collective behavior — area search paths and synchronised action emerge from the group rather than top-down choreography.', hud: [['SWARM', 'EMERGE'], ['RULE', 'LOCAL'], ['SYNC', 'ACTIVE']], items: ['Complex behavior from simple rules', 'Adaptive formation control', 'Self-healing swarm architecture', 'Mass-scale coordination (50+ nodes)'] },
];

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } };
const fadeLeft = { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } };
const fadeRight = { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } };

const SwarmOps = () => {
    const [activeScenario, setActiveScenario] = useState(0);
    return (
        <div className="bg-white text-slate-900 font-sans selection:bg-amber-600 selection:text-white">
            {/* HERO - RESTORED MAJESTIC BACKGROUND */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white border-b border-slate-200">
                <motion.div initial={{ scale: 1.05, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.5 }} className="absolute inset-0 z-0">
                    <img src={HeroImg} alt="Swarm Operations" className="w-full h-full object-cover opacity-60 grayscale-[0.3]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
                </motion.div>

                {/* FLOATING NODES & LINKS SVG */}
                <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 1000 1000">
                        {[...Array(15)].map((_, i) => (
                            <motion.circle
                                key={`node-${i}`}
                                cx={Math.random() * 1000}
                                cy={Math.random() * 1000}
                                r="3"
                                fill="#d97706"
                                animate={{
                                    x: [0, Math.random() * 40 - 20],
                                    y: [0, Math.random() * 40 - 20],
                                }}
                                transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, repeatType: "reverse" }}
                            />
                        ))}
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-100 rounded-full text-amber-700 font-bold text-xs uppercase tracking-widest mb-8 shadow-sm">
                            <FaProjectDiagram className="animate-pulse" /> Swarm & Collaborative Operations
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black leading-[0.95] text-slate-900 mb-8 tracking-tighter">
                            Many Platforms.<br /><span className="text-amber-600">One Mission.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mb-12 font-medium">We are engineering swarm intelligence that enables mass-scale autonomous coordination — dividing tasks and sharing intelligence without a central command bottleneck.</p>
                        <div className="flex flex-wrap gap-4">
                            <a href="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-700 transition-all shadow-xl text-lg">Initalize Swarm <FaArrowRight /></a>
                            <a href="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-white border-2 border-slate-900 text-slate-900 rounded-full font-bold hover:bg-slate-50 transition-all text-lg">Mesh Topology</a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* STAT STRIP - LIGHT ELITE */}
            <section className="py-16 bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-x-0 md:divide-x divide-slate-100 gap-y-10">
                        {[{ val: 'Self-healing', label: 'Collective coverage' }, { val: 'Zero', label: 'Central scheduler' }, { val: 'Multi-type', label: 'Heterogeneous nodes' }, { val: 'Emergent', label: 'Swarm coordination' }].map((s, i) => (
                            <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="px-8 text-center md:text-left">
                                <div className="text-4xl font-black text-amber-600 mb-1">{s.val}</div>
                                <div className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em]">{s.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* THE PROBLEM - THE SCALABILITY CRISIS */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:w-1/2">
                            <span className="text-amber-600 font-bold tracking-[0.3em] uppercase text-xs block mb-6">Mass Deployment failure</span>
                            <h2 className="text-4xl md:text-7xl font-bold text-slate-900 mb-8 leading-[1.05]">The <span className="text-amber-600 italic">Headcount</span> Trap.</h2>
                            <p className="text-xl text-slate-600 leading-relaxed mb-10">Traditional drone operations require a 1:1 pilot-to-platform ratio. In large-scale tactical scenarios, this human requirement makes mass deployment logistically and financially impossible. Decentralisation is the only path to mass.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { title: 'Training Tail', body: 'Pilot demand exceeds supply.', val: '1:1 Ratio' },
                                    { title: 'Central Node', body: 'Vulnerable single point of failure.', val: 'Single Master' }
                                ].map((stat, i) => (
                                    <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                        <div className="text-2xl font-black text-amber-600 font-mono mb-2 italic">{stat.val}</div>
                                        <h4 className="font-bold text-slate-900 text-sm mb-1">{stat.title}</h4>
                                        <p className="text-slate-500 text-[10px] leading-relaxed">{stat.body}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:w-1/2 relative">
                            <div className="aspect-video bg-slate-100 rounded-[3rem] overflow-hidden relative group border border-slate-200 shadow-2xl">
                                <img src={ProblemImg} alt="Collective Intelligence" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[10s]" />
                                <div className="absolute inset-0 bg-amber-900/10 mix-blend-overlay" />

                                {/* NETWORK OVERLAY */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                                    <div className="w-[80%] h-[80%] border-2 border-amber-500/20 rounded-full animate-[ping_3s_infinite]" />
                                    <div className="absolute w-[60%] h-[60%] border-2 border-amber-500/20 rounded-full animate-[ping_4s_infinite]" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* THE CAPABILITIES - COLLECTIVE INTELLIGENCE FLOW */}
            <section className="py-32 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-24">
                        <span className="text-amber-600 font-bold tracking-[0.4em] uppercase text-[10px] block mb-4">Neural Mesh</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Collective <span className="text-amber-600 italic font-serif">Autonomy</span> Stack</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {layers.map((layer, i) => (
                            <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group">
                                <div className="bg-white rounded-[3rem] p-10 h-full border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 relative flex flex-col">
                                    <div className="absolute top-8 right-8 text-6xl font-black text-slate-50 group-hover:text-amber-50 transition-colors pointer-events-none">0{i + 1}</div>
                                    <div className="w-14 h-14 bg-amber-600 rounded-2xl flex items-center justify-center text-white text-2xl mb-12 shadow-lg shadow-amber-200 group-hover:scale-110 transition-transform">
                                        {i === 0 ? <FaNetworkWired /> : i === 1 ? <FaUsers /> : <FaMicrochip />}
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-6 leading-tight">{layer.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">{layer.body}</p>
                                    <div className="rounded-2xl overflow-hidden h-40 border border-slate-100 mb-8 relative">
                                        <img src={layer.img} alt={layer.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[5s]" />
                                        <div className="absolute inset-0 bg-amber-600/10 mix-blend-overlay" />
                                    </div>
                                    <ul className="space-y-3">
                                        {layer.items.slice(0, 3).map((item, j) => (
                                            <li key={j} className="flex items-center gap-3 text-slate-500 text-xs font-medium"><FaCheckCircle className="text-amber-500 shrink-0" /> {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SCENARIOS - SWARM IN OPERATIONS */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div>
                            <span className="text-amber-600 font-bold tracking-widest uppercase text-xs mb-4 block">Deployment Proof</span>
                            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 max-w-2xl leading-tight">Collective <span className="text-amber-600 italic">Force Mass.</span></h2>
                        </div>
                        <div className="flex gap-4">
                            {scenarios.map((_, i) => (
                                <button key={i} onClick={() => setActiveScenario(i)} className={`px-6 py-3 rounded-2xl border-2 font-bold transition-all text-xs uppercase tracking-widest ${activeScenario === i ? 'bg-amber-600 border-amber-600 text-white shadow-xl shadow-amber-200 scale-105' : 'bg-white border-slate-200 text-slate-400 hover:border-amber-300'}`}>Target 0{i + 1}</button>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-[4rem] overflow-hidden grid grid-cols-1 lg:grid-cols-5 shadow-[0_32px_128px_-32px_rgba(217,119,6,0.15)] relative border border-slate-100">
                        <div className="lg:col-span-3 relative h-[500px] lg:h-[600px] overflow-hidden group">
                            <motion.div key={activeScenario} initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} className="w-full h-full relative">
                                <img src={scenarios[activeScenario].img} alt={scenarios[activeScenario].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[10s]" />
                                <div className="absolute inset-0 bg-amber-50/10 mix-blend-overlay" />
                            </motion.div>
                        </div>

                        <div className="lg:col-span-2 p-16 flex flex-col justify-center bg-slate-50 relative">
                            <motion.div key={`text-${activeScenario}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                                <div className="text-amber-600 font-bold text-[10px] mb-4 uppercase tracking-[0.3em] underline decoration-amber-200 decoration-2 underline-offset-4">Operational Phase // 0{activeScenario + 1}</div>
                                <h3 className="text-4xl font-black text-slate-900 mb-6 leading-tight tracking-tighter">{scenarios[activeScenario].title}</h3>
                                <p className="text-amber-600 text-lg leading-relaxed mb-8 italic border-l-4 border-amber-600 pl-6">"{scenarios[activeScenario].sub}"</p>
                                <p className="text-slate-600 text-xl leading-relaxed mb-10 font-medium">{scenarios[activeScenario].detail}</p>

                                <div className="flex flex-wrap gap-3 pt-10 border-t border-slate-200">
                                    {['Decentralised', 'Self-Healing', 'Mass Scale'].map(tag => (
                                        <span key={tag} className="px-5 py-2 rounded-full border border-amber-100 text-amber-700 text-[10px] uppercase font-bold tracking-widest bg-white shadow-sm">{tag}</span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* COMPARISON - SCALE VS HEADCOUNT */}
            <section className="py-32 bg-slate-50 relative overflow-hidden">
                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-24">
                        <span className="text-amber-600 font-bold tracking-[0.4em] uppercase text-[10px] block mb-4">Strategic Matrix</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">Headcount Limitation vs <span className="text-amber-600 italic">Collective Intelligence</span></h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white rounded-[3rem] p-12 border border-slate-200 shadow-sm relative group overflow-hidden">
                            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-10">Legacy Fleet Ops</h4>
                            <div className="space-y-6">
                                {[
                                    'Requires one operator per platform.',
                                    'Fleet coordination lost on central link drop.',
                                    'High danger of mid-air collision in density.',
                                    'Massive bandwidth required for multiple feeds.',
                                    'No local intelligence – purely passive nodes.'
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 text-slate-500 text-sm">
                                        <FaBan className="text-red-400 shrink-0 mt-1" /> {item}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white rounded-[3rem] p-12 border border-amber-200 shadow-2xl shadow-amber-100/50 relative group overflow-hidden">
                            <h4 className="text-sm font-black text-amber-600 uppercase tracking-widest mb-10">Novaliseo Swarm Intelligence</h4>
                            <div className="space-y-6">
                                {[
                                    'One operator per 50+ autonomous platforms.',
                                    'Peer-to-peer mesh keeps the swarm coherent.',
                                    'Autonomous spatial awareness & collision avoidance.',
                                    'Bandwidth-minimal distributed state-sync protocol.',
                                    'Emergent behaviors for collective task execution.'
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-5 bg-amber-50/50 rounded-2xl border border-amber-100 text-slate-700 text-sm font-bold">
                                        <FaCheckCircle className="text-amber-600 shrink-0 mt-1" /> {item}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* CTA - LIGHT */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <div className="w-24 h-24 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-10 border border-amber-100 shadow-inner">
                            <FaProjectDiagram className="text-amber-600 text-4xl shadow-[0_0_20px_rgba(217,119,6,0.3)]" />
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter">One Intelligence.</h2>
                        <p className="text-slate-500 text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-medium">Integration support for all indigenous swarm and multi-platform coordination programmes. Sovereign and scalable.</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <a href="/contact" className="inline-flex items-center gap-4 px-12 py-6 bg-slate-900 text-white font-black rounded-full shadow-2xl hover:scale-105 transition-all text-xs uppercase tracking-widest">Initialize Swarm <FaArrowRight /></a>
                            <a href="/contact" className="inline-flex items-center gap-4 px-12 py-6 bg-white border-2 border-amber-600 text-amber-600 font-bold rounded-full hover:bg-slate-50 transition-all text-sm tracking-tight">Mesh Architecture</a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};
export default SwarmOps;
