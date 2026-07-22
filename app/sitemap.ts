import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ggregon.github.io";
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/writing", "/resume"].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date("2026-07-21"),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  const postRoutes = getAllPosts().map((post) => ({
    url: `${siteUrl}/writing/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...postRoutes];
}
