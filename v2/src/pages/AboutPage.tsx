"use client"

import { useState } from "react"
import { motion, useScroll } from "framer-motion"
import icon from "../assets/icon.png"
import DuotoneOrgHierarchy from "../components/ui/duotone-org-hierarchy"
import DuotoneTeamRoster, { type TeamMember } from "../components/ui/duotone-team-roster"

import thejaaImg from "../assets/team/Kayam Thejaa.png"
import kushanthrajImg from "../assets/team/Kushanthraj S. N..png"
import saiKrishnaImg from "../assets/team/Kayam Sai Krishna.png"
import sharanrajImg from "../assets/team/S. N. Sharanraj.png"
import annaraoImg from "../assets/team/Anguluri Annarao.png"
import shubhaImg from "../assets/team/Dr. Shubha Iyengar.png"
import raviImg from "../assets/team/Ravi Kumar.png"
import sampathkumaranImg from "../assets/team/Dr. P. Sampathkumaran.png"

import southernAgroLogo from "../assets/Our Costumers/southernagro_logo-1.png"
import novaVilliersLogo from "../assets/Our Costumers/Futuristic NOVA VILLIERS Drone Emblem.png"

const TEAM_PHOTOS = {
  thejaa: thejaaImg,
  kushanthraj: kushanthrajImg,
  saikrishna: saiKrishnaImg,
  sharanraj: sharanrajImg,
  annarao: annaraoImg,
  shubha: shubhaImg,
  ravi: raviImg,
  sampathkumaran: sampathkumaranImg,
}

const NOVALISEO_ROSTER: TeamMember[] = [
  {
    name: "Kayam Thejaa",
    role: "Founder & CEO | Director - External Relations & Strategic Affairs",
    craft: "Founder & CEO",
    photo: thejaaImg,
    focus: "50% 20%",
  },
  {
    name: "Kushanthraj S. N.",
    role: "Director of Operations",
    craft: "Operations",
    photo: kushanthrajImg,
    focus: "50% 20%",
  },
  {
    name: "Sai Krishna",
    role: "Chief Technology Officer (CTO)",
    craft: "CTO",
    photo: saiKrishnaImg,
    focus: "50% 20%",
  },
  {
    name: "S. N. Sharanraj",
    role: "Head of Strategic Planning & Business Analytics",
    craft: "Strategy & Analytics",
    photo: sharanrajImg,
    focus: "50% 20%",
  },
  {
    name: "Anguluri Annarao",
    role: "Head of Corporate Affairs",
    craft: "Corporate Affairs",
    photo: annaraoImg,
    focus: "50% 20%",
  },
  {
    name: "Dr. Shubha B",
    role: "Aerospace Technology & Innovation Advisor",
    craft: "Aerospace Advisor",
    photo: shubhaImg,
    focus: "50% 25%",
  },
  {
    name: "Ravi Kumar",
    role: "Head of Technology Development & Delivery",
    craft: "Tech Delivery",
    photo: raviImg,
    focus: "50% 20%",
  },
  {
    name: "Dr. P Sampathkumaran",
    role: "Head of Material Development",
    craft: "Material Dev",
    photo: sampathkumaranImg,
    focus: "50% 20%",
  },
]

const ASSETS = {
  HERO: "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/ruixen_hero_gradient.jpg",
  CHAT: "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/ruixen_chat_gradient.png",
  MOON: "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/ruixen_moon.png",
}

export default function AboutPage() {
  const { scrollYProgress } = useScroll()
  const [teamView, setTeamView] = useState<"hierarchy" | "roster">("hierarchy")

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  }

  return (
    <div className="flex flex-col bg-white text-slate-900 pt-24 min-h-screen selection:bg-sky-500/20 overflow-hidden relative">

      {/* ---------------- LIGHT ATMOSPHERIC BACKGROUND ---------------- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(#0284c7 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-sky-100/60 via-blue-50/40 to-transparent blur-3xl" />
        <div className="absolute top-1/3 right-[-10%] w-[500px] h-[500px] bg-sky-200/30 blur-[130px] rounded-full" />
        <div className="absolute bottom-1/4 left-[-10%] w-[500px] h-[500px] bg-indigo-100/40 blur-[130px] rounded-full" />
      </div>

      {/* ---------------- HERO SECTION (SCREEN 1) ---------------- */}
      <section className="py-8 md:py-16 relative z-10">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, rotateY: 180, scale: 0.5 }}
            animate={{ opacity: 1, rotateY: 0, scale: 1 }}
            transition={{ duration: 1.5, type: "spring", bounce: 0.4 }}
            style={{ perspective: 2000 }}
            className="relative group w-full flex justify-center"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] max-w-3xl aspect-square bg-gradient-to-r from-sky-400/20 via-blue-400/20 to-indigo-400/20 rounded-full blur-3xl opacity-60 group-hover:opacity-100 transition duration-1000" />
            <div className="relative z-10 w-full max-w-2xl aspect-square overflow-hidden rounded-full border-4 border-white shadow-[0_20px_60px_rgba(14,165,233,0.2)] bg-slate-50 flex items-center justify-center">
              <img
                className="w-full h-full object-cover scale-[1.01]"
                src="/images/about_hero.jpeg"
                alt="About Novaliseo"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------------- INTRO TEXT (SCREEN 2) ---------------- */}
      <section className="py-20 md:py-32 relative z-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-2 md:gap-24 items-center">
            <motion.div {...fadeInUp}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-sky-300 bg-sky-50 text-[11px] font-bold tracking-[0.2em] text-sky-800 uppercase mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-sky-600 animate-pulse" />
                Next-Gen Deep Tech
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tighter">
                The Novaliseo <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">Ecosystem</span> <br />
                <span className="text-slate-500 font-bold">
                  Defines Engineering Excellence.
                </span>
              </h1>
            </motion.div>
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2, duration: 1 }}
              className="space-y-6 flex flex-col justify-center"
            >
              <p className="text-xl md:text-2xl text-slate-700 font-normal leading-relaxed">
                Novaliseo is evolving beyond traditional software. We build an entire technological infrastructure —
                from hardware-rooted physical autonomy to the high-performance computing platforms driving global innovation.
              </p>
              <div className="w-24 h-1.5 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------------- ABOUT SECTION (VISION, MISSION, POSITIONING) ---------------- */}
      <section className="py-20 md:py-32 relative z-10">
        <div className="mx-auto max-w-7xl px-6 space-y-20">

          {/* Header */}
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <motion.h2 {...fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-tighter">
              About Us
            </motion.h2>
            <motion.p {...fadeInUp} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-slate-600 font-normal leading-relaxed">
              Novaliseo is an innovative technology company dedicated to developing next-generation products and intelligent solutions that transform critical industries. By integrating advanced engineering, digital technologies, research &amp; development, automation, and human expertise, we create scalable solutions that solve complex real-world challenges.
            </motion.p>
          </div>

          {/* ---------------- 3 CARDS LAYOUT (LIGHT THEME) ---------------- */}
          <div className="flex flex-col lg:flex-row gap-10">

            {/* LEFT BIG IMAGE CARD - VISION */}
            <motion.div
              {...fadeInUp}
              className="lg:flex-[1.2] relative group rounded-[3.5rem] border border-slate-200/90 shadow-2xl shadow-slate-200/60 bg-white overflow-hidden"
            >
              <div className="overflow-hidden relative h-[450px] lg:h-full">
                <img
                  src={ASSETS.CHAT}
                  alt="Vision"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
                />
              </div>
              {/* Subtle watermark */}
              <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none overflow-hidden">
                <img
                  src={icon}
                  alt=""
                  className="w-[140%] h-auto opacity-[0.08] scale-100"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-10 sm:p-12 bg-gradient-to-t from-white via-white/90 to-transparent z-20">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 font-bold text-xs uppercase tracking-wider mb-3">
                  Core Purpose
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">Vision</h3>
                <p className="text-slate-700 text-base sm:text-lg font-normal leading-relaxed max-w-lg">
                  To become a globally trusted technology company, shaping the future of industries through intelligent solutions, engineering excellence, and sustainable digital transformation.
                </p>
              </div>
            </motion.div>

            {/* RIGHT TWO CARDS - MISSION & POSITIONING */}
            <div className="lg:flex-1 flex flex-col gap-10">

              {/* STACKED CARD 1 - MISSION */}
              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.2 }}
                className="flex-1 bg-white rounded-[2.5rem] border border-slate-200/90 shadow-xl shadow-slate-200/50 relative overflow-hidden group p-2"
              >
                <div className="relative h-56 sm:h-64 overflow-hidden rounded-[2rem]">
                  <img
                    src={ASSETS.MOON}
                    alt="Accelerate Growth"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" />
                </div>
                <div className="p-6 sm:p-8 space-y-3">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-bold text-xs uppercase tracking-wider">
                    Our Mandate
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Mission</h3>
                  <ul className="text-slate-700 text-sm sm:text-base font-normal leading-relaxed space-y-2.5">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-600 mt-2 shrink-0" />
                      <span>Develop proprietary technologies that redefine industrial operations.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-600 mt-2 shrink-0" />
                      <span>Deliver industry-specific engineering solutions across critical sectors.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-600 mt-2 shrink-0" />
                      <span>Accelerate digital transformation through research, automation, and data analytics.</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* STACKED CARD 2 - POSITIONING */}
              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.4 }}
                className="flex-1 bg-white rounded-[2.5rem] border border-slate-200/90 shadow-xl shadow-slate-200/50 relative overflow-hidden group min-h-[340px]"
              >
                <img
                  src={ASSETS.HERO}
                  alt="Our Positioning"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-[2s] opacity-35"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-transparent p-8 sm:p-10 flex flex-col justify-end">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 font-bold text-xs uppercase tracking-wider w-fit mb-3">
                    Strategic Identity
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">Our Positioning</h3>
                  <p className="text-slate-700 text-base sm:text-lg font-normal leading-relaxed">
                    We build proprietary technologies while delivering industry-specific solutions. Novaliseo combines the capabilities of a deep-tech product company, a research laboratory, and an engineering solutions provider.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* ---------------- OUR CUSTOMERS & JOINT VENTURES ---------------- */}
      <section className="py-20 md:py-32 relative z-10 bg-slate-50/70 border-t border-b border-slate-200/80">
        <div className="mx-auto max-w-7xl px-6 space-y-16">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-300 bg-sky-50 text-xs font-bold tracking-[0.2em] text-sky-800 uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-sky-600 animate-pulse" />
              COMMERCIAL IMPACT &amp; STRATEGIC ALLIANCES
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
              Our Customers &amp; Joint Ventures
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Deploying industrial-scale autonomous technologies, aerospace innovation, and precision mechanization through foundational enterprise partnerships.
            </p>
          </div>

          {/* Grid of Customers & Joint Ventures */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* PARTNER CARD 1: SOUTHERN AGRO ENGINE PRIVATE LIMITED */}
            <motion.div
              {...fadeInUp}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col justify-between group transition-all duration-300 hover:border-sky-400 hover:shadow-2xl"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-50 text-sky-800 border border-sky-200">
                    Enterprise Customer &amp; Partner
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    Industrial &amp; Agriculture
                  </span>
                </div>

                {/* Big Clean Logo Presentation (No Black Background) */}
                <div className="h-44 sm:h-52 w-full rounded-2xl bg-slate-50/80 border border-slate-200/60 p-6 sm:p-8 flex items-center justify-center">
                  <img
                    src={southernAgroLogo}
                    alt="Southern Agro Engine Private Limited"
                    className="max-h-36 max-w-[85%] object-contain filter group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Description */}
                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    Southern Agro Engine Private Limited
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    A premier manufacturer of agricultural power equipment, diesel engines, and farm machinery with over four decades of engineering legacy under the renowned VIJAY Villiers brand.
                  </p>
                </div>

                {/* Key Synergy Pillars */}
                <div className="pt-2 space-y-2 border-t border-slate-100">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-600 shrink-0" />
                    Heavy-duty powertrain integration and industrial equipment
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-600 shrink-0" />
                    Field deployment validation across agricultural corridors
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-600 shrink-0" />
                    Large-scale mechanical tooling and manufacturing ecosystem
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-bold text-sky-700">
                <span>COMMERCIAL INDUSTRIAL PARTNERSHIP</span>
                <span>Active Deployment →</span>
              </div>
            </motion.div>

            {/* PARTNER CARD 2: NOVA VILLIERS (JOINT VENTURE - NO BLACK BOX) */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-sky-300 shadow-xl shadow-sky-100/70 flex flex-col justify-between group transition-all duration-300 hover:border-sky-500 hover:shadow-2xl relative overflow-hidden"
            >
              {/* Highlight gradient wash */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-sky-200/50 rounded-full blur-2xl opacity-60 pointer-events-none" />

              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <span className="px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-sm flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    Joint Venture
                  </span>
                  <span className="text-xs font-bold text-sky-700 uppercase tracking-widest">
                    Aerospace &amp; Autonomous UAVs
                  </span>
                </div>

                {/* Big Clean Logo Presentation (Clean Light Card - No Black Background) */}
                <div className="h-44 sm:h-52 w-full rounded-2xl bg-gradient-to-br from-slate-50 to-sky-50/50 border border-slate-200/60 p-6 sm:p-8 flex items-center justify-center">
                  <img
                    src={novaVilliersLogo}
                    alt="Nova Villiers Joint Venture"
                    className="max-h-36 max-w-[85%] object-contain filter group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
                  />
                </div>

                {/* Description */}
                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    Nova Villiers
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    A breakthrough strategic joint venture between Novaliseo and Southern Agro Engine, dedicated to indigenous aerospace engineering, next-generation drone manufacturing, and heavy-payload agricultural aerial platforms.
                  </p>
                </div>

                {/* Key Synergy Pillars */}
                <div className="pt-2 space-y-2 border-t border-slate-100">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-600 shrink-0" />
                    Indigenous autonomous flight controllers powered by Novaliseo
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-600 shrink-0" />
                    Heavy-duty aerial spraying and multi-sensor survey drones
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-600 shrink-0" />
                    End-to-end DGCA-certified commercial drone manufacturing
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-bold text-sky-700">
                <span>STRATEGIC AEROSPACE VENTURE</span>
                <span>Indigenous UAV Fleet →</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ---------------- ORGANISATION STRUCTURE & THE CREW (WITH TOGGLE) ---------------- */}
      <section className="py-20 md:py-32 relative z-10">
        <div className="mx-auto max-w-7xl px-6 space-y-8">
          
          {/* Interactive View Switcher */}
          <div className="flex justify-center">
            <div className="inline-flex p-1.5 rounded-full bg-slate-100 border border-slate-200/90 shadow-md backdrop-blur-md">
              <button
                type="button"
                onClick={() => setTeamView("hierarchy")}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 ${
                  teamView === "hierarchy"
                    ? "bg-sky-600 text-white shadow-md shadow-sky-200"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-current" />
                Organisation Structure
              </button>
              <button
                type="button"
                onClick={() => setTeamView("roster")}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 ${
                  teamView === "roster"
                    ? "bg-sky-600 text-white shadow-md shadow-sky-200"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-current" />
                The Crew (Kinetic Wall)
              </button>
            </div>
          </div>

          {/* Active View Render */}
          <motion.div {...fadeInUp} className="w-full">
            {teamView === "hierarchy" ? (
              <DuotoneOrgHierarchy photos={TEAM_PHOTOS} />
            ) : (
              <div className="rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-2xl bg-white">
                <DuotoneTeamRoster
                  members={NOVALISEO_ROSTER}
                  openRoles={[]}
                  eyebrow="The Minds Behind"
                  title={"The\nCrew"}
                  intro="Researchers, roboticists, firmware developers, and systems architects building next-generation sovereign intelligence and physical autonomy."
                  cta={{ label: "Join the mission", href: "/careers" }}
                  secondaryCta={{ label: "Our research", href: "/research" }}
                  preset="cobalt"
                  height="85vh"
                />
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ---------------- FINAL STATEMENT (LIGHT THEME) ---------------- */}
      <section className="py-28 md:py-40 relative z-10 bg-slate-50/50 border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-6 text-center space-y-8">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            viewport={{ once: true }}
            className="h-1.5 bg-gradient-to-r from-sky-500 to-blue-600 mx-auto rounded-full"
          />
          <motion.h2 {...fadeInUp} className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter">
            The Horizon <br />
            Is Yours.
          </motion.h2>
          <motion.p {...fadeInUp} transition={{ delay: 0.2 }} className="text-slate-500 uppercase tracking-[0.6em] font-bold text-xs">
            NOVALISEO © 2026
          </motion.p>
        </div>
      </section>

    </div>
  )
}
