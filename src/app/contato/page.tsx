import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
// Formulário de contato desativado até termos um serviço de e-mail
// configurado (ver src/app/contato/actions.ts). Para reativar: importe
// ContactForm de "@/components/forms/ContactForm" e volte a renderizá-lo
// no lugar do card "Fale agora" abaixo.
import {
  MailIcon,
  PhoneIcon,
  PinIcon,
  ClockIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { pageMetadata } from "@/lib/metadata";
import { company, resolveText } from "@/data/company";
import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";

export const metadata: Metadata = pageMetadata({
  title: "Contato",
  description:
    "Fale com a Mignacca pelo WhatsApp, telefone ou e-mail. Escritório de contabilidade em Belo Horizonte.",
  path: "/contato",
});

export default function ContatoPage() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    company.address.mapsQuery,
  )}`;

  return (
    <>
      <PageHeader
        eyebrow="Contato"
        title="Vamos conversar sobre sua empresa"
        description="Escolha o canal que preferir — respondemos rápido pelo WhatsApp."
        breadcrumb={[{ label: "Início", href: "/" }, { label: "Contato" }]}
      />

      <Section tone="default">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-xl font-semibold text-primary">
                Informações de contato
              </h2>
              <ul className="mt-5 space-y-4 text-sm text-text">
                <li className="flex items-start gap-3">
                  <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent-dark" />
                  <span>
                    {company.address.street}, {company.address.complement}
                    <br />
                    {company.address.city}/{company.address.state} — CEP{" "}
                    {company.address.zip}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <PhoneIcon className="h-5 w-5 shrink-0 text-accent-dark" />
                  <span className="flex flex-col">
                    {company.phones.map((phone) => (
                      <a key={phone.href} href={phone.href} className="hover:text-primary">
                        {phone.label}
                      </a>
                    ))}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <WhatsAppIcon className="h-5 w-5 shrink-0 text-accent-dark" />
                  <a
                    href={whatsappLink(whatsappMessages.contact)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    {company.whatsapp.display}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MailIcon className="h-5 w-5 shrink-0 text-accent-dark" />
                  <a href={`mailto:${company.email}`} className="hover:text-primary">
                    {company.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <ClockIcon className="h-5 w-5 shrink-0 text-accent-dark" />
                  <span>{resolveText(company.businessHours)}</span>
                </li>
              </ul>
            </div>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-48 items-center justify-center rounded-lg border border-border bg-surface text-sm font-medium text-primary transition-colors hover:border-primary"
            >
              Ver no Google Maps →
            </a>
          </div>

          <div className="flex flex-col justify-center rounded-lg border border-border bg-primary p-8 text-text-on-primary sm:p-10">
            <WhatsAppIcon className="h-10 w-10 text-[#25D366]" />
            <h2 className="mt-5 font-display text-2xl font-bold">
              Fale agora pelo WhatsApp
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-text-on-primary/75">
              É o canal mais rápido para falar com a nossa equipe — normalmente
              respondemos em poucos minutos, em horário comercial.
            </p>
            <div className="mt-6">
              <Button href={whatsappLink(whatsappMessages.contact)} external size="lg" variant="whatsapp" className="w-full">
                Chamar no WhatsApp
              </Button>
            </div>

            <div className="mt-8 space-y-3 border-t border-white/15 pt-6 text-sm">
              <p className="text-text-on-primary/60">Prefere outro canal?</p>
              <a
                href={company.phones[0].href}
                className="flex items-center gap-3 hover:text-accent-light"
              >
                <PhoneIcon className="h-4 w-4 shrink-0 text-accent-light" />
                Ligar para {company.phones[0].label}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-3 hover:text-accent-light"
              >
                <MailIcon className="h-4 w-4 shrink-0 text-accent-light" />
                Enviar e-mail para {company.email}
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
