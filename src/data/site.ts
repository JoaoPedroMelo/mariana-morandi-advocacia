/**
 * Dados institucionais — fonte única para toda a página.
 * Edite aqui; nenhum componente deve repetir estes valores.
 *
 * Não acrescente informações não confirmadas pela advogada
 * (endereço, e-mail, horários, CNPJ, títulos, resultados).
 */

export const site = {
  brand: 'Mariana Morandi Advocacia',

  lawyer: {
    name: 'Mariana Thomaz Morandi',
    title: 'Dra.',
    shortName: 'Mariana Morandi',
    role: 'Advogada',
  },

  oab: {
    uf: 'SP',
    number: '545.669',
    get label() {
      return `OAB/${this.uf} ${this.number}`;
    },
  },

  practice: 'Direito Previdenciário',

  location: {
    city: 'Osvaldo Cruz',
    state: 'SP',
    get label() {
      return `${this.city}/${this.state}`;
    },
  },

  address: {
    street: 'R. Governador Armando Salles, 895',
    complement: 'Sala 4 (2º andar)',
    postalCode: '17700-059',
    /** Endereço em uma linha, usado no mapa e no link de rotas. */
    query: 'R. Governador Armando Salles, 895, Osvaldo Cruz - SP, 17700-059',
  },

  /** Dias da semana ainda não informados: exibir somente o intervalo de horas. */
  hours: 'Das 9h às 18h',

  modalities: 'Online e presencial',

  education: {
    degree: 'Bacharel em Direito',
    institution: 'REGES',
    city: 'Osvaldo Cruz/SP',
    // Ano informado pela cliente; mantido nos dados, mas não destacado na interface.
    year: 2025,
  },

  contact: {
    whatsapp: {
      /** Somente dígitos, com DDI e DDD (formato exigido pelo wa.me). */
      number: '5518988000475',
      display: '(18) 98800-0475',
      international: '+55 18 98800-0475',
      message: 'Olá, Dra. Mariana. Gostaria de obter informações sobre atendimento em Direito Previdenciário.',
    },
    instagram: {
      url: 'https://www.instagram.com/marianamorandiadvocacia/',
      handle: '@marianamorandiadvocacia',
    },
    email: 'marianamorandi.adv@gmail.com',
  },

  seo: {
    title: 'Mariana Morandi Advocacia | Direito Previdenciário em Osvaldo Cruz/SP',
    description:
      'Dra. Mariana Thomaz Morandi, OAB/SP 545.669. Orientação em Direito Previdenciário — aposentadorias, benefícios por incapacidade, pensões, BPC/LOAS, revisões e recursos. Atendimento online e presencial em Osvaldo Cruz/SP.',
    locale: 'pt_BR',
    ogImage: '/og-image.jpg',
    ogImageAlt: 'Símbolo de Mariana Morandi Advocacia ao lado do retrato da advogada.',
  },

  /** Aviso exibido no rodapé. */
  disclaimer:
    'As informações deste site têm caráter exclusivamente informativo e não substituem a análise individual de cada caso.',

  /** Crédito de desenvolvimento, no rodapé. */
  credit: {
    name: 'Grupo Solano',
    url: 'https://gruposolano.com.br/',
  },
} as const;

export const nav = [
  { href: '#atuacao', label: 'Atuação' },
  { href: '#planejamento', label: 'Planejamento' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#duvidas', label: 'Dúvidas' },
  { href: '#localizacao', label: 'Localização' },
  { href: '#contato', label: 'Contato' },
] as const;

const encodedAddress = encodeURIComponent(site.address.query);

/** Mapa incorporado (Google Maps, sem chave de API) e link de rotas. */
export const maps = {
  embed: `https://www.google.com/maps?q=${encodedAddress}&output=embed`,
  directions: `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`,
};

/** Link do WhatsApp com mensagem inicial opcional, corretamente codificada. */
export function whatsappUrl(message: string = site.contact.whatsapp.message): string {
  const base = `https://wa.me/${site.contact.whatsapp.number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
