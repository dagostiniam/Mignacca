import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/company";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/privacidade", "/termos"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
