"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Zap, Lock, EyeOff, AlertCircle } from "lucide-react";

export default function Security() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-[10px] font-black text-teal-400 uppercase tracking-widest">
                    <ShieldCheck className="w-3 h-3" />
                    Neural Hardening
                </div>
                <h2 className="text-4xl font-black text-white tracking-tighter">Security</h2>
                <p className="text-slate-400 max-w-sm">
                    Monitoring the Sovereign Enclave and Local Pulse Cluster. Your privacy is technically absolute.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Status Dashboard */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <HealthCard
                            icon={<Cpu className="w-6 h-6 text-teal-400" />}
                            label="Local Pulse Cluster"
                            status="Online"
                            detail="3.2 GHz · 4 Nodes"
                        />
                        <HealthCard
                            icon={<EyeOff className="w-6 h-6 text-purple-400" />}
                            label="Neural Cloak"
                            status="Active"
                            detail="Zero Leakage Detected"
                        />
                    </div>

                    <div className="glass p-8 rounded-[2.5rem] border-white/5 space-y-8">
                        <div className="flex justify-between items-center">
                            <h3 className="text-xl font-bold tracking-tight uppercase">Privacy Audit Trail</h3>
                            <div className="flex items-center gap-2 text-[10px] font-bold text-teal-500">
                                <div className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
                                Live Monitoring
                            </div>
                        </div>

                        <div className="space-y-6">
                            <AuditLog time="12:45:01" event="Sovereign Handshake" detail="Local-Only Verification" status="Verified" />
                            <AuditLog time="12:40:55" event="Neural Weight Lock" detail="Enclave 0x721fb.. Hardened" status="Success" />
                            <AuditLog time="12:32:12" event="External Request" detail="Blocked by Cloak" status="Deflected" />
                            <AuditLog time="12:15:30" event="Voice-ID Access" detail="Biometric Match Found" status="Authorized" />
                        </div>
                    </div>
                </div>

                {/* Policy Sidebar */}
                <div className="space-y-6">
                    <div className="glass p-8 rounded-[2.5rem] border-white/5 space-y-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 blur-[50px] rounded-full" />
                        <div className="w-12 h-12 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-center">
                            <Lock className="w-6 h-6 text-teal-500" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold">Privacy Protocol</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">
                                Dhvani is engineered to reside exclusively within your physical domain. Our &quot;Scorched Earth&quot; policy ensures zero data persistence beyond the Vault.
                            </p>
                        </div>
                        <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-3">
                            <p className="text-[10px] font-bold text-teal-500 uppercase tracking-widest">Enforcement Mode</p>
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-bold text-white uppercase">Sovereign High</span>
                                <div className="w-10 h-5 bg-teal-500 rounded-full flex items-center justify-end px-1 shadow-[0_0_10px_rgba(20,184,166,0.3)]">
                                    <div className="w-3 h-3 bg-white rounded-full" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="glass p-8 rounded-[2.5rem] border-amber-500/20 bg-amber-500/5 space-y-4">
                        <div className="flex items-center gap-2 text-amber-500">
                            <AlertCircle className="w-5 h-5" />
                            <span className="text-xs font-bold uppercase tracking-widest">Security Tip</span>
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed italic">
                            &quot;Trust but Verify. Regularly snapshot your Neural Vault to an external hardware node.&quot;
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function HealthCard({ icon, label, status, detail }: { icon: React.ReactNode, label: string, status: string, detail: string }) {
    return (
        <div className="glass p-8 rounded-[2.5rem] border-white/5 space-y-4">
            <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-center">
                    {icon}
                </div>
                <div className="flex items-center gap-1.5 text-teal-500 font-bold text-[10px] uppercase tracking-widest">
                    <Zap className="w-3 h-3" />
                    {status}
                </div>
            </div>
            <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{label}</p>
                <h3 className="text-xl font-black text-white">{detail}</h3>
            </div>
        </div>
    );
}

function AuditLog({ time, event, detail, status }: { time: string, event: string, detail: string, status: string }) {
    return (
        <div className="flex items-center justify-between text-xs py-1 border-b border-white/5 last:border-0 pb-4 last:pb-0">
            <div className="flex items-center gap-4">
                <span className="font-mono text-slate-600 w-16">{time}</span>
                <div>
                    <p className="font-bold text-slate-200">{event}</p>
                    <p className="text-slate-500 text-[10px] uppercase tracking-tight">{detail}</p>
                </div>
            </div>
            <span className={`font-black uppercase tracking-widest ${status === 'Deflected' ? 'text-amber-500' : 'text-teal-500'
                }`}>
                {status}
            </span>
        </div>
    );
}
