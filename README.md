# Mariana Morandi Advocacia — landing page

Landing page institucional da Dra. Mariana Thomaz Morandi (OAB/SP 545.669), com atuação em Direito Previdenciário em Osvaldo Cruz/SP.

Site estático em **Astro + TypeScript + CSS próprio**, sem frameworks de UI e sem backend. O único conteúdo de terceiros é o mapa do Google, carregado sob demanda.

## Como iniciar

Requisitos: Node.js ≥ 22.22.

```bash
npm install
npm run dev       # desenvolvimento em http://localhost:4321
npm run build     # verificação de tipos (astro check) + build estático em dist/
npm run preview   # serve o build de dist/ localmente
npm run assets    # regenera os derivados da logo, favicons e imagem de compartilhamento
```

## Onde editar o conteúdo

| O quê | Arquivo |
| --- | --- |
| Nome, OAB, endereço, horário, WhatsApp, e-mail, Instagram, mapa, SEO, aviso legal | `src/data/site.ts` |
| Atuação em Direito Previdenciário (grupos e temas) | `src/data/atuacao.ts` |
| Dúvidas frequentes | `src/data/faq.ts` |
| Cores, tipografia, espaçamentos | `src/styles/tokens.css` |

Nenhum componente repete esses valores. Todos os links de WhatsApp são gerados por `whatsappUrl()` em `src/data/site.ts`.

## Estrutura

```
src/
  assets/
    brand/        logo-original.jpg (original) + derivados transparentes
    photos/       mariana-estudio.jpeg (hero) · mariana-retrato.jpeg (sobre)
  components/     Header, Hero, Atuacao, Declaracao, Sobre, Duvidas, Localizacao,
                  Contato, Footer, WhatsAppFloat, Button, SectionHead, BrandMark, icons/
  data/           site.ts · atuacao.ts · faq.ts
  layouts/        BaseLayout.astro (SEO, Open Graph, JSON-LD, fontes)
  pages/          index.astro · robots.txt.ts
  styles/         tokens.css · global.css
public/           favicons, manifest, og-image.jpg
scripts/          prepare-assets.mjs
docs/             ART_DIRECTION.md
```

Os arquivos enviados na raiz (`Logo.jpg`, `mariana 1.jpeg`, `mariana 2.jpeg`) foram preservados e **copiados** para `src/assets/`. A aplicação usa apenas as cópias, então os da raiz podem ser arquivados.

## Publicação

O build gera HTML estático em `dist/`, compatível com Cloudflare Pages, Vercel, Netlify ou qualquer hospedagem estática.

- **Comando de build:** `npm run build`
- **Diretório de saída:** `dist`
- **Variável de ambiente:** `SITE_URL=https://seu-dominio.com.br`

Enquanto `SITE_URL` não for definida, o site funciona normalmente, mas **não** emite URL canônica, `og:url` absoluta nem sitemap, para evitar URLs inventadas. Com a variável definida, passam a ser gerados `sitemap-index.xml`, a linha `Sitemap:` no `robots.txt`, a canônica e o `og:image` absoluto (exigido por WhatsApp e Facebook para a pré-visualização do link).

## Pendências antes de publicar

1. **Revisão jurídica e ética do conteúdo pela advogada**: atuação (`atuacao.ts`), dúvidas frequentes (`faq.ts`), apresentação (`Sobre.astro`) e a frase adaptada em `Declaracao.astro`.
2. **Dias de atendimento**: foi informado "das 9h às 18h", sem os dias da semana. O site exibe só o intervalo. Com os dias confirmados, atualizar `site.hours` e incluir `openingHoursSpecification` no JSON-LD (`BaseLayout.astro`).
3. **Domínio**: definir e configurar `SITE_URL`.
4. **Autorização de uso de imagem**: confirmar o uso das duas fotografias e o crédito do fotógrafo, se houver.
5. **Mapa e LGPD**: o mapa é um iframe do Google Maps, carregado só quando a pessoa rola até ele. Se o site vier a ter política de privacidade ou aviso de cookies, mencionar esse conteúdo de terceiros.
6. **Fotografia da seção "Sobre"**: `mariana 1.jpeg` tem 640×641 px. Uma versão maior ficaria mais nítida em telas de alta densidade.
7. **Medição em produção**: conferir os Core Web Vitals com PageSpeed Insights ou Search Console após publicar.

## Validação realizada

- `astro check`: 0 erros, 0 avisos, 0 dicas.
- `astro build`: concluído sem erros.
- Testes no Chrome headless via DevTools Protocol, com resultados medidos:
  - Sem overflow horizontal em 320, 360, 390, 768, 1024, 1280, 1440 e 1920 px. Título do hero com 3–4 linhas em todas essas larguras.
  - Menu mobile: abre, fecha com Esc (foco volta ao botão) e fecha ao escolher um link.
  - 6 links de WhatsApp para `wa.me/5518988000475`, `mailto:` correto, Instagram correto, link de rotas do Google Maps, nenhuma âncora quebrada e todos os `target="_blank"` com `rel="noopener"`.
  - O pin do mapa aparece no endereço correto: o Google reconhece "R. Armando Sales, 895 – Centro".
  - Hierarquia de títulos: um `h1`, um `h2` por seção, `h3` nos grupos de atuação e `h4` nos temas.
  - Laboratório (mobile, 4G lenta emulada, CPU 4×, sem cache): LCP ≈ 0,81 s, CLS 0, carga inicial ≈ 169 KB, 0 KB de JS externo.

Limitações: os testes usaram o motor Chromium (Chrome). Safari/iOS e Firefox não foram testados, nem leitores de tela reais (NVDA, VoiceOver). A acessibilidade foi verificada por inspeção, teclado e medição de contraste, não por auditoria automatizada (axe/Lighthouse).
