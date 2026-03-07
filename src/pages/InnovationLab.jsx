import React from 'react';
import { motion } from 'framer-motion';
import { FaFlask, FaShieldAlt, FaGlobeAsia, FaArrowRight } from 'react-icons/fa';

// Row 1: Core Intelligence & Frameworks
export const technologies = [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", row: 1 },
    { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg", row: 1 },
    { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg", row: 1 },
    { name: "Intel-CAE", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg", row: 1 },
    { name: "Sovereign LLM", icon: <FaShieldAlt className="text-blue-600" />, row: 1, isIcon: true },
    { name: "Transformers", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/huggingface-icon.png", row: 1 },
    { name: "Scikit-learn", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg", row: 1 },
    { name: "Keras", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg", row: 1 },

    // Row 2: Data, Infrastructure & Ops
    { name: "Qdrant", icon: "https://qdrant.tech/images/logo_with_text.png", row: 2 },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", row: 2 },
    { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg", row: 2 },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", row: 2 },
    { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg", row: 2 },
    { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg", row: 2 },
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg", row: 2 },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", row: 2 }
];

export const TechnologyMarquee = () => {
    const duplicatedTechnologies = [...technologies, ...technologies, ...technologies];
    return (
        <section className="py-12 bg-white border-y border-slate-100 overflow-hidden relative">
            <div className="flex whitespace-nowrap">
                <motion.div
                    className="flex gap-16 items-center px-8"
                    animate={{ x: [0, -1500] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                    {duplicatedTechnologies.map((tech, i) => (
                        <div key={i} className="flex items-center gap-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default">
                            <div className="w-8 h-8 flex items-center justify-center">
                                {tech.isIcon ? (
                                    <div className="text-2xl">{tech.icon}</div>
                                ) : (
                                    <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                                )}
                            </div>
                            <span className="text-xs font-black uppercase tracking-widest text-slate-400">{tech.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

const InnovationLab = () => {
    const researchAreas = [
        {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
            title: 'Deep Learning & Neural Networks',
            description: 'Advanced neural architectures for complex pattern recognition and decision-making in industrial environments.',
            highlights: ['Transformer Models', 'Vision Networks', 'Reinforcement Learning']
        },
        {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg",
            title: 'Computer Vision & Image Processing',
            description: 'Real-time visual inspection systems for quality control, defect detection, and automated monitoring.',
            highlights: ['Visual Inspection', 'Defect Detection', 'Automated Monitoring']
        },
        {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
            title: 'Predictive Maintenance & Analytics',
            description: 'AI models for anticipating equipment failures and optimizing maintenance schedules.',
            highlights: ['Failure Prediction', 'Maintenance Scheduling', 'Anomaly Detection']
        },
        {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg",
            title: 'MLOps & Deployment',
            description: 'Scalable infrastructure for deploying AI models in production environments.',
            highlights: ['Model Pipelines', 'CI/CD for AI', 'Monitoring & Drift']
        },
        {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
            title: 'Natural Language Processing',
            description: 'Advanced NLP techniques for document analysis, sentiment evaluation, and automated reporting.',
            highlights: ['LLMs', 'Entity Recognition', 'Automated Reporting']
        },
        {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
            title: 'Edge AI & IoT Integration',
            description: 'Deploying lightweight AI models on edge devices for real-time industrial decision making.',
            highlights: ['Model Compression', 'Local Inference', 'Edge Orchestration']
        },
        {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
            title: 'Cloud-Native AI Solutions',
            description: 'Leveraging cloud platforms for scalable AI training and deployment pipelines.',
            highlights: ['Cloud Training', 'Scalable Serving', 'Hybrid Pipelines']
        },
        {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
            title: 'Generative AI & Synthesis',
            description: 'Creating new materials, designs, and solutions through AI-generated innovations.',
            highlights: ['Generative Models', 'Design Synthesis', 'AI-Driven Innovation']
        },
        {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
            title: 'Robotics & Automation',
            description: 'AI-powered robotics solutions for manufacturing and quality control.',
            highlights: ['Autonomous Robots', 'Vision-Guided Ops', 'Process Automation']
        },
        {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg",
            title: 'Statistical Modeling & Simulation',
            description: 'Advanced statistical methods for process optimization and uncertainty quantification.',
            highlights: ['Monte Carlo', 'Process Optimization', 'Uncertainty Analysis']
        },
        {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apacheairflow/apacheairflow-original.svg",
            title: 'Data Engineering & Pipelines',
            description: 'Building robust data infrastructure for collecting, processing, and analyzing industrial data.',
            highlights: ['ETL/ELT', 'Data Lakes', 'Stream Processing']
        },
        {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
            title: 'Real-time Decision Systems',
            description: 'Low-latency AI systems for immediate response in critical industrial operations.',
            highlights: ['Low Latency AI', 'Critical Response', 'Event-Driven Ops']
        },
        {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
            title: 'High-Performance Computing',
            description: 'Optimizing AI algorithms for execution on supercomputing clusters and specialized hardware.',
            highlights: ['GPU Clusters', 'Distributed Training', 'HPC Optimization']
        },
        {
            icon: <FaShieldAlt className="text-blue-600" />,
            title: 'Cybersecurity & AI Ethics',
            description: 'Protecting AI systems and data while ensuring ethical deployment in industrial settings.',
            highlights: ['Secure AI', 'Bias Detection', 'Explainability']
        },
        {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/neo4j/neo4j-original.svg",
            title: 'Knowledge Graphs & Ontologies',
            description: 'Representing complex industrial knowledge for reasoning and decision support.',
            highlights: ['Knowledge Graphs', 'Semantic Reasoning', 'Ontology Design']
        },
        {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
            title: 'Multi-modal Data Fusion',
            description: 'Integrating heterogeneous data sources for comprehensive situational awareness.',
            highlights: ['Sensor Fusion', 'Cross-modal AI', 'Situational Awareness']
        },
        {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
            title: 'Digital Signal Processing',
            description: 'Advanced signal analysis techniques for interpreting sensor and equipment data.',
            highlights: ['FFT Analysis', 'Noise Filtering', 'Sensor Interpretation']
        },
        {
            icon: <FaGlobeAsia className="text-blue-600" />,
            title: 'Human-AI Collaboration',
            description: 'Designing interfaces and workflows that enhance human expertise with AI assistance.',
            highlights: ['Human-in-the-Loop', 'AI Interfaces', 'Workflow Design']
        },
        {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/julia/julia-original.svg",
            title: 'Optimization Algorithms',
            description: 'Advanced mathematical techniques for resource allocation and process optimization.',
            highlights: ['Linear Programming', 'Genetic Algorithms', 'Resource Allocation']
        },
        {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg",
            title: 'Digital Manufacturing',
            description: 'AI-driven approaches to design, simulation, and optimization of manufacturing processes.',
            highlights: ['Digital Twin', 'Process Simulation', 'Smart Manufacturing']
        },
        {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
            title: 'Supply Chain Intelligence',
            description: 'Using AI to optimize logistics, inventory management, and demand forecasting.',
            highlights: ['Demand Forecasting', 'Logistics AI', 'Inventory Optimization']
        },
        {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/raspberrypi/raspberrypi-original.svg",
            title: 'Autonomous Systems',
            description: 'Developing self-governing systems capable of adaptation and learning in dynamic environments.',
            highlights: ['Autonomous Navigation', 'Self-Learning', 'Dynamic Adaptation']
        },
        {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg",
            title: 'Cognitive Computing',
            description: 'Systems that simulate human thought processes for complex problem-solving.',
            highlights: ['Cognitive Models', 'Reasoning Systems', 'Adaptive Problem Solving']
        },
        {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/anaconda/anaconda-original.svg",
            title: 'AI for Sustainability',
            description: 'Applying AI to environmental challenges including energy efficiency and carbon reduction.',
            highlights: ['Energy Optimization', 'Carbon Reduction', 'Green AI']
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
                            <span className="text-blue-600 font-semibold text-sm">SOVEREIGN RESEARCH LAB</span>
                        </div>
                        <h1 className="text-5xl sm:text-6xl font-bold mb-6">
                            <span className="gradient-text">Intelligence</span>
                            <br />
                            <span className="text-slate-900">Innovation Center</span>
                        </h1>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            Where strategic computational engineering meets elite software artisans.
                            We define the frontiers of sovereign intelligence for national security.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Tech Logo Marquee */}
            <TechnologyMarquee />

            {/* Hexagonal Honeycomb Section */}
            <section className="relative py-32 bg-slate-50/30 overflow-hidden">
                {/* Animated Background Pulse */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-400/5 rounded-full blur-[120px] animate-pulse"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-24">
                        <motion.h2
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="text-5xl font-extrabold text-slate-900 mb-6"
                        >
                            The Innovation <span className="gradient-text">Honeycomb</span>
                        </motion.h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Interlocking research domains forming a robust ecosystem of industrial intelligence.
                        </p>
                    </div>

                    {/* Honeycomb Grid Container */}
                    <div className="flex flex-wrap justify-center gap-4 py-12 md:px-12">
                        {researchAreas.map((area, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.03 }}
                                className="relative group cursor-pointer"
                                style={{
                                    width: '280px',
                                    height: '320px',
                                    marginTop: (index % 6 >= 3) ? '-60px' : '0' // Row offset for honeycomb
                                }}
                            >
                                {/* Hexagon Surface */}
                                <div
                                    className="absolute inset-0 bg-white border border-slate-200 shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:border-blue-400 group-hover:shadow-blue-200/50"
                                    style={{
                                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                                    }}
                                >
                                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

                                    <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                                        <div className="mb-4 transform group-hover:scale-110 transition-transform duration-500">
                                            <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 p-3 flex items-center justify-center shadow-inner">
                                                {typeof area.icon === 'string' ? (
                                                    <img
                                                        src={area.icon}
                                                        alt={area.title}
                                                        className="w-10 h-10 object-contain grayscale group-hover:grayscale-0 transition-all"
                                                        onError={(e) => {
                                                            e.target.onerror = null;
                                                            e.target.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/devicon/devicon-original.svg';
                                                        }}
                                                    />
                                                ) : (
                                                    <div className="text-3xl text-slate-400 group-hover:text-blue-600 transition-colors">
                                                        {area.icon}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">
                                            {area.title}
                                        </h3>

                                        <p className="text-[11px] text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-3 px-2">
                                            {area.description}
                                        </p>

                                        <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mt-4 rounded-full opacity-50 group-hover:w-20 group-hover:opacity-100 transition-all duration-500"></div>
                                    </div>
                                </div>

                                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-2 bg-black/5 blur-xl group-hover:bg-blue-400/20 transition-all rounded-full"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* INTELLIGENCE ADVANTAGE COMPARISON */}
            <section className="relative py-40 z-10 overflow-hidden bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-24">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight"
                        >
                            The Intelligence <span className="text-blue-600">Advantage</span>
                        </motion.h2>
                        <p className="text-lg md:text-xl text-slate-500 font-medium tracking-wide">Legacy Systems vs Sovereign Neural Power</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative items-center">
                        {/* VS Label */}
                        <div className="absolute top-[45%] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col items-center justify-center w-20 h-20 bg-white text-slate-900 rounded-full font-black text-2xl border-4 border-slate-100 shadow-[0_10px_30px_rgba(59,130,246,0.15)]">
                            <span>VS</span>
                        </div>

                        {/* Legacy Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl p-10 lg:p-12 border border-slate-200 relative opacity-60 hover:opacity-100 transition-all duration-500 shadow-xl group"
                        >
                            <h3 className="text-2xl font-bold text-slate-500 mb-10 flex items-center gap-4 uppercase tracking-widest">
                                <div className="w-2 h-2 rounded-full bg-slate-400"></div> Legacy Models
                            </h3>
                            <div className="space-y-8">
                                {[
                                    { l: "Processing Speed", v: "1.0x (Baseline)", p: "30%" },
                                    { l: "Strategic Depth", v: "Static/Manual", p: "20%" },
                                    { l: "Reliability", v: "Reactive Scaling", p: "45%" },
                                    { l: "Sovereignty", v: "Dependency Heavy", p: "15%" }
                                ].map((item, i) => (
                                    <div key={i} className="relative">
                                        <div className="flex justify-between text-sm mb-3 text-slate-500 font-semibold uppercase tracking-wider">
                                            <span>{item.l}</span>
                                            <span>{item.v}</span>
                                        </div>
                                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-slate-300 rounded-full transition-all group-hover:bg-slate-400" style={{ width: item.p }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Intelligence Side */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl p-10 lg:p-12 border border-blue-200 relative shadow-[0_20px_50px_rgba(59,130,246,0.15)] overflow-hidden group transform hover:-translate-y-2 transition-transform duration-500"
                        >
                            {/* Animated Background Pulse */}
                            <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-50 blur-[80px] rounded-full transition-all duration-700"></div>

                            <div className="absolute top-0 right-0 p-8 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700">
                                <FaShieldAlt className="text-blue-100 text-6xl drop-shadow-sm" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-10 flex items-center gap-4 uppercase tracking-widest">
                                <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] animate-pulse"></div> Sovereign Intelligence
                            </h3>
                            <div className="space-y-8 relative z-10">
                                {[
                                    { l: "Processing Speed", v: "100x Accelerated", p: "95%", c: "from-blue-500 to-cyan-400" },
                                    { l: "Strategic Depth", v: "Neural/Dynamic", p: "88%", c: "from-indigo-500 to-blue-400" },
                                    { l: "Reliability", v: "Predictive Edge", p: "99.9%", c: "from-cyan-500 to-teal-400" },
                                    { l: "Sovereignty", v: "100% Indigenous", p: "100%", c: "from-blue-600 to-indigo-400" }
                                ].map((item, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between text-sm mb-3">
                                            <span className="text-blue-600 font-bold uppercase tracking-wider">{item.l}</span>
                                            <span className="text-slate-800 font-extrabold tracking-wider">{item.v}</span>
                                        </div>
                                        <div className="h-2 bg-blue-50 rounded-full overflow-hidden border border-blue-100/50">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: item.p }}
                                                transition={{ duration: 1.5, delay: i * 0.15, ease: 'easeOut' }}
                                                className={`h-full bg-gradient-to-r ${item.c} rounded-full relative overflow-hidden`}
                                            >
                                                <div className="absolute top-0 left-0 w-full h-full bg-white/30 animate-shimmer" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)' }}></div>
                                            </motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SHIVA UNDER THE HOOD - 3D LAYERED ARCHITECTURE */}
            <ShivaTechStack />

            {/* DEPLOYMENT AGNOSTICISM - CROSS-PLATFORM STRENGTH */}
            <DeploymentAgnosticism />

            {/* Demo Section */}
            <section className="relative py-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white border border-slate-200 p-12 rounded-3xl text-center shadow-xl"
                    >
                        <FaFlask className="text-6xl text-blue-600 mx-auto mb-6" />
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">
                            Deploy Sovereign Intelligence
                        </h2>
                        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                            Experience the 100x advantage of neural-driven strategic operations.
                            Secure. Autonomous. Mission-Ready.
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 px-10 py-5 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-all duration-300 hover:scale-105 shadow-xl"
                        >
                            Request Tactical Demo <FaArrowRight />
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

const ShivaTechStack = () => {
    const layers = [
        { title: "Application Interface", desc: "Unified tactical dashboard & operator controls.", color: "bg-indigo-50", border: "border-indigo-100", text: "text-indigo-600", img: "stack_app.png" },
        { title: "Mission Logic", desc: "Autonomous pathfinding & threat classification.", color: "bg-blue-50", border: "border-blue-100", text: "text-blue-600", img: "stack_logic.png" },
        { title: "Sovereign OS / Firmware", desc: "Indigenous RTOS with hardware-level encryption.", color: "bg-slate-50", border: "border-slate-200", text: "text-slate-600", img: "stack_os.png" },
        { title: "Hardware Core (SHIVA)", desc: "High-performance edge computing silicon.", color: "bg-white", border: "border-slate-300", text: "text-slate-900", img: "stack_hardware.png" }
    ];

    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % layers.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [layers.length]);

    return (
        <section className="py-24 md:py-40 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-4 block">Under the Hood</span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                            The Architecture <br />
                            <span className="text-blue-600">of Independence.</span>
                        </h2>
                        <p className="text-lg text-slate-500 font-medium mb-12">
                            Unlike legacy systems that layer foreign software on generic hardware, SHIVA is a vertically integrated stack where every layer is engineered for sovereign resilience.
                        </p>

                        <div className="space-y-6">
                            {layers.map((layer, i) => (
                                <motion.div
                                    key={i}
                                    onClick={() => setIndex(i)}
                                    className={`p-6 rounded-2xl border cursor-pointer transition-all duration-500 ${i === index ? `${layer.border} ${layer.color} shadow-lg translate-x-4` : 'border-transparent bg-transparent opacity-60'}`}
                                >
                                    <h4 className={`text-lg font-bold ${layer.text} mb-1 transition-transform`}>{layer.title}</h4>
                                    <p className="text-xs text-slate-500 font-medium">{layer.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="relative flex items-center justify-center pt-32 lg:pt-20">
                        <div className="relative w-full max-w-lg aspect-square perspective-1000">
                            {layers.map((layer, i) => {
                                const relIndex = (i - index + layers.length) % layers.length;

                                // Dynamic positions for a "cycled" feel
                                const pos = {
                                    opacity: relIndex === 0 ? 1 : 0.4 / relIndex,
                                    y: relIndex * -40,
                                    x: relIndex * 20,
                                    rotateX: 45,
                                    rotateZ: -15,
                                    scale: 1 - relIndex * 0.05,
                                    z: relIndex * -100,
                                    zIndex: layers.length - relIndex
                                };

                                return (
                                    <motion.div
                                        key={i}
                                        animate={pos}
                                        transition={{
                                            type: "spring",
                                            stiffness: 70,
                                            damping: 15
                                        }}
                                        className={`absolute inset-0 rounded-[4rem] shadow-[0_50px_100px_rgba(0,0,0,0.1)] overflow-hidden bg-white border border-slate-100`}
                                        style={{
                                            transformStyle: 'preserve-3d'
                                        }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none z-10" />

                                        <img
                                            src={require(`../assets/shiva/${layer.img}`)}
                                            alt={layer.title}
                                            className="w-full h-full object-cover rounded-[4rem]"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.parentNode.classList.add('flex', 'items-center', 'justify-center', 'bg-slate-50');
                                                e.target.parentNode.innerHTML = `<div class="text-center"><h3 class="text-sm font-black text-slate-400 uppercase tracking-widest">${layer.title}</h3></div>`;
                                            }}
                                        />

                                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                                    </motion.div>
                                );
                            })}

                            {/* Base Shadow */}
                            <motion.div
                                animate={{ opacity: 0.2, scale: 1.2 }}
                                className="absolute bottom-[-150px] left-1/2 -translate-x-1/2 w-[80%] h-20 bg-slate-900 blur-[80px] rounded-[100%] -z-10"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


const DeploymentAgnosticism = () => {
    const platforms = [
        { label: "Aerial UAVs", status: "Active", img: "platform_aerial.png", id: "A" },
        { label: "Ground UGVs", status: "Active", img: "platform_ground.png", id: "G" },
        { label: "Sea Vessels", status: "In-Port", img: "platform_sea.png", id: "S" },
        { label: "Fixed Turrets", status: "Ready", img: "platform_turret.png", id: "F" }
    ];

    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % platforms.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [platforms.length]);

    return (
        <section className="py-24 md:py-40 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-20 px-4">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Deploy Anywhere. Control Everything.</h2>
                    <p className="text-lg text-slate-500 font-medium italic">"One software core, zero re-coding for new platforms."</p>
                </div>

                <div className="relative h-[500px] flex items-center justify-center perspective-1000">
                    {platforms.map((p, i) => {
                        // Calculate position relative to index
                        const relIndex = (i - index + platforms.length) % platforms.length;

                        // Define position styles
                        const pos = {
                            opacity: relIndex === 0 ? 1 : relIndex === 1 || relIndex === platforms.length - 1 ? 0.4 : 0,
                            x: relIndex === 0 ? 0 : relIndex === 1 ? '50%' : relIndex === platforms.length - 1 ? '-50%' : 0,
                            z: relIndex === 0 ? 0 : -200,
                            scale: relIndex === 0 ? 1 : 0.8,
                            zIndex: relIndex === 0 ? 20 : 10
                        };

                        return (
                            <motion.div
                                key={i}
                                initial={false}
                                animate={pos}
                                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                                className="absolute w-full max-w-sm aspect-[4/5] bg-white rounded-[4.5rem] border border-slate-100 shadow-2xl overflow-hidden flex flex-col group cursor-pointer"
                                onClick={() => setIndex(i)}
                            >
                                <div className="h-2/3 relative overflow-hidden bg-slate-50 p-0 flex items-center justify-center">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.15)_0%,_transparent_70%)]" />
                                    <img
                                        src={require(`../assets/shiva/${p.img}`)}
                                        alt={p.label}
                                        className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-110 rounded-t-[4.5rem]"
                                        onError={(e) => { e.target.style.display = 'none'; }}
                                    />
                                </div>
                                <div className="flex-1 p-10 text-center flex flex-col justify-center bg-white relative z-20">
                                    <h4 className="text-2xl font-black text-slate-900 tracking-tight uppercase leading-none mb-2">{p.label}</h4>
                                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600/60">Deployment Active</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Progress Indicators */}
                <div className="flex justify-center gap-3 mt-12">
                    {platforms.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? 'w-12 bg-blue-600' : 'w-3 bg-slate-200 hover:bg-slate-300'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InnovationLab;
