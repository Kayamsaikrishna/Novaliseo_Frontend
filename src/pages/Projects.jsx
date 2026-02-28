import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaShieldAlt, FaCheck } from 'react-icons/fa';
import BoarderImg from '../assets/defence/Boarder Security.png';
import TerrainImg from '../assets/defence/real_time_mapping.png';
import NavImg from '../assets/defence/gnss_visual_tracking.png';
import SensorImg from '../assets/defence/sensor.png';
import MeshImg from '../assets/defence/strategic_mesh_nodes_v2_1771334837767.png';
import CoreImg from '../assets/defence/indigenous_core_abstract_1771333830627.png';
import StratImg from '../assets/defence/defence_hero_strategic_v2_1771334764385.png';
import CyberImg from '../assets/defence/sovereign_strat_hero_abstract_1771334310686.png';
import LowLatencyImg from '../assets/defence/latency.png';
import EfficiencyImg from '../assets/defence/efficency.png';
import AttitudeImg from '../assets/defence/attitude.png';

const capabilities = [
  {
    id: '1',
    domain: 'Precision Strike & Loitering Systems',
    category: 'Kinetic Systems',
    tagline: 'Terminal autonomy for surgical mission success.',
    description:
      'Intelligence layers for loitering munitions (suicide UAVs) and precision strike platforms. Features millisecond terminal-phase adjustments, GNSS-independent targeting, and autonomous mission-abort logic.',
    areas: ['Terminal guidance autonomy', 'Loitering endurance logic', 'Precision targeting fusion', 'Autonomous ROE enforcement'],
    image_url: StratImg,
  },
  {
    id: '2',
    domain: 'Neural Terrain Sense / Imagery',
    category: 'Defence',
    tagline: 'Turn satellite data into mission-ready insight.',
    description:
      'AI processing of satellite, aerial, and UAV imagery to extract terrain features, detect infrastructure changes, and identify high-value targets within air-gapped mission environments.',
    areas: ['Satellite imagery analysis', 'Target change detection', 'Trafficability assessment', 'Geospatial intelligence'],
    image_url: TerrainImg,
  },
  {
    id: '3',
    domain: 'GNSS-Denied Navigation',
    category: 'Autonomous Systems',
    tagline: 'Operate where signals cannot reach.',
    description:
      'Navigation intelligence for unmanned platforms operating in GPS-denied, contested, or zero-dark environments. Sensor fusion and real-time mapping for strike and ISR assets.',
    areas: ['GPS-denied navigation', 'Obstacle avoidance', 'Swarm coordination', 'Mission replanning'],
    image_url: NavImg,
  },
  {
    id: '4',
    domain: 'Systemic Cyber Defence',
    category: 'Cybersecurity',
    tagline: 'Active resilience at the packet layer.',
    description:
      'Sovereign security architectures that treat cyber aggression as a biological threat — adapting, isolating, and neutralizing in real-time without external telemetry dependency.',
    areas: ['Network anomaly detection', 'Adversarial threat identification', 'Post-quantum readiness', 'Hardware-rooted trust'],
    image_url: CyberImg,
  },
  {
    id: '5',
    domain: 'Kinetic Intervention Logic',
    category: 'Kinetic Systems',
    tagline: 'Machine-speed response, human-bounded authority.',
    description:
      'Engagement and counter-strike logic that operates within pre-defined authority envelopes. Detect, classify, and neutralize asymmetric threats within millisecond response windows.',
    areas: ['Autonomous counter-UAS', 'Force protection logic', 'Proportional response triggers', 'Accountability audit trail'],
    image_url: BoarderImg,
  },
  {
    id: '6',
    domain: 'Swarm Intelligence & Mesh',
    category: 'Autonomous Systems',
    tagline: 'Coordinated machine intelligence at scale.',
    description:
      'Decentralized control for drone swarms and distributed sensor networks. Enabling hundreds of nodes to operate as a single, resilient entity in high-intensity electronic warfare environments.',
    areas: ['Distributed command logic', 'LPI/LPD communications', 'Dynamic re-tasking', 'Collective engagement'],
    image_url: MeshImg,
  },
  {
    id: '7',
    domain: 'Tactical Edge Perception',
    category: 'Defence',
    tagline: 'Sub-millisecond target classification.',
    description:
      'High-speed computer vision systems that identify and track targets across multi-spectral feeds. Designed to operate on low-power edge hardware for strike and surveillance platforms.',
    areas: ['Multi-spectrum monitoring', 'Target acquisition', 'Zone management', 'Real-time classification'],
    image_url: SensorImg,
  },
  {
    id: '8',
    domain: 'On-Premise Sovereign Compute',
    category: 'Sovereign Intelligence',
    tagline: 'Your intelligence. Your infrastructure. Your control.',
    description:
      'End-to-end design and deployment of AI systems that operate entirely within your own infrastructure. Zero cloud dependency, air-gap compatible, with full integrity verification.',
    areas: ['Air-gapped deployment', 'Edge hardware integration', 'Model integrity verification', 'Full IP ownership'],
    image_url: CoreImg,
  },
];

const categoryColors = {
  'Defence': 'bg-blue-50 text-blue-700 border-blue-100',
  'Autonomous Systems': 'bg-indigo-50 text-indigo-700 border-indigo-100',
  'Sovereign Intelligence': 'bg-slate-100 text-slate-700 border-slate-200',
  'Industrial': 'bg-cyan-50 text-cyan-700 border-cyan-100',
  'Cybersecurity': 'bg-red-50 text-red-700 border-red-100',
  'Kinetic Systems': 'bg-rose-50 text-rose-700 border-rose-100',
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(capabilities.map(c => c.category))];
  const filtered = selectedCategory === 'All'
    ? capabilities
    : capabilities.filter(c => c.category === selectedCategory);

  return (
    <div className="relative pt-20">

      {/* ── Hero ── */}
      <section className="relative py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-6 py-2 bg-blue-50 border border-blue-100 rounded-full">
              <span className="text-blue-600 font-semibold text-sm">CAPABILITY DOMAINS</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              <span className="gradient-text">Customisable</span>
              <br />
              <span className="text-slate-900">Intelligence Solutions</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
              These are the domains we are building toward — each delivered as a bespoke system,
              engineered to your specific mission, environment, and infrastructure.
              No off-the-shelf. No subscriptions. Fully owned by you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Category Filter ── */}
      <section className="py-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Grid ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filtered.map((cap, index) => (
              <motion.div
                key={cap.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group bg-white border border-slate-200 hover:border-blue-300 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-blue-50 transition-all duration-400"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={cap.image_url}
                    alt={cap.domain}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-5">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${categoryColors[cap.category] || 'bg-blue-50 text-blue-700 border-blue-100'}`}>
                      {cap.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-blue-600 font-semibold text-sm mb-2 italic">"{cap.tagline}"</p>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{cap.domain}</h3>
                  <p className="text-slate-500 leading-relaxed mb-6">{cap.description}</p>

                  {/* Areas */}
                  <ul className="space-y-2">
                    {cap.areas.map((area, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                        <FaCheck className="text-blue-500 flex-shrink-0 text-xs" />
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-slate-200 rounded-3xl p-14 text-center shadow-lg"
          >
            <FaShieldAlt className="text-5xl text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-5">
              Have a Mission in Mind?
            </h2>
            <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
              Every system we build starts with your requirements. Tell us your domain,
              your constraints, and your goals — we'll engineer the intelligence that fits.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Discuss Your Requirements <FaArrowRight />
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Projects;