import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FaBatteryFull, FaChartLine, FaLeaf, FaMicrochip,
    FaShieldAlt, FaCheckCircle, FaBan, FaArrowRight,
    FaExclamationTriangle, FaRocket
} from 'react-icons/fa';

import HeroImg from '../assets/defence/efficency.png';
import MeshImg from '../assets/defence/strategic_mesh_nodes_v2_1771334837767.png';
import AbstractImg from '../assets/defence/sovereign_intelligence_abstract_v2_1771334796018.png';
import MapImg from '../assets/defence/strategic_map_visualization_1771333852873.png';

/* ─── Animation presets ─── */
const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } };
const fadeLeft = { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } };
const fadeRight = { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } };

const EdgeEfficiency = () => {
    const [activeScenario, setActiveScenario] = useState(0);

    const scenarios = [
        {
            title: 'Tactical Micro-Drone',
            sub: 'Maximising endurance on a man-portable platform with strict weight and power constraints.',
            img: 'https://images.unsplash.com/photo-1527785692879-afc1d6a1b8bb?q=80&w=2070&auto=format&fit=crop',
            detail: 'Man-portable tactical drones operate under extreme SWaP (Size, Weight, and Power) constraints. Our efficiency-optimised intelligence stack delivers full AI capability within the platform\'s power budget — extending time-on-station without any hardware upgrade.',
        },
        {
            title: 'Long-Range Surveillance',
            sub: 'Extended ISR missions where every watt-hour of battery is a strategic asset.',
            img: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?q=80&w=2070&auto=format&fit=crop',
            detail: 'Persistent surveillance missions demand the longest possible loiter time. By minimising the power consumed by the intelligence layer, more energy is available for propulsion — directly translating to greater range and station time.',
        },
        {
            title: 'Swarm Platforms',
            sub: 'Dozens of low-cost nodes each running full intelligence without power trade-offs.',
            img: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2070&auto=format&fit=crop',
            detail: 'Swarm deployments require intelligence to run identically on every node at minimal cost. Our efficiency architecture enables full on-board inference on commodity hardware — making large-scale intelligent swarms economically viable.',
        },
        {
            title: 'Forward Operating Bases',
            sub: 'Operating where grid power is unavailable and battery replenishment is slow.',
            img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop',
            detail: 'At a forward base, power generation is limited and battery cycles are a logistics constraint. Platforms that consume less power per flight hour are strategically superior — enabling more sorties per day from the same energy reserve.',
        },
    ];

    return (
        <div className="bg-white text-slate-900 font-sans selection:bg-green-600 selection:text-white">

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
                    <img src={HeroImg} alt="Edge Efficiency" className="w-full h-full object-cover object-center" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" />
                </motion.div>

                <div className="absolute inset-0 z-0 opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(#16a34a_1px,transparent_1px)] [background-size:20px_20px]" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-100 rounded-full text-green-700 font-bold text-xs uppercase tracking-widest mb-8">
                            <FaLeaf className="animate-pulse" /> Sustainable Intelligence
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] text-slate-900 mb-8 tracking-tight">
                            More Intelligence.<br />
                            <span className="text-green-600">Far Less Power.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mb-12">
                            We are engineering AI systems that run at full capability within the strict power budgets
                            of tactical platforms — so intelligence never forces a trade-off with endurance.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-700 transition-all">
                                Request Tech Brief <FaArrowRight />
                            </a>
                            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-slate-200 text-slate-800 rounded-full font-bold hover:border-green-400 transition-all">
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
                            { val: 'Extended', label: 'Flight endurance — target' },
                            { val: 'Minimal', label: 'Compute power draw — design goal' },
                            { val: 'Full', label: 'AI capability within power budget' },
                            { val: 'Sovereign', label: 'No cloud dependency — by design' },
                        ].map((s, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                className="px-8 py-6 text-center"
                            >
                                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-1">{s.val}</div>
                                <div className="text-slate-500 text-xs uppercase tracking-widest">{s.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
                3. THE PROBLEM — Power vs Intelligence
            ══════════════════════════════════════ */}
            <section className="py-28 bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                        <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                            <span className="text-red-500 font-bold tracking-widest uppercase text-xs block mb-4">The Problem</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                                Standard AI Chips<br />
                                <span className="text-red-500">Drain the Mission.</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                On a tactical drone, every watt consumed by the compute stack is a watt taken from
                                the motors. Standard AI processors — designed for data centres with unlimited power —
                                are fundamentally incompatible with the energy constraints of airborne platforms.
                            </p>
                            <p className="text-lg text-slate-700 leading-relaxed border-l-4 border-green-500 pl-6 py-1">
                                Intelligence and endurance should not be a trade-off.
                                Novaliseo is engineering AI to operate at <strong>full capability within the power envelope</strong> of
                                the platform — not around it.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-5">
                            <div className="flex items-start gap-5 p-6 bg-red-50 border border-red-100 rounded-2xl hover:border-red-300 transition-all">
                                <div className="w-12 h-12 bg-red-100 border border-red-200 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <FaBatteryFull className="text-red-500 text-xl" />
                                </div>
                                <div>
                                    <span className="text-red-500 text-xs font-bold uppercase tracking-widest block mb-1">Constraint 01</span>
                                    <h4 className="font-bold text-slate-900 text-lg mb-1">Power Budget Exhaustion</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">Conventional AI inference hardware draws power at a rate incompatible with tactical drone batteries — forcing operators to choose between intelligence and flight time.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 p-6 bg-orange-50 border border-orange-100 rounded-2xl hover:border-orange-300 transition-all">
                                <div className="w-12 h-12 bg-orange-100 border border-orange-200 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <FaExclamationTriangle className="text-orange-500 text-xl" />
                                </div>
                                <div>
                                    <span className="text-orange-500 text-xs font-bold uppercase tracking-widest block mb-1">Constraint 02</span>
                                    <h4 className="font-bold text-slate-900 text-lg mb-1">Thermal Overload</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">High-power compute generates heat that unprotected airborne electronics cannot dissipate — causing thermal throttling that degrades intelligence performance precisely when it is most critical.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 p-6 bg-green-50 border border-green-100 rounded-2xl hover:border-green-300 transition-all">
                                <div className="w-12 h-12 bg-green-100 border border-green-200 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <FaShieldAlt className="text-green-600 text-xl" />
                                </div>
                                <div>
                                    <span className="text-green-600 text-xs font-bold uppercase tracking-widest block mb-1">Our Answer</span>
                                    <h4 className="font-bold text-slate-900 text-lg mb-1">Platform-Native Efficiency</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">We engineer the intelligence layer from first principles for the platform's power envelope — not as an afterthought. Full AI capability. Minimal power draw. No compromise.</p>
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
                        <span className="text-green-600 font-bold tracking-widest uppercase text-xs mb-3 block">How It Works</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">The Efficiency Stack</h2>
                        <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                            Three layers of optimisation that together bring high-performance AI within the power budget of a tactical drone.
                        </p>
                    </motion.div>

                    <div className="space-y-28">

                        {/* LAYER 1 — Model Compression */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                <div className="inline-flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center text-white font-black text-lg">1</div>
                                    <span className="text-green-600 font-bold tracking-widest uppercase text-xs">Layer One</span>
                                </div>
                                <h3 className="text-4xl font-bold text-slate-900 mb-5">Intelligent Model Compression</h3>
                                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                    We engineer AI models to be as compact as the mission demands — removing
                                    computational complexity that does not contribute to operational accuracy.
                                    The result is a model that performs the same task with a fraction of the
                                    processing overhead.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        'Redundancy elimination without accuracy loss',
                                        'Mission-specific model architectures — no bloat',
                                        'Smaller footprint means lower memory bandwidth demand',
                                        'Engineering target: significant reduction in compute load',
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-700">
                                            <FaCheckCircle className="text-green-500 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                                    <img src={MeshImg} alt="Model compression" className="w-full h-80 object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                                    <div className="absolute inset-4 border border-green-400/30 rounded-2xl pointer-events-none" />
                                    <div className="absolute bottom-5 left-5 right-5">
                                        <div className="grid grid-cols-3 gap-3">
                                            {[['MODEL', 'COMPACT'], ['LOAD', 'REDUCED'], ['ACC', 'PRESERVED']].map(([l, v]) => (
                                                <div key={l} className="bg-black/70 backdrop-blur border border-green-500/30 rounded-lg p-3 text-center">
                                                    <div className="text-green-400 text-xs font-mono mb-1">{l}</div>
                                                    <div className="text-white font-bold font-mono text-sm">{v}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* LAYER 2 — Low-Precision Compute */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="order-2 lg:order-1">
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                                    <img src={AbstractImg} alt="Low-precision compute" className="w-full h-80 object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                                    <div className="absolute inset-4 border border-blue-400/30 rounded-2xl pointer-events-none" />
                                    <div className="absolute bottom-5 left-5 right-5">
                                        <div className="grid grid-cols-3 gap-3">
                                            {[['COMPUTE', 'FAST'], ['POWER', 'LOW'], ['PERF', 'FULL']].map(([l, v]) => (
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
                                <h3 className="text-4xl font-bold text-slate-900 mb-5">Power-Optimised Compute</h3>
                                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                    By reformulating the mathematical operations at the core of AI inference to use
                                    the minimum numerical precision required — rather than the default maximum —
                                    we unlock dramatic reductions in power consumption and processing time with
                                    no meaningful impact on output quality.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        'Lower precision compute — dramatically less power draw',
                                        'Significant speed improvement as an engineering target',
                                        'Accuracy preserved within operational tolerance',
                                        'Compatible with defence-grade embedded hardware',
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-700">
                                            <FaCheckCircle className="text-blue-500 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>

                        {/* LAYER 3 — Hardware-Level Execution */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                <div className="inline-flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black text-lg">3</div>
                                    <span className="text-indigo-600 font-bold tracking-widest uppercase text-xs">Layer Three</span>
                                </div>
                                <h3 className="text-4xl font-bold text-slate-900 mb-5">Hardware-Native Execution</h3>
                                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                    The intelligence layer communicates directly with the underlying hardware —
                                    bypassing the general-purpose software layers that introduce latency and
                                    power overhead. Every cycle of compute is used for the mission,
                                    not for OS scheduling or driver overhead.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        'Direct hardware execution — zero software translation overhead',
                                        'Purpose-built execution pipeline for inference workloads',
                                        'Thermal-aware performance management',
                                        'Engineered to run continuously without throttling',
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-700">
                                            <FaCheckCircle className="text-indigo-500 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                                    <img src={MapImg} alt="Hardware-native execution" className="w-full h-80 object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                                    <div className="absolute inset-4 border border-indigo-400/30 rounded-2xl pointer-events-none" />
                                    <div className="absolute bottom-5 left-5 right-5">
                                        <div className="grid grid-cols-3 gap-3">
                                            {[['EXEC', 'NATIVE'], ['SCHED', 'ZERO'], ['THERMAL', 'STABLE']].map(([l, v]) => (
                                                <div key={l} className="bg-black/70 backdrop-blur border border-indigo-500/30 rounded-lg p-3 text-center">
                                                    <div className="text-indigo-400 text-xs font-mono mb-1">{l}</div>
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
                        <span className="text-green-600 font-bold tracking-widest uppercase text-xs mb-3 block">Designed for These Platforms</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">Target Deployment Scenarios</h2>
                        <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                            Every platform where the power-intelligence trade-off has historically constrained the mission.
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
                            <span className="text-green-600 text-xs font-bold tracking-widest uppercase mb-3">Scenario {activeScenario + 1} of {scenarios.length}</span>
                            <h3 className="text-3xl font-bold text-slate-900 mb-3">{scenarios[activeScenario].title}</h3>
                            <p className="text-green-600 font-semibold mb-5 italic text-sm">"{scenarios[activeScenario].sub}"</p>
                            <p className="text-slate-600 leading-relaxed">{scenarios[activeScenario].detail}</p>
                            <div className="mt-8 pt-6 border-t border-slate-200">
                                <div className="flex items-center gap-2 text-sm text-green-600 font-semibold">
                                    <FaArrowRight />
                                    <span>Engineering target: Maximum endurance, full AI capability</span>
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
                                        ? 'border-green-500 shadow-lg shadow-green-200'
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
                6. STANDARD AI vs NOVALISEO COMPARISON
            ══════════════════════════════════════ */}
            <section className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="max-w-5xl mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Conventional AI Hardware Fails the Mission</h2>
                        <p className="text-slate-500 text-lg">A direct comparison under tactical SWaP constraints.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}
                            className="bg-red-50 border border-red-100 rounded-3xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-red-100 border border-red-200 rounded-xl flex items-center justify-center">
                                    <FaMicrochip className="text-red-500" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">Conventional AI Compute</h3>
                            </div>
                            {[
                                'Designed for data centre power budgets — not drones',
                                'High draw forces trade-off between AI and endurance',
                                'Thermal throttling degrades performance in flight',
                                'Weight and form factor incompatible with tactical payloads',
                                'Intelligence comes at the cost of mission time',
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3 py-3 border-b border-red-100">
                                    <FaBan className="text-red-400 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-600 text-sm">{item}</span>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }}
                            className="bg-green-50 border border-green-100 rounded-3xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-green-100 border border-green-200 rounded-xl flex items-center justify-center">
                                    <FaLeaf className="text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">Novaliseo Efficient Intelligence</h3>
                            </div>
                            {[
                                'Engineered for the tactical drone power envelope from day one',
                                'Full AI capability with minimal draw — no trade-off required',
                                'Thermal-aware execution — no throttling under sustained load',
                                'Compact form factor designed for airborne payload integration',
                                'More intelligence. Longer missions. Same battery.',
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3 py-3 border-b border-green-100">
                                    <FaCheckCircle className="text-green-500 flex-shrink-0 mt-0.5" />
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
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Intelligence That Extends the Mission</h2>
                        <p className="text-slate-400 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                            Integration support available for all indigenous UCAV, UAV, and UGV programmes.
                            Optimised to your platform's power constraints. Owned completely by you.
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

export default EdgeEfficiency;
