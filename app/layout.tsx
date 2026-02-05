import type { Metadata } from "next";
import { DM_Sans, Manrope, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mallondri | Laundry Profesional Standar Hotel - Tinambung Sulawesi Barat",
  description:
    "Layanan laundry profesional standar hotel di Tinambung. Paket BOS, JURAGAN, SULTAN. Antar jemput gratis, express 3 jam, 1200+ pelanggan.",
  keywords: ["laundry", "Tinambung", "Mallondri", "laundry profesional", "Sulawesi Barat"],
  openGraph: {
    title: "Mallondri - Laundry Profesional Tinambung",
    description: "Layanan laundry profesional standar hotel. Antar jemput gratis.",
    type: "website",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${dmSans.variable} ${manrope.variable} ${inter.variable} font-sans antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
