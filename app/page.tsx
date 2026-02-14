import Hero from "../components/Hero";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Beranda",
  description: "Mallondri laundry Tinambung – laundry profesional di Tinambung. Paket BOS, JURAGAN, SULTAN. Antar jemput gratis, express 3 jam, 1200+ pelanggan.",
};
import Pricing from "../components/Pricing";
import Services from "../components/Services";
import Calculator from "../components/Calculator";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import LokasiKami from "../components/LokasiKami";
import FinalCTA from "@/components/FinalCTA";
import Script from "next/script";

const LOCAL_BUSINESS_JSON = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: "Mallondri Laundry Tinambung",
  alternateName: "Mallondri",
  description: "Mallondri laundry Tinambung – layanan laundry profesional di Tinambung, Sulawesi Barat. Paket BOS, JURAGAN, SULTAN. Antar jemput gratis, express 3 jam, 1200+ pelanggan.",
  url: SITE_URL,
  telephone: "+6281242026524",
  email: "info@mallondri.my.id",
  image: `${SITE_URL}/img/favicon.ico`,
  geo: {
    "@type": "GeoCoordinates",
    latitude: -3.5007419276499063,
    longitude: 119.01689008829196,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jln Poros, Tino Limboro, Desa Lekopa'dis",
    addressLocality: "Tinambung",
    addressRegion: "Sulawesi Barat",
    addressCountry: "ID",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "08:00",
      closes: "20:00",
    },
  ],
  priceRange: "Rp",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "1200",
    bestRating: "5",
  },
};

export default function Home() {
  return (
    <>
      <Script
        id="schema-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSON) }}
        strategy="afterInteractive"
      />
      <main id="main-content" role="main">
        <Hero />
        <Pricing />
        <Services />
        <Calculator />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
        <LokasiKami />
        <FinalCTA />
        </main>
    </>
  );
}
