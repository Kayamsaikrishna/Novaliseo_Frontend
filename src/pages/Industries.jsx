import React from 'react';
import { motion } from 'framer-motion';
import { FaCar, FaPlane, FaIndustry, FaShieldAlt, FaHospital, FaSeedling, FaArrowRight, FaShip, FaCity, FaChargingStation, FaWind, FaGraduationCap } from 'react-icons/fa';

const Industries = () => {
  const industries = [
    {
      icon: FaShieldAlt,
      title: 'Defense',
      description: 'Intelligent surveillance and threat detection systems for national security',
      useCases: [
        'SHIVA Neural-Edge Tracking',
        'GNSS-Denied Navigation',
        'Tactical Swarm Coordination',
        'Sovereign AI IP Protection',
        'Multi-spectrum Object Detection',
        'Sub-ms Decision Logic',
        'Indigenous Hardware Encryption',
        'Adaptive Counter-UAV Ops',
        'Secure Battlefield Mesh',
        'Real-time Threat Classification'
      ],
      image: 'https://images.unsplash.com/photo-1660301402574-bab6d26f6c02'
    },
    {
      icon: FaPlane,
      title: 'Aerospace',
      description: 'Advanced AI systems for aircraft design, simulation, and safety analysis',
      useCases: [
        'Structural integrity analysis',
        'Aerodynamic simulations',
        'Flight safety predictions',
        'Component failure analysis',
        'Material optimization',
        'Manufacturing precision',
        'Maintenance scheduling',
        'Performance optimization',
        'Design validation',
        'Composite material testing'
      ],
      image: 'https://images.unsplash.com/photo-1581088657139-d5a5cce14c87'
    },
    {
      icon: FaShip,
      title: 'Maritime',
      description: 'AI solutions for shipbuilding, navigation, and maritime operations',
      useCases: [
        'Autonomous navigation',
        'Vessel performance optimization',
        'Predictive maintenance',
        'Cargo optimization',
        'Weather routing',
        'Collision avoidance',
        'Fuel consumption monitoring',
        'Structural health monitoring',
        'Port operations automation',
        'Safety compliance monitoring'
      ],
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/US_Navy_071116-N-7883G-101_The_aircraft_carrier_USS_Kitty_Hawk_(CV_63)_and_other_American_and_Japan_Maritime_Self-Defense_Forces_(JMSDF)_ships_transit_together_at_the_end_of_ANNUALEX_19G%2C_the_maritime_component_of_the_U.S.-Japa.jpg'
    },
    {
      icon: FaCar,
      title: 'Automotive',
      description: 'AI-powered solutions for vehicle manufacturing, quality control, and predictive maintenance',
      useCases: [
        'Automated defect detection',
        'Production line optimization',
        'Predictive maintenance',
        'Supply chain intelligence',
        'Quality assurance automation',
        'Design optimization',
        'Assembly line robotics',
        'Paint quality inspection',
        'Component testing automation',
        'Real-time production monitoring'
      ],
      image: 'https://images.unsplash.com/photo-1564544466685-29adb82df10c'
    },
    {
      icon: FaIndustry,
      title: 'Manufacturing',
      description: 'Smart manufacturing with AI-driven automation and process optimization',
      useCases: [
        'Production optimization',
        'Energy management',
        'Waste reduction',
        'Quality control automation',
        'Inventory management',
        'Process monitoring',
        'Equipment diagnostics',
        'Yield optimization',
        'Workflow automation',
        'Performance analytics'
      ],
      image: 'https://images.unsplash.com/photo-1720036236694-d0a231c52563'
    },
    {
      icon: FaHospital,
      title: 'Healthcare',
      description: 'AI applications for medical equipment optimization and healthcare operations',
      useCases: [
        'Equipment monitoring',
        'Maintenance prediction',
        'Resource optimization',
        'Operations analytics',
        'Supply chain management',
        'Quality assurance',
        'Compliance tracking',
        'Performance monitoring',
        'Cost optimization',
        'Process automation'
      ],
      image: 'https://images.unsplash.com/photo-1579165466991-467135ad3110'
    },
    {
      icon: FaSeedling,
      title: 'Agriculture',
      description: 'Smart farming solutions with AI-powered crop monitoring and disease detection',
      useCases: [
        'Disease detection',
        'Crop monitoring',
        'Yield prediction',
        'Resource optimization',
        'Weather analytics',
        'Soil analysis',
        'Pest detection',
        'Growth tracking',
        'Irrigation management',
        'Harvest optimization'
      ],
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449'
    },
    {
      icon: FaCity,
      title: 'Smart Cities',
      description: 'Urban infrastructure optimization through AI-powered solutions',
      useCases: [
        'Traffic flow optimization',
        'Energy grid management',
        'Waste collection optimization',
        'Public safety monitoring',
        'Infrastructure maintenance',
        'Air quality monitoring',
        'Water management',
        'Parking optimization',
        'Emergency response',
        'Urban planning analytics'
      ],
      image: 'https://www.societybyte.swiss/wp-content/uploads/2018/06/Symbolbild_SmartCity_ret-scaled.jpg'
    },
    {
      icon: FaChargingStation,
      title: 'Energy & Utilities',
      description: 'AI-driven solutions for power generation, distribution, and renewable energy',
      useCases: [
        'Grid stability optimization',
        'Renewable energy forecasting',
        'Equipment failure prediction',
        'Load balancing',
        'Energy trading analytics',
        'Smart meter analytics',
        'Outage prediction',
        'Asset performance monitoring',
        'Demand response management',
        'Environmental compliance'
      ],
      image: 'https://d2n41s0wa71yzf.cloudfront.net/wp-content/uploads/2024/04/26100101/geothermal-kenya-1024x640.jpg'
    },
    {
      icon: FaWind,
      title: 'Renewables',
      description: 'AI optimization for solar, wind, and other renewable energy systems',
      useCases: [
        'Weather-based generation forecasting',
        'Panel/wind turbine optimization',
        'Maintenance scheduling',
        'Energy storage management',
        'Grid integration',
        'Performance monitoring',
        'Fault detection',
        'Site selection analytics',
        'Efficiency optimization',
        'Lifecycle management'
      ],
      image: 'https://iblnews.es/wp-content/uploads/2021/05/Solar-Energy.jpg'
    },
    {
      icon: FaGraduationCap,
      title: 'Education',
      description: 'AI-powered platforms for hands-on, practical learning experiences',
      useCases: [
        'Interactive lab simulations',
        'Virtual reality training environments',
        'Real-world project-based learning',
        'Skill-based assessment platforms',
        'Industry mentor matching systems',
        'Hands-on coding workshops',
        'Practical problem-solving exercises',
        'Collaborative learning environments',
        'Portfolio development tools',
        'Job-ready skill verification'
      ],
      image: 'https://tse1.mm.bing.net/th/id/OIP.nPCJVt548EH_lKI9DMyI0wHaEM?rs=1&pid=ImgDetMain&o=7&rm=3'
    }
  ];

  return (
    <div className="relative pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-slate-50 via-white/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-6 py-2 bg-blue-50 border border-blue-100 rounded-full">
              <span className="text-blue-600 font-semibold text-sm">INDUSTRIES WE SERVE</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              <span className="gradient-text">Transforming</span>
              <br />
              <span className="text-slate-900">Every Industry</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              From automotive to agriculture, our AI solutions are driving innovation across diverse sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                data-testid={`industry-${index}`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="industry-card relative rounded-2xl overflow-hidden">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <industry.icon className="text-5xl text-blue-600 mb-6" />
                  <h2 className="text-4xl font-bold text-slate-900 mb-4">
                    {industry.title}
                  </h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    {industry.description}
                  </p>

                  <h3 className="text-xl font-semibold text-slate-900 mb-4">10 AI Use Cases</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {industry.useCases.map((useCase, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-slate-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                        <span className="text-sm">{useCase}</span>
                      </div>
                    ))}
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
              Is Your Industry Ready for AI?
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Let's discuss custom AI solutions tailored to your industry's specific challenges.
            </p>
            <a
              href="/contact"
              data-testid="industries-cta-button"
              className="inline-flex items-center gap-2 px-10 py-5 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-all duration-300 hover:scale-105 shadow-xl shadow-slate-200"
            >
              Get Industry-Specific Solutions <FaArrowRight />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
