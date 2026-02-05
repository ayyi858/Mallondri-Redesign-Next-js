"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WHATSAPP_LINK } from "@/lib/constants";
import MagneticCTA from "./MagneticCTA";

gsap.registerPlugin(ScrollTrigger);

const PLANS = [
  {
    id: "bos",
    name: "Paket BOS",
    price: "170.000",
    original: "150.000",
    bonus: "+20K bonus",
    period: "30 hari",
    popular: false,
    features: [
      "Cuci & setrika reguler",
      "Antar jemput area Tinambung",
      "Kualitas standar hotel",
      "Support 24/7",
    ],
  },
  {
    id: "juragan",
    name: "Paket JURAGAN",
    price: "230.000",
    original: "200.000",
    bonus: "+30K bonus",
    period: "45 hari",
    popular: true,
    features: [
      "Semua fitur BOS",
      "Prioritas express",
      "Diskon layanan khusus",
      "Free parfum",
    ],
  },
  {
    id: "sultan",
    name: "Paket SULTAN",
    price: "350.000",
    original: "300.000",
    bonus: "+50K bonus",
    period: "60 hari",
    popular: false,
    features: [
      "Semua fitur JURAGAN",
      "Kilat 3 jam available",
      "Dry cleaning included",
      "Priority pickup",
    ],
  },
];

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".pricing-card", {
        opacity: 0,
        y: 56,
        stagger: 0.12,
        duration: 0.7,
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
      id="paket"
      ref={sectionRef}
      className="scroll-mt-20 bg-slate-50 py-24 lg:py-32"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/60">
              Paket Berlangganan
            </p>
            <h2
              id="pricing-heading"
              className="mt-2 font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl"
            >
              Paket Laundry Mallondri
            </h2>
            <p className="mt-3 max-w-2xl text-primary/75">
              Struktur paket yang jelas untuk kebutuhan pribadi, keluarga, hingga pelanggan dengan volume tinggi.
            </p>
          </div>
          <p className="max-w-sm text-sm text-primary/60 md:text-right">
            Semua paket sudah termasuk antar jemput area Tinambung dan kualitas setara standar hotel.
          </p>
        </div>

        <div ref={cardsRef} className="mt-16 grid gap-8 md:grid-cols-3">
          {PLANS.map((plan) => (
            <article
              key={plan.id}
              className={`pricing-card relative flex flex-col rounded-2xl border bg-white p-8 shadow-card shadow-card-hover transition-all duration-300 hover:border-primary/20 ${
                plan.popular ? "border-primary/30 ring-2 ring-primary/15" : "border-primary/10"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-white shadow-lg shadow-accent/30">
                  Paling Populer
                </span>
              )}
              <h3 className="font-heading text-xl font-semibold tracking-tight text-primary">
                {plan.name}
              </h3>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="font-heading text-3xl font-semibold tracking-tight text-primary">
                  Rp {plan.price}
                </span>
                <span className="text-sm text-primary/55">/{plan.period}</span>
              </div>
              <p className="mt-1.5 text-sm text-primary/65">{plan.original} {plan.bonus}</p>
              <ul className="mt-6 flex-1 space-y-3.5" role="list">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-primary/88">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <MagneticCTA className="mt-8">
                <a
                  href={`${WHATSAPP_LINK}?text=Halo, saya tertarik ${plan.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full justify-center rounded-xl bg-accent px-4 py-3.5 text-sm font-medium text-white shadow-card transition-colors hover:bg-[#e6651d]"
                >
                  Pesan via WhatsApp
                </a>
              </MagneticCTA>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
