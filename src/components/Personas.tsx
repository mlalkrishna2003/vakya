"use client";

import { motion } from "framer-motion";
import { Users, UserPlus, Heart, Zap, Shield, User } from "lucide-react";

const personas = [
    {
        id: "arjun-v1",
        name: "Arjun V1",
        role: "The Flagship Sovereign",
        desc: "1,500 Epochs of calibrated resonance. Designed for elite executive orchestration and stoic wisdom.",
        stats: { resonance: "98.4%", latency: "0.4s", empathy: "Elite" },
        color: "from-teal-500/20 to-transparent",
        icon: <Shield className="w-6 h-6 text-teal-400" />,
    },
    {
        id: "acharya",
        name: "Acharya",
        role: "The Master Teacher",
        desc: "Trained on pedagogical traditions and classic Indic texts. Forged for infinite patience and knowledge transfer.",
        stats: { resonance: "96.2%", latency: "0.5s", empathy: "High" },
        color: "from-blue-500/20 to-transparent",
        icon: <User className="w-6 h-6 text-blue-400" />,
    },
    {
        id: "kathakar",
        name: "Kathakar",
        role: "The Storyteller",
        desc: "Master of regional dialects and narrative rhythm. Captures the soul of oral traditions with deep resonance.",
        stats: { resonance: "97.8%", latency: "0.5s", empathy: "Max" },
        color: "from-amber-500/20 to-transparent",
        icon: <Heart className="w-6 h-6 text-amber-400" />,
    },
];

export default function Personas() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-[10px] font-black text-teal-400 uppercase tracking-widest">
                        <Users className="w-3 h-3" />
                        Identity Management
                    </div>
                    <h2 className="text-4xl font-black text-white tracking-tighter">Personas</h2>
                    <p className="text-slate-400 max-w-sm">
                        Orchestrate multiple neural identities. Each voice carries a unique soul and technical signature.
                    </p>
                </div>
                <button className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-teal-500 text-black font-bold shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:scale-105 transition-all">
                    <UserPlus className="w-5 h-5" />
                    Create Persona
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {personas.map((persona, index) => (
                    <motion.div
                        key={persona.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`glass p-8 rounded-[2.5rem] border-white/5 hover:border-white/10 transition-all flex flex-col group relative overflow-hidden bg-gradient-to-br ${persona.color}`}
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-14 h-14 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-center group-hover:scale-110 transition-all">
                                {persona.icon}
                            </div>
                            <div className="text-right">
                                <div className="flex items-center gap-1.5 text-teal-500 font-bold text-xs uppercase tracking-widest">
                                    <Zap className="w-3 h-3" />
                                    Active
                                </div>
                            </div>
                        </div>

                        <div className="space-y-1 mb-4">
                            <h3 className="text-2xl font-black text-white leading-tight">{persona.name}</h3>
                            <p className="text-teal-400 text-xs font-bold uppercase tracking-widest">{persona.role}</p>
                        </div>

                        <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1">
                            {persona.desc}
                        </p>

                        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/5">
                            <div>
                                <p className="text-[10px] text-slate-500 font-bold uppercase">Resonance</p>
                                <p className="text-white font-bold">{persona.stats.resonance}</p>
                            </div>
                            <div>
                                <p className="text-[10px] text-slate-500 font-bold uppercase">Latency</p>
                                <p className="text-white font-bold">{persona.stats.latency}</p>
                            </div>
                            <div>
                                <p className="text-[10px] text-slate-500 font-bold uppercase">Empathy</p>
                                <p className="text-white font-bold">{persona.stats.empathy}</p>
                            </div>
                        </div>

                        <div className="absolute -right-4 -bottom-4 w-32 h-32 rounded-full blur-[60px] opacity-10 bg-white pointer-events-none" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
