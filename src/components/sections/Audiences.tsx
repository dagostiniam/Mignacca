import { Section, Eyebrow } from "@/components/ui/Section";

const audiences = [
  {
    title: "Pequenas e médias empresas",
    description: "Contabilidade completa para operações em crescimento.",
  },
  {
    title: "Profissionais liberais",
    description: "Formalização e rotina fiscal sob medida para a atividade.",
  },
  {
    title: "Prestadores de serviço",
    description: "Emissão de notas, apuração de impostos e folha em dia.",
  },
  {
    title: "Comércio",
    description: "Rotina fiscal organizada para lojas físicas e online.",
  },
  {
    title: "Empresas abrindo o primeiro CNPJ",
    description: "Orientação desde a escolha do tipo societário.",
  },
  {
    title: "Empresas trocando de contador",
    description: "Transição acompanhada, sem perder o histórico contábil.",
  },
];

export function Audiences() {
  return (
    <Section tone="default">
      <Eyebrow>Para quem trabalhamos</Eyebrow>
      <h2 className="balance mt-4 max-w-2xl font-display text-3xl font-bold text-primary sm:text-4xl">
        Contabilidade pensada para o seu tipo de negócio
      </h2>

      <div className="mt-10 flex flex-wrap gap-3">
        {audiences.map((audience) => (
          <div
            key={audience.title}
            className="group relative rounded-lg border border-border bg-background px-5 py-4 transition-colors hover:border-primary"
          >
            <p className="mb-1.5 text-sm font-semibold text-accent-dark">{audience.title}</p>
            <p className="max-w-[220px] text-sm text-text-muted">{audience.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
