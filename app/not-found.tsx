import Link from "next/link";
import { WHATSAPP_LINK } from "@/lib/constants";

export default function NotFound() {
  return (
    <main
      className="flex min-h-[calc(100dvh-200px)] flex-col items-center justify-center px-4 py-20"
      role="main"
    >
      <div className="mx-auto max-w-md text-center">
        <p className="font-heading text-8xl font-bold text-primary/20 sm:text-9xl">
          404
        </p>
        <h1 className="mt-4 font-heading text-2xl font-bold text-primary sm:text-3xl">
          Halaman Tidak Ditemukan
        </h1>
        <p className="mt-3 text-base text-primary/70">
          Sepertinya halaman yang Anda cari sudah hilang atau dipindahkan.
          Mari kembali ke beranda atau hubungi kami.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <Link
            href="/"
            className="focus-ring inline-flex min-h-[48px] items-center justify-center rounded-xl bg-accent px-6 py-3.5 text-base font-semibold text-white shadow-(--shadow-cta) transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_-2px_rgb(243_112_33/0.4)] active:scale-[0.98]"
          >
            Kembali ke Beranda
          </Link>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex min-h-[48px] items-center justify-center rounded-xl border-2 border-primary/20 bg-white px-6 py-3.5 text-base font-semibold text-primary transition-all duration-200 hover:border-primary/40 hover:bg-primary/5 active:scale-[0.98]"
          >
            Hubungi WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
