import type { Metadata } from "next";
import { company, siteUrl } from "@/data/company";

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
}

export function pageMetadata({ title, description, path, noIndex }: PageMetadataOptions): Metadata {
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${company.name}`,
      description,
      url,
      siteName: company.name,
      locale: "pt_BR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${company.name}`,
      description,
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
  };
}
