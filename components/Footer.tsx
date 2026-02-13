import Link from "next/link";
import Image from "next/image";

const FOOTER_LINKS = {
  tentang: [
    { label: "Tentang Kami", href: "/tentang-kami" },
    { label: "Paket BOS", href: "/paket" },
    { label: "Paket JURAGAN", href: "/paket" },
    { label: "Paket SULTAN", href: "/paket" },
  ],
  layanan: [
    { label: "Layanan", href: "/layanan" },
    { label: "Kalkulator", href: "/#kalkulator" },
  ],
  kontak: [
    { label: "WhatsApp", href: "https://wa.me/6281242026524" },
    { label: "Email", href: "mailto:info@mallondri.my.id" },
  ],
};

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="border-t-2 border-primary/10 bg-white py-12 sm:py-16"
      aria-label="Footer"
      data-aos="fade-up"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="#beranda" className="inline-block" aria-label="Mallondri - Beranda">
              <Image
                src="/img/Mallondri LOGO.png"
                alt="Mallondri"
                width={160}
                height={40}
                className="h-5 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-primary/70">
              Laundry profesional. Tinambung, Sulawesi Barat.
            </p>
          </div>
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-primary">
              Navigasi
            </h3>
            <ul className="mt-4 space-y-2" role="list">
              {FOOTER_LINKS.tentang.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-primary/80 transition-colors hover:text-primary">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-primary">
              Layanan
            </h3>
            <ul className="mt-4 space-y-2" role="list">
              {FOOTER_LINKS.layanan.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-primary/80 transition-colors hover:text-primary"
                    {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-primary">
              Kontak
            </h3>
            <ul className="mt-4 space-y-2" role="list">
              {FOOTER_LINKS.kontak.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-primary/80 transition-colors hover:text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t-2 border-primary/10 pt-8 sm:mt-16 md:flex-row md:gap-4">
          <p className="text-sm text-primary/70">
            Mallondri · Tinambung, Sulawesi Barat
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link href="/tentang-kami" className="text-sm text-primary/70 transition-colors hover:text-primary">
              Tentang Kami
            </Link>
            <Link href="/paket" className="text-sm text-primary/70 transition-colors hover:text-primary">
              Paket
            </Link>
            <Link href="/layanan" className="text-sm text-primary/70 transition-colors hover:text-primary">
              Layanan
            </Link>
            <Link href="/privacy" className="text-sm text-primary/70 transition-colors hover:text-primary">
              Privasi
            </Link>
            <Link href="/terms" className="text-sm text-primary/70 transition-colors hover:text-primary">
              Syarat & Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
