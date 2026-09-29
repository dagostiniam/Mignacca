import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/icons";
import { pageMetadata } from "@/lib/metadata";
import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";

export const metadata: Metadata = pageMetadata({
  title: "Troque de contador",
  description:
    "Pensando em trocar de contador? Veja como funciona o processo de transição e fale com a equipe da Mignacca.",
  path: "/troque-de-contador",
});

const steps = [
  {
    title: "Você nos conta como está hoje",
    description: "Entendemos sua empresa, o regime tributário atual e o motivo da troca.",
  },
  {
    title: "Cuidamos da comunicação",
    description: "Fazemos o contato formal com o escritório anterior para solicitar a documentação.",
  },
  {
    title: "Organizamos a transferência",
    description: "Reunimos o histórico contábil e regularizamos pendências, se houver.",
  },
  {
    title: "Sua contabilidade continua sem parar",
    description: "Você não perde prazos nem fica sem suporte durante a transição.",
  },
];

const documents = [
  "Contrato social e alterações contratuais",
  "Últimas guias de impostos pagas",
  "Balancetes e balanço patrimonial recentes",
  "Relação de funcionários e folha de pagamento (se houver)",
  "Certificado digital da empresa",
  "Acesso aos sistemas e portais utilizados atualmente",
];

const reasons = [
  "Atendimento mais próximo e disponível",
  "Relatórios que você realmente entende",
  "Orientação tributária mais estratégica",
  "Menos surpresas com prazos e multas",
];

export default function TrocarDeContadorPage() {
  return (
    <>
      <PageHeader
        eyebrow="Troque de contador"
        title="Pensando em trocar de contador?"
        description="A transição é mais simples do que parece. Cuidamos de praticamente todo o processo para que sua empresa não sinta a mudança."
        breadcrumb={[{ label: "Início", href: "/" }, { label: "Troque de contador" }]}
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href={whatsappLink(whatsappMessages.switching)} external variant="secondary" size="lg">
            Quero trocar de contador
          </Button>
          <Button
            href="/contato"
            size="lg"
            className="border border-white/30 bg-transparent text-text-on-primary hover:bg-white/10"
          >
            Prefiro outros canais de contato
          </Button>
        </div>
      </PageHeader>

      <Section tone="default">
        <Eyebrow>Como funciona</Eyebrow>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold text-primary">
          Um processo conduzido de ponta a ponta
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title}>
              <span className="font-display text-4xl font-bold text-accent/50">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-primary">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          <div>
            <Eyebrow>Documentação</Eyebrow>
            <h2 className="mt-4 font-display text-2xl font-bold text-primary">
              O que costuma ser necessário
            </h2>
            <p className="mt-3 text-sm text-text-muted">
              A lista pode variar conforme o porte e o regime da sua empresa —
              confirmamos tudo com você no início do processo.
            </p>
            <ul className="mt-6 space-y-3">
              {documents.map((doc) => (
                <li key={doc} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-background text-primary">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm leading-relaxed text-text">{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Eyebrow>Por que trocar</Eyebrow>
            <h2 className="mt-4 font-display text-2xl font-bold text-primary">
              O que muda no dia a dia
            </h2>
            <ul className="mt-6 space-y-3">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-text-on-primary">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm leading-relaxed text-text">{reason}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-lg border border-border bg-background p-6">
              <p className="text-sm leading-relaxed text-text-muted">
                Ainda com dúvidas sobre o processo? Fale com a gente pelo
                WhatsApp — respondemos rápido.
              </p>
              <Button href={whatsappLink(whatsappMessages.switching)} external className="mt-4 w-full">
                Quero trocar de contador
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
