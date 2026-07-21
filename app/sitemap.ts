import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ggregon.github.io";
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/writing", "/resume"].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date("2026-07-21"),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.7,
  }));
}
