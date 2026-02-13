import Link from "next/link";
import type { Metadata } from "next";
import { WHATSAPP_LINK } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Paket Layanan",
  alternates: { canonical: "/paket" },
  description:
    "Paket berlangganan Mallondri laundry Tinambung: BOS 170K, JURAGAN 230K, SULTAN 350K. Hemat bonus, gratis antar jemput, berlaku semua layanan.",
};

const PLANS = [
  {
    name: "BOS",
    subtitle: "Starter",
    total: "Rp 170.000",
    period: "30 Hari",
    features: ["Gratis TAS (30K)", "Gratis Antar Jemput", "Berlaku Semua Layanan"],
  },
  {
    name: "JURAGAN",
    subtitle: "Rekomendasi",
    total: "Rp 230.000",
    period: "45 Hari",
    popular: true,
    features: ["Gratis TAS (30K)", "Gratis Antar Jemput", "Berlaku Semua Layanan"],
  },
  {
    name: "SULTAN",
    subtitle: "Premium",
    total: "Rp 350.000",
    period: "60 Hari",
    features: ["Gratis TAS (35K)", "Gratis Antar Jemput", "Berlaku Semua Layanan"],
  },
];

export default function PaketPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 pt-28 pb-24">
      <h1 className="font-heading text-3xl font-bold text-primary">
        Paket Berlangganan Mallondri
      </h1>
      <p className="mt-4 text-primary/80">
        Pilih paket yang sesuai kebutuhan Anda. Semua paket dapat digunakan untuk
        seluruh layanan laundry kami.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl border-2 p-6 ${
              plan.popular
                ? "border-accent bg-accent/5 shadow-(--shadow-card)"
                : "border-primary/10 bg-white"
            }`}
          >
            {plan.popular && (
              <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
                Rekomendasi
              </span>
            )}
            <h2 className="mt-3 font-heading text-xl font-bold text-primary">
              {plan.name}
            </h2>
            <p className="text-sm text-primary/70">{plan.subtitle}</p>
            <p className="mt-4 font-heading text-2xl font-bold text-primary">
              {plan.total}
            </p>
            <p className="text-sm text-primary/60">/{plan.period}</p>
            <ul className="mt-4 space-y-2 text-sm text-primary/80">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="text-accent">✓</span> {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring inline-flex min-h-[48px] items-center justify-center rounded-xl bg-accent px-6 py-3.5 text-base font-semibold text-white shadow-(--shadow-cta) transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
        >
          Pesan via WhatsApp
        </a>
        <Link
          href="/#paket"
          className="text-primary/70 underline hover:text-primary"
        >
          ← Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
