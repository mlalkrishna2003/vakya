import {
    Mic, Shield, Brain, Zap, Globe, Lock,
    Music, BookOpen, Users, Cpu, Headphones, Sparkles
} from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const features = [
    {
        icon: <Mic className="w-7 h-7 text-teal-500" />,
        title: "Voice Studio",
        desc: "Script-to-audio in seconds. Choose emotion, language, and persona. Professional-grade voice output with Indic intonation baked in.",
        tag: "Creator",
        color: "teal",
    },
    {
        icon: <Music className="w-7 h-7 text-amber-500" />,
        title: "Elite Studio",
        desc: "Neural scripting with real-time Warmth, Resonance, and Indic-Sync calibration. For voice artists and broadcasters who demand perfection.",
        tag: "Elite",
        color: "amber",
    },
    {
        icon: <Brain className="w-7 h-7 text-teal-500" />,
        title: "Personas",
        desc: "Switch between multiple AI personalities on one device. Arjun the Teacher, the Companion, the Executive — all calibrated for emotional resonance.",
        tag: "Identity",
        color: "teal",
    },
    {
        icon: <Shield className="w-7 h-7 text-amber-500" />,
        title: "Neural Cloak",
        desc: "Real-time privacy monitoring with Local Pulse tracking. Every data point audited. Zero surveillance, zero compromise.",
        tag: "Security",
        color: "amber",
    },
    {
        icon: <BookOpen className="w-7 h-7 text-teal-500" />,
        title: "Knowledge Hub",
        desc: "Download domain intelligence packs — Heritage, Daily Companion, or seed your own. Arjun learns your world.",
        tag: "Intelligence",
        color: "teal",
    },
    {
        icon: <Lock className="w-7 h-7 text-amber-500" />,
        title: "Sovereign Vault",
        desc: "Zero-knowledge encrypted storage for your voice signature, data, and memories. V-ID management, entirely on-device.",
        tag: "Privacy",
        color: "amber",
    },
    {
        icon: <Globe className="w-7 h-7 text-teal-500" />,
        title: "Indic Language Mastery",
        desc: "Trained on 1,600+ dialects across Hindi, Telugu, Tamil, Kannada, Malayalam, Gujarati, and Bengali. We speak you.",
        tag: "Language",
        color: "teal",
    },
    {
        icon: <Zap className="w-7 h-7 text-amber-500" />,
        title: "Zero Latency Engine",
        desc: "Inference in under 80ms. On-device neural processing means your AI responds at the speed of thought.",
        tag: "Performance",
        color: "amber",
    },
    {
        icon: <Users className="w-7 h-7 text-teal-500" />,
        title: "Acharya (AI Tutor)",
        desc: "An interactive learning companion for pronunciation, narrative rhythm, and Indic language mastery. Voice-first education.",
        tag: "Education",
        color: "teal",
    },
    {
        icon: <Cpu className="w-7 h-7 text-amber-500" />,
        title: "Developer Nexus",
        desc: "Create custom agents, deploy neural architectures, access SDK docs — all from the Dhvani OS developer hub.",
        tag: "Dev",
        color: "amber",
    },
    {
        icon: <Headphones className="w-7 h-7 text-teal-500" />,
        title: "Voice Enrollment",
        desc: "Capture and store your unique voice biometric. Register up to 5 voices per device with zero cloud upload.",
        tag: "Identity",
        color: "teal",
    },
    {
        icon: <Sparkles className="w-7 h-7 text-amber-500" />,
        title: "Resonance Sync",
        desc: "Real-time emotional calibration across all active personas. Your AI matches your energy, not just your words.",
        tag: "AI",
        color: "amber",
    },
];

export default function FeaturesPage() {
    return (
        <main className="min-h-screen pt-28">

            {/* ── HERO ── */}
            <section className="px-6 py-20 text-center max-w-4xl mx-auto space-y-6">
                <p className="text-xs font-black text-teal-400 uppercase tracking-widest">Full Capability Suite</p>
                <h1 className="text-5xl md:text-6xl text-white">
                    Everything You Need.<br />Nothing You Don&apos;t.
                </h1>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                    Vakya is a full sovereign voice operating system. Not a feature — a transformation.
                </p>
            </section>

            {/* ── FEATURES GRID ── */}
            <section className="px-6 py-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((f) => (
                        <div
                            key={f.title}
                            className={`glass p-8 rounded-[2rem] space-y-4 hover:border-${f.color}-500/30 transition-all group`}
                        >
                            <div className="flex items-start justify-between">
                                <div className={`w-14 h-14 rounded-2xl bg-${f.color}-500/10 border border-${f.color}-500/20 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                    {f.icon}
                                </div>
                                <span className={`text-[9px] font-black text-${f.color}-400 bg-${f.color}-500/10 px-2 py-1 rounded-full uppercase tracking-widest`}>
                                    {f.tag}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-white">{f.title}</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="px-6 py-24 text-center">
                <div className="max-w-2xl mx-auto space-y-6">
                    <h2 className="text-4xl text-white">Ready to Experience This?</h2>
                    <p className="text-slate-400">Join the early access list and get into the Alpha.</p>
                    <Link href="/contact" className="btn-primary inline-flex mx-auto">
                        Get Early Access <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </main>
    );
}
