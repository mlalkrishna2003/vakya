import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dhvani OS — Alpha Dashboard",
    description: "Sovereign Voice AI — Dhvani OS Alpha. On-device, private, zero compromise.",
};

// This nested layout intentionally does NOT render Navbar or Footer.
// The dashboard has its own sidebar + mobile navigation.
export default function AppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="app-shell">
            {children}
        </div>
    );
}
