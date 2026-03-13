"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "../lib/utils"

interface Feature {
  step: string
  title?: string
  content: string
  image: string
}

interface FeatureStepsProps {
  features: Feature[]
  className?: string
  title?: string
  autoPlayInterval?: number
  imageHeight?: string
}

export function FeatureSteps({
  features,
  className,
  title = "How to get Started",
  autoPlayInterval = 3000,
  imageHeight = "h-[400px]",
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100))
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length)
        setProgress(0)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [progress, features.length, autoPlayInterval])

  return (
    <div className={cn("px-4 md:px-8", className)}>
      <div className="max-w-7xl mx-auto w-full bg-gradient-to-br from-white/[0.08] to-transparent backdrop-blur-2xl rounded-[3rem] border border-white/10 shadow-2xl shadow-black/50 p-6 md:p-10 lg:p-12 relative shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-10 text-center text-white tracking-tight">
          {title}
        </h2>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 lg:gap-16 relative z-10">
          <div className="order-2 md:order-1 space-y-4 md:space-y-6 relative z-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 md:gap-6 cursor-pointer"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: index === currentFeature ? 1 : 0.4 }}
                transition={{ duration: 0.5 }}
                onClick={() => {
                  setCurrentFeature(index);
                  setProgress(0);
                }}
              >
                <motion.div
                  className={cn(
                    "w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2",
                    index === currentFeature
                      ? "bg-cyan-500 border-cyan-500 text-white scale-110 shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                      : "bg-transparent border-slate-600 text-slate-400",
                  )}
                >
                  {index <= currentFeature ? (
                    <span className="text-lg font-bold">✓</span>
                  ) : (
                    <span className="text-lg font-semibold">{index + 1}</span>
                  )}
                </motion.div>

                <div className="flex-1">
                  <h3 className={cn("text-lg md:text-2xl font-bold transition-colors", index === currentFeature ? "text-white" : "text-slate-500")}>
                    {feature.title || feature.step}
                  </h3>
                  <p className={cn("text-xs md:text-base mt-1 leading-relaxed font-light transition-colors", index === currentFeature ? "text-slate-200" : "text-slate-400")}>
                    {feature.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div
            className={cn(
              "order-1 md:order-2 relative h-[250px] md:h-[350px] lg:h-[420px] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl bg-950/40 backdrop-blur-2xl self-center w-full"
            )}
          >
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={index}
                      className="absolute inset-0 rounded-xl overflow-hidden"
                      initial={{ y: 50, opacity: 0, scale: 0.95 }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      exit={{ y: -50, opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <img
                        src={feature.image}
                        alt={feature.step}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80" />
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
