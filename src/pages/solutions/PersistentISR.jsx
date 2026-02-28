import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FaSatelliteDish, FaCheckCircle, FaArrowRight,
    FaExclamationTriangle, FaBolt, FaBatteryFull,
    FaBan, FaThermometerHalf, FaSun, FaWind
} from 'react-icons/fa';

import HeroImg from '../../assets/defence/sovereign_hero_majestic_refined_1771334252324.png';
import Img1 from '../../assets/defence/sensor.png';
import Img2 from '../../assets/defence/sovereign_intelligence_abstract_v2_1771334796018.png';
import Img3 from '../../assets/defence/indigenous_core_abstract_v2_1771334339840.png';

// Section & Scenario Assets
import ProblemImg from '../../assets/defence/efficency.png';
import FrontierImg from '../../assets/defence/Boarder Security.png';
import MaritimeImg from '../../assets/defence/sovereign_hero_majestic_refined_1771334252324.png';
import StrategicImg from '../../assets/defence/indigenous_core_abstract_v2_1771334339840.png';
import DesertImg from '../../assets/defence/defence_hero_strategic_v2_1771334764385.png';

const scenarios = [
    { title: 'Himalayan Frontier Patrol', sub: 'Multi-hour autonomous surveillance across extreme altitude sectors.', img: FrontierImg, detail: 'Patrolling the world’s highest frontier requires platforms that manage energy with extreme precision. Our ISR engine optimizes flight profiles and sensor duty cycles to maintain persistent eyes on critical passes for durations previously impossible.' },
    { title: 'Maritime Sovereign Watch', sub: 'Extended ISR across the Indian Ocean Region (IOR).', img: MaritimeImg, detail: 'Vast maritime zones demand sustained loiter capabilities. Energy-aware mission planning adjusts detection sampling and communication bursts to stretch battery life, ensuring deep-ocean presence without constant return-to-base cycles.' },
    { title: 'Strategic Asset Overwatch', sub: '24/7 autonomous guarding of high-value national infrastructure.', img: StrategicImg, detail: 'Critical dams, power grids, and reactors require unbroken surveillance. Our relay logic coordinates multiple platforms to provide a "perpetual watch" — where platforms hand off coverage seamlessly before their energy reserves hit critical levels.' },
    { title: 'Desert Deep-Penetration', sub: 'Long-range reconnaissance with autonomous energy budgeting.', img: DesertImg, detail: 'Reconnaissance deep into hostile territory allows no margin for error. The system predicts energy costs for every mile of flight, accounting for real-time wind factors to guarantee a safe return path for expensive ISR assets.' },
];

const layers = [
    { num: 1, color: 'emerald', side: 'left', img: Img1, title: 'Energy-Aware Planning', body: 'We treat every joule as a tactical asset. The mission planner continuously optimizes route, altitude, and velocity to maximize intelligence gathered per watt of energy consumed.', hud: [['ENERGY', 'OPTIM'], ['PLAN', 'ACTIVE'], ['LOAD', 'MIN']], items: ['Real-time joule-budgeting for all tasks', 'Wind-aware altitude optimization', 'Safe return margin predictive modeling', 'Dynamic replanning based on energy state'] },
    { num: 2, color: 'green', side: 'right', img: Img2, title: 'Adaptive Duty Cycling', body: 'The sensor suite operates in "Contextual Draw" mode — full-power scanning only when anomalies are detected, while maintaining background vigilance in ultra-low power states.', hud: [['SENSOR', 'DUTY'], ['STATE', 'VARIABLE'], ['SWEEP', 'SMART']], items: ['Proportional power delivery to sensors', 'Trigger-based full-modal activation', 'Intelligent idle-state management', 'Endurance extension of up to 40%'] },
    { num: 3, color: 'emerald', side: 'left', img: Img3, title: 'Coordinated ISR Relay', body: 'Persistent coverage is achieved through a multi-platform relay mesh. Platforms communicate energy states to siblings, triggering autonomous replacement before coverage gaps occur.', hud: [['RELAY', 'SYNC'], ['GAP', 'ZERO'], ['MESH', 'ACTIVE']], items: ['Autonomous platform-to-platform handoff', 'Network-wide energy load balancing', 'Continuous mission thread synchronization', 'Scalable to unlimited coverage area'] },
];

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } };
const fadeLeft = { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } };
const fadeRight = { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } };

const PersistentISR = () => {
    const [activeScenario, setActiveScenario] = useState(0);
    return (
        <div className="bg-white text-slate-900 font-sans selection:bg-emerald-600 selection:text-white">
            {/* HERO - RESTORED MAJESTIC BACKGROUND */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white border-b border-slate-200">
                <motion.div initial={{ scale: 1.05, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.5 }} className="absolute inset-0 z-0">
                    <img src={HeroImg} alt="Persistent ISR" className="w-full h-full object-cover opacity-60 grayscale-[0.3]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
                </motion.div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-full text-emerald-700 font-bold text-xs uppercase tracking-widest mb-8 shadow-sm">
                            <FaSatelliteDish className="animate-pulse" /> Persistent ISR
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black leading-[0.95] text-slate-900 mb-8 tracking-tighter">
                            Vigilance Without<br /><span className="text-emerald-600">Lapse.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mb-12 font-medium">We are engineering energy-aware autonomy that maximizes intelligence-collection endurance — transforming every joule into persistent vigilance.</p>
                        <div className="flex flex-wrap gap-4">
                            <a href="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-700 transition-all shadow-xl text-lg">Initalize Watch <FaArrowRight /></a>
                            <a href="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-white border-2 border-slate-900 text-slate-900 rounded-full font-bold hover:bg-slate-50 transition-all text-lg">Persistence Topology</a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* STAT STRIP - LIGHT ELITE */}
            <section className="py-16 bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-x-0 md:divide-x divide-slate-100 gap-y-10">
                        {[{ val: 'Extended', label: 'Mission endurance' }, { val: 'Adaptive', label: 'Sensor duty cycle' }, { val: 'Zero-gap', label: 'Relay coverage' }, { val: 'Always', label: 'Safe return margin' }].map((s, i) => (
                            <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="px-8 text-center md:text-left">
                                <div className="text-4xl font-black text-emerald-600 mb-1">{s.val}</div>
                                <div className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em]">{s.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* THE PROBLEM - THE ISR GAP */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:w-1/2">
                            <span className="text-emerald-600 font-bold tracking-[0.3em] uppercase text-xs block mb-6">Endurance Limitation</span>
                            <h2 className="text-4xl md:text-7xl font-bold text-slate-900 mb-8 leading-[1.05]">The <span className="text-emerald-600 italic">Vigilance</span> Gap.</h2>
                            <p className="text-xl text-slate-600 leading-relaxed mb-10">Standard ISR operations are crippled by short flight times and inefficient resource draw. Most platforms burn 30% of their energy on background tasks, forcing early mission termination. Perpetual watch requires energy-aware intelligence.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { title: 'Joules Budget', body: 'Fixed battery/fuel constraints.', val: 'Hard Limits' },
                                    { title: 'Coverage Gap', body: 'Lapses during refueling/recharge.', val: 'Critical Risk' }
                                ].map((stat, i) => (
                                    <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                        <div className="text-2xl font-black text-emerald-600 font-mono mb-2 italic">{stat.val}</div>
                                        <h4 className="font-bold text-slate-900 text-sm mb-1">{stat.title}</h4>
                                        <p className="text-slate-500 text-[10px] leading-relaxed">{stat.body}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:w-1/2 relative">
                            <div className="aspect-video bg-slate-100 rounded-[3rem] overflow-hidden relative group border border-slate-200 shadow-2xl">
                                <img src={ProblemImg} alt="Efficient Tech" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[10s]" />
                                <div className="absolute inset-0 bg-emerald-900/10 mix-blend-overlay" />

                                {/* ENERGY PULSE OVERLAY */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                                    <div className="w-[80%] h-[80%] border-2 border-emerald-500/20 rounded-full animate-[ping_4s_infinite]" />
                                    <div className="absolute w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.8)]" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* THE CAPABILITIES - PERSISTENCE FLOW */}
            <section className="py-32 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-24">
                        <span className="text-emerald-600 font-bold tracking-[0.4em] uppercase text-[10px] block mb-4">Joules Management</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">The <span className="text-emerald-600 italic font-serif">Persistence</span> Stack</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {layers.map((layer, i) => (
                            <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group">
                                <div className="bg-white rounded-[3rem] p-10 h-full border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 relative flex flex-col">
                                    <div className="absolute top-8 right-8 text-6xl font-black text-slate-50 group-hover:text-emerald-50 transition-colors pointer-events-none">0{i + 1}</div>
                                    <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center text-white text-2xl mb-12 shadow-lg shadow-emerald-200 group-hover:scale-110 transition-transform">
                                        {i === 0 ? <FaBolt /> : i === 1 ? <FaSun /> : <FaSatelliteDish />}
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-6 leading-tight">{layer.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">{layer.body}</p>
                                    <div className="rounded-2xl overflow-hidden h-40 border border-slate-100 mb-8 relative">
                                        <img src={layer.img} alt={layer.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[5s]" />
                                        <div className="absolute inset-0 bg-emerald-600/10 mix-blend-overlay" />
                                    </div>
                                    <ul className="space-y-3">
                                        {layer.items.slice(0, 3).map((item, j) => (
                                            <li key={j} className="flex items-center gap-3 text-slate-500 text-xs font-medium"><FaCheckCircle className="text-emerald-500 shrink-0" /> {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SCENARIOS - PERSISTENCE PROOF */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div>
                            <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs mb-4 block">Deployment Validation</span>
                            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 max-w-2xl leading-tight">Perpetual <span className="text-emerald-600 italic">Watch.</span></h2>
                        </div>
                        <div className="flex gap-4">
                            {scenarios.map((_, i) => (
                                <button key={i} onClick={() => setActiveScenario(i)} className={`px-6 py-3 rounded-2xl border-2 font-bold transition-all text-xs uppercase tracking-widest ${activeScenario === i ? 'bg-emerald-600 border-emerald-600 text-white shadow-xl shadow-emerald-200 scale-105' : 'bg-white border-slate-200 text-slate-400 hover:border-emerald-300'}`}>Scenario 0{i + 1}</button>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-[4rem] overflow-hidden grid grid-cols-1 lg:grid-cols-5 shadow-[0_32px_128px_-32px_rgba(16,185,129,0.15)] relative border border-slate-100">
                        <div className="lg:col-span-3 relative h-[500px] lg:h-[600px] overflow-hidden group">
                            <motion.div key={activeScenario} initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} className="w-full h-full relative">
                                <img src={scenarios[activeScenario].img} alt={scenarios[activeScenario].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[10s]" />
                                <div className="absolute inset-0 bg-emerald-50/10 mix-blend-overlay" />
                            </motion.div>
                        </div>

                        <div className="lg:col-span-2 p-16 flex flex-col justify-center bg-slate-50 relative">
                            <motion.div key={`text-${activeScenario}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                                <div className="text-emerald-600 font-bold text-[10px] mb-4 uppercase tracking-[0.3em] underline decoration-emerald-200 decoration-2 underline-offset-4">Operational Phase // 0{activeScenario + 1}</div>
                                <h3 className="text-4xl font-black text-slate-900 mb-6 leading-tight tracking-tighter">{scenarios[activeScenario].title}</h3>
                                <p className="text-emerald-600 text-lg leading-relaxed mb-8 italic border-l-4 border-emerald-600 pl-6">"{scenarios[activeScenario].sub}"</p>
                                <p className="text-slate-600 text-xl leading-relaxed mb-10 font-medium">{scenarios[activeScenario].detail}</p>

                                <div className="flex flex-wrap gap-3 pt-10 border-t border-slate-200">
                                    {['Energy-Aware', 'Low-Probability-Intercept', 'Contextual'].map(tag => (
                                        <span key={tag} className="px-5 py-2 rounded-full border border-emerald-100 text-emerald-700 text-[10px] uppercase font-bold tracking-widest bg-white shadow-sm">{tag}</span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* COMPARISON - JOULES VS VIGILANCE */}
            <section className="py-32 bg-slate-50 relative overflow-hidden">
                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-24">
                        <span className="text-emerald-600 font-bold tracking-[0.4em] uppercase text-[10px] block mb-4">Strategic Matrix</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">Fixed Endurance vs <span className="text-emerald-600 italic">Energy-Aware</span> Autonomy</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white rounded-[3rem] p-12 border border-slate-200 shadow-sm relative group overflow-hidden">
                            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-10">Agnostic Flight Management</h4>
                            <div className="space-y-6">
                                {[
                                    'Static power draw across all mission phases.',
                                    'Fixed sensor sweep rates ignore environment.',
                                    'No wind-factor or drag-curve optimization.',
                                    'Early return triggers due to conservative margins.',
                                    'Comms-heavy updates burn critical joules.'
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 text-slate-500 text-sm">
                                        <FaBan className="text-red-400 shrink-0 mt-1" /> {item}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white rounded-[3rem] p-12 border border-emerald-200 shadow-2xl shadow-emerald-100/50 relative group overflow-hidden">
                            <h4 className="text-sm font-black text-emerald-600 uppercase tracking-widest mb-10">Novaliseo Persistence Engine</h4>
                            <div className="space-y-6">
                                {[
                                    'Dynamic power scaling based on tactical state.',
                                    'Contextual duty-cycling doubles endurance.',
                                    'Wind-aware lift-to-drag profile optimization.',
                                    'Zero-gap relay cycles for 24/7 overwatch.',
                                    'Burst-mode lpi comms for low-energy audit.'
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-5 bg-emerald-50/50 rounded-2xl border border-emerald-100 text-slate-700 text-sm font-bold">
                                        <FaCheckCircle className="text-emerald-500 shrink-0 mt-1" /> {item}
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
                        <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-10 border border-emerald-100 shadow-inner">
                            <FaSatelliteDish className="text-emerald-600 text-4xl shadow-[0_0_20px_rgba(16,185,129,0.3)]" />
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter">Always Vigilant.</h2>
                        <p className="text-slate-500 text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-medium">Integration support for all indigenous ISR, endurance, and persistent surveillance programmes. Sovereign and energy-intelligent.</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <a href="/contact" className="inline-flex items-center gap-4 px-12 py-6 bg-slate-900 text-white font-black rounded-full shadow-2xl hover:scale-105 transition-all text-xs uppercase tracking-widest">Initialize Watch <FaArrowRight /></a>
                            <a href="/contact" className="inline-flex items-center gap-4 px-12 py-6 bg-white border-2 border-emerald-600 text-emerald-600 font-bold rounded-full hover:bg-slate-50 transition-all text-sm tracking-tight">ISR Architecture</a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};
export default PersistentISR;
