import Link from "next/link";
import type { Metadata } from "next";
import { WHATSAPP_LINK } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Layanan",
  alternates: { canonical: "/layanan" },
  description:
    "Layanan laundry Mallondri Tinambung: Regular, Express, Setrika, Dry Cleaning, Helm, Selimut, Karpet, Sepatu, Boneka, Gorden. Antar jemput gratis.",
};

const LAYANAN = [
  {
    group: "Layanan Utama",
    items: [
      { name: "Regular", desc: "Cuci reguler per kg", price: "Rp 5.000/kg" },
      { name: "Express", desc: "Cuci prioritas cepat", price: "Rp 8.000/kg" },
      { name: "Setrika", desc: "Setrika saja per kg", price: "Rp 7.000/kg" },
    ],
  },
  {
    group: "Layanan Khusus",
    items: [
      { name: "Dry Cleaning", desc: "Cuci kering per piece", price: "Rp 15.000/pcs" },
      { name: "Helm", desc: "Cuci helm", price: "Rp 15.000/pcs" },
      { name: "Selimut", desc: "Cuci selimut", price: "Rp 25.000/pcs" },
      { name: "Karpet", desc: "Cuci karpet", price: "Rp 50.000/m²" },
      { name: "Sepatu", desc: "Cuci sepatu", price: "Rp 20.000/pasang" },
      { name: "Boneka", desc: "Cuci boneka", price: "Rp 12.000/pcs" },
      { name: "Gorden", desc: "Cuci gorden per kg", price: "Rp 8.000/kg" },
    ],
  },
  {
    group: "Layanan Premium",
    items: [
      { name: "Antar Jemput Gratis", desc: "Pickup & delivery area Tinambung", price: "Gratis" },
      { name: "Kilat 3 Jam", desc: "Selesai dalam 3 jam", price: "+50%" },
      { name: "Parfum", desc: "Wewangian pilihan", price: "Rp 3.000/kg" },
      { name: "Packaging", desc: "Kemasan rapi per order", price: "Rp 5.000/order" },
    ],
  },
];

export default function LayananPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 pt-28 pb-24">
      <h1 className="font-heading text-3xl font-bold text-primary">
        Layanan Laundry Mallondri
      </h1>
      <p className="mt-4 text-primary/80">
        Pilihan layanan utama, khusus, dan premium yang dirancang untuk kebutuhan
        harian hingga profesional. Semua dikerjakan tim terlatih dengan standar
        kualitas konsisten.
      </p>
      <div className="mt-10 space-y-10">
        {LAYANAN.map((section) => (
          <div key={section.group}>
            <h2 className="font-heading text-xl font-semibold text-primary">
              {section.group}
            </h2>
            <ul className="mt-4 space-y-3">
              {section.items.map((item) => (
                <li
                  key={item.name}
                  className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-primary/10 bg-white px-4 py-3"
                >
                  <div>
                    <span className="font-medium text-primary">{item.name}</span>
                    <p className="text-sm text-primary/70">{item.desc}</p>
                  </div>
                  <span className="font-semibold text-primary">{item.price}</span>
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
          href="/#kalkulator"
          className="focus-ring inline-flex min-h-[48px] items-center justify-center rounded-xl border-2 border-primary/20 px-6 py-3.5 text-base font-semibold text-primary transition-colors hover:border-primary/40 hover:bg-primary/5"
        >
          Simulasikan Biaya
        </Link>
        <Link
          href="/#layanan"
          className="text-primary/70 underline hover:text-primary"
        >
          ← Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
