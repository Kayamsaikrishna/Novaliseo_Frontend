import React from 'react';
import HolographicCard from '../components/ui/HolographicCard';
import { ArrowRight, Archive } from 'lucide-react';

const LegacyInnovation = () => {
    return (
        <div className="relative min-h-screen pt-20 pb-10 px-6">

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="mb-12 border-b border-slate-800 pb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-400 text-xs font-mono tracking-widest mb-4">
                        <Archive size={14} /> ARCHIVE
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold font-tech text-slate-200 mb-4">
                        Civilian Applications
                    </h1>
                    <p className="text-lg text-slate-500 max-w-2xl">
                        Technologies and projects developed for commercial and industrial sectors.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-70 hover:opacity-100 transition-opacity duration-500">
                    <HolographicCard className="p-6 border-slate-800 hover:border-slate-600" hoverEffect={false}>
                        <h3 className="text-xl font-bold text-white mb-2">Enterprise IoT</h3>
                        <p className="text-slate-400 text-sm mb-4">Smart building sensors and data analytics platforms.</p>
                        <div className="h-[1px] w-full bg-slate-800 mb-4" />
                        <button className="text-cyan-500 text-sm flex items-center gap-2 hover:text-cyan-400">
                            View Details <ArrowRight size={14} />
                        </button>
                    </HolographicCard>

                    <HolographicCard className="p-6 border-slate-800 hover:border-slate-600" hoverEffect={false}>
                        <h3 className="text-xl font-bold text-white mb-2">Web Solutions</h3>
                        <p className="text-slate-400 text-sm mb-4">High-performance React applications for fintech.</p>
                        <div className="h-[1px] w-full bg-slate-800 mb-4" />
                        <button className="text-cyan-500 text-sm flex items-center gap-2 hover:text-cyan-400">
                            View Details <ArrowRight size={14} />
                        </button>
                    </HolographicCard>

                    <HolographicCard className="p-6 border-slate-800 hover:border-slate-600" hoverEffect={false}>
                        <h3 className="text-xl font-bold text-white mb-2">Mobile Apps</h3>
                        <p className="text-slate-400 text-sm mb-4">Cross-platform mobile experiences for retail.</p>
                        <div className="h-[1px] w-full bg-slate-800 mb-4" />
                        <button className="text-cyan-500 text-sm flex items-center gap-2 hover:text-cyan-400">
                            View Details <ArrowRight size={14} />
                        </button>
                    </HolographicCard>
                </div>
            </div>
        </div>
    );
};

export default LegacyInnovation;
