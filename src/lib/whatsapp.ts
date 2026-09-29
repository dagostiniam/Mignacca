import { company } from "@/data/company";

export function whatsappLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${company.whatsapp.e164}?text=${encoded}`;
}

export const whatsappMessages = {
  home: `Olá! Gostaria de conhecer os serviços da ${company.name}.`,
  services: (serviceName: string) =>
    `Olá! Gostaria de saber mais sobre o serviço de ${serviceName}.`,
  opening: "Olá! Gostaria de saber como funciona a abertura de uma empresa.",
  switching:
    "Olá! Estou pensando em trocar de contador e gostaria de saber como funciona.",
  contact: "Olá! Vim pelo site e gostaria de falar com a equipe da Mignacca.",
};
