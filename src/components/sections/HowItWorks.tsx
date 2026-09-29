import { Section, Eyebrow } from "@/components/ui/Section";

const steps = [
  {
    number: "01",
    title: "Você entra em contato",
    description: "Pelo WhatsApp, telefone ou e-mail — como preferir.",
  },
  {
    number: "02",
    title: "Entendemos sua empresa",
    description: "Analisamos o momento do negócio, o regime tributário e as necessidades reais.",
  },
  {
    number: "03",
    title: "Apresentamos a melhor solução",
    description: "Uma proposta clara, com escopo e valores definidos — sem letras miúdas.",
  },
  {
    number: "04",
    title: "Cuidamos da sua contabilidade",
    description: "Rotina em dia e um canal aberto sempre que você precisar de nós.",
  },
];

export function HowItWorks() {
  return (
    <Section tone="primary">
      <Eyebrow tone="dark">Como funciona</Eyebrow>
      <h2 className="balance mt-4 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
        Do primeiro contato à contabilidade em dia
      </h2>

      <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <div key={step.number} className="relative">
            <span className="font-display text-5xl font-bold text-accent/40">
              {step.number}
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-text-on-primary/70">
              {step.description}
            </p>
            {index < steps.length - 1 && (
              <span
                aria-hidden
                className="absolute right-[-1.25rem] top-6 hidden h-px w-8 bg-white/20 lg:block"
              />
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
