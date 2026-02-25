"use client";

import { motion } from "framer-motion";
import { Mic, Play, Settings2, Sliders, Volume2, Globe, Heart, Activity, Sparkles } from "lucide-react";
import { useState } from "react";

export default function VoiceStudio() {
    const [emotion, setEmotion] = useState("Neutral");

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-[10px] font-black text-teal-400 uppercase tracking-widest">
                        <Mic className="w-3 h-3" />
                        Vakya Core
                    </div>
                    <h2 className="text-4xl font-black text-white tracking-tighter">Voice Studio</h2>
                    <p className="text-slate-400 max-w-sm">
                        The standard for neural synthesis. Practice speaking with real-time feedback and cross-lingual mastery.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Generation Area */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="glass p-8 rounded-[2.5rem] border-white/5 space-y-6">
                        <textarea
                            className="w-full bg-black/20 border-none resize-none text-2xl font-medium text-white placeholder:text-slate-700 focus:ring-0 min-h-[200px]"
                            placeholder="Type your script here. Every word carries a weight of resonance..."
                        />

                        <div className="flex flex-wrap gap-4 items-center justify-between pt-6 border-t border-white/5">
                            <div className="flex gap-4">
                                <div className="flex flex-col gap-1.5">
                                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Emotion</span>
                                    <select className="bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-sm text-teal-400 font-bold focus:outline-none">
                                        <option>Neutral</option>
                                        <option>Fierce</option>
                                        <option>Calm</option>
                                        <option>Urgent</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Language</span>
                                    <select className="bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none">
                                        <option>English (IN)</option>
                                        <option>Hindi</option>
                                        <option>Telugu</option>
                                        <option>Tamil</option>
                                    </select>
                                </div>
                            </div>

                            <button className="px-8 py-4 rounded-2xl bg-teal-500 text-black font-black flex items-center gap-2 shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:scale-105 transition-all">
                                <Play className="w-5 h-5 fill-current" />
                                GENERATE AUDIO
                            </button>
                        </div>
                    </div>

                    <div className="glass p-8 rounded-[2.5rem] border-white/5">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-bold uppercase tracking-tight">Waveform Resonance</h3>
                            <div className="text-[10px] font-bold text-teal-500 tracking-widest uppercase">Real-time Visualization</div>
                        </div>
                        <div className="h-24 flex items-end gap-1 px-4">
                            {[40, 70, 45, 90, 65, 30, 85, 50, 75, 40, 60, 80, 45, 70, 55, 90, 35, 80, 50, 65, 40, 70, 45, 90, 65, 30, 85, 50, 75, 40, 60, 80, 45, 70, 55, 90, 35, 80, 50, 65].map((height, i) => (
                                <motion.div
                                    key={i}
                                    className="flex-1 bg-teal-500/20 rounded-full"
                                    initial={{ height: "20%" }}
                                    animate={{ height: `${height}%` }}
                                    transition={{
                                        duration: 0.5,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        delay: i * 0.05
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Studio Sidebar */}
                <div className="space-y-6">
                    <div className="glass p-8 rounded-[2.5rem] border-white/5 space-y-6">
                        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Voice DNA Scuplt</h4>
                        <div className="space-y-6">
                            <Slider icon={<Activity className="w-4 h-4" />} label="Pace" value="1.0x" />
                            <Slider icon={<Volume2 className="w-4 h-4" />} label="Gain" value="+2dB" />
                            <Slider icon={<Settings2 className="w-4 h-4" />} label="Clarity" value="Max" />
                        </div>
                    </div>

                    <div className="glass p-8 rounded-[2.5rem] border-purple-500/20 bg-purple-500/5 space-y-4">
                        <div className="flex items-center gap-2 text-purple-400">
                            <Sparkles className="w-5 h-5" />
                            <span className="text-[10px] font-black uppercase tracking-widest">Elite Upgrade</span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed italic">
                            &quot;Switch to Elite Studio for full Bhaava-calibration and Indic-specific intonation control.&quot;
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Slider({ icon, label, value }: any) {
    return (
        <div className="space-y-3">
            <div className="flex justify-between items-center text-xs">
                <div className="flex items-center gap-2 text-slate-400">
                    {icon}
                    <span className="font-bold uppercase tracking-wider">{label}</span>
                </div>
                <span className="text-white font-bold">{value}</span>
            </div>
            <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                <div className="w-[80%] h-full bg-teal-500" />
            </div>
        </div>
    );
}
