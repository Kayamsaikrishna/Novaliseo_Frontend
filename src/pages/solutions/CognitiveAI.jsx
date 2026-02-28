import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaSearch, FaNetworkWired, FaChess, FaEye, FaMicrochip, FaArrowRight } from 'react-icons/fa';

import HeroImg from '../../assets/defence/sovereign_intelligence_abstract_v2_1771334796018.png';
import VizImg from '../../assets/defence/strategic_map_visualization_1771333852873.png';

const CognitiveAI = () => {
    return (
        <div className="bg-slate-50 min-h-screen pt-16">

            {/* 1. CINEMATIC HERO */}
            <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-violet-950">
                <div className="absolute inset-0 opacity-40">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${HeroImg})` }}
                    ></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 via-violet-900/80 to-slate-900"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 border border-violet-400/20 rounded-full backdrop-blur-md mb-8">
                            <FaBrain className="text-violet-400" />
                            <span className="text-violet-200 text-xs font-bold tracking-[0.2em] uppercase">Sentient Defence Systems</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
                            DECISION <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-300">SUPERIORITY</span>
                        </h1>
                        <p className="text-xl text-violet-100 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
                            Synthesizing millions of data points from diverse sensors to provide commanders with predictive insights and automated courses of action.
                        </p>
                        <div className="flex justify-center gap-6">
                            <button className="px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white rounded-full font-bold tracking-wider transition-all border-b-4 border-violet-800">
                                REQUEST DEMO
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. THE PROBLEM: DATA OVERLOAD */}
            <section className="py-24 bg-slate-900 text-white border-b border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-violet-500 font-bold tracking-widest uppercase mb-4 text-sm">The Fog of War</h2>
                            <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                Too Much Data. <br /> <span className="text-slate-500">Too Little Time.</span>
                            </h3>
                            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                Modern warfare generates terabytes of sensor data per second. Human operators cannot process this influx fast enough to spot critical threats.
                            </p>
                            <div className="p-6 bg-slate-800 border-l-4 border-violet-500">
                                <p className="text-white italic">"Novaliseo's Cognitive Engine acts as a force multiplier, distilling noise into clear, actionable intelligence."</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            {/* Animated Data Visualization Placeholder */}
                            <div className="relative h-[400px] bg-black rounded-lg border border-slate-700 shadow-2xl overflow-hidden p-4 font-mono text-xs">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                                <div className="grid grid-cols-2 gap-4 h-full">
                                    <div className="bg-slate-900/50 p-4 rounded border border-slate-700/50">
                                        <div className="text-violet-400 mb-2 font-bold">RADAR FEED</div>
                                        <div
                                            className="h-full bg-cover opacity-20 grayscale"
                                            style={{ backgroundImage: `url(${VizImg})` }}
                                        ></div>
                                    </div>
                                    <div className="bg-slate-900/50 p-4 rounded border border-slate-700/50">
                                        <div className="text-emerald-400 mb-2 font-bold">OPTICAL RECON</div>
                                        <div className="space-y-2 text-emerald-500/70">
                                            <div>{'>'} TARGET_ID: T-90</div>
                                            <div>{'>'} CONFIDENCE: 98.4%</div>
                                            <div>{'>'} DIST: 4.2 KM</div>
                                            <div>{'>'} BEARING: 220°</div>
                                        </div>
                                    </div>
                                    <div className="col-span-2 bg-slate-900/50 p-4 rounded border border-slate-700/50 relative overflow-hidden">
                                        <div className="text-blue-400 mb-2 font-bold">FUSION ENGINE OUTPUT</div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-center">
                                                <div className="text-3xl font-bold text-white mb-2">THREAT DETECTED</div>
                                                <div className="px-4 py-1 bg-red-600 text-white rounded inline-block animate-pulse">RECOMMEND ENGAGEMENT</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. CAPABILITIES */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Core Capabilities</h2>
                        <p className="text-slate-500 text-lg">Intelligence that thinks like a commander.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="group p-8 border border-slate-200 rounded-2xl hover:border-violet-500 hover:shadow-2xl transition-all duration-300">
                            <div className="w-14 h-14 bg-violet-100 rounded-xl flex items-center justify-center text-violet-600 mb-6 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                                <FaNetworkWired size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Multi-Sensor Fusion</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Seamlessly stitches together inputs from Thermal, LiDAR, Radar, and Optical sensors to create a single, error-free view of the battlefield.
                            </p>
                        </div>

                        <div className="group p-8 border border-slate-200 rounded-2xl hover:border-violet-500 hover:shadow-2xl transition-all duration-300">
                            <div className="w-14 h-14 bg-violet-100 rounded-xl flex items-center justify-center text-violet-600 mb-6 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                                <FaChess size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Predictive Strategy</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Uses Game Theoretic models to analyze enemy formations and predict their next 3 possible moves with statistical probability.
                            </p>
                        </div>

                        <div className="group p-8 border border-slate-200 rounded-2xl hover:border-violet-500 hover:shadow-2xl transition-all duration-300">
                            <div className="w-14 h-14 bg-violet-100 rounded-xl flex items-center justify-center text-violet-600 mb-6 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                                <FaEye size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Computer Vision</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Trained on indigenous datasets to recognize friend/foe assets (IFF) instantly, even when partially obscured by camouflage or smoke.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. CALL TO ACTION */}
            <section className="py-20 bg-violet-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] opacity-10"></div>
                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">Gain the Information Advantage</h2>
                    <p className="text-violet-200 text-xl mb-10">
                        Deploy our Cognitive Intelligence modules on edge devices or command centers today.
                    </p>
                    <button className="px-10 py-5 bg-white text-violet-900 font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all text-lg flex items-center gap-3 mx-auto">
                        Contact Solutions Engineer <FaArrowRight />
                    </button>
                </div>
            </section>

        </div>
    );
};

export default CognitiveAI;
