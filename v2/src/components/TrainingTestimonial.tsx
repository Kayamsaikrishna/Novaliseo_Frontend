"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";

const testimonials = [
  {
    quote: "Building physical autonomous drones and tuning flight controllers hands-on gave our engineering graduates immediate placement readiness in aerospace robotics.",
    author: "Dr. K. S. Rao",
    role: "Head of Robotics & Mechatronics",
    company: "Apex Institute of Technology",
  },
  {
    quote: "The hardware-in-the-loop training accelerated our engineering team's edge AI integration by several months. Outstanding practical depth.",
    author: "Rajesh Varma",
    role: "Avionics Systems Lead",
    company: "Aerospace Defense Labs",
  },
  {
    quote: "Transitioning from pure software to embedded autonomous hardware was seamless. The hands-on project labs were worth every single hour.",
    author: "Ananya Sharma",
    role: "Autonomous Systems Engineer",
    company: "Autonomy Robotics",
  },
  {
    quote: "Novaliseo helped us establish an advanced drone testing cage and modern curriculum that boosted our campus placement rates exponentially.",
    author: "Prof. Vikram N.",
    role: "Dean of Academic Programs",
    company: "National Institute of Science",
  },
];

export function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse position for magnetic effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  // Transform for parallax on the large number
  const numberX = useTransform(x, [-200, 200], [-20, 20]);
  const numberY = useTransform(y, [-200, 200], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    }
  };

  const goNext = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(goNext, 6500);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[activeIndex];

  return (
    <section className="relative flex items-center justify-center min-h-[90vh] py-20 sm:py-28 px-6 sm:px-10 lg:px-14 overflow-hidden select-none bg-gradient-to-b from-[#f1f5f9] via-[#f8fafc] to-[#e2e8f0]/60">
      
      {/* Background Soft Glow Accents */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-cyan-400/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-blue-500/5 blur-[160px] pointer-events-none" />

      <div ref={containerRef} className="relative w-full max-w-5xl mx-auto" onMouseMove={handleMouseMove}>
        
        {/* Oversized index number - positioned to bleed off left edge */}
        <motion.div
          className="absolute -left-8 sm:-left-16 top-1/2 -translate-y-1/2 text-[16rem] sm:text-[24rem] lg:text-[28rem] font-black text-slate-950/[0.035] select-none pointer-events-none leading-none tracking-tighter"
          style={{ x: numberX, y: numberY }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              {String(activeIndex + 1).padStart(2, "0")}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* Main content - asymmetric layout */}
        <div className="relative flex flex-col md:flex-row">
          
          {/* Left column - vertical text */}
          <div className="flex flex-row md:flex-col items-center justify-between md:justify-center pr-0 md:pr-14 lg:pr-16 pb-6 md:pb-0 border-b md:border-b-0 md:border-r border-slate-300/70">
            <motion.span
              className="text-xs font-mono text-slate-400 tracking-widest uppercase font-semibold"
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Testimonials
            </motion.span>

            {/* Vertical progress line */}
            <div className="relative w-28 md:w-px h-px md:h-32 bg-slate-300/80 mt-0 md:mt-8">
              <motion.div
                className="absolute top-0 left-0 h-full bg-slate-900 origin-top"
                animate={{
                  height: `${((activeIndex + 1) / testimonials.length) * 100}%`,
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>

          {/* Center - main content */}
          <div className="flex-1 pl-0 md:pl-14 lg:pl-16 pt-8 md:pt-0 py-6 md:py-12 text-left">
            
            {/* Company / Institution badge */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="mb-6 sm:mb-8"
              >
                <span className="inline-flex items-center gap-2 text-xs font-mono font-medium text-slate-700 bg-white/80 border border-slate-300/80 shadow-xs rounded-full px-3.5 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                  {current.company}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Quote with character reveal */}
            <div className="relative mb-10 sm:mb-12 min-h-[140px] sm:min-h-[160px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={activeIndex}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-slate-900 leading-[1.2] tracking-tight"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {current.quote.split(" ").map((word, i) => (
                    <motion.span
                      key={i}
                      className="inline-block mr-[0.3em]"
                      variants={{
                        hidden: { opacity: 0, y: 20, rotateX: 90 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          rotateX: 0,
                          transition: {
                            duration: 0.5,
                            delay: i * 0.04,
                            ease: [0.22, 1, 0.36, 1],
                          },
                        },
                        exit: {
                          opacity: 0,
                          y: -10,
                          transition: { duration: 0.2, delay: i * 0.02 },
                        },
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.blockquote>
              </AnimatePresence>
            </div>

            {/* Author row & Controls */}
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pt-6 border-t border-slate-200/90">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="flex items-center gap-4"
                >
                  {/* Animated line before name */}
                  <motion.div
                    className="w-8 h-px bg-slate-900"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{ originX: 0 }}
                  />
                  <div>
                    <p className="text-base sm:text-lg font-bold text-slate-950">{current.author}</p>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium">{current.role}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation buttons */}
              <div className="flex items-center gap-3.5">
                <motion.button
                  onClick={goPrev}
                  aria-label="Previous testimonial"
                  className="group relative w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-slate-300/90 hover:border-slate-900 bg-white/80 flex items-center justify-center overflow-hidden transition-colors shadow-xs"
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-slate-950"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="relative z-10 text-slate-800 group-hover:text-white transition-colors"
                  >
                    <path
                      d="M10 12L6 8L10 4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.button>

                <motion.button
                  onClick={goNext}
                  aria-label="Next testimonial"
                  className="group relative w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-slate-300/90 hover:border-slate-900 bg-white/80 flex items-center justify-center overflow-hidden transition-colors shadow-xs"
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-slate-950"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="relative z-10 text-slate-800 group-hover:text-white transition-colors"
                  >
                    <path
                      d="M6 4L10 8L6 12"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.button>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom ticker - subtle repeating company names */}
        <div className="absolute -bottom-16 sm:-bottom-20 left-0 right-0 overflow-hidden opacity-[0.06] pointer-events-none">
          <motion.div
            className="flex whitespace-nowrap text-5xl sm:text-6xl font-bold tracking-tight text-slate-950"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 24, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            {[...Array(10)].map((_, i) => (
              <span key={i} className="mx-8">
                {testimonials.map((t) => t.company).join(" • ")} •
              </span>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export const TrainingTestimonial = Testimonial;
