import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrolled(currentScrollY > 20);

      if (isMenuOpen) {
        setVisible(true);
        lastScrollY = currentScrollY;
        return;
      }

      // Hide navbar when viewing the full-screen 3D Build With Us stage
      const buildSection = document.getElementById('build-with-us');
      if (buildSection) {
        const rect = buildSection.getBoundingClientRect();
        if (rect.top <= 90 && rect.bottom >= window.innerHeight * 0.4) {
          setVisible(false);
          lastScrollY = currentScrollY;
          return;
        }
      }

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setVisible(false);
      } else if (currentScrollY < lastScrollY || currentScrollY <= 20) {
        setVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Trainings', path: '/trainings' },
    { name: 'Research', path: '/collaborations' },
    { name: 'Careers', path: '/careers' },
    { name: 'About', path: '/about' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: visible ? 0 : -120 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-3 sm:py-4' : 'py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`flex items-center justify-between rounded-full transition-all duration-500 ${scrolled
            ? 'bg-white/90 backdrop-blur-xl border border-slate-200 px-6 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.08)] text-slate-900'
            : 'bg-white/50 backdrop-blur-md border border-white/60 px-5 py-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] text-slate-900'
            }`}>

            {/* Logo → Home */}
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Novaliseo" className="h-[46px] object-contain" />
            </Link>

            {/* Navigation Pills (Desktop) */}
            <nav className="hidden md:flex items-center space-x-1 bg-white/60 rounded-full p-1 border border-slate-200/60 shadow-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="px-4 py-1.5 rounded-full text-sm font-medium text-slate-700 hover:text-slate-950 hover:bg-white transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="flex items-center">
              <Link
                to="/partner"
                className="hidden sm:flex items-center justify-center px-5 py-2.5 bg-slate-950 hover:bg-slate-800 text-white text-xs font-semibold uppercase tracking-wider rounded-full transition-all shadow-md hover:scale-[1.02] active:scale-[0.98]"
              >
                Partner With Us
              </Link>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden ml-4 p-2 text-white bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-colors"
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.95, filter: "blur(20px)" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 z-[40] bg-[#020617]/95 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center p-8"
          >
            <nav className="flex flex-col items-center space-y-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-4xl font-bold text-white hover:text-cyan-400 transition-colors tracking-tight"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="pt-8"
              >
                <Link
                  to="/partner"
                  onClick={() => setIsMenuOpen(false)}
                  className="px-10 py-4 bg-white text-black text-lg font-black rounded-full shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                >
                  Partner With Us
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
