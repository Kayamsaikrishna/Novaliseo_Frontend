import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaRocket } from 'react-icons/fa';
import logoImg from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if scrolling up or down
      const isScrollingUp = currentScrollY < prevScrollY;
      const isAtTop = currentScrollY < 10;

      // Show navbar if scrolling up or at the very top
      // Hide if scrolling down and not at the top
      if (isAtTop || isScrollingUp) {
        setVisible(true);
      } else if (currentScrollY > 100) {
        setVisible(false);
      }

      setScrolled(currentScrollY > 50);
      prevScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Projects', path: '/projects' },
    { name: 'Innovation Lab', path: '/innovation-lab' },
    { name: 'Autonomous Systems', path: '/autonomous-systems' },
    { name: 'Blog', path: '/blog' },
    { name: 'Careers', path: '/careers' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className={`navbar navbar-v3 fixed top-0 left-0 right-0 z-50 ${scrolled ? 'scrolled' : ''
        }`}
    >
      <div className="glint-overlay"></div>
      <div className="w-full px-2 sm:px-4 lg:px-6 xl:px-8 relative z-10 max-w-[100vw] overflow-x-hidden">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0 h-full py-2 pr-2 sm:pr-4 lg:pr-6" data-testid="navbar-logo">
            <img
              src={logoImg}
              alt="NOVALISEO Logo"
              className="h-12 md:h-16 w-auto object-contain filter brightness-110 contrast-125 drop-shadow-[0_0_8px_rgba(59,130,246,0.15)]"
            />
          </Link>

          {/* Desktop Menu - Pushed to the right with mandatory Safe Zone */}
          <div className="hidden lg:flex items-center justify-end ml-auto pr-4 lg:pr-8 xl:pr-12 overflow-hidden">
            <div className="flex items-center gap-0.5 lg:gap-1 xl:gap-2 justify-end w-full">
              {navItems.map((item, index) => (
                <motion.div
                  key={`desktop-${item.path}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ y: -2 }}
                  className="flex-shrink"
                >
                  <Link
                    to={item.path}
                    data-testid={`nav-link-${item.name.toLowerCase().replace(' ', '-')}`}
                    className={`glass-interaction px-1.5 lg:px-2 xl:px-3 py-1.5 xl:py-2 rounded-full text-[9px] lg:text-[10px] xl:text-[11px] font-bold transition-all duration-300 relative whitespace-nowrap group tracking-tighter lg:tracking-normal overflow-hidden text-ellipsis ${location.pathname === item.path
                      ? 'text-blue-600 bg-blue-50/10'
                      : 'text-slate-900 hover:text-blue-600'
                      }`}
                  >
                    {/* Standard Navigation Indicator */}
                    {location.pathname === item.path && item.name !== 'Autonomous Systems' && (
                      <motion.div
                        layoutId="navIndicator"
                        className="absolute inset-0 bg-blue-50/50 rounded-full border border-blue-100/50 -z-10"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}

                    {/* Elite HUD Corners for Autonomous Systems */}
                    {item.name === 'Autonomous Systems' && (
                      <>
                        <motion.div
                          className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-blue-400 group-hover:border-blue-600"
                          initial={false}
                          animate={{
                            opacity: location.pathname === item.path ? 1 : 0,
                            x: location.pathname === item.path ? 0 : -4,
                            y: location.pathname === item.path ? 0 : -4
                          }}
                        />
                        <motion.div
                          className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-blue-400 group-hover:border-blue-600"
                          initial={false}
                          animate={{
                            opacity: location.pathname === item.path ? 1 : 0,
                            x: location.pathname === item.path ? 0 : 4,
                            y: location.pathname === item.path ? 0 : -4
                          }}
                        />
                        <motion.div
                          className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-blue-400 group-hover:border-blue-600"
                          initial={false}
                          animate={{
                            opacity: location.pathname === item.path ? 1 : 0,
                            x: location.pathname === item.path ? 0 : -4,
                            y: location.pathname === item.path ? 0 : 4
                          }}
                        />
                        <motion.div
                          className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-blue-400 group-hover:border-blue-600"
                          initial={false}
                          animate={{
                            opacity: location.pathname === item.path ? 1 : 0,
                            x: location.pathname === item.path ? 0 : 4,
                            y: location.pathname === item.path ? 0 : 4
                          }}
                        />
                        {/* Subtle Radial Pulse for Autonomous Software Based */}
                        {location.pathname === item.path && (
                          <motion.div
                            animate={{ opacity: [0.1, 0.2, 0.1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute inset-0 bg-blue-400/10 blur-md rounded-full -z-10"
                          />
                        )}
                      </>
                    )}

                    <span className="relative z-10 px-2 uppercase tracking-wider">{item.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>


          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            data-testid="mobile-menu-toggle"
            className="lg:hidden p-2 text-slate-600 glass-interaction rounded-lg"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            data-testid="mobile-menu"
            className="lg:hidden w-full bg-white/95 backdrop-blur-xl absolute top-20 left-0 shadow-lg border-b border-slate-100/50"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <motion.div
                  key={`mobile-${item.path}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    data-testid={`mobile-nav-link-${item.name.toLowerCase().replace(' ', '-')}`}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${location.pathname === item.path
                      ? 'text-[#3b82f6] bg-[#3b82f6]/10'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                      }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>

          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
