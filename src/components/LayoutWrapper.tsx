"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Aura from "./Aura";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    // Robust check for /app prefixed routes
    const isAppRoute = pathname === "/app" || pathname?.startsWith("/app/");

    return (
        <>
            <Aura />
            {!isAppRoute && <Navbar />}
            {children}
            {!isAppRoute && <Footer />}
        </>
    );
}
