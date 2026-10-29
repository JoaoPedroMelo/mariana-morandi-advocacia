# Direção de arte — Mariana Morandi Advocacia

## Referência da cliente

A estrutura visual segue a referência indicada pela cliente (cursos.isabelmidia.com) em três pontos, **com as cores da marca Mariana Morandi**:

1. **Fontes**: serifada leve nos títulos, sans-serif neutra no texto e monoespaçada nos rótulos.
2. **Divisões**: seções separadas por linha fina de largura total, alternando dois tons claros. Traço curto acima dos títulos, cards com borda esquerda colorida e cantos levemente arredondados. Fechamento escuro (contato + rodapé).
3. **Ícones**: praticamente nenhum. "+" fino sem caixa no FAQ, pontos discretos como marcadores. Ícones só onde identificam um canal: WhatsApp no botão flutuante e WhatsApp, e-mail e Instagram nos botões da seção de contato (traço fino, 18 px).

## Conceito: "o brasão aberto"

A logo é um monograma "M" dentro de um brasão desenhado em linha, encimado por um capitel jônico — a ideia de coluna, de sustentação. O retrato principal é recortado no perfil desse brasão, com contorno areia **aberto no topo**, como na logo. É o elemento de identidade própria que distingue a página da referência. A logo nunca é redesenhada: usamos o original e derivados técnicos (`scripts/prepare-assets.mjs`).

## Tipografia

| Papel | Fonte | Uso |
| --- | --- | --- |
| Títulos | **Spectral** 300 / 400 e 300 itálico (OFL) | h1–h4, declaração em itálico, valores de destaque |
| Texto | **Public Sans** variável (OFL) | Corpo, botões, navegação |
| Rótulos | **JetBrains Mono** 400 (OFL) | Rótulos em caixa-alta espaçada (0,16em), numeração 01/02/03, OAB |

Todas servidas localmente (`@fontsource`), sem requisições a terceiros.

**Diferença em relação à referência:** o corpo de texto fica em 17–18 px (a referência usa 14–16 px), porque parte relevante do público previdenciário é mais velha ou tem alguma incapacidade.

## Paleta e contraste

| Token | Hex | Uso |
| --- | --- | --- |
| `--petrol` | `#002B2E` | Títulos, botões, traços, fechamento escuro |
| `--sand` | `#D0AA85` | Contorno do brasão, botão sobre escuro, rótulos sobre escuro. **Nunca texto sobre claro** (1,93:1) |
| `--bronze` | `#7B5A39` | Rótulos mono sobre claro (5,6:1 no marfim) |
| `--paper` | `#FBF9F6` | Superfície clara principal |
| `--ivory` | `#F6F2EC` | Superfície clara alternada e fundo dos cards |
| `--text-muted` | `#45585A` | Texto secundário (6,73:1 no marfim) |

Sobre o petróleo: areia 7,05:1, texto `#E9E2D8` 11,79:1, secundário `#A7B6B3` 7,21:1.

## Estrutura da página

```
Header (papel)      logo · navegação · [Conversar pelo WhatsApp]   (desktop a partir de 72em)
Hero (marfim)       rótulo · título Spectral 300 · texto · 2 botões | retrato no brasão
Declaração (papel)  faixa compacta, centralizada: traço · frase em uma linha (quebra no mobile) · assinatura
Atuação (marfim)    traço · título · 2 cards (fundo papel) com borda esquerda petróleo:
                      01 Previdência e Assistência Social (benefícios + BPC/LOAS)
                      02 INSS e Justiça
Planejamento (papel) traço · rótulo · título · 4 motivos numerados 01–04 · card "Quando devo…"
Sobre (marfim)      foto | rótulo · título · texto · lista com pontos
Dúvidas (papel)     centralizado: traço · título · lista com "+" fino · card com [WhatsApp]
Localização (marfim) endereço, horário, modalidades | mapa
Contato (petróleo)  centralizado: título · texto · [WhatsApp] [E-mail] [Instagram] com ícones
Rodapé (petróleo)   3 colunas iguais (desktop): marca centralizada · Endereço · Atendimento
                    (blocos de informação no centro da coluna, linhas alinhadas à esquerda)
                    © (esquerda) | Desenvolvido por Grupo Solano (direita) · aviso centralizado abaixo
```

## Decisões verificadas na auditoria

- **Título do hero**: tamanho fluido calculado a partir da largura medida da linha mais longa, "com clareza e segurança." (≈ 10,1× o corpo da fonte), mantendo 3 linhas no desktop.
- **Retrato antes do título no mobile e no tablet**: a ordem muda só visualmente (no DOM o texto vem primeiro).
- **Botão flutuante**: some enquanto hero, contato ou rodapé estão visíveis e, no desktop, fica na margem lateral.
- **Mapa**: iframe do Google Maps com `loading="lazy"`, sem chave de API, mais um link de rotas.

## Conformidade (OAB)

- Tom informativo, sem promessa de resultado, urgência, preços ou comparações.
- A frase da cliente foi adaptada para "Ajudo você a entender e buscar seus direitos previdenciários com informação clara.", porque "com segurança" pode sugerir garantia de resultado.
- O título do hero "Seus direitos previdenciários, com clareza e segurança." foi definido pela própria advogada (out/2026).
- Não se usa "especialista"; a atuação é "dedicada ao Direito Previdenciário".
