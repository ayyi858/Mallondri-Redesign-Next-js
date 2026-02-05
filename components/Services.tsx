"use client";

import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(ScrollTrigger, Flip);

const TABS = [
  { id: "utama", label: "Layanan Utama", icon: "wash" },
  { id: "khusus", label: "Layanan Khusus", icon: "sparkles" },
  { id: "premium", label: "Layanan Premium", icon: "truck" },
] as const;

function ServiceIcon({ name, className = "h-5 w-5" }: { name: string; className?: string }) {
  const p = { fill: "none" as const, stroke: "currentColor", viewBox: "0 0 24 24", "aria-hidden": true };
  const props = { ...p, className };
  // Cuci reguler – cuci (empat kotak = banyak item)
  if (name === "wash") {
    return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>;
  }
  // Express – petir (cepat)
  if (name === "bolt") {
    return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
  }
  // Setrika – setrika (alas datar + gagang)
  if (name === "iron") {
    return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM12 9v6" /></svg>;
  }
  // Dry cleaning – bintang / khusus
  if (name === "sparkles") {
    return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>;
  }
  // Helm
  if (name === "helm") {
    return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2c5.52 0 10 4.48 10 10v2H2v-2C2 6.48 6.48 2 12 2z" /></svg>;
  }
  // Selimut – selimut (persegi panjang)
  if (name === "blanket") {
    return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1z" /></svg>;
  }
  // Karpet – karpet (persegi panjang)
  if (name === "carpet") {
    return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" /></svg>;
  }
  // Sepatu – sepatu (sol + badan)
  if (name === "shoe") {
    return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>;
  }
  // Boneka – teddy (kepala + badan + telinga)
  if (name === "teddy") {
    return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5m-2.5 0a2.5 2.5 0 115 0a2.5 2.5 0 11-5 0M12 14m-3.5 0a3.5 3.5 0 117 0a3.5 3.5 0 11-7 0M8 4m-0.8 0a0.8 0.8 0 111.6 0a0.8 0.8 0 11-1.6 0M16 4m-0.8 0a0.8 0.8 0 111.6 0a0.8 0.8 0 11-1.6 0" /></svg>;
  }
  // Gorden – tirai (garis vertikal)
  if (name === "curtain") {
    return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v16M8 4v16M12 4v16M16 4v16M20 4v16" /></svg>;
  }
  // Antar jemput – truk
  if (name === "truck") {
    return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1h9m1-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" /></svg>;
  }
  // Kilat 3 jam – jam
  if (name === "clock") {
    return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
  }
  // Parfum – botol wewangian
  if (name === "sparkle") {
    return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 2v2m6-2v2M9 20v2m6-2v2M4 6h16v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM4 6V4a2 2 0 012-2h12a2 2 0 012 2v2" /></svg>;
  }
  // Packaging – kotak
  if (name === "box") {
    return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>;
  }
  return null;
}

const SERVICES_DATA: Record<
  (typeof TABS)[number]["id"],
  { name: string; description: string; price: string; icon: string }[]
> = {
  utama: [
    { name: "Regular", description: "Cuci reguler per kg", price: "Rp 5.000/kg", icon: "wash" },
    { name: "Express", description: "Cuci prioritas cepat", price: "Rp 8.000/kg", icon: "bolt" },
    { name: "Setrika", description: "Setrika saja per kg", price: "Rp 7.000/kg", icon: "iron" },
  ],
  khusus: [
    { name: "Dry Cleaning", description: "Cuci kering per piece", price: "Rp 15.000/pcs", icon: "sparkles" },
    { name: "Helm", description: "Cuci helm", price: "Rp 15.000/pcs", icon: "helm" },
    { name: "Selimut", description: "Cuci selimut", price: "Rp 25.000/pcs", icon: "blanket" },
    { name: "Karpet", description: "Cuci karpet", price: "Rp 50.000/m²", icon: "carpet" },
    { name: "Sepatu", description: "Cuci sepatu", price: "Rp 20.000/pasang", icon: "shoe" },
    { name: "Boneka", description: "Cuci boneka", price: "Rp 12.000/pcs", icon: "teddy" },
    { name: "Gorden", description: "Cuci gorden per kg", price: "Rp 8.000/kg", icon: "curtain" },
  ],
  premium: [
    { name: "Antar Jemput Gratis", description: "Pickup & delivery area Tinambung", price: "Gratis", icon: "truck" },
    { name: "Kilat 3 Jam", description: "Selesai dalam 3 jam", price: "+50%", icon: "clock" },
    { name: "Parfum", description: "Wewangian pilihan", price: "Rp 3.000/kg", icon: "sparkle" },
    { name: "Packaging", description: "Kemasan rapi per order", price: "Rp 5.000/order", icon: "box" },
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
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/60">
              Layanan Kami
            </p>
            <h2 id="services-heading" className="mt-2 font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Layanan Laundry Mallondri
            </h2>
            <p className="mt-3 max-w-2xl text-primary/75">
              Pilihan layanan utama, khusus, dan premium yang dirancang untuk kebutuhan harian hingga profesional.
            </p>
          </div>
          <p className="max-w-sm text-sm text-primary/60 md:text-right">
            Semua layanan dikerjakan oleh tim terlatih dengan standar kualitas yang konsisten.
          </p>
        </div>

        <div role="tablist" className="mt-12 flex flex-wrap gap-1 border-b border-primary/10">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "border-primary text-primary"
                  : "border-transparent text-primary/70 hover:text-primary"
              }`}
            >
              <ServiceIcon name={tab.icon} className="h-4 w-4 shrink-0" />
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
              className="service-card flex flex-col rounded-2xl border border-primary/10 bg-white p-6 shadow-card shadow-card-hover transition-shadow"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <ServiceIcon name={s.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold tracking-tight text-primary">
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
