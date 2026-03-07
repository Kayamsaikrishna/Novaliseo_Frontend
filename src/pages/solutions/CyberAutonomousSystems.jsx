import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FaShieldAlt, FaLock, FaServer, FaUserSecret,
    FaArrowRight, FaCheckCircle, FaBan, FaExclamationTriangle,
    FaNetworkWired, FaUserShield, FaHackerNews, FaMicrochip
} from 'react-icons/fa';

import HeroImg from '../../assets/autonomous-systems/sovereign_intelligence_abstract_v2_1771334796018.png';
import Img1 from '../../assets/autonomous-systems/sovereign_intelligence_abstract_v2_1771334796018.png';
import Img2 from '../../assets/autonomous-systems/indigenous_core_abstract_1771333830627.png';
import Img3 from '../../assets/autonomous-systems/indigenous_core_abstract_v2_1771334339840.png';

// Scenario Assets
import GridImg from '../../assets/autonomous-systems/strategic_mesh_nodes_v2_1771334837767.png';
import VaultImg from '../../assets/autonomous-systems/indigenous_core_abstract_v2_1771334339840.png';
import EwImg from '../../assets/autonomous-systems/Boarder Security.png';
import AptImg from '../../assets/autonomous-systems/sensor.png';

const scenarios = [
    { title: 'Critical Grid Autonomous Software Based', sub: 'Autonomous detection of zero-day exploits in power infrastructure.', img: GridImg, detail: 'Protecting the national power grid requires more than firewalls. Our AI engine identifies the subtle lateral movement of sophisticated state-sponsored actors, sandboxing threats before they can trigger logic-based failures in SCADA systems.' },
    { title: 'Sovereign Data Vault', sub: 'Hardware-agnostic encryption for classified tactical networks.', img: VaultImg, detail: 'In tactical environments, hardware visibility is often limited. We provide high-assurance encryption that runs at the edge, ensuring that data-in-transit remains unreadable even if physical terminal nodes are compromised.' },
    { title: 'EW Mesh Protection', sub: 'Signal resilience against high-intensity electronic interference.', img: EwImg, detail: 'Modern battlefields are saturated with EW. Our system uses cognitive frequency hopping and AI-driven denoising to maintain a secure digital link when standard communications are completely suppressed by adversary interference.' },
    { title: 'Advanced Persistent Threat (APT) Hunting', sub: 'Continuous behavioral audit across distributed clusters.', img: AptImg, detail: 'APTs don’t break doors; they pick locks over months. Our "Persistent Hunter" logic monitors billions of system calls for the tiny deviations in entropy and access timing that signal a breach in progress, allowing for systemic self-healing.' },
];

const layers = [
    { num: 1, color: 'slate', side: 'left', img: Img1, title: 'Network Immune System', body: 'We move beyond perimeter defense. Our AI-native immune system monitors internal traffic patterns at wire-speed, detecting anomalies that human SOC operators can’t see.', hud: [['THREAT', 'ID'], ['STATE', 'SECURE'], ['AUDIT', 'LIVE']], items: ['Zero-trust micro-segmentation', 'Behavioral flow analysis', 'Automated containment protocols', 'Wire-speed packet inspection'] },
    { num: 2, color: 'indigo', side: 'right', img: Img2, title: 'Cognitive Cryptography', body: 'Post-quantum ready encryption that adapts to the compute environment. It secures data not just with math, but with contextual authority bounds that prevent unauthorized usage.', hud: [['CRYPT', 'PQ'], ['KEY', 'SHARD'], ['AUTH', 'BOUND']], items: ['Post-quantum crypto algorithms', 'Context-aware key management', 'Identity-bound execution silos', 'Hardware-rooted trust anchors'] },
    { num: 3, color: 'slate', side: 'left', img: Img3, title: 'EW-Resilient Comms', body: 'A software-defined radio (SDR) intelligence layer that protects the digital link. It detects interference signatures and autonomously modifies signal parameters to maintain throughput.', hud: [['LINK', 'HIGH'], ['JAM', 'NULL'], ['SNR', 'RESIL']], items: ['AI-driven signal denoising', 'Cognitive frequency agility', 'LPI/LPD waveform generation', 'Distributed mesh relay logic'] },
];

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } };
const fadeLeft = { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } };
const fadeRight = { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } };

const CyberAutonomousSystems = () => {
    const [activeScenario, setActiveScenario] = useState(0);

    return (
        <div className="bg-white text-slate-900 font-sans selection:bg-slate-900 selection:text-white">
            {/* HERO - SECURITY MATRIX DESIGN */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-indigo-50/50 to-white border-b border-indigo-100">
                <motion.div initial={{ scale: 1.05, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.5 }} className="absolute inset-0 z-0">
                    <img src={HeroImg} alt="Cyber Autonomous Software Based" className="w-full h-full object-cover grayscale opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent" />

                    {/* DIGITAL HUD OVERLAY */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-slate-900/20 rounded-full animate-[spin_20s_linear_infinite]" />
                        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] border border-slate-900/10 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
                    </div>
                </motion.div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-full font-bold text-xs uppercase tracking-widest mb-8 shadow-lg shadow-indigo-200">
                            <FaShieldAlt className="animate-pulse" /> Active Cyber Resilience & EW Intelligence
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black leading-[0.95] text-slate-900 mb-8 tracking-tighter">
                            Systemic<br /><span className="text-indigo-600">Immunity.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mb-12 font-medium">We design sovereign security architectures that treat cyber aggression as a biological threat — adapting, isolating, and neutralizing in real-time.</p>
                        <div className="flex flex-wrap gap-4">
                            <a href="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 text-lg">Download Crypto-Brief <FaArrowRight /></a>
                            <a href="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-white border-2 border-indigo-600 text-indigo-600 rounded-full font-bold hover:bg-indigo-50 transition-all text-lg shadow-sm">Secure Handshake</a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* PROBLEM - THE DISTRIBUTED THREAT */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-20 items-start">
                        <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:w-1/2 sticky top-32 bg-gradient-to-br from-indigo-50/50 to-white p-8 rounded-[3rem] border border-indigo-100/50">
                            <span className="text-indigo-600 font-bold tracking-[0.4em] uppercase text-xs block mb-6">Threat Landscape</span>
                            <h2 className="text-4xl md:text-7xl font-bold text-slate-900 mb-8 leading-[1.1]">The Invisible <span className="underline decoration-indigo-600/20 decoration-8">Frontier.</span></h2>
                            <p className="text-xl text-slate-600 leading-relaxed mb-10">Modern warfare is fought in the packet layer before a single shot is fired. Traditional security relies on "signatures" of past attacks; we rely on "behavioral intent" of future ones.</p>
                            <div className="p-10 bg-white rounded-[3rem] text-slate-900 shadow-2xl shadow-indigo-100/50 border-l-8 border-indigo-600 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full -mr-16 -mt-16" />
                                <div className="text-indigo-400 font-bold mb-4 italic text-sm font-mono tracking-widest uppercase">systemic_core_logic</div>
                                <p className="text-xl font-medium leading-relaxed">"Security is not a wall; it is a living circulatory system that detects the foreign before it discovers the vitals."</p>
                            </div>
                        </motion.div>

                        <div className="lg:w-1/2 space-y-6">
                            {[
                                { icon: FaHackerNews, title: 'Zero-Day Blindness', body: 'Legacy systems can only block what they already know. Our engine detects the "structural entropy" of new exploits the moment they are executed.' },
                                { icon: FaNetworkWired, title: 'SCADA Vulnerability', body: 'National infrastructure runs on protocols designed 40 years ago. We wrap legacy systems in an intelligent digital shell, protecting physical assets from digital reach.' },
                                { icon: FaMicrochip, title: 'Hardware Backdoors', body: 'Supply chain compromise is a strategic risk. Our software-defined security operates assuming the hardware is already untrusted, enforcing cryptographical silos.' },
                                { icon: FaUserShield, title: 'Insider Latency', body: '70% of breaches involve credential abuse. We use micro-contextual authority — verifying not just "who" you are, but "what" you are doing and "why".' }
                            ].map((item, i) => (
                                <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="p-10 bg-white border border-slate-100 rounded-[2.5rem] hover:shadow-2xl hover:shadow-indigo-100 transition-all group">
                                    <div className="w-16 h-16 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center text-indigo-600 text-3xl mb-8 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                                        <item.icon />
                                    </div>
                                    <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">{item.title}</h4>
                                    <p className="text-slate-500 text-lg leading-relaxed">{item.body}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* THE STACK - RESILIENCE PILLARS */}
            <section className="py-32 bg-gradient-to-b from-white to-indigo-50/30 border-y border-indigo-100">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-24">
                        <span className="text-indigo-600 font-bold tracking-[0.5em] uppercase text-[10px] block mb-4">Architecture Pillars</span>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">The Systemic Stack</h2>
                    </motion.div>

                    <div className="space-y-32">
                        {layers.map((layer, i) => (
                            <div key={i} className={`flex flex-col lg:flex-row gap-20 items-center ${layer.side === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                                <motion.div variants={layer.side === 'left' ? fadeLeft : fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:w-1/2 relative">
                                    <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl border border-slate-200 group relative">
                                        <img src={layer.img} alt={layer.title} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-all" />

                                        {/* HUD OVERLAY */}
                                        <div className="absolute bottom-10 left-10 right-10 grid grid-cols-3 gap-3">
                                            {layer.hud.map(([label, val], j) => (
                                                <div key={j} className="bg-white/90 backdrop-blur-xl p-4 rounded-3xl border border-slate-200 text-center shadow-lg">
                                                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{label}</div>
                                                    <div className="text-slate-900 font-black font-mono text-xs">{val}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div variants={layer.side === 'left' ? fadeRight : fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:w-1/2">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className={`w-16 h-1 ${layer.color === 'slate' ? 'bg-slate-900' : 'bg-indigo-600'} rounded-full`} />
                                        <span className="font-bold tracking-widest text-slate-400 uppercase text-xs">Immunity Layer 0{layer.num}</span>
                                    </div>
                                    <h3 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight">{layer.title}</h3>
                                    <p className="text-xl text-slate-600 leading-relaxed mb-10">{layer.body}</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {layer.items.map((item, j) => (
                                            <div key={j} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-indigo-50 shadow-sm hover:shadow-md transition-shadow">
                                                <FaCheckCircle className="text-indigo-600 shrink-0" />
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

            {/* SCENARIOS - BATTLE-READY VALIDATION */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div>
                            <span className="text-indigo-600 font-bold tracking-widest uppercase text-xs mb-4 block">Simulation & Validation</span>
                            <h2 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter">Tactical Scenarios.</h2>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {scenarios.map((s, i) => (
                                <button key={i} onClick={() => setActiveScenario(i)} className={`px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all border-2 ${activeScenario === i ? 'bg-indigo-600 border-indigo-600 text-white shadow-xl shadow-indigo-100 scale-105' : 'bg-white border-slate-200 text-slate-400 hover:border-indigo-600 hover:text-indigo-600'}`}>{s.title}</button>
                            ))}
                        </div>
                    </div>

                    <div className="bg-slate-50 rounded-[4rem] overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-xl border border-slate-200 min-h-[600px]">
                        <div className="lg:col-span-7 relative overflow-hidden group">
                            <motion.img key={activeScenario} initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} src={scenarios[activeScenario].img} className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-1000" />
                            <div className="absolute inset-0 bg-slate-200/20" />

                            {/* HUD ELEMENTS */}
                            <div className="absolute top-10 left-10 right-10 pointer-events-none">
                                <div className="flex justify-between items-start">
                                    <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl border border-slate-200">
                                        <div className="flex items-center gap-3 text-red-600 mb-2">
                                            <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                                            <span className="text-[10px] font-black uppercase tracking-widest">Intercept_Active</span>
                                        </div>
                                        <div className="font-mono text-slate-900 text-lg uppercase tracking-tighter">vector_breach_detected</div>
                                    </div>
                                    <div className="text-right text-slate-400 font-mono text-[10px]">
                                        SEC_CLUSTER_NORTH<br />
                                        RES_0.4MS
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-5 p-16 flex flex-col justify-center bg-white border-l border-indigo-50">
                            <motion.div key={`text-${activeScenario}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                                <span className="text-indigo-600 font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">Simulation Cycle // 0{activeScenario + 1}</span>
                                <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tighter leading-tight">{scenarios[activeScenario].title}</h3>
                                <p className="text-indigo-600/80 text-xl leading-relaxed italic mb-8 border-l-4 border-indigo-200 pl-6">"{scenarios[activeScenario].sub}"</p>
                                <p className="text-slate-600 text-lg leading-relaxed mb-12">{scenarios[activeScenario].detail}</p>
                                <a href="/contact" className="inline-flex items-center gap-4 text-indigo-600 font-black text-xs uppercase tracking-widest group">Launch Technical Deep-Dive <FaArrowRight className="group-hover:translate-x-2 transition-transform" /></a>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* COMPARISON - ACTIVE VS PASSIVE */}
            <section className="py-32 bg-slate-50 relative overflow-hidden">
                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-20 text-slate-900">
                        <span className="text-slate-400 font-bold tracking-[0.4em] uppercase text-[10px] block mb-4">Paradigm Shift</span>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Perimeter vs Systemic</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white rounded-[3rem] p-12 border border-slate-200 shadow-sm group">
                            <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-10 group-hover:text-red-500 transition-colors">Legacy Defense</h4>
                            <ul className="space-y-6">
                                {[
                                    'Static "firewalls" that are bypassed by zero-days.',
                                    'Signature-based detection — blocks only known past threats.',
                                    'Manual SOC response times measured in hours or days.',
                                    'Assumed trust of hardware supply chains.',
                                    'Static keys vulnerable to future quantum decryption.'
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 text-slate-500 text-sm">
                                        <FaBan className="text-red-400 shrink-0 mt-1" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-gradient-to-br from-indigo-50 to-white rounded-[3rem] p-12 border border-indigo-100 shadow-xl shadow-indigo-100/50 group">
                            <h4 className="text-sm font-black text-indigo-400 uppercase tracking-widest mb-10 group-hover:text-indigo-600 transition-colors">Novaliseo Resilience</h4>
                            <ul className="space-y-6">
                                {[
                                    'AI-native immune response at the wire-level.',
                                    'Behavioral anomaly detection for unknown exploits.',
                                    'Autonomous threat isolation in sub-millisecond cycles.',
                                    'Hardware-agnostic crypto silos ensuring sovereign integrity.',
                                    'Post-quantum ready standards (Lattice-based encryption).'
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 p-5 bg-white rounded-2xl border border-indigo-50 text-slate-700 text-sm font-bold tracking-tight shadow-sm">
                                        <FaCheckCircle className="text-indigo-600 shrink-0 mt-1" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA - THE SOVEREIGN HANDSHAKE */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-10 border border-slate-100 shadow-inner">
                            <FaShieldAlt className="text-slate-900 text-4xl" />
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter">Secure the Core.</h2>
                        <p className="text-slate-500 text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-medium">For critical national infrastructure, military networks, and classified sovereign clusters. Post-quantum resilient. AI-native.</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <a href="/contact" className="inline-flex items-center gap-4 px-12 py-6 bg-slate-900 text-white font-black rounded-full shadow-2xl hover:scale-105 transition-all text-xs uppercase tracking-widest">Schedule Sovereign Audit <FaArrowRight /></a>
                            <a href="/contact" className="inline-flex items-center gap-4 px-12 py-6 bg-white border-2 border-slate-200 text-slate-900 font-bold rounded-full hover:bg-slate-50 transition-all text-sm tracking-tight">Request Crypto-Whitepaper</a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default CyberAutonomousSystems;
