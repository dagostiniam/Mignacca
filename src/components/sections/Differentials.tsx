import { Section, Eyebrow } from "@/components/ui/Section";
import { company } from "@/data/company";
import {
  PeopleIcon,
  ClockIcon,
  LedgerIcon,
  ShieldIcon,
  CompassIcon,
  CheckIcon,
} from "@/components/icons";

const differentials = [
  {
    icon: PeopleIcon,
    title: "Atendimento direto, sem intermediários",
    description:
      "Você fala com quem realmente cuida da sua contabilidade — não com uma central de triagem.",
  },
  {
    icon: ClockIcon,
    title: "Resposta rápida quando você precisa",
    description:
      "Dúvidas urgentes não esperam. Nosso compromisso é dar retorno com agilidade, sem enrolação.",
  },
  {
    icon: LedgerIcon,
    title: "Relatórios que fazem sentido",
    description:
      "Nada de planilhas indecifráveis. Explicamos os números da sua empresa em linguagem simples.",
  },
  {
    icon: ShieldIcon,
    title: "Acompanhamento proativo da legislação",
    description:
      "Avisamos sobre mudanças e prazos antes que virem problema — não depois.",
  },
  {
    icon: CompassIcon,
    title: "Orientação, não só execução",
    description:
      "Ajudamos você a entender o \"porquê\" por trás de cada obrigação e decisão fiscal.",
  },
  {
    icon: CheckIcon,
    title: "Transparência nos valores",
    description: "Honorários claros, definidos antes de fechar negócio, sem taxas escondidas.",
  },
];

export function Differentials() {
  return (
    <Section tone="surface">
      <Eyebrow>Diferenciais</Eyebrow>
      <h2 className="balance mt-4 max-w-2xl font-display text-3xl font-bold text-primary sm:text-4xl">
        Por que escolher a {company.name}?
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {differentials.map((item) => (
          <div key={item.title} className="flex gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-background text-primary shadow-[var(--shadow-soft)]">
              <item.icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-primary">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-text-muted">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
