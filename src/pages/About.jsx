import React from 'react';
import useSEO from '../hooks/useSEO';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    FaBullseye, FaFlag, FaMicrochip, FaArrowRight,
    FaShieldAlt, FaGlobeAsia, FaCheck, FaBrain,
    FaServer, FaLock, FaCogs
} from 'react-icons/fa';
import sovereignBg from '../assets/about/background.png';

const About = () => {
    useSEO({
        title: 'About NOVALISEO | Engineers of Sovereign Defence Intelligence',
        description: 'Learn how NOVALISEO engineers 100% indigenous, software-defined AI systems for strategic sectors, guaranteeing data sovereignty and operational superiority.',
    });
    const { scrollYProgress } = useScroll();
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
    const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

    const deliveryModels = [
        {
            icon: <FaBrain className="text-3xl text-blue-500" />,
            tag: "Sovereign Build",
            title: "Sovereign Intelligence Build",
            description: "We engineer a complete AI system from ground up — trained on your data, tuned to your domain, verified against your requirements — then deployed entirely within your infrastructure.",
            features: ["Built to your mission spec", "Zero third-party dependency", "Full source & model ownership"]
        },
        {
            icon: <FaServer className="text-3xl text-indigo-500" />,
            tag: "Intelligence Transfer",
            title: "Intelligence Transfer & Handover",
            description: "We design, build, validate, and deploy — then formally hand over. You receive the full system: models, pipelines, documentation, and all IP. We exit. You operate independently.",
            features: ["Complete IP handover", "Operator training included", "No lock-in, ever"]
        },
        {
            icon: <FaLock className="text-3xl text-cyan-500" />,
            tag: "Embedded Ops",
            title: "Embedded Intelligence Operations",
            description: "Our engineers embed within your organisation for a defined engagement — building, refining, and running intelligence systems alongside your team inside your sovereign perimeter.",
            features: ["On-site or private-network only", "Continuous model refinement", "Capability transfer to your team"]
        },
        {
            icon: <FaCogs className="text-3xl text-slate-600" />,
            tag: "Sovereign Substrate",
            title: "Sovereign Intelligence Substrate",
            description: "A full foundational intelligence layer — data pipelines, inference engines, monitoring, and decision interfaces — architected as the permanent backbone of your operations.",
            features: ["End-to-end architecture", "Modular & extensible", "Air-gap compatible by design"]
        }
    ];

    const values = [
        {
            icon: <FaBullseye className="text-2xl text-blue-500" />,
            title: "Our Mission",
            description: "To empower India's strategic sectors with sovereign, software-defined intelligence that ensures technological independence and operational superiority.",
        },
        {
            icon: <FaFlag className="text-2xl text-indigo-500" />,
            title: "Our Vision",
            description: "To become the leading provider of mission-critical AI systems for defence and industrial sectors — built and deployed entirely within India's borders.",
        },
        {
            icon: <FaMicrochip className="text-2xl text-cyan-500" />,
            title: "Core Purpose",
            description: "Bridge the gap between advanced computational engineering and real-world tactical intelligence applications, delivering the decisive edge where it matters most.",
        }
    ];

    const principles = [
        "Atmanirbhar Bharat: Strategic Autonomy",
        "Sovereign Intelligence: Private & Secure",
        "Tactical Excellence: Mission Critical Focus",
        "Zero Dependency: Fully Indigenous Stack"
    ];

    return (
        <div className="min-h-screen bg-white relative overflow-hidden font-sans">

            {/* ─── HERO: Full-bleed background image ─── */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <motion.div style={{ y: y1 }} className="absolute inset-0 scale-110">
                    <img
                        src={sovereignBg}
                        alt="Neural Intelligence Network"
                        className="w-full h-full object-cover"
                    />
                    {/* Layered overlay for readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-950/30 via-transparent to-blue-950/20" />
                </motion.div>

                {/* Subtle grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

                {/* Hero Content */}
                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8">
                            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                            <span className="text-blue-300 font-semibold text-sm tracking-widest uppercase">Sovereign Intelligence Engineering</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            Sovereign Intelligence<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                                Engineered for India
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-medium leading-relaxed mb-12">
                            NOVALISEO engineers sovereign intelligence systems for defence and critical industries.
                            We don't sell subscriptions — we deliver intelligence infrastructure that your organisation owns and controls.
                        </p>

                        {/* Stats Row */}
                        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12">
                            {[
                                { value: "100%", label: "Indigenous Stack" },
                                { value: "0", label: "Cloud Dependency" },
                                { value: "Build & Transfer", label: "Our Frameworks" },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + i * 0.15 }}
                                    className="text-center"
                                >
                                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                                    <div className="text-white/50 text-sm font-medium tracking-wider uppercase">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold text-base transition-all duration-300 hover:scale-105 shadow-xl shadow-blue-900/50"
                            >
                                Partner with Us <FaArrowRight />
                            </Link>
                            <Link
                                to="/innovation-lab"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white rounded-full font-bold text-base transition-all duration-300"
                            >
                                Explore Our Research
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    style={{ opacity }}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                    <div className="w-[1px] h-12 bg-gradient-to-b from-blue-400 to-transparent mx-auto" />
                </motion.div>
            </section>

            {/* ─── DELIVERY MODELS ─── */}
            <section className="relative py-28 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <div className="inline-block mb-4 px-5 py-2 bg-blue-50 border border-blue-100 rounded-full">
                            <span className="text-blue-600 font-semibold text-sm">How We Work</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">
                            Engineered for <span className="gradient-text">Ownership</span>
                        </h2>
                        <p className="text-xl text-slate-500 max-w-3xl mx-auto">
                            Every system we build is engineered to your mission, deployed within your perimeter,
                            and handed over as yours — no subscriptions, no external dependencies, no compromise.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {deliveryModels.map((model, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="group bg-white border border-slate-200 hover:border-blue-300 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-blue-50 transition-all duration-400"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors">
                                        {model.icon}
                                    </div>
                                    <div className="flex-1">
                                        <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full mb-3 tracking-wider uppercase">
                                            {model.tag}
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-3">{model.title}</h3>
                                        <p className="text-slate-500 leading-relaxed mb-5">{model.description}</p>
                                        <ul className="space-y-2">
                                            {model.features.map((feat, fi) => (
                                                <li key={fi} className="flex items-center gap-2 text-sm text-slate-600">
                                                    <FaCheck className="text-blue-500 flex-shrink-0 text-xs" />
                                                    {feat}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── CORE VALUES ─── */}
            <section className="relative py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">
                            What Drives <span className="gradient-text">NOVALISEO</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.7 }}
                                className="bg-white rounded-3xl p-10 border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
                            >
                                <div className="w-14 h-14 mx-auto mb-6 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                                <p className="text-slate-500 leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── MANIFESTO ─── */}
            <section className="relative py-28 overflow-hidden">
                {/* Background image echo */}
                <div className="absolute inset-0 pointer-events-none">
                    <img
                        src={sovereignBg}
                        alt=""
                        className="w-full h-full object-cover opacity-[0.06] scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-white/95" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 shadow-2xl overflow-hidden relative border border-slate-800">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.15)_0%,transparent_60%)] pointer-events-none" />
                        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl pointer-events-none" />

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            {/* Left */}
                            <div>
                                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                                    <FaShieldAlt className="text-blue-400 text-sm" />
                                    <span className="text-blue-300 text-xs font-bold tracking-widest uppercase">Our Principles</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                                    Built for the<br />
                                    <span className="text-blue-400">Long Game.</span>
                                </h2>
                                <p className="text-slate-400 text-lg leading-relaxed mb-10">
                                    We combine India's brightest engineering minds with a relentless focus on sovereign intelligence.
                                    Our systems don't just solve problems — they give you permanent, ownable, strategic capability.
                                </p>
                                <div className="space-y-5">
                                    {principles.map((tag, i) => (
                                        <div key={i} className="flex items-center gap-4">
                                            <div className="w-8 h-[1px] bg-blue-500 flex-shrink-0" />
                                            <span className="text-white/80 font-medium text-sm">{tag}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right */}
                            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10">
                                <div className="space-y-10">
                                    {[
                                        {
                                            color: "bg-blue-500",
                                            title: "Computational Superiority",
                                            desc: "Intelligence-driven engineering that delivers precision outcomes with zero tolerance for failure."
                                        },
                                        {
                                            color: "bg-indigo-500",
                                            title: "Edge Sovereignty",
                                            desc: "Lightweight, high-performance models that run where you need them — without external dependencies."
                                        },
                                        {
                                            color: "bg-cyan-500",
                                            title: "Strategic Partnership",
                                            desc: "Deep collaboration with national and strategic organizations to close capability gaps, permanently."
                                        }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className={`w-2 h-2 ${item.color} rounded-full flex-shrink-0 mt-2`} />
                                            <div>
                                                <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                                                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── INDIA BADGE ROW ─── */}
            <section className="py-12 bg-white border-t border-slate-100">
                <div className="max-w-5xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16">
                    {[
                        { icon: <FaGlobeAsia className="text-blue-600 text-xl" />, label: "Made in India" },
                        { icon: <FaShieldAlt className="text-blue-600 text-xl" />, label: "Mission Ready" },
                        { icon: <FaLock className="text-blue-600 text-xl" />, label: "Zero Cloud Dependency" },
                        { icon: <FaBrain className="text-blue-600 text-xl" />, label: "Intelligence Owned by You" },
                    ].map((badge, i) => (
                        <div key={i} className="flex items-center gap-3 text-slate-700 font-semibold text-sm">
                            {badge.icon}
                            {badge.label}
                        </div>
                    ))}
                </div>
            </section>

            {/* ─── CTA ─── */}
            <section className="relative py-28 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white border border-slate-200 rounded-3xl p-16 shadow-xl"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            Ready to Own Your<br />
                            <span className="gradient-text">Intelligence Layer?</span>
                        </h2>
                        <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                            No subscriptions. No lock-in. We engineer AI systems you own and operate within your sovereign infrastructure.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 px-10 py-5 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl"
                            >
                                Start the Conversation <FaArrowRight />
                            </Link>
                            <Link
                                to="/services"
                                className="inline-flex items-center gap-2 px-10 py-5 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 rounded-full font-bold text-lg transition-all duration-300"
                            >
                                See Our Solutions
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;
