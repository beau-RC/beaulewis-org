import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const interDisplay = Inter_Tight({
  variable: "--font-inter-display",
  subsets: ["latin"],
  weight: ["700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Beau Lewis — Entrepreneur, Viral Media Champion",
  description:
    "3X Startup founder. Emmy winner. 250+ million views. Builder of impossible creative visions.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${interDisplay.variable}`}>
      <body className="min-h-screen flex flex-col bg-bg text-ink">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
