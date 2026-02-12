"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

/**
 * Konfigurasi AOS - animasi landing page
 * - Animasi muncul saat masuk viewport
 * - Sekali muncul tetap terlihat (once: true)
 * - Hanya fade-up dan zoom-in
 * - Stagger card: 150ms per item
 */
export default function AOSProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
      mirror: false,
    });
  }, []);

  return children;
}

