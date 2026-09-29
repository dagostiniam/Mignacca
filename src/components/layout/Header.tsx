import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ChevronDownIcon } from "@/components/icons";
import { services } from "@/data/services";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
  { href: "/sobre", label: "Sobre nós" },
  { href: "/conteudos", label: "Conteúdos" },
  { href: "/faq", label: "FAQ" },
  { href: "/contato", label: "Contato" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Menu principal">
          <Link
            href="/"
            className="rounded-md px-3 py-2 text-sm font-medium whitespace-nowrap text-text hover:text-primary"
          >
            Início
          </Link>

          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium whitespace-nowrap text-text hover:text-primary"
              aria-haspopup="true"
            >
              Serviços
              <ChevronDownIcon className="h-4 w-4 transition-transform group-focus-within:rotate-180 group-hover:rotate-180" />
            </button>

            <div className="invisible absolute left-1/2 top-full z-40 w-80 -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="overflow-hidden rounded-lg border border-border bg-background shadow-[var(--shadow-lifted)]">
                <ul className="grid grid-cols-1 divide-y divide-border">
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/servicos/${service.slug}`}
                        className="block px-4 py-3 text-sm text-text hover:bg-surface hover:text-primary"
                      >
                        <span className="font-medium">{service.name}</span>
                        <span className="mt-0.5 block text-xs text-text-muted">
                          {service.shortDescription}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-1 bg-surface p-3">
                  <Link
                    href="/servicos"
                    className="rounded-md px-2 py-1.5 text-sm font-semibold text-primary hover:underline"
                  >
                    Ver todos os serviços →
                  </Link>
                  <Link
                    href="/troque-de-contador"
                    className="rounded-md px-2 py-1.5 text-sm font-semibold text-accent-dark hover:underline"
                  >
                    Quero trocar de contador →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium whitespace-nowrap text-text hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contato" size="md">
            Fale conosco
          </Button>
        </div>

        <MobileMenu />
      </Container>
    </header>
  );
}
