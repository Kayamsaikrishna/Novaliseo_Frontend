"use client";
import React, { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { SpotLight } from "@react-three/drei";
import { cn } from "../lib/utils";

const METAL_NOISE = 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%221.5%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E")';
const GRAIN_NOISE = 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22g%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E")';

type RoomProps = {
  backWall?: { tl: [number, number]; tr: [number, number]; br: [number, number]; bl: [number, number] };
  lightsOn?: boolean;
  intensity?: number;
  lightColor?: string;
  spots?: number[];
  vignette?: number;
  isFlickering?: boolean;
  className?: string;
};

export function VolumetricRoom({
  backWall = {
    tl: [18, 12],
    tr: [82, 12],
    br: [82, 72],
    bl: [18, 72],
  },
  lightsOn = true,
  intensity = 1,
  lightColor = "220,240,255",
  spots = [50],
  vignette = 0.6,
  isFlickering = false,
  className = "",
}: RoomProps) {
  const { tl, tr, br, bl } = backWall;
  const poly = useMemo(
    () => (pts: readonly (readonly [number, number])[]) =>
      `polygon(${pts.map(([x, y]) => `${x}% ${y}%`).join(", ")})`,
    []
  );
  const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

  return (
    <div
      aria-hidden
      className={`absolute inset-0 overflow-hidden bg-black/90 pointer-events-none rounded-3xl ${className}`}
    >
      {/* Back Wall */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: poly([tl, tr, br, bl]),
          background:
            "linear-gradient(to bottom, rgba(16,20,26,0.95) 0%, rgba(6,9,14,0.98) 100%)",
        }}
      />
      {/* Ceiling */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: poly([[0, 0], [100, 0], tr, tl]),
          background:
            "linear-gradient(to bottom, rgba(2,4,8,1) 0%, rgba(10,14,20,0.85) 100%)",
        }}
      />
      {/* Left Wall */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: poly([[0, 0], tl, bl, [0, 100]]),
          background:
            "linear-gradient(to right, rgba(4,6,10,1) 0%, rgba(12,16,24,0.9) 70%, rgba(20,26,36,0.95) 100%)",
        }}
      />
      {/* Right Wall */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: poly([[100, 0], tr, br, [100, 100]]),
          background:
            "linear-gradient(to left, rgba(4,6,10,1) 0%, rgba(12,16,24,0.9) 70%, rgba(20,26,36,0.95) 100%)",
        }}
      />
      {/* Floor */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: poly([[0, 100], [100, 100], br, bl]),
          background:
            "linear-gradient(to top, rgba(10,14,20,0.95) 0%, rgba(4,6,10,0.98) 100%)",
        }}
      />

      {/* Grid Wireframe Lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 10 }}>
        <defs>
          <linearGradient id="chamberBaseGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
            <stop offset="30%" stopColor="#38bdf8" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#38bdf8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="chamberVGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
            <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <line x1={`${bl[0]}%`} y1={`${bl[1]}%`} x2={`${br[0]}%`} y2={`${br[1]}%`}
          stroke="rgba(56,189,248,0.25)" strokeWidth="4" style={{ filter: "blur(3px)" }} />
        <line x1={`${bl[0]}%`} y1={`${bl[1]}%`} x2={`${br[0]}%`} y2={`${br[1]}%`}
          stroke="url(#chamberBaseGrad)" strokeWidth="1" />
        <line x1={`${tl[0]}%`} y1={`${tl[1]}%`} x2={`${bl[0]}%`} y2={`${bl[1]}%`}
          stroke="url(#chamberVGrad)" strokeWidth="1" />
        <line x1={`${tr[0]}%`} y1={`${tr[1]}%`} x2={`${br[0]}%`} y2={`${br[1]}%`}
          stroke="url(#chamberVGrad)" strokeWidth="1" />
      </svg>

      {/* Surface Light Glow Reflections */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 15,
          opacity: lightsOn ? intensity : 0,
          transition: isFlickering ? "none" : `opacity 700ms ${EASE}`,
          mixBlendMode: "screen",
          willChange: "opacity",
        }}
      >
        <div 
          className="absolute inset-0" 
          style={{ 
            clipPath: poly([tl, tr, br, bl]), 
            background: spots.map(x => `radial-gradient(ellipse 35% 50% at ${x}% 65%, rgba(${lightColor},0.20) 0%, transparent 75%)`).join(", ")
          }} 
        />
        <div 
          className="absolute inset-0" 
          style={{ 
            clipPath: poly([[0, 100], [100, 100], br, bl]), 
            background: spots.map(x => `radial-gradient(ellipse 45% 40% at ${x}% 82%, rgba(${lightColor},0.16) 0%, transparent 65%)`).join(", ")
          }} 
        />
      </div>

      {/* 3D Volumetric Spotlight Beams via Three.js */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 16, mixBlendMode: "screen" }}
      >
        {spots.map((pos, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: lightsOn ? intensity : 0 }}
            transition={isFlickering ? { duration: 0 } : { delay: i * 0.1, duration: 0.8, ease: "easeInOut" }}
            className="absolute flex w-[260px] h-[90%] -translate-x-1/2 justify-center pointer-events-none"
            style={{ 
              left: `${pos}%`, 
              top: "calc(2% + 65px)",
              mixBlendMode: "screen",
              willChange: "opacity"
            }}
          >
            <Canvas camera={{ position: [0, 0, 10], fov: 45 }} shadows={false} gl={{ alpha: true }}>
              <ambientLight intensity={0.4} />
              <SpotLight
                distance={14}
                angle={0.32}
                attenuation={5}
                anglePower={4}
                color={`rgb(${lightColor})`}
                position={[0, 4.5, 0]}
                volumetric
                opacity={1}
                radiusTop={0.12}
                radiusBottom={5}
              />
            </Canvas>
          </motion.div>
        ))}
      </div>

      {/* Overhead Spotlight Fixtures Mounted to Ceiling */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 31 }}
      >
        {spots.map((pos, i) => (
          <div key={i} className="absolute flex flex-col items-center" style={{ left: `${pos}%`, top: '1.5%', transform: 'translate(-50%, 0)' }}>
            <div className="w-[12px] h-[26px] rounded-xs border border-zinc-900 shadow-[0_4px_8px_rgba(0,0,0,0.9)] relative overflow-hidden"
                 style={{ background: 'linear-gradient(to right, #555 0%, #ffffff 40%, #888 60%, #222 100%)' }}>
               <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-[5px] h-[5px] bg-zinc-950 rounded-full" />
            </div>
            <div className="w-[7px] h-[14px] bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-950 border-x border-black relative">
               <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-[15px] h-[15px] rounded-full border border-zinc-900 shadow-[0_3px_6px_rgba(0,0,0,1)]"
                    style={{ background: 'radial-gradient(circle at top left, #666, #111)' }} />
            </div>
            <div className="relative mt-[4px] w-[46px] h-[52px] flex justify-center perspective-near">
              <div className="absolute inset-0 rounded-b-xl rounded-t-xs border border-black shadow-[0_15px_25px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col justify-evenly"
                   style={{ background: 'linear-gradient(to right, #111 0%, #3a3a3a 30%, #555 50%, #2a2a2a 80%, #000 100%)' }}>
                 <div className="absolute inset-0 opacity-[0.35] mix-blend-overlay pointer-events-none" style={{ backgroundImage: METAL_NOISE }} />
                 <div className="w-full h-[1.5px] bg-black/90 z-10" />
                 <div className="w-full h-[1.5px] bg-black/90 z-10" />
                 <div className="w-full h-[1.5px] bg-black/90 z-10" />
              </div>
              <div className="absolute bottom-[-5px] w-[50px] h-[16px] rounded-[50%] border-2 border-zinc-900 shadow-[0_8px_12px_rgba(0,0,0,1)] flex items-center justify-center z-10 overflow-hidden"
                   style={{ background: 'radial-gradient(ellipse at center, #222, #000)' }}>
                 <div className="w-[28px] h-[8px] rounded-[50%] transition-all duration-700"
                      style={{
                        background: lightsOn ? '#ffffff' : '#111',
                        boxShadow: lightsOn 
                          ? `0 0 20px 8px rgba(255,255,255,0.9), inset 0 0 6px #fff`
                          : `inset 0 2px 4px rgba(0,0,0,0.9)`,
                      }}
                 />
              </div>
              <div className="absolute bottom-[-14px] w-[38px] h-[16px] border border-black shadow-[0_10px_10px_rgba(0,0,0,0.8)] origin-top z-20 flex justify-center"
                   style={{ transform: 'rotateX(-45deg)', background: 'linear-gradient(to bottom, #222, #050505)' }} />
              <div className="absolute bottom-[5px] w-[38px] h-[16px] border border-black origin-bottom z-0"
                   style={{ transform: 'rotateX(45deg)', background: 'linear-gradient(to top, #111, #000)' }} />
            </div>
          </div>
        ))}
      </div>

      {/* Ceiling Structural Truss Bar */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ 
          zIndex: 30,
          clipPath: poly([[0, 0], [100, 0], tr, tl])
        }}
      >
        <div 
          className="absolute w-full h-[20px]"
          style={{ 
            top: '1.5%', 
            left: '0%', 
            background: 'linear-gradient(to bottom, #111 0%, #333 35%, #444 50%, #222 80%, #000 100%)',
            boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.15), 0 10px 20px -5px rgba(0,0,0,0.8)'
          }}
        >
          <div className="absolute inset-0 opacity-[0.35] mix-blend-overlay pointer-events-none" style={{ backgroundImage: METAL_NOISE }} />
        </div>
      </div>

      {/* Vignette Shadow */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 20,
          background: `radial-gradient(ellipse 90% 80% at 50% 50%,
            transparent 50%,
            rgba(0,0,0,${vignette}) 100%)`,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 25,
          opacity: 0.035,
          mixBlendMode: "screen",
          backgroundImage: GRAIN_NOISE,
          backgroundSize: "256px 256px",
        }}
      />
    </div>
  );
}

export const VolumetricStudio = ({ 
  className,
  spots = [50],
  children
}: { 
  className?: string;
  spots?: number[];
  children?: React.ReactNode;
}) => {
  const [lightsOn, setLightsOn] = useState(false);
  const [isFlickering, setIsFlickering] = useState(true);

  useEffect(() => {
    let mounted = true;
    const runFlicker = async () => {
      const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
      await sleep(500);
      if (!mounted) return;
      setLightsOn(true);
      await sleep(100);
      setLightsOn(false);
      await sleep(250);
      setLightsOn(true);
      await sleep(50);
      setLightsOn(false);
      await sleep(180);
      setLightsOn(true);
      await sleep(40);
      setLightsOn(false);
      await sleep(50);
      setLightsOn(true);
      await sleep(350);
      if (!mounted) return;
      setIsFlickering(false);
      setLightsOn(true);
    };
    runFlicker();
    return () => { mounted = false; };
  }, []);

  return (
    <div className={cn("relative w-full h-full overflow-hidden font-sans rounded-3xl", className)}>
      <VolumetricRoom
        lightsOn={lightsOn}
        intensity={1}
        lightColor="220,240,255"
        spots={spots}
        isFlickering={isFlickering}
      />
      <div className="relative z-10 w-full h-full pointer-events-none">
        {children}
      </div>
    </div>
  );
};
