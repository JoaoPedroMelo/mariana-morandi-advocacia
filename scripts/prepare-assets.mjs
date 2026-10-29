/**
 * Gera os derivados técnicos da identidade visual a partir dos arquivos originais.
 *
 * - Não redesenha a marca: o símbolo é extraído do JPG original por distância de cor
 *   (fundo verde-petróleo → transparência), preservando o desenho pixel a pixel.
 * - Os originais em src/assets nunca são sobrescritos.
 *
 * Uso: npm run assets
 */
import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';

const LOGO = 'src/assets/brand/logo-original.jpg';
const PORTRAIT = 'src/assets/photos/mariana-estudio.jpeg';

const BG = [0, 43, 46]; // #002B2E — fundo do arquivo original
const SAND = [208, 170, 133]; // #D0AA85 — traço do símbolo
const PETROL = [0, 43, 46];

await mkdir('src/assets/brand', { recursive: true });
await mkdir('public', { recursive: true });

const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
const FULL = dist(SAND, BG);

/** Símbolo isolado com fundo transparente, na cor indicada. */
async function extractMark(color, out) {
  const { data, info } = await sharp(LOGO).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const rgba = Buffer.alloc(info.width * info.height * 4);
  for (let i = 0, j = 0; i < data.length; i += 3, j += 4) {
    const a = Math.min(1, dist([data[i], data[i + 1], data[i + 2]], BG) / FULL);
    rgba[j] = color[0];
    rgba[j + 1] = color[1];
    rgba[j + 2] = color[2];
    rgba[j + 3] = Math.round(a * 255);
  }
  await sharp(rgba, { raw: { width: info.width, height: info.height, channels: 4 } })
    .trim({ threshold: 1 })
    .png({ compressionLevel: 9 })
    .toFile(out);
}

await extractMark(SAND, 'src/assets/brand/logo-mark-sand.png');
await extractMark(PETROL, 'src/assets/brand/logo-mark-petrol.png');

// Favicons: recorte quadrado do original, centrado no símbolo (bbox aprox. 275–805 × 210–865).
const square = { left: 190, top: 190, width: 700, height: 700 };
const icon = (size) => sharp(LOGO).extract(square).resize(size, size, { kernel: 'lanczos3' });

await icon(512).png().toFile('public/icon-512.png');
await icon(192).png().toFile('public/icon-192.png');
await icon(180).png().toFile('public/apple-touch-icon.png');
await icon(48).png().toFile('public/favicon-48.png');
await icon(32).png().toFile('public/favicon-32.png');

// favicon.ico (PNG embutido, formato aceito por todos os navegadores atuais)
const png32 = await icon(32).png().toBuffer();
const header = Buffer.alloc(22);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(1, 4);
header.writeUInt8(32, 6);
header.writeUInt8(32, 7);
header.writeUInt8(0, 8);
header.writeUInt8(0, 9);
header.writeUInt16LE(1, 10);
header.writeUInt16LE(32, 12);
header.writeUInt32LE(png32.length, 14);
header.writeUInt32LE(22, 18);
await writeFile('public/favicon.ico', Buffer.concat([header, png32]));

// Imagem de compartilhamento (1200×630): símbolo original à esquerda, retrato à direita.
const W = 1200;
const H = 630;
const photoW = 520;
const markH = 380;
const mark = await sharp(LOGO).extract({ left: 260, top: 195, width: 560, height: 690 }).resize({ height: markH }).toBuffer();
const markMeta = await sharp(mark).metadata();
const photo = await sharp(PORTRAIT)
  .resize(photoW, H, { fit: 'cover', position: 'attention' })
  .toBuffer();
const rule = Buffer.from(
  `<svg width="2" height="${H}" xmlns="http://www.w3.org/2000/svg"><rect width="2" height="${H}" fill="#D0AA85"/></svg>`,
);

await sharp({ create: { width: W, height: H, channels: 3, background: { r: 0, g: 43, b: 46 } } })
  .composite([
    { input: mark, left: Math.round((W - photoW - markMeta.width) / 2), top: Math.round((H - markH) / 2) },
    { input: rule, left: W - photoW - 2, top: 0 },
    { input: photo, left: W - photoW, top: 0 },
  ])
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile('public/og-image.jpg');

console.log('Assets gerados.');
