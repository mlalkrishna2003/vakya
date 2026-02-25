"use client";

import { motion } from "framer-motion";
import { Zap, Brain, Cpu, Music, Share2, Layers } from "lucide-react";
import { useState } from "react";

export default function EliteStudio() {
    const [isSculpting, setIsSculpting] = useState(false);
    const [sculptStatus, setSculptStatus] = useState<string | null>(null);
    const [stats, setStats] = useState({ cpu: 12, thrm: 55 });

    const handleSculpt = () => {
        setIsSculpting(true);
        setSculptStatus("Neural Alignment Initiated...");
        setStats({ cpu: 88, thrm: 72 });

        setTimeout(() => setSculptStatus("Calibrating Bhaava-Weights..."), 1500);
        setTimeout(() => setStats({ cpu: 94, thrm: 79 }), 2000);
        setTimeout(() => setSculptStatus("Finalizing Quantum Resonance..."), 3000);
        setTimeout(() => {
            setIsSculpting(false);
            setSculptStatus("Calibration Complete.");
            setStats({ cpu: 12, thrm: 55 });
            setTimeout(() => setSculptStatus(null), 3000);
        }, 4500);
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] font-black text-amber-400 uppercase tracking-widest">
                        <Zap className="w-3 h-3" />
                        Bhaava Elite
                    </div>
                    <h2 className="text-4xl font-black text-white tracking-tighter">Elite Studio</h2>
                    <p className="text-slate-400 max-w-sm">
                        The command center for deep neural sculpting. Calibrate the soul of your voice with quantum precision.
                    </p>
                </div>

                {sculptStatus && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/20"
                    >
                        <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                        <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest">{sculptStatus}</span>
                    </motion.div>
                )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Main Console */}
                <div className="lg:col-span-8 space-y-8">
                    <div className="glass p-10 rounded-[3rem] border-amber-500/10 bg-amber-500/[0.02] space-y-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-[100px] -z-10" />

                        <div className="flex justify-between items-center border-b border-white/5 pb-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-center">
                                    <Brain className="w-6 h-6 text-amber-500" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white">Neural Scripting</h3>
                                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Arjun-V1 Enabled</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <div className="px-3 py-1 rounded-lg bg-black/40 border border-white/5 text-[10px] font-mono text-amber-500 transition-colors duration-500">
                                    CPU: {stats.cpu}%
                                </div>
                                <div className="px-3 py-1 rounded-lg bg-black/40 border border-white/5 text-[10px] font-mono text-amber-500 transition-colors duration-500">
                                    THRM: {stats.thrm}°C
                                </div>
                            </div>
                        </div>

                        <textarea
                            className="w-full bg-transparent border-none resize-none text-3xl font-light italic text-white placeholder:text-slate-800 focus:ring-0 min-h-[300px] leading-relaxed"
                            placeholder="&quot;Silence is the root of Dhvani. Let the words flow from the heart of the machine...&quot;"
                        />

                        <div className="flex justify-between items-center pt-8">
                            <div className="flex items-center gap-6">
                                <ControlKnob label="Warmth" value="82%" />
                                <ControlKnob label="Resonance" value="Elite" />
                                <ControlKnob label="Indic-Sync" value="100%" />
                            </div>
                            <button
                                onClick={handleSculpt}
                                disabled={isSculpting}
                                className="px-10 py-5 rounded-[2rem] bg-amber-500 text-black font-black text-lg shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:scale-105 transition-all active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
                            >
                                {isSculpting ? "SCULPTING..." : "SCULPT AUDIO"}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Sidebar Controls */}
                <div className="lg:col-span-4 space-y-6">
                    <div className="glass p-8 rounded-[2.5rem] border-white/5 space-y-8">
                        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Advanced parameters</h4>
                        <div className="space-y-6">
                            <EliteSlider icon={<Music className="w-4 h-4" />} label="Harmonics" progress="70%" active={isSculpting} />
                            <EliteSlider icon={<Layers className="w-4 h-4" />} label="Sub-Epochs" progress="1,200" active={isSculpting} />
                            <EliteSlider icon={<Cpu className="w-4 h-4" />} label="Neural Weight" progress="Auto" active={isSculpting} />
                        </div>
                    </div>

                    <div className="glass p-8 rounded-[2.5rem] border-white/5 space-y-6 bg-gradient-to-br from-white/[0.02] to-transparent">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-slate-300 uppercase">Export Channels</span>
                            <Share2 className="w-4 h-4 text-slate-500" />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <button className="p-4 rounded-2xl bg-white/5 border border-white/5 text-[10px] font-bold uppercase hover:bg-white/10 transition-all">Broadcast</button>
                            <button className="p-4 rounded-2xl bg-white/5 border border-white/5 text-[10px] font-bold uppercase hover:bg-white/10 transition-all">Studio-X</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ControlKnob({ label, value }: { label: string, value: string }) {
    return (
        <div className="text-center space-y-1">
            <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest">{label}</p>
            <p className="text-sm font-bold text-amber-500">{value}</p>
        </div>
    );
}

interface EliteSliderProps {
    icon: React.ReactNode;
    label: string;
    progress: string;
    active?: boolean;
}

function EliteSlider({ icon, label, progress, active }: EliteSliderProps) {
    return (
        <div className="space-y-3">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-slate-400">
                    {icon}
                    <span className="text-[10px] font-bold uppercase tracking-wider">{label}</span>
                </div>
                <span className="text-[10px] font-mono text-white">{progress}</span>
            </div>
            <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: "50%" }}
                    animate={{
                        width: active ? ["40%", "90%", "60%"] : "50%",
                        opacity: active ? [0.5, 1, 0.5] : 0.5
                    }}
                    transition={{
                        duration: 2,
                        repeat: active ? Infinity : 0,
                        repeatType: "reverse"
                    }}
                    className="h-full bg-amber-500/50 shadow-[0_0_10px_rgba(245,158,11,0.5)]"
                />
            </div>
        </div>
    );
}
