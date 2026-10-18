import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Sparkles, Check, ArrowRight, RotateCcw, Volume2, VolumeX } from "lucide-react";
import NoiseBlobsCanvas, { PALETTES } from "./NoiseBlobsCanvas";

export default function NoiseBlobsHero() {
  const [activePalette, setActivePalette] = useState("lowtide");
  const [stirFactor, setStirFactor] = useState(1.0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeMode, setActiveMode] = useState<"lowtide" | "trainings">("lowtide");
  const [audioFeedback, setAudioFeedback] = useState(false);

  // Play button simulates ambient acoustic synthesizer feedback (Web Audio API synthetic tone)
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(220, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.6);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.8);
        setAudioFeedback(true);
        setTimeout(() => setAudioFeedback(false), 800);
      }
    } catch (e) {
      // AudioContext not allowed or unsupported
    }
  };

  return (
    <div className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
      
      {/* ========================================================================= */}
      {/* 1. HERO SHOWCASE CARD (EXACT AESTHETIC & STRUCTURE FROM SCREENSHOT)       */}
      {/* ========================================================================= */}
      <div className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] rounded-[32px] sm:rounded-[44px] bg-[#07090e] border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.85)] overflow-hidden flex flex-col justify-between p-6 sm:p-10 lg:p-14 select-none group/herocard">
        
        {/* ================= 3D NOISE BLOBS WEBGL CANVAS BACKGROUND ================= */}
        <NoiseBlobsCanvas 
          paletteKey={activePalette}
          onStirFactorChange={setStirFactor}
          interactive={true}
        />

        {/* Ambient Dark Gradient Vignette for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07090e]/95 via-[#07090e]/65 to-transparent pointer-events-none z-10 w-full lg:w-3/4" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090e]/90 via-transparent to-[#07090e]/40 pointer-events-none z-10" />

        {/* ================= TOP ROW: BADGE + CONTROLS ================= */}
        <div className="relative z-20 flex items-center justify-between w-full">
          {/* Top Left: BACKGROUND Pill Badge */}
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/15 text-white/90 border border-white/15 backdrop-blur-xl transition-all shadow-md">
              BACKGROUND
            </span>

            {/* Mode Switcher Toggle: Lowtide (Screenshot) vs Novaliseo Trainings */}
            <div className="hidden sm:flex items-center p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <button
                onClick={() => setActiveMode("lowtide")}
                className={`text-[11px] font-mono px-3 py-1 rounded-full transition-all ${
                  activeMode === "lowtide"
                    ? "bg-white text-black font-bold shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Lowtide View
              </button>
              <button
                onClick={() => setActiveMode("trainings")}
                className={`text-[11px] font-mono px-3 py-1 rounded-full transition-all ${
                  activeMode === "trainings"
                    ? "bg-cyan-400 text-black font-bold shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Workforce Track
              </button>
            </div>
          </div>

          {/* Top Right: Close / Reset Button */}
          <div className="flex items-center gap-3">
            {audioFeedback && (
              <span className="text-xs font-mono text-amber-300 animate-pulse flex items-center gap-1.5 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                <Volume2 className="w-3.5 h-3.5" /> Tone Triggered
              </span>
            )}
            <button
              onClick={() => {
                setActivePalette("lowtide");
                setActiveMode("lowtide");
              }}
              title="Reset Hero View"
              aria-label="Reset view"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white flex items-center justify-center backdrop-blur-xl border border-white/15 transition-all hover:scale-105 active:scale-95 shadow-md"
            >
              ✕
            </button>
          </div>
        </div>

        {/* ================= CENTER CONTENT: EDITORIAL TITLE & NARRATIVE ================= */}
        <div className="relative z-20 max-w-xl lg:max-w-2xl py-8 my-auto text-left">
          <AnimatePresence mode="wait">
            {activeMode === "lowtide" ? (
              <motion.div
                key="lowtide-content"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                {/* Screenshot Exact Headline: "Lowtide sessions" */}
                <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[100px] font-bold text-white tracking-tight leading-[0.92] mb-1 drop-shadow-2xl">
                  Lowtide
                </h1>
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-300 font-light block mb-6 tracking-normal">
                  sessions
                </span>

                {/* Screenshot Exact Editorial Narrative */}
                <p className="text-sm sm:text-base md:text-lg text-slate-300 font-normal leading-relaxed max-w-lg mb-8 drop-shadow-md">
                  Recorded after midnight in a converted boathouse, with the tape left running between takes. Six long pieces for synthesizer, cello and the sound of the harbour, mixed to be played quietly and all the way through.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="trainings-content"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                {/* Tailored Workforce Trainings Headline */}
                <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[92px] font-black text-white tracking-tight leading-[0.92] mb-1 drop-shadow-2xl">
                  Sovereign
                </h1>
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cyan-400 font-light block mb-6 tracking-normal">
                  workforce sessions
                </span>

                {/* Industry Trainings Curriculum Narrative */}
                <p className="text-sm sm:text-base md:text-lg text-slate-300 font-normal leading-relaxed max-w-lg mb-8 drop-shadow-md">
                  Deterministic robotics engineering, air-gapped simulation twins, and hardened edge silicon deployment. Hands-on intensive cohorts designed for aerospace engineers, defense operators, and specialized technical leaders.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Play / Interactive Trigger Button Overlay */}
          <div className="flex items-center gap-4">
            <button
              onClick={togglePlay}
              className="group/play inline-flex items-center gap-3.5 px-6 py-3.5 rounded-full bg-white/15 hover:bg-white/25 border border-white/30 backdrop-blur-xl text-white text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105 shadow-[0_15px_35px_rgba(0,0,0,0.5)] active:scale-95"
            >
              <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center transition-transform group-hover/play:scale-110">
                {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
              </div>
              <span>{isPlaying ? "Pause Session Sound" : "Listen to Harbour Take"}</span>
            </button>

            <a
              href="#training-tracks"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-transparent hover:bg-white/10 text-slate-300 hover:text-white text-sm font-medium transition-all"
            >
              <span>Explore Curriculum</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* ================= BOTTOM BAR INSIDE HERO: HINT & LIVE STIR GAUGE ================= */}
        <div className="relative z-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-6 border-t border-white/10 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Move pointer across the canvas to stir the fluid blobs</span>
          </div>

          <div className="flex items-center gap-2 bg-black/40 px-3 py-1 rounded-full border border-white/10">
            <span className="text-slate-400">Stir Velocity:</span>
            <span className={`font-bold ${stirFactor > 1.2 ? "text-amber-400" : "text-cyan-400"}`}>
              {stirFactor}x
            </span>
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 2. SPECIFICATION CAPTION BELOW HERO (EXACTLY AS IN SCREENSHOT)            */}
      {/* ========================================================================= */}
      <div className="mt-12 text-left">
        
        {/* Screenshot Exact Badge: "Personal & client use" */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-slate-300 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10">
            Personal & client use
          </span>

          {/* Interactive Palette Switcher Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-slate-400 mr-1">Shader Palette:</span>
            {Object.entries(PALETTES).map(([key, pal]) => (
              <button
                key={key}
                onClick={() => setActivePalette(key)}
                className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all border ${
                  activePalette === key
                    ? "bg-white text-black font-semibold border-white shadow-md scale-105"
                    : "bg-white/5 hover:bg-white/10 text-slate-300 border-white/10"
                }`}
              >
                {pal.name.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Screenshot Exact Heading: "Noise Blobs" */}
        <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-3">
          Noise Blobs
        </h2>

        {/* Screenshot Exact Description */}
        <p className="text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed font-light">
          Glossy blobs of poured paint: noise-displaced spheres banded from a palette, rippling and slowly spiralling, stirring faster under the pointer. Your content sits on top.
        </p>

      </div>

    </div>
  );
}
