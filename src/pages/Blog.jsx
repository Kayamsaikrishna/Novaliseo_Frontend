import React from 'react';
import { motion } from 'framer-motion';
import { FaRegBookmark, FaArrowRight, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';

const Blog = () => {
  useSEO({
    title: 'Knowledge Hub | AI Defence Software & Strategic Engineering',
    description: 'Read the latest NOVALISEO insights on AI defence software, software-defined systems, and the future of strategic intelligence engineering.',
  });
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
              <span className="text-blue-600 font-semibold text-sm">INSIGHTS & ARTICLES</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              <span className="gradient-text">Knowledge Hub</span>
              <br />
              <span className="text-slate-900">AI & Engineering Insights</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest trends, technologies, and best practices in AI-powered engineering.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="relative py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Article 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:shadow-xl hover:shadow-blue-50 hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-2 text-slate-400 text-sm font-medium mb-4">
                <FaCalendarAlt /> <span>Feb 28, 2026</span>
              </div>
              <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 font-bold text-[10px] rounded-full uppercase tracking-widest mb-4 w-max">
                Defence Intelligence
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex-grow">
                The Crucial Role of AI in Modern Defence Intelligence
              </h2>
              <p className="text-slate-600 mb-6 line-clamp-3">
                Discover how Artificial Intelligence is reshaping defence intelligence, enabling autonomous systems, and ensuring strategic superiority in contested environments.
              </p>
              <Link to="/blog/role-of-ai-in-defence-intelligence" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors mt-auto group">
                Read Article <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Article 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:shadow-xl hover:shadow-indigo-50 hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-2 text-slate-400 text-sm font-medium mb-4">
                <FaCalendarAlt /> <span>Feb 25, 2026</span>
              </div>
              <div className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 font-bold text-[10px] rounded-full uppercase tracking-widest mb-4 w-max">
                Strategic Software
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex-grow">
                The Future of Strategic Defence Software
              </h2>
              <p className="text-slate-600 mb-6 line-clamp-3">
                Explore the future of strategic defence software. Learn how software-defined engineering and autonomous systems are replacing legacy hardware in national security.
              </p>
              <Link to="/blog/future-of-strategic-defence-software" className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:text-indigo-800 transition-colors mt-auto group">
                Read Article <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Article 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:shadow-xl hover:shadow-cyan-50 hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-2 text-slate-400 text-sm font-medium mb-4">
                <FaCalendarAlt /> <span>Feb 20, 2026</span>
              </div>
              <div className="inline-block px-3 py-1 bg-cyan-50 text-cyan-600 font-bold text-[10px] rounded-full uppercase tracking-widest mb-4 w-max">
                System Architecture
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex-grow">
                Software-Defined Defence Systems Explained
              </h2>
              <p className="text-slate-600 mb-6 line-clamp-3">
                Understand the mechanics of Software-Defined Defence (SDD). Learn how leading defence intelligence companies replace rigid hardware with adaptable AI software scopes.
              </p>
              <Link to="/blog/software-defined-defence-systems" className="inline-flex items-center gap-2 text-cyan-600 font-bold hover:text-cyan-800 transition-colors mt-auto group">
                Read Article <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative py-24 bg-gradient-to-b from-transparent to-slate-100/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-effect p-12 rounded-3xl text-center border border-[#3b82f6]/30"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Stay Updated with AI Insights
            </h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights on AI and engineering. Get notified when we publish new articles.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" data-testid="newsletter-form">
              <div className="flex-1 relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-6 py-4 bg-white border border-slate-200 rounded-full text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/50 focus:border-transparent"
                  data-testid="newsletter-email-input"
                />
              </div>
              <button
                type="submit"
                data-testid="newsletter-submit-button"
                className="px-8 py-4 bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] text-white rounded-full font-semibold hover:shadow-lg hover:shadow-[#3b82f6]/50 transition-all duration-300 hover:scale-105 transform"
              >
                Subscribe
              </button>
            </form>
            <p className="text-gray-500 text-xs mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;