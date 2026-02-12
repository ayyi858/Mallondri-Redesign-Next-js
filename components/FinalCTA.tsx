"use client";

import Link from "next/link";
import MagneticCTA from "./MagneticCTA";

export default function FinalCTA() {
  return (
    <section
      className="bg-primary/4 py-24 lg:py-32"
      aria-labelledby="final-cta-heading"
      data-aos="fade-up"
    >
      <div className="mx-auto max-w-3xl px-4 text-center lg:px-8" data-aos="zoom-in" data-aos-delay="150">
        <h2 id="final-cta-heading" className="font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          Siap Mencoba Layanan Kami?
        </h2>
        <p className="mt-5 text-primary/75">
          Bergabunglah dengan 1200+ pelanggan yang sudah mempercayakan cucian mereka pada Mallondri.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-5">
          <MagneticCTA>
            <Link
              href="#paket"
              className="focus-ring inline-flex items-center justify-center rounded-xl bg-accent px-7 py-4 text-sm font-semibold text-white shadow-(--shadow-cta) transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_-2px_rgb(243_112_33/0.4)]"
            >
              Lihat Paket
            </Link>
          </MagneticCTA>
          <MagneticCTA>
            <a
              href="https://wa.me/6281242026524"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center justify-center rounded-xl border-2 border-primary/25 bg-white px-7 py-4 text-sm font-semibold text-primary transition-all duration-200 hover:border-primary/50 hover:bg-primary/5"
            >
              Hubungi WhatsApp
            </a>
          </MagneticCTA>
        </div>
      </div>
    </section>
  );
}
