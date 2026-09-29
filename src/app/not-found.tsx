import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section tone="default" className="text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-dark">
        Erro 404
      </p>
      <h1 className="mt-4 font-display text-3xl font-bold text-primary sm:text-4xl">
        Página não encontrada
      </h1>
      <p className="mx-auto mt-4 max-w-md text-base text-text-muted">
        A página que você procura pode ter sido movida ou não existe mais.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button href="/">Voltar para a página inicial</Button>
        <Button href="/contato" variant="outline">
          Falar com a equipe
        </Button>
      </div>
    </Section>
  );
}
