"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { CALC_SERVICES, ADDONS, type ServiceOption } from "@/lib/calculator-data";
import { WHATSAPP_LINK } from "@/lib/constants";

function formatRupiah(n: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "decimal",
    minimumFractionDigits: 0,
  }).format(n);
}

export default function Calculator() {
  const [serviceId, setServiceId] = useState(CALC_SERVICES[0].id);
  const [quantity, setQuantity] = useState(5);
  const [addons, setAddons] = useState<Record<string, boolean>>({ parfum: false, packaging: false });
  const totalRef = useRef<HTMLSpanElement>(null);

  const service = CALC_SERVICES.find((s) => s.id === serviceId) as ServiceOption;
  const baseTotal = service ? service.pricePerUnit * quantity : 0;
  const parfumCost = addons.parfum ? ADDONS[0].price * quantity : 0;
  const packagingCost = addons.packaging ? ADDONS[1].price : 0;
  const total = baseTotal + parfumCost + packagingCost;

  const prevTotalRef = useRef(total);
  useEffect(() => {
    if (!totalRef.current) return;
    const prev = prevTotalRef.current;
    prevTotalRef.current = total;
    const obj = { val: prev };
    gsap.to(obj, {
      val: total,
      duration: 0.5,
      snap: { val: 1 },
      ease: "power2.out",
      onUpdate: () => {
        if (totalRef.current) totalRef.current.textContent = formatRupiah(Math.round(obj.val));
      },
    });
  }, [total]);

  const toggleAddon = (id: string) => {
    setAddons((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const message = encodeURIComponent(
    `Halo, saya ingin pesan:\n- Layanan: ${service?.name}\n- Jumlah: ${quantity} ${service?.unitLabel}\n${addons.parfum ? "- Parfum: Ya\n" : ""}${addons.packaging ? "- Packaging: Ya\n" : ""}Perkiraan total: Rp ${formatRupiah(total)}`
  );

  return (
    <section
      id="kalkulator"
      className="bg-white py-24 lg:py-32"
      aria-labelledby="calculator-heading"
      data-aos="fade-up"
    >
      <div className="mx-auto max-w-2xl px-4 lg:px-8">
        <div>
          <p className="section-label">
            Perkiraan Biaya
          </p>
          <h2
            id="calculator-heading"
            className="mt-2 font-heading text-3xl font-bold text-primary sm:text-4xl"
          >
            Kalkulator Harga Laundry
          </h2>
          <p className="mt-3 text-primary/80">
            Simulasikan biaya berdasarkan jenis layanan, jumlah, dan tambahan yang Anda pilih.
          </p>
        </div>

        <div
          className="mt-10 rounded-2xl border-2 border-primary/10 bg-white p-6 shadow-(--shadow-soft) sm:p-8"
          data-aos="zoom-in"
          data-aos-delay="150"
        >
          <label htmlFor="calc-service" className="block text-sm font-medium text-primary">
            Layanan
          </label>
          <select
            id="calc-service"
            value={serviceId}
            onChange={(e) => setServiceId(e.target.value)}
            className="mt-2 w-full min-h-[48px] rounded-lg border border-primary/20 bg-white px-4 py-3 text-base text-primary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            aria-label="Pilih layanan"
          >
            {CALC_SERVICES.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name} — Rp {formatRupiah(s.pricePerUnit)}/{s.unitLabel}
              </option>
            ))}
          </select>

          <label htmlFor="calc-qty" className="mt-6 block text-sm font-medium text-primary">
            Jumlah ({service?.unitLabel})
          </label>
          <input
            id="calc-qty"
            type="number"
            min={1}
            max={999}
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value, 10) || 1))}
            className="mt-2 w-full min-h-[48px] rounded-lg border border-primary/20 bg-white px-4 py-3 text-base text-primary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            aria-label="Jumlah"
          />

          <fieldset className="mt-6">
            <legend className="text-sm font-medium text-primary">Tambahan</legend>
            <div className="mt-2 flex flex-wrap gap-4">
              {ADDONS.map((a) => (
                <label key={a.id} className="flex cursor-pointer items-center gap-2">
                  <input
                    type="checkbox"
                    checked={addons[a.id] ?? false}
                    onChange={() => toggleAddon(a.id)}
                    className="h-4 w-4 rounded border-primary/30 text-primary focus:ring-primary"
                  />
                  <span className="text-sm text-primary">
                    {a.name} (Rp {formatRupiah(a.price)}/{a.per})
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="mt-8 border-t border-primary/10 pt-6">
            <p className="text-sm text-primary/80">Base: Rp {formatRupiah(baseTotal)}</p>
            {addons.parfum && (
              <p className="text-sm text-primary/80">Parfum: Rp {formatRupiah(parfumCost)}</p>
            )}
            {addons.packaging && (
              <p className="text-sm text-primary/80">Packaging: Rp {formatRupiah(packagingCost)}</p>
            )}
            <p className="mt-3 font-heading text-2xl font-semibold text-primary">
              Total: Rp <span ref={totalRef} aria-live="polite">{formatRupiah(total)}</span>
            </p>
            <a
              href={`${WHATSAPP_LINK}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-6 inline-flex min-h-[48px] w-full items-center justify-center rounded-xl bg-accent px-5 py-3.5 text-base font-semibold text-white shadow-(--shadow-cta) transition-all duration-200 active:scale-[0.98] sm:w-auto sm:text-sm sm:hover:scale-[1.02] sm:hover:shadow-[0_6px_20px_-2px_rgb(243_112_33/0.4)]"
            >
              Pesan via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
