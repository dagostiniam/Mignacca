"use client";

import { usePathname } from "next/navigation";
import { WhatsAppIcon } from "@/components/icons";
import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";

function messageForPath(pathname: string): string {
  if (pathname.startsWith("/troque-de-contador")) return whatsappMessages.switching;
  if (pathname.startsWith("/servicos/abertura-de-empresa")) return whatsappMessages.opening;
  if (pathname.startsWith("/contato")) return whatsappMessages.contact;
  return whatsappMessages.home;
}

export function WhatsAppButton() {
  const pathname = usePathname();
  const href = whatsappLink(messageForPath(pathname ?? "/"));

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[var(--shadow-lifted)] transition-transform duration-200 hover:scale-105 sm:bottom-7 sm:right-7"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
