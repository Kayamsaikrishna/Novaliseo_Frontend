import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  GraduationCap, 
  Building2, 
  Briefcase, 
  Cpu, 
  Plane, 
  Radio, 
  Code2, 
  CheckCircle2, 
  ArrowRight, 
  Award,
  Layers,
  Sparkles
} from "lucide-react";

type AudienceKey = "students" | "universities" | "industries";

interface OfferingCard {
  icon: React.ElementType;
  title: string;
  tag: string;
  description: string;
  bullets: string[];
}

interface AudienceData {
  id: AudienceKey;
  label: string;
  badge: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  metrics: { label: string; value: string }[];
  offerings: OfferingCard[];
}

const audienceData: Record<AudienceKey, AudienceData> = {
  students: {
    id: "students",
    label: "For Students & Graduates",
    badge: "Careers & Skill Acceleration",
    title: "Master Real Autonomous Engineering & Build a Recruiter-Ready Portfolio",
    subtitle: "Move beyond generic online courses. Build physical drones, write ROS2 packages, flash flight firmware, and deploy real-time AI models on edge hardware.",
    ctaText: "Enroll in Student Cohort",
    ctaLink: "/partner",
    metrics: [
      { label: "Physical Hardware", value: "100%" },
      { label: "Hands-On Capstones", value: "20+" },
      { label: "Direct Mentorship", value: "1-on-1" },
      { label: "Placement Readiness", value: "Guaranteed" },
    ],
    offerings: [
      {
        icon: Plane,
        title: "Autonomous Drone Mechanics & Flight Stack",
        tag: "Hardware & Flight",
        description: "Assemble custom quadcopters, solder telemetry electronics, tune PID controllers, and configure PX4/ArduPilot autopilots for autonomous missions.",
        bullets: [
          "Quadcopter assembly, ESC calibration & brushless motor dynamics",
          "Autonomous waypoint navigation & fail-safe return-to-launch (RTL)",
          "Flight testing in real wind and obstacle environments"
        ]
      },
      {
        icon: Cpu,
        title: "Embedded Edge AI & Real-Time Computer Vision",
        tag: "AI & Microprocessors",
        description: "Deploy deep neural networks on low-power edge silicon like NVIDIA Jetson and Raspberry Pi for high-framerate object detection and tracking.",
        bullets: [
          "TensorRT optimization & custom YOLO training for aerial targets",
          "Camera pipeline calibration & low-latency video streaming",
          "On-device inference with thermal and memory constraints"
        ]
      },
      {
        icon: Radio,
        title: "ROS2, SLAM & Autonomous Navigation",
        tag: "Robotics Architecture",
        description: "Program robots to perceive, map, and navigate unknown environments using LiDAR, stereo depth cameras, and real-time state estimation.",
        bullets: [
          "ROS2 nodes, custom publishers/subscribers & action servers",
          "2D/3D LiDAR SLAM & occupancy grid mapping",
          "Obstacle avoidance algorithms & Kalman filter sensor fusion"
        ]
      },
      {
        icon: Award,
        title: "Portfolio Capstone & Industry Credentials",
        tag: "Career Placement",
        description: "Every cohort culminates in an end-to-end engineered project with documented open-source repositories and verified credentials for your resume.",
        bullets: [
          "Production-ready GitHub repo with schematics & CAD models",
          "Verified certification recognized by robotics and aerospace startups",
          "Resume reviews & direct placement referrals with industry partners"
        ]
      }
    ]
  },
  universities: {
    id: "universities",
    label: "For Colleges & Universities",
    badge: "Institutional Partnerships",
    title: "Establish World-Class Centers of Excellence & Elevate Campus Research",
    subtitle: "Partner with Novaliseo to integrate cutting-edge robotics and drone testing infrastructure directly into your academic curriculum and campus laboratories.",
    ctaText: "Schedule Institutional Consultation",
    ctaLink: "/partner",
    metrics: [
      { label: "Center of Excellence", value: "Turnkey" },
      { label: "Curriculum Alignment", value: "AICTE / UGC" },
      { label: "Faculty Trained", value: "200+" },
      { label: "Joint Patent Potential", value: "High" },
    ],
    offerings: [
      {
        icon: Building2,
        title: "Turnkey Robotics & Drone Lab Setup",
        tag: "Campus Infrastructure",
        description: "Complete equipment provisioning including netted indoor drone flight arenas, calibrated sensor testbenches, and workstation-grade compute nodes.",
        bullets: [
          "Safe indoor flight arenas with optical motion-capture tracking",
          "Industrial drone kits, soldering stations, and oscilloscope testbenches",
          "NVIDIA Jetson cluster workstations for student model training"
        ]
      },
      {
        icon: Layers,
        title: "Industry-Accredited Curriculum Integration",
        tag: "Academic Syllabi",
        description: "Modernize mechanical, electronics, and computer science syllabi with project-based modules that satisfy national accreditation criteria.",
        bullets: [
          "Modular credit-ready electives in Autonomous Robotics & Edge AI",
          "Laboratory manuals, grading rubrics, and automated code autograders",
          "Semester-long capstone roadmaps with industry co-mentorship"
        ]
      },
      {
        icon: Award,
        title: "Faculty Development Programs (FDP)",
        tag: "Staff Empowerment",
        description: "Intensive training bootcamps for professors and lab instructors to ensure campus staff stay current with state-of-the-art industry toolchains.",
        bullets: [
          "Mastering ROS2 Humble/Iron, Gazebo simulation & PX4 architecture",
          "Guiding high-impact student publications & defense grant proposals",
          "Access to continuous updates, software libraries & cloud assets"
        ]
      },
      {
        icon: Sparkles,
        title: "Sponsored Hackathons & Incubation Support",
        tag: "Innovation Ecosystem",
        description: "Foster campus innovation through sponsored autonomy challenges, prototype incubation grants, and patent filing mentorship.",
        bullets: [
          "Annual campus-wide drone & robotics hackathons with cash prizes",
          "Incubation pathways for student startup ideas and deeptech spin-offs",
          "Industry jury panels and direct venture capital access"
        ]
      }
    ]
  },
  industries: {
    id: "industries",
    label: "For Industries & Enterprises",
    badge: "Workforce & Corporate R&D",
    title: "Accelerate Hardware Deployment & Upskill Technical Engineering Teams",
    subtitle: "Customized technical training sprints that transition your existing software teams into cross-disciplinary embedded hardware and autonomous systems engineers.",
    ctaText: "Request Enterprise Training Proposal",
    ctaLink: "/partner",
    metrics: [
      { label: "Upskilling Sprints", value: "2 - 6 Weeks" },
      { label: "Time-to-Product", value: "4x Faster" },
      { label: "Custom Syllabi", value: "Tailored" },
      { label: "Simulation-to-Reality", value: "100%" },
    ],
    offerings: [
      {
        icon: Briefcase,
        title: "Custom Corporate Upskilling Bootcamps",
        tag: "Team Transformation",
        description: "Targeted intensive programs designed around your company's proprietary tech stack, sensors, and operational environments.",
        bullets: [
          "Retrain web/cloud software engineers into real-time firmware developers",
          "Hands-on embedded C++, RTOS, CAN bus, and sensor communication protocols",
          "Structured on-site or hybrid training with flexible schedules"
        ]
      },
      {
        icon: Cpu,
        title: "Hardware-in-the-Loop (HIL) & Simulation",
        tag: "Digital Twins",
        description: "Validate safety-critical autonomous algorithms in physics-accurate digital twin simulations before risking physical hardware.",
        bullets: [
          "Physics simulation with Isaac Sim, Unreal Engine & Gazebo",
          "Hardware-in-the-loop bench testing with flight controller microcontrollers",
          "Automated regression testing pipelines for drone firmware"
        ]
      },
      {
        icon: Radio,
        title: "Edge Silicon & Sovereign Hardware Design",
        tag: "Hardened Systems",
        description: "Integrate specialized edge microchips, secure bootloaders, and low-power telemetry protocols for harsh or air-gapped environments.",
        bullets: [
          "Thermal dissipation, power budget & EMI hardening on UAVs",
          "Air-gapped edge intelligence without external cloud dependency",
          "Custom PCB daughterboard design & rapid 3D prototyping workflows"
        ]
      },
      {
        icon: Code2,
        title: "R&D Prototype Validation & Consulting",
        tag: "Pilot Deployment",
        description: "Collaborate directly with Novaliseo research leads to de-risk complex autonomous systems from concept to pilot testing.",
        bullets: [
          "Architecture reviews for multi-agent swarm communication",
          "Failure-mode and effects analysis (FMEA) for autonomous vehicles",
          "Field flight testing protocols and regulatory compliance advisory"
        ]
      }
    ]
  }
};

export default function TrainingOfferingsShowcase() {
  const [activeAudience, setActiveAudience] = useState<AudienceKey>("students");
  const current = audienceData[activeAudience];

  return (
    <section className="relative w-full py-20 sm:py-28 px-6 sm:px-10 lg:px-16 bg-gradient-to-b from-[#e2e8f0]/40 via-[#f8fafc] to-[#f1f5f9] text-slate-900 overflow-hidden select-none">
      
      {/* Background Soft Glow Accents */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/5 border border-slate-900/10 text-slate-700 text-xs font-mono font-semibold tracking-wider uppercase mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>Comprehensive Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-[1.1]">
            What We Do &amp; <span className="font-light text-slate-400">What We Offer</span>
          </h2>

          <p className="mt-4 text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
            Tailored engineering pathways engineered for every stage of technological growth—from ambitious students to research universities and enterprise engineering teams.
          </p>

          {/* ================= INTERACTIVE AUDIENCE SELECTOR PILLS ================= */}
          <div className="mt-8 sm:mt-10 inline-flex p-1.5 rounded-full bg-slate-200/70 border border-slate-300/80 shadow-xs max-w-full overflow-x-auto">
            {(["students", "universities", "industries"] as AudienceKey[]).map((key) => {
              const item = audienceData[key];
              const isActive = activeAudience === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveAudience(key)}
                  className={`relative px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 whitespace-nowrap ${
                    isActive 
                      ? "text-white shadow-md shadow-slate-950/20" 
                      : "text-slate-600 hover:text-slate-950 hover:bg-white/50"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeAudiencePill"
                      className="absolute inset-0 rounded-full bg-slate-950"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {key === "students" && <GraduationCap className="w-4 h-4" />}
                    {key === "universities" && <Building2 className="w-4 h-4" />}
                    {key === "industries" && <Briefcase className="w-4 h-4" />}
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= DYNAMIC AUDIENCE SHOWCASE CONTENT ================= */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12"
          >
            
            {/* Header Banner for Selected Audience */}
            <div className="p-8 sm:p-10 rounded-[2.5rem] bg-white/80 border border-slate-200/90 shadow-[0_15px_40px_rgba(0,0,0,0.03)] backdrop-blur-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 text-left">
              <div className="max-w-3xl">
                <span className="inline-block px-3 py-1 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
                  {current.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight leading-snug">
                  {current.title}
                </h3>
                <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                  {current.subtitle}
                </p>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto">
                <a
                  href={current.ctaLink}
                  className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-slate-950 hover:bg-black text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md hover:scale-105 active:scale-95 transition-all"
                >
                  <span>{current.ctaText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {current.metrics.map((metric, idx) => (
                <div 
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-white/70 hover:bg-white border border-slate-200/80 backdrop-blur-md shadow-2xs text-center transition-all hover:shadow-xs"
                >
                  <p className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                    {metric.value}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>

            {/* 4-Card Offerings Grid */}
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {current.offerings.map((offering, index) => {
                const IconComponent = offering.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    whileHover={{ y: -4 }}
                    className="p-8 sm:p-10 rounded-[2rem] bg-white/85 hover:bg-white border border-slate-200/90 hover:border-slate-300 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(6,182,212,0.10)] backdrop-blur-xl transition-all duration-300 text-left flex flex-col justify-between"
                  >
                    <div>
                      {/* Card Header */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-900 shadow-2xs">
                          <IconComponent className="w-6 h-6 text-slate-800" />
                        </div>
                        <span className="text-[11px] font-mono font-medium px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                          {offering.tag}
                        </span>
                      </div>

                      {/* Card Title & Description */}
                      <h4 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight mb-2.5">
                        {offering.title}
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                        {offering.description}
                      </p>
                    </div>

                    {/* Bullet Highlights */}
                    <div className="pt-5 border-t border-slate-100 space-y-2.5">
                      {offering.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
