import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import Calculator from "@/components/Calculator";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import FinalCTA from "@/components/FinalCTA";
import Script from "next/script";

const LOCAL_BUSINESS_JSON = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Mallondri",
  description: "Layanan laundry profesional standar hotel di Tinambung, Sulawesi Barat. Paket BOS, JURAGAN, SULTAN. Antar jemput gratis, express 3 jam.",
  url: "https://mallondri.my.id",
  telephone: "+6281242026524",
  email: "info@mallondri.my.id",
  address: {
    "@type": "PostalAddress",
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
  image: "https://mallondri.my.id/og-image.jpg",
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
        <FinalCTA />
        </main>
    </>
  );
}
