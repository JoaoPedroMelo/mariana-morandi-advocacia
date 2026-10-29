# CLAUDE.md

Landing page da Mariana Morandi Advocacia (Direito Previdenciário). Astro estático + TypeScript + CSS próprio.

## Regras do projeto

- **Conteúdo**: dados institucionais só em `src/data/` (`site.ts`, `atuacao.ts`, `planejamento.ts`, `faq.ts`). Endereço, horário e e-mail já foram confirmados; os dias da semana do horário, não. Nunca inventar CNPJ, títulos ("especialista"), depoimentos, resultados ou anos de experiência.
- **Ética OAB (Provimento 205/2021)**: tom informativo; sem promessas de resultado, urgência, preços ou comparações. CTAs descrevem a ação ("Conversar pelo WhatsApp").
- **Jurídico**: distinguir os benefícios previdenciários (contributivos) do assistencial (BPC/LOAS, Lei 8.742/1993). A pedido da cliente, ficam no mesmo card da Atuação, mas o título, o resumo e o texto do BPC/LOAS mantêm a distinção. Usar a nomenclatura pós-EC 103/2019 (auxílio por incapacidade temporária, aposentadoria por incapacidade permanente).
- **Marca**: não redesenhar a logo. Derivados são gerados por `npm run assets` a partir de `src/assets/brand/logo-original.jpg`.
- **Design**: ver `docs/ART_DIRECTION.md`. A estrutura (Spectral / Public Sans / JetBrains Mono, divisões por linha fina, quase sem ícones) segue a referência da cliente, com as cores da marca. Areia (`#D0AA85`) nunca como texto sobre fundo claro (1,93:1); usar `--bronze`. Use as classes globais `.section`, `.section--ivory`, `.rule-short`, `.eyebrow` e `.dot-list` e o componente `SectionHead`.
- **Sem dependências novas** (React, Tailwind, bibliotecas de animação) sem justificativa concreta.

## Comandos

`npm run dev` · `npm run build` (inclui `astro check`) · `npm run preview` · `npm run assets`

O Astro está fixado em 7.4.1 porque a 7.4.2 exige Node ≥ 22.23.4.
