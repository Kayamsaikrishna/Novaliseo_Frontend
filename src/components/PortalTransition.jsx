import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const PortalTransition = () => {
    const location = useLocation();
    const [isScanning, setIsScanning] = useState(false);

    useEffect(() => {
        // Trigger scan only when entering /autonomous-systems or its sub-pages
        if (location.pathname.startsWith('/autonomous-systems')) {
            setIsScanning(true);
            const timer = setTimeout(() => setIsScanning(false), 2000);
            return () => clearTimeout(timer);
        }
    }, [location.pathname]);

    return (
        <AnimatePresence>
            {isScanning && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[10000] pointer-events-none flex items-center justify-center overflow-hidden"
                >
                    {/* Dark Glass Overlay */}
                    <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"></div>

                    {/* Hexagonal Grid Layer */}
                    <div className="absolute inset-0 opacity-20">
                        <svg width="100%" height="100%">
                            <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                                <path d="M25 0 L50 14.4 L50 43.4 L25 57.8 L0 43.4 L0 14.4 Z" fill="none" stroke="#3b82f6" strokeWidth="0.5" />
                            </pattern>
                            <rect width="100%" height="100%" fill="url(#hexagons)" />
                        </svg>
                    </div>

                    {/* Scanning Beam */}
                    <motion.div
                        initial={{ y: '-100%' }}
                        animate={{ y: '100%' }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent shadow-[0_0_20px_#3b82f6]"
                    />

                    {/* Scanning Text */}
                    <div className="relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex flex-col items-center gap-4"
                        >
                            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
                            <div className="bg-slate-900/80 px-6 py-2 rounded-lg border border-blue-500/50">
                                <span className="text-blue-500 font-mono text-sm tracking-[0.3em] font-bold">
                                    INITIATING SECURE HANDSHAKE...
                                </span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Corner Bracket Accents */}
                    <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-blue-500/30"></div>
                    <div className="absolute top-10 right-10 w-20 h-20 border-t-2 border-r-2 border-blue-500/30"></div>
                    <div className="absolute bottom-10 left-10 w-20 h-20 border-b-2 border-l-2 border-blue-500/30"></div>
                    <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-blue-500/30"></div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PortalTransition;
