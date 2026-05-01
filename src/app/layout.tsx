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

const SITE_URL = "https://beaulewis.org";
const SITE_TITLE = "Beau Lewis — Entrepreneur, Writer, Producer";
const SITE_DESCRIPTION =
  "Entrepreneur, writer, and producer working to connect humans and tech. Twenty years across viral media, GoldieBlox, Rhyme Combinator, and Co-Founders the Musical.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Beau Lewis",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/photos/ogImage.jpg",
        width: 1200,
        height: 630,
        alt: "Beau Lewis",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/photos/ogImage.jpg"],
  },
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
