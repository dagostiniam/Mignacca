import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui/Section";
import { ServiceCard } from "@/components/services/ServiceCard";
import { CTASection } from "@/components/sections/CTASection";
import { pageMetadata } from "@/lib/metadata";
import { services } from "@/data/services";

export const metadata: Metadata = pageMetadata({
  title: "Serviços contábeis",
  description:
    "Conheça os serviços de contabilidade, fiscal, departamento pessoal, consultoria e planejamento tributário da Mignacca.",
  path: "/servicos",
});

export default function ServicosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Serviços"
        title="Contabilidade para cada etapa do seu negócio"
        description="Serviços pensados para simplificar a rotina contábil, fiscal e trabalhista da sua empresa — sem complicação."
        breadcrumb={[{ label: "Início", href: "/" }, { label: "Serviços" }]}
      />

      <Section tone="default">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      <CTASection
        title="Não sabe qual serviço sua empresa precisa?"
        description="Fale com a gente — em poucos minutos entendemos seu cenário e indicamos o melhor caminho."
      />
    </>
  );
}
