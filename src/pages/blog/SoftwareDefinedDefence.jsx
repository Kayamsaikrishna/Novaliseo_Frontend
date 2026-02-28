import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useSEO from '../../hooks/useSEO';

const SoftwareDefinedDefence = () => {
    useSEO({
        title: 'Software-Defined Defence Systems Explained | NOVALISEO',
        description: 'Understand the mechanics of Software-Defined Defence (SDD). Learn how leading defence intelligence companies replace rigid hardware with adaptable AI software scopes.',
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
                    <div className="inline-block px-4 py-1 bg-cyan-50 text-cyan-600 font-bold text-xs rounded-full uppercase tracking-widest mb-6">
                        System Architecture
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                        Software-Defined Defence Systems Explained
                    </h1>

                    <div className="prose prose-lg text-slate-600 max-w-none">
                        <p>
                            TThe concept of "Software-Defined" technology revolutionized the commercial networking and communications
                            industries over the past decade. Now, this exact same paradigm shift is violently upending the traditional
                            military-industrial complex. <strong>Software-Defined Defence (SDD)</strong> is the philosophy that the primary
                            strategic value of a weapon or reconnaissance system lies in its code, rather than its steel.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">What makes a system "Software-Defined"?</h2>
                        <p>
                            In legacy systems, a radar dish was hardwired with specific frequencies and logic boards to track specific types
                            of threats. If the adversary developed a new jet, the physical hardware had to be replaced. In a
                            <strong> software-defined architecture</strong>, the radar dish is simply a raw data collector. All the filtering,
                            tracking, classification, and electronic counter-measures are handled dynamically by an AI software overlay.
                            A single software update instantly makes the entire fleet capable of tracking the new threat.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">The Role of Edge Computing</h2>
                        <p>
                            To accomplish this without latency, <strong>AI defence software</strong> must operate at the "Edge". This means
                            the heavy computational neural networks are run locally on the drone or vehicle's own internal processors, rather
                            than beaming data back to a central cloud which can be jammed. This creates a decentralized mesh of highly
                            intelligent, autonomous actors capable of making split-second decisions.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">NOVALISEO's Architecture</h2>
                        <p>
                            As a leading <strong>defence intelligence company</strong>, NOVALISEO architects these abstract software layers.
                            Our sovereign platform framework guarantees that allied forces can continuously push updates, new tactical doctrines,
                            and advanced swarm algorithms to all autonomous units instantly, maintaining a permanent overmatch against rigid,
                            hardware-locked adversaries.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default SoftwareDefinedDefence;
