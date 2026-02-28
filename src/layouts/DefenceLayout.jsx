import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const DefenceLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-100 overflow-hidden relative">
            {/* Background Grid */}
            <div className="fixed inset-0 z-0 bg-[linear-gradient(rgba(0,243,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            {/* HUD Overlay */}
            <div className="fixed inset-0 z-50 pointer-events-none">
                {/* Corner Brackets */}
                <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-cyan-500/50 rounded-tl-lg" />
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-cyan-500/50 rounded-tr-lg" />
                <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-cyan-500/50 rounded-bl-lg" />
                <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-cyan-500/50 rounded-br-lg" />

                {/* Scanline */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent h-[5px] w-full animate-scanline opacity-30" />

                {/* Status Ticker */}
                <div className="absolute bottom-6 left-20 right-20 h-6 overflow-hidden flex items-center justify-center">
                    <div className="text-[10px] font-mono text-cyan-500/60 uppercase tracking-widest animate-pulse">
                        System: ONLINE | Security: MAX | Nodes: ACTIVE | Latency: 4ms | Defence Protocols: ENGAGED
                    </div>
                </div>
            </div>

            <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow pt-20">
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default DefenceLayout;
