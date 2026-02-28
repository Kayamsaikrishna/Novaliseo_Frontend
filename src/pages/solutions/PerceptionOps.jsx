import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FaEye, FaCheckCircle, FaBan, FaArrowRight,
    FaExclamationTriangle, FaBrain, FaCamera,
    FaMicrochip, FaChartLine, FaShieldAlt
} from 'react-icons/fa';

import HeroImg from '../../assets/defence/gnss_visual_tracking.png';
import Img1 from '../../assets/defence/sensor.png';
import Img2 from '../../assets/defence/sovereign_intelligence_abstract_v2_1771334796018.png';
import Img3 from '../../assets/defence/indigenous_core_abstract_v2_1771334339840.png';

// Section & Scenario Assets
import ProblemImg from '../../assets/defence/latency.png';
import UrbanImg from '../../assets/defence/strategic_mesh_nodes_v2_1771334837767.png';
import FrontierImg from '../../assets/defence/Boarder Security.png';
import MaritimeImg from '../../assets/defence/sovereign_hero_majestic_refined_1771334252324.png';
import CounterImg from '../../assets/defence/defence_hero_strategic_v2_1771334713607.png';

const scenarios = [
    { title: 'Dense Urban Perception', sub: 'Identifying anomalies in crowded Indian metropolitan centers.', img: UrbanImg, detail: 'Urban centers in India present extreme visual clutter. Our perception engine is designed to distinguish operationally significant activity — such as specific vehicle profiles or high-risk movement patterns — from the normal dense flow of city life.' },
    { title: 'Frontier Intelligence', sub: 'Multi-modal detection across Himalayan ridge lines.', img: FrontierImg, detail: 'Mountainous terrain creates massive shadows and thermal variance. Sensor fusion (EO/IR + Radar) ensures that assets attempting to hide in terrain features are detected via their combined thermal and reflective signatures.' },
    { title: 'Maritime Domain Sight', sub: 'Autonomous classification of coastal and blue-water traffic.', img: MaritimeImg, detail: 'In high-sea states, small vessels can be lost in radar clutter. High-frequency visual classification combined with AIS data fusion allows for absolute identification and intent analysis of all maritime contacts.' },
    { title: 'Counter-Concealment', sub: 'Detecting camouflaged assets in varied landscapes.', img: CounterImg, detail: 'Adversary camouflage depends on subverting human eye patterns. Our neural models are trained on raw spectral data, detecting the "unnatural" fingerprints of concealed military hardware even when visually hidden from optic sensors.' },
];

const layers = [
    { num: 1, color: 'cyan', side: 'left', img: Img1, title: 'Multi-Modal Fusion', body: 'The perception engine ingests inputs from all available sensors — optical, thermal, and radar — and fuses them into a single coherent scene model. No single sensor dependency means no single-mode failure.', hud: [['FUSE', 'ALL'], ['MODE', 'MULTI'], ['FAIL', 'NONE']], items: ['Real-time multi-spectral sensor fusion', 'No single-mode failure (EO/IR+Radar)', 'Coherent scene model construction', 'On-board edge processing'] },
    { num: 2, color: 'teal', side: 'right', img: Img2, title: 'Scene Understanding', body: 'Beyond simple detection, the system classifies the "story" of the scene — distinguishing between normal life and operational threats. It is the difference between seeing a car and recognizing an insurgent maneuver.', hud: [['CLASS', 'ACTIVE'], ['SCENE', 'FULL'], ['CONF', '98%']], items: ['Behavioral intent classification', 'Threat vs Neutral filtering', 'Confidence-weighted intelligence', 'Low-latency scene comprehension'] },
    { num: 3, color: 'cyan', side: 'left', img: Img3, title: 'Actionable Intelligence', body: 'Intelligence is only as good as its delivery speed. Our perception stack directly cues navigation and engagement layers, shortening the path from "See" to "Act" to a sub-second loop.', hud: [['PIPE', 'ACTIVE'], ['ACT', 'DIRECT'], ['LATENCY', 'MIN']], items: ['Direct sensor-to-effector cueing', 'Eliminate human cognitive delay', 'Persistent threat tracking', 'Full decision audit trail'] },
];

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } };
const fadeLeft = { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } };
const fadeRight = { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } };

const PerceptionOps = () => {
    const [activeScenario, setActiveScenario] = useState(0);
    const [activeLayer, setActiveLayer] = useState(0);
    return (
        <div className="bg-white text-slate-900 font-sans selection:bg-cyan-600 selection:text-white">
            {/* HERO - RESTORED MAJESTIC BACKGROUND */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white border-b border-slate-200">
                <motion.div initial={{ scale: 1.05, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.5 }} className="absolute inset-0 z-0">
                    <img src={HeroImg} alt="Perception-Driven Operations" className="w-full h-full object-cover opacity-60 grayscale-[0.2]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
                    <div className="absolute inset-0 bg-cyan-500/5 mix-blend-overlay" />
                </motion.div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 border border-cyan-100 rounded-full text-cyan-700 font-bold text-xs uppercase tracking-widest mb-8 shadow-sm">
                            <FaEye className="animate-pulse" /> Perception-Driven Operations
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black leading-[0.95] text-slate-900 mb-8 tracking-tighter">
                            Sense the<br /><span className="text-cyan-600">Scene.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mb-12 font-medium">We are engineering perception systems that give platforms high-fidelity comprehension — transforming raw sensor data into actionable scene intelligence.</p>
                        <div className="flex flex-wrap gap-4">
                            <a href="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-700 transition-all shadow-xl text-lg">Initalize Watch <FaArrowRight /></a>
                            <a href="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-white border-2 border-slate-900 text-slate-900 rounded-full font-bold hover:bg-slate-50 transition-all text-lg">Perception Topology</a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* STAT STRIP - LIGHT ELITE */}
            <section className="py-16 bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-x-0 md:divide-x divide-slate-100 gap-y-10">
                        {[{ val: 'Multi-modal', label: 'Sensor fusion' }, { val: 'Real-time', label: 'Scene comprehension' }, { val: 'On-board', label: 'Edge processing' }, { val: 'All-weather', label: 'Persistent vision' }].map((s, i) => (
                            <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="px-8 text-center md:text-left">
                                <div className="text-4xl font-black text-cyan-600 mb-1">{s.val}</div>
                                <div className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em]">{s.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* THE PROBLEM - THE SENSORY FLOOD */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:w-1/2">
                            <span className="text-cyan-600 font-bold tracking-[0.3em] uppercase text-xs block mb-6">Cognitive Overload</span>
                            <h2 className="text-4xl md:text-7xl font-bold text-slate-900 mb-8 leading-[1.05]">The <span className="text-cyan-600 italic">Sensory</span> Flood.</h2>
                            <p className="text-xl text-slate-600 leading-relaxed mb-10">Modern multi-sensor platforms generate more data per second than any analyst group can interpret. When raw data is not transformed into comprehension on the platform, critical intelligence is lost in the transmission noise.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { title: 'Data Decay', body: 'Critical patterns are missed in the volume.', val: '80% Lost' },
                                    { title: 'Decision Lag', body: 'Latency between sight and action.', val: '12s+ Delay' }
                                ].map((stat, i) => (
                                    <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                        <div className="text-2xl font-black text-cyan-600 font-mono mb-2 italic">{stat.val}</div>
                                        <h4 className="font-bold text-slate-900 text-sm mb-1">{stat.title}</h4>
                                        <p className="text-slate-500 text-[10px] leading-relaxed">{stat.body}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:w-1/2 relative">
                            <div className="aspect-square bg-slate-100 rounded-[3rem] overflow-hidden relative group border border-slate-200 shadow-2xl">
                                <img src={ProblemImg} alt="Sensory Data" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[10s]" />
                                <div className="absolute inset-0 bg-cyan-900/10 mix-blend-overlay" />

                                {/* AI OVERLAY ELEMENTS */}
                                <div className="absolute top-10 right-10 w-40 h-40 border border-white/20 rounded-full animate-spin [animation-duration:20s] pointer-events-none" />
                                <div className="absolute bottom-10 left-10 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white">
                                    <div className="text-[10px] font-mono text-cyan-400 mb-1 tracking-widest">SCENE_ANALYSIS</div>
                                    <div className="text-lg font-black font-mono tracking-tighter uppercase">Processing 2.4GB/s</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* THE CAPABILITIES - SCENE INTELLIGENCE FLOW */}
            <section className="py-32 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-24">
                        <span className="text-cyan-600 font-bold tracking-[0.4em] uppercase text-[10px] block mb-4">Neural Infrastructure</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Scene <span className="text-cyan-600 italic font-serif">Intelligence</span> Stack</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {layers.map((layer, i) => (
                            <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group">
                                <div className="bg-white rounded-[3rem] p-10 h-full border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 relative flex flex-col">
                                    <div className="absolute top-8 right-8 text-6xl font-black text-slate-50 group-hover:text-cyan-50 transition-colors pointer-events-none">0{i + 1}</div>
                                    <div className="w-14 h-14 bg-cyan-600 rounded-2xl flex items-center justify-center text-white text-2xl mb-12 shadow-lg shadow-cyan-200 group-hover:scale-110 transition-transform">
                                        {i === 0 ? <FaCamera /> : i === 1 ? <FaBrain /> : <FaMicrochip />}
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-6 leading-tight">{layer.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">{layer.body}</p>
                                    <div className="rounded-2xl overflow-hidden h-40 border border-slate-100 mb-8 relative">
                                        <img src={layer.img} alt={layer.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[5s]" />
                                        <div className="absolute inset-0 bg-cyan-600/10 mix-blend-overlay" />
                                    </div>
                                    <ul className="space-y-3">
                                        {layer.items.slice(0, 3).map((item, j) => (
                                            <li key={j} className="flex items-center gap-3 text-slate-500 text-xs font-medium"><FaCheckCircle className="text-cyan-500 shrink-0" /> {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SCENARIOS - OPERATIONAL PROOF */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div>
                            <span className="text-cyan-600 font-bold tracking-widest uppercase text-xs mb-4 block">Field Validation</span>
                            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 max-w-2xl leading-tight">Visualizing the <span className="text-cyan-600 italic">Unseen.</span></h2>
                        </div>
                        <div className="flex gap-4">
                            {scenarios.map((_, i) => (
                                <button key={i} onClick={() => setActiveScenario(i)} className={`px-6 py-3 rounded-2xl border-2 font-bold transition-all text-xs uppercase tracking-widest ${activeScenario === i ? 'bg-cyan-600 border-cyan-600 text-white shadow-xl shadow-cyan-200 scale-105' : 'bg-white border-slate-200 text-slate-400 hover:border-cyan-300'}`}>Scenario 0{i + 1}</button>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-[4rem] overflow-hidden grid grid-cols-1 lg:grid-cols-5 shadow-[0_32px_128px_-32px_rgba(8,145,178,0.15)] relative border border-slate-100">
                        <div className="lg:col-span-3 relative h-[500px] lg:h-[600px] overflow-hidden group">
                            <motion.div key={activeScenario} initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} className="w-full h-full relative">
                                <img src={scenarios[activeScenario].img} alt={scenarios[activeScenario].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[10s]" />
                                <div className="absolute inset-0 bg-cyan-50/10 mix-blend-overlay" />
                            </motion.div>
                        </div>

                        <div className="lg:col-span-2 p-16 flex flex-col justify-center bg-slate-50 relative">
                            <motion.div key={`text-${activeScenario}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                                <div className="text-cyan-600 font-bold text-[10px] mb-4 uppercase tracking-[0.3em] underline decoration-cyan-200 decoration-2 underline-offset-4">Operational Phase // 0{activeScenario + 1}</div>
                                <h3 className="text-4xl font-black text-slate-900 mb-6 leading-tight tracking-tighter">{scenarios[activeScenario].title}</h3>
                                <p className="text-cyan-600 text-lg leading-relaxed mb-8 italic border-l-4 border-cyan-600 pl-6">"{scenarios[activeScenario].sub}"</p>
                                <p className="text-slate-600 text-xl leading-relaxed mb-10 font-medium">{scenarios[activeScenario].detail}</p>

                                <div className="flex flex-wrap gap-3 pt-10 border-t border-slate-200">
                                    {['Multi-Modal', 'On-Board AI', 'Low Latency'].map(tag => (
                                        <span key={tag} className="px-5 py-2 rounded-full border border-cyan-100 text-cyan-700 text-[10px] uppercase font-bold tracking-widest bg-white shadow-sm">{tag}</span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* COMPARISON - SPECTRAL INTELLIGENCE */}
            <section className="py-32 bg-slate-50 relative overflow-hidden">
                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-24">
                        <span className="text-cyan-600 font-bold tracking-[0.4em] uppercase text-[10px] block mb-4">Strategic Matrix</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">Data Streaming vs <span className="text-cyan-600 italic">Scene Intelligence</span></h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white rounded-[3rem] p-12 border border-slate-200 shadow-sm relative group overflow-hidden">
                            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-10">Standard Sensor Ops</h4>
                            <div className="space-y-6">
                                {[
                                    'Raw pixels streamed to remote human analysts.',
                                    'Critical events buried in high volume of neutral data.',
                                    'Single-modal (EO only) – easily blinded by smoke.',
                                    'Latency between sight and human recognition.',
                                    'Predictable vulnerabilities in electronic warfare.'
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 text-slate-500 text-sm">
                                        <FaBan className="text-red-400 shrink-0 mt-1" /> {item}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white rounded-[3rem] p-12 border border-cyan-200 shadow-2xl shadow-cyan-100/50 relative group overflow-hidden">
                            <h4 className="text-sm font-black text-cyan-600 uppercase tracking-widest mb-10">Novaliseo Perception</h4>
                            <div className="space-y-6">
                                {[
                                    'Full scene comprehension processed at the edge.',
                                    'Autonomous filtering of operationally significant movement.',
                                    'Multi-modal (Radar + EO) – sees through any condition.',
                                    'Sub-second loop from perception to platform action.',
                                    'Behavioral intent analysis – recognizing threats early.'
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-5 bg-cyan-50/50 rounded-2xl border border-cyan-100 text-slate-700 text-sm font-bold">
                                        <FaCheckCircle className="text-cyan-600 shrink-0 mt-1" /> {item}
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
                        <div className="w-24 h-24 bg-cyan-50 rounded-full flex items-center justify-center mx-auto mb-10 border border-cyan-100 shadow-inner">
                            <FaEye className="text-cyan-600 text-4xl shadow-[0_0_20px_rgba(8,145,178,0.3)]" />
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter">See the Scene.</h2>
                        <p className="text-slate-500 text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-medium">Integration support for all indigenous perception, ISR, and autonomy programmes. Sovereign scene understanding.</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <a href="/contact" className="inline-flex items-center gap-4 px-12 py-6 bg-slate-900 text-white font-black rounded-full shadow-2xl hover:scale-105 transition-all text-xs uppercase tracking-widest">Initialize Watch <FaArrowRight /></a>
                            <a href="/contact" className="inline-flex items-center gap-4 px-12 py-6 bg-white border-2 border-cyan-600 text-cyan-600 font-bold rounded-full hover:bg-slate-50 transition-all text-sm tracking-tight">Perception Architecture</a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};
export default PerceptionOps;
