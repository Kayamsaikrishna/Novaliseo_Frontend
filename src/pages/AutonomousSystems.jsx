import React, { useRef } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import {
    FaShieldAlt, FaSatellite, FaCogs, FaProjectDiagram,
    FaUserShield, FaArrowRight, FaLock,
    FaBroadcastTower, FaGlobeAsia, FaMicrochip, FaBrain, FaNetworkWired,
    FaBalanceScale, FaHistory, FaCheckCircle, FaCheck, FaTools, FaCompass, FaRocket, FaEye, FaBolt,
    FaMapMarkedAlt, FaWind, FaTimes, FaLayerGroup, FaServer, FaCode, FaVrCardboard
} from 'react-icons/fa';
import { GiRadarSweep, GiDefensePayload, GiOrbit } from 'react-icons/gi';
import { MdSecurity, MdRadar } from 'react-icons/md';
import { RiSpyLine } from 'react-icons/ri';
import { TechnologyMarquee } from './InnovationLab';

// Local Strategic Assets (Hero preserved as Unsplash per user request)
import CoreImg from '../assets/autonomous-systems/sovereign_intelligence_abstract_v2_1771334796018.png';
import ResilienceImg from '../assets/autonomous-systems/Boarder Security.png';
import MeshImg from '../assets/autonomous-systems/strategic_mesh_india_minimalist.png';
import MapImg from '../assets/autonomous-systems/strategic_map_visualization_1771333852873.png';
import FlightImg from '../assets/autonomous-systems/sovereign_hero_majestic_refined_1771334252324.png';
import OpsImg1 from '../assets/autonomous-systems/defence_hero_strategic_1771334627855.png';
import OpsImg2 from '../assets/autonomous-systems/sovereign_hero_v2_abstract_1771334110754.png';
import OpsImg3 from '../assets/autonomous-systems/sovereign_strat_hero_abstract_1771334310686.png';
import ResearchImg from '../assets/autonomous-systems/indigenous_core_abstract_v2_1771334339840.png';
import IntelImg from '../assets/autonomous-systems/sovereign_intelligence_abstract_v2_1771334796018.png'; // Added as per instruction

// User provided card images
import CardDeniedNavImg from '../assets/autonomous-systems/defence_card_denied_nav_1771344705855.png';
import CardAttitudeImg from '../assets/autonomous-systems/defence_card_attitude_control_1771344808087.png';
import CardLatencyImg from '../assets/autonomous-systems/defence_card_low_latency_1771344914035.png';
import CardEfficiencyImg from '../assets/autonomous-systems/defence_card_efficiency_1771344362161.png';

// Additional Unique Assets for Differentiations
import SensorImg from '../assets/autonomous-systems/threat.png';
import GnssImg from '../assets/autonomous-systems/gnss_visual_tracking.png';
import RealTimeMappingImg from '../assets/autonomous-systems/real_time_mapping.png';


/**
 * NOVALISEO AUTONOMOUS SOFTWARE BASED - SOVEREIGN EXCELLENCE (V6.0)
 * Focus: High-Information Density, Custom SVG Visualizations, National Security.
 * Identity: Atmanirbhar Bharat, Strategic Autonomy, Tactical Resilience.
 * Compliance: Zero technical secrets leaks (metrics/architecture names minimized).
 */

const AutonomousSystems = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 25, restDelta: 0.001 });

    return (
        <div ref={containerRef} className="relative bg-[#020617] min-h-screen text-slate-300 font-sans selection:bg-blue-500/30">
            <SEO
                title="SHIVA Platform | Sovereign Autonomy & Tactical AI For Autonomous Software Based"
                description="The SHIVA Platform is India's first unified autonomy hardware layer, providing GNSS-denied navigation, drone swarm intelligence, and post-quantum security."
            />

            {/* 1. SHIVA HERO - INDIA'S FIRST INDIGENOUS AUTONOMY PLATFORM */}
            <SHIVAHero />

            {/* 2. THE STRATEGIC GAP - MODERN AUTONOMY IS VULNERABLE */}
            <StrategicGap />

            {/* 3. THE THREE PILLARS OF INDIGENOUS STRENGTH */}
            <StrategicCapabilities />

            {/* 4. THE SOVEREIGN PRISM - ONE CORE. FIVE MISSIONS. */}
            <ShivaPrism />

            {/* 5. SHIVA MISSION PROFILES - ARCHITECTURAL DEPTH */}
            <ShivaProfiles />
            <TechnicalStackSection />

            {/* 6. SOVEREIGN CORE VISUALIZATION */}
            <SovereignCoreVisualization />

            {/* 4. TACTICAL RESILIENCE & MISSION DEPTH */}
            <TacticalResilience />

            {/* 5. STRATEGIC MESH VISUALIZATION */}
            <StrategicMeshVisualization />

            {/* 6. FUTURE WARFARE R&D - ACTIVE DEVELOPMENT */}
            <FutureWarfarePipeline />

            {/* 7. OPERATIONAL READINESS SECTORS */}
            <OperationalReadiness />

            {/* 8. INSTITUTIONAL SECURITY & COMPLIANCE */}
            <SecurityCompliance />

            {/* 9. PARTNERSHIP CALL TO ACTION */}
            <PartnershipCTA />


        </div>
    );
};

/* --- SUB-COMPONENTS --- */

/* --- SHIVA PLATFORM COMPONENTS --- */

const SHIVAHero = () => {
    return (
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-x-hidden">
            {/* Full Screen Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={require('../assets/shiva/sovereign_defence_hero_v3.png')}
                    alt="SHIVA Strategic Background"
                    className="w-full h-full object-cover"
                />
                {/* Advanced Tactical Overlay - Darkened for Focus */}
                <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-transparent to-white" />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center pt-32 pb-24 min-h-screen lg:min-h-[auto]">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] md:leading-[1] tracking-tighter mb-8 drop-shadow-2xl">
                        The Sovereign <br />
                        <span className="text-blue-400">Autonomy <br className="hidden md:block" /> Stack.</span>
                    </h1>

                    <p className="text-xl md:text-2xl lg:text-3xl text-slate-100 font-medium leading-relaxed max-w-xl mb-10 drop-shadow-lg">
                        India's First Indigenous, Unified Autonomy Chipset Platform. <br />
                        <span className="text-slate-300 font-normal mt-4 md:mt-6 block border-l-4 border-blue-500 pl-4 md:pl-6 italic text-lg md:text-xl">Engineering Strategic Independence.</span>
                    </p>

                    <div className="flex flex-col sm:flex-row flex-wrap gap-6 items-start sm:items-center">
                        <Link to="/contact" className="group px-8 py-4 md:px-10 md:py-5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/30 flex items-center justify-center gap-4 w-full sm:w-auto text-center">
                            Deploy SHIVA Core <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                        <div className="text-xs md:text-[14px] font-black uppercase tracking-[0.1em] md:tracking-[0.2em] text-white backdrop-blur-xl bg-blue-600/40 px-6 py-4 md:px-8 md:py-5 rounded-2xl border border-blue-400/50 shadow-[0_0_50px_rgba(59,130,246,0.3)] w-full sm:w-auto">
                            <span className="block mb-1">100% INDIGENOUS IP</span>
                            <span className="text-blue-300 text-[10px] md:text-xs tracking-wider">ZERO CLOUD DEPENDENCY</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    className="relative hidden lg:block"
                >
                    <div className="relative z-10 w-full aspect-square flex items-center justify-center p-6 group">
                        {/* Futuristic Chipset Visual with Glassmorphism */}
                        <div className="absolute inset-0 bg-white/5 backdrop-blur-2xl rounded-[4rem] border border-white/10 shadow-[0_0_120px_rgba(59,130,246,0.3)]" />

                        <div className="relative w-full h-full flex items-center justify-center">
                            {/* Animated HUD Rings */}
                            {[1, 2, 3].map((i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        rotate: i % 2 === 0 ? 360 : -360,
                                        opacity: [0.1, 0.4, 0.1]
                                    }}
                                    transition={{ duration: 15 / i, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 border-[2px] border-blue-400/20 border-dashed rounded-full"
                                    style={{ margin: `${i * 6}%` }}
                                />
                            ))}

                            {/* Central Chip Visual - Scaled for Focus */}
                            <div className="relative w-5/6 h-5/6 flex items-center justify-center">
                                <img
                                    src={require('../assets/shiva/chip_main.jpg')}
                                    alt="SHIVA Central Core"
                                    className="w-full h-full object-cover drop-shadow-[0_0_100px_rgba(59,130,246,0.5)] relative z-20 group-hover:scale-105 transition-transform duration-700 rounded-[3rem]"
                                    onError={(e) => { e.target.style.display = 'none'; }}
                                />
                                <div className="absolute inset-[-10%] bg-blue-500/20 blur-[80px] rounded-full animate-pulse" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const StatusNode = ({ top, right, bottom, left, label, active }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        style={{ top, right, bottom, left }}
        className="absolute z-20 flex items-center gap-3 px-3 py-1.5 bg-white/80 backdrop-blur-md rounded-lg border border-slate-100 shadow-lg"
    >
        <div className={`w-2 h-2 rounded-full ${active ? 'bg-blue-500 animate-pulse' : 'bg-slate-300'}`} />
        <span className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">{label}</span>
    </motion.div>
);

const TechnicalStackSection = () => {
    return (
        <section className="py-24 md:py-40 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                        The Technical <span className="text-blue-600">Stack.</span>
                    </h2>
                    <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
                        A vertically integrated intelligence ecosystem where every layer is engineered for sovereign resilience and mission-critical performance.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 bg-slate-50 p-4">
                            <img
                                src={require('../assets/shiva/shiva_technical_stack_elite.png')}
                                alt="SHIVA Technical Stack"
                                className="w-full h-auto object-cover rounded-[2rem]"
                                onError={(e) => { e.target.style.display = 'none'; }}
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {[
                            { title: "Application layer", desc: "Unified tactical dashboard & operator controls for multi-domain command.", color: "bg-blue-600" },
                            { title: "Mission Logic", desc: "Autonomous pathfinding, threat classification & tactical maneuvers.", color: "bg-indigo-600" },
                            { title: "Sovereign OS / RTOS", desc: "Hardened, real-time operating system with hardware-level encryption.", color: "bg-slate-700" },
                            { title: "Hardware Core (SHIVA)", desc: "Indigenous high-performance edge computing silicon and sensor fusion.", color: "bg-blue-500" }
                        ].map((layer, i) => (
                            <div key={i} className="flex gap-6 items-start group">
                                <div className={`mt-2 w-3 h-3 rounded-full ${layer.color} shadow-[0_0_15px_rgba(59,130,246,0.5)] flex-shrink-0 transition-transform group-hover:scale-125`} />
                                <div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-2 uppercase tracking-tight">{layer.title}</h4>
                                    <p className="text-slate-500 font-medium leading-relaxed">{layer.desc}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const StrategicGap = () => {
    return (
        <section className="py-24 md:py-40 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <div className="relative order-2 lg:order-1">
                        {/* Vulnerability Visualizer */}
                        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-slate-200 relative overflow-hidden group">
                            <div className="mb-8 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full bg-red-500 animate-ping" />
                                    <span className="text-xs font-black text-red-600 uppercase tracking-widest">Signal Degraded</span>
                                </div>
                                <span className="text-[10px] font-mono text-slate-400">0xDEADBEEF // CRITICAL_FAILURE</span>
                            </div>

                            <div className="space-y-6">
                                <VulnerabilityBar label="GPS / GNSS Signal" status="Interference Detected" percent={85} color="red" />
                                <VulnerabilityBar label="Cloud Connectivity" status="Connection Severed" percent={100} color="orange" />
                                <VulnerabilityBar label="Sensor Latency" status="Critical Delay" percent={65} color="red" />
                            </div>

                            <div className="mt-12 p-6 bg-red-50 rounded-2xl border border-red-100 italic text-red-800 text-sm font-medium">
                                "The Strategic Gap: Modern autonomy is vulnerable because it depends on signals that can be jammed and clouds that can be cut."
                            </div>

                            {/* Glitch Overlay */}
                            <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 flex items-center justify-center text-4xl font-black text-red-600/20 uppercase tracking-[1em] rotate-12">
                                Vulnerable
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <span className="text-red-600 font-bold tracking-widest uppercase text-xs mb-4 block">The Critical Vulnerability</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                            Modern Autonomy is <br />
                            <span className="text-red-600 italic">Structurally Fragile.</span>
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
                            <GapPoint
                                title="GPS Interference"
                                desc="Platforms go blind in contested zones when GNSS is manipulated or denied."
                            />
                            <GapPoint
                                title="Cloud Dependency"
                                desc="Systems fail instantly when tactical communications are severed."
                            />
                            <GapPoint
                                title="Foreign AI Stacks"
                                desc="Strategic sovereignty compromised by undocumented hardware risks."
                            />
                            <GapPoint
                                title="High Latency"
                                desc="Remote processing causes fatal lag in high-speed maneuvers."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const VulnerabilityBar = ({ label, status, percent, color }) => (
    <div className="space-y-2">
        <div className="flex justify-between items-end">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{label}</span>
            <span className={`text-[10px] font-black text-${color}-600 uppercase`}>{status}</span>
        </div>
        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${percent}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "circOut" }}
                className={`h-full bg-${color}-500`}
            />
        </div>
    </div>
);

const GapPoint = ({ title, desc }) => (
    <div className="border-l-2 border-slate-200 pl-6 py-2 hover:border-red-500 transition-colors duration-300">
        <h4 className="text-lg font-bold text-slate-900 mb-2">{title}</h4>
        <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
    </div>
);

const ShivaPrism = () => {
    return (
        <section className="py-24 md:py-40 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto mb-20"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tighter px-4">
                        One Sovereign Core. <br className="hidden sm:block" />
                        <span className="text-blue-600">Five Mission Profiles.</span>
                    </h2>
                    <p className="text-lg text-slate-500 font-medium">Unified AI core splitting into task-specific doctrines.</p>
                </motion.div>

                <div className="relative max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 bg-slate-50"
                    >
                        <img
                            src={require('../assets/shiva/prism.jpg')}
                            alt="SHIVA Mission Prism"
                            className="w-full h-auto object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 text-left">
                    <PrismFeature icon={<FaLock />} title="Sovereign Control" desc="Mission logic executed purely on local silicon." />
                    <PrismFeature icon={<FaGlobeAsia />} title="Indigenously Coded" desc="100% Indian IP, zero external dependencies." />
                    <PrismFeature icon={<FaLayerGroup />} title="Any Platform" desc="Seamless deployment across Air, Land, and Sea." />
                </div>
            </div>
        </section>
    );
};

const PrismFeature = ({ icon, title, desc }) => (
    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
        <div className="text-blue-600 text-2xl mb-4">{icon}</div>
        <h4 className="text-lg font-bold text-slate-900 mb-2">{title}</h4>
        <p className="text-sm text-slate-500 leading-relaxed font-medium">{desc}</p>
    </div>
);

const ShivaTacticalHUD = () => {
    const [index, setIndex] = React.useState(0);
    const profiles = [
        {
            id: 'S',
            title: 'Simple',
            focus: 'Commercial & Routine Logistics',
            chip: 'chip_s.jpg',
            color: 'bg-yellow-500',
            text: 'text-yellow-600',
            hex: '#EAB308',
            useCases: ['Goods delivery', 'Automated takeoff/landing', 'Infrastructure inspection'],
            caps: ['GNSS-based navigation', 'Standard obstacle avoidance', 'Mission replay']
        },
        {
            id: 'H',
            title: 'Hyper-Critical',
            focus: 'Military-Grade Combat',
            chip: 'chip_h.jpg',
            color: 'bg-red-600',
            text: 'text-red-700',
            hex: '#DC2626',
            useCases: ['Border patrol', 'Combat resupply', 'Tactical payload deployment'],
            caps: ['Encrypted communication stack', 'Anti-interference resilience', 'Hardened fail-safes']
        },
        {
            id: 'I',
            title: 'Intelligent',
            focus: 'GNSS-Denied & Dynamic Environments',
            chip: 'chip_i.jpg',
            color: 'bg-blue-600',
            text: 'text-blue-700',
            hex: '#2563EB',
            useCases: ['Urban canyons', 'Indoor navigation', 'Swarm collaboration'],
            caps: ['Visual-Inertial SLAM', 'Onboard AI acceleration', 'Sensor fusion engine']
        },
        {
            id: 'V',
            title: 'Vulnerable Zone',
            focus: 'High-Threat & Hazardous Zones',
            chip: 'chip_v.jpg',
            color: 'bg-slate-600',
            text: 'text-slate-700',
            hex: '#475569',
            useCases: ['Disaster response', 'Mining risk inspection', 'Signal-compromised regions'],
            caps: ['GNSS disruption detection', 'Redundant navigation', 'Terrain-adaptive routing']
        },
        {
            id: 'A',
            title: 'Adaptive Autonomous Software Based',
            focus: 'Strategic Counter-Threat',
            chip: 'chip_a.jpg',
            color: 'bg-indigo-600',
            text: 'text-indigo-700',
            hex: '#4F46E5',
            useCases: ['Counter-UAV operations', 'Autonomous autonomous software based patrol', 'Strategic deployment'],
            caps: ['Autonomous threat classification', 'Defensive maneuver algorithms', 'Swarm protocols']
        }
    ];

    React.useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % profiles.length);
        }, 8000);
        return () => clearInterval(timer);
    }, [profiles.length]);

    const active = profiles[index];

    return (
        <section className="py-16 md:py-24 lg:py-40 bg-white relative overflow-hidden">
            {/* Cinematic Background Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_50%_50%,_${active.hex}11_0%,_transparent_60%)] transition-colors duration-1000`} />

                {/* Horizontal Scanline - REMOVED for clean look */}
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* LEFT: Meta-Data & Controls */}
                    <div className="w-full lg:w-1/4 order-2 lg:order-1">
                        <div className="space-y-12">
                            <div className="space-y-4">
                                <p className="font-mono text-[10px] text-slate-400 tracking-[0.4em] uppercase">System Doctrine</p>
                                <div className="h-0.5 w-12 bg-blue-600" />
                                <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">
                                    SHIVA <br />
                                    <span className="text-blue-600">{active.id}</span>
                                </h2>
                            </div>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    {profiles.map((p, i) => (
                                        <button
                                            key={p.id}
                                            onClick={() => setIndex(i)}
                                            className={`w-full py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all duration-300 border ${i === index
                                                ? `bg-slate-900 border-slate-900 text-white shadow-xl`
                                                : 'bg-white border-slate-100 text-slate-400 hover:border-slate-300'
                                                }`}
                                        >
                                            {p.id}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CENTER: Heroic Chip Visual */}
                    <div className="w-full lg:flex-1 order-1 lg:order-2 flex justify-center relative py-20">
                        <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
                            {/* Animated Background Aura */}
                            <motion.div
                                key={`aura-${index}`}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 1 }}
                                className={`absolute inset-0 rounded-full blur-[100px] opacity-20 ${active.color}`}
                            />

                            {/* Rotating HUD Elements */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-[-40px] border border-slate-100 border-dashed rounded-full"
                            />

                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-[-20px] border-[2px] border-blue-500/5 rounded-full"
                            />

                            {/* The Chip Centerpiece */}
                            <motion.div
                                key={`chip-${active.id}`}
                                initial={{ y: 20, opacity: 0, scale: 0.9 }}
                                animate={{ y: 0, opacity: 1, scale: 1 }}
                                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                                className="relative z-10 w-full h-full flex items-center justify-center"
                            >
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(255,255,255,0.8)_0%,_transparent_50%)] z-10 pointer-events-none" />
                                <img
                                    src={(() => {
                                        try {
                                            const base = active.chip.split('.')[0];
                                            try {
                                                return require(`../assets/shiva/${base}.jpg`);
                                            } catch (e) {
                                                try {
                                                    return require(`../assets/shiva/${base}.png`);
                                                } catch (e2) {
                                                    console.warn(`Asset ${base} not found as .jpg or .png`);
                                                    return "";
                                                }
                                            }
                                        } catch (e) {
                                            return "";
                                        }
                                    })()}
                                    alt={active.title}
                                    className="w-full h-full object-cover rounded-[4.5rem]"
                                    onError={(e) => { e.target.style.display = 'none'; }}
                                />
                                <div className={`absolute inset-0 border border-white/40 rounded-[4.5rem] shadow-inner z-30 pointer-events-none`} />
                            </motion.div>
                        </div>
                    </div>

                    {/* RIGHT: Data Panels */}
                    <div className="w-full lg:w-1/3 order-3">
                        <motion.div
                            key={`content-${active.id}`}
                            initial={{ x: 30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-12"
                        >
                            <div className="space-y-4">
                                <h3 className="text-4xl font-black text-slate-900 tracking-tight uppercase leading-none">{active.title}</h3>
                                <p className={`text-sm font-mono font-black uppercase tracking-[0.4em] ${active.text}`}>{active.focus}</p>
                            </div>

                            <div className="space-y-12">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <h5 className="font-mono text-[10px] text-slate-400 uppercase tracking-[0.3em] whitespace-nowrap">Tactical Operations</h5>
                                        <div className="h-[1px] w-full bg-slate-100" />
                                    </div>
                                    <ul className="space-y-4">
                                        {active.useCases.map((u, i) => (
                                            <li key={i} className="flex gap-4 items-center">
                                                <div className={`w-1.5 h-1.5 rounded-full ${active.color}`} />
                                                <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">{u}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <h5 className="font-mono text-[10px] text-slate-400 uppercase tracking-[0.3em] whitespace-nowrap">Core Capabilities</h5>
                                        <div className="h-[1px] w-full bg-slate-100" />
                                    </div>
                                    <ul className="space-y-5">
                                        {active.caps.map((c, i) => (
                                            <li key={i} className="flex items-center justify-between group transition-colors">
                                                <span className="text-[11px] font-black text-slate-500 uppercase tracking-wider">{c}</span>
                                                <div className={`w-1 h-4 rounded-full ${active.color} opacity-20 group-hover:opacity-100 transition-opacity`} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

const ShivaProfiles = ShivaTacticalHUD;
const StrategicCapabilities = () => {
    const caps = [
        {
            title: "Denied Environment Operations",
            desc: "Full operational autonomy in contested theaters where GNSS and external comms are compromised. Our visual-inertial intelligence maintains mission continuity with sub-meter precision.",
            icon: <GiRadarSweep />
        },
        {
            title: "Decentralized Mesh",
            desc: "Self-healing swarm communication nodes that maintain a unified tactical picture even under severe signal interference or node loss.",
            icon: <FaNetworkWired />
        },
        {
            title: "Ultra-Low Latency",
            desc: "On-edge processing that delivers immediate command decisions, reducing the OODA loop to fractions of a second without reliance on vulnerable remote clouds.",
            icon: <FaMicrochip />
        }
    ];

    return (
        <section className="py-24 md:py-40 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16 md:mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight"
                    >
                        Strategic Foundations
                    </motion.h2>
                </div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20"
                >
                    {caps.map((cap, i) => (
                        <motion.div
                            key={i}
                            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                            className="group relative"
                        >
                            <div className="relative mb-10 w-24 h-24 flex items-center justify-center">
                                <div className="absolute inset-0 bg-blue-500/5 rounded-3xl group-hover:bg-blue-500/10 transition-colors duration-500 rotate-6 border border-blue-100 group-hover:rotate-12"></div>
                                <div className="absolute inset-0 bg-white rounded-3xl shadow-xl shadow-blue-100/20 border border-slate-100 group-hover:shadow-blue-200/50 transition-all duration-500"></div>
                                <div className="relative text-blue-600 text-4xl group-hover:scale-110 group-hover:rotate-[-3deg] transition-transform duration-500">
                                    {cap.icon}
                                </div>
                                <motion.div
                                    animate={{ opacity: [0.3, 0.7, 0.3] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full"
                                />
                            </div>
                            <h4 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-slate-900 tracking-tight">{cap.title}</h4>
                            <p className="text-slate-500 leading-relaxed font-medium text-base md:text-lg">
                                {cap.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

const SovereignCoreVisualization = () => {
    return (
        <section className="py-24 md:py-40 bg-slate-50 border-y border-slate-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-4 block flex items-center gap-2"><MdSecurity /> The Sovereign Brain</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 md:mb-10 tracking-tight text-slate-900 leading-tight">
                        Intelligence Built <br />
                        <span className="text-blue-700 italic">Within Borders.</span>
                    </h2>
                    <p className="text-base md:text-lg text-slate-600 mb-8 md:mb-10 leading-relaxed font-medium">
                        Our cognitive stack is developed entirely in India to ensure absolute data sovereignty.
                        Unlike black-box imports, every line of our autonomous logic is verifiable, secure,
                        and optimized for national strategic requirements.
                    </p>
                    <div className="space-y-4">
                        <FeatureMetric label="Encryption Standard" val="Post-Quantum Secure" />
                        <FeatureMetric label="Deployment Model" val="Tactical Edge-Only" />
                        <FeatureMetric label="Code Origin" val="100% Indigenous" />
                    </div>
                </motion.div>

                <div className="relative flex justify-center">
                    {/* CUSTOM SVG SOVEREIGN CORE VISUALIZATION */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="relative w-full max-w-lg aspect-square bg-white rounded-full shadow-2xl border border-slate-100 flex items-center justify-center overflow-hidden"
                    >
                        <img src={CoreImg} alt="Sovereign Core" className="w-full h-full object-contain p-2 animate-spin-slow" />
                        {/* Lock overlay removed per user request for better visibility */}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const TacticalResilience = () => {
    return (
        <section className="py-24 md:py-40 bg-white">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-32 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="order-2 lg:order-1 relative"
                >
                    <div className="aspect-square bg-slate-50 rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-2xl relative group border border-slate-100">
                        <img
                            src={ResilienceImg}
                            alt="Field Resilience"
                            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-blue-900/20"></div>
                        <div className="absolute top-6 left-6 md:top-12 md:left-12 border border-blue-500/30 bg-white/90 backdrop-blur-md p-4 md:p-6 rounded-2xl shadow-2xl flex items-center gap-4">
                            <div className="w-12 h-12 flex items-center justify-center bg-blue-500 rounded-xl text-white text-2xl shadow-lg shadow-blue-500/50">
                                <GiRadarSweep className="animate-pulse" />
                            </div>
                            <h5 className="text-slate-900 font-black leading-tight uppercase tracking-widest text-[10px] md:text-xs">Battlefield <br /> Resilience</h5>
                        </div>
                    </div>
                    {/* Secondary accent img */}
                    <div className="absolute -bottom-8 -right-8 md:-bottom-16 md:-right-16 w-48 h-48 md:w-64 md:h-64 bg-white border border-slate-200 rounded-[2rem] md:rounded-[3rem] p-6 md:p-8 shadow-2xl hidden md:block">
                        <FaProjectDiagram className="text-blue-600 mb-4" size={32} />
                        <h6 className="text-slate-900 font-bold text-sm tracking-tight mb-2">Cluster Recovery</h6>
                        <p className="text-xs md:text-sm text-slate-400 font-medium">Automatic node-loss compensation for 100% mission uptime.</p>
                    </div>
                </motion.div>

                <div className="order-1 lg:order-2">
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-4 block">Operational Excellence</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 md:mb-10 tracking-tight text-slate-900 leading-tight">
                            Designed for the <br />
                            <span className="text-blue-700 italic">Contested Zone.</span>
                        </h2>
                    </motion.div>
                    <div className="space-y-6 md:space-y-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <TacticalPoint
                                title="Degraded Comm Operations"
                                desc="Swarm intelligence persists even when link to command is severed, executing last-known intent directives."
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <TacticalPoint
                                title="Hardware Agnosticism"
                                desc="Our control software runs on diverse indigenous airframes, removing supply chain dependencies."
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <TacticalPoint
                                title="Electronic Hardening"
                                desc="Signal spectrum analysis allows the system to identify and ignore interference attempts in real-time."
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const StrategicMeshVisualization = () => {
    return (
        <section className="py-24 md:py-40 bg-slate-50 text-slate-900 relative overflow-hidden">
            {/* Abstract background mesh */}
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_center,_#3b82f6_0%,_transparent_70%)]"></div>

            {/* STRATEGIC DATA MESH */}
            <section className="py-32 bg-slate-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16 max-w-4xl"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Strategic Data Mesh</h2>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            A unified, decentralized network where every asset—from high-altitude UAVs to ground sensors—acts as
                            both a collector and a relay. This mesh ensures that critical intelligence flows instantly to where it's needed,
                            creating a resilient web that cannot be severed by targeting a single node.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="w-full max-w-6xl relative flex justify-center items-center"
                    >
                        <img src={MeshImg} alt="Strategic Data Mesh" className="w-full h-auto object-contain max-h-[600px] opacity-100 drop-shadow-2xl rounded-[3rem]" />
                    </motion.div>
                </div>
            </section>
            {/* R&D CARDS SECTION */}
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center mt-12 md:mt-20">
                <div className="text-center mb-8 md:mb-12 max-w-3xl relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-slate-900"
                    >
                        Research & Development.
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <MeshTag label="Hardened Stack" />
                        <MeshTag label="Sovereign Code" />
                        <MeshTag label="GPS-Denied" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const FutureWarfarePipeline = () => {
    const rdLinks = [
        {
            title: "GNSS-Denied Navigation",
            desc: "GNSS-independent positioning using optical flow.",
            path: "/autonomous-systems/denied-navigation",
            icon: <FaEye />
        },
        {
            title: "Self-Healing Control",
            desc: "Neural network flight control for damage tolerance.",
            path: "/autonomous-systems/attitude-control",
            icon: <FaRocket />
        },
        {
            title: "Ultra-Low Latency",
            desc: "Edge computing metrics for instant command loops.",
            path: "/autonomous-systems/ultra-low-latency",
            icon: <FaMicrochip />
        },
        {
            title: "Edge Efficiency",
            desc: "Watt-per-inference optimization for extended endurance.",
            path: "/autonomous-systems/edge-efficiency",
            icon: <FaBolt />
        }
    ];

    return (
        <section className="py-24 md:py-32 bg-white border-y border-slate-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-2 block">R&D Roadmap</span>
                        <h2 className="text-4xl font-bold tracking-tight text-slate-900">Future Warfare Capabilities</h2>
                    </motion.div>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {/* --- CAPABILITY PAGES --- */}
                    {[
                        { title: 'Threat Surveillance', desc: 'Persistent detection and classification across all domains.', path: '/autonomous-systems/threat-surveillance', img: SensorImg, accent: 'red' },
                        { title: 'Decentralized Decision', desc: 'Distributed command architecture with no single point of failure.', path: '/autonomous-systems/decentralized-decision', img: MeshImg, accent: 'violet' },
                        { title: 'Combat Operations', desc: 'Authority-bounded autonomous engagement at machine speed.', path: '/autonomous-systems/combat-operations', img: OpsImg1, accent: 'red' },
                        { title: 'Complex Navigation', desc: 'Navigate through GPS-denied, urban, and underground environments.', path: '/autonomous-systems/complex-navigation', img: CardDeniedNavImg, accent: 'blue' },
                        { title: 'Perception-Driven Ops', desc: 'Multi-modal sensor fusion for full scene comprehension.', path: '/autonomous-systems/perception-ops', img: GnssImg, accent: 'cyan' },
                        { title: 'Swarm Operations', desc: 'Self-organising multi-platform coordination without central control.', path: '/autonomous-systems/swarm-ops', img: OpsImg2, accent: 'amber' },
                        { title: 'Engagement & Counter-Threat', desc: 'Detect, decide, and neutralise — within commander authority.', path: '/autonomous-systems/engagement-counter-threat', img: OpsImg3, accent: 'rose' },
                        { title: 'Persistent ISR', desc: 'Energy-aware autonomy for maximum intelligence endurance.', path: '/autonomous-systems/persistent-isr', img: CardEfficiencyImg, accent: 'emerald' },
                        { title: 'Cyber Autonomous Software Based', desc: 'Sovereign security with post-quantum resilient architectures.', path: '/autonomous-systems/cyber-autonomous-systems', img: IntelImg, accent: 'slate' },
                    ].map((cap, i) => (
                        <motion.div
                            key={`new-cap-${i}`}
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="group relative bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300"
                        >
                            <div className="h-48 overflow-hidden bg-slate-100 relative">
                                <img src={cap.img} alt={cap.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-6">
                                <h3 className={`text-xl font-bold text-slate-900 mb-2 group-hover:text-${cap.accent}-600 transition-colors`}>{cap.title}</h3>
                                <p className="text-sm text-slate-500 mb-6">{cap.desc}</p>
                                <Link to={cap.path} className={`inline-flex items-center text-sm font-bold text-${cap.accent}-600 hover:gap-2 transition-all`}>
                                    Explore Tech <FaArrowRight className="ml-2" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

const OperationalReadiness = () => {
    const sectors = [
        { title: "Border Security", img: ResilienceImg, desc: "Sustained ISR in high-altitude terrain." },
        { title: "Coastal Vigilance", img: OpsImg2, desc: "Maritime detection and tracking swarms." },
        { title: "Critical Assets", img: OpsImg3, desc: "Protection of national infrastructure." },
    ];

    return (
        <section className="py-40 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <h2 className="text-5xl font-bold tracking-tight mb-6">Operational Readiness</h2>
                    <span className="text-slate-400 font-bold tracking-[0.4em] uppercase text-xs">Mission Proven · Deployment Ready</span>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.3 }
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-10"
                >
                    {sectors.map((sector, i) => (
                        <motion.div
                            key={i}
                            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                            className="group"
                        >
                            <div className="relative aspect-[4/5] rounded-[4.5rem] overflow-hidden shadow-2xl mb-8 border border-white/50">
                                <img src={sector.img} alt={sector.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
                            </div>
                            <div className="text-left px-4">
                                <h4 className="text-2xl font-bold text-slate-900 mb-2">{sector.title}</h4>
                                <p className="text-slate-500 font-medium leading-relaxed">{sector.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

const SecurityCompliance = () => {
    return (
        <section className="py-40 bg-slate-50 border-t border-slate-100 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <FaBalanceScale className="text-blue-600 text-6xl mb-10" />
                    <h2 className="text-5xl font-bold mb-10 tracking-tight text-slate-900">
                        Institutional <br />
                        <span className="text-blue-700 italic">Security Trust.</span>
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed font-medium mb-10">
                        Our approach to defense is founded on the principles of **total strategic security**.
                        We prioritize compliance with national tactical requirements and ensure that
                        operational data is sequestration-locked.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <ComplianceCard icon={<GiRadarSweep className="text-2xl" />} title="Interference Resistant" />
                        <ComplianceCard icon={<MdSecurity className="text-2xl" />} title="Anti-Hack (Sovereign Integrity)" />
                        <ComplianceCard icon={<MdRadar className="text-2xl" />} title="Disruption Resilient (Verified Fusion)" />
                        <ComplianceCard icon={<FaTimes className="text-2xl" />} title="Air-Gapped Security" />
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-white p-16 rounded-[4.5rem] border border-slate-200 shadow-xl"
                >
                    <h5 className="text-2xl font-bold mb-8">Defense Sector Standards</h5>
                    <div className="space-y-6">
                        <StandardLine label="Protocol" val="SECURE-IND-V1" />
                        <StandardLine label="Isolation" val="Network Gapped" />
                        <StandardLine label="Compliance" val="Strategic Forces" />
                        <StandardLine label="Origin" val="Make In India" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const PartnershipCTA = () => {
    return (
        <section className="py-32 md:py-60 bg-white text-center px-6 overflow-hidden">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="mb-12"
                >
                    <img src={MapImg} alt="Strategic Map" className="w-full h-auto max-h-[500px] object-contain object-center opacity-40 mx-auto rounded-3xl mix-blend-multiply" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 md:mb-12 text-slate-900 leading-[1.1]">
                        Securing Today. <br /><span className="text-blue-700">Defending Tomorrow.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-500 mb-12 md:mb-20 font-medium leading-relaxed border-x-0 md:border-x-4 border-blue-600 px-4 md:px-12 italic">
                        Novaliseo is dedicated to the mission of a self-reliant India. We collaborate with national and
                        strategic organizations to deploy the vanguard of sovereign defense intelligence.
                    </p>
                    <Link
                        to="/contact"
                        state={{ type: 'autonomous software based-partnership' }}
                        className="btn-3d-glass group relative w-full md:w-auto px-12 md:px-24 py-6 md:py-8 text-white flex items-center justify-center uppercase tracking-[0.2em] md:tracking-[0.4em]"
                    >
                        Initialize Partnership <FaArrowRight className="ml-4 group-hover:translate-x-2 transition-transform duration-500" />
                    </Link>
                    <div className="mt-16 md:mt-20 text-xs md:text-sm font-bold text-slate-300 uppercase tracking-[0.4em] md:tracking-[0.8em]">Atmanirbhar Bharat · Sovereign Intelligence</div>
                </motion.div>
            </div>
        </section>
    );
};

/* --- Helpers --- */

const FeatureMetric = ({ label, val }) => (
    <div className="flex justify-between items-center py-4 border-b border-slate-200 group">
        <span className="text-slate-500 font-bold text-sm uppercase tracking-widest">{label}</span>
        <span className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors uppercase">{val}</span>
    </div>
);

const TacticalPoint = ({ title, desc }) => (
    <div className="group">
        <h5 className="text-xl font-bold text-slate-900 mb-3 tracking-tight flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-blue-600"></div>
            {title}
        </h5>
        <p className="text-slate-500 leading-relaxed font-medium">{desc}</p>
    </div>
);

const MeshTag = ({ label }) => (
    <div className="hidden md:flex items-center gap-2 text-[10px] font-black uppercase text-blue-500 tracking-[0.2em] bg-white/5 px-4 py-2 rounded-full border border-white/10">
        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
        {label}
    </div>
);

const ComplianceCard = ({ icon, title }) => (
    <div className="flex items-center gap-4 font-bold text-slate-700 text-sm">
        <div className="text-blue-600">{icon}</div>
        {title}
    </div>
);

const StandardLine = ({ label, val }) => (
    <div className="flex justify-between py-4 border-b border-slate-100 last:border-0">
        <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">{label}</span>
        <span className="text-sm font-bold text-slate-800">{val}</span>
    </div>
);

export default AutonomousSystems;
