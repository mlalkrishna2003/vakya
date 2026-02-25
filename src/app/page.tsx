"use client";

import {
  LayoutDashboard,
  Users,
  Database,
  ShieldCheck,
  LogOut,
  Sparkles,
  Settings,
  Mic,
  Zap,
  GraduationCap
} from "lucide-react";
import KnowledgeTrinity from "@/components/KnowledgeTrinity";
import KnowledgeHub from "@/components/KnowledgeHub";
import Personas from "@/components/Personas";
import Vault from "@/components/Vault";
import Security from "@/components/Security";
import Nexus from "@/components/Nexus";
import VoiceStudio from "@/components/VoiceStudio";
import EliteStudio from "@/components/EliteStudio";
import Acharya from "@/components/Acharya";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Dashboard() {
  const [activeView, setActiveView] = useState("overview");

  return (
    <div className="flex min-h-screen bg-[#030712] text-white">
      {/* Sidebar - Desktop Only */}
      <aside className="w-80 border-r border-white/5 hidden lg:flex flex-col p-8 space-y-12 shrink-0 h-screen sticky top-0">
        <div
          className="flex items-center gap-3 group cursor-pointer"
          onClick={() => setActiveView("overview")}
          role="button"
          tabIndex={0}
          aria-label="Back to Overview"
        >
          <div className="w-10 h-10 rounded-2xl bg-teal-500 flex items-center justify-center font-bold text-black text-xl shadow-[0_0_30px_rgba(20,184,166,0.3)] group-hover:rotate-12 transition-transform duration-500">
            V
          </div>
          <span className="text-2xl font-black tracking-tighter">DHVANI</span>
        </div>

        <nav className="flex-1 space-y-2">
          <NavItem icon={<LayoutDashboard className="w-5 h-5" />} label="Overview" active={activeView === "overview"} onClick={() => setActiveView("overview")} />
          <NavItem icon={<Sparkles className="w-5 h-5" />} label="Knowledge Hub" active={activeView === "hub"} onClick={() => setActiveView("hub")} />
          <NavItem icon={<Users className="w-5 h-5" />} label="Personas" active={activeView === "personas"} onClick={() => setActiveView("personas")} />
          <NavItem icon={<Settings className="w-5 h-5" />} label="Dev Nexus" active={activeView === "nexus"} onClick={() => setActiveView("nexus")} />
          <NavItem icon={<Mic className="w-5 h-5" />} label="Voice Studio" active={activeView === "studio"} onClick={() => setActiveView("studio")} />
          <NavItem icon={<Zap className="w-5 h-5" />} label="Elite Studio" active={activeView === "elite"} onClick={() => setActiveView("elite")} />
          <NavItem icon={<GraduationCap className="w-5 h-5" />} label="AI Tutor" active={activeView === "acharya"} onClick={() => setActiveView("acharya")} />
          <NavItem icon={<Database className="w-5 h-5" />} label="Vault" active={activeView === "vault"} onClick={() => setActiveView("vault")} />
          <NavItem icon={<ShieldCheck className="w-5 h-5" />} label="Security" active={activeView === "security"} onClick={() => setActiveView("security")} />
        </nav>

        <div className="space-y-4">
          <div className="p-5 rounded-[2rem] glass border border-teal-500/10 space-y-3">
            <div className="flex justify-between items-center">
              <p className="text-[10px] font-black text-teal-400 tracking-widest leading-none uppercase">Arjun Status</p>
              <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse shadow-[0_0_10px_rgba(20,184,166,1)]" />
            </div>
            <p className="text-sm font-bold text-slate-300">Resonance: 251 Epochs</p>
            <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "45%" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="h-full bg-teal-500 shadow-[0_0_10px_rgba(20,184,166,0.5)]"
              />
            </div>
          </div>
          <button
            className="flex items-center gap-3 text-slate-500 hover:text-white transition-all px-4 w-full group py-2"
            aria-label="Sign Out"
          >
            <LogOut className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold tracking-tight">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-12 overflow-y-auto">
        <header className="flex items-center justify-between mb-16 max-w-7xl mx-auto">
          <div className="space-y-1">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black tracking-tighter"
            >
              {activeView === "hub" ? "Knowledge Hub" : "Welcome, Architect."}
            </motion.h1>
            <p className="text-slate-500 text-sm font-medium">Identity: Sovereign Alpha</p>
          </div>

          <div className="flex items-center gap-5">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-white">Sovereign Mode</p>
              <p className="text-[10px] text-teal-400 font-bold uppercase tracking-widest leading-none">Ultra Latency Locked</p>
            </div>
            <div
              className="w-14 h-14 rounded-2xl glass border border-white/10 flex items-center justify-center text-teal-400 shadow-inner group cursor-pointer hover:border-teal-500 transition-all"
              role="button"
              aria-label="Security Status"
            >
              <ShieldCheck className="w-7 h-7 group-hover:scale-110 transition-transform" />
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto min-h-[60vh]">
          <AnimatePresence mode="wait">
            {activeView === "overview" && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 xl:grid-cols-3 gap-12"
              >
                <div className="xl:col-span-2 space-y-12">
                  <KnowledgeTrinity />
                </div>
                <div className="space-y-6">
                  <div className="glass p-8 border-teal-500/10 rounded-[2.5rem] sticky top-0 bg-[#030712]/50">
                    <h3 className="text-xl font-bold mb-4 tracking-tight">Aura Inspector</h3>
                    <p className="text-sm text-slate-400 mb-8 leading-relaxed">
                      Real-time verification of Arjun&apos;s responses against the Knowledge Trinity layers.
                    </p>
                    <div className="aspect-square rounded-[2rem] bg-black/40 border border-white/5 flex flex-col items-center justify-center text-center p-8 space-y-6 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-teal-500/5 to-transparent pointer-events-none" />
                      <div className="w-12 h-12 rounded-full border-2 border-slate-800 border-t-teal-500 animate-spin" />
                      <p className="italic text-slate-500 text-xs font-semibold leading-relaxed">
                        Synchronizing with <br /> Local Pulse Cluster...
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeView === "hub" && (
              <motion.div
                key="hub"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <KnowledgeHub />
              </motion.div>
            )}

            {activeView === "personas" && (
              <motion.div
                key="personas"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <Personas />
              </motion.div>
            )}

            {activeView === "vault" && (
              <motion.div
                key="vault"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <Vault />
              </motion.div>
            )}

            {activeView === "security" && (
              <motion.div
                key="security"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <Security />
              </motion.div>
            )}

            {activeView === "nexus" && (
              <motion.div
                key="nexus"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <Nexus />
              </motion.div>
            )}

            {activeView === "studio" && (
              <motion.div
                key="studio"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <VoiceStudio />
              </motion.div>
            )}

            {activeView === "elite" && (
              <motion.div
                key="elite"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <EliteStudio />
              </motion.div>
            )}

            {activeView === "acharya" && (
              <motion.div
                key="acharya"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <Acharya />
              </motion.div>
            )}

            {activeView !== "overview" && activeView !== "hub" && activeView !== "personas" && activeView !== "vault" && activeView !== "security" && activeView !== "nexus" && activeView !== "studio" && activeView !== "elite" && activeView !== "acharya" && (
              <motion.div
                key="placeholder"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col items-center justify-center py-32 text-center space-y-6"
              >
                <div className="w-24 h-24 rounded-[2rem] glass border border-white/5 flex items-center justify-center text-slate-700 relative">
                  <Settings className="w-12 h-12 animate-[spin_10s_linear_infinite]" />
                  <div className="absolute inset-0 rounded-[2rem] bg-teal-500/5 blur-xl animate-pulse" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white tracking-tight leading-none uppercase">Module Hardening Active</h3>
                  <p className="text-slate-500 max-w-sm mx-auto text-sm">
                    This interface component is currently undergoing Sovereign security validation.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Mobile Nav Bar */}
      <nav className="fixed bottom-0 left-0 right-0 lg:hidden glass backdrop-blur-3xl border-t border-white/5 px-10 py-6 flex items-center justify-between z-50 rounded-t-[2.5rem]">
        <button
          onClick={() => setActiveView("overview")}
          aria-label="Go to Overview"
          className={`transition-all duration-300 ${activeView === "overview" ? "text-teal-400 scale-125" : "text-slate-600 hover:text-white"}`}
        >
          <LayoutDashboard className="w-7 h-7" />
        </button>
        <button
          onClick={() => setActiveView("hub")}
          aria-label="Go to Knowledge Hub"
          className={`transition-all duration-300 ${activeView === "hub" ? "text-teal-400 scale-125" : "text-slate-600 hover:text-white"}`}
        >
          <Sparkles className="w-7 h-7" />
        </button>
        <button
          onClick={() => setActiveView("vault")}
          aria-label="Go to Vault"
          className={`transition-all duration-300 ${activeView === "vault" ? "text-teal-400 scale-125" : "text-slate-600 hover:text-white"}`}
        >
          <Database className="w-7 h-7" />
        </button>
        <button
          onClick={() => setActiveView("personas")}
          aria-label="Go to Personas"
          className={`transition-all duration-300 ${activeView === "personas" ? "text-teal-400 scale-125" : "text-slate-600 hover:text-white"}`}
        >
          <Users className="w-7 h-7" />
        </button>
      </nav>
    </div>
  );
}

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick: () => void;
}

function NavItem({ icon, label, active = false, onClick }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 group relative ${active
        ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20 shadow-[0_0_25px_rgba(20,184,166,0.1)]'
        : 'text-slate-500 hover:text-white hover:bg-white/5'
        }`}
    >
      <div className={`${active ? 'scale-110 rotate-3' : 'scale-100'} transition-transform duration-300`}>
        {icon}
      </div>
      <span className="font-bold text-sm tracking-tight">{label}</span>
      {active && (
        <motion.div
          layoutId="activeIndicator"
          className="ml-auto w-1 h-5 bg-teal-500 rounded-full shadow-[0_0_10px_rgba(20,184,166,1)]"
        />
      )}
    </button>
  );
}
