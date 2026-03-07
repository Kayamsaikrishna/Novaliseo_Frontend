import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FaMicrochip, FaNetworkWired, FaBolt, FaServer,
    FaShieldAlt, FaCheckCircle, FaBan, FaArrowRight,
    FaCloud, FaExclamationTriangle
} from 'react-icons/fa';

import ChipImg from '../assets/autonomous-systems/latency.png';
import MeshImg from '../assets/autonomous-systems/strategic_mesh_nodes_v2_1771334837767.png';
import AbstractImg from '../assets/autonomous-systems/sovereign_intelligence_abstract_v2_1771334796018.png';
import MapImg from '../assets/autonomous-systems/strategic_map_visualization_1771333852873.png';

/* ─── Animation presets ─── */
const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } };
const fadeLeft = { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } };
const fadeRight = { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } };

const UltraLowLatency = () => {
    const [activeScenario, setActiveScenario] = useState(0);

    const scenarios = [
        {
            title: 'Obstacle Avoidance at Speed',
            sub: 'A high-speed platform detects and avoids an obstacle with no human intervention.',
            img: 'https://images.unsplash.com/photo-1527785692879-afc1d6a1b8bb?q=80&w=2070&auto=format&fit=crop',
            detail: 'At high cruise speed, reaction time is everything. Our system processes visual data, makes an avoidance decision, and executes the manoeuvre entirely on-board — before the obstacle would be visible to a remote operator.',
        },
        {
            title: 'Target Identification in Clutter',
            sub: 'Discriminating between targets and non-targets in dense urban or jungle terrain.',
            img: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2070&auto=format&fit=crop',
            detail: 'Dense environments produce visual noise that overwhelms remote processing pipelines. On-board inference eliminates the round-trip entirely — delivering classification results instantaneously at the point of perception.',
        },
        {
            title: 'Communications-Denied Operations',
            sub: 'Full autonomous intelligence with zero uplink — no radio, no cloud, no latency.',
            img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop',
            detail: 'In jammed or RF-denied environments, cloud-dependent platforms go blind. Our edge intelligence architecture ensures every critical decision is made locally — giving the mission full intelligence autonomy with no external signal needed.',
        },
        {
            title: 'Swarm Coordination',
            sub: 'Multiple platforms exchanging intelligence at machine speed — no central server.',
            img: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?q=80&w=2070&auto=format&fit=crop',
            detail: 'Swarm platforms share processed intelligence peer-to-peer — not through a cloud hub. Each node processes independently, then broadcasts compressed intelligence to peers at ultra-low latency, enabling coordinated behaviour with no single point of failure.',
        },
    ];

    return (
        <div className="bg-white text-slate-900 font-sans selection:bg-purple-600 selection:text-white">

            {/* ══════════════════════════════════════
                1. HERO
            ══════════════════════════════════════ */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50 border-b border-slate-200">
                <motion.div
                    initial={{ scale: 1.05, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                    className="absolute inset-0 z-0"
                >
                    <img src={ChipImg} alt="Edge Computing" className="w-full h-full object-cover object-center" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" />
                </motion.div>

                <div className="absolute inset-0 z-0 opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(#7c3aed_1px,transparent_1px)] [background-size:20px_20px]" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-100 rounded-full text-purple-700 font-bold text-xs uppercase tracking-widest mb-8">
                            <FaMicrochip className="animate-pulse" /> Edge Computing Superiority
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] text-slate-900 mb-8 tracking-tight">
                            Think at the Edge.<br />
                            <span className="text-purple-600">Act Before Others Perceive.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mb-12">
                            We are engineering intelligence that lives on the platform — not in a server room.
                            No round-trip. No cloud dependency. Decision-making at the speed of the mission.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-700 transition-all">
                                Request Tech Brief <FaArrowRight />
                            </a>
                            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-slate-200 text-slate-800 rounded-full font-bold hover:border-purple-400 transition-all">
                                Schedule Assessment
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════════
                2. STAT STRIP — Engineering Targets
            ══════════════════════════════════════ */}
            <section className="py-10 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-6">
                        <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Engineering Targets</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-700">
                        {[
                            { val: 'Zero', label: 'Cloud dependency — target' },
                            { val: 'Ultra-low', label: 'Inference latency — design goal' },
                            { val: 'Full', label: 'On-board processing — by design' },
                            { val: 'Sovereign', label: 'No external compute — target' },
                        ].map((s, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                className="px-8 py-6 text-center"
                            >
                                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-1">{s.val}</div>
                                <div className="text-slate-500 text-xs uppercase tracking-widest">{s.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
                3. THE PROBLEM — Cloud Cannot Win
            ══════════════════════════════════════ */}
            <section className="py-28 bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                        <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                            <span className="text-red-500 font-bold tracking-widest uppercase text-xs block mb-4">The Problem</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                                Cloud-Dependent AI<br />
                                <span className="text-red-500">Cannot Win the OODA Loop.</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                In contested environments, every millisecond is a tactical variable. Platforms that
                                send sensor data to a remote server for processing introduce an irreducible delay —
                                a kill window in which the enemy acts and you do not.
                            </p>
                            <p className="text-lg text-slate-700 leading-relaxed border-l-4 border-purple-500 pl-6 py-1">
                                Novaliseo's approach eliminates the round-trip entirely.
                                Intelligence is <strong>generated on the platform</strong>, at the point of perception —
                                shrinking Observe-Orient-Decide-Act to machine speed.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-5">
                            <div className="flex items-start gap-5 p-6 bg-red-50 border border-red-100 rounded-2xl hover:border-red-300 transition-all">
                                <div className="w-12 h-12 bg-red-100 border border-red-200 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <FaCloud className="text-red-500 text-xl" />
                                </div>
                                <div>
                                    <span className="text-red-500 text-xs font-bold uppercase tracking-widest block mb-1">Vulnerability 01</span>
                                    <h4 className="font-bold text-slate-900 text-lg mb-1">Cloud Round-Trip Latency</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">Sending sensor data out and waiting for a decision multiplies latency by orders of magnitude — in a fast-moving engagement, that delay is a mission-ending liability.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 p-6 bg-orange-50 border border-orange-100 rounded-2xl hover:border-orange-300 transition-all">
                                <div className="w-12 h-12 bg-orange-100 border border-orange-200 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <FaExclamationTriangle className="text-orange-500 text-xl" />
                                </div>
                                <div>
                                    <span className="text-orange-500 text-xs font-bold uppercase tracking-widest block mb-1">Vulnerability 02</span>
                                    <h4 className="font-bold text-slate-900 text-lg mb-1">Communications Dependency</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">Cloud-dependent platforms are operationally blind the moment their uplink is jammed, degraded, or congested — reducing a sophisticated platform to a dumb projectile.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 p-6 bg-purple-50 border border-purple-100 rounded-2xl hover:border-purple-300 transition-all">
                                <div className="w-12 h-12 bg-purple-100 border border-purple-200 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <FaShieldAlt className="text-purple-600 text-xl" />
                                </div>
                                <div>
                                    <span className="text-purple-600 text-xs font-bold uppercase tracking-widest block mb-1">Our Answer</span>
                                    <h4 className="font-bold text-slate-900 text-lg mb-1">Edge-Native Intelligence</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">Every byte of sensor data processed on-board, every decision made locally. The platform operates at full intelligence capability with zero uplink — independent of any external compute infrastructure.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
                4. THREE CAPABILITY LAYERS (alternating)
            ══════════════════════════════════════ */}
            <section className="py-28 bg-slate-50 border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-20">
                        <span className="text-purple-600 font-bold tracking-widest uppercase text-xs mb-3 block">How It Works</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">The Edge Compute Stack</h2>
                        <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                            Three layers engineered to bring supercomputer-class intelligence to the platform itself.
                        </p>
                    </motion.div>

                    <div className="space-y-28">

                        {/* LAYER 1 — High-Speed Sensing */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                <div className="inline-flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center text-white font-black text-lg">1</div>
                                    <span className="text-purple-600 font-bold tracking-widest uppercase text-xs">Layer One</span>
                                </div>
                                <h3 className="text-4xl font-bold text-slate-900 mb-5">High-Speed Sensing</h3>
                                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                    Sensor data moves directly from cameras and array inputs into the processing pipeline
                                    without passing through general-purpose software bottlenecks. The architecture is
                                    designed to eliminate every unnecessary step between perception and compute.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        'Direct sensor-to-compute pipeline — designed for zero overhead',
                                        'Multi-modal sensor fusion at the hardware level',
                                        'High frame-rate perception as an engineering target',
                                        'No lossy compression before processing',
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-700">
                                            <FaCheckCircle className="text-purple-500 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                                    <img src={MeshImg} alt="High-speed sensing" className="w-full h-80 object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                                    <div className="absolute inset-4 border border-purple-400/30 rounded-2xl pointer-events-none" />
                                    <div className="absolute bottom-5 left-5 right-5">
                                        <div className="grid grid-cols-3 gap-3">
                                            {[['SENSE', 'ACTIVE'], ['PIPE', 'DIRECT'], ['FEED', 'LIVE']].map(([l, v]) => (
                                                <div key={l} className="bg-black/70 backdrop-blur border border-purple-500/30 rounded-lg p-3 text-center">
                                                    <div className="text-purple-400 text-xs font-mono mb-1">{l}</div>
                                                    <div className="text-white font-bold font-mono text-sm">{v}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* LAYER 2 — On-Board Inference */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="order-2 lg:order-1">
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                                    <img src={AbstractImg} alt="On-board inference" className="w-full h-80 object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                                    <div className="absolute inset-4 border border-blue-400/30 rounded-2xl pointer-events-none" />
                                    <div className="absolute bottom-5 left-5 right-5">
                                        <div className="grid grid-cols-3 gap-3">
                                            {[['INFER', 'LOCAL'], ['CLOUD', 'NONE'], ['EDGE', 'ONLY']].map(([l, v]) => (
                                                <div key={l} className="bg-black/70 backdrop-blur border border-blue-500/30 rounded-lg p-3 text-center">
                                                    <div className="text-blue-400 text-xs font-mono mb-1">{l}</div>
                                                    <div className="text-white font-bold font-mono text-sm">{v}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="order-1 lg:order-2">
                                <div className="inline-flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-lg">2</div>
                                    <span className="text-blue-600 font-bold tracking-widest uppercase text-xs">Layer Two</span>
                                </div>
                                <h3 className="text-4xl font-bold text-slate-900 mb-5">On-Board Inference</h3>
                                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                    The AI inference engine runs entirely on the platform — not on a remote server,
                                    not in a cloud instance. Dedicated processing hardware handles the computational
                                    load that would normally require a data centre, shrunk to fit within the payload envelope.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        'Full inference on-device — zero external compute',
                                        'Designed for autonomous software based-grade thermal and vibration environments',
                                        'Operates under interference, RF denial, and signal blackout',
                                        'Optimised for power-constrained airborne platforms',
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-700">
                                            <FaCheckCircle className="text-blue-500 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>

                        {/* LAYER 3 — Instant Command Output */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                <div className="inline-flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-black text-lg">3</div>
                                    <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs">Layer Three</span>
                                </div>
                                <h3 className="text-4xl font-bold text-slate-900 mb-5">Instant Command Output</h3>
                                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                    The moment the intelligence engine produces a decision, the command is dispatched
                                    to the flight controller — with no software queue, no OS scheduling overhead, and
                                    no waiting for a response from anywhere outside the aircraft.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        'Decision-to-actuation path engineered for minimum delay',
                                        'No operator-in-the-loop required for autonomous actions',
                                        'Human override capability preserved at all times',
                                        'Full telemetry log retained on-board for post-mission review',
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-700">
                                            <FaCheckCircle className="text-emerald-500 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                                    <img src={MapImg} alt="Instant command output" className="w-full h-80 object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                                    <div className="absolute inset-4 border border-emerald-400/30 rounded-2xl pointer-events-none" />
                                    <div className="absolute bottom-5 left-5 right-5">
                                        <div className="grid grid-cols-3 gap-3">
                                            {[['CMD', 'ISSUED'], ['DELAY', 'ZERO'], ['ACT', 'NOW']].map(([l, v]) => (
                                                <div key={l} className="bg-black/70 backdrop-blur border border-emerald-500/30 rounded-lg p-3 text-center">
                                                    <div className="text-emerald-400 text-xs font-mono mb-1">{l}</div>
                                                    <div className="text-white font-bold font-mono text-sm">{v}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
                5. TARGET DEPLOYMENT SCENARIOS
            ══════════════════════════════════════ */}
            <section className="py-28 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
                        <span className="text-purple-600 font-bold tracking-widest uppercase text-xs mb-3 block">Designed for These Conditions</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">Target Deployment Scenarios</h2>
                        <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                            Every scenario where cloud latency would be a mission-ending constraint — these are the environments we are engineering for.
                        </p>
                    </motion.div>

                    <div className="flex flex-wrap gap-3 justify-center mb-10">
                        {scenarios.map((s, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveScenario(i)}
                                className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-300 ${activeScenario === i
                                        ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                                        : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'
                                    }`}
                            >
                                {s.title}
                            </button>
                        ))}
                    </div>

                    <motion.div
                        key={activeScenario}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-1 lg:grid-cols-5 gap-0 rounded-3xl overflow-hidden border border-slate-200 shadow-xl"
                    >
                        <div className="lg:col-span-3 relative h-80 lg:h-auto">
                            <img src={scenarios[activeScenario].img} alt={scenarios[activeScenario].title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 hidden lg:block" />
                        </div>
                        <div className="lg:col-span-2 bg-slate-50 p-10 flex flex-col justify-center border-l border-slate-200">
                            <span className="text-purple-600 text-xs font-bold tracking-widest uppercase mb-3">Scenario {activeScenario + 1} of {scenarios.length}</span>
                            <h3 className="text-3xl font-bold text-slate-900 mb-3">{scenarios[activeScenario].title}</h3>
                            <p className="text-purple-600 font-semibold mb-5 italic text-sm">"{scenarios[activeScenario].sub}"</p>
                            <p className="text-slate-600 leading-relaxed">{scenarios[activeScenario].detail}</p>
                            <div className="mt-8 pt-6 border-t border-slate-200">
                                <div className="flex items-center gap-2 text-sm text-purple-600 font-semibold">
                                    <FaArrowRight />
                                    <span>Engineering target: Zero cloud dependency</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
                        {scenarios.map((s, i) => (
                            <motion.div
                                key={i}
                                onClick={() => setActiveScenario(i)}
                                whileHover={{ scale: 1.03 }}
                                className={`relative rounded-2xl overflow-hidden cursor-pointer h-36 border-2 transition-all duration-300 ${activeScenario === i
                                        ? 'border-purple-500 shadow-lg shadow-purple-200'
                                        : 'border-slate-200 opacity-60 hover:opacity-90'
                                    }`}
                            >
                                <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                <p className="absolute bottom-3 left-3 right-3 text-white text-xs font-bold leading-tight">{s.title}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
                6. CLOUD vs EDGE COMPARISON
            ══════════════════════════════════════ */}
            <section className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="max-w-5xl mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Cloud AI Fails Autonomous Software Based</h2>
                        <p className="text-slate-500 text-lg">A direct comparison in contested, communications-degraded environments.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}
                            className="bg-red-50 border border-red-100 rounded-3xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-red-100 border border-red-200 rounded-xl flex items-center justify-center">
                                    <FaServer className="text-red-500" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">Cloud-Dependent AI</h3>
                            </div>
                            {[
                                'Requires live uplink to function at full capability',
                                'Latency multiplied by round-trip transmission delay',
                                'Blind when comms are jammed or degraded',
                                'Data leaves the platform — sovereignty risk',
                                'Single point of failure: the server connection',
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3 py-3 border-b border-red-100">
                                    <FaBan className="text-red-400 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-600 text-sm">{item}</span>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }}
                            className="bg-purple-50 border border-purple-100 rounded-3xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-purple-100 border border-purple-200 rounded-xl flex items-center justify-center">
                                    <FaMicrochip className="text-purple-600" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">Novaliseo Edge Intelligence</h3>
                            </div>
                            {[
                                'Zero uplink required — fully self-contained intelligence',
                                'Decision latency determined by on-board compute only',
                                'Operates under total comms blackout, no degradation',
                                'All data processed and stays on-platform — fully sovereign',
                                'No external dependency — no external failure mode',
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3 py-3 border-b border-purple-100">
                                    <FaCheckCircle className="text-purple-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-700 text-sm">{item}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
                7. CTA
            ══════════════════════════════════════ */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-5"
                    style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Intelligence That Stays on the Platform</h2>
                        <p className="text-slate-400 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                            Integration and customisation support available for all indigenous UCAV, UAV, and UGV programmes.
                            Built to your hardware constraints. Owned completely by you.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-5">
                            <a href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-slate-900 font-bold rounded-full shadow-xl hover:scale-105 transition-all text-lg justify-center">
                                Schedule Integration Assessment <FaArrowRight />
                            </a>
                            <a href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-transparent border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all text-lg justify-center">
                                Download Tech Brief
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
};

export default UltraLowLatency;
