"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroImage from "./HeroImage";
import MagneticCTA from "./MagneticCTA";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: "1200+", label: "Pelanggan" },
  { value: "Express 3 Jam", label: "" },
  { value: "Garansi", label: "Kualitas" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const content = contentRef.current;
      if (!content) return;
      const children = Array.from(content.children);
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
      gsap.fromTo(
        children[1],
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.7, delay: 0.15, ease: "power3.out" }
      );
      gsap.fromTo(
        children[2],
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.25, ease: "power3.out" }
      );
      gsap.fromTo(
        children[3],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.35, ease: "power3.out" }
      );
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.5, ease: "power3.out" }
      );
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 1.03 },
        { opacity: 1, scale: 1, duration: 1, delay: 0.35, ease: "power3.out" }
      );
    },
    { scope: sectionRef }
  );

  useGSAP(
    () => {
      if (!imageRef.current) return;
      gsap.to(imageRef.current, {
        y: -30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="beranda"
      ref={sectionRef}
      className="relative min-h-screen bg-white pt-24 pb-20 lg:pt-28"
      aria-label="Hero - Perkenalan Mallondri"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-4 lg:grid-cols-[3fr_2fr] lg:gap-20 lg:px-8">
        <div ref={contentRef} className="flex flex-col justify-center lg:max-w-xl">
          <h1
            ref={titleRef}
            className="font-heading text-4xl font-semibold leading-[1.15] tracking-tight text-primary sm:text-5xl lg:text-[3.25rem]"
          >
            Mencuci Kini Bukan Tugasmu
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-primary/80">
            Layanan laundry profesional standar hotel. Cuci, setrika, dan antar jemput—semua dalam satu langkah.
          </p>

          <ul className="mt-10 flex flex-wrap gap-8 sm:gap-12" role="list" aria-label="Statistik">
            {STATS.map((stat) => (
              <li key={stat.value} className="flex flex-col">
                <span className="font-heading text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
                  {stat.value}
                </span>
                {stat.label && (
                  <span className="mt-0.5 text-sm text-primary/65">{stat.label}</span>
                )}
              </li>
            ))}
          </ul>

          <div ref={ctaRef} className="mt-12 flex flex-wrap gap-4">
            <MagneticCTA>
              <Link
                href="#paket"
                className="inline-flex items-center justify-center rounded-xl bg-accent px-7 py-4 text-sm font-medium text-white shadow-lg shadow-accent/25 transition-shadow hover:shadow-xl hover:shadow-accent/30"
              >
                Lihat Paket
              </Link>
            </MagneticCTA>
            <MagneticCTA>
              <Link
                href="#kalkulator"
                className="inline-flex items-center justify-center rounded-xl border-2 border-primary/30 bg-white px-7 py-4 text-sm font-medium text-primary transition-colors hover:border-primary hover:bg-primary/5"
              >
                Hitung Biaya
              </Link>
            </MagneticCTA>
          </div>
        </div>

        <div
          ref={imageRef}
          className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-primary/5 shadow-card lg:aspect-auto lg:min-h-[520px]"
        >
          <HeroImage
            alt="Layanan laundry profesional Mallondri"
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </div>
      </div>
    </section>
  );
}
