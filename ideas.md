# Especificação visual — reprodução do Focar Econômico

## Referência principal

O site `https://focareconomico.manus.space` é a referência visual e funcional obrigatória. A reprodução deve preservar sua composição, hierarquia editorial, proporções, cores, ritmo, tipografia serifada, densidade de conteúdo, responsividade e interações. A única troca de identidade solicitada é o uso do logotipo oficial do **Sindicato dos Bancários de Guarulhos e Região** no cabeçalho e no favicon.

## Arquitetura observada

A página é um clipping econômico de leitura vertical. O cabeçalho escuro contém o logotipo institucional centralizado, os controles discretos de imprimir e compartilhar no canto superior direito, o título “Focar Econômico”, o subtítulo “Clipping diário do sistema financeiro” e a data da edição. Logo abaixo há uma faixa horizontal escura com borda dourada para o **Termômetro Econômico**, exibindo Dólar, Euro, Selic e Ibovespa.

Depois do cabeçalho há uma barra fina branca com o filtro “Hoje” à esquerda e “Atualizar” à direita. O conteúdo principal começa com uma matéria de destaque em cartão grande, centralizado, com imagem horizontal, etiqueta editorial sobre a imagem, título vermelho, resumo, chamada para leitura e horário. Em seguida aparece a seção “Mais Notícias do Dia” em quatro colunas no desktop, com cartões de bordas retas, pequenos metadados coloridos, imagem, título, resumo e link.

A seção “Edições Anteriores” usa uma faixa escura e uma sequência de cartões horizontais compactos, com miniatura à esquerda e data, título, quantidade de notícias e fonte à direita. O rodapé volta ao fundo escuro e apresenta a assinatura Focar Econômico, a descrição “Clipping Bancário & Sindical”, o crédito “Produzido por” com Manfrin Advogados e “Apoio” com Grupo Focar.

## Direção visual obrigatória

**Movimento de design:** editorial institucional inspirado em jornais econômicos impressos, com acabamento digital sóbrio.

**Princípios centrais:** preservar a hierarquia de reportagem; utilizar serifas de alto contraste nos títulos; manter cartões retangulares com bordas finas e sombras mínimas; aplicar detalhes dourados e vermelho profundo apenas para ênfase editorial.

**Filosofia de cor:** carvão e preto amarronzado comunicam seriedade financeira; o dourado fino funciona como marcador institucional; o vermelho fechado destaca manchetes sem transformar a página em portal noticioso genérico; branco e cinza muito claro mantêm conforto de leitura.

**Paradigma de layout:** cabeçalho institucional de largura total, miolo estreito e vertical, matéria principal destacada por escala, grade editorial de quatro colunas e arquivo de edições em blocos horizontais.

**Elementos de assinatura:** linhas douradas finas, tipografia serifada de jornal, pequenas etiquetas editoriais em caixa alta e numeração sequencial das notícias.

**Filosofia de interação:** ações discretas, instantâneas e utilitárias. Botões de impressão, compartilhamento, atualização e navegação entre edições não devem competir com o conteúdo.

**Animação:** somente transições curtas de opacidade, cor e deslocamento de até 4 px em hover/foco; nenhuma animação exuberante. Deve ser respeitada a preferência de redução de movimento.

**Sistema tipográfico:** família serifada clássica para títulos, manchetes, números e texto editorial; família sem serifa condensada ou de caixa alta para metadados, etiquetas e botões. A escala deve reproduzir visualmente a referência.

**Essência da marca:** um boletim diário sóbrio para bancários de Guarulhos acompanharem o sistema financeiro com rapidez e contexto. Personalidade: confiável, objetiva e institucional.

**Voz da marca:** manchetes diretas e informativas; chamadas curtas em caixa alta; microcopy funcional. Exemplos: “LEIA A MATÉRIA COMPLETA” e “MAIS NOTÍCIAS DO DIA”.

**Wordmark e logo:** manter “Focar Econômico” como título editorial tipográfico e substituir o símbolo institucional do topo pelo logotipo oficial do Sindicato dos Bancários de Guarulhos e Região, sem redesenho ou estilização indevida.

O arquivo oficial localizado no site institucional é `https://www.bancariosdeguarulhos.com.br/wp-content/uploads/2025/05/cropped-logo-padrao-seeb-300.png`. A marca usa roxo, magenta, azul-marinho, branco e o selo vertical vermelho da CUT. Ela deve ser exibida completa, preservando proporções e legibilidade, sobre fundo claro ou em uma cápsula branca quando posicionada no cabeçalho escuro.

**Cor de assinatura:** dourado editorial quente, usado em linhas, etiquetas e microdetalhes, sempre subordinado à identidade oficial do sindicato.

## Conteúdo e comportamento

A primeira edição deve reproduzir o conteúdo visível da referência de 02/09/2026, incluindo Termômetro Econômico, matéria principal, quatro notícias do dia e sete edições anteriores. Os links externos devem abrir em nova aba. “Imprimir” deve chamar a impressão do navegador; “Compartilhar” deve usar o compartilhamento nativo quando disponível e copiar o endereço como alternativa; “Atualizar” deve atualizar os dados visuais; a navegação pelas edições deve refletir o parâmetro `date` da URL.

## Identidade e endereço da nova publicação

O endereço sugerido para a nova publicação é **focar-economico-guarulhos.manus.space**. O projeto deve ser entregue com essa nomenclatura pronta para publicação, permitindo ajuste do prefixo no painel caso o sindicato prefira outra forma.

Ativos institucionais permanentes do projeto:

- Logotipo oficial do Sindicato dos Bancários de Guarulhos e Região: `/manus-storage/logo-bancarios-guarulhos_3eb39fce.png`
- Logotipo Manfrin Advogados: `/manus-storage/logo-manfrin-advogados_e4de40b5.png`
- Logotipo Grupo Focar: `/manus-storage/logo-grupo-focar_820462ed.png`
- Favicon oficial: `/favicon.jpg`

## Responsividade

No desktop, o miolo mantém largura editorial controlada, a matéria principal permanece centralizada e as notícias secundárias aparecem em quatro colunas. Em telas menores, os controles devem quebrar sem sobreposição, o termômetro deve permitir rolagem horizontal ou reorganização clara, os cartões de notícias devem empilhar e os blocos de edições anteriores devem preservar legibilidade e área de toque.

## Proporções observadas no desktop

Na referência aberta em aproximadamente 893 × 768 px, o cabeçalho completo até a faixa do termômetro ocupa cerca de 185 px de altura. O cartão principal tem largura próxima de 500 px e começa com amplo respiro superior dentro de uma área geral de conteúdo que quase alcança as bordas da janela. A imagem principal usa proporção panorâmica e ocupa toda a largura do cartão; o bloco textual abaixo usa cerca de 16–20 px de margem interna. O título “Mais Notícias do Dia” aparece alinhado à esquerda acima de uma linha divisória fina, e os quatro cartões secundários dividem uniformemente a largura útil com pequenos vãos entre eles.

As notícias secundárias usam quatro cartões brancos, cada um com uma barra superior de metadados, imagem 4:3, manchete em serifa escura, resumo compacto e chamada “LER MATÉRIA” em vermelho. A seção de arquivo aparece depois de um respiro generoso e de um título centralizado com ponto vermelho; no desktop, mostra seis cartões estreitos na primeira linha e o sétimo no início da segunda. As miniaturas têm data sobreposta no canto inferior esquerdo, manchete truncada em duas linhas e uma faixa inferior com quantidade de notícias e veículo em caixa alta. O rodapé escuro começa imediatamente após o arquivo.

## Style Decisions

A validação final confirmou a preservação integral do sistema editorial definido: cabeçalho institucional escuro, termômetro econômico com filetes dourados, cartão principal centralizado, grade de quatro notícias, arquivo de seis colunas e rodapé sóbrio. No celular, as notícias passam para uma coluna, o arquivo para duas colunas e o termômetro conserva os quatro indicadores sem comprometer a leitura.
