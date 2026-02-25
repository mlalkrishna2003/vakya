"use client";

import { motion } from "framer-motion";
import { Download, Search, Sparkles, Filter, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const categories = [
    { id: "all", name: "All Experiences" },
    { id: "medical", name: "Heritage" },
    { id: "fin", name: "Life Logic" },
    { id: "legal", name: "The Vault" },
    { id: "ops", name: "Custom" },
];

const packs = [
    {
        id: "heritage-v1",
        name: "Indic Heritage (The Roots)",
        cat: "medical",
        desc: "Neural mapping of classic literature and regional idioms. Forged for cultural resonance.",
        size: "1.2 GB",
        downloads: "14.2k",
        type: "Sovereign Engine",
    },
    {
        id: "daily-resonance",
        name: "Daily Companion (The Life)",
        cat: "fin",
        desc: "Ultra-low latency conversational logic for personal tasks and empathetic interaction.",
        size: "840 MB",
        downloads: "8.1k",
        type: "Neural Dynamic",
    },
    {
        id: "logic-vault",
        name: "Personal Legacy (The Vault)",
        cat: "legal",
        desc: "Zero-knowledge encrypted storage for family archives and custom voice synthesis.",
        size: "2.1 GB",
        downloads: "5.4k",
        type: "Vault Secured",
    },
];

export default function KnowledgeHub() {
    const [activeCat, setActiveCat] = useState("all");
    const [installing, setInstalling] = useState<Record<string, number>>({});
    const [installed, setInstalled] = useState<Record<string, boolean>>({});

    const handleDownload = (packId: string) => {
        if (installed[packId] || installing[packId] !== undefined) return;

        setInstalling(prev => ({ ...prev, [packId]: 0 }));

        const interval = setInterval(() => {
            setInstalling(prev => {
                const currentProgress = prev[packId];
                if (currentProgress >= 100) {
                    clearInterval(interval);
                    setInstalled(over => ({ ...over, [packId]: true }));
                    const { [packId]: _unused, ...rest } = prev;
                    return rest;
                }
                return { ...prev, [packId]: currentProgress + 10 };
            });
        }, 300);
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-[10px] font-black text-teal-400 uppercase tracking-widest">
                        <Sparkles className="w-3 h-3" />
                        Intelligence Marketplace
                    </div>
                    <h2 className="text-4xl font-black text-white tracking-tighter">The Knowledge Hub</h2>
                    <p className="text-slate-400 max-w-md">
                        Download pre-built domain authority or seed your own industry with public data.
                    </p>
                </div>

                <div className="flex items-center gap-2 w-full md:w-auto">
                    <div className="relative flex-1 md:w-64">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <input
                            type="text"
                            placeholder="Search sectors..."
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-11 pr-4 text-sm focus:outline-none focus:border-teal-500/50 transition-all"
                        />
                    </div>
                    <button
                        aria-label="Filter Sectors"
                        className="p-3 rounded-2xl glass hover:bg-white/5 transition-all"
                    >
                        <Filter className="w-5 h-5 text-slate-400" />
                    </button>
                </div>
            </div>

            {/* Category Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setActiveCat(cat.id)}
                        className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${activeCat === cat.id
                            ? "bg-teal-500 text-black shadow-[0_0_20px_rgba(20,184,166,0.4)]"
                            : "glass text-slate-400 hover:text-white"
                            }`}
                    >
                        {cat.name}
                    </button>
                ))}
            </div>

            {/* Packs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {packs.filter(p => activeCat === "all" || p.cat === activeCat).map((pack) => (
                    <div key={pack.id} className="glass p-6 rounded-[32px] border-white/5 hover:border-teal-500/30 transition-all flex flex-col group">
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-all">
                                <GlobeIcon packId={pack.id} />
                            </div>
                            <div className="text-right">
                                <p className="text-[10px] font-bold text-slate-500 uppercase">{pack.type}</p>
                                <p className="text-teal-500 font-mono text-xs">{pack.size}</p>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold mb-2 group-hover:text-teal-400 transition-all">{pack.name}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1">
                            {pack.desc}
                        </p>

                        <div className="flex flex-col gap-4 pt-4 border-t border-white/5">
                            {installing[pack.id] !== undefined && (
                                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${installing[pack.id]}%` }}
                                        className="h-full bg-teal-500"
                                    />
                                </div>
                            )}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1.5">
                                    <CheckCircle2 className="w-4 h-4 text-teal-500" />
                                    <span className="text-xs font-bold text-slate-300">{pack.downloads} Users</span>
                                </div>
                                <button
                                    onClick={() => handleDownload(pack.id)}
                                    disabled={installed[pack.id] || installing[pack.id] !== undefined}
                                    className={`p-3 rounded-xl transition-all group/btn ${installed[pack.id] ? 'bg-teal-500/20 text-teal-500' : 'bg-white/5 hover:bg-teal-500 hover:text-black'
                                        }`}
                                >
                                    {installed[pack.id] ? <CheckCircle2 className="w-5 h-5" /> : <Download className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                {/* The "Seed New" Industry Card */}
                <div className="p-6 rounded-[32px] border-2 border-dashed border-white/10 flex flex-col items-center justify-center text-center space-y-4 hover:border-teal-500/30 transition-all cursor-pointer group">
                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-teal-500/10 transition-all">
                        <PlusIcon />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">Seed New Sector</h3>
                        <p className="text-slate-500 text-sm max-w-[200px] mx-auto mt-2">
                            Start with a public domain knowledge base and layer your sauce.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function GlobeIcon({ packId }: { packId: string }) {
    return <Download className="w-6 h-6" />;
}

function PlusIcon() {
    return (
        <svg className="w-8 h-8 text-slate-500 group-hover:text-teal-500 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
    );
}
