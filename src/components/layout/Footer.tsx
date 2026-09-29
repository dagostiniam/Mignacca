import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui/Container";
import {
  MailIcon,
  PhoneIcon,
  PinIcon,
  ClockIcon,
  WhatsAppIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/icons";
import { company, isPlaceholder, resolveText } from "@/data/company";
import { services } from "@/data/services";
import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-accent-light">
      {children}
    </h3>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-text-on-primary">
      <Container className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo variant="footer" inverted />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-text-on-primary/75">
            {company.shortDescription}
          </p>
          <div className="mt-5 flex gap-3">
            {!isPlaceholder(company.social.instagram) && (
              <a
                href={resolveText(company.social.instagram)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 hover:border-accent hover:text-accent"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
            )}
            {!isPlaceholder(company.social.linkedin) && (
              <a
                href={resolveText(company.social.linkedin)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 hover:border-accent hover:text-accent"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        <div>
          <FooterHeading>Serviços</FooterHeading>
          <ul className="space-y-2.5 text-sm text-text-on-primary/80">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/servicos/${service.slug}`} className="hover:text-accent-light">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <FooterHeading>Institucional</FooterHeading>
          <ul className="space-y-2.5 text-sm text-text-on-primary/80">
            <li>
              <Link href="/sobre" className="hover:text-accent-light">
                Sobre nós
              </Link>
            </li>
            <li>
              <Link href="/troque-de-contador" className="hover:text-accent-light">
                Troque de contador
              </Link>
            </li>
            <li>
              <Link href="/conteudos" className="hover:text-accent-light">
                Conteúdos
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-accent-light">
                Perguntas frequentes
              </Link>
            </li>
            <li>
              <Link href="/contato" className="hover:text-accent-light">
                Contato
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <FooterHeading>Contato</FooterHeading>
          <ul className="space-y-3 text-sm text-text-on-primary/80">
            <li className="flex items-start gap-2.5">
              <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-light" />
              <span>
                {company.address.street}, {company.address.complement}
                <br />
                {company.address.city}/{company.address.state} — CEP {company.address.zip}
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <PhoneIcon className="h-4 w-4 shrink-0 text-accent-light" />
              <span className="flex flex-col">
                {company.phones.map((phone) => (
                  <a key={phone.href} href={phone.href} className="hover:text-accent-light">
                    {phone.label}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <WhatsAppIcon className="h-4 w-4 shrink-0 text-accent-light" />
              <a
                href={whatsappLink(whatsappMessages.home)}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-light"
              >
                {company.whatsapp.display}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MailIcon className="h-4 w-4 shrink-0 text-accent-light" />
              <a href={`mailto:${company.email}`} className="hover:text-accent-light">
                {company.email}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <ClockIcon className="h-4 w-4 shrink-0 text-accent-light" />
              <span>{resolveText(company.businessHours)}</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-text-on-primary/60 sm:flex-row">
          <p>
            © {year} {company.legalName}. Todos os direitos reservados.
            {" "}
            {resolveText(company.crc)}
          </p>
          <div className="flex gap-5">
            <Link href="/privacidade" className="hover:text-accent-light">
              Política de Privacidade
            </Link>
            <Link href="/termos" className="hover:text-accent-light">
              Termos de Uso
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
