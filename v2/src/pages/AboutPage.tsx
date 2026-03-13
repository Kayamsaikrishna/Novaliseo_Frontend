import { motion, useScroll } from "framer-motion"
import logo from "../assets/logo.png"
import icon from "../assets/icon.png"
import { ShaderBackground } from "../components/ShaderBackground"

const ASSETS = {
  HERO: "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/ruixen_hero_gradient.jpg",
  CHAT: "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/ruixen_chat_gradient.png",
  MOON: "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/ruixen_moon.png",
}

export default function AboutPage() {
  const { scrollYProgress } = useScroll()

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 1, ease: "easeOut" }
  }

  return (
    <div className="flex flex-col bg-[#020617] pt-24 min-h-screen selection:bg-cyan-500/30 overflow-hidden relative">

      {/* ---------------- BRAND BACKGROUND (SHADER) ---------------- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ShaderBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/60 via-transparent to-[#020617]" />
      </div>

      {/* ---------------- HERO SECTION (SCREEN 1) ---------------- */}
      <section className="py-8 md:py-12 relative z-10">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative group w-full"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-[4rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000" />
            <div className="relative z-10 w-full h-[60vh] md:h-[70vh] overflow-hidden rounded-[4rem] border border-white/5 shadow-2xl">
              <img
                className="w-full h-full object-cover"
                src={ASSETS.HERO}
                alt="Novaliseo Ecosystem Hero"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
            </div>
            {/* LOGO CENTERED ON HERO IMAGE */}
            <div className="absolute inset-0 flex items-center justify-center z-30 px-8 md:px-16 pointer-events-none">
              <img
                src={logo}
                alt="Novaliseo"
                className="w-full md:w-[95%] max-w-5xl h-auto"
                style={{
                  filter: "drop-shadow(0 0 30px rgba(255,255,255,0.25)) drop-shadow(0 0 60px rgba(6,182,212,0.3)) drop-shadow(0 2px 4px rgba(255,255,255,0.15)) brightness(1.15) contrast(1.05)"
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------------- INTRO TEXT (SCREEN 2) ---------------- */}
      <section className="py-24 md:py-40 relative z-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-2 md:gap-24">
            <motion.div {...fadeInUp}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tighter">
                The Novaliseo <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Ecosystem</span> <br />
                <span className="text-slate-500">
                  Defines Sovereign Intelligence.
                </span>
              </h1>
            </motion.div>
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2, duration: 1 }}
              className="space-y-8 flex flex-col justify-center"
            >
              <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
                Novaliseo is evolving beyond the models. We support an entire cognitive infrastructure —
                from hardware-rooted security to the high-performance APIs driving global innovation.
              </p>
              <div className="w-24 h-1 bg-cyan-500/30 rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------------- ABOUT SECTION ---------------- */}
      <section className="py-24 md:py-40 relative z-10">
        <div className="mx-auto max-w-7xl px-6 space-y-24">

          {/* Header */}
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <motion.h2 {...fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter">
              About Us
            </motion.h2>
            <motion.p {...fadeInUp} transition={{ delay: 0.2 }} className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed">
              We are a specialized team of architects and engineers dedicated to creating intelligence
              that remains unshakeably sovereign, equitable, and autonomous.
            </motion.p>
          </div>

          {/* ---------------- THE "LAST THREE CARDS" LAYOUT ---------------- */}
          <div className="flex flex-col lg:flex-row gap-10">

            {/* LEFT BIG IMAGE CARD */}
            <motion.div
              {...fadeInUp}
              className="lg:flex-[1.2] relative group rounded-[4rem] border border-white/5 shadow-2xl shadow-black/50"
              style={{ overflow: "visible" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-1000 z-10 rounded-[4rem] pointer-events-none" />
              <div className="overflow-hidden rounded-[4rem] relative h-[400px] lg:h-full">
              <img
                src={ASSETS.CHAT}
                alt="Intelligence Fluidity"
                className="w-full h-[400px] lg:h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
                />
              </div>
              {/* HUGE ICON WATERMARK - Subtle Centered Watermark */}
              <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none overflow-hidden rounded-[4rem]">
                <img
                  src={icon}
                  alt=""
                  className="w-[160%] h-auto opacity-[0.15] scale-100"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-12 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20 rounded-b-[4rem]">
                <h3 className="text-4xl font-bold text-white mb-4">Neural Sovereignty</h3>
                <p className="text-slate-300 text-lg font-light leading-relaxed max-w-md">
                  We empower enterprises to govern their cognitive assets with absolute transparency.
                </p>
              </div>
            </motion.div>

            {/* RIGHT TWO CARDS */}
            <div className="lg:flex-1 flex flex-col gap-10">

              {/* STACKED CARD 1 */}
              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.2 }}
                className="flex-1 bg-gradient-to-br from-white/[0.08] to-transparent backdrop-blur-2xl rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden group p-1"
              >
                <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative h-64 overflow-hidden rounded-[2.5rem]">
                  <img
                    src={ASSETS.MOON}
                    alt="Accelerate Growth"
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a0f1e] to-transparent" />
                </div>
                <div className="p-10 space-y-4">
                  <h3 className="text-3xl font-bold text-white tracking-tight">Accelerate Growth</h3>
                  <p className="text-slate-300 text-lg font-light leading-relaxed">
                    Eliminating the friction between raw potential and market dominance through neurological momentum.
                  </p>
                </div>
              </motion.div>

              {/* STACKED CARD 2 */}
              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.4 }}
                className="flex-1 bg-gradient-to-br from-white/[0.08] to-transparent backdrop-blur-2xl rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden group min-h-[350px]"
              >
                <img
                  src={ASSETS.HERO}
                  alt="Future-Ready Design"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-[2s] opacity-40 grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-12 flex flex-col justify-end">
                  <h3 className="text-3xl font-bold text-white mb-4">Future-Ready Design</h3>
                  <p className="text-slate-300 text-lg font-light leading-relaxed font-light">
                    Modular architectures designed for 2030 and beyond, combining ethereal aesthetics with liquid logic.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* ---------------- MISSION & VISION FOOTER ---------------- */}
      <section className="py-32 relative z-10 bg-black/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-24">
            <motion.div {...fadeInUp} className="space-y-6 border-l-2 border-cyan-500/20 pl-8">
              <h4 className="text-cyan-400 font-bold tracking-widest uppercase text-sm">Our Mission</h4>
              <p className="text-2xl text-slate-200 font-light leading-snug">
                To provide the world with unshakeable cognitive borders, ensuring intelligence remains a universal right.
              </p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="space-y-6 border-l-2 border-purple-500/20 pl-8">
              <h4 className="text-purple-400 font-bold tracking-widest uppercase text-sm">Our Vision</h4>
              <p className="text-2xl text-slate-200 font-light leading-snug">
                Building a decentralized neural fabric where every interaction is sovereign and every model is secure.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL STATEMENT */}
      <section className="py-40 relative z-10">
        <div className="mx-auto max-w-4xl px-6 text-center space-y-8">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-cyan-500 to-transparent mx-auto"
          />
          <motion.h2 {...fadeInUp} className="text-4xl md:text-7xl font-bold text-white tracking-tighter">
            The Horizon <br />
            Is Yours.
          </motion.h2>
          <motion.p {...fadeInUp} transition={{ delay: 0.2 }} className="text-slate-500 uppercase tracking-[0.6em] font-bold text-xs">
            NOVALISEO INTELLIGENCE © 2026
          </motion.p>
        </div>
      </section>

    </div>
  )
}
