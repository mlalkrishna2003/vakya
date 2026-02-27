"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mic, Play, Settings2, Sliders, Volume2, Globe, Heart, Activity, Sparkles, SwitchCamera, Cpu, Music, Share2, Layers, Zap } from "lucide-react";
import { useState, useEffect } from "react";

const EMOTION_PROFILES: Record<string, { id: string, label: string }[]> = {
    "English (IN)": [
        { id: "en_cinematic_01", label: "Cinematic Matrix" },
        { id: "en_indian_base_01", label: "Deep Philosophy" },
        { id: "en_customer_success_01", label: "Customer Success" },
        { id: "en_asmr_01", label: "Neural ASMR" }
    ],
    "Hindi": [
        { id: "hi_philosopher_01", label: "Deep Philosophy" },
        { id: "hi_hype_01", label: "Hype & Motivation" },
        { id: "hi_empathy_01", label: "Empathy & Care" }
    ],
    "Telugu": [
        { id: "te_philosopher_01", label: "Deep Philosophy" },
        { id: "te_authoritative_01", label: "News & Authority" },
        { id: "te_casual_01", label: "Casual & Friendly" }
    ],
    "Tamil": [
        { id: "te_philosopher_01", label: "Deep Philosophy (Fallback)" }
    ]
};

export default function VoiceStudio() {
    const [text, setText] = useState("");
    const [emotion, setEmotion] = useState(EMOTION_PROFILES["English (IN)"][0].id);
    const [language, setLanguage] = useState("English (IN)");
    const [isGenerating, setIsGenerating] = useState(false);
    const [isEliteMode, setIsEliteMode] = useState(false);
    const [status, setStatus] = useState<string | null>(null);
    const [audioUrl, setAudioUrl] = useState<string | null>(null);
    const [stats, setStats] = useState({ cpu: 12, thrm: 55 });

    useEffect(() => {
        setEmotion(EMOTION_PROFILES[language][0].id);
    }, [language]);

    const handleGenerate = async () => {
        if (!text.trim()) {
            setStatus("Please enter a script.");
            setTimeout(() => setStatus(null), 2000);
            return;
        }

        setIsGenerating(true);
        setStatus(isEliteMode ? "Neural Alignment Initiated..." : "Initializing Neural Weights...");
        if (isEliteMode) setStats({ cpu: 88, thrm: 72 });
        setAudioUrl(null);

        // Map language
        let langCode = "en";
        if (language === "Hindi") langCode = "hi";
        else if (language === "Telugu") langCode = "te";
        else if (language === "Tamil") langCode = "ta";

        try {
            setStatus("Synthesizing Phonemes...");
            const API_BASE = process.env.NEXT_PUBLIC_VAKYA_API_URL || "http://localhost:8086";
            const response = await fetch(`${API_BASE}/api/v1/synthesize`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    text: text,
                    target_language: langCode,
                    emotion_profile: emotion
                })
            });

            if (!response.ok) {
                throw new Error(`Synthesis failed: ${response.statusText}`);
            }

            setStatus("Calibrating Resonance...");
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            setAudioUrl(url);

            setStatus(isEliteMode ? "Finalizing Quantum Resonance..." : "Generation Complete.");
            const audio = new Audio(url);
            audio.play();

            if (isEliteMode) setStats({ cpu: 12, thrm: 55 });

            setTimeout(() => setStatus(null), 3000);
        } catch (error) {
            console.error(error);
            setStatus("Core Error. Ensure API is running.");
            if (isEliteMode) setStats({ cpu: 12, thrm: 55 });
            setTimeout(() => setStatus(null), 3000);
        } finally {
            setIsGenerating(false);
        }
    };

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
                    <div className="flex justify-between items-center border-b border-white/5 pb-6 mb-6">
                        <h3 className="text-xl font-bold uppercase tracking-tight">Main Console</h3>
                        <AnimatePresence>
                            {isEliteMode && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="flex gap-2"
                                >
                                    <div className="px-3 py-1 rounded-lg bg-black/40 border border-white/5 text-[10px] font-mono text-amber-500 transition-colors duration-500">
                                        CPU: {stats.cpu}%
                                    </div>
                                    <div className="px-3 py-1 rounded-lg bg-black/40 border border-white/5 text-[10px] font-mono text-amber-500 transition-colors duration-500">
                                        THRM: {stats.thrm}°C
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <textarea
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className="w-full bg-black/20 border-none resize-none text-2xl font-medium text-white placeholder:text-slate-700 focus:ring-0 min-h-[200px]"
                        placeholder="Type your script here. Every word carries a weight of resonance..."
                    />

                    <div className="flex flex-wrap gap-4 items-center justify-between pt-6 border-t border-white/5">
                        <div className="flex gap-4">
                            <div className="flex flex-col gap-1.5">
                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Language</span>
                                <select
                                    value={language}
                                    onChange={(e) => setLanguage(e.target.value)}
                                    aria-label="Select Language"
                                    className="bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none cursor-pointer"
                                >
                                    {Object.keys(EMOTION_PROFILES).map((lang) => (
                                        <option key={lang} value={lang}>{lang}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Emotion Seed</span>
                                <select
                                    value={emotion}
                                    onChange={(e) => setEmotion(e.target.value)}
                                    aria-label="Select Emotion"
                                    className="bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-sm text-teal-400 font-bold focus:outline-none cursor-pointer max-w-[200px]"
                                >
                                    {EMOTION_PROFILES[language]?.map((emo) => (
                                        <option key={emo.id} value={emo.id}>{emo.label}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <AnimatePresence>
                            {isEliteMode && (
                                <motion.div
                                    initial={{ opacity: 0, width: 0 }}
                                    animate={{ opacity: 1, width: "auto" }}
                                    exit={{ opacity: 0, width: 0 }}
                                    className="flex items-center gap-6 overflow-hidden"
                                >
                                    <ControlKnob label="Warmth" value="82%" />
                                    <ControlKnob label="Resonance" value="Elite" />
                                    <ControlKnob label="Indic-Sync" value="100%" />
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="flex items-center gap-4">
                            {status && (
                                <motion.span
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`text-[10px] font-bold uppercase tracking-widest ${status.includes('Complete') || status.includes('Quantum') ? 'text-teal-400' : 'text-slate-500'}`}
                                >
                                    {status}
                                </motion.span>
                            )}
                            <button
                                onClick={handleGenerate}
                                disabled={isGenerating}
                                className="px-8 py-4 rounded-2xl bg-teal-500 text-black font-black flex items-center gap-2 shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:scale-105 transition-all active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
                            >
                                {isGenerating ? (
                                    <div className="w-5 h-5 border-2 border-black border-t-transparent animate-spin rounded-full" />
                                ) : (
                                    <Play className="w-5 h-5 fill-current" />
                                )}
                                {isGenerating ? "GENERATING..." : "GENERATE AUDIO"}
                            </button>
                        </div>
                    </div>
                    {audioUrl && (
                        <div className="mt-6 flex justify-end">
                            <audio controls src={audioUrl} className="w-full max-w-sm rounded-lg" />
                        </div>
                    )}
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
                                className={`flex-1 rounded-full transition-colors duration-500 ${isGenerating ? 'bg-teal-400' : 'bg-teal-500/20'}`}
                                initial={{ height: "20%" }}
                                animate={{ height: isGenerating ? `${height}%` : "20%" }}
                                transition={{
                                    duration: 0.5,
                                    repeat: isGenerating ? Infinity : 0,
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
                    <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Voice DNA Scuplt</h4>
                        <button
                            onClick={() => setIsEliteMode(!isEliteMode)}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${isEliteMode ? 'bg-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.4)]' : 'bg-white/5 text-slate-400 hover:bg-white/10 border border-white/5'}`}
                        >
                            {isEliteMode ? <Zap className="w-3 h-3" /> : <Sparkles className="w-3 h-3" />}
                            {isEliteMode ? 'Elite Mode On' : 'Pro Toggle'}
                        </button>
                    </div>

                    {!isEliteMode ? (
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                            className="space-y-6"
                        >
                            <Slider icon={<Activity className="w-4 h-4" />} label="Pace" value="1.0x" />
                            <Slider icon={<Volume2 className="w-4 h-4" />} label="Gain" value="+2dB" />
                            <Slider icon={<Settings2 className="w-4 h-4" />} label="Clarity" value="Max" />
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                            className="space-y-6"
                        >
                            <EliteSlider icon={<Music className="w-4 h-4" />} label="Harmonics" progress="70%" active={isGenerating} />
                            <EliteSlider icon={<Layers className="w-4 h-4" />} label="Sub-Epochs" progress="1,200" active={isGenerating} />
                            <EliteSlider icon={<Cpu className="w-4 h-4" />} label="Neural Weight" progress="Auto" active={isGenerating} />
                        </motion.div>
                    )}
                </div>

                <AnimatePresence>
                    {isEliteMode && (
                        <motion.div
                            initial={{ opacity: 0, y: 20, height: 0 }}
                            animate={{ opacity: 1, y: 0, height: "auto" }}
                            exit={{ opacity: 0, y: 20, height: 0 }}
                            className="glass p-8 rounded-[2.5rem] border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-transparent space-y-6 overflow-hidden"
                        >
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-amber-500 uppercase">Export Channels</span>
                                <Share2 className="w-4 h-4 text-amber-500" />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <button className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-[10px] font-bold text-amber-400 uppercase hover:bg-amber-500/20 transition-all">Broadcast</button>
                                <button className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-[10px] font-bold text-amber-400 uppercase hover:bg-amber-500/20 transition-all">Studio-X</button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

function ControlKnob({ label, value }: { label: string, value: string }) {
    return (
        <div className="text-center space-y-1">
            <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{label}</p>
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
            <div className="flex justify-between items-center text-xs">
                <div className="flex items-center gap-2 text-slate-400">
                    {icon}
                    <span className="text-[10px] font-bold uppercase tracking-wider">{label}</span>
                </div>
                <span className="text-xs font-bold text-amber-500">{progress}</span>
            </div>
            <div className="w-full bg-black/40 border border-white/5 h-2 rounded-full overflow-hidden relative">
                <motion.div
                    initial={{ width: "20%" }}
                    animate={{ width: active ? ["20%", "100%", "40%", "90%"] : "70%" }}
                    transition={{ duration: 2, repeat: active ? Infinity : 0, repeatType: "reverse" }}
                    className="absolute top-0 left-0 h-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]"
                />
            </div>
        </div>
    );
}

interface SliderProps {
    icon: React.ReactNode;
    label: string;
    value: string;
}

function Slider({ icon, label, value }: SliderProps) {
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
