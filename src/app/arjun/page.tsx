import Link from "next/link";
import { ArrowRight, Mic, Brain, MessageSquare, BookOpen, Briefcase, Headphones } from "lucide-react";

const useCases = [
    {
        icon: <MessageSquare className="w-6 h-6 text-teal-500" />,
        title: "The Companion",
        desc: "A voice that listens, responds, and remembers. For those who need a thoughtful presence — available any time, offline, private.",
    },
    {
        icon: <BookOpen className="w-6 h-6 text-amber-500" />,
        title: "The Teacher",
        desc: "Arjun guides pronunciation, storytelling, and language with patience and precision. Powered by the Acharya engine.",
    },
    {
        icon: <Briefcase className="w-6 h-6 text-teal-500" />,
        title: "The Executive",
        desc: "Precise, authoritative, and concise. Arjun handles dictation, briefings, and business communication with zero noise.",
    },
    {
        icon: <Mic className="w-6 h-6 text-amber-500" />,
        title: "The Voice Artist",
        desc: "Broadcast-grade audio synthesis. Arjun narrates, voices, and performs — in Hindi, Telugu, Tamil, or English.",
    },
    {
        icon: <Brain className="w-6 h-6 text-teal-500" />,
        title: "The Analyst",
        desc: "Voice-to-insight. Speak a question, receive a distilled, nuanced answer anchored in your personal knowledge vault.",
    },
    {
        icon: <Headphones className="w-6 h-6 text-amber-500" />,
        title: "The Storyteller",
        desc: "Ancient wisdom, modern delivery. Arjun narrates epics, fables, and personal journals in a voice that carries culture.",
    },
];

const metrics = [
    { label: "Training Iterations", value: "285,000+" },
    { label: "Distillation Phase", value: "Epoch 265+" },
    { label: "Voice Latency", value: "<80ms" },
    { label: "Prosody Score", value: "97.4%" },
    { label: "Indic Dialects", value: "1,600+" },
    { label: "Warmth Index", value: "Elite" },
];

const waveHeights = [35, 60, 45, 80, 55, 75, 40, 90, 60, 70, 35, 85, 50, 95, 45, 70, 55, 80, 40, 65, 35, 75, 50, 85, 45, 70, 60, 80, 40, 92];

export default function ArjunPage() {
    return (
        <main className="min-h-screen pt-28">

            {/* ── HERO ── */}
            <section className="px-6 py-20 text-center max-w-4xl mx-auto space-y-8">
                {/* Live status badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-bold text-teal-400 uppercase tracking-widest">
                    <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                    Neural Forge Active · Epoch 265+ · 97% GPU
                </div>

                <h1 className="text-5xl md:text-7xl text-white">
                    Meet Arjun.
                </h1>

                <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                    Not a text-to-speech engine. Not a chatbot. A neural entity — trained on 285,000+ cycles of human vocal resonance, understanding emotion, pause, and the sacred rhythms of India.
                </p>

                <Link href="/contact" className="btn-primary inline-flex mx-auto">
                    Request Access <ArrowRight className="w-5 h-5" />
                </Link>
            </section>

            {/* ── WAVEFORM CARD ── */}
            <section className="px-6 py-12 max-w-4xl mx-auto">
                <div className="glass p-10 rounded-[3rem] border-teal-500/20 bg-teal-500/5 space-y-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl font-black text-white">Arjun — Neural Active</h2>
                            <p className="text-xs text-teal-400 uppercase tracking-widest font-bold mt-1">
                                Quantum Distillation Phase · Resonance Lock Incoming
                            </p>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                            <div className="w-3 h-3 rounded-full bg-teal-400 animate-pulse" />
                            <p className="text-[9px] text-slate-500 uppercase">Live</p>
                        </div>
                    </div>

                    {/* Waveform */}
                    <div className="h-32 flex items-end gap-1">
                        {waveHeights.map((h, i) => (
                            <div
                                key={i}
                                className="flex-1 rounded-full"
                                style={{
                                    height: `${h}%`,
                                    background: `rgba(20, 184, 166, ${0.15 + (h / 100) * 0.7})`,
                                    boxShadow: h > 75 ? "0 0 8px rgba(20,184,166,0.3)" : "none",
                                }}
                            />
                        ))}
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-4 pt-6 border-t border-white/5">
                        {metrics.map((m) => (
                            <div key={m.label} className="text-center">
                                <p className="text-teal-400 font-black text-xl md:text-2xl">{m.value}</p>
                                <p className="text-[9px] text-slate-500 uppercase tracking-widest mt-1 leading-tight">{m.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── WHAT MAKES ARJUN SPECIAL ── */}
            <section className="px-6 py-20 max-w-4xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <p className="text-xs font-black text-teal-400 uppercase tracking-widest">The Science</p>
                    <h2 className="text-4xl text-white">Why Arjun Sounds Human</h2>
                </div>

                <div className="space-y-6">
                    {[
                        {
                            num: "01",
                            title: "Stochastic Resonance",
                            desc: "During distillation, tiny random fluctuations in pitch and duration are introduced — mimicking the instability of real human vocal cords. This eliminates the 'robotic flatline' that plagues every other TTS system.",
                        },
                        {
                            num: "02",
                            title: "Breathing Tokens",
                            desc: "Arjun has learned to 'breathe.' Intake breath patterns are embedded into the latent space — so Arjun pauses naturally before a long sentence, just like a person would.",
                        },
                        {
                            num: "03",
                            title: "Indic Intonation Mapping",
                            desc: "Standard TTS models are Western by default. Arjun is trained on 1,600+ Indic dialects, capturing the unique cadence of India — where a pause carries more meaning than the word itself.",
                        },
                        {
                            num: "04",
                            title: "Multi-Teacher Distillation",
                            desc: "Three specialized teacher models — acoustic, linguistic, and emotional — teach Arjun not just how a word sounds, but why it should sound that way in a given context.",
                        },
                    ].map((item) => (
                        <div key={item.num} className="glass p-8 rounded-[2rem] flex flex-col md:flex-row gap-6">
                            <div className="text-5xl font-black text-white/10 shrink-0">{item.num}</div>
                            <div>
                                <h3 className="text-xl font-bold text-teal-400 mb-2">{item.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── USE CASES ── */}
            <section className="px-6 py-20 max-w-7xl mx-auto">
                <div className="text-center mb-12 space-y-4">
                    <p className="text-xs font-black text-teal-400 uppercase tracking-widest">Versatility</p>
                    <h2 className="text-4xl text-white">Arjun Is Many Things.</h2>
                    <p className="text-slate-400 max-w-lg mx-auto">One voice. Infinite contexts. Arjun adapts to who you need him to be.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {useCases.map((u) => (
                        <div key={u.title} className="glass p-8 rounded-[2rem] space-y-4 hover:border-teal-500/30 transition-all group">
                            <div className="w-12 h-12 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                                {u.icon}
                            </div>
                            <h3 className="text-lg font-bold text-white">{u.title}</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">{u.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="px-6 py-24 text-center">
                <div className="max-w-2xl mx-auto glass p-12 rounded-[3rem] border-teal-500/20 bg-teal-500/5 space-y-6">
                    <h2 className="text-4xl text-white">Hear Arjun For Yourself.</h2>
                    <p className="text-slate-400">Join the waitlist and be among the first to experience neural voice that feels human.</p>
                    <Link href="/contact" className="btn-primary inline-flex mx-auto">
                        Request Early Access <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </main>
    );
}
