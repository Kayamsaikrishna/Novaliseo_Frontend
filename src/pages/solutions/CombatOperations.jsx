import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FaCrosshairs, FaCheckCircle, FaBan, FaArrowRight,
    FaExclamationTriangle, FaShieldAlt, FaBolt,
    FaBullseye, FaGripVertical, FaTools
} from 'react-icons/fa';

// Restoration of "Majestic" Hero Background
import HeroImg from '../../assets/defence/defence_hero_strategic_1771334627855.png';
import Img1 from '../../assets/defence/authority shell.png';
import Img2 from '../../assets/defence/response logic time.png';
import Img3 from '../../assets/defence/neural flight control.png';

// Scenario Assets
import TerminalPhaseImg from '../../assets/defence/strategic_mesh_nodes_v2_1771334837767.png';
import ContestedImg from '../../assets/defence/defence_hero_strategic_1771334581757.png';
import FailSafeImg from '../../assets/defence/efficency.png';

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } };
const fadeLeft = { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } };
const fadeRight = { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } };

const scenarios = [
    { title: 'Terminal Phase Autonomy', sub: 'Precision terminal adjustments under localized jamming.', img: TerminalPhaseImg, detail: 'In the final seconds of an engagement, communication links are often severed by adversary countermeasures. Our terminal logic operates independently, performing micro-adjustments to ensure the mission objective is met with surgical precision.' },
    { title: 'Contested Zone Ingress', sub: 'Autonomous route shifting to avoid active radar acquisition.', img: ContestedImg, detail: 'Operating in deep-contested airspace requires sub-second reactions to incoming radar signatures. The platform autonomously modifies its flight path to minimize RCS and avoid active engagement zones.' },
    { title: 'Structural Fail-Safe', sub: 'Recomputing control laws after kinetic platform degradation.', img: FailSafeImg, detail: 'If a platform sustains kinetic damage, our neural flight controllers identify the changes in inertia and drag, instantly re-mapping steering inputs to keep the platform operational and mission-focused.' },
];

const layers = [
    { num: 1, color: 'red', side: 'left', img: Img1, title: 'Tactical Authority Shell', body: 'A secure software boundary that translates high-level command intent into machine-speed execution parameters. The platform operates with the "Permission" of the commander, pre-loaded for the mission.', hud: [['AUTH', 'BOUND'], ['INTNT', 'LOCK'], ['SEC', 'L6']], items: ['Command intent pre-loading', 'Millisecond authority validation', 'Hard-coded ROE enforcement', 'Encrypted mission blueprints'] },
    { num: 2, color: 'slate', side: 'right', img: Img2, title: 'Response Logic Engine', body: 'The high-speed core that executes tactical maneuvers. It identifies patterns of aggression and reacts instantly to protect the asset and complete the objective.', hud: [['LAT', '0.01MS'], ['CPU', 'OPTIM'], ['THR', 'ACTV']], items: ['Sub-millisecond triggers', 'Pattern-based threat reaction', 'Resource-optimized compute', 'Distributed logic fallback'] },
    { num: 3, color: 'red', side: 'left', img: Img3, title: 'Adaptive Control Grain', body: 'Deep-neural flight controls that manage the physical platform. It handles the "Dirty Work" of keeping the platform steady and responsive, even in extreme turbulence or damage states.', hud: [['CTRL', 'ADPT'], ['DMG', 'NONE'], ['STAB', 'HIGH']], items: ['Neural flight stabilization', 'Damage-tolerant control laws', 'High-G maneuver optimization', 'Software-defined aerodynamics'] },
];

const CombatOperations = () => {
    const [activeScenario, setActiveScenario] = useState(0);

    return (
        <div className="bg-white text-slate-900 font-sans selection:bg-red-600 selection:text-white">

            {/* HERO - RESTORED MAJESTIC BACKGROUND */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50 border-b border-slate-200">
                <motion.div initial={{ scale: 1.05, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.5 }} className="absolute inset-0 z-0">
                    <img src={HeroImg} alt="Combat Operations" className="w-full h-full object-cover opacity-60 grayscale-[0.2]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />

                    {/* TACTICAL GRID OVERLAY */}
                    <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ef4444_1px,transparent_1px),linear-gradient(to_bottom,#ef4444_1px,transparent_1px)] bg-[size:60px_60px]" />
                        <motion.div
                            animate={{ opacity: [0.1, 0.3, 0.1] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-2 border-red-500/20 rounded-full"
                        />
                    </div>
                </motion.div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 rounded-full text-red-700 font-bold text-xs uppercase tracking-widest mb-8 shadow-sm">
                            <FaCrosshairs className="animate-pulse" /> Kinetic Autonomy & Controlled Response
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black leading-[0.95] text-slate-900 mb-8 tracking-tighter">
                            Mission<br /><span className="text-red-600">Certainty.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mb-12 font-medium">Controlled autonomous engagement that operates within authority bounds, delivering speed and precision to the tactical edge.</p>
                        <div className="flex flex-wrap gap-4">
                            <a href="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-700 transition-all shadow-xl text-lg">Download Combat-Brief <FaArrowRight /></a>
                            <a href="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-white border-2 border-slate-900 text-slate-900 rounded-full font-bold hover:bg-slate-50 transition-all text-lg">Authority Logic</a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* THE PROBLEM - STAGGERED OODA LAYOUT */}
            <section className="py-32 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:w-1/2">
                            <span className="text-red-600 font-bold tracking-[0.4em] uppercase text-xs block mb-6">The Tactical Speed-Gap</span>
                            <h2 className="text-4xl md:text-7xl font-bold text-slate-900 mb-8 leading-[1.1]">When Milliseconds <span className="text-red-600">Define Mission.</span></h2>
                            <p className="text-xl text-slate-600 leading-relaxed mb-10 font-medium">Traditional command-loops are bottlenecked by human reaction time and link latency. In a high-intensity engagement, waiting for permission is a liability.</p>

                            <div className="bg-red-50 rounded-[3rem] p-10 border border-red-100 shadow-sm relative">
                                <FaBolt className="absolute top-10 right-10 text-red-500 text-4xl opacity-20" />
                                <div className="text-red-400 font-bold mb-4 uppercase text-xs tracking-[0.3em]">NOVALISEO_CORE_ENGAGEMENT</div>
                                <p className="text-2xl font-black italic text-slate-900">"We don't remove the human; we pre-load their judgment into the machine."</p>
                            </div>
                        </motion.div>

                        <div className="lg:w-1/2 space-y-4">
                            {[
                                { title: 'Link Latency Risk', body: 'Remote operation depends on stable bandwidth. Jamming destroys the OODA loop. Our autonomy executes on-edge.', p: '01' },
                                { title: 'Cognitive Overload', body: 'A human cannot process 50+ incoming vectors at once. Our logic handles the noise, presenting only the final decision.', p: '02' },
                                { title: 'ROE Compliance', body: 'In the heat of combat, manual ROE verification is slow. Our hard-coded shells ensure authority is never exceeded.', p: '03' }
                            ].map((item, i) => (
                                <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] flex gap-8 items-center group hover:bg-white hover:shadow-xl transition-all">
                                    <div className="text-4xl font-black text-slate-200 group-hover:text-red-600 transition-colors uppercase tracking-tighter">{item.p}</div>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                                        <p className="text-slate-500 text-sm">{item.body}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* AUTHORITY STACK - UNIQUE VERTICAL DESIGN */}
            <section className="py-32 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-24">
                        <span className="text-red-400 font-bold tracking-[0.5em] uppercase text-[10px] block mb-4">Engagement Architecture</span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">Authority Layers</h2>
                    </motion.div>

                    <div className="space-y-32">
                        {layers.map((layer, i) => (
                            <div key={i} className={`flex flex-col lg:flex-row gap-16 items-center ${layer.side === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                                <motion.div variants={layer.side === 'left' ? fadeLeft : fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:w-1/2">
                                    <div className="relative group">
                                        {/* TACTICAL BORDER DESIGN */}
                                        <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-red-500/30 group-hover:border-red-500 transition-colors" />
                                        <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-red-500/30 group-hover:border-red-500 transition-colors" />

                                        <div className="aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                                            <img src={layer.img} alt={layer.title} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" />
                                            <div className="absolute inset-0 bg-red-900/10 group-hover:bg-transparent transition-all" />
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div variants={layer.side === 'left' ? fadeRight : fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:w-1/2">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-16 h-1 bg-red-600 rounded-full" />
                                        <span className="font-bold tracking-widest text-slate-400 uppercase text-xs">Mission Bound 0{layer.num}</span>
                                    </div>
                                    <h3 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight">{layer.title}</h3>
                                    <p className="text-xl text-slate-600 leading-relaxed mb-10 font-medium">{layer.body}</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {layer.items.map((item, j) => (
                                            <div key={j} className="flex items-center gap-3 p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-red-200 transition-colors group">
                                                <FaBullseye className="text-red-500 shrink-0 group-hover:scale-110 transition-transform" />
                                                <span className="text-slate-700 font-bold text-sm tracking-tight">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SCENARIOS - OPERATIONAL VALIDATION */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div>
                            <span className="text-red-400 font-bold tracking-widest uppercase text-xs mb-4 block">Field Validation Scenarios</span>
                            <h2 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter">Combat Cycle.</h2>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {scenarios.map((s, i) => (
                                <button key={i} onClick={() => setActiveScenario(i)} className={`px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all border-2 ${activeScenario === i ? 'bg-red-600 border-red-600 text-white shadow-2xl scale-105' : 'bg-white border-slate-200 text-slate-400 hover:border-red-600 hover:text-red-600'}`}>{s.title}</button>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-[4rem] overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-[0_32px_128px_-32px_rgba(239,68,68,0.15)] min-h-[600px] border border-slate-100">
                        <div className="lg:col-span-7 relative overflow-hidden group">
                            <motion.img key={activeScenario} initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} src={scenarios[activeScenario].img} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-red-50/20 mix-blend-overlay" />
                        </div>

                        <div className="lg:col-span-5 p-16 flex flex-col justify-center bg-slate-50/50">
                            <motion.div key={`text-${activeScenario}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                                <span className="text-red-600 font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block underline decoration-red-200 decoration-2 underline-offset-4">Tactical Engine // 0{activeScenario + 1}</span>
                                <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tighter leading-tight">{scenarios[activeScenario].title}</h3>
                                <p className="text-red-600 text-xl leading-relaxed italic mb-8 border-l-4 border-red-600 pl-6">"{scenarios[activeScenario].sub}"</p>
                                <p className="text-slate-600 text-lg leading-relaxed mb-12 font-medium">{scenarios[activeScenario].detail}</p>
                                <a href="/contact" className="inline-flex items-center gap-4 px-8 py-4 bg-white border-2 border-slate-900 text-slate-900 rounded-full font-black text-xs uppercase tracking-widest hover:bg-slate-50 transition-all group">Initialize Engagement <FaArrowRight className="group-hover:translate-x-2 transition-transform" /></a>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* AUTHORITY VALIDATION - CLEAN SPLIT */}
            <section className="py-32 bg-slate-50 relative overflow-hidden">
                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-24 text-slate-900">
                        <span className="text-red-400 font-bold tracking-[0.4em] uppercase text-[10px] block mb-4">Paradigm Shift</span>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Manual Loop vs Authority Autonomy</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white rounded-[3rem] p-12 border border-slate-200 shadow-sm group">
                            <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-10 group-hover:text-red-500 transition-colors">Manual Engagement</h4>
                            <ul className="space-y-6">
                                {[
                                    'Reaction time > 500ms (Cognitive delay).',
                                    'Uplink failure stops engagement.',
                                    'Stress-induced human error margin.',
                                    'High-bandwidth video dependency.',
                                    'Vulnerable OODA loop.'
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 text-slate-500 text-sm font-medium">
                                        <FaBan className="text-red-400 shrink-0 mt-1" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white rounded-[3rem] p-12 border border-red-200 shadow-2xl shadow-red-100 group">
                            <h4 className="text-sm font-black text-red-600 uppercase tracking-widest mb-10">Bounded Autonomy</h4>
                            <ul className="space-y-6">
                                {[
                                    'Reaction time < 1ms (Machine-speed).',
                                    'Link-independent terminal execution.',
                                    'Precision logic (Zero fatigue).',
                                    'Minimal authority-sync bandwidth.',
                                    'Hard-coded ROE enforcement.'
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 p-5 bg-red-50/50 rounded-2xl border border-red-100 text-slate-700 text-sm font-bold">
                                        <FaCheckCircle className="text-red-600 shrink-0 mt-1" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA - THE TACTICAL HANDSHAKE */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-10 border border-red-100 shadow-inner">
                            <FaShieldAlt className="text-red-600 text-4xl" />
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter">Secure the Loop.</h2>
                        <p className="text-slate-500 text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-medium">For high-intensity kinetic environments where speed is the only defense. Sovereign control. Machine-speed reaction.</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <a href="/contact" className="inline-flex items-center gap-4 px-12 py-6 bg-slate-900 text-white font-black rounded-full shadow-2xl hover:scale-105 transition-all text-xs uppercase tracking-widest">Request Technical Demo <FaArrowRight /></a>
                            <a href="/contact" className="inline-flex items-center gap-4 px-12 py-6 bg-white border-2 border-red-600 text-red-600 font-bold rounded-full hover:bg-slate-50 transition-all text-sm tracking-tight">Authority Architecture</a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default CombatOperations;
