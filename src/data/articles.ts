export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO date
  readingTime: string;
  content: ContentBlock[];
}

export const categories = [
  "Contabilidade",
  "Impostos",
  "Simples Nacional",
  "Pequenas Empresas",
  "Gestão",
  "Departamento Pessoal",
] as const;

/**
 * Sample editorial content to demonstrate the blog structure end-to-end.
 * Written as general good-practice guidance — no specific tax figures,
 * deadlines or legal citations are asserted, since those change over time
 * and must be reviewed by the accounting team before publishing.
 */
export const articles: Article[] = [
  {
    slug: "como-organizar-a-contabilidade-da-sua-pequena-empresa",
    title: "Como organizar a contabilidade da sua pequena empresa desde o início",
    excerpt:
      "Pequenos hábitos de organização financeira evitam grande parte dos problemas contábeis mais comuns. Veja por onde começar.",
    category: "Pequenas Empresas",
    date: "2026-06-10",
    readingTime: "5 min de leitura",
    content: [
      {
        type: "p",
        text: "Muitos problemas contábeis não nascem de erros complexos, mas da falta de organização no dia a dia. Separar bem as finanças da empresa desde o início evita retrabalho — e dor de cabeça — mais adiante.",
      },
      { type: "h2", text: "Separe as contas pessoais das contas da empresa" },
      {
        type: "p",
        text: "Parece básico, mas é o ponto de partida de qualquer contabilidade organizada. Misturar despesas pessoais e empresariais dificulta a leitura real do negócio e pode gerar problemas fiscais.",
      },
      { type: "h2", text: "Guarde notas fiscais e comprovantes" },
      {
        type: "p",
        text: "Toda entrada e saída de dinheiro deve ter um documento correspondente. Isso facilita a escrituração contábil e dá mais segurança em caso de fiscalização.",
      },
      { type: "h2", text: "Tenha relatórios financeiros periódicos" },
      {
        type: "p",
        text: "Acompanhar receitas, despesas e resultado com regularidade — mensal, idealmente — permite decisões mais rápidas e evita surpresas no fim do ano.",
      },
      {
        type: "ul",
        items: [
          "Abra uma conta bancária exclusiva para a empresa",
          "Organize notas fiscais por mês",
          "Peça relatórios gerenciais ao seu contador",
          "Revise o enquadramento tributário periodicamente",
        ],
      },
      {
        type: "p",
        text: "Se sua empresa ainda não tem essa rotina estruturada, esse é justamente o tipo de organização que uma contabilidade próxima ajuda a construir.",
      },
    ],
  },
  {
    slug: "sinais-de-que-pode-ser-hora-de-trocar-de-contador",
    title: "5 sinais de que pode ser hora de trocar de contador",
    excerpt:
      "Nem sempre o problema é visível de imediato. Alguns sinais indicam que sua empresa pode estar precisando de um acompanhamento mais próximo.",
    category: "Gestão",
    date: "2026-05-22",
    readingTime: "4 min de leitura",
    content: [
      {
        type: "p",
        text: "Trocar de contador é uma decisão que muitos empresários adiam por acharem o processo complicado. Na prática, a transição costuma ser mais simples do que parece — e os sinais de que ela é necessária geralmente aparecem antes do que se imagina.",
      },
      {
        type: "ul",
        items: [
          "Você tem dificuldade para falar com seu contador ou demora dias para receber uma resposta",
          "Recebe pouca ou nenhuma orientação além do envio de guias",
          "Não entende os relatórios que recebe",
          "Já foi surpreendido por uma multa ou pendência que não sabia que existia",
          "Sente que a contabilidade só \"cumpre tabela\", sem olhar para o seu negócio",
        ],
      },
      {
        type: "p",
        text: "Se um ou mais desses pontos soam familiares, vale considerar uma contabilidade com um acompanhamento mais próximo e proativo.",
      },
    ],
  },
  {
    slug: "checklist-para-abrir-uma-empresa-com-seguranca",
    title: "Checklist para abrir uma empresa com segurança",
    excerpt:
      "Antes de formalizar o negócio, alguns pontos merecem atenção para evitar retrabalho e escolhas difíceis de reverter.",
    category: "Pequenas Empresas",
    date: "2026-04-15",
    readingTime: "6 min de leitura",
    content: [
      {
        type: "p",
        text: "Abrir uma empresa envolve decisões que vão acompanhar o negócio por muito tempo. Ter orientação contábil desde o início ajuda a evitar escolhas que, mais tarde, seriam difíceis ou custosas de mudar.",
      },
      { type: "h2", text: "Tipo societário" },
      {
        type: "p",
        text: "MEI, empresário individual, sociedade limitada — cada formato tem implicações diferentes de responsabilidade, custo e complexidade. A escolha deve considerar o momento atual do negócio e também o crescimento esperado.",
      },
      { type: "h2", text: "Enquadramento tributário" },
      {
        type: "p",
        text: "O regime tributário influencia diretamente quanto — e como — a empresa paga impostos. Vale avaliar com cuidado antes de decidir, considerando a atividade e a expectativa de faturamento.",
      },
      { type: "h2", text: "Documentação e registros" },
      {
        type: "p",
        text: "Depois de definidos o tipo societário e o enquadramento, é hora de organizar a documentação e acompanhar os registros junto aos órgãos competentes até a empresa estar apta a funcionar formalmente.",
      },
      {
        type: "p",
        text: "Ter uma contabilidade envolvida desde essa fase inicial reduz erros e acelera o processo.",
      },
    ],
  },
  {
    slug: "simples-nacional-o-que-observar-no-enquadramento",
    title: "Simples Nacional: o que observar ao escolher o enquadramento",
    excerpt:
      "O Simples Nacional é vantajoso para boa parte das pequenas empresas, mas não é a melhor opção em todos os casos. Entenda o que avaliar.",
    category: "Simples Nacional",
    date: "2026-03-03",
    readingTime: "5 min de leitura",
    content: [
      {
        type: "p",
        text: "O Simples Nacional costuma ser o regime mais conhecido entre pequenas empresas — e, para muitas delas, também o mais vantajoso. Ainda assim, a escolha do enquadramento tributário ideal depende de fatores específicos de cada negócio.",
      },
      { type: "h2", text: "Fatores que costumam pesar na decisão" },
      {
        type: "ul",
        items: [
          "Atividade exercida pela empresa",
          "Faturamento atual e projetado",
          "Estrutura de custos e margem de lucro",
          "Quantidade de funcionários",
        ],
      },
      {
        type: "p",
        text: "Como as regras e limites do Simples Nacional podem mudar, o ideal é revisar o enquadramento periodicamente com apoio contábil, em vez de tomar essa decisão uma única vez e nunca mais revisitá-la.",
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getRelatedArticles(current: Article, limit = 3): Article[] {
  return articles
    .filter((article) => article.slug !== current.slug)
    .sort((a, b) =>
      a.category === current.category ? -1 : b.category === current.category ? 1 : 0,
    )
    .slice(0, limit);
}
