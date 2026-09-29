import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTASection({
  title = "Pronto para simplificar a contabilidade da sua empresa?",
  description = "Fale com nossa equipe e receba uma orientação clara sobre o próximo passo.",
  primaryLabel = "Fale conosco no WhatsApp",
  primaryHref = whatsappLink(whatsappMessages.home),
  secondaryLabel = "Outros canais de contato",
  secondaryHref = "/contato",
}: CTASectionProps) {
  return (
    <Section tone="primary" className="text-center">
      <h2 className="balance mx-auto max-w-2xl font-display text-3xl font-bold sm:text-4xl">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-text-on-primary/75">
        {description}
      </p>
      <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button href={primaryHref} external variant="secondary" size="lg">
          {primaryLabel}
        </Button>
        <Button
          href={secondaryHref}
          size="lg"
          className="border border-white/30 bg-transparent text-text-on-primary hover:bg-white/10"
        >
          {secondaryLabel}
        </Button>
      </div>
    </Section>
  );
}
