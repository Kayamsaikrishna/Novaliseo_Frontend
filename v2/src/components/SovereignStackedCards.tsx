"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SectorHeroText from "./SectorHeroText";

const cardData = [
    { id: 1, title: "Universal", subtitle: "Ecosystem" },
    { id: 2, title: "Strategic", subtitle: "Infrastructure" },
    { id: 3, title: "Private", subtitle: "Scalability" },
    { id: 4, title: "Isolated", subtitle: "Intelligence" },
    { id: 5, title: "Indigenous", subtitle: "Security" },
    { id: 6, title: "Native", subtitle: "Architecture" },
    { id: 7, title: "Autonomous", subtitle: "Operations" },
];

export default function SovereignStackedCards() {
    const [current, setCurrent] = useState(0);
    const [radius, setRadius] = useState(600);

    // Responsive 3D orbital radius
    useEffect(() => {
        const updateRadius = () => {
            if (window.innerWidth < 640) setRadius(300);
            else if (window.innerWidth < 1024) setRadius(450);
            else setRadius(600);
        };
        updateRadius();
        window.addEventListener("resize", updateRadius);
        return () => window.removeEventListener("resize", updateRadius);
    }, []);

    // Automated 4 second interval
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % cardData.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full bg-transparent flex flex-col items-center overflow-x-hidden pt-20">
            {/* Main Stage Title */}
            <div className="w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center flex-shrink-0 z-20">
                <SectorHeroText
                    text="STRATEGIC"
                    subtitle="Uncompromising Indigenous Intelligence"
                />
            </div>

            {/* Orbital Carousel Screen */}
            <div className="relative w-full min-h-[50vh] md:min-h-[75vh] flex items-center justify-center py-8 md:py-16 mb-24" style={{ perspective: "2000px" }}>

                {/* Carousel Container */}
                <div
                    className="relative w-full max-w-[1400px] h-[350px] sm:h-[450px] md:h-[65vh] max-h-[700px] flex items-center justify-center mt-8"
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {cardData.map((card, index) => {
                        let offset = index - current;
                        const total = cardData.length;

                        // Normalize offset to shortest path in circular array mapping
                        if (offset > total / 2) offset -= total;
                        if (offset < -total / 2) offset += total;

                        // Orbital Math calculations
                        const angle = offset * (360 / total);
                        const angleRad = angle * (Math.PI / 180);

                        const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
                        const radiusX = radius * (isMobile ? 1.1 : 1.5); 
                        const radiusZ = radius * 1.0;

                        const x = Math.sin(angleRad) * radiusX;
                        let z = Math.cos(angleRad) * radiusZ - radiusZ;

                        // Dynamic styling based on position in orbit
                        const absOffset = Math.abs(offset);
                        const opacity = Math.max(1 - absOffset * 0.3, 0.05);
                        const blur = absOffset * (isMobile ? 2 : 3);
                        const isCenter = absOffset === 0;

                        if (isCenter) {
                            z += isMobile ? 30 : 50; 
                        } else {
                            z -= absOffset * (isMobile ? 150 : 250); 
                        }

                        return (
                            <motion.div
                                key={card.id}
                                className={`absolute w-[92%] sm:w-[85%] md:w-[70%] aspect-[16/9] rounded-[2rem] md:rounded-[3rem] overflow-hidden cursor-pointer shadow-2xl flex items-center justify-center bg-zinc-900/40 backdrop-blur-xl border ${isCenter ? 'z-30' : 'z-10'}`}
                                animate={{
                                    x: x,
                                    z: z,
                                    rotateY: isMobile ? angle / 1.5 : angle,
                                    opacity: opacity,
                                    filter: `blur(${isCenter ? 0 : blur}px)`
                                }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                onClick={() => setCurrent(index)}
                                style={{
                                    borderColor: isCenter ? "rgba(6, 182, 212, 0.6)" : "rgba(255, 255, 255, 0.05)",
                                    boxShadow: isCenter ? "0 30px 60px -15px rgba(6, 182, 212, 0.4), 0 0 40px rgba(6, 182, 212, 0.2)" : "0 10px 30px -10px rgba(0,0,0,0.5)",
                                }}
                            >
                                {/* Text Content instead of image */}
                                <div className="text-center p-12">
                                    <motion.p 
                                        animate={{ opacity: isCenter ? 1 : 0.5 }}
                                        className="text-[10px] md:text-sm font-black uppercase tracking-[0.5em] text-cyan-400 mb-6"
                                    >
                                        // Sector Module 0{card.id}
                                    </motion.p>
                                    <h3 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none text-white mb-4">
                                        {card.title}
                                    </h3>
                                    <p className="text-3xl md:text-5xl font-light uppercase tracking-tight text-white/30 leading-none">
                                        {card.subtitle}
                                    </p>
                                </div>

                                {/* Click shield and extra darkness for side items not in focus */}
                                {!isCenter && (
                                    <div className="absolute inset-0 z-30 bg-black/40 hover:bg-black/20 transition-colors duration-300" />
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                {/* Ambient Base Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[40%] bg-cyan-500/10 blur-[150px] pointer-events-none z-0 rounded-full" />
            </div>
        </div>
    );
}
