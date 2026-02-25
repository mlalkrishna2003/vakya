"use client";

import { motion } from "framer-motion";
import { Code2, Plus, Terminal, Sparkles, BookOpen } from "lucide-react";
import { useState } from "react";

export default function Nexus() {
    const [selectedArch, setSelectedArch] = useState<string | null>(null);

    const handleDeploy = (archName?: string) => {
        setIsDeploying(true);
        const name = archName || "General Agent";
        setStatus(`Initializing ${name}...`);

        setTimeout(() => setStatus("Provisioning Pulse-X Node..."), 1000);
        setTimeout(() => setStatus("Injecting Neural weights..."), 2500);
        setTimeout(() => setStatus("Warming High-Frequency Bridge..."), 4000);
        setTimeout(() => {
            setIsDeploying(false);
            setStatus(`${name} Specialized.`);
            setTimeout(() => setStatus(null), 3000);
        }, 5500);
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-black text-blue-400 uppercase tracking-widest">
                        <Code2 className="w-3 h-3" />
                        Developer Nexus
                    </div>
                    <h2 className="text-4xl font-black text-white tracking-tighter">Creation Hub</h2>
                    <p className="text-slate-400 max-w-sm">
                        Forge new Sovereign Agents. Deploy neural architectures directly to the Local Pulse Cluster.
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    {status && (
                        <motion.span
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className={`text-[10px] font-black uppercase tracking-widest ${status.includes('Specialized') ? 'text-teal-400' : 'text-blue-400'}`}
                        >
                            {status}
                        </motion.span>
                    )}
                    <button
                        onClick={() => handleDeploy()}
                        disabled={isDeploying}
                        className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-blue-500 text-white font-bold shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:scale-105 transition-all active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
                    >
                        {isDeploying ? (
                            <div className="w-5 h-5 border-2 border-white border-t-transparent animate-spin rounded-full" />
                        ) : (
                            <Plus className="w-5 h-5" />
                        )}
                        {isDeploying ? "DEPLOYING..." : "New Agent"}
                    </button>
                </div>
            </div>

            {/* Featured Architect: Vakya MD */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass p-8 rounded-[2.5rem] border-teal-500/20 bg-teal-500/5 relative overflow-hidden group"
            >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Sparkles className="w-24 h-24 text-teal-500" />
                </div>
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                    <div className="w-24 h-24 rounded-3xl bg-teal-500 flex items-center justify-center font-black text-black text-4xl shadow-[0_0_40px_rgba(20,184,166,0.4)]">
                        M
                    </div>
                    <div className="flex-1 space-y-2 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-[10px] font-black text-teal-400 uppercase tracking-widest">
                            Genesis Advisor
                        </div>
                        <h3 className="text-3xl font-black text-white tracking-tighter">Vakya MD</h3>
                        <p className="text-slate-400 text-sm max-w-xl">
                            The Master Architect. Consult Vakya MD to draft specialized neural blueprints tailored for regional high-fidelity resonance.
                        </p>
                    </div>
                    <button
                        onClick={() => {
                            setStatus("Consulting Vakya MD...");
                            setTimeout(() => setStatus("MD: Launching Human Evolution..."), 2000);
                            setTimeout(() => setStatus(null), 5000);
                        }}
                        className="px-8 py-4 rounded-2xl bg-white text-black font-black text-sm uppercase tracking-widest hover:bg-teal-500 hover:text-white transition-all shadow-xl"
                    >
                        Consult MD
                    </button>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Architectures Card */}
                <div className="lg:col-span-2 glass p-8 rounded-[2.5rem] border-white/5 space-y-6">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xl font-bold tracking-tight uppercase">Agent Architectures</h3>
                        <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">4 Presets Available</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ArchCard
                            title="Contextual Oracle"
                            desc="Optimized for deep knowledge retrieval and zero-latency technical support."
                            tags={["RAG-Native", "Pulse-X"]}
                        />
                        <ArchCard
                            title="Creative Resonance"
                            desc="High emotional empathy for storytelling, coaching, and human companionship."
                            tags={["Bhaava-V2", "Epoch-Max"]}
                        />
                        <ArchCard
                            title="Executive Sentinel"
                            desc="Stoic, precise, and authoritative orchestration for business operations."
                            tags={["Elite-Calibrated", "Low-Tension"]}
                        />
                        <ArchCard
                            title="Custom Blueprint"
                            desc="Seed your own weights and define unique emotional boundary parameters."
                            tags={["Raw Weights", "Open-Sovereign"]}
                        />
                    </div>
                </div>

                {/* Dev Stats Sidebar */}
                <div className="space-y-6">
                    <div className="glass p-8 rounded-[2.5rem] border-white/5 space-y-6">
                        <div className="flex items-center gap-3">
                            <Terminal className="w-5 h-5 text-blue-500" />
                            <span className="text-sm font-bold text-slate-300 uppercase tracking-widest">Active Deployments</span>
                        </div>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-slate-500">Dhvani-Pulse-API</span>
                                <span className="text-[10px] font-bold text-teal-500 bg-teal-500/10 px-2 py-1 rounded">STABLE</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-slate-500">Arjun-SDK-Bridge</span>
                                <span className="text-[10px] font-bold text-amber-500 bg-amber-500/10 px-2 py-1 rounded">PENDING</span>
                            </div>
                        </div>
                    </div>

                    <div className="glass p-8 rounded-[2.5rem] border-blue-500/20 bg-blue-500/5 space-y-4">
                        <div className="flex items-center gap-2 text-blue-500">
                            <Sparkles className="w-5 h-5" />
                            <span className="text-xs font-bold uppercase tracking-widest">Pro-Tip</span>
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed italic">
                            &quot;Use the Pulse-X architecture for agents requiring real-time Indic translation on local CPU clusters.&quot;
                        </p>
                    </div>
                </div>
            </div>

            {/* SDK Documentation Preview */}
            <div className="glass p-8 rounded-[2.5rem] border-white/5 space-y-8">
                <div className="flex items-center gap-3">
                    <BookOpen className="w-6 h-6 text-blue-500" />
                    <h3 className="text-2xl font-black text-white tracking-tight">Pulse SDK Docs</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <DocLink title="Quickstart Guide" detail="Initialize your first Sovereign Agent in 4 lines of code." />
                    <DocLink title="Bhaava API" detail="Documentation for emotion-aware neural parsing." />
                    <DocLink title="Vault Integration" detail="Securely store agent weights in the Sovereign Enclave." />
                </div>
            </div>
        </div>
    );
}

interface ArchCardProps {
    title: string;
    desc: string;
    tags: string[];
}

function ArchCard({ title, desc, tags, onClick }: ArchCardProps) {
    return (
        <div
            onClick={onClick}
            className="p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-blue-500/20 transition-all cursor-pointer group active:scale-[0.98]"
        >
            <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{title}</h4>
            <p className="text-xs text-slate-500 mt-2 mb-4 leading-relaxed">{desc}</p>
            <div className="flex flex-wrap gap-2">
                {tags.map((tag: string) => (
                    <span key={tag} className="text-[8px] font-black text-slate-400 border border-slate-700 px-1.5 py-0.5 rounded-md uppercase">{tag}</span>
                ))}
            </div>
        </div>
    );
}

interface DocLinkProps {
    title: string;
    detail: string;
}

function DocLink({ title, detail }: DocLinkProps) {
    return (
        <div className="p-6 rounded-[2rem] bg-black/40 border border-white/5 hover:bg-black/60 transition-all cursor-pointer">
            <p className="text-sm font-bold text-white mb-1">{title}</p>
            <p className="text-xs text-slate-500">{detail}</p>
        </div>
    );
}
