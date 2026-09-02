import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Trainings', path: '/trainings' },
    { name: 'Research', path: '/collaborations' },
    { name: 'Careers', path: '/careers' },
    { name: 'About', path: '/about' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`flex items-center justify-between rounded-full transition-all duration-500 ${scrolled
            ? 'bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
            : 'bg-transparent border-transparent px-2 py-2'
            }`}>

            {/* Logo → Home */}
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Novaliseo" className="h-[52px] object-contain" />
            </Link>

            {/* Navigation Pills (Desktop) */}
            <nav className="hidden md:flex items-center space-x-1 bg-white/5 rounded-full p-1 border border-white/5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="px-5 py-2 rounded-full text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="flex items-center">
              <Link
                to="/partner"
                className="hidden sm:flex items-center justify-center px-6 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.2)]"
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
