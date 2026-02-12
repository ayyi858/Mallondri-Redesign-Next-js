"use client";

import { useRef } from "react";
import { WHATSAPP_LINK } from "@/lib/constants";
import MagneticCTA from "./MagneticCTA";

const PLANS = [
  {
    id: "bos",
    name: "BOS",
    subtitle: "Starter",
    topup: "150.000",
    bonus: "20K",
    total: "170.000",
    lebihHemat: "20K",
    period: "30 Hari",
    popular: false,
    features: [
      "Gratis TAS (30K)",
      "Gratis Antar Jemput",
      "Berlaku Semua Layanan",
    ],
  },
  {
    id: "juragan",
    name: "JURAGAN",
    subtitle: "Rekomendasi",
    topup: "200.000",
    bonus: "30K",
    total: "230.000",
    lebihHemat: "30K",
    period: "45 Hari",
    popular: true,
    features: [
      "Gratis TAS (30K)",
      "Gratis Antar Jemput",
      "Berlaku Semua Layanan",
    ],
  },
  {
    id: "sultan",
    name: "SULTAN",
    subtitle: "Premium",
    topup: "300.000",
    bonus: "50K",
    total: "350.000",
    lebihHemat: "50K",
    period: "60 Hari",
    popular: false,
    features: [
      "Gratis TAS (35K)",
      "Gratis Antar Jemput",
      "Berlaku Semua Layanan",
    ],
  },
];

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="paket"
      ref={sectionRef}
      className="scroll-mt-20 py-16 sm:py-20 lg:py-32"
      style={{
        background: "linear-gradient(180deg, rgb(248 250 252) 0%, rgb(255 255 255) 40%, rgb(248 250 252) 100%)",
      }}
      aria-labelledby="pricing-heading"
      data-aos="fade-up"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-label">Paket Berlangganan</p>
          <h2
            id="pricing-heading"
            className="mt-2 font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl"
          >
            Pilih Paket yang Sesuai
          </h2>
          <p className="mt-4 text-base text-primary/70">
            Investasi topup untuk kebutuhan laundry Anda. Semua paket include gratis tas dan antar jemput area Tinambung.
          </p>
        </div>

        <div
          className="mt-12 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-3 lg:mt-20 lg:gap-8"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {PLANS.map((plan, i) => (
            <article
              key={plan.id}
              className={`group relative flex flex-col overflow-hidden rounded-2xl bg-white transition-all duration-500 ease-out ${
                plan.popular
                  ? "shadow-[0_0_0_1px_rgb(26_90_135/0.08),0_12px_32px_-8px_rgb(26_90_135/0.2)] md:shadow-[0_0_0_1px_rgb(26_90_135/0.08),0_24px_64px_-12px_rgb(26_90_135/0.25),0_0_0_1px_rgb(26_90_135/0.03)] lg:-my-4 lg:scale-[1.03]"
                  : "shadow-[0_0_0_1px_rgb(26_90_135/0.06),0_4px_20px_-4px_rgb(26_90_135/0.1)] active:scale-[0.99] md:hover:shadow-[0_0_0_1px_rgb(26_90_135/0.1),0_16px_48px_-12px_rgb(26_90_135/0.18)]"
              }`}
              data-aos="zoom-in"
              data-aos-delay={i * 150}
            >
              {plan.popular && (
                <div
                  className="absolute inset-x-0 top-0 h-[2px]"
                  style={{
                    background: "linear-gradient(90deg, #F37021 0%, #ff8c42 50%, #F37021 100%)",
                  }}
                  aria-hidden
                />
              )}
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <h3 className={`font-heading text-2xl font-bold tracking-tight ${plan.popular ? "text-primary" : "text-primary/90"}`}>
                  Paket {plan.name}
                </h3>
                <span className={`mt-1 text-xs font-medium uppercase tracking-wider ${plan.popular ? "text-primary/70" : "text-primary/50"}`}>
                  {plan.subtitle}
                </span>

                <div className="mt-8 space-y-4 border-b border-primary/5 pb-8">
                  <div className="flex justify-between text-sm text-primary/70">
                    <span>Topup</span>
                    <span className="tabular-nums font-semibold text-primary">Rp {plan.topup}</span>
                  </div>
                  <div className="flex justify-between text-sm text-primary/70">
                    <span>Bonus</span>
                    <span className="tabular-nums font-semibold text-accent">+{plan.bonus}</span>
                  </div>
                  <div className="flex items-baseline justify-between pt-4">
                    <span className="text-sm font-medium text-primary/70">Total nilai</span>
                    <span className="font-heading text-2xl font-bold tabular-nums tracking-tight text-primary">
                      Rp {plan.total}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-md bg-accent/10 px-2 py-0.5 text-xs font-semibold text-accent">
                      Hemat Rp {plan.lebihHemat}
                    </span>
                    <span className="text-xs text-primary/50">·</span>
                    <span className="text-xs text-primary/60">Berlaku {plan.period}</span>
                  </div>
                </div>

                <ul className="mt-8 flex-1 space-y-4" role="list">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-primary/85">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                        <svg className="h-3 w-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-primary/5 p-6 sm:p-8">
                <MagneticCTA>
                  <a
                    href={`${WHATSAPP_LINK}?text=Halo, saya tertarik Paket ${plan.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`focus-ring flex min-h-[48px] w-full items-center justify-center rounded-xl px-5 py-3.5 text-center text-base font-semibold transition-all duration-200 active:scale-[0.98] sm:text-sm ${
                      plan.popular
                        ? "bg-accent text-white shadow-[0_4px_14px_-2px_rgb(243_112_33/0.4)] hover:bg-accent/90 hover:shadow-[0_6px_20px_-4px_rgb(243_112_33/0.45)]"
                        : "border border-accent/30 bg-white text-accent hover:border-accent/50 hover:bg-accent/5"
                    }`}
                  >
                    Daftar Sekarang
                  </a>
                </MagneticCTA>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
