"use client";

import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const STRENGTH = 12;
const RADIUS = 100;

type Props = {
  children: ReactNode;
  className?: string;
};

export default function MagneticCTA({ children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const xTo = useRef<(v: number) => void>(() => {});
  const yTo = useRef<(v: number) => void>(() => {});

  useGSAP(() => {
    if (!ref.current) return;
    xTo.current = gsap.quickTo(ref.current, "x", { duration: 0.35, ease: "power2.out" });
    yTo.current = gsap.quickTo(ref.current, "y", { duration: 0.35, ease: "power2.out" });
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;
    const dist = Math.hypot(dx, dy);
    if (dist < RADIUS) {
      const force = (RADIUS - dist) / RADIUS;
      xTo.current((dx / RADIUS) * STRENGTH * force);
      yTo.current((dy / RADIUS) * STRENGTH * force);
    } else {
      xTo.current(0);
      yTo.current(0);
    }
  };

  const handleMouseLeave = () => {
    xTo.current(0);
    yTo.current(0);
  };

  return (
    <div
      ref={ref}
      className={`inline-block ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}
