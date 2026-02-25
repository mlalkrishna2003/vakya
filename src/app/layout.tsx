import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Aura from "@/components/Aura";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vakya — The Sovereign Voice",
  description: "The first on-device AI engineered for the Indian heart. Low-latency neural inference, 100% private. Meet Arjun.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased bg-black`}>
        <Aura />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
