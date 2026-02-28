import React from 'react';
import { motion } from 'framer-motion';

const StatusTicker = () => {
    const statuses = [
        { label: "ENCRYPTION", value: "AES-512 QUANTUM-READY", status: "SECURE" },
        { label: "LATENCY", value: "0.02ms EDGE-MESH", status: "OPTIMAL" },
        { label: "SOVEREIGNTY", value: "100% INDIGENOUS STACK", status: "VERIFIED" },
        { label: "NODES", value: "FEDERATED SWARM ACTIVE", status: "STABLE" },
        { label: "INTEGRITY", value: "BIOS-LEVEL VERIFICATION", status: "PASSED" },
        { label: "GNSS", value: "DENIED-ENVIRONMENT READY", status: "ACTIVE" },
    ];

    // Duplicate for seamless loop
    const duplicatedStatuses = [...statuses, ...statuses, ...statuses];

    return (
        <div className="w-full bg-slate-900/5 backdrop-blur-sm border-t border-blue-500/10 py-2 overflow-hidden select-none pointer-events-none">
            <div className="flex items-center gap-12 animate-marquee-fast">
                {duplicatedStatuses.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 whitespace-nowrap">
                        <span className="text-[10px] font-bold text-slate-400 tracking-widest">{item.label}</span>
                        <span className="text-[10px] font-mono text-blue-600 font-bold">{item.value}</span>
                        <span className="text-[10px] font-black text-blue-400/50">[{item.status}]</span>
                        <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse mx-4" />
                    </div>
                ))}
            </div>

            <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee-fast {
          animation: marquee 30s linear infinite;
        }
      `}</style>
        </div>
    );
};

export default StatusTicker;
