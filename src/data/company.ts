/**
 * Central company configuration.
 * Everything here that is a real, confirmed fact was taken from the Mignacca
 * logo / business-card artwork supplied for this project. Anything not
 * confirmed is wrapped in the `Placeholder` marker so it's easy to grep for
 * (`isPlaceholder`) and swap out once the real information is provided.
 */

export interface Placeholder {
  value: string;
  isPlaceholder: true;
}

function placeholder(value: string): Placeholder {
  return { value, isPlaceholder: true };
}

export const company = {
  name: "Mignacca",
  legalName: "Mignacca Assessoria, Consultoria e Contabilidade Ltda",
  tagline: "Assessoria, Consultoria e Contabilidade",
  shortDescription:
    "Escritório de contabilidade em Belo Horizonte que cuida da rotina fiscal, contábil e trabalhista de pequenas e médias empresas com acompanhamento próximo e especializado.",

  phones: [
    { label: "(31) 3309-5370", href: "tel:+553133095370" },
    { label: "(31) 3222-6001", href: "tel:+553132226001" },
  ],
  whatsapp: {
    display: "(31) 98825-9000",
    e164: "5531988259000",
  },
  email: "mignacca@mignacca.com.br",

  address: {
    street: "Rua dos Goitacazes, 14",
    complement: "Salas 207, 208 e 209",
    neighborhood: placeholder("Centro"),
    city: "Belo Horizonte",
    state: "MG",
    zip: "30190-908",
    mapsQuery: "Rua dos Goitacazes, 14, Belo Horizonte, MG, 30190-908",
  },

  businessHours: placeholder("Segunda a sexta, das 8h às 18h"),

  crc: "CRC-MG 18663",
  foundedYear: "1989",
  yearsOfExperience: "35+",
  clientsServed: "300+",

  social: {
    instagram: placeholder("https://instagram.com/mignaccacontabilidade"),
    linkedin: placeholder("https://linkedin.com/company/mignacca"),
    facebook: placeholder(""),
  },
} as const;

export function isPlaceholder(value: unknown): value is Placeholder {
  return (
    typeof value === "object" &&
    value !== null &&
    "isPlaceholder" in value &&
    (value as Placeholder).isPlaceholder === true
  );
}

export function resolveText(value: string | Placeholder): string {
  return typeof value === "string" ? value : value.value;
}

export const siteUrl = "https://www.mignaccacontabilidade.com.br";
