"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const REVIEWS = [
  {
    name: "Sari Dewi",
    role: "Ibu Rumah Tangga",
    package: "Paket JURAGAN",
    text: "Paket JURAGAN sangat worth it. Cucian selalu rapi dan wangi. Antar jemput gratis bikin saya tidak perlu keluar rumah.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&fit=crop&crop=face",
  },
  {
    name: "Ahmad Rizki",
    role: "Karyawan",
    package: "Layanan Express",
    text: "Sering pakai layanan express karena jam kerja padat. Hasil cucian bersih dan tepat waktu. Recommended.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&fit=crop&crop=face",
  },
  {
    name: "Rina Sari",
    role: "Wiraswasta",
    package: "Paket SULTAN",
    text: "Paket SULTAN cocok untuk kebutuhan laundry kantor dan pribadi. Kualitas konsisten, pelayanan ramah.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=128&h=128&fit=crop&crop=face",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  useGSAP(
    () => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 48,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: sectionRef }
  );

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % REVIEWS.length);
    }, 5500);
    return () => clearInterval(t);
  }, []);

  useGSAP(
    () => {
      if (!trackRef.current) return;
      // Track width = 300%, each slide = 100% container → translate by (index * 100/3)% of track
      const percent = (index * 100) / REVIEWS.length;
      gsap.to(trackRef.current, {
        x: `-${percent}%`,
        duration: 0.6,
        ease: "power3.inOut",
      });
    },
    [index]
  );

  return (
    <section
      id="testimoni"
      ref={sectionRef}
      className="overflow-hidden bg-white py-24 lg:py-32"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 id="testimonials-heading" className="font-heading text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
          Testimoni Pelanggan
        </h2>
        <p className="mt-3 max-w-2xl text-primary/75">
          Apa kata mereka tentang Mallondri.
        </p>

        <div className="relative mt-20 overflow-hidden">
          <div
            ref={trackRef}
            className="flex"
            style={{ width: `${REVIEWS.length * 100}%` }}
          >
            {REVIEWS.map((r) => (
              <div
                key={r.name}
                className="flex shrink-0 flex-col items-center px-4 md:px-16"
                style={{ width: `${100 / REVIEWS.length}%` }}
              >
                <div className="max-w-2xl rounded-2xl border border-primary/10 bg-white p-10 shadow-card shadow-card-hover transition-shadow md:p-12">
                  <div className="flex items-center gap-5">
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-primary/10">
                      <Image
                        src={r.image}
                        alt=""
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-heading text-lg font-semibold tracking-tight text-primary">{r.name}</p>
                      <p className="text-sm text-primary/65">{r.role} · {r.package}</p>
                    </div>
                  </div>
                  <div className="mt-5 flex gap-0.5 text-accent" aria-label={`${r.rating} bintang`}>
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mt-6 text-primary/90 leading-relaxed">&ldquo;{r.text}&rdquo;</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center gap-2.5" role="tablist" aria-label="Pilih testimoni">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-selected={index === i}
                aria-label={`Testimoni ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === i ? "w-8 bg-primary" : "w-2 bg-primary/25 hover:bg-primary/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
