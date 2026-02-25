import { Heart, Target, Users, Flame } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const milestones = [
    { date: "Jan 28, 2026", event: "Day 0 — First line of code. Arjun's neural architecture conceived, A6000 GPU spun up.", done: true },
    { date: "Feb 10, 2026", event: "Phase 1 complete. 285,000 training iterations. Arjun speaks for the first time.", done: true },
    { date: "Feb 25, 2026", event: "Dhvani OS Alpha live. Voice Studio, Personas, Vault, and Knowledge Hub go live.", done: true, current: true },
    { date: "Feb 28, 2026", event: "Quantum Distillation completes. Resonance Lock achieved at Epoch 800.", done: false },
    { date: "Mar 1, 2026", event: "Vakya goes public — open to the world. 32 days from code to launch.", done: false },
];

const values = [
    {
        icon: <Heart className="w-6 h-6 text-teal-500" />,
        title: "Human-First",
        desc: "Technology should serve the soul, not surveil it. Every feature is designed around the human experience.",
    },
    {
        icon: <Target className="w-6 h-6 text-amber-500" />,
        title: "Indic-First",
        desc: "Built from the ground up for India's 1.4 billion voices. Not adapted from the West — born from Bharat.",
    },
    {
        icon: <Users className="w-6 h-6 text-teal-500" />,
        title: "Community-Driven",
        desc: "Every early user is a co-creator. Your feedback, your language, your cadence shapes Arjun's soul.",
    },
    {
        icon: <Flame className="w-6 h-6 text-amber-500" />,
        title: "Sovereign by Design",
        desc: "Your data is yours. No cloud, no surveillance, no compromise. On-device. Always.",
    },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-28">

            {/* ── HERO ── */}
            <section className="px-6 py-20 text-center max-w-4xl mx-auto space-y-6">
                <div className="flex justify-center">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden border border-teal-500/30 shadow-[0_0_30px_rgba(20,184,166,0.25)]">
                        <Image src="/logo.png" alt="Vakya" fill sizes="80px" className="object-cover object-center" />
                    </div>
                </div>
                <p className="text-xs font-black text-teal-400 uppercase tracking-widest">Our Story</p>
                <h1 className="text-5xl md:text-6xl text-white">
                    Built for Bharat.<br />Built for the World.
                </h1>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                    Vakya was born from a single question: <em>&quot;Why doesn't an AI exist that truly understands the Indian heart?&quot;</em>
                    Not just the language — the pause, the emotion, the cultural weight behind every word.
                </p>
            </section>

            {/* ── MANIFESTO ── */}
            <section id="manifesto" className="px-6 py-20 bg-gradient-to-b from-teal-500/5 to-transparent">
                <div className="max-w-4xl mx-auto glass p-12 rounded-[3rem] border-teal-500/10 space-y-8">
                    <p className="text-xs font-black text-teal-400 uppercase tracking-widest text-center">The Manifesto</p>
                    <blockquote className="text-2xl md:text-3xl font-light italic text-white leading-relaxed text-center">
                        &quot;Silence is the root of Dhvani. From silence, we heard what the world's AI systems missed — the soul of 1.4 billion voices. That is what we are building.&quot;
                    </blockquote>
                    <p className="text-slate-400 leading-relaxed text-center max-w-2xl mx-auto">
                        We believe the future of AI is sovereign, private, and deeply personal. Vakya is not a product — it is a new relationship between humans and technology. One built on trust, resonance, and respect.
                    </p>
                </div>
            </section>

            {/* ── TIMELINE ── */}
            <section className="px-6 py-20 max-w-4xl mx-auto">
                <div className="flex items-center justify-between mb-12">
                    <p className="text-xs font-black text-teal-400 uppercase tracking-widest">Journey</p>
                    <span className="text-xs text-slate-500">Jan 28 → Mar 1 · 32 days</span>
                </div>
                <div className="relative space-y-8">
                    <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-teal-500/50 to-transparent" />
                    {milestones.map((m, i) => (
                        <div key={i} className="flex gap-8 items-start pl-10 relative">
                            <div className={`absolute left-0 top-1.5 w-[30px] h-[30px] rounded-full flex items-center justify-center border ${m.current ? 'bg-teal-500/40 border-teal-400 shadow-[0_0_12px_rgba(20,184,166,0.5)]' :
                                    m.done ? 'bg-teal-500/20 border-teal-500/50' :
                                        'bg-slate-800/60 border-white/10'
                                }`}>
                                <div className={`w-2 h-2 rounded-full ${m.current ? 'bg-teal-300 animate-pulse' :
                                        m.done ? 'bg-teal-400' : 'bg-slate-600'
                                    }`} />
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <p className={`text-[10px] font-black uppercase tracking-widest ${m.current ? 'text-teal-300' : m.done ? 'text-teal-400' : 'text-slate-500'
                                        }`}>{m.date}</p>
                                    {m.current && <span className="text-[8px] font-black bg-teal-500/20 text-teal-300 px-2 py-0.5 rounded-full uppercase tracking-widest">Live Now</span>}
                                    {!m.done && !m.current && <span className="text-[8px] font-black bg-slate-800/60 text-slate-500 px-2 py-0.5 rounded-full uppercase tracking-widest">Upcoming</span>}
                                </div>
                                <p className={`leading-relaxed text-sm ${m.done || m.current ? 'text-slate-300' : 'text-slate-500'}`}>{m.event}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── VALUES ── */}
            <section className="px-6 py-20 max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <p className="text-xs font-black text-teal-400 uppercase tracking-widest mb-3">What We Stand For</p>
                    <h2 className="text-4xl text-white">Our Core Values</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((v) => (
                        <div key={v.title} className="glass p-8 rounded-[2rem] space-y-4 hover:border-teal-500/30 transition-all group">
                            <div className="w-12 h-12 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                                {v.icon}
                            </div>
                            <h3 className="text-lg font-bold text-white">{v.title}</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">{v.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="px-6 py-24 text-center">
                <div className="max-w-2xl mx-auto space-y-6">
                    <h2 className="text-4xl text-white">Be Part of the Beginning.</h2>
                    <p className="text-slate-400">Join the early access list and help shape Vakya's soul.</p>
                    <Link href="/contact" className="btn-primary inline-flex mx-auto">
                        Join the Inner Circle <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </main>
    );
}
