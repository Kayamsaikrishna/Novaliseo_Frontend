import React from 'react';
import { motion } from 'framer-motion';
import { FaRegBookmark } from 'react-icons/fa';

const Blog = () => {
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

      {/* Coming Soon Message */}
      <section className="relative py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center bg-white border border-slate-200 p-12 rounded-3xl shadow-xl shadow-slate-100"
          >
            <div className="inline-block p-8 bg-slate-50 rounded-2xl border border-slate-100 mb-8 w-full max-w-2xl">
              <FaRegBookmark className="text-5xl text-blue-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Content Coming Soon</h2>
              <p className="text-slate-600 mb-8 text-lg">
                We're working on creating insightful blog posts about AI, engineering, and industry trends.
                Check back soon for valuable content!
              </p>
              <div className="text-slate-700 bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-left inline-block">
                <p className="font-bold text-slate-900 mb-4">Stay tuned for updates on:</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    Latest AI developments in manufacturing
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                    Engineering best practices
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                    Industry case studies
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                    Technical tutorials and guides
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
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