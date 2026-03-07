import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FaCrosshairs, FaCheckCircle, FaArrowRight,
    FaExclamationTriangle, FaShieldAlt, FaBolt,
    FaBan, FaGavel, FaEye, FaMicrochip
} from 'react-icons/fa';

import HeroImg from '../../assets/autonomous-systems/defence_hero_strategic_1771334627855.png';
import Img1 from '../../assets/autonomous-systems/sensor.png';
import Img2 from '../../assets/autonomous-systems/sovereign_intelligence_abstract_v2_1771334796018.png';
import Img3 from '../../assets/autonomous-systems/indigenous_core_abstract_v2_1771334339840.png';

// Section & Scenario Assets
import ProblemImg from '../../assets/autonomous-systems/defence_hero_strategic_v2_1771334713607.png';
import SurgicalImg from '../../assets/autonomous-systems/sensor.png';
import IndustrialImg from '../../assets/autonomous-systems/Boarder Security.png';
import ExclusionImg from '../../assets/autonomous-systems/defence_hero_strategic_v2_1771334764385.png';
import EscortImg from '../../assets/autonomous-systems/strategic_mesh_nodes_v2_1771334837767.png';

const scenarios = [
    { title: 'Surgical Counter-UAS', sub: 'Neutralising hostile drone incursions at the high-altitude frontier.', img: SurgicalImg, detail: 'Asymmetric drone threats along the Himalayan frontier move faster than human reaction. Our surgical engagement engine provides sub-second detection, classification, and neutralisation — keeping the operator in control while the platform acts at machine speed.' },
    { title: 'Industrial Force Protection', sub: 'Protecting critical energy and strategic infrastructure.', img: IndustrialImg, detail: 'Critical national assets require 24/7 vigilant defense. Engagement authority is pre-defined for specific protection zones, allowing the platform to autonomously interdict threats without waiting for manual authorization in high-tempo attacks.' },
    { title: 'Frontier Exclusion Zones', sub: 'Maintaining persistent area denial across the Thar Desert.', img: ExclusionImg, detail: 'Vast border segments are impossible to man physically. Autonomous interceptor platforms with on-board authority can identify and proportionally respond to incursions, maintaining a "digital fence" that human patrols cannot match in persistency.' },
    { title: 'Tactical Escort Screening', sub: 'Autonomous protective screen for high-value convoys.', img: EscortImg, detail: 'Convoys in contested terrain face multi-axis threats. Autonomous escort platforms move ahead to detect and neutralize ambushes or IED triggers, reacting within milliseconds of detection to protect the main force.' },
];

const layers = [
    { num: 1, color: 'rose', side: 'left', img: Img1, title: 'Multi-Spectral Detection', body: 'The system maintains a continuous 360° awareness, detecting and tracking objects across optical, thermal, and radio spectrums — classifying threats against known indigenous and adversary signatures.', hud: [['DETECT', 'CONT'], ['TRACK', 'LOCK'], ['SIG', 'INDIG']], items: ['Continuous 360° threat space monitoring', 'Signature-based multi-modal classification', 'Simultaneous tracking of 50+ contacts', 'Early-warning engagement window lead'] },
    { num: 2, color: 'red', side: 'right', img: Img2, title: 'Authority Bounding', body: 'Before any engagement, the on-board logic validates the commander’s preset authority — confirming Rules of Engagement (ROE) and proportionality. No action is taken outside the human-defined parameters.', hud: [['AUTH', 'VALID'], ['ROE', 'ACTIVE'], ['HUMAN', 'ID']], items: ['Pre-authorized engagement envelopes', 'Autonomous ROE validation on-board', 'Conflict resolution logic', 'Full accountability audit trail'] },
    { num: 3, color: 'rose', side: 'left', img: Img3, title: 'Proportional Response', body: 'Once authorized, the system executes the most proportional response — from soft-kill signal disruption to hardware interdiction — closing the see-to-act loop at machine speed.', hud: [['ACT', 'DIRECT'], ['MODE', 'PROP'], ['LOOP', 'CLOSED']], items: ['Precision signal disruption (soft-kill)', 'Kinetic interdiction capability', 'Target hand-off to crewed systems', 'Post-engagement verifiable record'] },
];

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } };
const fadeLeft = { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } };
const fadeRight = { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } };

const EngagementCounterThreat = () => {
    const [activeScenario, setActiveScenario] = useState(0);
    return (
        <div className="bg-white text-slate-900 font-sans selection:bg-rose-600 selection:text-white">
            {/* HERO - RESTORED MAJESTIC BACKGROUND */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white border-b border-slate-200">
                <motion.div initial={{ scale: 1.05, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.5 }} className="absolute inset-0 z-0">
                    <img src={HeroImg} alt="Engagement & Counter-Threat" className="w-full h-full object-cover opacity-60 grayscale-[0.2]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
                </motion.div>

                {/* RAPID-FIRE STAT BUBBLES */}
                <div className="absolute right-[10%] top-[40%] hidden lg:block z-20 space-y-6">
                    {[
                        { label: 'LOCK-ON', val: '0.2s', color: 'rose' },
                        { label: 'CLASSIFY', val: '0.4s', color: 'red' },
                        { label: 'RESPONSE', val: 'SUB-SEC', color: 'rose' }
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1 + i * 0.2 }}
                            className={`bg-white/90 backdrop-blur-xl border border-${stat.color}-200 p-4 rounded-2xl shadow-xl flex flex-col items-center justify-center w-28 h-28 transform rotate-3 hover:rotate-0 transition-transform`}
                        >
                            <span className={`text-${stat.color}-500 text-[10px] font-bold tracking-tighter`}>{stat.label}</span>
                            <span className="text-slate-900 text-xl font-black">{stat.val}</span>
                        </motion.div>
                    ))}
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-50 border border-rose-100 rounded-full text-rose-700 font-bold text-xs uppercase tracking-widest mb-8 shadow-sm">
                            <FaCrosshairs className="animate-pulse" /> Engagement & Counter-Threat
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black leading-[0.95] text-slate-900 mb-8 tracking-tighter">
                            Machine Speed<br /><span className="text-rose-600">Neutralization.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mb-12 font-medium">We are engineering controlled autonomous engagement — where platforms detect, decide, and act within millisecond authority boundaries.</p>
                        <div className="flex flex-wrap gap-4">
                            <a href="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-700 transition-all shadow-xl text-lg">Initalize Shield <FaArrowRight /></a>
                            <a href="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-white border-2 border-slate-900 text-slate-900 rounded-full font-bold hover:bg-slate-50 transition-all text-lg">Engagement ROE</a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* STAT STRIP - LIGHT ELITE */}
            <section className="py-16 bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-x-0 md:divide-x divide-slate-100 gap-y-10">
                        {[{ val: 'Sub-second', label: 'Detect-to-respond' }, { val: 'Bounded', label: 'Authority envelope' }, { val: 'Full', label: 'Decision transparency' }, { val: 'Proportional', label: 'Response by design' }].map((s, i) => (
                            <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="px-8 text-center md:text-left">
                                <div className="text-4xl font-black text-rose-600 mb-1">{s.val}</div>
                                <div className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em]">{s.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* THE PROBLEM - THE REACTION GAP */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:w-1/2">
                            <span className="text-rose-600 font-bold tracking-[0.3em] uppercase text-xs block mb-6">Critical Latency</span>
                            <h2 className="text-4xl md:text-7xl font-bold text-slate-900 mb-8 leading-[1.05]">The <span className="text-rose-600 italic">Reaction</span> Gap.</h2>
                            <p className="text-xl text-slate-600 leading-relaxed mb-10">High-speed tactical threats outpace human biological reaction limits. By the time a human operator identifies and authorizes an engagement, the window for successful interdiction has already closed. Controlled autonomy is the only solution.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { title: 'Observe-Act', body: 'Biological OODA loop latency.', val: '8-12s Delay' },
                                    { title: 'Interference Window', body: 'Comms loss during attacks.', val: '90% Risk' }
                                ].map((stat, i) => (
                                    <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                        <div className="text-2xl font-black text-rose-600 font-mono mb-2 italic">{stat.val}</div>
                                        <h4 className="font-bold text-slate-900 text-sm mb-1">{stat.title}</h4>
                                        <p className="text-slate-500 text-[10px] leading-relaxed">{stat.body}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:w-1/2 relative">
                            <div className="aspect-square bg-slate-100 rounded-[3rem] overflow-hidden relative group border border-slate-200 shadow-2xl">
                                <img src={ProblemImg} alt="Targeting Data" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[10s]" />
                                <div className="absolute inset-0 bg-rose-900/10 mix-blend-overlay" />

                                {/* TARGETING RETICLE OVERLAY */}
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="w-64 h-64 border-2 border-white/20 rounded-full animate-[spin_5s_linear_infinite]" />
                                    <div className="absolute w-12 h-1 bg-rose-600 shadow-[0_0_15px_rgba(225,29,72,0.8)]" />
                                    <div className="absolute w-1 h-12 bg-rose-600 shadow-[0_0_15px_rgba(225,29,72,0.8)]" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* THE CAPABILITIES - ENGAGEMENT FLOW */}
            <section className="py-32 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-24">
                        <span className="text-rose-600 font-bold tracking-[0.4em] uppercase text-[10px] block mb-4">Tactical Infrastructure</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Engagement <span className="text-rose-600 italic font-serif">Authority</span> Stack</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {layers.map((layer, i) => (
                            <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group">
                                <div className="bg-white rounded-[3rem] p-10 h-full border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 relative flex flex-col">
                                    <div className="absolute top-8 right-8 text-6xl font-black text-slate-50 group-hover:text-rose-50 transition-colors pointer-events-none">0{i + 1}</div>
                                    <div className="w-14 h-14 bg-rose-600 rounded-2xl flex items-center justify-center text-white text-2xl mb-12 shadow-lg shadow-rose-200 group-hover:scale-110 transition-transform">
                                        {i === 0 ? <FaEye /> : i === 1 ? <FaGavel /> : <FaBolt />}
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-6 leading-tight">{layer.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">{layer.body}</p>
                                    <div className="rounded-2xl overflow-hidden h-40 border border-slate-100 mb-8 relative">
                                        <img src={layer.img} alt={layer.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[5s]" />
                                        <div className="absolute inset-0 bg-rose-600/10 mix-blend-overlay" />
                                    </div>
                                    <ul className="space-y-3">
                                        {layer.items.slice(0, 3).map((item, j) => (
                                            <li key={j} className="flex items-center gap-3 text-slate-500 text-xs font-medium"><FaCheckCircle className="text-rose-500 shrink-0" /> {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SCENARIOS - ENGAGEMENT PROOF */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div>
                            <span className="text-rose-600 font-bold tracking-widest uppercase text-xs mb-4 block">Deployment Validation</span>
                            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 max-w-2xl leading-tight">Neutralizing at <span className="text-rose-600 italic">Machine Speed.</span></h2>
                        </div>
                        <div className="flex gap-4">
                            {scenarios.map((_, i) => (
                                <button key={i} onClick={() => setActiveScenario(i)} className={`px-6 py-3 rounded-2xl border-2 font-bold transition-all text-xs uppercase tracking-widest ${activeScenario === i ? 'bg-rose-600 border-rose-600 text-white shadow-xl shadow-rose-200 scale-105' : 'bg-white border-slate-200 text-slate-400 hover:border-rose-300'}`}>Scenario 0{i + 1}</button>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-[4rem] overflow-hidden grid grid-cols-1 lg:grid-cols-5 shadow-[0_32px_128px_-32px_rgba(225,29,72,0.15)] relative border border-slate-100">
                        <div className="lg:col-span-3 relative h-[500px] lg:h-[600px] overflow-hidden group">
                            <motion.div key={activeScenario} initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} className="w-full h-full relative">
                                <img src={scenarios[activeScenario].img} alt={scenarios[activeScenario].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[10s]" />
                                <div className="absolute inset-0 bg-rose-50/10 mix-blend-overlay" />
                            </motion.div>
                        </div>

                        <div className="lg:col-span-2 p-16 flex flex-col justify-center bg-slate-50 relative">
                            <motion.div key={`text-${activeScenario}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                                <div className="text-rose-600 font-bold text-[10px] mb-4 uppercase tracking-[0.3em] underline decoration-rose-200 decoration-2 underline-offset-4">Operational Phase // 0{activeScenario + 1}</div>
                                <h3 className="text-4xl font-black text-slate-900 mb-6 leading-tight tracking-tighter">{scenarios[activeScenario].title}</h3>
                                <p className="text-rose-600 text-lg leading-relaxed mb-8 italic border-l-4 border-rose-600 pl-6">"{scenarios[activeScenario].sub}"</p>
                                <p className="text-slate-600 text-xl leading-relaxed mb-10 font-medium">{scenarios[activeScenario].detail}</p>

                                <div className="flex flex-wrap gap-3 pt-10 border-t border-slate-200">
                                    {['Authorized', 'Proportional', 'High-Precision'].map(tag => (
                                        <span key={tag} className="px-5 py-2 rounded-full border border-rose-100 text-rose-700 text-[10px] uppercase font-bold tracking-widest bg-white shadow-sm">{tag}</span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* COMPARISON - AUTHORITY VS MANUAL LOOP */}
            <section className="py-32 bg-slate-50 relative overflow-hidden">
                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-24">
                        <span className="text-rose-600 font-bold tracking-[0.4em] uppercase text-[10px] block mb-4">Strategic Matrix</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">Human Lag vs <span className="text-rose-600 italic">Authority-Bounded</span> Neutralisation</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white rounded-[3rem] p-12 border border-slate-200 shadow-sm relative group overflow-hidden">
                            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-10">Manual Engagement Loop</h4>
                            <div className="space-y-6">
                                {[
                                    'Identify and authorization requires 8s+ human input.',
                                    'Response speed limited by biological reaction time.',
                                    'Comms latency creates critical vulnerability window.',
                                    'Indiscriminate interference affects friendly signals.',
                                    'No local ROE validation at the moment of contact.'
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 text-slate-500 text-sm">
                                        <FaBan className="text-red-400 shrink-0 mt-1" /> {item}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white rounded-[3rem] p-12 border border-rose-200 shadow-2xl shadow-rose-100/50 relative group overflow-hidden">
                            <h4 className="text-sm font-black text-rose-600 uppercase tracking-widest mb-10">Novaliseo Controlled Autonomy</h4>
                            <div className="space-y-6">
                                {[
                                    'Engagement authority pre-defined by commander.',
                                    'Interdiction executes within milliseconds of classification.',
                                    'Comms-independent operation during engagement.',
                                    'Surgical soft-kill disruption for zero collateral.',
                                    'Continuous on-board validation of proportionality.'
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-5 bg-rose-50/50 rounded-2xl border border-rose-100 text-slate-700 text-sm font-bold">
                                        <FaCheckCircle className="text-rose-500 shrink-0 mt-1" /> {item}
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
                        <div className="w-24 h-24 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-10 border border-rose-100 shadow-inner">
                            <FaCrosshairs className="text-rose-600 text-4xl shadow-[0_0_20px_rgba(225,29,72,0.3)]" />
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter">Machine Speed.</h2>
                        <p className="text-slate-500 text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-medium">Integration support for all indigenous counter-UAS, active autonomous software based, and engagement platforms. Sovereign and accountable.</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <a href="/contact" className="inline-flex items-center gap-4 px-12 py-6 bg-slate-900 text-white font-black rounded-full shadow-2xl hover:scale-105 transition-all text-xs uppercase tracking-widest">Initialize Shield <FaArrowRight /></a>
                            <a href="/contact" className="inline-flex items-center gap-4 px-12 py-6 bg-white border-2 border-rose-600 text-rose-600 font-bold rounded-full hover:bg-slate-50 transition-all text-sm tracking-tight">Engagement ROE</a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};
export default EngagementCounterThreat;
