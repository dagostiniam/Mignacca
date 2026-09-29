export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "Quanto custa um contador para minha empresa?",
    answer:
      "O valor da contabilidade depende do porte da empresa, do regime tributário, do volume de notas fiscais e do número de funcionários. Fazemos uma análise gratuita do seu cenário para apresentar uma proposta justa e transparente — sem taxas escondidas.",
  },
  {
    question: "Como funciona a contabilidade mensal?",
    answer:
      "Cuidamos da escrituração contábil, apuração de impostos e envio das obrigações do seu negócio todos os meses, mantendo tudo em dia. Você recebe relatórios periódicos e tem um canal direto com nossa equipe sempre que precisar.",
  },
  {
    question: "Como funciona a troca de contador?",
    answer:
      "O processo é mais simples do que parece: cuidamos da comunicação com o escritório anterior, da transferência dos dados e da regularização de pendências, se houver. Você continua trabalhando normalmente enquanto organizamos a transição.",
  },
  {
    question: "Como abrir uma empresa?",
    answer:
      "O primeiro passo é definir o tipo societário e o enquadramento tributário mais adequado à sua atividade. A partir daí, cuidamos da documentação e do acompanhamento dos registros junto aos órgãos competentes até a empresa estar apta a emitir notas fiscais.",
  },
  {
    question: "Qual regime tributário devo escolher?",
    answer:
      "Depende do faturamento, da atividade e da estrutura de custos da sua empresa. Simples Nacional, Lucro Presumido e Lucro Real têm regras diferentes — por isso avaliamos seu cenário específico antes de recomendar um caminho.",
  },
  {
    question: "O que está incluído na contabilidade mensal?",
    answer:
      "De forma geral, a escrituração contábil, a apuração de impostos, o envio das obrigações acessórias e o suporte da nossa equipe. O escopo exato varia conforme o plano contratado — detalhamos tudo antes de fechar negócio.",
  },
  {
    question: "Como funciona a folha de pagamento?",
    answer:
      "Cuidamos de todo o ciclo: admissão, cálculo mensal, férias, 13º, rescisões e envio das obrigações trabalhistas, como o eSocial. Você nos envia as informações da equipe e cuidamos do restante.",
  },
  {
    question: "Quais documentos são necessários para iniciar o atendimento?",
    answer:
      "Em geral, documentos societários, notas fiscais emitidas e recebidas, extratos bancários e informações da folha de pagamento, quando aplicável. Enviamos uma lista específica assim que entendemos o cenário da sua empresa.",
  },
];
