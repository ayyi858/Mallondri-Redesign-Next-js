"use client";

// Alamat yang ditampilkan ke pengunjung
const ADDRESS = "Jln Poros, Tino Limboro, Desa Lekopa'dis, Tinambung, Sulawesi Barat";

// Koordinat tepat lokasi Mallondri (supaya pin peta akurat)
const LAT = -3.5007419276499063;
const LNG = 119.01689008829196;
const LAT_LNG = `${LAT},${LNG}`;

const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${LAT_LNG}`;
const MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(LAT_LNG)}&z=16&output=embed`;

export default function LokasiKami() {
  return (
    <section
      id="lokasi"
      className="bg-slate-50 py-24 lg:py-32"
      aria-labelledby="lokasi-heading"
      data-aos="fade-up"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-label">
              Temukan Kami
            </p>
            <h2 id="lokasi-heading" className="mt-2 font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Lokasi Kami
            </h2>
            <p className="mt-3 max-w-xl text-primary/75">
              {ADDRESS}
            </p>
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-4 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-(--shadow-soft) transition-all duration-200 hover:bg-primary/90 hover:shadow-(--shadow-card)"
            >
              <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
              Buka di Google Maps
            </a>
          </div>
        </div>

        <div
          className="mt-10 overflow-hidden rounded-2xl border-2 border-primary/10 bg-white shadow-(--shadow-soft)"
          data-aos="zoom-in"
          data-aos-delay="150"
        >
          <iframe
            src={MAP_EMBED_URL}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Peta lokasi Mallondri Laundry"
            className="block w-full min-h-[320px] lg:min-h-[400px]"
          />
        </div>
      </div>
    </section>
  );
}
