"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/Button";
import { CloseIcon, MenuIcon, ChevronDownIcon } from "@/components/icons";
import { services } from "@/data/services";
import { company } from "@/data/company";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre nós" },
  { href: "/conteudos", label: "Conteúdos" },
  { href: "/faq", label: "FAQ" },
  { href: "/contato", label: "Contato" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // `open` only ever becomes true from a client-side click, so by the time
  // it's true `document` is guaranteed to exist — no separate "mounted"
  // state (and its extra render) is needed to guard the portal below.
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const overlay = open && (
    // Rendered through a portal so this fixed, full-screen overlay escapes
    // the header's stacking context (position: sticky + z-index create one)
    // instead of being painted underneath <main>.
    <div className="fixed inset-0 z-50 bg-background">
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <Logo />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fechar menu"
              className="flex h-10 w-10 items-center justify-center rounded-md text-primary"
            >
              <CloseIcon className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-1 px-5 py-6" aria-label="Menu principal">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-lg font-medium text-primary hover:bg-surface"
              >
                {link.label}
              </Link>
            ))}

            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
              className="flex items-center justify-between rounded-md px-3 py-3 text-lg font-medium text-primary hover:bg-surface"
            >
              Serviços
              <ChevronDownIcon
                className={`h-5 w-5 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {servicesOpen && (
              <div className="mb-1 ml-3 flex flex-col gap-1 border-l border-border pl-4">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/servicos/${service.slug}`}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-2 py-2 text-base text-text-muted hover:text-primary"
                  >
                    {service.name}
                  </Link>
                ))}
                <Link
                  href="/servicos"
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-2 text-base font-medium text-accent-dark"
                >
                  Ver todos os serviços
                </Link>
                <Link
                  href="/troque-de-contador"
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-2 text-base font-medium text-accent-dark"
                >
                  Troque de contador
                </Link>
              </div>
            )}

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-lg font-medium text-primary hover:bg-surface"
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-4 flex flex-col gap-3 px-3">
              <Button href="/contato" size="lg" className="w-full" onClick={() => setOpen(false)}>
                Fale conosco
              </Button>
              <Button href={company.phones[0].href} variant="outline" size="lg" className="w-full">
                {company.phones[0].label}
              </Button>
            </div>
          </nav>
        </div>
      );

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Abrir menu"
        aria-expanded={open}
        className="flex h-10 w-10 items-center justify-center rounded-md text-primary"
      >
        <MenuIcon className="h-6 w-6" />
      </button>

      {overlay && createPortal(overlay, document.body)}
    </div>
  );
}
