import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/company";
import { services } from "@/data/services";
import { articles } from "@/data/articles";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/sobre`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/servicos`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/troque-de-contador`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/conteudos`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${siteUrl}/faq`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/contato`, changeFrequency: "yearly", priority: 0.6 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteUrl}/servicos/${service.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${siteUrl}/conteudos/${article.slug}`,
    lastModified: article.date,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...serviceRoutes, ...articleRoutes];
}
