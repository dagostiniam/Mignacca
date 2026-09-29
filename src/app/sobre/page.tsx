import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section, Eyebrow } from "@/components/ui/Section";
import { CTASection } from "@/components/sections/CTASection";
import { TeamMember } from "@/components/TeamMember";
import { pageMetadata } from "@/lib/metadata";
import { company, resolveText } from "@/data/company";
import { team } from "@/data/team";

export const metadata: Metadata = pageMetadata({
  title: "Sobre a Mignacca",
  description:
    "Conheça a história, a missão e os valores da Mignacca, escritório de contabilidade em Belo Horizonte.",
  path: "/sobre",
});

export default function SobrePage() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre nós"
        title="Você sabe quem está cuidando da sua empresa"
        description={company.shortDescription}
        breadcrumb={[{ label: "Início", href: "/" }, { label: "Sobre nós" }]}
      />

      <Section tone="default">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Eyebrow>Nossa história</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold text-primary">
              Uma contabilidade construída com proximidade
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-text-muted">
              <p>
                Fundada em {resolveText(company.foundedYear)}, a {company.name}{" "}
                está há mais de 28 anos no mesmo endereço, em{" "}
                {company.address.city}/{company.address.state} — uma
                trajetória construída com continuidade e proximidade real com
                cada cliente atendido ao longo desses anos.
              </p>
              <p>
                À frente do escritório está{" "}
                <strong className="font-semibold text-primary">
                  Maria José Mignacca D&apos;Agostini
                </strong>
                , sócia com mais de 50 anos de experiência na área contábil.
              </p>
              <blockquote className="border-l-2 border-accent py-1 pl-5 font-display text-xl italic text-primary">
                &ldquo;Acreditamos que um contador não é apenas um prestador
                de serviço, e sim um parceiro para todas as horas.&rdquo;
              </blockquote>
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-lg border border-border bg-surface p-6">
              <p className="font-display text-xl font-bold text-primary">Missão</p>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                Dar segurança e clareza contábil para que empresários possam
                focar em fazer o negócio crescer.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-6">
              <p className="font-display text-xl font-bold text-primary">Visão</p>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                Ser reconhecida como referência em contabilidade próxima e
                consultiva na região.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-primary p-6 text-text-on-primary">
              <p className="font-display text-xl font-bold">Valores</p>
              <ul className="mt-2 space-y-1 text-sm leading-relaxed text-text-on-primary/80">
                <li>Transparência em cada relatório e cobrança</li>
                <li>Proximidade real com cada cliente</li>
                <li>Responsabilidade técnica acima de atalhos</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <Eyebrow>Equipe</Eyebrow>
        <h2 className="mt-4 font-display text-3xl font-bold text-primary">
          Quem cuida da sua contabilidade
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <TeamMember key={member.name} member={member} />
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
