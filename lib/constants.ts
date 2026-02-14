export const WHATSAPP_NUMBER = "6281242026524";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export const SITE_URL = "https://mallondri.my.id";
export const SITEMAP_PATH = "/sitemap.xml";
export const SITEMAP_URL = `${SITE_URL}${SITEMAP_PATH}`;

export const NAV_LINKS = [
  { href: "#beranda", label: "Beranda" },
  { href: "#paket", label: "Paket" },
  { href: "#layanan", label: "Layanan" },
  { href: "#kalkulator", label: "Kalkulator" },
  { href: "#keunggulan", label: "Keunggulan" },
  { href: "#testimoni", label: "Testimoni" },
  { href: "#lokasi", label: "Lokasi" },
  { href: "#kontak", label: "Kontak" },
] as const;
