import { Section, Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/services/ServiceCard";
import { services } from "@/data/services";

export function ServicesGrid() {
  return (
    <Section tone="default">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div className="max-w-xl">
          <Eyebrow>Serviços</Eyebrow>
          <h2 className="balance mt-4 font-display text-3xl font-bold text-primary sm:text-4xl">
            Contabilidade para cada etapa do seu negócio
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-muted">
            De quem está abrindo a primeira empresa a quem já tem uma operação
            estruturada — organizamos a rotina contábil, fiscal e trabalhista
            do seu jeito.
          </p>
        </div>
        <Button href="/servicos" variant="outline" className="hidden sm:inline-flex">
          Ver todos os serviços
        </Button>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>

      <div className="mt-10 sm:hidden">
        <Button href="/servicos" variant="outline" className="w-full">
          Ver todos os serviços
        </Button>
      </div>
    </Section>
  );
}
