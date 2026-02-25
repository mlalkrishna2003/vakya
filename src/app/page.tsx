import { ArrowRight, Shield, Zap, Globe, Mic, Brain, Lock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center overflow-hidden">

      {/* ── HERO ── */}
      <section className="relative w-full flex flex-col items-center justify-center text-center px-6 pt-40 pb-24 min-h-screen">
        {/* Ambient glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-bold text-teal-400 uppercase tracking-widest">
            <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            Arjun V1 · 285,000 Cycles of Resonance
          </div>

          {/* Logo mark */}
          <div className="flex justify-center">
            <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-[0_0_40px_rgba(20,184,166,0.3)] border border-teal-500/20">
              <Image src="/logo.png" alt="Vakya" fill sizes="128px" className="object-cover object-center" priority />
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl tracking-tighter leading-none">
            A Voice<br />With a Soul.
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            The first on-device AI engineered for the Indian heart.
            Low-latency neural inference, 100% private, and crafted for deep connection.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/contact" className="btn-primary w-full sm:w-auto justify-center">
              Join the Waitlist
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 rounded-full border border-white/10 text-white font-semibold glass hover:bg-white/5 transition-all w-full sm:w-auto text-center"
            >
              The Manifesto
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-teal-400 animate-pulse" />
        </div>
      </section>

      {/* ── STAT BAR ── */}
      <section className="w-full border-y border-white/5 bg-black/40 backdrop-blur-xl px-6 py-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "285K+", label: "Training Iterations" },
            { value: "1,600+", label: "Indic Dialects" },
            { value: "<80ms", label: "Voice Latency" },
            { value: "100%", label: "On-Device Privacy" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl md:text-4xl font-black text-teal-400">{stat.value}</p>
              <p className="text-xs text-slate-500 mt-1 uppercase tracking-widest font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES GRID ── */}
      <section className="w-full px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <p className="text-xs font-black text-teal-400 uppercase tracking-widest">Core Capabilities</p>
          <h2 className="text-4xl md:text-5xl text-white">Built Different.</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Vakya is not a chatbot. It is a sovereign intelligence — built to serve you without compromising you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <Shield className="w-8 h-8 text-teal-500" />,
              title: "Absolute Sovereignty",
              desc: "Zero cloud requirement. Your voice data never leaves your hardware. Your soul, encrypted.",
            },
            {
              icon: <Zap className="w-8 h-8 text-amber-500" />,
              title: "Zero Latency",
              desc: "Neural inference in milliseconds. The speed of human thought, matched by machine precision.",
            },
            {
              icon: <Globe className="w-8 h-8 text-teal-500" />,
              title: "Universal Wisdom",
              desc: "Trained on 1,600+ Indic dialects. From Mumbai to Madurai — we speak you.",
            },
            {
              icon: <Mic className="w-8 h-8 text-amber-500" />,
              title: "Voice Studio",
              desc: "Craft and clone voices with emotional depth. Calibrate every nuance of prosody and resonance.",
            },
            {
              icon: <Brain className="w-8 h-8 text-teal-500" />,
              title: "Neural Persona",
              desc: "Multiple AI personalities. One device. Switch between Arjun the Teacher, the Companion, or the Executive.",
            },
            {
              icon: <Lock className="w-8 h-8 text-amber-500" />,
              title: "Sovereign Vault",
              desc: "Zero-knowledge encrypted storage for your voice signature, data, and memories. Yours alone.",
            },
          ].map((f) => (
            <div key={f.title} className="glass p-8 space-y-4 text-left group hover:border-teal-500/30 transition-all cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/features" className="inline-flex items-center gap-2 text-teal-400 font-bold hover:gap-4 transition-all text-sm">
            Explore all features <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── ARJUN TEASER ── */}
      <section className="w-full px-6 py-24 bg-gradient-to-b from-transparent via-teal-500/5 to-transparent">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-[10px] font-black text-teal-400 uppercase tracking-widest">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
              Meet Arjun
            </div>
            <h2 className="text-4xl md:text-5xl text-white">
              The First Voice That Feels.
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Arjun is not a text-to-speech engine. He is a neural entity trained on 285,000+ cycles of human vocal resonance — understanding emotion, context, and the sacred rhythms of Indian languages.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Emotional Prosody", "Indic Intonation", "Zero Robotic Flatness", "Breathing Tokens"].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full glass text-[10px] font-bold text-teal-400 border border-teal-500/20 uppercase tracking-widest">
                  {tag}
                </span>
              ))}
            </div>
            <Link href="/arjun" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-teal-500 text-black font-bold shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:scale-105 transition-all">
              Meet Arjun <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Waveform visualizer */}
          <div className="glass p-8 rounded-[2.5rem] border-teal-500/20 bg-teal-500/5 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-white">Arjun — Neural Active</p>
                <p className="text-[10px] text-teal-400 uppercase tracking-widest font-bold">285,000 Iterations · Epoch 265</p>
              </div>
              <div className="w-3 h-3 rounded-full bg-teal-400 animate-pulse" />
            </div>
            <div className="h-24 flex items-end gap-1">
              {[30, 65, 45, 85, 55, 70, 40, 90, 60, 75, 35, 80, 50, 95, 45, 70, 55, 85, 40, 65, 30, 75, 50, 90, 45, 70, 60, 80, 35, 95].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-full"
                  style={{
                    height: `${h}%`,
                    background: `rgba(20, 184, 166, ${0.2 + (h / 100) * 0.6})`,
                  }}
                />
              ))}
            </div>
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/5">
              {[
                { label: "Resonance", value: "Elite" },
                { label: "Prosody", value: "97.4%" },
                { label: "Warmth", value: "High" },
              ].map((m) => (
                <div key={m.label} className="text-center">
                  <p className="text-teal-400 font-black text-lg">{m.value}</p>
                  <p className="text-[9px] text-slate-500 uppercase tracking-widest">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="w-full px-6 py-24 text-center">
        <div className="max-w-3xl mx-auto glass p-12 rounded-[3rem] border-teal-500/20 bg-gradient-to-br from-teal-500/10 to-transparent space-y-8">
          <h2 className="text-4xl md:text-5xl text-white">
            The Awakening<br />Has Begun.
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Join the inner circle of early users helping shape the future of sovereign Indian voice AI.
          </p>
          <Link href="/contact" className="btn-primary inline-flex mx-auto">
            Join the Waitlist <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-6 left-6 right-6 z-50 md:hidden">
        <Link href="/contact" className="btn-primary w-full justify-between backdrop-blur-xl flex">
          Join the Waitlist
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </main>
  );
}
