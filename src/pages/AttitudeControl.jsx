import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FaBrain, FaShieldAlt, FaCheckCircle, FaBan,
    FaArrowRight, FaWind, FaRocket, FaExchangeAlt, FaBolt
} from 'react-icons/fa';

import FlightImg from '../assets/autonomous-systems/attitude.png';
import CardImg from '../assets/autonomous-systems/defence_card_attitude_control_1771344808087.png';
import AbstractImg from '../assets/autonomous-systems/sovereign_intelligence_abstract_v2_1771334796018.png';
import MeshImg from '../assets/autonomous-systems/strategic_mesh_nodes_v2_1771334837767.png';

/* ─── Animation presets ─── */
const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } };
const fadeLeft = { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } };
const fadeRight = { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } };

const AttitudeControl = () => {
    const [activeScenario, setActiveScenario] = useState(0);

    const scenarios = [
        {
            title: 'Motor Failure Mid-Mission',
            sub: 'A propulsion unit fails at altitude — mission continues without interruption.',
            img: 'https://images.unsplash.com/photo-1527785692879-afc1d6a1b8bb?q=80&w=2070&auto=format&fit=crop',
            detail: 'When a motor fails at altitude, traditional autopilots spin out of control. Our system detects the change in flight dynamics instantly, redistributes thrust intelligently across the remaining motors, and continues the mission without any operator intervention.',
        },
        {
            title: 'Ballistic Damage',
            sub: 'The airframe sustains damage from a hostile engagement — and keeps flying.',
            img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop',
            detail: 'A hit to the body or rotor arm changes the aerodynamic profile completely. Our adaptive flight intelligence re-learns the new physical configuration mid-air, compensating for asymmetry and drag to maintain controlled, stable flight.',
        },
        {
            title: 'Extreme Wind Conditions',
            sub: 'Unpredicted gusts in open terrain — the platform holds its position.',
            img: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?q=80&w=2070&auto=format&fit=crop',
            detail: 'Sudden wind shear at high altitude can flip a standard drone within seconds. Our system anticipates and counters gust events before they destabilise the platform — keeping imagery steady, altitude locked, and mission uninterrupted.',
        },
        {
            title: 'Structural Asymmetry',
            sub: 'Physical damage causes the airframe to become unbalanced — flight continues.',
            img: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2070&auto=format&fit=crop',
            detail: 'A bent arm, cracked frame, or partial payload loss shifts the centre of mass. The control system identifies and compensates for the imbalance — adapting its thrust model to maintain level, controlled flight under the new configuration.',
        },
    ];

    return (
        <div className="bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">

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
                    <img src={FlightImg} alt="Attitude Control" className="w-full h-full object-cover object-right-top" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" />
                </motion.div>

                <div className="absolute inset-0 z-0 opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px]" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-700 font-bold text-xs uppercase tracking-widest mb-8">
                            <FaBrain className="animate-pulse" /> Neural Flight Control
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] text-slate-900 mb-8 tracking-tight">
                            Self-Healing.<br />
                            <span className="text-blue-600">Uncrashable Flight.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mb-12">
                            Our platforms don't just correct errors — they adapt to damage in real time.
                            When a motor fails or a rotor is hit, the system re-learns how to fly and continues the mission.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-700 transition-all">
                                Request Tech Brief <FaArrowRight />
                            </a>
                            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-slate-200 text-slate-800 rounded-full font-bold hover:border-blue-400 transition-all">
                                Schedule Assessment
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════════
                2. STAT STRIP
            ══════════════════════════════════════ */}
            <section className="py-10 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-6">
                        <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Engineering Targets</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-700">
                        {[
                            { val: 'Instant', label: 'Damage detection — target' },
                            { val: 'Real-Time', label: 'In-flight adaptation — design goal' },
                            { val: 'Full', label: 'On-board processing — by design' },
                            { val: 'Sovereign', label: 'No external dependency — target' },
                        ].map((s, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                className="px-8 py-6 text-center"
                            >
                                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-1">{s.val}</div>
                                <div className="text-slate-500 text-xs uppercase tracking-widest">{s.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
                3. THE PROBLEM — Beyond PID
            ══════════════════════════════════════ */}
            <section className="py-28 bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                        <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                            <span className="text-red-500 font-bold tracking-widest uppercase text-xs block mb-4">The Problem</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                                When Damage Hits,<br />
                                <span className="text-red-500">Standard Systems Crash.</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                Traditional autopilots are tuned for a specific, undamaged aircraft. The moment something
                                changes — a motor burns out, a rotor is struck, a structural element bends — they lose
                                control. In a combat or high-risk environment, this is unacceptable.
                            </p>
                            <p className="text-lg text-slate-700 leading-relaxed border-l-4 border-blue-500 pl-6 py-1">
                                Novaliseo's approach treats damage as a variable to adapt to, not a failure state.
                                The platform <strong>learns its new physical reality</strong> mid-flight and compensates — automatically.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-5">
                            <div className="flex items-start gap-5 p-6 bg-red-50 border border-red-100 rounded-2xl hover:border-red-300 transition-all">
                                <div className="w-12 h-12 bg-red-100 border border-red-200 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <FaBolt className="text-red-500 text-xl" />
                                </div>
                                <div>
                                    <span className="text-red-500 text-xs font-bold uppercase tracking-widest block mb-1">Failure Mode 01</span>
                                    <h4 className="font-bold text-slate-900 text-lg mb-1">Propulsion Loss</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">Any single motor failure in a traditional system causes immediate loss of attitude control — the aircraft destabilises and crashes before any corrective command can be issued.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 p-6 bg-orange-50 border border-orange-100 rounded-2xl hover:border-orange-300 transition-all">
                                <div className="w-12 h-12 bg-orange-100 border border-orange-200 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <FaWind className="text-orange-500 text-xl" />
                                </div>
                                <div>
                                    <span className="text-orange-500 text-xs font-bold uppercase tracking-widest block mb-1">Failure Mode 02</span>
                                    <h4 className="font-bold text-slate-900 text-lg mb-1">Environmental Disturbance</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">Sudden wind shear, rotor wash, or pressure differentials push the aircraft outside its tuned control envelope — standard PIDs saturate and lose control authority.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 p-6 bg-blue-50 border border-blue-100 rounded-2xl hover:border-blue-300 transition-all">
                                <div className="w-12 h-12 bg-blue-100 border border-blue-200 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <FaShieldAlt className="text-blue-600 text-xl" />
                                </div>
                                <div>
                                    <span className="text-blue-600 text-xs font-bold uppercase tracking-widest block mb-1">Our Answer</span>
                                    <h4 className="font-bold text-slate-900 text-lg mb-1">Adaptive Neural Control</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">We do not tune for a fixed model. Our system continuously understands the real-time dynamics of the airframe and adapts — making the concept of a single point of failure obsolete.</p>
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
                        <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-3 block">How It Works</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">The Three-Phase Response</h2>
                        <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                            Detect. Adapt. Continue. Three phases that happen faster than a human can blink.
                        </p>
                    </motion.div>

                    <div className="space-y-28">

                        {/* LAYER 1 — Damage Detection */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                <div className="inline-flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-lg">1</div>
                                    <span className="text-blue-600 font-bold tracking-widest uppercase text-xs">Phase One</span>
                                </div>
                                <h3 className="text-4xl font-bold text-slate-900 mb-5">Damage Detection</h3>
                                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                    The system continuously monitors the aircraft's actual flight behaviour against its
                                    expected response. Any deviation — from a failed motor, structural damage, or external
                                    impact — is identified before the human operator is even aware something has changed.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        'Continuous real-time flight dynamics monitoring',
                                        'Detects deviations the pilot cannot feel or see',
                                        'Triggers adaptation before the aircraft destabilises',
                                        'Fully autonomous — no operator input required',
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-700">
                                            <FaCheckCircle className="text-blue-500 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                                    <img src={CardImg} alt="Damage detection" className="w-full h-80 object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                                    <div className="absolute inset-4 border border-blue-400/30 rounded-2xl pointer-events-none" />
                                    <div className="absolute bottom-5 left-5 right-5">
                                        <div className="grid grid-cols-3 gap-3">
                                            {[['STATUS', 'MONITOR'], ['DETECT', 'ACTIVE'], ['ALERT', 'ARMED']].map(([l, v]) => (
                                                <div key={l} className="bg-black/70 backdrop-blur border border-blue-500/30 rounded-lg p-3 text-center">
                                                    <div className="text-blue-400 text-xs font-mono mb-1">{l}</div>
                                                    <div className="text-white font-bold font-mono text-sm">{v}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* LAYER 2 — In-Flight Adaptation */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="order-2 lg:order-1">
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                                    <img src={AbstractImg} alt="In-flight adaptation" className="w-full h-80 object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                                    <div className="absolute inset-4 border border-emerald-400/30 rounded-2xl pointer-events-none" />
                                    <div className="absolute bottom-5 left-5 right-5">
                                        <div className="grid grid-cols-3 gap-3">
                                            {[['ADAPT', 'RUNNING'], ['MODEL', 'UPDATED'], ['CTRL', 'STABLE']].map(([l, v]) => (
                                                <div key={l} className="bg-black/70 backdrop-blur border border-emerald-500/30 rounded-lg p-3 text-center">
                                                    <div className="text-emerald-400 text-xs font-mono mb-1">{l}</div>
                                                    <div className="text-white font-bold font-mono text-sm">{v}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="order-1 lg:order-2">
                                <div className="inline-flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-black text-lg">2</div>
                                    <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs">Phase Two</span>
                                </div>
                                <h3 className="text-4xl font-bold text-slate-900 mb-5">In-Flight Adaptation</h3>
                                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                    Once a change is detected, the system doesn't try to return to its previous state —
                                    it builds a new understanding of the aircraft's current physical reality and derives
                                    a new control strategy that works with whatever configuration remains.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        'Re-models flight dynamics around damage in real time',
                                        'No pre-programmed failure responses — fully adaptive',
                                        'Handles combinations of damage simultaneously',
                                        'Maintains attitude stability throughout re-adaptation',
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-700">
                                            <FaCheckCircle className="text-emerald-500 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>

                        {/* LAYER 3 — Mission Continuation */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                <div className="inline-flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black text-lg">3</div>
                                    <span className="text-indigo-600 font-bold tracking-widest uppercase text-xs">Phase Three</span>
                                </div>
                                <h3 className="text-4xl font-bold text-slate-900 mb-5">Mission Continuation</h3>
                                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                    With the new control model active, the platform resumes normal operations — completing
                                    the assigned mission objective or executing a safe return-to-base. The operator is
                                    notified of the damage but does not need to intervene.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        'Mission resumes within moments of damage event',
                                        'Operator receives damage notification — no takeover needed',
                                        'Autonomous return-to-base if mission cannot continue',
                                        'Full telemetry log for post-mission analysis',
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
                                    <img src={MeshImg} alt="Mission continuation" className="w-full h-80 object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                                    <div className="absolute inset-4 border border-indigo-400/30 rounded-2xl pointer-events-none" />
                                    <div className="absolute bottom-5 left-5 right-5">
                                        <div className="grid grid-cols-3 gap-3">
                                            {[['MISSION', 'ACTIVE'], ['RTB', 'READY'], ['LOG', 'SAVED']].map(([l, v]) => (
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
                5. FAILURE SCENARIO IMAGE STACK
            ══════════════════════════════════════ */}
            <section className="py-28 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
                        <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-3 block">Designed for These Conditions</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">Target Failure Scenarios</h2>
                        <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                            Every adverse event we are engineering for — because real missions don't happen in ideal conditions.
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
                            <span className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-3">Scenario {activeScenario + 1} of {scenarios.length}</span>
                            <h3 className="text-3xl font-bold text-slate-900 mb-3">{scenarios[activeScenario].title}</h3>
                            <p className="text-blue-600 font-semibold mb-5 italic text-sm">"{scenarios[activeScenario].sub}"</p>
                            <p className="text-slate-600 leading-relaxed">{scenarios[activeScenario].detail}</p>
                            <div className="mt-8 pt-6 border-t border-slate-200">
                                <div className="flex items-center gap-2 text-sm text-blue-600 font-semibold">
                                    <FaArrowRight />
                                    <span>Engineering target: Mission continues autonomously</span>
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
                                    ? 'border-blue-500 shadow-lg shadow-blue-200'
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
                6. TRADITIONAL vs NOVALISEO COMPARISON
            ══════════════════════════════════════ */}
            <section className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="max-w-5xl mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Traditional Autopilots Fail You</h2>
                        <p className="text-slate-500 text-lg">A direct comparison under real-world damage conditions.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}
                            className="bg-red-50 border border-red-100 rounded-3xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-red-100 border border-red-200 rounded-xl flex items-center justify-center">
                                    <FaExchangeAlt className="text-red-500" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">Traditional Autopilot (PID)</h3>
                            </div>
                            {[
                                'Tuned for a fixed, undamaged airframe only',
                                'Any damage changes the model — controller fails',
                                'Motor loss = immediate loss of control',
                                'No ability to adapt — rules-based responses only',
                                'Crash is the default outcome for unexpected events',
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3 py-3 border-b border-red-100">
                                    <FaBan className="text-red-400 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-600 text-sm">{item}</span>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }}
                            className="bg-blue-50 border border-blue-100 rounded-3xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-blue-100 border border-blue-200 rounded-xl flex items-center justify-center">
                                    <FaBrain className="text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">Novaliseo Adaptive Control</h3>
                            </div>
                            {[
                                'Continuously models the actual airframe in real time',
                                'Damage changes the model — system adapts instantly',
                                'Motor loss triggers adaptation, not crash',
                                'Fully adaptive — no pre-programmed failure limits',
                                'Mission continuation is the default outcome',
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3 py-3 border-b border-blue-100">
                                    <FaCheckCircle className="text-blue-500 flex-shrink-0 mt-0.5" />
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
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Build Platforms That Survive Contact</h2>
                        <p className="text-slate-400 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                            Platform integration support available for all Indian UCAV, UAV, and rotary-wing systems.
                            Engineered to your airframe. Owned by you.
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

export default AttitudeControl;
