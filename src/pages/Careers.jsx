import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaMapMarkerAlt, FaClock, FaArrowRight, FaRocket, FaUsers, FaLightbulb, FaHeart, FaMedal, FaLaptop, FaCoffee } from 'react-icons/fa';

const Careers = () => {

  const cultureValues = [
    {
      icon: <FaRocket className="text-3xl text-[#8b5cf6]" />,
      title: 'Innovation First',
      description: 'We encourage experimentation and pushing boundaries to solve complex problems.'
    },
    {
      icon: <FaUsers className="text-3xl text-[#3b82f6]" />,
      title: 'Collaborative Culture',
      description: 'Work in cross-functional teams where every voice matters and ideas flourish.'
    },
    {
      icon: <FaLightbulb className="text-3xl text-[#06b6d4]" />,
      title: 'Continuous Learning',
      description: 'We invest in your growth with learning budgets, conferences, and mentorship.'
    },
    {
      icon: <FaHeart className="text-3xl text-[#10b981]" />,
      title: 'Wellness & Balance',
      description: 'Flexible hours, mental health support, and unlimited PTO for work-life balance.'
    },
    {
      icon: <FaMedal className="text-3xl text-[#f59e0b]" />,
      title: 'Recognition & Rewards',
      description: 'We celebrate achievements and provide competitive compensation and equity.'
    },
    {
      icon: <FaLaptop className="text-3xl text-[#ec4899]" />,
      title: 'Remote Flexibility',
      description: 'Hybrid work model with remote work options to suit your lifestyle.'
    }
  ];

  const perks = [
    { icon: <FaCoffee className="text-[#8b5cf6]" />, title: 'Welcome Kit', description: 'Personalized onboarding package with company swag and essentials' },
    { icon: <FaMedal className="text-[#3b82f6]" />, title: 'Performance Bonuses', description: 'Quarterly rewards for exceptional contributions and achievements' },
    { icon: <FaLaptop className="text-[#06b6d4]" />, title: 'Career Development', description: 'Mentorship programs and skill advancement opportunities' },
    { icon: <FaLightbulb className="text-[#10b981]" />, title: 'Innovation Time', description: 'Dedicated hours for personal projects and creative exploration' },
    { icon: <FaRocket className="text-[#f59e0b]" />, title: 'Recognition Programs', description: 'Employee of the month and peer nomination awards' },
    { icon: <FaUsers className="text-[#ec4899]" />, title: 'Team Building', description: 'Regular events and activities to foster collaboration' }
  ];

  return (
    <div className="relative pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-slate-50 via-white/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-6 px-6 py-2 bg-purple-50 border border-purple-100 rounded-full">
                <span className="text-purple-600 font-semibold text-sm">JOIN OUR TEAM</span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold mb-6">
                <span className="gradient-text">Shape the Future</span>
                <br />
                <span className="text-slate-900">of AI in India</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Join a team of passionate engineers and researchers working on cutting-edge AI solutions that transform traditional industries across India.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#openings"
                  className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-all duration-300 hover:scale-105 shadow-xl shadow-slate-200"
                >
                  View Openings
                </a>
                <a
                  href="#culture"
                  className="px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-full font-bold text-lg hover:bg-slate-50 transition-all duration-300"
                >
                  Our Culture
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-slate-100 shadow-2xl">
                <div className="bg-slate-50 p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                      <div className="text-4xl font-bold text-purple-600 mb-2">10+</div>
                      <div className="text-slate-600 font-medium">Team Members</div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                      <div className="text-4xl font-bold text-blue-600 mb-2">2+</div>
                      <div className="text-slate-600 font-medium">Industries Served</div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                      <div className="text-4xl font-bold text-cyan-600 mb-2">2+</div>
                      <div className="text-slate-600 font-medium">AI Projects</div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                      <div className="text-4xl font-bold text-emerald-600 mb-2">Just</div>
                      <div className="text-slate-600 font-medium">Getting Started</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements for visual effect */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#8b5cf6]/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#3b82f6]/20 rounded-full blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 bg-gradient-to-b from-transparent to-slate-100/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '10+', label: 'Team Members', color: 'text-[#8b5cf6]' },
              { number: '2+', label: 'Industries Served', color: 'text-[#3b82f6]' },
              { number: '2+', label: 'AI Projects', color: 'text-[#06b6d4]' },
              { number: 'Just', label: 'Getting Started', color: 'text-[#10b981]' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                <div className="text-slate-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon - Job Openings */}
      <section id="openings" className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-4"
            >
              <span className="gradient-text">Career Opportunities</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-600 max-w-3xl mx-auto"
            >
              Join us in revolutionizing AI-powered engineering solutions for Indian industries
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center py-20"
          >
            <div className="inline-block p-8 bg-slate-50 rounded-3xl border border-slate-200 mb-8">
              <FaBriefcase className="text-5xl text-[#8b5cf6] mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Opportunities Coming Soon</h3>
              <p className="text-slate-500 mb-6 max-w-2xl mx-auto">
                We're actively building our team and new positions will be announced soon.
                In the meantime, feel free to reach out and express your interest in joining our mission.
              </p>
              <a
                href="mailto:careers@novaliseo.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] text-white rounded-full font-semibold hover:shadow-lg hover:shadow-[#8b5cf6]/50 transition-all duration-300 hover:scale-105"
              >
                Express Interest
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Culture Section */}
      <section id="culture" className="relative py-24 bg-gradient-to-b from-transparent to-slate-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-4"
            >
              <span className="gradient-text">Our Culture</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-500 max-w-3xl mx-auto"
            >
              A workplace where innovation thrives, diversity is celebrated, and growth is limitless
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {cultureValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect p-8 rounded-2xl text-center border border-[#8b5cf6]/20 hover:border-[#8b5cf6]/50 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="inline-block mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="glass-effect rounded-3xl p-12 border border-[#8b5cf6]/20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Employee Perks & Benefits</h3>
              <p className="text-slate-500 max-w-2xl mx-auto">
                We believe in taking care of our team with comprehensive benefits that support their professional and personal growth
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {perks.map((perk, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1">
                    {perk.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">{perk.title}</h4>
                    <p className="text-slate-500 text-sm">{perk.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon - Team Section */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-4"
            >
              <span className="gradient-text">Meet Our Team</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-500 max-w-3xl mx-auto"
            >
              Get to know the talented individuals driving innovation at NOVALISEO
            </motion.p>
          </div>

          <div className="glass-effect rounded-2xl p-12 border border-[#8b5cf6]/20 text-center">
            <div className="text-5xl mb-6">👨‍💻👩‍💻</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Team Profiles Coming Soon</h3>
            <p className="text-slate-600 max-w-2xl mx-auto mb-6 leading-relaxed">
              We're working on creating detailed profiles of our amazing team members.
              Check back soon to learn more about the people behind our innovative solutions.
            </p>
            <div className="text-slate-700 font-medium">
              <p className="mb-4 font-bold text-slate-900">You'll soon be able to meet:</p>
              <ul className="space-y-2 inline-block text-left">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div> Our AI and ML experts</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div> Engineering specialists</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div> Research scientists</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div> Operations and support team</li>
              </ul>
            </div>
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
            className="glass-effect p-12 rounded-3xl text-center border border-[#8b5cf6]/30"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Ready to Join Our Mission?
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Help us revolutionize AI-powered engineering solutions for Indian industries
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:careers@novaliseo.com"
                className="inline-flex items-center gap-2 px-10 py-5 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-all duration-300 hover:scale-105 shadow-xl shadow-slate-200"
              >
                Express Interest
              </a>
              <a
                href="#openings"
                className="inline-flex items-center gap-2 px-10 py-5 bg-white border border-slate-200 text-slate-900 rounded-full font-bold text-lg hover:bg-slate-50 transition-all duration-300"
              >
                Learn More <FaArrowRight />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
