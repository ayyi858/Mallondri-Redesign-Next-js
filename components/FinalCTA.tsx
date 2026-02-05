"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticCTA from "./MagneticCTA";

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(sectionRef.current?.children ?? [], {
        opacity: 0,
        y: 28,
        stagger: 0.1,
        duration: 0.65,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="bg-primary/[0.04] py-24 lg:py-32"
      aria-labelledby="final-cta-heading"
    >
      <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
        <h2 id="final-cta-heading" className="font-heading text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
          Siap Mencoba Layanan Kami?
        </h2>
        <p className="mt-5 text-primary/75">
          Bergabunglah dengan 1200+ pelanggan yang sudah mempercayakan cucian mereka pada Mallondri.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-5">
          <MagneticCTA>
            <Link
              href="#paket"
              className="inline-flex items-center justify-center rounded-xl bg-accent px-7 py-4 text-sm font-medium text-white shadow-lg shadow-accent/25 transition-shadow hover:shadow-xl hover:shadow-accent/30"
            >
              Lihat Paket
            </Link>
          </MagneticCTA>
          <MagneticCTA>
            <a
              href="https://wa.me/6281242026524"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border-2 border-primary/30 bg-white px-7 py-4 text-sm font-medium text-primary transition-colors hover:border-primary hover:bg-primary/5"
            >
              Hubungi WhatsApp
            </a>
          </MagneticCTA>
        </div>
      </div>
    </section>
  );
}
