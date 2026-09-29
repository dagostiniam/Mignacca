export type ServiceIcon =
  | "ledger"
  | "receipt"
  | "people"
  | "compass"
  | "rocket"
  | "shield";

export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  icon: ServiceIcon;
  highlights: string[];
  idealFor: string[];
}

export const services: Service[] = [
  {
    slug: "contabilidade",
    name: "Contabilidade",
    shortDescription:
      "Escrituração contábil completa, demonstrativos e uma visão clara da saúde financeira da sua empresa.",
    description:
      "Cuidamos da escrituração contábil da sua empresa com organização e precisão, entregando demonstrativos que realmente ajudam você a entender para onde o negócio está indo — não apenas para cumprir obrigações, mas para apoiar suas decisões.",
    icon: "ledger",
    highlights: [
      "Escrituração contábil mensal",
      "Balancetes e demonstrativos financeiros",
      "Apuração de resultados",
      "Relatórios gerenciais em linguagem clara",
    ],
    idealFor: [
      "Pequenas e médias empresas",
      "Empresas em crescimento",
      "Negócios que precisam de relatórios para sócios ou investidores",
    ],
  },
  {
    slug: "fiscal",
    name: "Departamento Fiscal",
    shortDescription:
      "Apuração de impostos, emissão de guias e cumprimento das obrigações fiscais no prazo certo.",
    description:
      "Assumimos a rotina fiscal da sua empresa — da apuração dos tributos ao envio das obrigações acessórias — para que você não perca prazos nem seja pego de surpresa por uma notificação do Fisco.",
    icon: "receipt",
    highlights: [
      "Apuração de impostos federais, estaduais e municipais",
      "Emissão de guias de recolhimento",
      "Envio de obrigações acessórias (SPED, DCTF, EFD, entre outras)",
      "Acompanhamento de mudanças na legislação tributária",
    ],
    idealFor: [
      "Empresas do Simples Nacional, Lucro Presumido e Lucro Real",
      "Comércio, indústria e prestação de serviços",
    ],
  },
  {
    slug: "departamento-pessoal",
    name: "Departamento Pessoal",
    shortDescription:
      "Folha de pagamento, admissões, rescisões e toda a rotina trabalhista da sua equipe.",
    description:
      "Cuidamos de toda a rotina de departamento pessoal — da admissão ao desligamento — para que sua equipe seja bem administrada e sua empresa fique em dia com as obrigações trabalhistas.",
    icon: "people",
    highlights: [
      "Folha de pagamento mensal",
      "Admissões, férias e rescisões",
      "Cálculo de encargos trabalhistas",
      "eSocial e obrigações acessórias trabalhistas",
      "Análise de convenções e acordos trabalhistas",
      "Orientação ao empregador sobre questões de saúde e segurança do trabalho",
    ],
    idealFor: [
      "Empresas com colaboradores CLT",
      "Negócios em fase de contratação",
    ],
  },
  {
    slug: "consultoria-tributaria",
    name: "Consultoria Tributária",
    shortDescription:
      "Orientação especializada para decisões que envolvem impostos, enquadramento e regime tributário.",
    description:
      "Antes de tomar decisões que afetam a carga tributária do seu negócio, você merece orientação especializada. Nossa consultoria tributária analisa o cenário da sua empresa e apresenta caminhos possíveis, com os prós e contras de cada um.",
    icon: "compass",
    highlights: [
      "Análise de enquadramento e regime tributário",
      "Orientação sobre operações específicas",
      "Apoio em questões fiscais pontuais",
      "Segurança para decisões de maior impacto",
    ],
    idealFor: [
      "Empresas em momentos de decisão ou mudança",
      "Negócios que buscam mais previsibilidade tributária",
    ],
  },
  {
    slug: "abertura-de-empresa",
    name: "Abertura de Empresa",
    shortDescription:
      "Orientação desde a escolha do tipo societário até o registro da sua empresa.",
    description:
      "Abrir uma empresa envolve decisões que vão acompanhar o negócio por muito tempo — tipo societário, enquadramento tributário, registros. Acompanhamos você em cada etapa para que esse começo seja feito com segurança.",
    icon: "rocket",
    highlights: [
      "Estudo de viabilidade",
      "Definição do tipo societário",
      "Escolha do enquadramento tributário",
      "Organização da documentação necessária",
      "Acompanhamento dos registros junto aos órgãos competentes",
    ],
    idealFor: [
      "Quem está empreendendo pela primeira vez",
      "Profissionais liberais formalizando a atividade",
      "Sócios estruturando um novo negócio",
    ],
  },
  {
    slug: "planejamento-tributario",
    name: "Planejamento Tributário",
    shortDescription:
      "Análise estratégica para que sua empresa pague impostos de forma correta e eficiente.",
    description:
      "Planejamento tributário não é sobre atalhos — é sobre organização e antecipação. Avaliamos a estrutura da sua empresa para identificar oportunidades legítimas de eficiência fiscal ao longo do tempo.",
    icon: "shield",
    highlights: [
      "Estudo do regime tributário mais adequado",
      "Projeções de carga tributária",
      "Revisão periódica conforme o crescimento da empresa",
      "Decisões fiscais alinhadas à realidade do negócio",
    ],
    idealFor: [
      "Empresas em expansão",
      "Negócios que querem revisar sua estrutura tributária",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
