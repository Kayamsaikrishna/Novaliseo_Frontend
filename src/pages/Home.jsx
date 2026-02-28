import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaRocket, FaCogs, FaChartLine, FaShieldAlt, FaBrain, FaIndustry, FaArrowRight, FaCheck, FaRobot, FaLightbulb, FaBolt, FaGlobeAsia, FaUsers, FaEye, FaMicrochip, FaSatellite, FaBars, FaTimes, FaSearch, FaCheckCircle } from 'react-icons/fa';
import { GiRadarSweep } from 'react-icons/gi';
import { MdSecurity } from 'react-icons/md';

import ParticleBackground from '../components/ParticleBackground';

const Home = () => {
  const [services] = useState([
    {
      id: '1',
      title: 'AI-Enhanced CAE',
      description: 'Computer Aided Engineering powered by artificial intelligence for faster simulations',
      icon: <FaCogs className="text-[#3b82f6]" />
    },
    {
      id: '2',
      title: 'Manufacturing Optimization',
      description: 'Smart manufacturing solutions with AI-driven automation and robotics integration',
      icon: <FaRobot className="text-[#3b82f6]" />
    },
    {
      id: '4',
      title: 'Predictive Maintenance',
      description: 'AI models predicting equipment failures 7-14 days in advance, reducing downtime.',
      icon: <FaBrain className="text-[#3b82f6]" />
    }
  ]);

  const [stats] = useState([
    { label: 'Team Members', value: '10', suffix: '+', icon: FaUsers },
    { label: 'Industries Served', value: '2', suffix: '+', icon: FaIndustry },
    { label: 'AI Projects', value: '2', suffix: '+', icon: FaRocket },
    { label: 'Just Getting Started', value: '', suffix: '', icon: FaBolt },
  ]);

  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [statsRef, statsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div className="relative">
      <ParticleBackground />

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
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
          className="absolute top-1/4 left-0 w-96 h-96 bg-[#3b82f6]/5 rounded-full blur-3xl"
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
          className="absolute top-3/4 right-0 w-80 h-80 bg-[#8b5cf6]/5 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            x: ['-50%', '50%'],
            y: ['0%', '30%']
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#06b6d4]/5 rounded-full blur-3xl"
        ></motion.div>
      </div>

      {/* Ambient Background Orbs */}
      <div className="fixed top-[10%] -left-[5%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="fixed bottom-[10%] -right-[5%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" data-testid="hero-section">
        {/* Full Bleed Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={require('../assets/shiva/home_hero_full_bg.png')}
            alt="Sovereign Intelligence Background"
            className="w-full h-full object-cover"
          />
          {/* Subtle overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-slate-50"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={heroInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-8 px-6 py-2 bg-white/60 backdrop-blur-md border border-blue-100 rounded-full shadow-sm"
            >
              <GiRadarSweep className="text-blue-600 animate-pulse" />
              <span className="text-blue-600 font-bold text-sm tracking-widest uppercase">Software-Defined Defence</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight" data-testid="hero-title">
              <span className="gradient-text">Pioneering Defence Intelligence</span>
              <br />
              <span className="text-slate-900">& Strategic Engineering</span>
            </h1>

            <p className="text-xl sm:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-medium" data-testid="hero-subtitle">
              Empowering India's Defence sector with tactical intelligence solutions, mission-critical simulations, and software-defined engineering. Built for the frontlines.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link
                to="/defence"
                data-testid="hero-cta-primary"
                className="btn-3d-glass px-10 py-5 text-white font-bold text-lg flex items-center gap-2 group shadow-xl shadow-blue-500/20"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Strategic Access <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                to="/projects"
                data-testid="hero-cta-secondary"
                className="px-10 py-5 bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-900 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-lg hover:-translate-y-1"
              >
                View Projects <FaRocket className="text-blue-500" />
              </Link>
            </div>

            {/* Key Features Centered */}
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { icon: <GiRadarSweep className="text-[#3b82f6]" />, title: 'Tactical Intelligence' },
                { icon: <FaMicrochip className="text-[#06b6d4]" />, title: 'Sovereign Edge' },
                { icon: <MdSecurity className="text-[#8b5cf6]" />, title: 'Mission Critical' }
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 px-6 py-4 bg-white/70 backdrop-blur-md rounded-2xl border border-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-2xl p-2 bg-blue-50/80 rounded-xl">
                    {feature.icon}
                  </div>
                  <span className="text-slate-900 font-bold text-sm tracking-wide">{feature.title}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>



      {/* Stats Section */}
      <section ref={statsRef} className="relative py-20 bg-gradient-to-b from-transparent to-slate-100/50" data-testid="stats-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass-effect p-8 rounded-2xl text-center hover:scale-105 transition-transform duration-300 border border-[#3b82f6]/30 hover:border-[#3b82f6]/50 hover:shadow-2xl hover:shadow-[#3b82f6]/20"
                data-testid={`stat - card - ${index} `}
              >
                <stat.icon className="text-4xl text-[#3b82f6] mx-auto mb-4" />
                <div className="text-5xl font-bold gradient-text mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <p className="text-slate-500 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="relative py-24" id="about" data-testid="about-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-6 px-6 py-2 bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 rounded-full">
                <span className="text-[#8b5cf6] font-medium text-sm">ABOUT US</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="gradient-text">Software-Defined Defence</span>
                <br />
                <span className="text-slate-900">Architecture</span>
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                NOVALISEO is a software-defined engineering firm primarily focused on augmenting the Defence sector with strategic AI. We specialize in transforming mission-critical operations through intelligent automation, tactical surveillance analytics, and advanced predictive modeling.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our mission is to lead India's transition to software-defined defence equipment, delivering cutting-edge AI solutions that ensure operational superiority and strategic autonomy.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all duration-300 hover:scale-105 shadow-lg shadow-slate-200"
              >
                Explore Our Solutions <FaArrowRight />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: <FaBrain className="text-3xl text-[#3b82f6]" />, title: 'AI-Powered', desc: 'Advanced machine learning models' },
                { icon: <FaIndustry className="text-3xl text-[#8b5cf6]" />, title: 'Industry Ready', desc: 'Production-grade solutions' },
                { icon: <FaChartLine className="text-3xl text-[#06b6d4]" />, title: 'Scalable', desc: 'Cloud-based infrastructure' },
                { icon: <FaShieldAlt className="text-3xl text-[#10b981]" />, title: 'Secure', desc: 'Enterprise-grade security' },
                { icon: <FaRocket className="text-3xl text-[#f59e0b]" />, title: 'Fast', desc: 'Lightning-fast processing' },
                { icon: <FaUsers className="text-3xl text-[#ec4899]" />, title: 'Support', desc: 'Dedicated team support' }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-slate-50 p-6 rounded-2xl border border-[#3b82f6]/10 hover:border-[#3b82f6]/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#3b82f6]/5"
                >
                  <div className="mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategic Division Showcase - NEW SECTION TO SHOWCASE DEFENCE ENTRY */}
      {/* Strategic Division Showcase - REFINED TO ELITE LIGHT THEME */}
      <section className="relative py-24 bg-white text-slate-900 overflow-hidden border-y border-slate-100 shadow-sm">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              background: [
                'radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)'
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
            className="absolute inset-0"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full">
                <GiRadarSweep className="text-blue-600 animate-pulse" />
                <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">Strategic Division</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-8 leading-tight">
                Pioneering the <br />
                <span className="text-blue-600">Autonomous Battlefield.</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
                Our specialized Defence Division focuses on sovereign AI solutions for contested theaters. From GNSS-denied navigation to tactical swarm intelligence, we build the software that defines modern national security.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  'Sovereign AI Stack (100% Indigenous)',
                  'Combat-Proven Autonomous Logic',
                  'Post-Quantum Secure Comms'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">
                      <FaCheck className="text-blue-600 text-[10px]" />
                    </div>
                    <span className="text-slate-700 font-semibold">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/defence"
                className="inline-flex items-center gap-3 px-10 py-5 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-all duration-300 hover:scale-105 shadow-xl shadow-slate-200"
              >
                Enter Strategic Portal <FaArrowRight />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="relative rounded-[3rem] overflow-hidden border border-blue-50/50 shadow-2xl bg-white shadow-blue-100/20 group">
                <img
                  src={require('../assets/shiva/Home background.png')}
                  alt="Sovereign Strategic Branding"
                  className="w-full h-auto opacity-100 group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section ref={servicesRef} className="relative py-24 bg-gradient-to-b from-slate-50 to-transparent" data-testid="services-preview-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              className="text-4xl sm:text-5xl font-bold mb-4"
            >
              <span className="gradient-text">Our Core Solutions</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-600 max-w-2xl mx-auto"
            >
              Comprehensive AI-powered solutions designed for modern engineering challenges
            </motion.p>
          </div>

          {services.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                  className="service-card p-8 rounded-2xl group border border-[#3b82f6]/10 hover:border-[#3b82f6]/30 hover:shadow-2xl hover:shadow-[#3b82f6]/10 transition-all duration-300 bg-gradient-to-b from-white to-slate-50"
                  data-testid={`service - card - ${index} `}
                >
                  <div className="relative mb-8 flex justify-center lg:justify-start">
                    <div className="relative p-6 rounded-2xl bg-white shadow-xl shadow-blue-50 border border-blue-50 group-hover:border-blue-200 transition-all duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl"></div>
                      <div className="relative text-5xl transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                        {service.icon}
                      </div>
                      <motion.div
                        animate={{ opacity: [0.2, 0.5, 0.2] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full blur-[2px]"
                      ></motion.div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#3b82f6] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    to={`/ services#${service.id} `}
                    className="inline-flex items-center gap-2 text-[#06b6d4] hover:text-[#3b82f6] font-semibold transition-colors"
                  >
                    Learn More <FaArrowRight />
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-400 py-12">
              Loading services...
            </div>
          )}

          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-100 border border-slate-200 text-slate-900 rounded-full font-semibold text-lg hover:bg-slate-200 transition-all duration-300 hover:scale-105"
            >
              View All Services <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* SHIVA COMPARATIVE EDGE - NEURAL VS LEGACY */}
      <SHIVAComparativeEdge />

      {/* CTA Section */}
      <section className="relative py-24" data-testid="cta-section">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative glass-effect p-12 rounded-3xl text-center overflow-hidden border border-[#3b82f6]/30"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6]/10 via-[#06b6d4]/10 to-[#8b5cf6]/10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                Join leading companies leveraging AI to achieve 99%+ accuracy, 40% efficiency gains, and 90% cost savings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  data-testid="cta-button"
                  className="inline-flex items-center gap-2 px-10 py-5 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-all duration-300 hover:scale-105 shadow-xl shadow-slate-200"
                >
                  Start Your AI Journey <FaRocket />
                </Link>
                <Link
                  to="/innovation-lab"
                  className="inline-flex items-center gap-2 px-10 py-5 bg-slate-100 border border-slate-200 text-slate-900 rounded-full font-bold text-lg hover:bg-slate-200 transition-all duration-300 hover:scale-105"
                >
                  Visit Innovation Lab
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const SHIVAComparativeEdge = () => {
  const data = [
    { feature: "Decision Cycle (OODA)", shiva: "Neural-Edge (Sub-ms)", legacy: "Remote-Cloud (12s+)", advantage: "100x Faster" },
    { feature: "GNSS Denial", shiva: "Full Mission Continuity", legacy: "Immediate Signal Loss", advantage: "Sovereign" },
    { feature: "Intelligence Control", shiva: "100% Indigenous IP", legacy: "Foreign Stack Dependency", advantage: "Secure" },
    { feature: "Deployment", shiva: "Hardware Agnostic", legacy: "Platform Specific", advantage: "Flexible" }
  ];

  return (
    <section className="py-16 md:py-32 bg-white relative overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-4 block">The Strategic Edge</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">How SHIVA Redefines Control.</h2>
        </div>

        <div className="max-w-5xl mx-auto w-full">
          <div className="bg-slate-50 rounded-3xl md:rounded-[3rem] overflow-hidden border border-slate-200 shadow-xl md:shadow-2xl">
            <div className="overflow-x-auto w-full">
              <table className="w-full text-left border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-4 md:p-8 font-black uppercase tracking-widest text-[10px] md:text-xs">Capability</th>
                    <th className="p-4 md:p-8 font-black uppercase tracking-widest text-[10px] md:text-xs bg-blue-600">SHIVA Platform</th>
                    <th className="p-4 md:p-8 font-black uppercase tracking-widest text-[10px] md:text-xs whitespace-nowrap">Legacy Systems</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, i) => (
                    <tr key={i} className="border-b border-slate-200 hover:bg-white transition-colors">
                      <td className="p-4 md:p-8 font-bold text-slate-900 text-sm md:text-base leading-snug">{row.feature}</td>
                      <td className="p-4 md:p-8 bg-blue-50/50">
                        <div className="flex items-center gap-2 md:gap-3">
                          <FaCheckCircle className="text-blue-600 flex-shrink-0" />
                          <span className="font-black text-blue-700 text-sm md:text-base leading-snug">{row.shiva}</span>
                        </div>
                        <span className="text-[10px] font-black uppercase text-blue-400 mt-1.5 block tracking-wider">{row.advantage}</span>
                      </td>
                      <td className="p-4 md:p-8 text-slate-500 font-medium text-sm md:text-base leading-snug">{row.legacy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;