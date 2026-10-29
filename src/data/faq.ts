/**
 * Dúvidas frequentes — conteúdo educativo, em linguagem simples.
 *
 * Regras de redação: não afirmar que o visitante tem direito a um benefício,
 * não prometer resultado e não descrever a operação do escritório além do
 * que foi informado (online e presencial, Osvaldo Cruz/SP, WhatsApp).
 *
 * REVISÃO: respostas sujeitas à aprovação da advogada antes da publicação.
 */

import { site } from './site';

export interface FaqItem {
  question: string;
  answer: string[];
}

export const faqIntro =
  'Respostas gerais, para ajudar a entender os temas mais comuns. Cada caso depende da análise dos documentos e das regras aplicáveis.';

export const faq: FaqItem[] = [
  {
    question: 'Quais são os tipos de aposentadoria?',
    answer: [
      'Existem diferentes tipos de aposentadoria, e cada um possui requisitos específicos. Entre os principais estão a aposentadoria por idade, por tempo de contribuição nas regras de transição, especial, rural, híbrida e da pessoa com deficiência.',
      'Após a Reforma da Previdência de 2019, passaram a valer novas regras, além de regras de transição para quem já contribuía antes da mudança.',
      'A aposentadoria adequada depende da idade, do tempo de contribuição e do histórico de trabalho de cada pessoa. Por isso, analisar esses dados é importante para identificar as possibilidades disponíveis.',
    ],
  },
  {
    question: 'O que é benefício por incapacidade?',
    answer: [
      'É o benefício pago pelo INSS ao segurado que fica impedido de trabalhar em razão de doença ou acidente. Em regra, exige qualidade de segurado, cumprimento de carência (dispensada em situações previstas em lei) e comprovação da incapacidade por perícia médica.',
    ],
  },
  {
    question:
      'Qual é a diferença entre auxílio por incapacidade temporária e aposentadoria por incapacidade permanente?',
    answer: [
      'O auxílio por incapacidade temporária, antigo auxílio-doença, é devido enquanto a pessoa está temporariamente impossibilitada de trabalhar, com perspectiva de recuperação.',
      'A aposentadoria por incapacidade permanente, antiga aposentadoria por invalidez, se aplica quando a perícia conclui que não há possibilidade de reabilitação para uma atividade que garanta o sustento. Os dois benefícios podem ser reavaliados pelo INSS.',
    ],
  },
  {
    question: 'O que é o BPC/LOAS?',
    answer: [
      'É o Benefício de Prestação Continuada, de um salário mínimo mensal, previsto na Lei Orgânica da Assistência Social (Lei nº 8.742/1993). Destina-se à pessoa idosa com 65 anos ou mais e à pessoa com deficiência que não tenham meios de se manter, nem de ser mantidas pela família, conforme os critérios legais de renda.',
      'Por ser um benefício assistencial, não exige contribuição ao INSS, não inclui 13º e não gera pensão por morte.',
    ],
  },
  {
    question: 'Posso buscar orientação antes de solicitar um benefício ao INSS?',
    answer: [
      'Sim! Buscar orientação antes de fazer o pedido pode ajudar a esclarecer dúvidas, identificar quais regras podem se aplicar ao seu caso e verificar se a documentação está adequada.',
      // REVISÃO: a cliente enviou a resposta nova e a antiga juntas; da antiga ficou só a lista de documentos.
      'A análise pode incluir documentos como o extrato do CNIS, carteiras de trabalho e laudos médicos, conforme o caso.',
    ],
  },
  {
    question: 'Meu benefício foi negado pelo INSS. O que posso fazer?',
    answer: [
      'A negativa do INSS nem sempre significa que não existe possibilidade de obter o benefício.',
      'Dependendo do motivo da decisão e das circunstâncias do caso, pode ser possível apresentar um recurso administrativo ou buscar a via judicial.',
      'O primeiro passo é entender por que o pedido foi negado e analisar os documentos apresentados. Com essas informações, é possível avaliar quais medidas podem ser cabíveis e quais prazos devem ser observados.',
    ],
  },
  {
    question: 'O atendimento pode ser realizado online?',
    answer: [
      `Sim! O atendimento pode ser realizado online, com praticidade e comodidade, ou presencialmente em nosso escritório, localizado em ${site.location.label}.`,
      `Endereço: ${site.address.street}, ${site.address.complement.toLowerCase()} — ${site.location.label}.`,
      'Para o primeiro contato, você pode enviar uma mensagem pelo WhatsApp ou entrar em contato por e-mail. Assim, podemos entender sua necessidade e orientar sobre os próximos passos.',
    ],
  },
];

/** Chamada exibida depois da lista de dúvidas. */
export const faqCta = {
  title: 'Tem dúvidas sobre o seu caso?',
  text: 'Entre em contato para saber como podemos orientar você.',
};
