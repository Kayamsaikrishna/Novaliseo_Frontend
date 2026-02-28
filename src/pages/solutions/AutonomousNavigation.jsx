import React from 'react';
import { motion } from 'framer-motion';
import { FaSatellite, FaMapMarkedAlt, FaSignal, FaShieldAlt, FaMicrochip, FaEye, FaArrowRight } from 'react-icons/fa';

import HeroImg from '../../assets/defence/dined nav.png';
import ProblemImg from '../../assets/defence/latency.png';
import Case1Img from '../../assets/defence/Boarder Security.png';
import Case2Img from '../../assets/defence/real_time_mapping.png';

const AutonomousNavigation = () => {
    return (
        <div className="bg-white min-h-screen pt-16">

            {/* 1. CINEMATIC HERO SECTION ("Vision Flow") */}
            <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900">
                {/* Abstract Video Background / Placeholder */}
                <div className="absolute inset-0 opacity-40">
                    <div
                        className="absolute inset-0 bg-cover bg-center animate-pan-slow"
                        style={{ backgroundImage: `url(${HeroImg})` }}
                    ></div>
                    {/* In production, replace with: <video autoPlay loop muted playsInline className="w-full h-full object-cover">...</video> */}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full backdrop-blur-md mb-8">
                            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                            <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">Mission Critical • GPS Denied</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight leading-none">
                            ABSOLUTE <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">POSITIONING</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto font-light leading-relaxed mb-12">
                            Sovereign navigation systems for UAVs and UGVs that maintain
                            <span className="text-white font-semibold"> sub-meter accuracy </span>
                            in completely jammed electronic warfare environments.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold tracking-wider transition-all border-b-4 border-blue-800">
                                REQUEST TECH BRIEF
                            </button>
                            <button className="px-8 py-4 bg-transparent border border-white/30 text-white hover:bg-white/10 rounded-full font-bold tracking-wider transition-all">
                                WATCH DEMO
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. OPERATIONAL PROBLEM ("Why This Matters") */}
            <section className="py-24 bg-slate-50 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-blue-600 font-bold tracking-widest uppercase mb-4 text-sm">The Challenge</h2>
                            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                                When Satellite Signals <span className="text-red-600">Go Dark</span>.
                            </h3>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                Modern battlefields are defined by spectrum dominance. Enemy EW assets can spoof or jam GNSS/GPS signals instantly, rendering traditional platforms blind.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-blue-500 pl-6">
                                Novaliseo's ANS (Autonomous Navigation System) doesn't rely on space assets. It uses "Visual Terrain Matching" and "Inertial Fusion" to determine location based on what it <em>sees</em>, not what it receives.
                            </p>
                        </motion.div>
                        <div className="relative h-[500px] bg-slate-900 rounded-2xl overflow-hidden shadow-2xl">
                            <div
                                className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity"
                                style={{ backgroundImage: `url(${ProblemImg})` }}
                            ></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-64 h-64 border border-blue-500/30 rounded-full flex items-center justify-center relative animate-spin-slow">
                                    <div className="w-56 h-56 border border-dashed border-blue-500/50 rounded-full"></div>
                                    <div className="absolute top-0 w-2 h-4 bg-blue-500"></div>
                                </div>
                            </div>
                            <div className="absolute bottom-8 left-8 right-8 bg-black/80 backdrop-blur border-t border-blue-500 p-6">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <div className="text-xs text-blue-400 font-mono mb-1">SIGNAL STATUS</div>
                                        <div className="text-red-500 font-bold font-mono text-lg">GPS DISCONNECTED</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-blue-400 font-mono mb-1">INTERNAL LOCK</div>
                                        <div className="text-emerald-400 font-bold font-mono text-lg">100% ACCURATE</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. CORE TECHNOLOGIES (Detailed Grid) */}
            <section className="py-32 bg-slate-900 text-white relative">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-24">
                        <h2 className="text-3xl font-bold mb-4">Under The Hood</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg">The architecture of autonomy. Three layers of redundant precision.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Tech 1 */}
                        <div className="group bg-slate-800 p-8 pt-12 rounded-none border border-slate-700 hover:border-blue-500 transition-all duration-300 relative">
                            <div className="absolute -top-6 left-8 w-12 h-12 bg-blue-600 flex items-center justify-center text-white shadow-lg">
                                <FaEye size={20} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">Visual Odometry</h3>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                Frame-by-frame analysis of terrain features using stereo cameras. Tracks movement delta with 99.9% precision by identifying static landmarks in real-time.
                            </p>
                            <ul className="text-sm text-slate-500 space-y-2 border-t border-slate-700 pt-4">
                                <li className="flex justify-between"><span>Frame Rate</span> <span className="text-white">120 FPS</span></li>
                                <li className="flex justify-between"><span>Resolution</span> <span className="text-white">4K Stereo</span></li>
                            </ul>
                        </div>

                        {/* Tech 2 */}
                        <div className="group bg-slate-800 p-8 pt-12 rounded-none border border-slate-700 hover:border-blue-500 transition-all duration-300 relative">
                            <div className="absolute -top-6 left-8 w-12 h-12 bg-indigo-600 flex items-center justify-center text-white shadow-lg">
                                <FaMicrochip size={20} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-indigo-400 transition-colors">Sensor Fusion Chip</h3>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                Custom FPGA implementation of Kalman Filters. Merges IMU (Inertial), Magnetometer, and Barometer data to correct visual drift instantly.
                            </p>
                            <ul className="text-sm text-slate-500 space-y-2 border-t border-slate-700 pt-4">
                                <li className="flex justify-between"><span>Processing</span> <span className="text-white">Edge Intelligence</span></li>
                                <li className="flex justify-between"><span>Latency</span> <span className="text-white">&lt; 2ms</span></li>
                            </ul>
                        </div>

                        {/* Tech 3 */}
                        <div className="group bg-slate-800 p-8 pt-12 rounded-none border border-slate-700 hover:border-blue-500 transition-all duration-300 relative">
                            <div className="absolute -top-6 left-8 w-12 h-12 bg-emerald-600 flex items-center justify-center text-white shadow-lg">
                                <FaMapMarkedAlt size={20} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-400 transition-colors">Terrain Relative Nav</h3>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                Compares live sensor view against stored satellite elevation maps (DEM) to obtain absolute coordinates without external signals.
                            </p>
                            <ul className="text-sm text-slate-500 space-y-2 border-t border-slate-700 pt-4">
                                <li className="flex justify-between"><span>Map Database</span> <span className="text-white">Encrypted Onboard</span></li>
                                <li className="flex justify-between"><span>Accuracy</span> <span className="text-white">CEP 1.5m</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. USE CASES ("Vision Flow" / Scrollytelling) */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row gap-16">
                        <div className="w-full md:w-1/3">
                            <div className="sticky top-24">
                                <h2 className="text-4xl font-bold text-slate-900 mb-6">Deployment Scenarios</h2>
                                <p className="text-slate-600 mb-8">Adaptable to any indigenous platform. From tactical micro-drones to heavy-lift logistics UGVs.</p>
                                <div className="flex flex-col gap-4">
                                    <div className="p-4 bg-slate-50 border-l-4 border-blue-600 cursor-pointer hover:bg-slate-100">
                                        <h4 className="font-bold text-slate-900">High Altitude Surveillance</h4>
                                        <p className="text-sm text-slate-500">Border patrol in heavy clouds.</p>
                                    </div>
                                    <div className="p-4 bg-white border-l-4 border-slate-200 cursor-pointer hover:bg-slate-50 hover:border-slate-400">
                                        <h4 className="font-bold text-slate-900">Urban Counter-Terror</h4>
                                        <p className="text-sm text-slate-500">Indoor/Outdoor transition mapping.</p>
                                    </div>
                                    <div className="p-4 bg-white border-l-4 border-slate-200 cursor-pointer hover:bg-slate-50 hover:border-slate-400">
                                        <h4 className="font-bold text-slate-900">Logistics Resupply</h4>
                                        <p className="text-sm text-slate-500">Last-mile delivery to forward bases.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-2/3 space-y-12">
                            {/* Expanded Image 1 */}
                            <div className="aspect-video bg-slate-100 rounded-xl overflow-hidden relative shadow-lg group">
                                <img src={Case1Img} alt="Drone" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                    <h3 className="text-white font-bold text-xl">High-Altitude Operations</h3>
                                    <p className="text-slate-300 text-sm mt-2">Creating 3D point clouds of mountain terrain in real-time.</p>
                                </div>
                            </div>

                            {/* Expanded Image 2 */}
                            <div className="aspect-video bg-slate-100 rounded-xl overflow-hidden relative shadow-lg group">
                                <img src={Case2Img} alt="Urban" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                    <h3 className="text-white font-bold text-xl">GPS-Dark Urban Canyons</h3>
                                    <p className="text-slate-300 text-sm mt-2">Navigating dense city streets using only visual landmarks.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. CALL TO ACTION */}
            <section className="py-20 bg-blue-600 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">Equip Your Platforms with Certainty</h2>
                    <p className="text-blue-100 text-xl mb-10">Integration support available for all DRDO and Private Sector UCAV platforms.</p>
                    <button className="px-10 py-5 bg-white text-blue-900 font-bold rounded shadow-xl hover:shadow-2xl hover:scale-105 transition-all text-lg flex items-center gap-3 mx-auto">
                        Schedule Integration Assessment <FaArrowRight />
                    </button>
                </div>
            </section>

        </div>
    );
};

export default AutonomousNavigation;
