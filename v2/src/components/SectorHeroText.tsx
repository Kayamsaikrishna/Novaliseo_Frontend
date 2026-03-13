"use client";
import { motion } from "framer-motion";

interface HeroTextProps {
  text: string;
  subtitle?: string;
  className?: string;
}

export default function SectorHeroText({
  text,
  subtitle,
  className = "",
}: HeroTextProps) {
  const characters = text.split("");
  const subtitleWords = subtitle ? subtitle.split(" ") : [];

  return (
    <div className={`relative flex flex-col items-center justify-center w-full bg-transparent ${className}`}>
      {/* Main Text Container */}
      <div className="relative z-10 w-full px-4 flex flex-col items-center select-none">
        
        {/* Cinematic Slice Container */}
        <div className="flex flex-nowrap justify-center items-center w-full whitespace-nowrap overflow-visible">
            {characters.map((char, i) => (
              <div
                key={i}
                className="relative px-[0.1vw] overflow-visible group"
              >
                {/* Background Shadow/Stroke Layer */}
                <motion.span
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 + 0.3, duration: 0.8 }}
                  className="text-[clamp(2rem,13vw,11rem)] leading-none font-[900] text-transparent tracking-tighter"
                  style={{ WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>

                {/* Top Slice Layer (Orange/Saffron) */}
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: ["-100%", "0%", "0%", "100%"], opacity: [0, 1, 1, 0] }}
                  transition={{
                    duration: 3.5,
                    times: [0, 0.15, 0.85, 1],
                    delay: i * 0.04,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                  className="absolute inset-0 text-[clamp(2rem,13vw,11rem)] leading-none font-[900] text-[#FF9933] z-10 pointer-events-none drop-shadow-[0_0_15px_rgba(255,153,51,0.5)]"
                  style={{ clipPath: "polygon(0 0, 100% 0, 100% 35%, 0 35%)" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>

                {/* Middle Slice Layer (White) */}
                <motion.span
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{ x: ["100%", "0%", "0%", "-100%"], opacity: [0, 1, 1, 0] }}
                  transition={{
                    duration: 3.5,
                    times: [0, 0.15, 0.85, 1],
                    delay: i * 0.04 + 0.1,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                  className="absolute inset-0 text-[clamp(2rem,13vw,11rem)] leading-none font-[900] text-white z-10 pointer-events-none drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                  style={{
                    clipPath: "polygon(0 35%, 100% 35%, 100% 65%, 0 65%)",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>

                {/* Bottom Slice Layer (Green) */}
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: ["-100%", "0%", "0%", "100%"], opacity: [0, 1, 1, 0] }}
                  transition={{
                    duration: 3.5,
                    times: [0, 0.15, 0.85, 1],
                    delay: i * 0.04 + 0.2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                  className="absolute inset-0 text-[clamp(2rem,13vw,11rem)] leading-none font-[900] text-[#128807] z-10 pointer-events-none drop-shadow-[0_0_15px_rgba(18,136,7,0.5)]"
                  style={{
                    clipPath: "polygon(0 65%, 100% 65%, 100% 100%, 0 100%)",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              </div>
            ))}
        </div>

        {/* Dynamic Background Glow */}
        <div className="absolute inset-0 z-0 pointer-events-none blur-[120px] opacity-10 bg-gradient-to-b from-[#FF9933] via-white to-[#128807] w-full h-full" />

        {/* Staggered Subtitle Reveal */}
        {subtitle && (
          <div className="mt-6 md:mt-10 overflow-hidden flex flex-wrap justify-center gap-x-3">
            {subtitleWords.map((word, wordIndex) => (
              <div key={wordIndex} className="flex overflow-hidden">
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    initial={{ y: "100%", opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: wordIndex * 0.1 + charIndex * 0.03 + 1,
                      duration: 0.5,
                      ease: "easeOut"
                    }}
                    className="inline-block text-sm sm:text-lg md:text-xl lg:text-2xl text-slate-300 font-mono tracking-[0.3em] uppercase"
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="inline-block w-2" />
              </div>
            ))}
          </div>
        )}

        {/* Ambient Tech Line */}
        <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5, duration: 1 }}
            className="w-24 md:w-48 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent mt-8"
        />
      </div>
    </div>
  );
}

