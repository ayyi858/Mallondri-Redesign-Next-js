"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".nav-item-animate", {
      opacity: 0,
      y: -8,
      stagger: 0.04,
      duration: 0.5,
      delay: 0.15,
      ease: "power2.out",
    });
  }, []);

  return (
    <header
      ref={headerRef}
      role="banner"
      aria-label="Navigasi utama"
      className="fixed top-0 left-0 right-0 z-50 border-b border-primary/10 bg-white/95 backdrop-blur-md text-primary shadow-[0_4px_16px_rgba(26,90,135,0.06)] pt-[env(safe-area-inset-top)]"
      data-aos="fade-up"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="#beranda"
          className="nav-item nav-item-animate flex min-h-[44px] items-center"
          aria-label="Mallondri - Beranda"
        >
          <Image
            src="/img/Mallondri LOGO.png"
            alt="Logo Mallondri"
            width={160}
            height={40}
            priority
            className="h-5 w-auto md:h-5"
          />
        </Link>

        <div className="ml-auto flex items-center gap-3 sm:gap-5">
          {/* Desktop links */}
          <ul className="hidden items-center gap-6 md:flex" role="menubar">
            {NAV_LINKS.map((link) => (
              <li key={link.href} role="none">
                <Link
                  href={link.href}
                  className="nav-item focus-ring relative inline-block rounded-full px-3 py-1 text-[0.98rem] font-semibold text-primary transition-all duration-200 hover:bg-primary/5 hover:text-primary after:absolute after:bottom-0.5 after:left-3 after:h-0.5 after:w-0 after:bg-primary after:opacity-0 after:transition-all after:duration-200 hover:after:w-5 hover:after:opacity-100"
                  role="menuitem"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger - min 44px touch target */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="nav-item nav-item-animate inline-flex min-h-[44px] min-w-[44px] flex-col items-center justify-center gap-1.5 rounded-xl bg-primary/5 p-3 text-primary md:hidden"
            aria-expanded={mobileOpen}
            aria-label="Menu navigasi"
          >
            <span className={`h-0.5 w-6 rounded bg-current transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 rounded bg-current transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 rounded bg-current transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu - scrollable, touch-friendly */}
      <div
        className={`md:hidden border-t border-primary/10 bg-white transition-all duration-300 ease-out ${
          mobileOpen ? "max-h-[min(85vh,28rem)] opacity-100 overflow-y-auto" : "max-h-0 opacity-0 pointer-events-none overflow-hidden"
        }`}
      >
        <ul className="flex flex-col px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="border-b border-primary/5 last:border-0">
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-[48px] items-center rounded-lg px-4 py-3 text-base font-semibold text-primary active:bg-primary/5 -mx-1"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
