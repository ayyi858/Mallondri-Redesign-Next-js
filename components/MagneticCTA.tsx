"use client";

import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

// Minimal wrapper to menjaga konsistensi spacing tanpa efek animasi berlebih
export default function MagneticCTA({ children, className = "" }: Props) {
  return <div className={className}>{children}</div>;
}
