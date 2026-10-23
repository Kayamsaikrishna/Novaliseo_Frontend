import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Cpu, 
  Activity, 
  CheckCircle2, 
  Plane, 
  Layers, 
  Radio, 
  ShieldCheck,
  Compass,
  Zap
} from "lucide-react";

import logo from "../assets/logo.png";
import droneMountain from "../assets/trainings/drone_mountain_hero.jpg";
import hoverLidar from "../assets/trainings/hover_lidar_slam.jpg";
import roboticAssembly from "../assets/real_specs/real_robotic_assembly.jpg";
import datacenterAisle from "../assets/real_specs/real_sovereign_datacenter.jpg";

export default function IntroLoader() {
  const [stage, setStage] = useState<"initializing" | "ready" | "split" | "done">("initializing");
  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  // Technical boot telemetry steps
  const bootSteps = [
    { code: "01", label: "EKF2 STATE ESTIMATOR", status: "100Hz CALIBRATED", icon: Plane },
    { code: "02", label: "STEREO VIO & LIDAR SLAM", status: "SUB-10ms ONLINE", icon: Cpu },
    { code: "03", label: "FAIL-SAFE RTL MATRIX", status: "ARMED & TESTED", icon: ShieldCheck },
    { code: "04", label: "SOVEREIGN MISSION TELEMETRY", status: "SYNCHRONIZED", icon: Radio },
  ];

  // Visual showcase items
  const visualCards = [
    {
      title: "Autonomous Flight Systems",
      domain: "AERIAL GNC",
      metric: "100Hz Non-Linear Attitude",
      image: droneMountain,
      position: "left-top",
    },
    {
      title: "Edge Vision & LiDAR SLAM",
      domain: "EMBEDDED AI",
      metric: "Sub-10ms TensorRT Inference",
      image: hoverLidar,
      position: "left-bottom",
    },
    {
      title: "Composite Airframes & Robotics",
      domain: "HARDWARE LAB",
      metric: "Carbon Prepreg & 5-Axis CNC",
      image: roboticAssembly,
      position: "right-top",
    },
    {
      title: "Sovereign Mission Control",
      domain: "SWARM TELEMETRY",
      metric: "Encrypted Dual-Band Mesh",
      image: datacenterAisle,
      position: "right-bottom",
    },
  ];

  useEffect(() => {
    // Smooth progress counter
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Accelerate smoothly
        const step = prev < 50 ? 5 : prev < 85 ? 4 : 3;
        return Math.min(prev + step, 100);
      });
    }, 45);

    // Stagger telemetry logs
    const s1 = setTimeout(() => setActiveStep(1), 350);
    const s2 = setTimeout(() => setActiveStep(2), 850);
    const s3 = setTimeout(() => setActiveStep(3), 1350);
    const s4 = setTimeout(() => setActiveStep(4), 1850);

    // Transition to ready
    const tReady = setTimeout(() => {
      setStage("ready");
    }, 2000);

    // Transition to split curtain opening
    const tSplit = setTimeout(() => {
      setStage("split");
    }, 2500);

    // Complete & unmount
    const tDone = setTimeout(() => {
      setStage("done");
    }, 3350);

    return () => {
      clearInterval(interval);
      clearTimeout(s1);
      clearTimeout(s2);
      clearTimeout(s3);
      clearTimeout(s4);
      clearTimeout(tReady);
      clearTimeout(tSplit);
      clearTimeout(tDone);
    };
  }, []);

  if (stage === "done") return null;

  return (
    <div className="fixed inset-0 z-[99999] pointer-events-none select-none overflow-hidden font-sans">
      
      {/* ================= SPLIT SCREEN DAYLIGHT CURTAINS ================= */}
      <div className="absolute inset-0 flex pointer-events-auto">
        
        {/* ================= LEFT CURTAIN ================= */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: stage === "split" ? "-100%" : 0 }}
          transition={{ duration: 0.85, ease: [0.77, 0, 0.175, 1] }}
          className="w-1/2 h-full bg-gradient-to-br from-white via-slate-50 to-slate-100 border-r border-slate-300/80 relative overflow-hidden shadow-2xl"
        >
          {/* Subtle Blueprint Dot Grid Pattern */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              backgroundImage: "radial-gradient(#94a3b8 1px, transparent 1px)",
              backgroundSize: "24px 24px"
            }}
          />

          {/* Top-Left Header Coordinates */}
          <div className="absolute top-6 sm:top-8 left-6 sm:left-10 z-20 text-left">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-slate-800 uppercase">
                NOVALISEO // SOVEREIGN RUNTIME
              </span>
            </div>
            <p className="text-[9px] sm:text-[11px] font-mono text-slate-700">
              FACILITY: BENGALURU LABS (12.9716° N, 77.5946° E)
            </p>
          </div>

          {/* Bottom-Left Real-Time Kernel Metadata */}
          <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-10 z-20 text-left hidden sm:block">
            <div className="text-[10px] font-mono text-slate-700 tracking-wider">
              DETERMINISTIC KERNEL: <span className="font-semibold text-slate-800">LOW-LATENCY 100Hz</span>
            </div>
            <div className="text-[9px] font-mono text-slate-700 tracking-widest mt-0.5">
              SYSTEM ARCHITECTURE: PHYSICAL REALITY LAYER
            </div>
          </div>

          {/* Left Visual Cards (Desktop & Tablet) */}
          <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-center items-start gap-5 pointer-events-none z-10 max-w-sm sm:max-w-md">
            
            {/* Card 1: Flight Systems */}
            <motion.div
              initial={{ opacity: 0, x: -40, y: 15 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="w-full rounded-2xl border border-slate-200/90 bg-white/90 p-3 shadow-[0_15px_35px_rgba(0,0,0,0.06)] backdrop-blur-md hidden md:flex items-center gap-3.5"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shrink-0 border border-slate-200 shadow-inner">
                <img src={visualCards[0].image} alt="Flight" className="w-full h-full object-cover" />
              </div>
              <div className="min-w-0 text-left">
                <span className="inline-block px-2 py-0.5 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-[9px] font-mono font-bold uppercase mb-1">
                  {visualCards[0].domain}
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                  {visualCards[0].title}
                </h4>
                <p className="text-[10px] text-slate-500 font-mono mt-0.5">
                  {visualCards[0].metric}
                </p>
              </div>
            </motion.div>

            {/* Card 2: Edge Perception */}
            <motion.div
              initial={{ opacity: 0, x: -40, y: 15 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-full rounded-2xl border border-slate-200/90 bg-white/90 p-3 shadow-[0_15px_35px_rgba(0,0,0,0.06)] backdrop-blur-md hidden lg:flex items-center gap-3.5"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shrink-0 border border-slate-200 shadow-inner">
                <img src={visualCards[1].image} alt="Vision" className="w-full h-full object-cover" />
              </div>
              <div className="min-w-0 text-left">
                <span className="inline-block px-2 py-0.5 rounded-md bg-cyan-50 border border-cyan-200 text-cyan-700 text-[9px] font-mono font-bold uppercase mb-1">
                  {visualCards[1].domain}
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                  {visualCards[1].title}
                </h4>
                <p className="text-[10px] text-slate-500 font-mono mt-0.5">
                  {visualCards[1].metric}
                </p>
              </div>
            </motion.div>

          </div>

        </motion.div>

        {/* ================= RIGHT CURTAIN ================= */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: stage === "split" ? "100%" : 0 }}
          transition={{ duration: 0.85, ease: [0.77, 0, 0.175, 1] }}
          className="w-1/2 h-full bg-gradient-to-bl from-white via-slate-50 to-slate-100 border-l border-slate-300/80 relative overflow-hidden shadow-2xl"
        >
          {/* Subtle Blueprint Dot Grid Pattern */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              backgroundImage: "radial-gradient(#94a3b8 1px, transparent 1px)",
              backgroundSize: "24px 24px"
            }}
          />

          {/* Top-Right Header Status */}
          <div className="absolute top-6 sm:top-8 right-6 sm:right-10 z-20 text-right">
            <div className="flex items-center justify-end gap-2 mb-1">
              <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-slate-800 uppercase">
                ENCRYPTED TELEMETRY BUS
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <p className="text-[9px] sm:text-[11px] font-mono text-slate-700">
              FREQUENCY: 2.4 / 5.8 GHz DUAL-BAND MESH
            </p>
          </div>

          {/* Bottom-Right System Architecture Metadata */}
          <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-10 z-20 text-right hidden sm:block">
            <div className="text-[10px] font-mono text-slate-700 tracking-wider">
              HARDWARE PROTOCOL: <span className="font-semibold text-slate-800">CAN-FD &amp; ETHERNET</span>
            </div>
            <div className="text-[9px] font-mono text-slate-700 tracking-widest mt-0.5">
              SAFETY STATUS: 100% DIRECT FIELD VERIFIED
            </div>
          </div>

          {/* Right Visual Cards (Desktop & Tablet) */}
          <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-center items-end gap-5 pointer-events-none z-10 max-w-sm sm:max-w-md ml-auto">
            
            {/* Card 3: Mechatronics & Hardware */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: 15 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full rounded-2xl border border-slate-200/90 bg-white/90 p-3 shadow-[0_15px_35px_rgba(0,0,0,0.06)] backdrop-blur-md hidden md:flex items-center gap-3.5"
            >
              <div className="min-w-0 text-right flex-1">
                <span className="inline-block px-2 py-0.5 rounded-md bg-amber-50 border border-amber-200 text-amber-700 text-[9px] font-mono font-bold uppercase mb-1">
                  {visualCards[2].domain}
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                  {visualCards[2].title}
                </h4>
                <p className="text-[10px] text-slate-500 font-mono mt-0.5">
                  {visualCards[2].metric}
                </p>
              </div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shrink-0 border border-slate-200 shadow-inner">
                <img src={visualCards[2].image} alt="Mechatronics" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            {/* Card 4: Sovereign Datacenter */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: 15 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="w-full rounded-2xl border border-slate-200/90 bg-white/90 p-3 shadow-[0_15px_35px_rgba(0,0,0,0.06)] backdrop-blur-md hidden lg:flex items-center gap-3.5"
            >
              <div className="min-w-0 text-right flex-1">
                <span className="inline-block px-2 py-0.5 rounded-md bg-indigo-50 border border-indigo-200 text-indigo-700 text-[9px] font-mono font-bold uppercase mb-1">
                  {visualCards[3].domain}
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                  {visualCards[3].title}
                </h4>
                <p className="text-[10px] text-slate-500 font-mono mt-0.5">
                  {visualCards[3].metric}
                </p>
              </div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shrink-0 border border-slate-200 shadow-inner">
                <img src={visualCards[3].image} alt="Compute" className="w-full h-full object-cover" />
              </div>
            </motion.div>

          </div>

        </motion.div>

      </div>

      {/* ================= CENTER INFORMATIVE HUB OVERLAY ================= */}
      <AnimatePresence>
        {stage !== "split" && (
          <motion.div
            exit={{ opacity: 0, scale: 0.94 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-30 px-4"
          >
            
            {/* Center Card with Glassmorphic Framing */}
            <div className="w-full max-w-lg sm:max-w-xl rounded-3xl bg-white/90 border border-slate-200/90 shadow-[0_30px_90px_rgba(15,23,42,0.12)] p-6 sm:p-8 backdrop-blur-xl text-center">
              
              {/* Logo Presentation with Cyan Halo */}
              <div className="relative inline-block mb-3">
                <div className="absolute -inset-3 rounded-full bg-sky-400/20 blur-lg animate-pulse" />
                <img
                  src={logo}
                  alt="Novaliseo"
                  className="h-12 sm:h-14 md:h-16 object-contain relative z-10 mx-auto drop-shadow-sm"
                />
              </div>

              {/* Master Wordmark & Tagline */}
              <h1 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-[0.18em] uppercase mb-1">
                NOVALISEO
              </h1>
              
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-slate-700 uppercase">
                  Physical Reality Over Simulations
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 font-mono mb-6">
                Brain Behind Intelligent Operations
              </p>

              {/* ================= INFORMATIVE TELEMETRY LOGS ================= */}
              <div className="space-y-2 mb-6 text-left">
                {bootSteps.map((step, idx) => {
                  const Icon = step.icon;
                  const isDone = activeStep >= idx + 1;
                  const isCurrent = activeStep === idx;

                  return (
                    <div
                      key={step.code}
                      className={`flex items-center justify-between px-3.5 py-2 rounded-xl border text-xs font-mono transition-all duration-300 ${
                        isDone 
                          ? "bg-slate-50/90 border-slate-200 text-slate-800" 
                          : isCurrent
                          ? "bg-blue-50/80 border-blue-300 text-blue-900"
                          : "bg-white/40 border-slate-100 text-slate-600"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <Icon className={`w-3.5 h-3.5 shrink-0 ${isDone ? "text-blue-600" : isCurrent ? "text-blue-600 animate-spin" : "text-slate-600"}`} />
                        <span className="font-semibold text-slate-700">{step.code}</span>
                        <span className="truncate">{step.label}</span>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0 ml-2">
                        {isDone ? (
                          <>
                            <span className="text-[10px] text-emerald-600 font-semibold">{step.status}</span>
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          </>
                        ) : isCurrent ? (
                          <span className="text-[10px] text-blue-600 font-semibold animate-pulse">BOOTING...</span>
                        ) : (
                          <span className="text-[10px] text-slate-600">STANDBY</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* ================= LIVE PROGRESS BAR & COUNTER ================= */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span className="font-semibold text-slate-700">SYSTEM INITIALIZATION</span>
                  <span className="font-bold text-slate-900 font-mono text-xs">{progress}%</span>
                </div>

                <div className="h-2 w-full rounded-full bg-slate-100 border border-slate-200 overflow-hidden p-0.5">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-blue-600 via-sky-500 to-emerald-500 transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Status Readiness Badge */}
              <div className="mt-5 flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] sm:text-xs font-mono font-bold tracking-wider text-emerald-700 uppercase">
                  {stage === "ready" || progress === 100
                    ? "ALL SYSTEMS OPERATIONAL • RELEASING CONTROL"
                    : "INGESTING PHYSICAL HARDWARE STACK"}
                </span>
              </div>

            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
