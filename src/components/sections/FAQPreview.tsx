import { Section, Eyebrow } from "@/components/ui/Section";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { faqItems } from "@/data/faq";

export function FAQPreview() {
  return (
    <Section tone="surface">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Eyebrow>Dúvidas frequentes</Eyebrow>
          <h2 className="balance mt-4 font-display text-3xl font-bold text-primary sm:text-4xl">
            Perguntas que recebemos com frequência
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-muted">
            Reunimos as dúvidas mais comuns de quem está buscando um contador.
            Não achou a sua? Fale com a gente.
          </p>
          <div className="mt-7">
            <Button href="/faq" variant="outline">
              Ver todas as perguntas
            </Button>
          </div>
        </div>

        <Accordion items={faqItems.slice(0, 5)} />
      </div>
    </Section>
  );
}
