// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * Domínio de produção. Ainda não definido: informe via variável de ambiente
 * SITE_URL (ex.: SITE_URL=https://www.exemplo.com.br npm run build).
 * Com ele, a página passa a emitir URL canônica, og:url absoluta e sitemap.
 */
const site = process.env.SITE_URL || undefined;

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'ignore',
  integrations: site ? [sitemap()] : [],
  build: {
    inlineStylesheets: 'always',
  },
});
