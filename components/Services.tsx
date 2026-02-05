"use client";

import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(ScrollTrigger, Flip);

const TABS = [
  { id: "utama", label: "Layanan Utama" },
  { id: "khusus", label: "Layanan Khusus" },
  { id: "premium", label: "Layanan Premium" },
] as const;

const SERVICES_DATA: Record<
  (typeof TABS)[number]["id"],
  { name: string; description: string; price: string }[]
> = {
  utama: [
    { name: "Regular", description: "Cuci reguler per kg", price: "Rp 5.000/kg" },
    { name: "Express", description: "Cuci prioritas cepat", price: "Rp 8.000/kg" },
    { name: "Setrika", description: "Setrika saja per kg", price: "Rp 7.000/kg" },
  ],
  khusus: [
    { name: "Dry Cleaning", description: "Cuci kering per piece", price: "Rp 15.000/pcs" },
    { name: "Helm", description: "Cuci helm", price: "Rp 15.000/pcs" },
    { name: "Selimut", description: "Cuci selimut", price: "Rp 25.000/pcs" },
    { name: "Karpet", description: "Cuci karpet", price: "Rp 50.000/m²" },
    { name: "Sepatu", description: "Cuci sepatu", price: "Rp 20.000/pasang" },
    { name: "Boneka", description: "Cuci boneka", price: "Rp 12.000/pcs" },
    { name: "Gorden", description: "Cuci gorden per kg", price: "Rp 8.000/kg" },
  ],
  premium: [
    { name: "Antar Jemput Gratis", description: "Pickup & delivery area Tinambung", price: "Gratis" },
    { name: "Kilat 3 Jam", description: "Selesai dalam 3 jam", price: "+50%" },
    { name: "Parfum", description: "Wewangian pilihan", price: "Rp 3.000/kg" },
    { name: "Packaging", description: "Kemasan rapi per order", price: "Rp 5.000/order" },
  ],
};

export default function Services() {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]["id"]>("utama");
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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
      gsap.from(".service-card", {
        opacity: 0,
        y: 32,
        stagger: 0.06,
        duration: 0.5,
        delay: 0.2,
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

  const handleTabChange = (tabId: (typeof TABS)[number]["id"]) => {
    if (tabId === activeTab) return;
    const state = Flip.getState(".service-card");
    setActiveTab(tabId);
    requestAnimationFrame(() => {
      Flip.from(state, {
        targets: ".service-card",
        duration: 0.4,
        stagger: 0.03,
        ease: "power2.inOut",
      });
    });
  };

  const items = SERVICES_DATA[activeTab];

  return (
    <section
      id="layanan"
      ref={sectionRef}
      className="bg-white py-24 lg:py-32"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 id="services-heading" className="font-heading text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
          Layanan
        </h2>
        <p className="mt-3 max-w-2xl text-primary/75">
          Berbagai layanan cuci untuk kebutuhan Anda.
        </p>

        <div role="tablist" className="mt-12 flex gap-1 border-b border-primary/10">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "border-primary text-primary"
                  : "border-transparent text-primary/70 hover:text-primary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div
          ref={gridRef}
          role="tabpanel"
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((s) => (
            <div
              key={s.name}
              className="service-card rounded-2xl border border-primary/10 bg-white p-6 shadow-card shadow-card-hover transition-shadow"
            >
              <h3 className="font-heading text-lg font-semibold tracking-tight text-primary">
                {s.name}
              </h3>
              <p className="mt-2 text-sm text-primary/75">{s.description}</p>
              <p className="mt-4 font-semibold text-primary">{s.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
