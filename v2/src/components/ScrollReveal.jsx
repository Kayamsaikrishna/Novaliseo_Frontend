import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollRevealWord = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.1, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-2 lg:mr-4 inline-block">
      {children}
    </motion.span>
  );
};

const ScrollReveal = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 70%", "end 70%"]
  });

  const phrase = "Legacy systems force compromises. We engineer zero-trust autonomous platforms that thrive where clouds fail and signals die.";
  const words = phrase.split(" ");

  return (
    <section 
      ref={container} 
      className="py-32 md:py-64 bg-background relative"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <p className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight flex flex-wrap">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + (1 / words.length);
            return (
              <ScrollRevealWord key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </ScrollRevealWord>
            );
          })}
        </p>

        {/* Highlight Stats / Numbers revealed at end of scroll */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-32 border-t border-white/10 pt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-2">100%</div>
            <div className="text-slate-400 font-medium tracking-wide uppercase text-sm">Indigenous Architecture</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 mb-2">&lt; 1ms</div>
            <div className="text-slate-400 font-medium tracking-wide uppercase text-sm">Local Decision Cycle</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-purple-400 mb-2">Zero</div>
            <div className="text-slate-400 font-medium tracking-wide uppercase text-sm">External Dependencies</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScrollReveal;
