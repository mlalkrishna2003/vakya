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
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 border-b border-white/5 bg-black/60 backdrop-blur-xl">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <Image
                        src="/logo.svg"
                        alt="Vakya Logo"
                        width={36}
                        height={36}
                        className="group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="text-lg font-black tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                        Vakya
                    </span>
                </Link>

                {/* Desktop Links */}
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

                {/* CTA */}
                <div className="hidden md:flex items-center gap-3">
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
            <div
                className={`fixed inset-0 z-40 transition-all duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    onClick={() => setOpen(false)}
                />
                {/* Drawer */}
                <div
                    className={`absolute top-0 right-0 h-full w-72 bg-[#030712] border-l border-white/10 flex flex-col pt-24 px-8 gap-6 transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className={`text-xl font-bold transition-colors ${pathname === link.href ? "text-teal-400" : "text-slate-300 hover:text-white"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        onClick={() => setOpen(false)}
                        className="mt-4 flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-teal-500 text-black font-bold shadow-[0_0_20px_rgba(20,184,166,0.3)]"
                    >
                        Join Waitlist <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </>
    );
}
