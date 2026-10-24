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
  autoPlayInterval = 4000,
  imageHeight = "h-full min-h-[320px] lg:min-h-[440px] lg:h-[460px] xl:h-[500px]",
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
    <div className={cn("w-full h-full flex flex-col justify-between", className)}>
      <div className="max-w-7xl 2xl:max-w-[1550px] mx-auto w-full flex flex-col h-full justify-between">
        {/* Header - Compact footprint to guarantee single-screen fit */}
        {title && (
          <div className="text-left mb-4 sm:mb-6 shrink-0">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200/80 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-[10px] font-mono font-bold tracking-wider text-blue-700 uppercase">
                Institutional Tooling &amp; Lab Reality
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-1 text-slate-600 dark:text-slate-400 text-xs sm:text-sm max-w-3xl leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Responsive Grid: Steps List on Left, Dynamic Visual on Right */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-stretch min-h-0">
          {/* Steps List */}
          <div className="order-2 lg:order-1 lg:col-span-5 flex flex-col justify-between space-y-2 sm:space-y-2.5 w-full">
            {features.map((feature, index) => {
              const isActive = index === currentFeature;
              return (
                <motion.div
                  key={index}
                  onClick={() => handleSelectFeature(index)}
                  className={cn(
                    "group relative flex items-start gap-3 sm:gap-4 p-2.5 sm:p-3 rounded-xl cursor-pointer transition-all duration-300 text-left border",
                    isActive
                      ? "bg-white dark:bg-slate-900 border-blue-300 dark:border-blue-500/40 shadow-sm shadow-blue-500/10 ring-1 ring-blue-500/20"
                      : "bg-slate-50/70 dark:bg-slate-900/40 border-slate-200/60 hover:bg-white hover:border-slate-300"
                  )}
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0.65 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Step Number / Icon */}
                  <div className="relative shrink-0 mt-0.5">
                    <div
                      className={cn(
                        "w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center font-mono font-bold text-xs transition-all duration-200 border",
                        isActive
                          ? "bg-blue-600 border-blue-500 text-white shadow-xs shadow-blue-600/30 scale-105"
                          : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 group-hover:border-blue-300"
                      )}
                    >
                      {index <= currentFeature ? (
                        <span className="text-sm font-bold">✓</span>
                      ) : (
                        <span>{index + 1}</span>
                      )}
                    </div>

                    {/* Miniature Progress Bar for active step */}
                    {isActive && (
                      <div className="absolute -bottom-1.5 left-0.5 right-0.5 h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-600 rounded-full transition-all duration-100 ease-linear"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                        {feature.step}
                      </span>
                    </div>
                    <h3 className={cn(
                      "text-xs sm:text-sm font-bold tracking-tight transition-colors duration-200 line-clamp-1",
                      isActive ? "text-slate-950 dark:text-white" : "text-slate-700 dark:text-slate-300"
                    )}>
                      {feature.title || feature.step}
                    </h3>
                    
                    {/* Collapsible/Expandable Description */}
                    <motion.div
                      initial={false}
                      animate={{ 
                        height: isActive ? "auto" : 0,
                        opacity: isActive ? 1 : 0,
                        marginTop: isActive ? 4 : 0
                      }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal line-clamp-2">
                        {feature.content}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Feature Visual Showcase - Proportional 100% Fit */}
          <div
            className={cn(
              "order-1 lg:order-2 lg:col-span-7 relative w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl bg-slate-950",
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
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
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
                      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 text-white z-10 flex flex-col justify-end">
                        <span className="text-[10px] font-mono font-bold tracking-wider text-blue-400 uppercase mb-1">
                          {feature.step}
                        </span>
                        <div className="text-base sm:text-xl font-bold tracking-tight text-white line-clamp-1">
                          {feature.title}
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl line-clamp-2 leading-relaxed">
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
