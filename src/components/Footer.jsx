import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';
import logoImg from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', path: '/#about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Innovation Lab', path: '/innovation-lab' },
    { name: 'Defence', path: '/defence' },
    { name: 'Industries', path: '/industries' },
    { name: 'Careers', path: '/careers' },
  ];

  const services = [
    { name: 'Intelligence-Enhanced CAE', path: '/services#1' },
    { name: 'Manufacturing Optimization', path: '/services#2' },
    { name: 'Quality Control', path: '/services#3' },
    { name: 'Predictive Maintenance', path: '/services#4' },
    { name: 'Document Intelligence', path: '/services#5' },
    { name: 'Custom Solutions', path: '/services#6' },
    { name: 'Industrial IoT', path: '/services#7' },
    { name: 'Digital Twins', path: '/services#8' },
    { name: 'Supply Chain', path: '/services#9' },
  ];

  return (
    <footer className="footer relative bg-white text-slate-600 border-t border-slate-200 overflow-hidden" data-testid="footer">
      {/* Animated Background Elements - Re-tinted for Light Theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: ['-100%', '100%'],
            y: ['0%', '20%']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            x: ['100%', '-100%'],
            y: ['0%', '-20%']
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="absolute top-3/4 right-0 w-80 h-80 bg-indigo-100/20 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 lg:col-span-2"
          >
            <div className="flex items-center">
              <div className="relative">
                <img
                  src={logoImg}
                  alt="NOVALISEO Logo"
                  className="h-14 w-auto object-contain"
                />
              </div>
            </div>
            <motion.p
              className="text-slate-500 text-sm leading-relaxed max-w-md"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Intelligence-Powered Engineering Suite - Made for India, Made in India. Transforming industries with intelligent automation and predictive solutions.
            </motion.p>
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <motion.a
                href="https://www.linkedin.com/company/novaliseo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-[#0a66c2] transition-colors"
                aria-label="LinkedIn"
                whileHover={{ y: -5, scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a
                href="https://x.com/NOVALISEO"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-[#0f172a] transition-colors"
                aria-label="Twitter"
                whileHover={{ y: -5, scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTwitter size={24} />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/novaliseo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-[#e1306c] transition-colors"
                aria-label="Instagram"
                whileHover={{ y: -5, scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <motion.h3
              className="text-slate-900 font-bold text-lg mb-6 tracking-tight"
            >
              Quick Links
            </motion.h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={`quick-${link.path}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link to={link.path} className="text-slate-500 hover:text-blue-600 transition-colors text-sm flex items-center gap-2 font-medium">
                    <div className="w-1.5 h-1.5 bg-slate-200 rounded-full group-hover:bg-blue-400"></div>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <motion.h3
              className="text-slate-900 font-bold text-lg mb-6 tracking-tight"
            >
              Services
            </motion.h3>
            <ul className="space-y-3">
              {services.slice(0, 5).map((service, index) => (
                <motion.li
                  key={`service-${service.path}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link to={service.path} className="text-slate-500 hover:text-blue-600 transition-colors text-sm flex items-center gap-2 font-medium">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    {service.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <motion.h3
              className="text-slate-900 font-bold text-lg mb-6 tracking-tight"
            >
              Contact Us
            </motion.h3>
            <ul className="space-y-4">
              <motion.li
                className="flex items-start space-x-3 text-slate-500 text-sm font-medium"
              >
                <FaMapMarkerAlt className="text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-slate-900">Bengaluru, KA, India</div>
                  <a
                    href="https://www.google.com/maps/place/Bengaluru,+Karnataka,+India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-xs mt-1 inline-block"
                  >
                    View on Map
                  </a>
                </div>
              </motion.li>
              <motion.li
                className="flex items-center space-x-3 text-slate-500 text-sm font-medium"
              >
                <FaPhone className="text-blue-500 flex-shrink-0" />
                <a href="tel:+918217589409" className="hover:text-blue-600 transition-colors">
                  +91 8217589409
                </a>
              </motion.li>
              <motion.li
                className="flex items-center space-x-3 text-slate-500 text-sm font-medium"
              >
                <FaEnvelope className="text-blue-500 flex-shrink-0" />
                <a href="mailto:info@novaliseo.com" className="hover:text-blue-600 transition-colors">
                  info@novaliseo.com
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-400 text-sm font-medium">
            © {currentYear} NOVALISEO. All rights reserved.
          </p>
          <div className="flex space-x-8 text-sm font-semibold">
            <Link to="/privacy" className="text-slate-400 hover:text-slate-900 transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-slate-400 hover:text-slate-900 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>

      {/* Subtle Glow Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-50"></div>
    </footer>
  );
};

export default Footer;