"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// Compatibility image component for Vite / pure React environments
function Image({
  src,
  alt = "",
  className = "",
  width,
  height,
  ...props
}: {
  src: string;
  alt?: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  [key: string]: any;
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      {...props}
    />
  );
}

export interface Feature {
  step: string;
  title?: string;
  content: string;
  image: string;
}

export interface FeatureStepsProps {
  features: Feature[];
  className?: string;
  title?: string;
  subtitle?: string;
  autoPlayInterval?: number;
  imageHeight?: string;
}

export function FeatureSteps({
  features,
  className,
  title = "How to get Started",
  subtitle,
  autoPlayInterval = 3500,
  imageHeight = "h-[360px] md:h-[480px]",
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!features || features.length === 0) return;

    const intervalStep = 100;
    const increment = 100 / (autoPlayInterval / intervalStep);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev + increment < 100) {
          return prev + increment;
        } else {
          setCurrentFeature((curr) => (curr + 1) % features.length);
          return 0;
        }
      });
    }, intervalStep);

    return () => clearInterval(timer);
  }, [features?.length, autoPlayInterval]);

  const handleSelectFeature = (index: number) => {
    setCurrentFeature(index);
    setProgress(0);
  };

  return (
    <div className={cn("p-6 sm:p-8 md:p-12 w-full", className)}>
      <div className="max-w-7xl mx-auto w-full">
        {title && (
          <div className="text-left mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-950 dark:text-white tracking-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Steps List */}
          <div className="order-2 md:order-1 md:col-span-6 lg:col-span-5 space-y-6 sm:space-y-7 w-full">
            {features.map((feature, index) => {
              const isActive = index === currentFeature;
              return (
                <motion.div
                  key={index}
                  onClick={() => handleSelectFeature(index)}
                  className={cn(
                    "group flex items-start gap-4 sm:gap-6 p-4 sm:p-5 rounded-2xl cursor-pointer transition-all duration-300 text-left border",
                    isActive
                      ? "bg-white/90 dark:bg-slate-900/90 border-blue-200/80 dark:border-blue-500/30 shadow-md shadow-blue-500/5 -translate-y-0.5"
                      : "bg-slate-50/50 dark:bg-slate-900/30 border-transparent hover:bg-slate-100/70 hover:border-slate-200"
                  )}
                  initial={{ opacity: 0.4 }}
                  animate={{ opacity: isActive ? 1 : 0.55 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Step Number / Icon */}
                  <div className="relative shrink-0 mt-0.5">
                    <motion.div
                      className={cn(
                        "w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center font-mono font-bold text-sm transition-all duration-300 border",
                        isActive
                          ? "bg-blue-600 border-blue-500 text-white shadow-md shadow-blue-600/30 scale-105"
                          : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 group-hover:border-blue-300"
                      )}
                    >
                      {index <= currentFeature ? (
                        <span className="text-base font-bold">✓</span>
                      ) : (
                        <span>{index + 1}</span>
                      )}
                    </motion.div>

                    {/* Miniature Progress Bar for active step */}
                    {isActive && (
                      <div className="absolute -bottom-2 left-1 right-1 h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-600 rounded-full transition-all duration-100 ease-linear"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                        {feature.step}
                      </span>
                    </div>
                    <h3 className={cn(
                      "text-base sm:text-lg lg:text-xl font-bold tracking-tight transition-colors duration-200 mt-0.5",
                      isActive ? "text-slate-950 dark:text-white" : "text-slate-700 dark:text-slate-300"
                    )}>
                      {feature.title || feature.step}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                      {feature.content}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Feature Visual Showcase */}
          <div
            className={cn(
              "order-1 md:order-2 md:col-span-6 lg:col-span-7 relative w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl bg-slate-950",
              imageHeight
            )}
          >
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={index}
                      className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden"
                      initial={{ y: 60, opacity: 0, scale: 0.98 }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      exit={{ y: -60, opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Image
                        src={feature.image}
                        alt={feature.title || feature.step}
                        className="w-full h-full object-cover transition-transform duration-1000 ease-out hover:scale-105"
                        width={1200}
                        height={700}
                      />
                      {/* Atmospheric Cinematic Gradients */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-85" />
                      
                      {/* Floating Caption Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white z-10 flex flex-col justify-end">
                        <span className="text-xs font-mono font-bold tracking-wider text-blue-400 uppercase mb-1">
                          {feature.step}
                        </span>
                        <div className="text-lg sm:text-2xl font-bold tracking-tight text-white">
                          {feature.title}
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300 mt-1.5 max-w-xl line-clamp-2 leading-relaxed">
                          {feature.content}
                        </p>
                      </div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureSteps;
