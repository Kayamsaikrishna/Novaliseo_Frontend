import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FaProjectDiagram, FaCheckCircle, FaBan, FaArrowRight,
    FaExclamationTriangle, FaNetworkWired, FaBroadcastTower,
    FaCogs, FaShareAlt, FaShieldAlt
} from 'react-icons/fa';

// Restoration of "Majestic" Hero Background
import HeroImg from '../../assets/defence/strategic_mesh_nodes_v2_1771334837767.png';
import Img1 from '../../assets/defence/kernel.png';
import Img2 from '../../assets/defence/signal mesh.png';
import Img3 from '../../assets/defence/autonomous decisions.png';

// Scenario Assets
import GnssDeniedImg from '../../assets/defence/denied nav.png';
import DynamicMeshImg from '../../assets/defence/meshing.png';
import LowBandwidthImg from '../../assets/defence/low bandwidth.png';

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } };
const fadeLeft = { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } };
const fadeRight = { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } };

const scenarios = [
    { title: 'GNSS-Denied Coordination', sub: 'Autonomous drift correction through peer-to-peer visual anchoring.', img: GnssDeniedImg, detail: 'In environments where GPS is spoofed or jammed, nodes use their local perception and consensus from peers to maintain a collective coordinate system, enabling precision operations without external anchors.' },
    { title: 'Dynamic Mesh Reconstitution', sub: 'Self-healing network logic for high-attrition theaters.', img: DynamicMeshImg, detail: 'If 60% of nodes are lost to attrition, the remaining mesh identifies the mission gap and redistributes intelligence tasks instantly, ensuring the strategic objective remains covered by the surviving collective.' },
    { title: 'Low-Bandwidth Consensus', sub: 'Distributed voting logic optimized for electronic noise.', img: LowBandwidthImg, detail: 'Our consensus protocol minimizes spectral footprint, allowing nodes to reach agreement on target priority using bits of data rather than megabytes, making the network virtually invisible to enemy RDF.' },
];

const layers = [
    { num: 1, color: 'indigo', side: 'left', img: Img1, title: 'Edge Consensus Kernel', body: 'The "Brain" of the node. It resolves mission conflicts locally using a distributed ledger of intent. Each platform knows what its peers are thinking without a central server.', hud: [['MESH', 'ACTV'], ['LAT', '0.2MS'], ['NODES', '64+']], items: ['Latency-free local resolution', 'Conflict-handling intent logic', 'Distributed mission ledger', 'Zero-server architecture'] },
    { num: 2, color: 'blue', side: 'right', img: Img2, title: 'Synaptic Signal Mesh', body: 'A hardware-agnostic communication layer that turns every platform into a relay. It creates a "living" network that adapts its topology as platforms move or are lost.', hud: [['SNR', 'HIGH'], ['TOPO', 'MESH'], ['JAM', 'NULL']], items: ['Ad-hoc network formation', 'Dynamic frequency agility', 'LPI/LPD communications', 'Automatic relay optimization'] },
    { num: 3, color: 'indigo', side: 'left', img: Img3, title: 'Sovereign Intent Engine', body: 'Ensures that all autonomous decisions align with the national command authority. It wraps decentralized logic in a secure, indigenously-verified policy shell.', hud: [['AUTH', 'SVRN'], ['POLICY', 'COMP'], ['CRYP', 'AES']], items: ['Indigenous policy enforcement', 'Cryptographic intent signing', 'Verify-before-vote logic', 'Atmanirbhar command stack'] },
];

const DecentralizedDecision = () => {
    const [activeScenario, setActiveScenario] = useState(0);

    return (
        <div className="bg-white text-slate-900 font-sans selection:bg-indigo-600 selection:text-white">

            {/* HERO - RESTORED MAJESTIC BACKGROUND */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50 border-b border-slate-200">
                <motion.div initial={{ scale: 1.05, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.5 }} className="absolute inset-0 z-0">
                    <img src={HeroImg} alt="Decentralized Command" className="w-full h-full object-cover opacity-60 grayscale-[0.5]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />

                    {/* LIGHT MESH OVERLAY */}
                    <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <motion.path
                                d="M 0 50 Q 25 25 50 50 T 100 50"
                                stroke="currentColor"
                                fill="transparent"
                                strokeWidth="0.1"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                className="text-indigo-500"
                            />
                        </svg>
                    </div>
                </motion.div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-700 font-bold text-xs uppercase tracking-widest mb-8 shadow-sm">
                            <FaProjectDiagram className="animate-pulse" /> Decentralized Command Architecture
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black leading-[0.95] text-slate-900 mb-8 tracking-tighter">
                            A Collective<br /><span className="text-indigo-600">Intelligence.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mb-12 font-medium">Distributed command that treats the battlefield as a neural network — resilient, peer-to-peer, and impossible to sever.</p>
                        <div className="flex flex-wrap gap-4">
                            <a href="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-700 transition-all shadow-xl text-lg">Initalize Consensus <FaArrowRight /></a>
                            <a href="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-white border-2 border-slate-900 text-slate-900 rounded-full font-bold hover:bg-slate-50 transition-all text-lg">Network Topology</a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* THE PROBLEM - CENTERED FOCUS */}
            <section className="py-32 bg-white flex flex-col items-center text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <span className="text-indigo-600 font-bold tracking-[0.4em] uppercase text-xs block mb-6">The Fragility Gap</span>
                        <h2 className="text-4xl md:text-7xl font-bold text-slate-900 mb-8 leading-[1.1]">The Vulnerability of <span className="underline decoration-slate-200 decoration-8 underline-offset-8">Centralization.</span></h2>
                        <p className="text-2xl text-slate-600 leading-relaxed mb-16 font-medium">Any system that depends on a "Master Node" or GCS is one jammed frequency away from strategic failure. We eliminate the single point of failure.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        {[
                            { icon: FaExclamationTriangle, title: 'The GCS Kill Switch', body: 'Electronic Warfare targets the command link. When the link breaks, legacy drones become expensive debris. Our nodes continue the mission by peer-consensus.' },
                            { icon: FaBroadcastTower, title: 'The Bandwidth Bottleneck', body: 'Streaming raw sensor data to a central analyzer creates massive latency. We process and decide on-edge, sharing only the "Intent" bits.' }
                        ].map((item, i) => (
                            <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="p-10 bg-slate-50 border border-slate-100 rounded-[3rem] hover:shadow-2xl transition-all group">
                                <div className="w-16 h-16 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-indigo-600 text-3xl mb-8 group-hover:scale-110 transition-transform shadow-sm">
                                    <item.icon />
                                </div>
                                <h4 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h4>
                                <p className="text-slate-500 text-lg leading-relaxed">{item.body}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CONSENSUS FLOW - UNIQUE LAYOUT */}
            <section className="py-32 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-20">
                        <span className="text-indigo-400 font-bold tracking-[0.5em] uppercase text-[10px] block mb-4">Architecture Stack</span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">The Mesh Stack</h2>
                    </motion.div>

                    <div className="space-y-32">
                        {layers.map((layer, i) => (
                            <div key={i} className={`flex flex-col lg:flex-row gap-20 items-center ${layer.side === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                                <motion.div variants={layer.side === 'left' ? fadeLeft : fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:w-1/2 relative">
                                    <div className="aspect-[16/10] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-200 group relative">
                                        <img src={layer.img} alt={layer.title} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-transparent transition-all" />
                                    </div>
                                </motion.div>

                                <motion.div variants={layer.side === 'left' ? fadeRight : fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:w-1/2">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-16 h-1 bg-indigo-600 rounded-full" />
                                        <span className="font-bold tracking-widest text-slate-400 uppercase text-xs">Phased Consensus 0{layer.num}</span>
                                    </div>
                                    <h3 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight">{layer.title}</h3>
                                    <p className="text-xl text-slate-600 leading-relaxed mb-10 font-medium">{layer.body}</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {layer.items.map((item, j) => (
                                            <div key={j} className="flex items-center gap-3 p-5 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
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
                            <span className="text-indigo-400 font-bold tracking-widest uppercase text-xs mb-4 block">Deployment Scenarios</span>
                            <h2 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter">Tactical Mesh.</h2>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {scenarios.map((s, i) => (
                                <button key={i} onClick={() => setActiveScenario(i)} className={`px-6 py-3 rounded-full font-black text-[10px] uppercase tracking-[0.2em] transition-all border-2 ${activeScenario === i ? 'bg-indigo-600 border-indigo-600 text-white shadow-2xl scale-105' : 'bg-white border-slate-200 text-slate-400 hover:border-indigo-600 hover:text-indigo-600'}`}>{s.title}</button>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-[4rem] overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-[0_32px_128px_-32px_rgba(79,70,229,0.15)] min-h-[600px] border border-slate-100">
                        <div className="lg:col-span-7 relative overflow-hidden group">
                            <motion.img key={activeScenario} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} src={scenarios[activeScenario].img} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-indigo-50/20 mix-blend-overlay" />
                        </div>

                        <div className="lg:col-span-5 p-16 flex flex-col justify-center bg-slate-50/50">
                            <motion.div key={`text-${activeScenario}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                                <span className="text-indigo-600 font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block underline decoration-indigo-200 decoration-2 underline-offset-4">Validation Cycle // 0{activeScenario + 1}</span>
                                <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tighter leading-tight">{scenarios[activeScenario].title}</h3>
                                <p className="text-indigo-600 text-xl leading-relaxed italic mb-8 border-l-4 border-indigo-600 pl-6">"{scenarios[activeScenario].sub}"</p>
                                <p className="text-slate-600 text-lg leading-relaxed mb-12 font-medium">{scenarios[activeScenario].detail}</p>
                                <a href="/contact" className="inline-flex items-center gap-4 px-8 py-4 bg-white border-2 border-slate-900 text-slate-900 rounded-full font-black text-xs uppercase tracking-widest hover:bg-slate-50 transition-all group">Initialize Simulation <FaArrowRight className="group-hover:translate-x-2 transition-transform" /></a>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* COMPARISON - ELITE SPLIT */}
            <section className="py-32 bg-slate-50 relative overflow-hidden">
                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-20 text-slate-900">
                        <span className="text-indigo-400 font-bold tracking-[0.4em] uppercase text-[10px] block mb-4">Paradigm Shift</span>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Centralized vs Distributed</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white rounded-[3rem] p-12 border border-slate-200 shadow-sm group">
                            <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-10 group-hover:text-red-500 transition-colors">Legacy Command</h4>
                            <ul className="space-y-6">
                                {[
                                    'Single command server vulnerability.',
                                    'Uplink jamming results in node death.',
                                    'Decision latency (GCS round-trip).',
                                    'Scale limited by central compute.',
                                    'Static orchestration - brittle topology.'
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 text-slate-500 text-sm font-medium">
                                        <FaBan className="text-red-400 shrink-0 mt-1" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white rounded-[3rem] p-12 border border-indigo-200 shadow-2xl shadow-indigo-100/50 group">
                            <h4 className="text-sm font-black text-indigo-500 uppercase tracking-widest mb-10">Novaliseo Mesh</h4>
                            <ul className="space-y-6">
                                {[
                                    'Peer-to-peer survival protocol.',
                                    'Link-independent autonomous action.',
                                    'Machine-speed consensus on-edge.',
                                    'Linear scale through distributed compute.',
                                    'Dynamic self-healing network topology.'
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 p-5 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-slate-700 text-sm font-bold">
                                        <FaCheckCircle className="text-indigo-600 shrink-0 mt-1" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA - THE MESH HANDSHAKE */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-10 border border-indigo-100 shadow-inner">
                            <FaShareAlt className="text-indigo-600 text-4xl" />
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter">Become the Node.</h2>
                        <p className="text-slate-500 text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-medium">For ad-hoc tactical swarms and large-scale autonomous mesh deployment. Sovereign. Distributed. Unstoppable.</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <a href="/contact" className="inline-flex items-center gap-4 px-12 py-6 bg-slate-900 text-white font-black rounded-full shadow-2xl hover:scale-105 transition-all text-xs uppercase tracking-widest">Request Mesh-Brief <FaArrowRight /></a>
                            <a href="/contact" className="inline-flex items-center gap-4 px-12 py-6 bg-white border-2 border-indigo-600 text-indigo-600 font-bold rounded-full hover:bg-slate-50 transition-all text-sm tracking-tight">Technical Topology</a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default DecentralizedDecision;
