"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BENEFITS = [
  { title: "Praktis & Andal", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
  { title: "Berkualitas Tinggi", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
  { title: "Harga Terjangkau", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { title: "Layanan Cepat", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
  { title: "Antar Jemput Gratis", icon: "M8 7h8m-8 4h8m-8 4h8M4 7v10a1 1 0 001 1h14a1 1 0 001-1V7a1 1 0 00-1-1H5a1 1 0 00-1-1H4a1 1 0 00-1 1z" },
  { title: "Pelayanan Ramah", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
];

const STATS = [
  { value: 1200, suffix: "+", label: "Pelanggan" },
  { value: 3, suffix: "", label: "Tahun Pengalaman" },
  { value: 24, suffix: "/7", label: "Layanan" },
];

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useGSAP(
    () => {
      if (!ref.current) return;
      gsap.fromTo(
        ref.current,
        { textContent: 0 },
        {
          textContent: value,
          duration: 1.6,
          snap: { textContent: 1 },
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    [value]
  );
  return (
    <div className="text-center">
      <span ref={ref} className="font-heading text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
        0
      </span>
      <span className="font-heading text-3xl font-semibold tracking-tight text-primary sm:text-4xl">{suffix}</span>
      <p className="mt-1.5 text-sm text-primary/70">{label}</p>
    </div>
  );
}

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".benefit-card", {
        opacity: 0,
        y: 36,
        stagger: 0.07,
        duration: 0.55,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="keunggulan"
      ref={sectionRef}
      className="bg-primary/4 py-24 lg:py-32"
      aria-labelledby="why-heading"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/60">
              Keunggulan Mallondri
            </p>
            <h2
              id="why-heading"
              className="mt-2 font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl"
            >
              Mengapa Pelanggan Memilih Kami
            </h2>
            <p className="mt-3 max-w-2xl text-primary/75">
              Kombinasi kualitas hasil, kecepatan proses, dan layanan yang konsisten membuat Mallondri dipercaya ratusan pelanggan.
            </p>
          </div>
          <p className="max-w-sm text-sm text-primary/60 md:text-right">
            Fokus kami adalah memberikan pengalaman laundry yang rapi, mudah, dan bebas ribet.
          </p>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="benefit-card flex items-start gap-5 rounded-2xl border border-primary/10 bg-white p-6 shadow-card shadow-card-hover transition-shadow"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={b.icon} />
                </svg>
              </div>
              <h3 className="font-heading text-lg font-semibold tracking-tight text-primary">{b.title}</h3>
            </div>
          ))}
        </div>

        <div className="mt-24 flex flex-wrap justify-center gap-16 border-t border-primary/10 pt-20">
          {STATS.map((s) => (
            <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
