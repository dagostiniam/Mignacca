import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton";
import { JsonLd } from "@/components/seo/JsonLd";
import { company, siteUrl } from "@/data/company";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.name} | Contabilidade em Belo Horizonte`,
    template: `%s | ${company.name}`,
  },
  description: company.shortDescription,
  openGraph: {
    siteName: company.name,
    locale: "pt_BR",
    type: "website",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: company.legalName,
  alternateName: company.name,
  description: company.shortDescription,
  url: siteUrl,
  telephone: company.phones[0].href.replace("tel:", ""),
  email: company.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${company.address.street}, ${company.address.complement}`,
    addressLocality: company.address.city,
    addressRegion: company.address.state,
    postalCode: company.address.zip,
    addressCountry: "BR",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-background text-text">
        <JsonLd data={organizationJsonLd} />
        <a
          href="#conteudo-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-text-on-primary"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo-principal" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
