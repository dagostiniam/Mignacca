import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/metadata";
import { company } from "@/data/company";

export const metadata: Metadata = pageMetadata({
  title: "Política de Privacidade",
  description: `Política de Privacidade da ${company.name} — como tratamos os dados pessoais coletados no site.`,
  path: "/privacidade",
  noIndex: true,
});

export default function PrivacidadePage() {
  return (
    <>
      <PageHeader
        title="Política de Privacidade"
        breadcrumb={[{ label: "Início", href: "/" }, { label: "Política de Privacidade" }]}
      />

      <Section tone="default">
        <div className="prose-content mx-auto max-w-2xl space-y-6 text-sm leading-relaxed text-text">
          <p className="rounded-md bg-surface p-4 text-xs text-text-muted">
            [Texto modelo — deve ser revisado por um profissional jurídico
            antes da publicação, para refletir com precisão as práticas reais
            de tratamento de dados da {company.name}.]
          </p>

          <p>
            A {company.name} respeita a privacidade dos visitantes deste site
            e trata os dados pessoais coletados em conformidade com a Lei
            Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).
          </p>

          <h2 className="font-display text-xl font-semibold text-primary">
            Quais dados coletamos
          </h2>
          <p>
            Coletamos os dados fornecidos voluntariamente por você quando
            entra em contato pelo WhatsApp, telefone ou e-mail, como nome,
            telefone/WhatsApp, e-mail e o conteúdo da mensagem enviada.
          </p>

          <h2 className="font-display text-xl font-semibold text-primary">
            Finalidade do tratamento
          </h2>
          <p>
            Utilizamos esses dados exclusivamente para responder ao seu
            contato e, quando aplicável, apresentar nossos serviços. Não
            compartilhamos seus dados com terceiros para fins comerciais.
          </p>

          <h2 className="font-display text-xl font-semibold text-primary">
            Seus direitos
          </h2>
          <p>
            Você pode solicitar, a qualquer momento, a confirmação, o acesso,
            a correção ou a exclusão dos seus dados pessoais, entrando em
            contato pelo e-mail{" "}
            <a href={`mailto:${company.email}`} className="underline">
              {company.email}
            </a>
            .
          </p>

          <h2 className="font-display text-xl font-semibold text-primary">
            Cookies
          </h2>
          <p>
            Este site pode utilizar cookies e ferramentas de análise (como
            Google Analytics) para entender como os visitantes utilizam o
            site e melhorar a experiência de navegação.
          </p>
        </div>
      </Section>
    </>
  );
}
