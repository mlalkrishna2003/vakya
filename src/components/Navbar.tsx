"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/features" },
    { label: "Arjun", href: "/arjun" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-3 border-b border-white/5 bg-black/60 backdrop-blur-xl">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    {/* Real Vakya medallion logo */}
                    <div className="relative w-11 h-11 rounded-full overflow-hidden border border-teal-500/30 shadow-[0_0_16px_rgba(20,184,166,0.25)] group-hover:shadow-[0_0_24px_rgba(20,184,166,0.45)] group-hover:scale-105 transition-all duration-300 shrink-0">
                        <Image
                            src="/logo.png"
                            alt="Vakya"
                            fill
                            sizes="44px"
                            className="object-cover object-center"
                            priority
                        />
                    </div>
                    {/* Wordmark */}
                    <div className="flex flex-col leading-none">
                        <span className="text-base font-black tracking-tight text-white leading-tight">Vakya</span>
                        <span className="text-[9px] font-bold text-teal-400 uppercase tracking-[0.18em] leading-tight">Dhvani OS</span>
                    </div>
                </Link>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-sm font-semibold transition-colors duration-200 ${pathname === link.href
                                    ? "text-teal-400"
                                    : "text-slate-400 hover:text-white"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <Link
                        href="/contact"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal-500 text-black text-sm font-bold shadow-[0_0_20px_rgba(20,184,166,0.4)] hover:scale-105 transition-all active:scale-95"
                    >
                        Join Waitlist
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden p-2 rounded-xl glass"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </nav>

            {/* Mobile Drawer */}
            <div className={`fixed inset-0 z-40 transition-all duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setOpen(false)} />
                <div className={`absolute top-0 right-0 h-full w-72 bg-[#030712] border-l border-white/10 flex flex-col pt-8 px-8 gap-6 transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
                    {/* Logo in drawer */}
                    <div className="flex items-center gap-3 mb-2 pb-6 border-b border-white/5">
                        <div className="relative w-11 h-11 rounded-full overflow-hidden border border-teal-500/30 shadow-[0_0_16px_rgba(20,184,166,0.25)] shrink-0">
                            <Image src="/logo.png" alt="Vakya" fill sizes="44px" className="object-cover object-center" />
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="text-base font-black tracking-tight text-white leading-tight">Vakya</span>
                            <span className="text-[9px] font-bold text-teal-400 uppercase tracking-[0.18em] leading-tight">Dhvani OS</span>
                        </div>
                    </div>

                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} onClick={() => setOpen(false)}
                            className={`text-xl font-bold transition-colors ${pathname === link.href ? "text-teal-400" : "text-slate-300 hover:text-white"}`}>
                            {link.label}
                        </Link>
                    ))}
                    <Link href="/contact" onClick={() => setOpen(false)}
                        className="mt-4 flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-teal-500 text-black font-bold shadow-[0_0_20px_rgba(20,184,166,0.3)]">
                        Join Waitlist <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </>
    );
}
