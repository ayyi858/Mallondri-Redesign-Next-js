import type { Metadata } from "next";
import { DM_Sans, Manrope, Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import AOSProvider from "@/components/AOSProvider";

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

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mallondri.my.id"),
  title: "Mallondri | Mallondri Laundry Tinambung - Laundry Profesional Sulawesi Barat",
  description:
    "Mallondri laundry Tinambung – laundry profesional di Tinambung. Paket BOS, JURAGAN, SULTAN. Antar jemput gratis, express 3 jam, 1200+ pelanggan.",
  keywords: ["mallondri", "mallondri tinambung", "mallondri laundry", "laundry Tinambung", "laundry Sulawesi Barat"],
  openGraph: {
    title: "Mallondri - Mallondri Laundry Tinambung",
    description: "Mallondri laundry Tinambung – layanan laundry profesional. Antar jemput gratis.",
    type: "website",
    images: ["/img/logo.jpg"],
  },
  icons: {
    icon: "/img/favicon.ico",
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
        className={`${dmSans.variable} ${manrope.variable} ${inter.variable} ${montserrat.variable} font-sans antialiased`}
      >
        <AOSProvider>
          <Navbar />
          {children}
          <Footer />
          <Chatbot />
          <WhatsAppWidget />
        </AOSProvider>
      </body>
    </html>
  );
}
