import type { MetadataRoute } from "next";
import { SITEMAP_URL } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: [
      SITEMAP_URL,
      "https://www.mallondri.my.id/sitemap.xml",
    ],
  };
}
