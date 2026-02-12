"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Animasi scroll dengan GSAP ScrollTrigger
 * - Masuk viewport → animasi masuk (fade-up / zoom-in)
 * - Sekali muncul → tetap terlihat (tidak hilang/reverse)
 * - toggleActions: "play none none none"
 */
export default function ScrollAnimationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const t = setTimeout(() => {
      const els = document.querySelectorAll("[data-aos]");

      els.forEach((el) => {
        const aosType = el.getAttribute("data-aos");
        const delay = parseInt(el.getAttribute("data-aos-delay") || "0", 10);

        const from =
          aosType === "zoom-in"
            ? { opacity: 0, scale: 0.9, y: 20 }
            : { opacity: 0, y: 40 };

        gsap.fromTo(
          el,
          from,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            delay: delay / 1000,
            overwrite: "auto",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      const onLoad = () => ScrollTrigger.refresh();
      if (document.readyState === "complete") onLoad();
      else window.addEventListener("load", onLoad);
    }, 150);

    return () => {
      clearTimeout(t);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return children;
}
