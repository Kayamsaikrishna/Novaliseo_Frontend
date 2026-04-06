"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SectorHeroText from "./SectorHeroText";

const slides = [
    { img: "/images/sectors/The Sectoral Ecosystem.jpg" },
    { img: "/images/sectors/Native Infrastructure and Sectoral Intelligence.jpg" },
    { img: "/images/sectors/Defence & Aerospace.jpg" },
    { img: "/images/sectors/Healthcare and Biotech.jpg" },
    { img: "/images/sectors/Finance & Fintech.jpg" },
    { img: "/images/sectors/Smart Cities & IOT.jpg" },
    { img: "/images/sectors/Agriculture & Agritech.jpg" },
    { img: "/images/sectors/Education & Edtech.jpg" },
];

export default function SectorSlideshow() {
    const [current, setCurrent] = useState(0);

    // Automated 4 second interval
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 4000);

        return () => clearInterval(timer);
    }, []);

    const getPosition = (index: number) => {
        const diff = (index - current + slides.length) % slides.length;
        if (diff === 0) return "center";
        if (diff === 1) return "right";
        if (diff === slides.length - 1) return "left";
        return "hidden";
    };

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    const variants = {
        center: { 
            x: "0%", 
            scale: 1, 
            opacity: 1, 
            zIndex: 20, 
            filter: "blur(0px)",
            rotateY: 0
        },
        right: { 
            x: isMobile ? "45%" : "60%", 
            scale: isMobile ? 0.7 : 0.8, 
            opacity: 0.5, 
            zIndex: 10, 
            filter: "blur(8px)",
            rotateY: -25
        },
        left: { 
            x: isMobile ? "-45%" : "-60%", 
            scale: isMobile ? 0.7 : 0.8, 
            opacity: 0.5, 
            zIndex: 10, 
            filter: "blur(8px)",
            rotateY: 25
        },
        hidden: { 
            x: "0%", 
            scale: 0.5, 
            opacity: 0, 
            zIndex: 0, 
            filter: "blur(20px)",
            rotateY: 0
        },
    };

    return (
        <div className="relative w-full bg-transparent flex flex-col items-center overflow-x-hidden pt-20">

            {/* Separate Screen for the Animated Title */}
            <div className="w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center flex-shrink-0 z-20">
                <SectorHeroText 
                    text="SECTORS" 
                    subtitle="Indigenous Intelligence Across Domains" 
                />
            </div>

            {/* Slideshow Screen (Perspective Carousel) */}
            <div className="relative w-full min-h-[50vh] md:min-h-[75vh] flex items-center justify-center py-8 md:py-16 mb-24" style={{ perspective: "1500px" }}>
                
                {/* Carousel Container */}
                <div className="relative w-full max-w-[1400px] h-[350px] sm:h-[450px] md:h-[65vh] max-h-[700px] flex items-center justify-center mt-8">
                    
                    {slides.map((slide, index) => {
                        const position = getPosition(index);
                        return (
                            <motion.div
                                key={index}
                                initial="hidden"
                                animate={position}
                                variants={variants}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                onClick={() => setCurrent(index)}
                                className="absolute w-[95%] sm:w-[85%] md:w-[75%] aspect-[16/9] rounded-[2rem] md:rounded-[3rem] overflow-hidden cursor-pointer shadow-2xl bg-[#eef1f5] dark:bg-zinc-900 border"
                                style={{
                                    borderColor: position === "center" ? "rgba(6, 182, 212, 0.4)" : "rgba(255, 255, 255, 0.05)",
                                    boxShadow: position === "center" ? "0 30px 60px -15px rgba(6, 182, 212, 0.4), 0 0 40px rgba(6, 182, 212, 0.2)" : "0 10px 30px -10px rgba(0,0,0,0.5)"
                                }}
                            >
                                {/* The Image inside the curved container (bg-contain ensures absolute NO cutting) */}
                                <div 
                                    className="w-[calc(100%-2rem)] h-[calc(100%-2rem)] absolute top-4 left-4 md:w-[calc(100%-4rem)] md:h-[calc(100%-4rem)] md:top-8 md:left-8 bg-contain bg-center bg-no-repeat transition-transform duration-700"
                                    style={{ backgroundImage: `url('${slide.img}')` }}
                                />
                                
                                {/* Dark vignette overlay for cinematic presentation */}
                                <div className="absolute inset-0 z-20 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60 pointer-events-none" />
                                
                                {/* Click shield for side items */}
                                {position !== "center" && (
                                    <div className="absolute inset-0 z-30 bg-black/20 hover:bg-black/10 transition-colors duration-300" />
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                {/* Ambient Base Glow behind everything */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[40%] bg-cyan-500/10 blur-[150px] pointer-events-none z-0 rounded-full" />
            </div>
            
        </div>
    );
}
