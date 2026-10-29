/**
 * Áreas de atuação em Direito Previdenciário.
 *
 * A atuação é generalista dentro do Direito Previdenciário: os temas abaixo são
 * exemplos ilustrativos, não uma lista exaustiva.
 *
 * A pedido da cliente, benefícios previdenciários e o assistencial ficam no mesmo
 * grupo; a distinção jurídica (contributivos, RGPS × BPC/LOAS, Lei nº 8.742/1993)
 * continua explícita no título, no resumo e no texto do BPC/LOAS.
 *
 * REVISÃO: textos jurídicos sujeitos à aprovação da advogada antes da publicação.
 */

export interface Topic {
  title: string;
  text: string;
}

export interface PracticeGroup {
  id: string;
  kind: 'beneficios' | 'procedimento';
  /** Natureza jurídica, exibida como rótulo do grupo. */
  label: string;
  title: string;
  summary: string;
  topics: Topic[];
}

export const atuacaoIntro =
  'A atuação abrange o Direito Previdenciário de forma ampla, da orientação inicial e do pedido ao INSS até recursos e revisões. Os temas abaixo são exemplos dos assuntos mais frequentes, não uma lista fechada.';

export const practiceGroups: PracticeGroup[] = [
  {
    id: 'beneficios',
    kind: 'beneficios',
    label: 'Previdência e Assistência Social',
    title: 'Benefícios previdenciários e assistenciais',
    summary:
      'Os previdenciários são destinados a quem contribui para a Previdência Social (segurados do INSS) e, em alguns casos, a seus dependentes. O BPC/LOAS é assistencial e não depende de contribuição.',
    topics: [
      {
        title: 'Aposentadorias',
        text: 'Orientação sobre as modalidades de aposentadoria e as regras aplicáveis a cada histórico de contribuição.',
      },
      {
        title: 'Benefícios por incapacidade',
        text: 'Orientação para quem está impossibilitado de trabalhar por motivo de doença ou acidente e busca um benefício do INSS.',
      },
      {
        title: 'Salário-maternidade',
        text: 'Benefício destinado a seguradas que atendem aos requisitos legais em situações como nascimento de filho, adoção ou guarda judicial para fins de adoção.',
      },
      {
        title: 'Pensão por morte',
        text: 'Benefício destinado aos dependentes de segurados falecidos, conforme os requisitos previstos na legislação previdenciária.',
      },
      {
        title: 'Auxílio-reclusão',
        text: 'Benefício destinado aos dependentes do segurado de baixa renda que esteja preso, desde que os requisitos legais sejam atendidos.',
      },
      {
        title: 'BPC/LOAS',
        // REVISÃO: trecho do meio estava encoberto no print da cliente ("…e pessoas com deficiência que possam atender aos crit…").
        text: 'Orientação para pessoas idosas a partir de 65 anos e pessoas com deficiência que possam atender aos critérios legais para receber o benefício assistencial.',
      },
    ],
  },
  {
    id: 'procedimentos',
    kind: 'procedimento',
    label: 'INSS e Justiça',
    title: 'Requerimentos, recursos e revisões',
    summary: 'Acompanhamento das etapas administrativas e, quando cabível, judiciais.',
    topics: [
      {
        title: 'Antes de solicitar',
        text: 'Análise do histórico de contribuições, conferência do tempo de contribuição e planejamento previdenciário para identificar as possibilidades de benefício.',
      },
      {
        title: 'Pedido ao INSS',
        text: 'Orientação e acompanhamento do requerimento, organização dos documentos e atendimento às exigências do INSS, incluindo a preparação para perícias, quando necessárias.',
      },
      {
        title: 'Após a decisão',
        // REVISÃO: final da frase parcialmente encoberto no print da cliente ("…e possibilida… a Justiça, quando cabível").
        text: 'Análise do resultado, orientação sobre recursos administrativos, revisão de benefícios e possibilidade de recorrer à Justiça, quando cabível.',
      },
    ],
  },
];
