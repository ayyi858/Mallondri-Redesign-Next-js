"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WHATSAPP_LINK } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

const INFO = [
  { label: "Lokasi", value: "Tinambung, Sulawesi Barat", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" },
  { label: "WhatsApp", value: "0812-4202-6524", href: WHATSAPP_LINK, icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 2 13.574 2 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" },
  { label: "Jam Operasional", value: "Sen–Sab 07:00–21:00, Minggu 08:00–20:00", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
  { label: "Email", value: "info@mallondri.my.id", href: "mailto:info@mallondri.my.id", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name: "", wa: "", message: "" });

  useGSAP(
    () => {
      gsap.from(".contact-card", {
        opacity: 0,
        y: 32,
        stagger: 0.08,
        duration: 0.55,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: sectionRef }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Halo, saya ${form.name}.\n${form.message}`
    );
    window.open(`${WHATSAPP_LINK}?text=${text}`, "_blank");
  };

  return (
    <section
      id="kontak"
      ref={sectionRef}
      className="bg-white py-24 lg:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/60">
              Hubungi Kami
            </p>
            <h2 id="contact-heading" className="mt-2 font-heading text-3xl font-bold text-primary sm:text-4xl">
              Kontak Mallondri
            </h2>
            <p className="mt-3 max-w-2xl text-primary/80">
              Silakan hubungi kami untuk pertanyaan, kerja sama, atau konsultasi kebutuhan laundry Anda.
            </p>
          </div>
          <p className="max-w-sm text-sm text-primary/60 md:text-right">
            Balasan biasanya dalam waktu singkat selama jam operasional.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            {INFO.map((item) => (
              <div
                key={item.label}
                className="contact-card flex gap-5 rounded-2xl border border-primary/10 bg-white p-6 shadow-card shadow-card-hover"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-primary/70">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="font-medium text-primary hover:underline"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-medium text-primary">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="contact-card rounded-2xl border border-primary/10 bg-white p-8 shadow-card shadow-card-hover">
            <h3 className="font-heading text-xl font-semibold tracking-tight text-primary">Kirim Pesan</h3>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-primary">
                  Nama
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="mt-1 w-full rounded-lg border border-primary/20 bg-white px-4 py-3 text-primary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Nama Anda"
                />
              </div>
              <div>
                <label htmlFor="contact-wa" className="block text-sm font-medium text-primary">
                  WhatsApp
                </label>
                <input
                  id="contact-wa"
                  type="tel"
                  required
                  value={form.wa}
                  onChange={(e) => setForm((f) => ({ ...f, wa: e.target.value }))}
                  className="mt-1 w-full rounded-lg border border-primary/20 bg-white px-4 py-3 text-primary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="08xxxxxxxxxx"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-primary">
                  Pesan
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="mt-1 w-full rounded-lg border border-primary/20 bg-white px-4 py-3 text-primary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Pesan Anda..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-accent px-4 py-3 text-sm font-medium text-white shadow-card transition-transform hover:-translate-y-0.5"
              >
                Kirim via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
