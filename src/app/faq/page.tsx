import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui/Section";
import { Accordion } from "@/components/ui/Accordion";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { faqItems } from "@/data/faq";

export const metadata: Metadata = pageMetadata({
  title: "Perguntas frequentes",
  description:
    "Tire suas dúvidas sobre contabilidade, abertura de empresa, troca de contador e regime tributário.",
  path: "/faq",
});

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <JsonLd data={faqJsonLd} />
      <PageHeader
        eyebrow="FAQ"
        title="Perguntas frequentes"
        description="Reunimos as dúvidas mais comuns de quem busca uma contabilidade nova ou está abrindo uma empresa."
        breadcrumb={[{ label: "Início", href: "/" }, { label: "FAQ" }]}
      />

      <Section tone="default">
        <div className="mx-auto max-w-3xl">
          <Accordion items={faqItems} />
        </div>
      </Section>

      <CTASection
        title="Não encontrou sua resposta?"
        description="Fale diretamente com nossa equipe — respondemos rápido pelo WhatsApp."
      />
    </>
  );
}
