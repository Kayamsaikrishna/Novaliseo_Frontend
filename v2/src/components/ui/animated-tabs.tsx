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
  className,
}: AnimatedTabsProps) => {
  const [internalActiveTab, setInternalActiveTab] = useState<string>(
    defaultTab || tabs[0]?.id
  );

  const activeTabId = controlledActiveTab !== undefined ? controlledActiveTab : internalActiveTab;

  const handleTabClick = (tabId: string) => {
    if (controlledActiveTab === undefined) {
      setInternalActiveTab(tabId);
    }
    onTabChange?.(tabId);
  };

  if (!tabs?.length) return null;

  const activeTabObj = tabs.find((t) => t.id === activeTabId) || tabs[0];

  return (
    <div className={cn("w-full flex flex-col gap-4", className)}>
      {/* Tab Navigation Pill Bar */}
      <div className="flex gap-2 sm:gap-3 flex-wrap bg-slate-900/80 border border-white/10 backdrop-blur-md p-1.5 rounded-2xl w-fit self-start sm:self-center shadow-lg">
        {tabs.map((tab) => {
          const isActive = activeTabId === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={cn(
                "relative px-4 sm:px-5 py-2 text-xs sm:text-sm font-mono font-bold rounded-xl transition-all outline-none cursor-pointer flex items-center gap-2",
                isActive
                  ? "text-white shadow-sm"
                  : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="active-tab-indicator"
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {tab.badge && (
                  <span
                    className={cn(
                      "text-[10px] px-1.5 py-0.5 rounded-md font-mono",
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-slate-800 text-slate-400"
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

      {/* Tab Content Display Container */}
      <div className="p-6 sm:p-8 lg:p-10 bg-slate-950/75 shadow-[0_20px_60px_rgba(0,0,0,0.4)] text-white backdrop-blur-xl rounded-3xl border border-white/10 w-full min-h-[380px] sm:min-h-[420px] flex items-center overflow-hidden relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTabObj.id}
            initial={{
              opacity: 0,
              scale: 0.96,
              y: 8,
              filter: "blur(8px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              scale: 0.96,
              y: -8,
              filter: "blur(8px)",
            }}
            transition={{
              duration: 0.38,
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
