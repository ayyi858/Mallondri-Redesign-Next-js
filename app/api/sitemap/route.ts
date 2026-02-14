import { NextResponse } from "next/server";

const baseUrl = "https://mallondri.my.id";

const URLS = [
  { loc: baseUrl, changefreq: "weekly", priority: "1" },
  { loc: `${baseUrl}/tentang-kami`, changefreq: "monthly", priority: "0.9" },
  { loc: `${baseUrl}/paket`, changefreq: "monthly", priority: "0.9" },
  { loc: `${baseUrl}/layanan`, changefreq: "monthly", priority: "0.9" },
  { loc: `${baseUrl}/privacy`, changefreq: "monthly", priority: "0.5" },
  { loc: `${baseUrl}/terms`, changefreq: "monthly", priority: "0.5" },
];

export function GET() {
  const lastmod = new Date().toISOString().split("T")[0];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${URLS.map(
  (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
).join("\n")}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
