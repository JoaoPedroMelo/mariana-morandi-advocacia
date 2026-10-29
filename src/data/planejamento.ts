/**
 * Planejamento previdenciário — texto enviado pela cliente.
 *
 * REVISÃO: conteúdo sujeito à aprovação da advogada antes da publicação.
 */

export interface PlanningReason {
  title: string;
  text: string;
}

export const planejamento = {
  eyebrow: 'Planejamento previdenciário',
  title: 'Sua aposentadoria começa com um bom planejamento.',
  lead: 'O planejamento previdenciário é uma análise individual do seu histórico de contribuições, da sua vida profissional e das regras da Previdência Social. O objetivo é identificar as possibilidades de aposentadoria aplicáveis ao seu caso e ajudar você a tomar decisões mais conscientes sobre o seu futuro.',

  reasonsTitle: 'Por que fazer um planejamento previdenciário?',
  reasons: [
    {
      title: 'Conhecer suas possibilidades',
      text: 'Entenda quais regras de aposentadoria podem se aplicar à sua trajetória profissional.',
    },
    {
      title: 'Identificar o momento adequado',
      text: 'Avalie as possíveis datas para se aposentar e os requisitos que ainda precisam ser cumpridos.',
    },
    {
      title: 'Verificar seu histórico previdenciário',
      text: 'Identifique possíveis inconsistências no CNIS e períodos de trabalho ou contribuição que mereçam análise.',
    },
    {
      title: 'Planejar suas contribuições',
      text: 'Avalie, conforme o seu caso, como as contribuições futuras podem influenciar sua aposentadoria e o valor estimado do benefício.',
    },
  ] satisfies PlanningReason[],

  whenTitle: 'Quando devo fazer meu planejamento?',
  whenText:
    'Quanto antes você conhecer sua situação previdenciária, mais tempo poderá ter para avaliar alternativas e corrigir eventuais pendências. Mesmo quem está perto de se aposentar pode se beneficiar de uma análise individualizada.',

  closing: 'Planejar é entender suas possibilidades hoje para tomar decisões mais conscientes sobre o amanhã.',
};
