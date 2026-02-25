"use client";

import { motion } from "framer-motion";
import { Globe, Microscope, Lock, Plus, ChevronRight } from "lucide-react";

const layers = [
    {
        id: "universal",
        title: "Universal Baseline",
        icon: <Globe className="w-6 h-6 text-blue-400" />,
        desc: "1,200 Epochs of verified wisdom. The core moral and cultural compass.",
        status: "Neural Core Locked",
        color: "from-blue-500/20 to-transparent",
    },
    {
        id: "domain",
        title: "Indic Heritage",
        icon: <Microscope className="w-6 h-6 text-teal-400" />,
        desc: "Regional master layers (Hindi, Tamil, Telugu). Forged for deep resonance.",
        status: "Heritage Active",
        color: "from-teal-500/20 to-transparent",
    },
    {
        id: "personal",
        title: "Personal Vault",
        icon: <Lock className="w-6 h-6 text-purple-400" />,
        desc: "Your proprietary &apos;Personal Logic&apos;. Zero-knowledge encryption. Local-first.",
        status: "Memory Calibrated",
        color: "from-purple-500/20 to-transparent",
    },
];

export default function KnowledgeTrinity() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-3xl font-bold text-white tracking-tighter">Knowledge Trinity</h2>
                    <p className="text-slate-400 text-sm">Orchestrate your agent&apos;s intelligence layers.</p>
                </div>
                <button className="p-3 rounded-full glass hover:bg-white/5 transition-all">
                    <Plus className="w-6 h-6 text-teal-500" />
                </button>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {layers.map((layer, index) => (
                    <motion.div
                        key={layer.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`relative p-6 rounded-3xl glass border border-white/5 overflow-hidden group hover:border-white/10 transition-all cursor-pointer bg-gradient-to-br ${layer.color}`}
                    >
                        <div className="flex items-start justify-between relative z-10">
                            <div className="flex gap-4">
                                <div className="p-3 rounded-2xl bg-black/40 border border-white/5 group-hover:scale-110 transition-all">
                                    {layer.icon}
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-xl font-bold text-white">{layer.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                                        {layer.desc}
                                    </p>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 text-[10px] font-bold text-slate-300 tracking-wider uppercase border border-white/5">
                                        <span className="w-1 h-1 rounded-full bg-teal-500" />
                                        {layer.status}
                                    </div>
                                </div>
                            </div>
                            <ChevronRight className="w-6 h-6 text-slate-600 group-hover:text-white transition-all" />
                        </div>

                        {/* Background Decorative Element */}
                        <div className="absolute -right-4 -bottom-4 w-32 h-32 rounded-full blur-[60px] opacity-20 bg-current pointer-events-none" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
