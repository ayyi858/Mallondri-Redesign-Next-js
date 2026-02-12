"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
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

  return (
    <section
      id="beranda"
      ref={sectionRef}
      className="relative min-h-dvh bg-white pt-28 pb-20 sm:pt-32 lg:pt-36 lg:pb-24"
      aria-label="Hero - Perkenalan Mallondri"
      data-aos="fade-up"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:gap-14 sm:px-6 lg:grid-cols-[3fr_2fr] lg:gap-20 lg:px-8">
        <div ref={contentRef} className="order-2 flex flex-col justify-center lg:order-1 lg:max-w-xl">
          <p className="section-label">
            Laundry Profesional
          </p>
          <h1
            ref={titleRef}
            className="mt-2 font-heading text-3xl font-bold leading-[1.15] tracking-tight text-primary sm:text-4xl sm:mt-3 lg:text-5xl lg:text-[3.25rem]"
          >
            <span className="block">Mencuci Kini</span>
            <span className="block">Bukan Tugasmu</span>
          </h1>
          <p className="mt-4 text-base leading-relaxed text-primary/80 sm:mt-6 sm:text-lg">
            Kami memahami betapa berharganya waktu Anda dan pentingnya penampilan yang selalu rapi. Mallondri Laundry
            hadir sebagai solusi laundry yang praktis, andal, dan berkualitas tinggi di Tinambung.
          </p>

          <ul className="mt-8 flex flex-wrap gap-6 sm:mt-10 sm:gap-12" role="list" aria-label="Statistik">
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

          <div ref={ctaRef} className="mt-10 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:flex-wrap sm:gap-4">
            <MagneticCTA>
              <Link
                href="#paket"
                className="focus-ring inline-flex min-h-[48px] items-center justify-center rounded-xl bg-accent px-6 py-3.5 text-base font-semibold text-white shadow-(--shadow-cta) transition-all duration-200 active:scale-[0.98] sm:py-4 sm:text-sm sm:hover:-translate-y-0.5 sm:hover:shadow-[0_6px_20px_-2px_rgb(243_112_33/0.4)]"
              >
                Lihat Paket Layanan
              </Link>
            </MagneticCTA>
            <MagneticCTA>
              <Link
                href="#kalkulator"
                className="focus-ring inline-flex min-h-[48px] items-center justify-center rounded-xl border-2 border-primary/20 bg-white px-6 py-3.5 text-base font-semibold text-primary transition-all duration-200 active:scale-[0.98] sm:py-4 sm:text-sm sm:hover:border-primary/40 sm:hover:bg-primary/5"
              >
                Simulasikan Biaya
              </Link>
            </MagneticCTA>
          </div>
        </div>

        <div
          ref={imageRef}
          className="order-1 relative aspect-4/3 overflow-hidden rounded-2xl border border-primary/8 bg-primary/5 shadow-(--shadow-card) lg:order-2 lg:aspect-auto lg:min-h-[520px]"
          data-aos="zoom-in"
          data-aos-delay="150"
        >
          <Image
            src="/img/tok.png"
            alt="Mallondri Laundry - Mencuci Kini Bukan Tugasmu"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </div>
      </div>
    </section>
  );
}
