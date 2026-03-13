"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Beams from "./EtherealBeams";
import RotatingEarth from "./RotatingEarth";

const NOVALISEO_PHRASES = [
  "SOVEREIGN INDIA HUB",
  "UNIVERSAL PRIVATISED",
  "DECENTRALIZED INTELLIGENCE",
  "INDIGENOUS NUCLEUS",
];

function CornerFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative p-6 overflow-hidden bg-gradient-to-br from-white/[0.08] to-transparent backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.8)] rounded-2xl ${className}`}>
      {/* Glossy Reflection Overlay */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      
      {/* Corner Brackets */}
      <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-cyan-500/60" />
      <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-cyan-500/60" />
      <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-cyan-500/60" />
      <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-cyan-500/60" />
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

function LiquidBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-80 mix-blend-screen">
      <Beams />
    </div>
  );
}

export default function IntelligenceSection() {
  const [activePhrase, setActivePhrase] = useState(0);

  // Rotate phrases
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhrase((prev) => (prev + 1) % NOVALISEO_PHRASES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[100vh] w-full bg-[#020617] overflow-hidden flex flex-col items-center justify-center">
      <LiquidBackground />

      {/* Top Atmospheric Blend from previous section */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#020617] via-transparent to-transparent z-20 pointer-events-none" />

      {/* D3 Globe Layer */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <RotatingEarth width={1200} height={1200} className="w-full h-full opacity-100" />
      </div>

      {/* Glassmorphic Floating Overlays */}
      <div className="absolute z-30 w-full h-full flex flex-col items-center justify-center pointer-events-none">
        
        {/* Main Central Cinematic Title */}
        <div className="absolute top-[12%] sm:top-[15%] md:top-[18%] flex flex-col items-center w-full text-center">
            <div className="h-[80px] sm:h-[100px] md:h-[120px] flex justify-center items-center">
                <AnimatePresence mode="wait">
                    <motion.h2 
                        key={activePhrase}
                        initial={{ opacity: 0, y: 15, filter: "blur(12px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -15, filter: "blur(12px)" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-[9vw] sm:text-[7vw] md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-cyan-100 to-cyan-600 max-w-[95vw] leading-tight"
                    >
                        {NOVALISEO_PHRASES[activePhrase]}
                    </motion.h2>
                </AnimatePresence>
            </div>
        </div>

        {/* Decorative Data Card - Left */}
        <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="absolute left-4 sm:left-6 md:left-12 lg:left-20 bottom-[15%] sm:top-1/2 sm:-translate-y-1/2 scale-75 sm:scale-100 origin-bottom-left sm:origin-center pointer-events-auto"
        >
          <CornerFrame className="max-w-[200px] sm:max-w-[240px] md:max-w-[280px]">
            <div className="text-cyan-400 font-mono text-[9px] sm:text-[10px] tracking-[0.2em] mb-2 uppercase">Core System Status</div>
            <div className="text-white/70 font-mono text-[10px] sm:text-xs leading-loose">
              DEPLOYMENT: FULL INDIGENOUS<br/>
              INFRASTRUCTURE: SOVEREIGN<br/>
              NETWORK INTEGRITY: OPTIMAL
            </div>
          </CornerFrame>
        </motion.div>

        {/* Decorative Data Card - Right */}
        <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="absolute right-4 sm:right-6 md:right-12 lg:right-20 bottom-[5%] sm:top-[60%] sm:-translate-y-1/2 scale-75 sm:scale-100 origin-bottom-right sm:origin-center pointer-events-auto"
        >
          <CornerFrame className="max-w-[200px] sm:max-w-[240px] md:max-w-[280px]">
            <div className="text-emerald-400 font-mono text-[9px] sm:text-[10px] tracking-[0.2em] mb-2 uppercase text-right">Security Protocol</div>
            <div className="text-white/70 font-mono text-[10px] sm:text-xs leading-loose text-right">
              DATA CONTINUITY: ACTIVE<br/>
              DEPENDENCIES: NONE (INTERNAL)<br/>
              STATUS: IMMUTABLE
            </div>
          </CornerFrame>
        </motion.div>
      </div>

      {/* Bottom atmospheric blend - Seamless to next component */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#020617] to-transparent z-20 pointer-events-none" />
    </section>
  );
}
