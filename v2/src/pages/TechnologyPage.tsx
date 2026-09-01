import React, { useState } from 'react';
import IndranavGen1Presentation from '../components/IndranavGen1Presentation';
import AgricultureDronePresentation from '../components/AgricultureDronePresentation';
import HealthcarePresentation from '../components/HealthcarePresentation';
import MarinePresentation from '../components/MarinePresentation';
import { GLSLHills } from '../components/GLSLHills';
import { motion, AnimatePresence } from 'framer-motion';

const TechnologyPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'drone' | 'healthcare' | 'marine'>('drone');

  return (
    <main className="relative min-h-screen bg-[#020617]">
      {/* Fixed Background Hills */}
      <div className="fixed inset-0 z-0 opacity-100 pointer-events-none">
        <GLSLHills speed={0.2} cameraZ={125} />
      </div>

      {/* Category Tabs */}
      <div className="fixed top-24 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <div className="bg-[#020617]/80 backdrop-blur-xl border border-white/10 p-1.5 rounded-full flex gap-2 pointer-events-auto shadow-2xl">
          {[
            { id: 'drone', label: 'Drone & Agri' },
            { id: 'healthcare', label: 'Healthcare' },
            { id: 'marine', label: 'Marine Systems' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`relative px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${
                activeCategory === cat.id ? 'text-[#020617]' : 'text-slate-400 hover:text-white'
              }`}
            >
              {activeCategory === cat.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-cyan-400 rounded-full"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 pt-20">
        <AnimatePresence mode="wait">
          {activeCategory === 'drone' && (
            <motion.div
              key="drone"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <IndranavGen1Presentation />
              {/* Divider between Drone and Agri */}
              <div className="w-full flex justify-center py-20">
                 <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent" />
              </div>
              <AgricultureDronePresentation />
            </motion.div>
          )}

          {activeCategory === 'healthcare' && (
            <motion.div
              key="healthcare"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <HealthcarePresentation />
            </motion.div>
          )}

          {activeCategory === 'marine' && (
            <motion.div
              key="marine"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <MarinePresentation />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
};

export default TechnologyPage;
