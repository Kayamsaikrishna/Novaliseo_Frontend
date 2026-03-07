import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FaSatellite, FaEye, FaMapMarkedAlt, FaMicrochip,
    FaShieldAlt, FaCheckCircle, FaBan, FaArrowRight,
    FaBroadcastTower, FaWifi
} from 'react-icons/fa';
import VisualTracking from '../assets/autonomous-systems/gnss_visual_tracking.png';
import RealTimeMapping from '../assets/autonomous-systems/real_time_mapping.png';
import SensorFusion from '../assets/autonomous-systems/sensor.png';
import FlightImg from '../assets/autonomous-systems/dined nav.png';

/* ─── Shared animation presets ─── */
const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } };
const fadeLeft = { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } };
const fadeRight = { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } };

const DeniedNavigation = () => {
    const [activeScenario, setActiveScenario] = useState(0);

    const scenarios = [
        {
            title: 'High Altitude Surveillance',
            sub: 'Border patrol across mountain terrain in total signal blackout.',
            img: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?q=80&w=2070&auto=format&fit=crop',
            detail: 'Operating at high altitude with zero GNSS connection. The system builds real-time terrain awareness and maintains precise positioning across ridgelines, valleys, and cloud cover — entirely on-board.',

        },
        {
            title: 'Urban Counter-Operations',
            sub: 'Indoor / outdoor GNSS transition zones mapped continuously.',
            img: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2070&auto=format&fit=crop',
            detail: 'Urban canyons create natural GNSS blackout zones. Our system transitions seamlessly from sky to street to corridor — tracking structural landmarks, floor markings, and 3D geometry without interruption.',
        },
        {
            title: 'Forward Base Resupply',
            sub: 'Last-mile delivery to contested zones no GPS vehicle can reach.',
            img: 'https://images.unsplash.com/photo-1530143584546-02191bc84eb5?q=80&w=2070&auto=format&fit=crop',
            detail: 'Route-planning to coordinates designated offline before takeoff. The drone autonomously avoids obstacles in real time, compensates for environmental drift, and achieves precision landing at an unlit landing zone.',
        },
        {
            title: 'Electronic Warfare Zones',
            sub: 'Full mission integrity under active interference and disruption.',
            img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop',
            detail: 'Operates without ever listening for a GNSS signal. Interference arrays, signal manipulations, and signal-denial environments are operationally irrelevant — the system does not depend on any external RF navigation.',
        },
    ];

    return (
        <div className="bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">

            {/* ══════════════════════════════════════
                1. HERO — local asset, light theme
            ══════════════════════════════════════ */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50 border-b border-slate-200">
                <motion.div
                    initial={{ scale: 1.05, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                    className="absolute inset-0 z-0"
                >
                    <img src={FlightImg} alt="GPS Denied Flight" className="w-full h-full object-cover object-right-top" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" />
                </motion.div>

                {/* subtle dot grid */}
                <div className="absolute inset-0 z-0 opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px]" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-700 font-bold text-xs uppercase tracking-widest mb-8">
                            <FaSatellite className="animate-pulse" /> GNSS-Independent Autonomy
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] text-slate-900 mb-8 tracking-tight">
                            GNSS-Denied.<br />
                            <span className="text-blue-600">Total Autonomy.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mb-12">
                            Our drones don't need satellites to know where they are. They see the world like a human does,
                            allowing them to operate perfectly even when GNSS signals are jammed or blocked.
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
                            { val: 'Zero', label: 'GNSS dependency — target' },
                            { val: 'Ultra-low', label: 'Fusion latency — design goal' },
                            { val: 'Precision', label: 'Positioning accuracy — target' },
                            { val: 'Full', label: 'On-board processing — by design' },
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
                3. THE STRATEGIC VOID
            ══════════════════════════════════════ */}
            <section className="py-28 bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                        {/* Left — problem copy */}
                        <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                            <span className="text-red-500 font-bold tracking-widest uppercase text-xs block mb-4">The Strategic Void</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                                When GNSS Fails,<br />
                                <span className="text-red-500">Missions Collapse.</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                Modern warfare relies heavily on GNSS. In contested operational theatres,
                                when GNSS fails, standard drones drift and crash. Electronic warfare units
                                can manipulate signals to hijack or disable them within seconds.
                            </p>
                            <p className="text-lg text-slate-700 leading-relaxed border-l-4 border-blue-500 pl-6 py-1">
                                Novaliseo uses <strong>Advanced Computer Vision</strong> to lock onto the terrain itself.
                                It remembers landmarks and tracks movement, ensuring the mission continues no matter what.
                            </p>
                        </motion.div>

                        {/* Right — threat cards */}
                        <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-5">
                            {/* Interference */}
                            <div className="flex items-start gap-5 p-6 bg-red-50 border border-red-100 rounded-2xl hover:border-red-300 transition-all">
                                <div className="w-12 h-12 bg-red-100 border border-red-200 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <FaBroadcastTower className="text-red-500 text-xl" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-red-500 text-xs font-bold uppercase tracking-widest">Threat 01</span>
                                    </div>
                                    <h4 className="font-bold text-slate-900 text-lg mb-1">Signal Interference</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">High-power RF noise floor elevation that drowns all GNSS frequencies simultaneously, rendering satellite-dependent navigation blind within seconds.</p>
                                </div>
                            </div>

                            {/* Disruption */}
                            <div className="flex items-start gap-5 p-6 bg-orange-50 border border-orange-100 rounded-2xl hover:border-orange-300 transition-all">
                                <div className="w-12 h-12 bg-orange-100 border border-orange-200 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <FaWifi className="text-orange-500 text-xl" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Threat 02</span>
                                    </div>
                                    <h4 className="font-bold text-slate-900 text-lg mb-1">Signal Disruption</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">False coordinate injection vectors that feed incorrect position data — causing the platform to fly off-course or into controlled airspace without awareness.</p>
                                </div>
                            </div>

                            {/* Our answer */}
                            <div className="flex items-start gap-5 p-6 bg-blue-50 border border-blue-100 rounded-2xl hover:border-blue-300 transition-all">
                                <div className="w-12 h-12 bg-blue-100 border border-blue-200 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <FaShieldAlt className="text-blue-600 text-xl" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">Our Answer</span>
                                    </div>
                                    <h4 className="font-bold text-slate-900 text-lg mb-1">Visual Autonomy</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">We never listen for a GNSS signal. We navigate by sight — three redundant layers of computer vision and sensor fusion replacing satellites completely.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
                4. VISUAL AUTONOMY — 3 LAYERS (alternating image + text)
            ══════════════════════════════════════ */}
            <section className="py-28 bg-slate-50 border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-20">
                        <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-3 block">How It Works</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">Visual Autonomy</h2>
                        <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                            Three layers of technology working together to replace GNSS completely.
                        </p>
                    </motion.div>

                    <div className="space-y-28">

                        {/* LAYER 1 — Visual Tracking */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                <div className="inline-flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-lg">1</div>
                                    <span className="text-blue-600 font-bold tracking-widest uppercase text-xs">Layer One</span>
                                </div>
                                <h3 className="text-4xl font-bold text-slate-900 mb-5">Visual Tracking</h3>
                                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                    Downward cameras watch the ground moving below to calculate exact speed and direction
                                    without needing satellites. Every pixel displacement between frames translates to
                                    precise movement data — giving the drone continuous self-awareness in flight.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        'Continuous terrain feature tracking',
                                        'Multi-camera depth perception',
                                        'High-speed processing — zero motion blur',
                                        'Operational day, night, and partial cloud cover',
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
                                    <img
                                        src={VisualTracking}
                                        alt="Visual tracking aerial"
                                        className="w-full h-80 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                                    <div className="absolute inset-4 border border-blue-400/30 rounded-2xl pointer-events-none" />
                                    <div className="absolute bottom-5 left-5 right-5">
                                        <div className="grid grid-cols-3 gap-3">
                                            {[['TRACK', 'LOCKED'], ['DRIFT', 'ZERO'], ['MODE', 'ACTIVE']].map(([l, v]) => (
                                                <div key={l} className="bg-black/70 backdrop-blur border border-blue-500/30 rounded-lg p-3 text-center">
                                                    <div className="text-blue-400 text-xs font-mono mb-1">{l}</div>
                                                    <div className="text-white font-bold font-mono">{v}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* LAYER 2 — Real-Time Mapping */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="order-2 lg:order-1">
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                                    <img
                                        src={RealTimeMapping}
                                        alt="Real-time mapping"
                                        className="w-full h-80 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                                    <div className="absolute inset-4 border border-emerald-400/30 rounded-2xl pointer-events-none" />
                                    <div className="absolute bottom-5 left-5 right-5">
                                        <div className="grid grid-cols-3 gap-3">
                                            {[['MAP', 'ACTIVE'], ['STATUS', 'ONLINE'], ['SYNC', 'LOCAL']].map(([l, v]) => (
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
                                    <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs">Layer Two</span>
                                </div>
                                <h3 className="text-4xl font-bold text-slate-900 mb-5">Real-Time Mapping</h3>
                                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                    The drone builds a live 3D awareness of its surroundings as it flies — knowing exactly where
                                    it is relative to every obstacle, structure, and terrain feature. All intelligence runs
                                    on-board, in real time, with zero external signal.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        'Live 3D environmental awareness per flight',
                                        'Long-range obstacle detection',
                                        'Spatial data stored encrypted on-device',
                                        'Pre-mission terrain awareness loading',
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-700">
                                            <FaCheckCircle className="text-emerald-500 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>

                        {/* LAYER 3 — Smart Sensors */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                <div className="inline-flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black text-lg">3</div>
                                    <span className="text-indigo-600 font-bold tracking-widest uppercase text-xs">Layer Three</span>
                                </div>
                                <h3 className="text-4xl font-bold text-slate-900 mb-5">Smart Sensors</h3>
                                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                    We combine visual data with onboard motion sensors to ensure smooth, stable flight
                                    even during aggressive maneuvers or adverse conditions — correcting any positional
                                    drift instantly at the edge, with no cloud dependency.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        'Multi-sensor fusion at ultra-low latency',
                                        'GNSS-free altitude awareness',
                                        'Instant drift correction at the edge',
                                        'Fully on-board — zero cloud dependency',
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
                                    <img
                                        src={SensorFusion}
                                        alt="Sensor fusion"
                                        className="w-full h-80 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                                    <div className="absolute inset-4 border border-indigo-400/30 rounded-2xl pointer-events-none" />
                                    <div className="absolute bottom-5 left-5 right-5">
                                        <div className="grid grid-cols-3 gap-3">
                                            {[['FUSION', 'ACTIVE'], ['DRIFT', 'CORRECTED'], ['EDGE', 'ONLY']].map(([l, v]) => (
                                                <div key={l} className="bg-black/70 backdrop-blur border border-indigo-500/30 rounded-lg p-3 text-center">
                                                    <div className="text-indigo-400 text-xs font-mono mb-1">{l}</div>
                                                    <div className="text-white font-bold font-mono">{v}</div>
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
                5. DEPLOYMENT SCENARIO IMAGE STACK
            ══════════════════════════════════════ */}
            <section className="py-28 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
                        <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-3 block">Designed for These Environments</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">Target Deployment Scenarios</h2>
                        <p className="text-xl text-slate-500 max-w-2xl mx-auto">Engineered to be adaptable across indigenous platforms — from tactical micro-drones to heavy-lift UGVs.</p>
                    </motion.div>

                    {/* Tab selectors */}
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

                    {/* Active scenario display */}
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
                                    <span>Engineering target: Zero GNSS dependency</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Stacked image thumbnail strip */}
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
                6. GNSS vs NOVALISEO COMPARISON
            ══════════════════════════════════════ */}
            <section className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="max-w-5xl mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Standard GNSS Fails You</h2>
                        <p className="text-slate-500 text-lg">A direct comparison in contested environments.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Standard GNSS */}
                        <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}
                            className="bg-red-50 border border-red-100 rounded-3xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-red-100 border border-red-200 rounded-xl flex items-center justify-center">
                                    <FaSatellite className="text-red-500" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">Standard GNSS-Dependent</h3>
                            </div>
                            {[
                                'Jammed by high-power RF within seconds',
                                'Susceptible to Disruption — can be hijacked remotely',
                                'Fails in tunnels, urban canyons, indoors',
                                'Signal outage = mission abort',
                                'Dependent on foreign satellite infrastructure',
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3 py-3 border-b border-red-100">
                                    <FaBan className="text-red-400 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-600 text-sm">{item}</span>
                                </div>
                            ))}
                        </motion.div>

                        {/* Novaliseo */}
                        <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }}
                            className="bg-blue-50 border border-blue-100 rounded-3xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-blue-100 border border-blue-200 rounded-xl flex items-center justify-center">
                                    <FaShieldAlt className="text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">Novaliseo Visual Autonomy</h3>
                            </div>
                            {[
                                'Zero RF signal dependency — unjammable by design',
                                'No external signal = nothing to disrupt',
                                'Operates indoors, underground, in dense terrain',
                                'Signal outage: operationally irrelevant',
                                'Fully indigenous — sovereign from launch to landing',
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
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Equip Your Platforms with Certainty</h2>
                        <p className="text-slate-400 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                            Integration support available for all DRDO and private sector UCAV, UAV, and UGV platforms.
                            Built to your hardware. Owned by you.
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

export default DeniedNavigation;
