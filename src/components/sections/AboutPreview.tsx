import { Section, Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { company, isPlaceholder, resolveText } from "@/data/company";

export function AboutPreview() {
  return (
    <Section tone="surface">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <Eyebrow>Quem cuida da sua empresa</Eyebrow>
          <h2 className="balance mt-4 font-display text-3xl font-bold text-primary sm:text-4xl">
            Você sabe exatamente quem está cuidando da sua contabilidade
          </h2>
          <p className="mt-5 text-base leading-relaxed text-text-muted">
            A {company.name} é um escritório de contabilidade em{" "}
            {company.address.city}/{company.address.state} construído sobre
            proximidade e conhecimento técnico. Preferimos entender o seu
            negócio de verdade a tratar sua empresa como mais um número em
            uma carteira de clientes.
          </p>
          {!isPlaceholder(company.foundedYear) && (
            <p className="mt-3 text-base leading-relaxed text-text-muted">
              Fundada em {resolveText(company.foundedYear)} e no mesmo
              endereço há mais de 28 anos.
            </p>
          )}
          <div className="mt-8">
            <Button href="/sobre" variant="outline">
              Conheça nossa história
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div className="rounded-lg border border-border bg-background p-6">
            <p className="font-display text-2xl font-bold text-primary">Missão</p>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              Dar segurança e clareza contábil para que empresários foquem em
              fazer o negócio crescer.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-background p-6">
            <p className="font-display text-2xl font-bold text-primary">Visão</p>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              Ser reconhecida como referência em contabilidade próxima na
              região.
            </p>
          </div>
          <div className="col-span-2 rounded-lg border border-border bg-primary p-6 text-text-on-primary">
            <p className="font-display text-2xl font-bold">Valores</p>
            <p className="mt-2 text-sm leading-relaxed text-text-on-primary/75">
              Transparência, proximidade e responsabilidade técnica em cada
              detalhe do atendimento.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
