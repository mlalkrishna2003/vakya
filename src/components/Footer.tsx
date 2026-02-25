import Link from "next/link";
import Image from "next/image";

const footerLinks = {
    Product: [
        { label: "Features", href: "/features" },
        { label: "Arjun Voice", href: "/arjun" },
        { label: "Voice Studio", href: "/features#studio" },
        { label: "Knowledge Hub", href: "/features#hub" },
    ],
    Company: [
        { label: "About", href: "/about" },
        { label: "The Manifesto", href: "/about#manifesto" },
        { label: "Contact", href: "/contact" },
        { label: "Privacy", href: "#" },
    ],
    Connect: [
        { label: "Twitter / X", href: "#" },
        { label: "LinkedIn", href: "#" },
        { label: "Instagram", href: "#" },
        { label: "Discord", href: "#" },
    ],
};

export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-black/40 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-3 group w-fit">
                            <Image
                                src="/logo.svg"
                                alt="Vakya Logo"
                                width={40}
                                height={40}
                                className="group-hover:scale-110 transition-transform"
                            />
                            <span className="text-xl font-black tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                                Vakya
                            </span>
                        </Link>
                        <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                            The Sovereign Sound. Built for Bharat, built for the world.
                        </p>
                        <div className="inline-flex items-center gap-2 text-[10px] font-bold text-teal-400 uppercase tracking-widest">
                            <div className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                            Powered by Dhvani OS
                        </div>
                    </div>

                    {/* Link Columns */}
                    {Object.entries(footerLinks).map(([section, links]) => (
                        <div key={section} className="space-y-4">
                            <h4 className="text-xs font-black text-white uppercase tracking-widest">
                                {section}
                            </h4>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-slate-500 hover:text-teal-400 transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-slate-600">
                        © 2026 Vakya AI. All rights reserved. Built with sovereignty.
                    </p>
                    <p className="text-xs text-slate-700 italic">
                        &quot;Technology should serve the soul, not surveil it.&quot;
                    </p>
                </div>
            </div>
        </footer>
    );
}
