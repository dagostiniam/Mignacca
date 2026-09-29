import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/metadata";
import { company } from "@/data/company";

export const metadata: Metadata = pageMetadata({
  title: "Termos de Uso",
  description: `Termos de uso do site da ${company.name}.`,
  path: "/termos",
  noIndex: true,
});

export default function TermosPage() {
  return (
    <>
      <PageHeader
        title="Termos de Uso"
        breadcrumb={[{ label: "Início", href: "/" }, { label: "Termos de Uso" }]}
      />

      <Section tone="default">
        <div className="prose-content mx-auto max-w-2xl space-y-6 text-sm leading-relaxed text-text">
          <p className="rounded-md bg-surface p-4 text-xs text-text-muted">
            [Texto modelo — deve ser revisado por um profissional jurídico
            antes da publicação.]
          </p>

          <p>
            Ao acessar e utilizar este site, você concorda com os termos
            descritos a seguir. Caso não concorde, recomendamos que não
            utilize o site.
          </p>

          <h2 className="font-display text-xl font-semibold text-primary">
            Conteúdo do site
          </h2>
          <p>
            As informações disponibilizadas neste site têm caráter
            informativo e não substituem uma consultoria contábil ou
            tributária individualizada. Recomendamos sempre falar diretamente
            com nossa equipe antes de tomar decisões com base no conteúdo
            publicado.
          </p>

          <h2 className="font-display text-xl font-semibold text-primary">
            Propriedade intelectual
          </h2>
          <p>
            A marca, o logotipo e os conteúdos deste site pertencem à{" "}
            {company.legalName} e não podem ser reproduzidos sem autorização
            prévia.
          </p>

          <h2 className="font-display text-xl font-semibold text-primary">
            Alterações
          </h2>
          <p>
            Estes termos podem ser atualizados periodicamente. Recomendamos
            consultar esta página com regularidade.
          </p>
        </div>
      </Section>
    </>
  );
}
