"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, MotionValue } from "framer-motion"
import { MeshGradient } from "@paper-design/shaders-react"
import { ShieldAlert, Activity, Building2, Wallet, Tractor, GraduationCap } from "lucide-react"
import { cn } from "../lib/utils"
import SectorSlideshow from "../components/SectorSlideshow"

/* ═══════════════════════════════════════════════════════════════════════════
   1. FLOATING PATHS — Animated SVG background lines
   ═══════════════════════════════════════════════════════════════════════════ */

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position} -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position} ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position} ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg className="w-full h-full text-white" viewBox="0 0 696 316" fill="none">
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.03 + path.id * 0.008}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{ pathLength: 1, opacity: [0.3, 0.6, 0.3], pathOffset: [0, 1, 0] }}
            transition={{ duration: 20 + Math.random() * 10, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </svg>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   2. REVEAL TEXT — Letter-by-letter spring animation with image on hover
   ═══════════════════════════════════════════════════════════════════════════ */

function RevealText({
  text,
  letterImages,
}: {
  text: string
  letterImages: string[]
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [showOverlay, setShowOverlay] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowOverlay(true), (text.length - 1) * 80 + 600)
    return () => clearTimeout(timer)
  }, [text.length])

  return (
    <div className="flex items-center justify-center">
      <div className="flex">
        {text.split("").map((letter, index) => (
          <motion.span
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="text-[60px] sm:text-[90px] md:text-[130px] lg:text-[170px] font-black tracking-tight cursor-pointer relative overflow-hidden leading-none"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.08, type: "spring", damping: 8, stiffness: 200, mass: 0.8 }}
          >
            <motion.span
              className="absolute inset-0 text-transparent bg-clip-text bg-[length:200%_auto]"
              style={{ backgroundImage: "linear-gradient(to right, #0891b2, #ffffff, #06b6d4, #0891b2)" }}
              animate={{
                opacity: hoveredIndex === index ? 0 : 1,
                backgroundPosition: ["0% center", "200% center"]
              }}
              transition={{
                opacity: { duration: 0.1 },
                backgroundPosition: { duration: 4, repeat: Infinity, ease: "linear", delay: index * 0.1 }
              }}
            >
              {letter}
            </motion.span>
            <motion.span
              className="text-transparent bg-clip-text bg-cover bg-no-repeat bg-center"
              animate={{
                opacity: hoveredIndex === index ? 1 : 0,
                backgroundPosition: hoveredIndex === index ? "10% center" : "0% center",
              }}
              transition={{ opacity: { duration: 0.1 }, backgroundPosition: { duration: 3 } }}
              style={{
                backgroundImage: `url('${letterImages[index % letterImages.length]}')`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {letter}
            </motion.span>
            {showOverlay && (
              <motion.span
                className="absolute inset-0 text-cyan-400 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{ delay: index * 0.05, duration: 0.4, times: [0, 0.1, 0.7, 1] }}
              >
                {letter}
              </motion.span>
            )}
          </motion.span>
        ))}
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   3. TEXT REVEAL BY WORD — Scroll-driven word opacity
   ═══════════════════════════════════════════════════════════════════════════ */

function ScrollWord({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0, 1])
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity }} className="text-white">{children}</motion.span>
    </span>
  )
}

function TextRevealByWord({ text }: { text: string }) {
  const targetRef = useRef<HTMLDivElement>(null)

  // Track scroll exactly from when the top of the container hits the top of the viewport
  // to when the bottom hits the bottom of the viewport
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  })

  const words = text.split(" ")

  return (
    <div ref={targetRef} className="relative z-0 h-[300vh]"> {/* Huge height to scroll through */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center bg-transparent pt-24 px-6 md:px-12">
        <p className="flex flex-wrap justify-center text-center max-w-5xl text-balance text-2xl leading-relaxed md:text-4xl lg:text-5xl font-light tracking-wide text-white/20">
          {words.map((word, i) => {
            // Compress the reveal into the first 85% of the scroll space, 
            // so it finishes well before the section unpins
            const revealCompletesAt = 0.85
            const start = (i / words.length) * revealCompletesAt
            const end = start + (1 / words.length) * revealCompletesAt

            return <ScrollWord key={i} progress={scrollYProgress} range={[start, end]}>{word}</ScrollWord>
          })}
        </p>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   4. ARCH TEXT — Massive rotating semi-circle at the bottom
   ═══════════════════════════════════════════════════════════════════════════ */

function ArchText({ text, radius = 45, speed = 40, className }: { text: string; radius?: number; speed?: number; className?: string }) {
  const pathId = `archPath-${Math.random().toString(36).substring(2, 9)}`
  return (
    <div className={cn("overflow-hidden", className)}>
      {/* We make the SVG 2x as wide and high relative to radius to perfectly fit the circle, but container hides bottom half */}
      <svg viewBox="0 0 100 100" className="w-full h-[200%] origin-top">
        <defs>
          <linearGradient id="textGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <g className="origin-center animate-spin" style={{ animationDuration: `${speed}s`, animationTimingFunction: "linear" }}>
          {/* A perfect circle path */}
          <path id={pathId} d={`M 50,50 m -${radius},0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`} fill="none" />
          <text className="uppercase font-bold tracking-widest text-[4px]" fill="url(#textGlow)" style={{ textShadow: "0 0 10px rgba(6, 182, 212, 0.5)" }}>
            <textPath xlinkHref={`#${pathId}`} startOffset="0%">{text}</textPath>
          </text>
        </g>
      </svg>
    </div>
  )
}


/* ═══════════════════════════════════════════════════════════════════════════
   6. SECTOR IMAGES (for PLATFORMS hover text)
   ═══════════════════════════════════════════════════════════════════════════ */

const SECTOR_IMAGES = [
  "/images/sectors/The Sectoral Ecosystem.jpg",
  "/images/sectors/Sovereign Infrastructure and Sectoral Intelligence.jpg",
  "/images/sectors/Defence & Aerospace.jpg",
  "/images/sectors/Healthcare and Biotech.jpg",
  "/images/sectors/Finance & Fintech.jpg",
  "/images/sectors/Smart Cities & IOT.jpg",
  "/images/sectors/Agriculture & Agritech.jpg",
  "/images/sectors/Education & Edtech.jpg",
  "/images/sectors/The Sectoral Ecosystem.jpg", // Repeat for the 9th letter 'S'
]

/* ═══════════════════════════════════════════════════════════════════════════
                        PLATFORMS PAGE
   ═══════════════════════════════════════════════════════════════════════════ */

export default function PlatformsPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  return (
    <div className="min-h-screen relative w-full">
      {/* MeshGradient Background */}
      <div className="fixed inset-0 z-0">
        {mounted && (
          <>
            <MeshGradient
              className="absolute inset-0 w-full h-full"
              colors={["#020617", "#06b6d4", "#0891b2", "#164e63", "#030712"]}
              speed={0.3}
              backgroundColor="#020617"
            />
            <MeshGradient
              className="absolute inset-0 w-full h-full opacity-40"
              colors={["#020617", "#ffffff", "#06b6d4", "#0e4a5c"]}
              speed={0.2}
              wireframe="true"
              backgroundColor="transparent"
            />
            <div className="absolute inset-0 pointer-events-none bg-black/10" />
          </>
        )}
      </div>

      {/* Floating SVG Paths overlay */}
      <div className="fixed inset-0 z-[1] pointer-events-none">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      {/* ── HERO ── */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
        {/* Massive Arch Text at the bottom */}
        <div className="absolute bottom-0 left-0 w-full opacity-70 pointer-events-none flex items-start justify-center mix-blend-screen h-[70vh] sm:h-[85vh] lg:h-[90vh] overflow-hidden">
          <ArchText
            text="NOVALISEO PLATFORMS • SOVEREIGN INTELLIGENCE • INDIGENOUS DEFENCE • HEALTHCARE • FINANCE • SMART CITIES • AGRICULTURE • EDUCATION • "
            radius={45}
            speed={40}
            className="w-[180vw] sm:w-[130vw] md:w-[110vw] xl:w-[100vw] min-w-[800px] -mt-[4%]"
          />
        </div>

        {/* Top Glowing Title */}
        <motion.div
          className="relative z-10 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-cyan-400 font-mono text-sm tracking-[0.6em] uppercase text-center" style={{ textShadow: "0 0 20px rgba(6, 182, 212, 0.5)" }}>
            Sovereign Intelligence Across Sectors
          </p>
        </motion.div>

        {/* RevealText */}
        <RevealText text="PLATFORMS" letterImages={SECTOR_IMAGES} />

        {/* Bottom Glowing Description */}
        <motion.div
          className="relative z-10 mt-12 max-w-2xl text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <p className="text-xl md:text-2xl font-light text-white/90 leading-relaxed drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            Indigenous intelligence powering India's{" "}
            <span className="text-cyan-400 font-medium drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]">sovereign digital future</span>{" "}
            across every critical sector.
          </p>
        </motion.div>
      </section>

      {/* ── TEXT REVEAL SECTION ── */}
      <div className="relative z-10">
        <TextRevealByWord text="Novaliseo builds sovereign intelligence platforms that operate entirely within India's borders. Every model trained on indigenous infrastructure. Every byte of data processed within sovereign boundaries. From healthcare to defence, finance to agriculture — our platforms power the nation's most critical operations without foreign dependency." />
      </div>

      {/* ── SECTOR CARDS ── */}
      <div className="relative z-10 w-full">
        <SectorSlideshow />
      </div>

      <div className="relative z-10 h-24" />
    </div>
  )
}
