import type { Metadata } from "next";
import Script from "next/script";
import { WHATSAPP_LINK, SITE_URL, SITEMAP_URL } from "@/lib/constants";
import { DM_Sans, Manrope, Inter, Montserrat } from "next/font/google";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-BZFZTXVJN3";
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
  metadataBase: new URL(SITE_URL),
  applicationName: "Mallondri Laundry Tinambung",
  title: {
    default: "Mallondri | Mallondri Laundry Tinambung - Laundry Profesional Sulawesi Barat",
    template: "%s | Mallondri Laundry Tinambung",
  },
  description:
    "Mallondri laundry Tinambung – laundry profesional di Tinambung. Paket BOS, JURAGAN, SULTAN. Antar jemput gratis, express 3 jam, 1200+ pelanggan.",
  keywords: ["mallondri", "mallondri tinambung", "mallondri laundry", "laundry Tinambung", "laundry Sulawesi Barat"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mallondri - Mallondri Laundry Tinambung",
    description: "Mallondri laundry Tinambung – layanan laundry profesional. Antar jemput gratis.",
    type: "website",
    url: SITE_URL,
    siteName: "Mallondri Laundry Tinambung",
    images: ["/img/favicon.ico"],
  },
  icons: {
    icon: "/img/favicon.ico",
    shortcut: "/img/favicon.ico",
    apple: "/img/favicon.ico",
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
      <head>
        <link rel="sitemap" type="application/xml" title="Sitemap" href={SITEMAP_URL} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": `${SITE_URL}/#website`,
                  url: SITE_URL,
                  name: "Mallondri Laundry Tinambung",
                  description: "Laundry profesional di Tinambung, Sulawesi Barat. Antar jemput gratis, express 3 jam.",
                  publisher: { "@id": `${SITE_URL}/#organization` },
                },
                {
                  "@type": "Organization",
                  "@id": `${SITE_URL}/#organization`,
                  name: "Mallondri",
                  url: SITE_URL,
                  logo: `${SITE_URL}/img/favicon.ico`,
                  sameAs: [WHATSAPP_LINK],
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${dmSans.variable} ${manrope.variable} ${inter.variable} ${montserrat.variable} font-sans antialiased`}
      >
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
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
