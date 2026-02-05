"use client";

import { useState } from "react";
import Image from "next/image";
import { IMAGES, FALLBACK_IMAGES } from "@/lib/images";

type Attempt = "webp" | "jpg" | "fallback";

const SRC_MAP: Record<Attempt, string> = {
  webp: IMAGES.heroWebp,
  jpg: IMAGES.hero,
  fallback: FALLBACK_IMAGES.hero,
};

type Props = {
  alt: string;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export default function HeroImage({ alt, fill = true, className = "", priority = true, sizes }: Props) {
  const [attempt, setAttempt] = useState<Attempt>("webp");

  const handleError = () => {
    if (attempt === "webp") setAttempt("jpg");
    else if (attempt === "jpg") setAttempt("fallback");
  };

  return (
    <Image
      src={SRC_MAP[attempt]}
      alt={alt}
      fill={fill}
      className={className}
      priority={priority}
      sizes={sizes ?? "(max-width: 1024px) 100vw, 45vw"}
      onError={handleError}
      style={{ objectFit: "cover" }}
    />
  );
}
