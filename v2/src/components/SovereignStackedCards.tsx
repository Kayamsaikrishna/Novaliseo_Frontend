"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SectorHeroText from "./SectorHeroText";

const cardData = [
    { id: 1, img: "/images/Sovereign/The Sovereign Ecosystem.jpg" },
    { id: 2, img: "/images/Sovereign/Sovereign Infrastructure.jpg" },
    { id: 3, img: "/images/Sovereign/Privatised Scalability.jpg" },
    { id: 4, img: "/images/Sovereign/Private Intelligence.jpg" },
    { id: 5, img: "/images/Sovereign/Indigenous Security.jpg" },
    { id: 6, img: "/images/Sovereign/Indigenous Ecosystem.jpg" },
    { id: 7, img: "/images/Sovereign/Autonomous Operations.jpeg" },
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
            {/* Separate Screen for the Animated Title */}
            <div className="w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center flex-shrink-0 z-20">
                <SectorHeroText
                    text="SOVEREIGN"
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

                        // Translate over physical space to create an elliptical orbit
                        // Translate over physical space to create an elliptical orbit
                        const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
                        const radiusX = radius * (isMobile ? 1.1 : 1.5); // Narrower horizontal on mobile
                        const radiusZ = radius * 1.0;

                        const x = Math.sin(angleRad) * radiusX;
                        let z = Math.cos(angleRad) * radiusZ - radiusZ;

                        // Dynamic styling based on position in orbit
                        const absOffset = Math.abs(offset);
                        const opacity = Math.max(1 - absOffset * 0.3, 0.05);
                        const blur = absOffset * (isMobile ? 2 : 3);
                        const isCenter = absOffset === 0;

                        // Explicitly separate the physical planes to prevent piercing
                        if (isCenter) {
                            z += isMobile ? 30 : 50; 
                        } else {
                            z -= absOffset * (isMobile ? 150 : 250); // Less aggressive depth on mobile
                        }

                        return (
                            <motion.div
                                key={card.id}
                                className={`absolute w-[92%] sm:w-[85%] md:w-[70%] aspect-[16/9] rounded-[2rem] md:rounded-[3rem] overflow-hidden cursor-pointer shadow-2xl bg-[#eef1f5] dark:bg-zinc-900 border ${isCenter ? 'z-30' : 'z-10'}`}
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
                                {/* The Image fully contained without cropping */}
                                <div
                                    className="w-[calc(100%-2rem)] h-[calc(100%-2rem)] absolute top-4 left-4 md:w-[calc(100%-4rem)] md:h-[calc(100%-4rem)] md:top-8 md:left-8 bg-contain bg-center bg-no-repeat transition-transform duration-700"
                                    style={{ backgroundImage: `url('${card.img}')` }}
                                />

                                {/* Dark vignette over everything */}
                                <div className="absolute inset-0 z-20 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent opacity-70 pointer-events-none" />

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
