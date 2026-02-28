import React from 'react';
import { motion } from 'framer-motion';

const HolographicCard = ({ children, className = '', hoverEffect = true }) => {
    return (
        <motion.div
            whileHover={hoverEffect ? { scale: 1.02, translateY: -5 } : {}}
            className={`relative overflow-hidden bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-xl transition-all duration-300 group ${className}`}
            style={{
                boxShadow: '0 0 20px rgba(0, 243, 255, 0.05)',
            }}
        >
            {/* Scanning Laser Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Border Glow */}
            <div className="absolute inset-0 border border-transparent group-hover:border-cyan-500/50 rounded-xl transition-colors duration-300 pointer-events-none" />

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyan-500/0 group-hover:border-cyan-500/100 transition-all duration-300" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-cyan-500/0 group-hover:border-cyan-500/100 transition-all duration-300" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-cyan-500/0 group-hover:border-cyan-500/100 transition-all duration-300" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyan-500/0 group-hover:border-cyan-500/100 transition-all duration-300" />

            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
};

export default HolographicCard;
