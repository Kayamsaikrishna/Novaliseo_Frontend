import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FaCompass, FaCheckCircle, FaBan, FaArrowRight,
    FaExclamationTriangle, FaMapMarkedAlt, FaWind,
    FaMountain, FaCity, FaMicrochip, FaSatellite
} from 'react-icons/fa';

import HeroImg from '../../assets/defence/dined nav.png';
import Img1 from '../../assets/defence/gnss_visual_tracking.png';
import Img2 from '../../assets/defence/attitude.png';
import Img3 from '../../assets/defence/indigenous_core_abstract_v2_1771334339840.png';

// Section & Scenario Assets
import ProblemImg from '../../assets/defence/latency.png';
import FrontierImg from '../../assets/defence/Boarder Security.png';
import UrbanImg from '../../assets/defence/strategic_mesh_nodes_v2_1771334837767.png';
import CanopyImg from '../../assets/defence/defence_hero_strategic_v2_1771334713607.png';
import SubterraneanImg from '../../assets/defence/sensor.png';

const scenarios = [
    { title: 'Frontier Border Patrol', sub: 'Navigating high-altitude Himalayan valleys where GNSS signals are spoofed or jammed.', img: FrontierImg, detail: 'In contested border regions, GPS is no longer a reliable reference. Our terrain-referenced navigation uses the unique geometry of the landscape — ridges, peaks, and valleys — to maintain sub-meter positioning without any external signal dependency.' },
    { title: 'Urban Canyon Engagement', sub: 'Precision positioning in dense Indian metropolitan centers like Mumbai or Bangalore.', img: UrbanImg, detail: 'High-rise density in Indian cities creates extreme multipath errors, jumping coordinates by hundreds of meters. Visual-inertial odometry tracks local motion relative to urban features, providing the precision required for low-altitude autonomous flight.' },
    { title: 'Dense Canopy Navigation', sub: 'Operating in thick jungle environments where the sky is obscured.', img: CanopyImg, detail: 'In dense tropical forests, satellite visibility is zero. Navigation by sight allows the platform to weave through the canopy, mapping and remembering its path through complex 3D environments where traditional GPS systems are blind.' },
    { title: 'Subterranean ISR', sub: 'Navigating bunkers, tunnels, and underground facilities.', img: SubterraneanImg, detail: 'Subterranean spaces are the ultimate GNSS-denied environment. Concurrent Mapping and Localization (SLAM) enables platforms to build a 3D structural map of unknown underground spaces, ensuring mission success where no signal can penetrate.' },
];

const layers = [
    { num: 1, color: 'blue', side: 'left', img: Img1, title: 'Visual Odometry', body: 'The platform "sees" its motion. By tracking thousands of features across high-frequency camera frames, the system computes its exact delta-movement, maintaining precise positioning across any terrain without ever needing a satellite fix.', hud: [['NAV', 'VISUAL'], ['TRACK', '1.2Kpts'], ['REF', 'LOCAL']], items: ['High-frequency feature tracking', 'Cumulative drift correction', 'Zero RF emission / Complete silence', 'Day/Night multi-modal sensing'] },
    { num: 2, color: 'indigo', side: 'right', img: Img2, title: 'Terrain Referencing', body: 'The system matches the local 3D landscape against on-board strategic maps. Peaks, ridges, and man-made structures become the new "satellites," providing absolute positioning references that cannot be jammed or spoofed.', hud: [['MAP', 'ACTIVE'], ['MATCH', '98%'], ['ALT', 'Himalayan']], items: ['Strategic map cross-referencing', 'Absolute position via landmarking', 'Robust to seasonal terrain changes', 'Anti-spoofing geometric validation'] },
    { num: 3, color: 'blue', side: 'left', img: Img3, title: 'Deep Inertial Fusion', body: 'When visuals are obscured by smoke or dust, deep learning models predict motion patterns by fusing skeletal IMU data with environmental physics — ensuring the navigation thread is never broken, even in the "blind" window.', hud: [['FUSE', 'NEURAL'], ['IMU', 'STABLE'], ['BUFFER', 'ACTIVE']], items: ['Neural motion prediction', 'Robustness to visual obscuration', 'Sub-millisecond sensor fusion', 'Physics-aware dead reckoning'] },
];

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } };
const fadeLeft = { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } };
const fadeRight = { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } };

const ComplexNavigation = () => {
    const [activeScenario, setActiveScenario] = useState(0);
    return (
        <div className="bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
            {/* HERO - RESTORED MAJESTIC BACKGROUND */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white border-b border-slate-200">
                <motion.div initial={{ scale: 1.05, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.5 }} className="absolute inset-0 z-0">
                    <img src={HeroImg} alt="Complex Navigation" className="w-full h-full object-cover opacity-60 grayscale-[0.3]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
                </motion.div>

                {/* TERRAIN CONTOUR SVG OVERLAY */}
                <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                        <motion.path
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            d="M0,500 C200,450 400,550 600,500 C800,450 1000,550 1000,500"
                            fill="none" stroke="#2563eb" strokeWidth="2"
                        />
                        <path d="M0,600 C250,550 450,650 650,600 C850,550 1000,650 1000,600" fill="none" stroke="#2563eb" strokeWidth="1" />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-700 font-bold text-xs uppercase tracking-widest mb-8 shadow-sm">
                            <FaCompass className="animate-spin" style={{ animationDuration: '8s' }} /> Denied & Hostile Environment Navigation
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black leading-[0.95] text-slate-900 mb-8 tracking-tighter">
                            Navigate the<br /><span className="text-blue-600">Signal Void.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mb-12 font-medium">We are engineering navigation systems that read the literal geometry of the terrain as their map — operating through total GPS denial with zero signal dependency.</p>
                        <div className="flex flex-wrap gap-4">
                            <a href="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-700 transition-all shadow-xl text-lg">Initalize Pathfinder <FaArrowRight /></a>
                            <a href="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-white border-2 border-slate-900 text-slate-900 rounded-full font-bold hover:bg-slate-50 transition-all text-lg">Strategic Map Topology</a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* STAT STRIP - LIGHT ELITE */}
            <section className="py-16 bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-x-0 md:divide-x divide-slate-100 gap-y-10">
                        {[{ val: 'Zero', label: 'GNSS dependency' }, { val: 'Sub-meter', label: 'Terrain referencing' }, { val: 'Indoor', label: 'Subterranean capable' }, { val: 'Silent', label: 'No RF emission' }].map((s, i) => (
                            <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="px-8 text-center md:text-left">
                                <div className="text-4xl font-black text-blue-600 mb-1">{s.val}</div>
                                <div className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em]">{s.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* THE PROBLEM - THE SIGNAL VOID */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:w-1/2">
                            <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs block mb-6">Strategic Vulnerability</span>
                            <h2 className="text-4xl md:text-7xl font-bold text-slate-900 mb-8 leading-[1.05]">The <span className="text-blue-600 italic">Signal</span> Void.</h2>
                            <p className="text-xl text-slate-600 leading-relaxed mb-10">Modern electronic warfare has turned GNSS into a liability. Any platform dependent on external signals is a platform that can be blinded. In the silence of a jammed zone, mission success depends on independent sight.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { title: 'GPS Spoofing', body: 'False signals that lead platforms off-course.', val: '99% Error' },
                                    { title: 'Multipath Lag', body: 'Signal bounces in dense urban areas.', val: '340m+ Drift' }
                                ].map((stat, i) => (
                                    <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                        <div className="text-2xl font-black text-blue-600 font-mono mb-2 italic">{stat.val}</div>
                                        <h4 className="font-bold text-slate-900 text-sm mb-1">{stat.title}</h4>
                                        <p className="text-slate-500 text-[10px] leading-relaxed">{stat.body}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:w-1/2 relative">
                            <div className="aspect-video bg-slate-100 rounded-[3rem] overflow-hidden relative group border border-slate-200 shadow-2xl">
                                <img src={ProblemImg} alt="Jammed Environment" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" />
                                <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay" />

                                {/* TOPOGRAPHIC OVERLAY */}
                                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(37,99,235,0.1) 100%)' }}>
                                    <svg className="w-full h-full" viewBox="0 0 100 100">
                                        <motion.path d="M0,50 Q25,30 50,50 T100,50" fill="none" stroke="white" strokeWidth="0.5" animate={{ d: ["M0,50 Q25,30 50,50 T100,50", "M0,50 Q25,70 50,50 T100,50", "M0,50 Q25,30 50,50 T100,50"] }} transition={{ duration: 5, repeat: Infinity }} />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* THE CAPABILITIES - TERRAIN SENSE FLOW */}
            <section className="py-32 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-24">
                        <span className="text-blue-600 font-bold tracking-[0.4em] uppercase text-[10px] block mb-4">Logic Stack</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Neural <span className="text-blue-600 italic font-serif">Terrain Sense</span></h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {layers.map((layer, i) => (
                            <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group">
                                <div className="bg-white rounded-[3rem] p-10 h-full border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 relative flex flex-col">
                                    <div className="absolute top-8 right-8 text-6xl font-black text-slate-50 group-hover:text-blue-50 transition-colors pointer-events-none">0{i + 1}</div>
                                    <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl mb-12 shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                                        {i === 0 ? <FaMicrochip /> : i === 1 ? <FaMapMarkedAlt /> : <FaWind />}
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-6 leading-tight">{layer.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">{layer.body}</p>
                                    <div className="rounded-2xl overflow-hidden h-40 border border-slate-100 mb-8 relative">
                                        <img src={layer.img} alt={layer.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[5s]" />
                                        <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay" />
                                    </div>
                                    <ul className="space-y-3">
                                        {layer.items.slice(0, 3).map((item, j) => (
                                            <li key={j} className="flex items-center gap-3 text-slate-500 text-xs font-medium"><FaCheckCircle className="text-blue-500 shrink-0" /> {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SCENARIOS - FRONTIER EDGE */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div>
                            <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-4 block">Deployment Proof</span>
                            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 max-w-2xl leading-tight">Navigating the <span className="text-blue-600 italic">Frontier Edge.</span></h2>
                        </div>
                        <div className="flex gap-4">
                            {scenarios.map((_, i) => (
                                <button key={i} onClick={() => setActiveScenario(i)} className={`px-6 py-3 rounded-2xl border-2 font-bold transition-all text-xs uppercase tracking-widest ${activeScenario === i ? 'bg-blue-600 border-blue-600 text-white shadow-xl shadow-blue-200 scale-105' : 'bg-white border-slate-200 text-slate-400 hover:border-blue-300'}`}>Region 0{i + 1}</button>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-[4rem] overflow-hidden grid grid-cols-1 lg:grid-cols-5 shadow-[0_32px_128px_-32px_rgba(37,99,235,0.15)] relative border border-slate-100">
                        <div className="lg:col-span-3 relative h-[500px] lg:h-[600px] overflow-hidden group">
                            <motion.div key={activeScenario} initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} className="w-full h-full relative">
                                <img src={scenarios[activeScenario].img} alt={scenarios[activeScenario].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[10s]" />
                                <div className="absolute inset-0 bg-blue-50/10 mix-blend-overlay" />
                            </motion.div>
                        </div>

                        <div className="lg:col-span-2 p-16 flex flex-col justify-center bg-slate-50 relative">
                            <motion.div key={`text-${activeScenario}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                                <div className="text-blue-600 font-bold text-[10px] mb-4 uppercase tracking-[0.3em] underline decoration-blue-200 decoration-2 underline-offset-4">Operational Phase // 0{activeScenario + 1}</div>
                                <h3 className="text-4xl font-black text-slate-900 mb-6 leading-tight tracking-tighter">{scenarios[activeScenario].title}</h3>
                                <p className="text-blue-600 text-lg leading-relaxed mb-8 italic border-l-4 border-blue-600 pl-6">"{scenarios[activeScenario].sub}"</p>
                                <p className="text-slate-600 text-xl leading-relaxed mb-10 font-medium">{scenarios[activeScenario].detail}</p>

                                <div className="flex flex-wrap gap-3 pt-10 border-t border-slate-200">
                                    {['Zero-GNSS', 'Sovereign Map', 'Visual SLAM'].map(tag => (
                                        <span key={tag} className="px-5 py-2 rounded-full border border-blue-100 text-blue-700 text-[10px] uppercase font-bold tracking-widest bg-white shadow-sm">{tag}</span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* COMPARISON - GNSS VS TERRAIN SENSE */}
            <section className="py-32 bg-slate-50 relative overflow-hidden">
                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-24">
                        <span className="text-blue-600 font-bold tracking-[0.4em] uppercase text-[10px] block mb-4">Strategic Matrix</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">Signal Dependence vs <span className="text-blue-600 italic">Neural Autonomy</span></h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white rounded-[3rem] p-12 border border-slate-200 shadow-sm relative group overflow-hidden">
                            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-10">Standard GPS Navigation</h4>
                            <div className="space-y-6">
                                {[
                                    'Total failure in jammed or spoofed zones.',
                                    'Geometric drift in urban environments.',
                                    'Requires external satellite lock.',
                                    'Predictable vulnerabilities in EW conflict.',
                                    'Purely passive – no local spatial awareness.'
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 text-slate-500 text-sm">
                                        <FaBan className="text-red-400 shrink-0 mt-1" /> {item}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white rounded-[3rem] p-12 border border-blue-200 shadow-2xl shadow-blue-100/50 relative group overflow-hidden">
                            <h4 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-10">Novaliseo Terrain Sense</h4>
                            <div className="space-y-6">
                                {[
                                    'Fully operational under total signal denial.',
                                    'Sub-meter precision via visual landmarks.',
                                    '100% independent – zero external signal.',
                                    'Radio-silent – no emission footprint.',
                                    'Continuous 3D spatial comprehension.'
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-5 bg-blue-50/50 rounded-2xl border border-blue-100 text-slate-700 text-sm font-bold">
                                        <FaCheckCircle className="text-blue-600 shrink-0 mt-1" /> {item}
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
                        <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-10 border border-blue-100 shadow-inner">
                            <FaCompass className="text-blue-600 text-4xl shadow-[0_0_20px_rgba(37,99,235,0.3)]" />
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter">Navigate Anywhere.</h2>
                        <p className="text-slate-500 text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-medium">Integration support for all indigenous navigation and denied-environment programmes. Sovereignty in every environment.</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <a href="/contact" className="inline-flex items-center gap-4 px-12 py-6 bg-slate-900 text-white font-black rounded-full shadow-2xl hover:scale-105 transition-all text-xs uppercase tracking-widest">Initialize Pathfinder <FaArrowRight /></a>
                            <a href="/contact" className="inline-flex items-center gap-4 px-12 py-6 bg-white border-2 border-blue-600 text-blue-600 font-bold rounded-full hover:bg-slate-50 transition-all text-sm tracking-tight">Navigation Architecture</a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};
export default ComplexNavigation;
