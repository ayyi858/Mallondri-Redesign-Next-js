"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { NAV_LINKS, WHATSAPP_LINK } from "@/lib/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MagneticCTA from "./MagneticCTA";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    gsap.from(".nav-item", {
      opacity: 0,
      y: -8,
      stagger: 0.04,
      duration: 0.5,
      delay: 0.15,
      ease: "power2.out",
    });
  }, []);

  useGSAP(
    () => {
      if (!headerRef.current) return;
      gsap.to(headerRef.current, {
        backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
        backgroundColor: scrolled ? "rgba(255,255,255,0.88)" : "rgba(255,255,255,0)",
        boxShadow: scrolled ? "0 1px 0 0 rgba(26,90,135,0.06)" : "0 0 0 0 transparent",
        duration: 0.4,
        ease: "power2.out",
      });
    },
    [scrolled]
  );

  return (
    <header
      ref={headerRef}
      role="banner"
      aria-label="Navigasi utama"
      className="fixed top-0 left-0 right-0 z-50"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="#beranda"
          className="nav-item font-heading text-xl font-semibold tracking-tight text-primary"
          aria-label="Mallondri - Beranda"
        >
          Mallondri
        </Link>

        <ul className="hidden items-center gap-8 md:flex" role="menubar">
          {NAV_LINKS.map((link) => (
            <li key={link.href} role="none">
              <Link
                href={link.href}
                className="nav-item text-sm font-medium text-primary/90 transition-colors hover:text-primary"
                role="menuitem"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <MagneticCTA className="hidden sm:inline-block">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-item inline-flex rounded-xl bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-accent/20 transition-shadow hover:shadow-xl hover:shadow-accent/25"
              aria-label="Hubungi via WhatsApp"
            >
              WhatsApp
            </a>
          </MagneticCTA>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="nav-item inline-flex flex-col gap-1.5 rounded p-2 text-primary md:hidden"
            aria-expanded={mobileOpen}
            aria-label="Menu navigasi"
          >
            <span className={`h-0.5 w-6 bg-current transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-current transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-current transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-primary/10 bg-white/95 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-0 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-sm font-medium text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block rounded-lg bg-accent py-3 text-center text-sm font-medium text-white"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
