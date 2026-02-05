/**
 * Letakkan gambar Anda di folder public/images/
 * Nama file yang didukung:
 * - hero.jpg atau hero.webp  → Hero section
 * - gallery/1.jpg, 2.jpg... → Galeri (opsional)
 * Jika tidak ada, akan dipakai gambar placeholder.
 */
const BASE = "/images";

export const IMAGES = {
  hero: `${BASE}/hero.jpg`,
  heroWebp: `${BASE}/hero.webp`,
} as const;

/** URL fallback jika gambar custom belum ada (Unsplash) */
export const FALLBACK_IMAGES = {
  hero: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=1200&q=85",
} as const;
