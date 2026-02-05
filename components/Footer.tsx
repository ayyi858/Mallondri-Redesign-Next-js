import Link from "next/link";

const FOOTER_LINKS = {
  paket: [
    { label: "Paket BOS", href: "#paket" },
    { label: "Paket JURAGAN", href: "#paket" },
    { label: "Paket SULTAN", href: "#paket" },
  ],
  layanan: [
    { label: "Layanan Utama", href: "#layanan" },
    { label: "Layanan Khusus", href: "#layanan" },
    { label: "Kalkulator", href: "#kalkulator" },
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
      className="border-t border-primary/10 bg-white py-16"
      aria-label="Footer"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="#beranda" className="font-heading text-xl font-semibold text-primary">
              Mallondri
            </Link>
            <p className="mt-4 text-sm text-primary/70">
              Laundry profesional standar hotel. Tinambung, Sulawesi Barat.
            </p>
          </div>
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-primary">
              Paket
            </h3>
            <ul className="mt-4 space-y-2" role="list">
              {FOOTER_LINKS.paket.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-primary/80 hover:text-primary">
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
                    className="text-sm text-primary/80 hover:text-primary"
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
                    className="text-sm text-primary/80 hover:text-primary"
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
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-primary/10 pt-8 md:flex-row">
          <p className="text-sm text-primary/70">
            Made with <span aria-hidden>❤️</span> in Tinambung
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-primary/70 hover:text-primary">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-primary/70 hover:text-primary">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
