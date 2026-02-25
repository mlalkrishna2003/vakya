"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Mail, User, ChevronDown } from "lucide-react";

const useCaseOptions = [
    "Personal Companion",
    "Voice Artist / Broadcaster",
    "Education & Learning",
    "Business & Productivity",
    "Developer / Builder",
    "Healthcare",
    "Just Curious!",
];

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", useCase: "", message: "" });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In production, this would POST to a backend/Formspree/Google Sheets
        setSubmitted(true);
    };

    return (
        <main className="min-h-screen pt-28">

            {/* ── HERO ── */}
            <section className="px-6 py-16 text-center max-w-3xl mx-auto space-y-6">
                <p className="text-xs font-black text-teal-400 uppercase tracking-widest">Early Access</p>
                <h1 className="text-5xl md:text-6xl text-white">
                    Join the<br />Inner Circle.
                </h1>
                <p className="text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
                    We are inviting a curated group of early users to shape Vakya&apos;s soul. No spam — just a direct line to the future of Indian voice AI.
                </p>
            </section>

            {/* ── FORM ── */}
            <section className="px-6 py-12 max-w-2xl mx-auto">
                {submitted ? (
                    <div className="glass p-12 rounded-[3rem] border-teal-500/30 bg-teal-500/5 text-center space-y-6">
                        <div className="flex justify-center">
                            <CheckCircle2 className="w-16 h-16 text-teal-400" />
                        </div>
                        <h2 className="text-3xl font-black text-white">You&apos;re In.</h2>
                        <p className="text-slate-400 leading-relaxed max-w-sm mx-auto">
                            Welcome to the Inner Circle. We&apos;ll reach out personally when your access is ready. Watch for Arjun. 🧘‍♂️
                        </p>
                    </div>
                ) : (
                    <form
                        onSubmit={handleSubmit}
                        className="glass p-8 md:p-12 rounded-[3rem] border-white/5 space-y-6"
                    >
                        {/* Name */}
                        <div className="space-y-2">
                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                <User className="w-3 h-3" /> Your Name
                            </label>
                            <input
                                type="text"
                                required
                                placeholder="e.g. Priya Sharma"
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-teal-500/50 transition-all text-sm"
                            />
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                <Mail className="w-3 h-3" /> Email Address
                            </label>
                            <input
                                type="email"
                                required
                                placeholder="priya@example.com"
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-teal-500/50 transition-all text-sm"
                            />
                        </div>

                        {/* Use Case */}
                        <div className="space-y-2">
                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                <ChevronDown className="w-3 h-3" /> How Will You Use Vakya?
                            </label>
                            <select
                                required
                                value={form.useCase}
                                onChange={(e) => setForm({ ...form, useCase: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-teal-500/50 transition-all text-sm appearance-none cursor-pointer"
                            >
                                <option value="" disabled className="bg-[#030712]">Select your primary use case...</option>
                                {useCaseOptions.map((opt) => (
                                    <option key={opt} value={opt} className="bg-[#030712]">{opt}</option>
                                ))}
                            </select>
                        </div>

                        {/* Message */}
                        <div className="space-y-2">
                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest">
                                Tell Us Something (Optional)
                            </label>
                            <textarea
                                rows={4}
                                placeholder="What excites you about Vakya? What would you build?"
                                value={form.message}
                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-teal-500/50 transition-all resize-none text-sm"
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn-primary w-full justify-center"
                        >
                            Join the Waitlist
                            <ArrowRight className="w-5 h-5" />
                        </button>

                        <p className="text-center text-xs text-slate-600">
                            No spam. No cloud storage. Your data stays with you. Always.
                        </p>
                    </form>
                )}
            </section>

            {/* ── PERKS ── */}
            <section className="px-6 py-16 max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        {
                            title: "First Access",
                            desc: "Be among the first 500 users to experience the Arjun Alpha before public launch.",
                        },
                        {
                            title: "Shape the Soul",
                            desc: "Your feedback directly influences Arjun's emotional calibration and language training.",
                        },
                        {
                            title: "Founder Status",
                            desc: "Lifetime recognition as an Inner Circle founder. Special pricing. Special access. Always.",
                        },
                    ].map((p) => (
                        <div key={p.title} className="glass p-8 rounded-[2rem] space-y-3 text-center hover:border-teal-500/30 transition-all">
                            <div className="w-3 h-3 rounded-full bg-teal-400 mx-auto" />
                            <h3 className="text-lg font-bold text-white">{p.title}</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">{p.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
