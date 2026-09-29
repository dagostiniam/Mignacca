import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BarsUpIcon } from "@/components/icons";
import { company, isPlaceholder } from "@/data/company";
import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface">
      <Container className="grid grid-cols-1 items-center gap-14 py-10 sm:py-14 lg:grid-cols-[1.1fr_0.9fr] lg:py-16">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-dark">
            <span className="h-px w-6 bg-current" />
            Contabilidade em Belo Horizonte
          </span>

          <h1 className="balance mt-5 font-display text-4xl font-bold leading-[1.1] text-primary sm:text-5xl lg:text-[3.4rem]">
            Contabilidade próxima para quem constrói um negócio sério.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-muted">
            Cuidamos da contabilidade, do fiscal e do departamento pessoal da sua
            empresa com acompanhamento próximo e conhecimento técnico — para você
            decidir com mais segurança e focar no que faz o negócio crescer.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={whatsappLink(whatsappMessages.home)} external size="lg">
              Fale conosco
            </Button>
            <Button href="/servicos" variant="outline" size="lg">
              Conheça nossos serviços
            </Button>
          </div>
        </div>

        <div className="relative reveal [animation-delay:150ms]">
          <div className="relative overflow-hidden rounded-xl bg-primary p-8 text-text-on-primary shadow-[var(--shadow-lifted)] sm:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rotate-12 bg-gradient-to-br from-accent-light via-accent to-accent-dark opacity-90 blur-[1px]"
              style={{ clipPath: "polygon(65% 0, 100% 0, 45% 100%, 20% 100%)" }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-4 bottom-10 h-32 w-32 rotate-12 bg-gradient-to-br from-accent to-accent-dark opacity-60"
              style={{ clipPath: "polygon(65% 0, 100% 0, 45% 100%, 20% 100%)" }}
            />

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-light">
              Soluções contábeis e fiscais
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <Stat
                value={isPlaceholder(company.yearsOfExperience) ? "—" : company.yearsOfExperience}
                label="Anos de experiência"
                isPlaceholder={isPlaceholder(company.yearsOfExperience)}
              />
              <Stat
                value={isPlaceholder(company.clientsServed) ? "—" : company.clientsServed}
                label="Empresas atendidas"
                isPlaceholder={isPlaceholder(company.clientsServed)}
              />
            </div>

            <div className="mt-10 flex items-center gap-3 border-t border-white/15 pt-6">
              <BarsUpIcon className="h-7 w-7 text-accent-light" />
              <div className="text-sm text-text-on-primary/80">
                Contabilidade, Fiscal, Departamento Pessoal e Consultoria Tributária
                em um único lugar.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Stat({
  value,
  label,
  isPlaceholder,
}: {
  value: string;
  label: string;
  isPlaceholder: boolean;
}) {
  return (
    <div>
      <p className="font-display text-4xl font-bold text-text-on-primary">
        {value}
        {isPlaceholder && <span className="ml-1 align-top text-xs text-accent-light">*</span>}
      </p>
      <p className="mt-1 text-sm text-text-on-primary/70">{label}</p>
    </div>
  );
}
