import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Twitter, Instagram, Linkedin } from 'lucide-react';
import logo from '../assets/logo.png';
import Beams from './EtherealBeams';

export default function Footer() {
  const containerRef = useRef(null);
  const location = useLocation();
  const path = location.pathname;

  let theme = {
    bg: "bg-background",
    cardBg: "bg-white/[0.03] border-white/10 hover:border-white/20",
    accentText: "text-blue-400",
    hoverBg: "hover:bg-blue-500",
    glow: "drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
  };

  if (path === '/platforms' || path === '/projects' || path === '/partner' || path === '/about' || path === '/technology') {
    theme = {
      bg: "bg-transparent",
      cardBg: "bg-[#06b6d4]/[0.02] border-[#06b6d4]/20 hover:border-[#06b6d4]/40 shadow-[0_0_30px_rgba(6,182,212,0.05)]",
      accentText: "text-cyan-400",
      hoverBg: "hover:bg-cyan-500",
      glow: "drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]",
      hideBeams: true
    };
  } else if (path === '/solutions' || path === '/careers') {
    theme = {
      bg: "bg-transparent",
      cardBg: "bg-[#06b6d4]/[0.02] border-[#06b6d4]/20 hover:border-[#06b6d4]/40 shadow-[0_0_30px_rgba(6,182,212,0.05)]",
      accentText: "text-cyan-400",
      hoverBg: "hover:bg-cyan-500",
      glow: "drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]",
      hideBeams: true
    };
  }
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const opacity = useTransform(smoothScroll, [0, 1], [0.5, 1]);
  const y = useTransform(smoothScroll, [0, 1], [50, 0]);

  return (
    <footer ref={containerRef} className={`relative pt-20 pb-10 w-full ${theme.bg} z-20`}>
      {/* Dynamic Beams Background */}
      {!theme.hideBeams && (
        <div className="absolute inset-0 z-0 opacity-30 mix-blend-screen pointer-events-none" style={{ transform: 'rotate(180deg)' }}>
          <Beams speed={1.5} beamNumber={8} noiseIntensity={0} beamHeight={25} />
        </div>
      )}

      <motion.div
        style={{ opacity, y }}
        className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10"
      >
        {/* Main Footer Card */}
        <div className={`border rounded-[2.5rem] p-10 md:p-16 mb-10 backdrop-blur-xl transition-all ${theme.cardBg}`}>
          <div className="flex flex-col lg:flex-row justify-between items-start gap-16">

            {/* Left Section: Logo & Description */}
            <div className="max-w-md">
              <div className="flex items-center gap-4 mb-6">
                <img src={logo} alt="Novaliseo" className={`h-[60px] object-contain ${theme.glow}`} />
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Novaliseo Global Tech Pvt Ltd provides a set of reusable cognitive intelligence components and utilities to help you secure and automate contested environments efficiently.
              </p>
              
              <div className="mb-8">
                <p className="text-sm font-semibold text-white mb-2">For more information contact:</p>
                <a href="mailto:info@novaliseo.com" className={`text-sm ${theme.accentText} hover:underline transition-all`}>info@novaliseo.com</a>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-4">
                <a href="https://x.com/NOVALISEO" target="_blank" rel="noopener noreferrer" className={`p-2 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white ${theme.hoverBg} transition-all group`}>
                  <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://www.instagram.com/novaliseo/" target="_blank" rel="noopener noreferrer" className={`p-2 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white ${theme.hoverBg} transition-all group`}>
                  <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://www.linkedin.com/company/novaliseo" target="_blank" rel="noopener noreferrer" className={`p-2 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white ${theme.hoverBg} transition-all group`}>
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Section: Link Columns */}
            <div className="grid grid-cols-2 gap-12 md:gap-20 w-full lg:w-auto">
              <div>
                <h4 className={`${theme.accentText} font-bold mb-6 uppercase tracking-wider text-xs`}>Platform</h4>
                <ul className="space-y-4">
                  <li><a href="/solutions" className="text-slate-400 hover:text-white text-sm transition-colors">Solutions</a></li>
                  <li><a href="/platforms" className="text-slate-400 hover:text-white text-sm transition-colors">Platforms</a></li>
                </ul>
              </div>
              <div>
                <h4 className={`${theme.accentText} font-bold mb-6 uppercase tracking-wider text-xs`}>Company</h4>
                <ul className="space-y-4">
                  <li><a href="/about" className="text-slate-400 hover:text-white text-sm transition-colors">About</a></li>
                  <li><a href="/careers" className="text-slate-400 hover:text-white text-sm transition-colors">Careers</a></li>
                  <li><a href="/partner" className="text-slate-400 hover:text-white text-sm transition-colors">Partner with Us</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Novaliseo Global Tech Pvt Ltd. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
