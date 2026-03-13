import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import img1 from '../assets/news_bg1.png';
import img2 from '../assets/news_bg2.jpg';
import img3 from '../assets/news_bg3.png';

export default function Newsletter() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const opacity = useTransform(smoothScroll, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(smoothScroll, [0, 0.2], [0.95, 1]);
  const y = useTransform(smoothScroll, [0, 0.2], [100, 0]);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const cardPositions = [
    { zIndex: 30, scale: 1, x: 0, y: 0, rotate: 0, opacity: 1 },
    { zIndex: 20, scale: 0.95, x: 25, y: -25, rotate: 6, opacity: 0.8 },
    { zIndex: 10, scale: 0.9, x: 50, y: -50, rotate: 12, opacity: 0.6 }
  ];

  const getPosition = (index) => {
    const positionIndex = (index - activeIndex + 3) % 3;
    return cardPositions[positionIndex];
  };

  return (
    <section ref={containerRef} className="relative pt-0 pb-24 md:pb-32 overflow-hidden bg-background z-20">
      <motion.div 
        style={{ opacity, scale, y }}
        className="max-w-7xl mx-auto px-6 lg:px-8"
      >
        <div className="bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-16 backdrop-blur-sm">
          
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay ahead with Novaliseo
            </h2>
            <p className="text-lg text-slate-400 mb-10">
              Join thousands of professionals who trust Novaliseo for innovative strategic software and next-generation architecture
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-6 py-4 rounded-xl bg-white text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium"
                required
              />
              <button 
                type="submit" 
                className="px-8 py-4 rounded-xl bg-slate-900 border border-slate-700 text-white font-bold hover:bg-slate-800 transition-all shadow-xl hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] whitespace-nowrap"
              >
                Subscribe Now
              </button>
            </form>
          </div>

          <div className="relative z-10 w-full max-w-[320px] h-[320px] sm:max-w-md sm:h-[400px] hidden md:block mt-12 lg:mt-0 mr-12">
            <motion.div animate={getPosition(2)} transition={{ duration: 0.8, ease: "easeInOut" }} className="absolute inset-0 bg-white/10 p-2 rounded-3xl shadow-2xl border border-white/5">
               <img src={img3} alt="Background 3" className="w-full h-full object-cover rounded-2xl mix-blend-screen" />
            </motion.div>
            <motion.div animate={getPosition(1)} transition={{ duration: 0.8, ease: "easeInOut" }} className="absolute inset-0 bg-white/10 p-2 rounded-3xl shadow-2xl border border-white/10">
               <img src={img2} alt="Background 2" className="w-full h-full object-cover rounded-2xl mix-blend-screen" />
            </motion.div>
            <motion.div animate={getPosition(0)} transition={{ duration: 0.8, ease: "easeInOut" }} className="absolute inset-0 bg-white/20 p-2 rounded-3xl shadow-2xl border border-white/20">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 rounded-2xl pointer-events-none" />
              <img src={img1} alt="Main Background" className="w-full h-full object-cover rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
