"use client";

import { motion } from "framer-motion";
import { Database, ShieldCheck, HardDrive, Key, Lock, Download } from "lucide-react";

import { useState } from "react";

export default function Vault() {
    const [isSnapshotting, setIsSnapshotting] = useState(false);
    const [progress, setProgress] = useState(0);

    const startSnapshot = () => {
        setIsSnapshotting(true);
        setProgress(0);

        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsSnapshotting(false), 1000);
                    return 100;
                }
                return prev + 5;
            });
        }, 150);
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[10px] font-black text-purple-400 uppercase tracking-widest">
                    <Database className="w-3 h-3" />
                    Sovereign Data
                </div>
                <h2 className="text-4xl font-black text-white tracking-tighter">The Vault</h2>
                <p className="text-slate-400 max-w-sm">
                    Your private repository of neural weights, voice IDs, and personalized logic. Zero-knowledge encrypted.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Stats Area */}
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <StatCard
                        icon={<HardDrive className="w-6 h-6 text-teal-400" />}
                        label="Local Storage"
                        value="43.2 GB"
                        sub="258 GB Remaining"
                        trend="100% Local"
                    />
                    <StatCard
                        icon={<Key className="w-6 h-6 text-purple-400" />}
                        label="Voice IDs"
                        value="12"
                        sub="Registered Identities"
                        trend="Active"
                    />
                    <div className="md:col-span-2 glass p-8 rounded-[2.5rem] border-white/5 space-y-6">
                        <div className="flex justify-between items-center">
                            <h3 className="text-xl font-bold">Neural Weights Registry</h3>
                            <button className="text-xs font-bold text-teal-500 hover:underline">View All</button>
                        </div>
                        <div className="space-y-4">
                            <RegistryItem name="Arjun V1-Final-600" date="2 hours ago" size="1.4 GB" status="Safe" />
                            <RegistryItem name="Dhvani-Indic-Baseline" date="3 days ago" size="8.2 GB" status="Immutable" />
                            <RegistryItem name="Acharya-Deep-Learn" date="1 week ago" size="2.1 GB" status="Safe" />
                        </div>
                    </div>
                </div>

                {/* Action Sidebar */}
                <div className="space-y-6">
                    <div className="glass p-8 rounded-[2.5rem] border-teal-500/20 bg-teal-500/5 space-y-6">
                        <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
                            <ShieldCheck className="w-6 h-6 text-teal-500" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold">Resonance Backup</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                {isSnapshotting ? `Snapshotting In Progress... ${progress}%` : "Snapshot your entire identity architecture to your local hardware pulse."}
                            </p>
                            {isSnapshotting && (
                                <div className="w-full h-2 bg-teal-500/10 rounded-full overflow-hidden mt-4">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${progress}%` }}
                                        className="h-full bg-teal-500"
                                    />
                                </div>
                            )}
                        </div>
                        <button
                            onClick={startSnapshot}
                            disabled={isSnapshotting}
                            className="w-full py-4 rounded-2xl bg-teal-500 text-black font-bold hover:scale-[1.02] transition-all active:scale-95 disabled:opacity-50"
                        >
                            {isSnapshotting ? "Snapshoting..." : "Initiate Snapshot"}
                        </button>
                    </div>

                    <div className="glass p-8 rounded-[2.5rem] border-white/5 space-y-6">
                        <div className="flex items-center gap-3">
                            <Lock className="w-5 h-5 text-slate-500" />
                            <span className="text-sm font-bold text-slate-300 uppercase tracking-widest">Enclave Status</span>
                        </div>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-slate-500">Encryption Level</span>
                                <span className="text-sm font-bold text-white">Quantum 4096</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-slate-500">Cloud Leakage</span>
                                <span className="text-sm font-bold text-teal-500">0.00%</span>
                            </div>
                            <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                                <div className="w-full h-full bg-teal-500/50" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function StatCard({ icon, label, value, sub, trend }: { icon: React.ReactNode, label: string, value: string, sub: string, trend: string }) {
    return (
        <div className="glass p-8 rounded-[2.5rem] border-white/5 space-y-4">
            <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-center">
                    {icon}
                </div>
                <span className="text-[10px] font-black text-teal-500 uppercase tracking-widest bg-teal-500/10 px-2 py-1 rounded-md">
                    {trend}
                </span>
            </div>
            <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{label}</p>
                <h3 className="text-3xl font-black text-white">{value}</h3>
                <p className="text-xs text-slate-400 mt-1">{sub}</p>
            </div>
        </div>
    );
}

function RegistryItem({ name, date, size, status }: { name: string, date: string, size: string, status: string }) {
    return (
        <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all">
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-black/40 flex items-center justify-center">
                    <Download className="w-4 h-4 text-slate-500" />
                </div>
                <div>
                    <p className="text-sm font-bold text-white">{name}</p>
                    <p className="text-[10px] text-slate-500 uppercase font-bold">{date} · {size}</p>
                </div>
            </div>
            <span className="text-[10px] font-bold text-teal-500 uppercase tracking-widest">{status}</span>
        </div>
    );
}
