"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export interface Tab {
  id: string;
  label: string;
  badge?: string;
  bgImage?: string;
  content: React.ReactNode;
}

export interface AnimatedTabsProps {
  tabs?: Tab[];
  defaultTab?: string;
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
  autoShiftInterval?: number;
  className?: string;
}

const defaultTabs: Tab[] = [
  {
    id: "tab1",
    label: "Tab 1",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full h-full items-center">
        <img
          src="https://cdn.21st.dev/assets/mirror/64/64657bcc84d62a3e2e9bf0072792cd047365aa026786a49c5fd3d0bed329029a.jpg"
          alt="Tab 1"
          className="rounded-2xl w-full h-64 object-cover shadow-[0_0_20px_rgba(0,0,0,0.3)] border border-white/10"
        />
        <div className="flex flex-col gap-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Tab 1
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "tab2",
    label: "Tab 2",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full h-full items-center">
        <img
          src="https://cdn.21st.dev/assets/mirror/38/3893e965fca5498b686d3cf9c738b0ea7ef8f50b55b5b85a31cc0552aa784cd3.jpg"
          alt="Tab 2"
          className="rounded-2xl w-full h-64 object-cover shadow-[0_0_20px_rgba(0,0,0,0.3)] border border-white/10"
        />
        <div className="flex flex-col gap-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Tab 2
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
          </p>
        </div>
      </div>
    ),
  },
];

export const AnimatedTabs = ({
  tabs = defaultTabs,
  defaultTab,
  activeTab: controlledActiveTab,
  onTabChange,
  autoShiftInterval = 4500,
  className,
}: AnimatedTabsProps) => {
  const [internalActiveTab, setInternalActiveTab] = useState<string>(
    defaultTab || tabs[0]?.id
  );
  const [isPaused, setIsPaused] = useState(false);

  const activeTabId = controlledActiveTab !== undefined ? controlledActiveTab : internalActiveTab;

  const handleTabClick = (tabId: string) => {
    if (controlledActiveTab === undefined) {
      setInternalActiveTab(tabId);
    }
    onTabChange?.(tabId);
  };

  // Smooth automatic tab rotation when not hovered
  React.useEffect(() => {
    if (!autoShiftInterval || autoShiftInterval <= 0 || isPaused || tabs.length <= 1) return;
    const timer = setInterval(() => {
      const currentIndex = tabs.findIndex((t) => t.id === activeTabId);
      const nextIndex = (currentIndex + 1) % tabs.length;
      handleTabClick(tabs[nextIndex].id);
    }, autoShiftInterval);
    return () => clearInterval(timer);
  }, [activeTabId, isPaused, autoShiftInterval, tabs]);

  if (!tabs?.length) return null;

  const activeTabObj = tabs.find((t) => t.id === activeTabId) || tabs[0];

  return (
    <div
      className={cn("w-full flex flex-col gap-3.5 sm:gap-4 pointer-events-auto", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Tab Navigation Pill Bar */}
      <div className="flex gap-1.5 sm:gap-2 flex-wrap bg-white/85 border border-white/90 backdrop-blur-xl p-1.5 rounded-2xl w-fit self-start sm:self-center shadow-lg pointer-events-auto z-20">
        {tabs.map((tab) => {
          const isActive = activeTabId === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleTabClick(tab.id);
              }}
              onMouseEnter={() => handleTabClick(tab.id)}
              onTouchStart={() => handleTabClick(tab.id)}
              className={cn(
                "relative px-3.5 sm:px-5 py-2 text-xs sm:text-sm font-mono font-bold rounded-xl transition-all outline-none cursor-pointer flex items-center gap-2 select-none",
                isActive
                  ? "text-white shadow-md"
                  : "text-slate-700 hover:text-slate-950 hover:bg-white/70 active:scale-95"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="active-tab-indicator"
                  className="absolute inset-0 bg-slate-950 rounded-xl shadow-md"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2 pointer-events-none">
                {tab.badge && (
                  <span
                    className={cn(
                      "text-[10px] px-1.5 py-0.5 rounded-md font-mono",
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-slate-100 text-slate-600 border border-slate-200/70"
                    )}
                  >
                    {tab.badge}
                  </span>
                )}
                <span>{tab.label}</span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Tab Content Display Container - Refined Frosted Glass HUD */}
      <div className="p-5 sm:p-7 lg:p-8 bg-white/80 shadow-[0_24px_60px_-15px_rgba(15,23,42,0.14)] text-slate-900 backdrop-blur-2xl rounded-3xl border border-white/90 w-full min-h-[340px] sm:min-h-[380px] flex items-center overflow-hidden relative pointer-events-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTabObj.id}
            initial={{
              opacity: 0,
              scale: 0.98,
              y: 6,
              filter: "blur(4px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              scale: 0.98,
              y: -6,
              filter: "blur(4px)",
            }}
            transition={{
              duration: 0.28,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="w-full h-full"
          >
            {activeTabObj.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AnimatedTabs;
