import React, { useState } from 'react';
import useSEO from '../hooks/useSEO';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCog, FaRobot, FaSearch, FaBrain, FaFileAlt, FaTools, FaChartLine, FaCloud, FaNetworkWired, FaShieldAlt, FaMicrochip } from 'react-icons/fa';
import { GiRadarSweep } from 'react-icons/gi';
import { MdSecurity } from 'react-icons/md';

const Services = () => {
  useSEO({
    title: 'Our Solutions | Defence Intelligence & AI Engineering Services',
    description: 'Explore NOVALISEO\'s strategic solutions: from tactical intelligence edge infrastructure to AI manufacturing optimization and predictive aerospace maintenance.',
  });
  const getDefaultServices = () => [
    {
      id: 'defence-1',
      title: 'Tactical Intelligence & Defence Solutions',
      description: 'Mission-critical software for tactical intelligence, threat detection, and autonomous systems.',
      long_description: 'Expanding the boundaries of software-defined defence. Our tactical intelligence solutions provide real-time battlefield intelligence, autonomous UAV navigation, and predictive threat analysis for strategic superiority.',
      image_url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b',
      icon: 'GiRadarSweep',
      benefits: ['Real-time tactical intelligence', 'Strategic autonomous navigation', 'Precision threat detection', 'Mission-critical reliability'],
      features: ['UAV autonomy', 'Battlefield analytics', 'Secure edge computing', 'Mission simulation']
    },
    {
      id: '1',
      title: 'Intelligence-Enhanced CAE',
      description: 'Computer Aided Engineering powered by intelligence for faster simulations',
      long_description: 'Our intelligence-enhanced CAE solutions revolutionize traditional engineering design and simulation processes. By leveraging advanced machine learning algorithms, we enable engineers to perform complex simulations 10x faster with higher accuracy.',
      image_url: 'https://bulletproofautomotive.com/wp-content/uploads/2023/10/adro-tesla-model-3-prepreg-body-kit-cfd-1_1799x1264-1000x1000.jpg',
      icon: 'FaCog',
      benefits: ['10x faster simulations', 'Higher accuracy predictions', 'Automated optimization', 'Real-time insights'],
      features: ['Structural analysis', 'Thermal simulations', 'Fluid dynamics', 'Multi-physics modeling']
    },
    {
      id: '2',
      title: 'Manufacturing Optimization',
      description: 'Smart manufacturing solutions with intelligence-driven automation and robotics integration',
      long_description: 'Transform your manufacturing operations with our intelligent automation platform. We combine computer vision, robotics, and predictive analytics to optimize every aspect of your production line.',
      image_url: 'https://images.unsplash.com/photo-1720036236694-d0a231c52563',
      icon: 'FaRobot',
      benefits: ['40% productivity increase', 'Reduced waste', 'Energy optimization', 'Quality improvements'],
      features: ['Process automation', 'Robotic integration', 'Production scheduling', 'Resource optimization']
    },
    {
      id: '3',
      title: 'Quality Control & Inspection',
      description: 'Computer vision systems achieving 99%+ accuracy in automated defect detection',
      long_description: 'Our intelligence-powered quality control systems use advanced computer vision and deep learning to detect defects with superhuman accuracy, eliminating human error and reducing inspection time by 80%.',
      image_url: 'https://images.unsplash.com/photo-1565954786194-d22abeaac3ae',
      icon: 'FaSearch',
      benefits: ['99%+ detection accuracy', '80% faster inspection', 'Zero human error', 'Real-time monitoring'],
      features: ['Visual inspection', 'Defect classification', 'Dimensional analysis', 'Surface quality check']
    },
    {
      id: '4',
      title: 'Predictive Maintenance',
      description: 'Intelligence models predicting equipment failures 7-14 days in advance, reducing downtime by 40%',
      long_description: 'Stop unexpected breakdowns with our predictive maintenance intelligence. Our models analyze sensor data, historical patterns, and operational parameters to predict failures before they happen.',
      image_url: 'https://images.unsplash.com/photo-1720036236697-018370867320',
      icon: 'FaBrain',
      benefits: ['40% downtime reduction', '7-14 day advance warning', 'Optimized maintenance scheduling', 'Extended equipment life'],
      features: ['Anomaly detection', 'Failure prediction', 'Condition monitoring', 'Maintenance scheduling']
    },
    {
      id: '5',
      title: 'Document Intelligence',
      description: 'RAG-powered systems extracting insights from engineering documents 10x faster',
      long_description: 'Unlock the value hidden in your engineering documentation with our intelligent document processing system. Using RAG (Retrieval-Augmented Generation) technology, we enable instant search and analysis of technical documents.',
      image_url: 'https://futureoflife.org/wp-content/uploads/2015/11/artificial_intelligence_benefits_risk.jpg',
      icon: 'FaFileAlt',
      benefits: ['10x faster information retrieval', 'Intelligent search', 'Automated insights', 'Knowledge management'],
      features: ['Document processing', 'Semantic search', 'Auto-summarization', 'Knowledge extraction']
    },
    {
      id: '6',
      title: 'Custom Intelligence Solutions',
      description: 'Tailored machine learning applications for unique industry challenges',
      long_description: 'Every business has unique challenges. Our team of intelligence experts works closely with you to develop custom machine learning solutions that address your specific needs and integrate seamlessly with your existing systems.',
      image_url: 'https://images.unsplash.com/photo-1645839057098-5ea8761a6b09',
      icon: 'FaTools',
      benefits: ['Customized to your needs', 'Seamless integration', 'Scalable architecture', 'Ongoing support'],
      features: ['Custom model development', 'System integration', 'Training & deployment', 'Continuous optimization']
    },
    {
      id: '7',
      title: 'Industrial IoT Analytics',
      description: 'Real-time analytics and insights from connected industrial equipment',
      long_description: 'Harness the power of your connected devices with our Industrial IoT analytics platform. We transform raw sensor data into actionable insights, enabling real-time decision making and operational optimization.',
      image_url: 'https://embarcados.com.br/wp-content/uploads/2015/07/iot.jpg',
      icon: 'FaNetworkWired',
      benefits: ['Real-time monitoring', 'Operational visibility', 'Data-driven decisions', 'Performance optimization'],
      features: ['Sensor data integration', 'Real-time dashboards', 'Alert systems', 'Historical analytics']
    },
    {
      id: '8',
      title: 'Digital Twin Solutions',
      description: 'Virtual replicas of physical assets for simulation, monitoring, and optimization',
      long_description: 'Create digital twins of your industrial assets to simulate scenarios, predict performance, and optimize operations. Our digital twin technology bridges the physical and digital worlds for enhanced decision-making.',
      image_url: 'https://thechoice.escp.eu/wp-content/uploads/blogpost-aidigitaltransformation-shutterstock-nicoelnino.jpg',
      icon: 'FaCloud',
      benefits: ['Asset performance simulation', 'Predictive analytics', 'Risk assessment', 'Optimization testing'],
      features: ['3D modeling', 'Real-time synchronization', 'Scenario simulation', 'Performance prediction']
    },
    {
      id: '9',
      title: 'Supply Chain Intelligence',
      description: 'AI-powered optimization for inventory, logistics, and demand forecasting',
      long_description: 'Optimize your entire supply chain with our AI-driven intelligence platform. From demand forecasting to logistics optimization, we help you reduce costs and improve efficiency across your supply network.',
      image_url: 'https://facts.net/wp-content/uploads/2024/09/32-facts-about-supply-chain-management-1726410185.jpg',
      icon: 'FaChartLine',
      benefits: ['Demand forecasting accuracy', 'Inventory optimization', 'Logistics efficiency', 'Cost reduction'],
      features: ['Demand planning', 'Inventory management', 'Route optimization', 'Supplier analytics']
    }
  ];

  const services = getDefaultServices();

  const getIconComponent = (iconName) => {
    const icons = {
      FaCog: FaCog,
      FaRobot: FaRobot,
      FaSearch: FaSearch,
      FaBrain: FaBrain,
      FaFileAlt: FaFileAlt,
      FaTools: FaTools,
      FaChartLine: FaChartLine,
      FaCloud: FaCloud,
      FaNetworkWired: FaNetworkWired,
      FaShieldAlt: FaShieldAlt,
      GiRadarSweep: GiRadarSweep,
      MdSecurity: MdSecurity
    };
    const Icon = icons[iconName] || FaCog;
    return <Icon />;
  };

  return (
    <div className="relative pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-slate-50 via-white to-transparent" data-testid="services-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-6 py-2 bg-blue-50 border border-blue-100 rounded-full">
              <span className="text-blue-600 font-semibold text-sm">OUR SOLUTIONS</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              <span className="gradient-text">Software-Defined Defence</span>
              <br />
              <span className="text-slate-900">& Strategic Engineering</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Strategic AI and engineering solutions designed for high-stakes environments, protecting India's frontlines and industrial core.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-16" data-testid="services-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                data-testid={`service-detail-${index}`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden border border-[#3b82f6]/30 shadow-2xl group">
                    <img
                      src={service.image_url}
                      alt={service.title}
                      className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60"></div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative mb-8 flex justify-center lg:justify-start">
                    <div className="relative p-6 rounded-2xl bg-white shadow-xl shadow-blue-50 border border-blue-50 group-hover:border-blue-200 transition-all duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl"></div>
                      <div className="relative text-5xl transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 text-blue-600">
                        {getIconComponent(service.icon)}
                      </div>
                      <motion.div
                        animate={{ opacity: [0.2, 0.5, 0.2] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full blur-[2px]"
                      ></motion.div>
                    </div>
                  </div>
                  <h2 className="text-4xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    {service.long_description}
                  </p>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Benefits</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-slate-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">Core Features</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-slate-100 border border-slate-200 rounded-full text-sm text-slate-700 font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-effect p-12 rounded-3xl text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can transform your engineering operations.
            </p>
            <Link
              to="/contact"
              data-testid="services-cta-button"
              className="inline-flex items-center gap-2 px-10 py-5 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-all duration-300 hover:scale-105 shadow-xl shadow-slate-200"
            >
              Schedule a Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;