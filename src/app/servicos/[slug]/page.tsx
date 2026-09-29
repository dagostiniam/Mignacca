import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { CheckIcon } from "@/components/icons";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { getServiceBySlug, services } from "@/data/services";
import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";
import { siteUrl } from "@/data/company";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata(props: PageProps<"/servicos/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return pageMetadata({
    title: service.name,
    description: service.shortDescription,
    path: `/servicos/${service.slug}`,
  });
}

export default async function ServicePage(props: PageProps<"/servicos/[slug]">) {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: service.name,
    description: service.description,
    url: `${siteUrl}/servicos/${service.slug}`,
    provider: { "@type": "AccountingService", name: "Mignacca" },
    areaServed: "Belo Horizonte, MG",
  };

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <PageHeader
        eyebrow="Serviços"
        title={service.name}
        description={service.description}
        breadcrumb={[
          { label: "Início", href: "/" },
          { label: "Serviços", href: "/servicos" },
          { label: service.name },
        ]}
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button
            href={whatsappLink(whatsappMessages.services(service.name))}
            external
            variant="secondary"
            size="lg"
          >
            Falar sobre {service.name.toLowerCase()}
          </Button>
          <Button
            href="/contato"
            size="lg"
            className="border border-white/30 bg-transparent text-text-on-primary hover:bg-white/10"
          >
            Outros canais de contato
          </Button>
        </div>
      </PageHeader>

      <Section tone="default">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Eyebrow>O que está incluído</Eyebrow>
            <ul className="mt-6 space-y-4">
              {service.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-surface text-primary">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-base leading-relaxed text-text">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-surface p-7">
            <Eyebrow>Ideal para</Eyebrow>
            <ul className="mt-5 space-y-3">
              {service.idealFor.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-text-muted">
                  — {item}
                </li>
              ))}
            </ul>
            <div className="mt-7 border-t border-border pt-6">
              <p className="text-sm text-text-muted">
                Quer saber se esse serviço se encaixa na sua empresa?
              </p>
              <Button
                href={whatsappLink(whatsappMessages.services(service.name))}
                external
                className="mt-4 w-full"
              >
                Conversar no WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <Eyebrow>Outros serviços</Eyebrow>
        <div className="mt-6 flex flex-wrap gap-3">
          {services
            .filter((item) => item.slug !== service.slug)
            .map((item) => (
              <Button key={item.slug} href={`/servicos/${item.slug}`} variant="outline" size="sm">
                {item.name}
              </Button>
            ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
