import React from 'react';
import { motion } from 'framer-motion';
import { FaVrCardboard, FaGamepad, FaUsers, FaGlobe, FaCube, FaBolt } from 'react-icons/fa';

import HeroImg from '../../assets/defence/indigenous_core_abstract_v2_1771334339840.png';
import SimImg from '../../assets/defence/attitude.png';

const VirtualTraining = () => {
    return (
        <div className="bg-white min-h-screen pt-16">

            {/* 1. HERO SECTION */}
            <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-indigo-950">
                <div className="absolute inset-0 opacity-40">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${HeroImg})` }}
                    ></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-950 via-indigo-950/70 to-purple-900/30"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-none tracking-tight">
                            DIGITAL <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">BATTLEFIELDS</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-indigo-100 mb-10 font-light">
                            Train as you fight. Hyper-realistic synthetic environments that replicate the fog of war without the cost of live exercises.
                        </p>
                        <div className="flex gap-4">
                            <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded flex items-center gap-2 transition-all">
                                <FaVrCardboard /> Experience Demo
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. THE DIGITAL TWIN ADVANTAGE */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
                            <img
                                src={SimImg}
                                alt="VR Training"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-transparent flex items-end p-8">
                                <div className="text-white">
                                    <h3 className="text-2xl font-bold mb-2">Immersive Cockpit Simulators</h3>
                                    <p className="text-indigo-200">Pilot training with verified flight physics and haptic feedback.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center">
                            <h2 className="text-indigo-600 font-bold uppercase tracking-widest mb-4">Why Simulation?</h2>
                            <h3 className="text-4xl font-bold text-slate-900 mb-8">Fail Fast. Learn Faster. Survive Real Combat.</h3>
                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 flex-shrink-0">
                                        <FaCube size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-2">Infinite Scenarios</h4>
                                        <p className="text-slate-600">Generate thousands of unique mission parameters—weather, enemy tactics, equipment failures—in seconds.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 flex-shrink-0">
                                        <FaGlobe size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-2">Global Terrain Database</h4>
                                        <p className="text-slate-600">Train on exact replicas of border regions, urban centers, and maritime zones using operational 3D scanned data.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 flex-shrink-0">
                                        <FaUsers size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-2">Joint Force Integration</h4>
                                        <p className="text-slate-600">Connect tank crews, pilots, and infantry in a single shared virtual room for combined arms wargaming.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. HARDWARE INTEGRATION */}
            <section className="py-24 bg-indigo-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-16">Hardware-in-the-Loop (HIL)</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 border border-indigo-700 bg-indigo-800/50 rounded-xl">
                            <FaBolt className="text-4xl text-yellow-400 mx-auto mb-6" />
                            <h3 className="text-xl font-bold mb-4">Real Weapon Systems</h3>
                            <p className="text-indigo-200">Connect actual fire control computers to the simulation for valid testing.</p>
                        </div>
                        <div className="p-8 border border-indigo-700 bg-indigo-800/50 rounded-xl">
                            <FaGamepad className="text-4xl text-green-400 mx-auto mb-6" />
                            <h3 className="text-xl font-bold mb-4">Tactical Controllers</h3>
                            <p className="text-indigo-200">Custom input devices replicating drone GCS and vehicle yokes.</p>
                        </div>
                        <div className="p-8 border border-indigo-700 bg-indigo-800/50 rounded-xl">
                            <FaVrCardboard className="text-4xl text-purple-400 mx-auto mb-6" />
                            <h3 className="text-xl font-bold mb-4">XR Headsets</h3>
                            <p className="text-indigo-200">Support for Varjo XR-3 and industrial-grade VR HMDs.</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default VirtualTraining;
