import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useSEO from '../../hooks/useSEO';

const FutureOfStrategicSoftware = () => {
    useSEO({
        title: 'Future of Strategic Defence Software | NOVALISEO',
        description: 'Explore the future of strategic defence software. Learn how software-defined engineering and autonomous systems are replacing legacy hardware in national security.',
    });

    return (
        <div className="relative pt-32 pb-24 bg-slate-50 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link to="/blog" className="inline-flex items-center gap-2 text-blue-600 font-semibold mb-8 hover:!text-blue-800 transition-colors">
                    <FaArrowLeft /> Back to Knowledge Hub
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-3xl p-10 md:p-14 shadow-xl border border-slate-100"
                >
                    <div className="inline-block px-4 py-1 bg-indigo-50 text-indigo-600 font-bold text-xs rounded-full uppercase tracking-widest mb-6">
                        Strategic Software
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                        The Future of Strategic Defence Software
                    </h1>

                    <div className="prose prose-lg text-slate-600 max-w-none">
                        <p>
                            The era of multi-million dollar monolithic hardware platforms is ending. In the coming decade,
                            national security will be dictated by the agility and resilience of <strong>strategic AI engineering</strong>.
                            The transition toward "software-defined" paradigms is the most significant leap in military
                            capability since the jet engine.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Decoupling Hardware and Capability</h2>
                        <p>
                            Traditionally, upgrading a fleet's tactical capability required ripping out physical hardware and
                            installing new sensors—a process that took years and cost billions. Today, through advanced
                            <strong> defence simulation software</strong> and sovereign AI architecture, capabilities are primarily
                            updated via over-the-air code deployments. A drone can learn a new evasion maneuver or target
                            classification algorithm overnight, fundamentally altering its operational threat profile.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Simulation and Digital Twins</h2>
                        <p>
                            Before a single line of code is pushed to a frontline asset, it undergoes millions of iterations in
                            the cloud. <strong>Defence simulation software</strong> creates an exact digital twin of the battlefield.
                            Here, AI algorithms battle against predicted adversary logic, allowing engineers to refine threat
                            detection algorithms virtually. This ensures that when the software is deployed, it performs with
                            zero-defect reliability in the real world.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">India's Strategic Imperative</h2>
                        <p>
                            Relying on imported black-box software is a structural vulnerability. For true operational independence,
                            the core operating system governing autonomous assets must be indigenously engineered. NOVALISEO
                            specializes in building this foundational <strong>strategic AI software</strong>, ensuring that the logic
                            controlling the nation's critical assets is entirely sovereign, transparent, and secure.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default FutureOfStrategicSoftware;
