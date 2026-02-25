"use client";

import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Lightbulb, MessageSquare, Play, Sparkles, User, Brain } from "lucide-react";

export default function Acharya() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-5xl mx-auto">
            <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-black text-indigo-400 uppercase tracking-widest">
                    <GraduationCap className="w-3 h-3" />
                    Sovereign Learning
                </div>
                <h2 className="text-5xl font-black text-white tracking-tighter">Acharya AI</h2>
                <p className="text-slate-400 max-w-xl mx-auto text-lg leading-relaxed">
                    The Master Teacher. Infused with ancient wisdom and neural speed. Practice, learn, and master the art of voice.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                <div className="glass p-10 rounded-[3rem] border-white/5 space-y-8 bg-gradient-to-br from-indigo-500/10 to-transparent">
                    <div className="w-16 h-16 rounded-[2rem] bg-indigo-500 flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.4)]">
                        <User className="w-8 h-8 text-white" />
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-2xl font-black text-white leading-tight">Interact with your Master</h3>
                        <p className="text-slate-400 leading-relaxed">
                            Acharya doesn&apos;t just respond; he guides. Trained on the deepest pedagogical roots for infinite patience.
                        </p>
                    </div>
                    <button className="w-full py-5 rounded-[2rem] bg-white text-black font-black text-lg hover:bg-slate-200 transition-all flex items-center justify-center gap-3">
                        <MessageSquare className="w-6 h-6" />
                        Start Session
                    </button>
                </div>

                <div className="space-y-6">
                    <LearningPathCard
                        icon={<Brain className="w-5 h-5 text-indigo-400" />}
                        title="Neural Pronunciation"
                        desc="Master regional accents with sub-syllable feedback."
                    />
                    <LearningPathCard
                        icon={<Lightbulb className="w-5 h-5 text-amber-400" />}
                        title="Narrative Rhythm"
                        desc="Learn the cadence of storytelling and verbal flow."
                    />
                    <LearningPathCard
                        icon={<BookOpen className="w-5 h-5 text-teal-400" />}
                        title="Indic Mastery"
                        desc="Deep dive into the 19 languages of the Sovereign ecosystem."
                    />
                </div>
            </div>

            <div className="glass p-10 rounded-[3rem] border-white/5 relative overflow-hidden group">
                <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
                    <div className="flex-1 space-y-2 text-center md:text-left">
                        <h3 className="text-2xl font-black text-white tracking-tight flex items-center justify-center md:justify-start gap-3">
                            <Sparkles className="w-6 h-6 text-indigo-500" />
                            Weekly Knowledge Drop
                        </h3>
                        <p className="text-slate-500 max-w-md">New neural weights for Vedic and Classical Sanskrit logic are now available in the Vault.</p>
                    </div>
                    <button className="px-10 py-5 rounded-3xl border border-white/10 hover:bg-white/5 font-bold transition-all uppercase tracking-widest text-xs">
                        Access Weights
                    </button>
                </div>
            </div>
        </div>
    );
}

function LearningPathCard({ icon, title, desc }: any) {
    return (
        <div className="glass p-6 rounded-[2rem] border-white/5 hover:border-indigo-500/20 transition-all cursor-pointer flex gap-5 items-center bg-black/40">
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0">
                {icon}
            </div>
            <div>
                <h4 className="text-lg font-bold text-white leading-tight">{title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed mt-1">{desc}</p>
            </div>
            <div className="ml-auto w-10 h-10 rounded-full border border-white/5 flex items-center justify-center group-hover:border-indigo-500/50 transition-all">
                <Play className="w-3 h-3 text-slate-500 group-hover:text-indigo-500" />
            </div>
        </div>
    );
}
