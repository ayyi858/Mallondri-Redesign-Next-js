import Link from "next/link";
import type { Metadata } from "next";
import { WHATSAPP_LINK } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Tentang Kami",
  alternates: { canonical: "/tentang-kami" },
  description:
    "Mallondri laundry Tinambung – mengenal lebih dekat laundry profesional di Tinambung, Sulawesi Barat. 1200+ pelanggan, express 3 jam, garansi kualitas.",
};

export default function TentangKamiPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-28 pb-24">
      <h1 className="font-heading text-3xl font-bold text-primary">
        Tentang Mallondri Laundry
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-primary/80">
        Mallondri adalah laundry profesional di Tinambung, Sulawesi Barat yang
        berfokus pada layanan cuci berkualitas dengan standar hotel. Kami hadir
        untuk memudahkan masyarakat Tinambung dalam merawat pakaian dan barang
        kesayangan mereka.
      </p>
      <div className="mt-8 space-y-4 text-primary/80">
        <h2 className="font-heading text-xl font-semibold text-primary">
          Kenapa Memilih Mallondri?
        </h2>
        <ul className="list-inside list-disc space-y-2">
          <li>Lebih dari 1200 pelanggan percaya kepada kami</li>
          <li>Layanan express 3 jam untuk kebutuhan mendesak</li>
          <li>Antar jemput gratis di area Tinambung</li>
          <li>Garansi kualitas pada setiap order</li>
          <li>Standar cuci profesional seperti hotel</li>
        </ul>
      </div>
      <p className="mt-6 text-primary/80">
        Mallondri memahami betapa berharganya waktu Anda dan pentingnya penampilan
        yang selalu rapi. Kami hadir sebagai solusi laundry praktis, andal, dan
        berkualitas tinggi di Tinambung.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/"
          className="focus-ring inline-flex min-h-[48px] items-center justify-center rounded-xl bg-accent px-6 py-3.5 text-base font-semibold text-white shadow-(--shadow-cta) transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
        >
          Lihat Paket Layanan
        </Link>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring inline-flex min-h-[48px] items-center justify-center rounded-xl border-2 border-primary/20 bg-white px-6 py-3.5 text-base font-semibold text-primary transition-colors hover:border-primary/40 hover:bg-primary/5 active:scale-[0.98]"
        >
          Hubungi WhatsApp
        </a>
        <Link
          href="/#beranda"
          className="text-primary/70 underline hover:text-primary"
        >
          ← Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
