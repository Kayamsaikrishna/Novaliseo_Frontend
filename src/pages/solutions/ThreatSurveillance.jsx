import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FaEye, FaShieldAlt, FaCheckCircle, FaBan,
    FaArrowRight, FaExclamationTriangle, FaCrosshairs,
    FaBroadcastTower, FaSatellite, FaSearchPlus, FaStream
} from 'react-icons/fa';

import HeroImg from '../../assets/autonomous-systems/Boarder Security.png';
import Img1 from '../../assets/autonomous-systems/sensor.png';
import Img2 from '../../assets/autonomous-systems/Edge Classification.png';
import Img3 from '../../assets/autonomous-systems/Threat survellieance.png';

// Section & Scenario Assets
import DataOverloadImg from '../../assets/autonomous-systems/defence_hero_strategic_v2_1771334713607.png';
import BorderImg from '../../assets/autonomous-systems/Boarder Security.png';
import ForwardAreaImg from '../../assets/autonomous-systems/Forward area.png';
import UrbanISRImg from '../../assets/autonomous-systems/real_time_mapping.png';
import MaritimeImg from '../../assets/autonomous-systems/maritime.png';

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } };
const fadeLeft = { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } };
const fadeRight = { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } };

const scenarios = [
    { title: 'Border Perimeter Monitoring', sub: 'Continuous autonomous watch over extended border regions without fatigue or human gap.', img: BorderImg, detail: 'Physical patrol coverage of a large border is operationally infeasible. Persistent airborne ISR with on-board threat classification enables continuous anomaly detection across vast regions — flagging only confirmed events to human operators.' },
    { title: 'Forward Area Threat Cueing', sub: 'Detecting and classifying threats before they enter engagement range.', img: ForwardAreaImg, detail: 'Providing early warning before a threat reaches the protected zone is the highest-value function of surveillance intelligence. Our systems are designed to identify, classify, and cue threats at maximum standoff range.' },
    { title: 'Urban ISR', sub: 'Tracking movement and identifying anomalies in dense urban and infrastructure environments.', img: UrbanISRImg, detail: 'Urban environments present extreme clutter that defeats conventional surveillance systems. Our perception engine is designed to distinguish operationally significant behaviour from background civilian activity with high accuracy.' },
    { title: 'Maritime Domain Awareness', sub: 'Persistent watch over coastal and blue-water maritime zones.', img: MaritimeImg, detail: 'Maritime intrusions often occur below the detection threshold of shore-based radar. Airborne optical and multi-sensor surveillance platforms with on-board classification extend domain awareness to the horizon and beyond.' },
];

const ThreatSurveillance = () => {
    const [activeScenario, setActiveScenario] = useState(0);
    return (
        <div className="bg-white text-slate-900 font-sans selection:bg-red-600 selection:text-white">

            {/* HERO - RESTORED MAJESTIC BACKGROUND */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50 border-b border-slate-200">
                <motion.div initial={{ scale: 1.05, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.5 }} className="absolute inset-0 z-0">
                    <img src={HeroImg} alt="Threat Surveillance" className="w-full h-full object-cover opacity-60 grayscale-[0.2]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
                </motion.div>

                {/* SCANNING GRID OVERLAY */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ef4444_1px,transparent_1px),linear-gradient(to_bottom,#ef4444_1px,transparent_1px)] bg-[size:60px_60px]" />
                    <motion.div
                        animate={{ y: ['-100%', '100%'] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50 shadow-[0_0_20px_rgba(239,68,68,0.5)]"
                    />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 rounded-full text-red-700 font-bold text-xs uppercase tracking-widest mb-8 shadow-sm">
                            <FaEye className="animate-pulse" /> Persistent Surveillance Intelligence
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black leading-[0.95] text-slate-900 mb-8 tracking-tighter">
                            See the Threat.<br /><span className="text-red-600">Before It Sees You.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mb-12 font-medium">
                            We are engineering persistent intelligence that watches without tiring, detects without instruction, and alerts without delay — across every operational domain.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-700 transition-all shadow-xl text-lg">Initalize Watch <FaArrowRight /></a>
                            <a href="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-white border-2 border-slate-900 text-slate-900 rounded-full font-bold hover:bg-slate-50 transition-all text-lg">Sensor Topology</a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* STAT STRIP - LIGHT ELITE */}
            <section className="py-16 bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-x-0 md:divide-x divide-slate-100 gap-y-10">
                        {[
                            { val: 'Persistent', label: 'All-weather watch' },
                            { val: 'Instant', label: 'Threat classification' },
                            { val: 'Full', label: 'On-board processing' },
                            { val: 'Multi', label: 'Sensor fusion' },
                        ].map((s, i) => (
                            <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="px-8 text-center md:text-left">
                                <div className="text-4xl font-black text-red-600 mb-1">{s.val}</div>
                                <div className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em]">{s.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* THE PROBLEM - RISK SPOTLIGHT */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                            <span className="text-red-600 font-bold tracking-[0.2em] uppercase text-xs block mb-6">Operational Gap</span>
                            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-[1.1]">The Vigilance <span className="text-red-600">Bottleneck.</span></h2>
                            <p className="text-xl text-slate-600 leading-relaxed mb-10">Modern multi-domain surveillance generates data at a rate that exceeds human cognitive limits. In the gap between detection and recognition, critical threats go unnoticed.</p>

                            <div className="space-y-6">
                                {[
                                    { title: 'Cognitive Saturation', body: 'Analysts cannot maintain 100% vigilance over 8+ hour shifts.' },
                                    { title: 'Signal Decay', body: 'Raw feeds are often discarded before critical patterns are recognized.' },
                                    { title: 'Latency Lag', body: 'The delay between raw data and human alert creates a window of vulnerability.' }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-5 p-6 bg-slate-50 rounded-2xl border border-slate-100 items-start">
                                        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-xs shrink-0">{i + 1}</div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                            <p className="text-slate-500 text-sm">{item.body}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative">
                            <div className="rounded-[3rem] overflow-hidden shadow-2xl border border-slate-200 aspect-square group">
                                <img src={DataOverloadImg} alt="Data Overload" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[10s]" />
                                <div className="absolute inset-0 bg-red-900/10 mix-blend-overlay" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* THE CAPABILITIES - INTELLIGENCE GRID */}
            <section className="py-32 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-24">
                        <span className="text-red-600 font-bold tracking-[0.3em] uppercase text-xs block mb-4">Core Architecture</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">The Intelligence <span className="text-red-600">Grid</span></h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* CARD 1 - MULTI-SENSOR */}
                        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-2 group">
                            <div className="bg-white rounded-[3rem] p-10 h-full border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden">
                                <div className="flex flex-col lg:flex-row gap-12 items-center">
                                    <div className="lg:w-1/2">
                                        <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 text-2xl mb-8 border border-red-100"><FaSearchPlus /></div>
                                        <h3 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">Persistent Multi-Sensor Watch</h3>
                                        <p className="text-slate-600 leading-relaxed mb-8">Raw data from optical, thermal, and radar emitters is fused on-board into a single unified workspace — providing a 24/7 watch with no gaps in vigilance.</p>
                                        <ul className="space-y-3">
                                            {['All-weather multi-modal fusion', 'Autonomous scan-pattern coverage', 'Synchronized sensor hand-offs'].map((li, i) => (
                                                <li key={i} className="flex items-center gap-3 text-slate-700 text-sm font-medium"><FaCheckCircle className="text-red-500" /> {li}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="lg:w-1/2 relative h-full min-h-[300px] w-full rounded-3xl overflow-hidden border border-slate-100">
                                        <img src={Img1} alt="Sensor Fusion" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[5s]" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* CARD 2 - EDGE CLASSIFICATION */}
                        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group">
                            <div className="bg-white rounded-[3rem] p-10 h-full border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500">
                                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 text-2xl mb-8 border border-red-100"><FaStream /></div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 leading-tight">Autonomous Edge Classification</h3>
                                <p className="text-slate-600 leading-relaxed text-sm mb-8">Deep learning models running on local silicon identify objects and behaviors at the source, ensuring intelligence is generated even under comms denial.</p>
                                <div className="rounded-2xl overflow-hidden border border-slate-100 h-48 relative">
                                    <img src={Img2} alt="Edge AI" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[5s]" />
                                    <div className="absolute inset-0 bg-red-900/10 mix-blend-overlay" />
                                </div>
                            </div>
                        </motion.div>

                        {/* CARD 3 - ALERT PROPAGATION */}
                        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group">
                            <div className="bg-white rounded-[3rem] p-10 h-full border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500">
                                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 text-2xl mb-8 border border-red-100"><FaBroadcastTower /></div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 leading-tight">Precision Intelligence Cueing</h3>
                                <p className="text-slate-600 leading-relaxed text-sm mb-8">Alerts are transmitted as lightweight structured packets, enabling immediate operational response with full situational context delivered to the command layer.</p>
                                <div className="rounded-2xl overflow-hidden border border-slate-100 h-48 relative">
                                    <img src={Img3} alt="Alerts" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[5s]" />
                                    <div className="absolute inset-0 bg-slate-900/10 mix-blend-overlay" />
                                </div>
                            </div>
                        </motion.div>

                        {/* CARD 4 - MISSION COORDINATION */}
                        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-2 group">
                            <div className="bg-red-50 rounded-[3rem] p-10 h-full border border-red-100 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-200/20 via-transparent to-transparent pointer-events-none" />
                                <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
                                    <div className="lg:w-2/3">
                                        <div className="text-red-500 font-mono text-xs mb-4 uppercase tracking-widest">Target Integration</div>
                                        <h3 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">Full-Spectrum Command Integration</h3>
                                        <p className="text-slate-600 leading-relaxed mb-10">Our surveillance intelligence feed is engineered to plug directly into existing C2 architectures, appearing as prioritized machine alerts rather than simple video streams.</p>
                                        <div className="flex flex-wrap gap-4">
                                            {['API-First Interface', 'Direct C2 Sync', 'Low-Bandwidth Modes'].map(tag => (
                                                <span key={tag} className="px-5 py-2 rounded-full border border-red-200 text-red-700 text-xs font-bold bg-white">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="lg:w-1/3 text-center">
                                        <div className="inline-block p-10 border border-red-200 rounded-full relative group bg-white shadow-xl">
                                            <div className="absolute inset-0 bg-red-500/5 rounded-full animate-ping pointer-events-none" />
                                            <FaSatellite className="text-red-600 text-6xl" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SCENARIOS - BENTO BOX LAYOUT */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-12 items-end mb-20">
                        <div className="lg:w-1/2">
                            <span className="text-red-600 font-bold tracking-widest uppercase text-xs mb-3 block">Real-World Deployment</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-0">Operational <span className="text-red-600">Landscapes.</span></h2>
                        </div>
                        <div className="lg:w-1/2 flex flex-wrap gap-2 justify-end">
                            {scenarios.map((s, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveScenario(i)}
                                    className={`px-6 py-3 rounded-full text-xs font-bold border transition-all ${activeScenario === i ? 'bg-red-600 text-white border-red-600 shadow-xl scale-105' : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300'}`}
                                >
                                    {s.title}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                        <div className="lg:col-span-7 relative group rounded-[3rem] overflow-hidden border border-slate-100 shadow-2xl h-[500px]">
                            <motion.div key={activeScenario} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="w-full h-full">
                                <img src={scenarios[activeScenario].img} alt={scenarios[activeScenario].title} className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-105" />
                                <div className="absolute inset-0 bg-red-50/10 mix-blend-overlay" />
                            </motion.div>
                        </div>
                        <div className="lg:col-span-5 bg-slate-50 rounded-[3rem] p-12 flex flex-col justify-between border border-slate-100 shadow-sm">
                            <motion.div key={activeScenario} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                                <div className="text-red-600 font-bold text-xs mb-6 uppercase tracking-[0.2em]">{`Scenario 0${activeScenario + 1}`}</div>
                                <h3 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">{scenarios[activeScenario].title}</h3>
                                <p className="text-slate-500 leading-relaxed mb-6 italic">"{scenarios[activeScenario].sub}"</p>
                                <p className="text-slate-600 leading-relaxed text-lg">{scenarios[activeScenario].detail}</p>
                            </motion.div>
                            <div className="mt-10 pt-10 border-t border-slate-200 flex items-center justify-between">
                                <div className="flex items-center gap-2 text-red-600 font-bold text-sm group cursor-pointer">
                                    <span>Deployment Specs</span>
                                    <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* COMPARISON - ELITE DATA DASHBOARD - LIGHT */}
            <section className="py-32 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-24">
                        <span className="text-red-600 font-bold tracking-widest uppercase text-xs mb-4 block">Intelligence Advantage</span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tighter">System Performance <span className="text-red-600 italic underline decoration-red-100 decoration-8 underline-offset-4">Delta</span></h2>
                        <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium text-lg">Quantifying the shift from manual monitoring to autonomous high-fidelity watch.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-sm">
                            <div className="text-slate-400 font-bold text-[10px] mb-8 uppercase tracking-widest">Legacy Surveillance</div>
                            <div className="space-y-8">
                                {[
                                    { label: 'Vigilance Profile', val: 'Fatigue-Capped', p: 40 },
                                    { label: 'Data Processing', val: 'Human-Gated Stream', p: 30 },
                                    { label: 'Alert Fidelity', val: 'High Noise / False Positives', p: 55 }
                                ].map((row, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between mb-3 text-slate-500 font-bold">
                                            <span className="text-sm">{row.label}</span>
                                            <span className="text-xs font-mono">{row.val}</span>
                                        </div>
                                        <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-slate-300" style={{ width: `${row.p}%` }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white rounded-[2.5rem] p-10 border border-red-200 shadow-2xl shadow-red-100/50 relative overflow-hidden group">
                            <div className="relative z-10">
                                <div className="text-red-600 font-bold text-[10px] mb-8 uppercase tracking-widest">Novaliseo Autonomous ISR</div>
                                <div className="space-y-8">
                                    {[
                                        { label: 'Vigilance Profile', val: '24/7 Machine Persistent', p: 100 },
                                        { label: 'Data Processing', val: 'Real-Time Edge Fusion', p: 95 },
                                        { label: 'Alert Fidelity', val: 'Confidence-Weighted Alerts', p: 98 }
                                    ].map((row, i) => (
                                        <div key={i}>
                                            <div className="flex justify-between mb-3 text-slate-900 font-black">
                                                <span className="text-sm">{row.label}</span>
                                                <span className="text-xs font-mono text-red-600">{row.val}</span>
                                            </div>
                                            <div className="w-full h-1.5 bg-red-50 rounded-full overflow-hidden">
                                                <motion.div initial={{ width: 0 }} whileInView={{ width: `${row.p}%` }} transition={{ duration: 1.5, delay: i * 0.2 }} className="h-full bg-red-600" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA - LIGHT */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-10 border border-red-100 shadow-inner">
                            <FaEye className="text-red-600 text-4xl shadow-[0_0_20px_rgba(239,68,68,0.3)]" />
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter">Eyes That Never Close.</h2>
                        <p className="text-slate-500 text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-medium">Integration and customisation support for all indigenous border, maritime, and forward-area surveillance programmes.</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <a href="/contact" className="inline-flex items-center gap-4 px-12 py-6 bg-slate-900 text-white font-black rounded-full shadow-2xl hover:scale-105 transition-all text-xs uppercase tracking-widest">Initialize Integration <FaArrowRight /></a>
                            <a href="/contact" className="inline-flex items-center gap-4 px-12 py-6 bg-white border-2 border-red-600 text-red-600 font-bold rounded-full hover:bg-slate-50 transition-all text-sm tracking-tight">Technical Topology</a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ThreatSurveillance;
