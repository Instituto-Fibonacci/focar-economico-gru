# Otimização do fluxo diário — 07/09/2026

## Resultado

O caminho automático foi reduzido a coleta de feeds, filtro programático, leitura dos metadados das melhores pautas, seleção determinística, armazenamento das imagens, consulta dos indicadores e publicação no banco. A chamada de modelo de linguagem foi removida do processamento diário; títulos, resumos e categorias passam a ser compostos a partir de metadados jornalísticos já validados.

| Componente | Antes | Depois | Redução |
| --- | ---: | ---: | ---: |
| Feeds e buscas consultados | 11 | 7 | 36% |
| Limite de pautas preliminares | 60 | 18 | 70% |
| Limite de páginas enriquecidas | 16 | 10 | 38% |
| Pautas enviadas para redação | até 14 | 5 selecionadas por regra | 64% |
| Tokens de modelo no teste | 7.146 | 0 | 100% |
| Chamadas de IA por edição | 1 | 0 | 100% |
| Histórico carregado para deduplicação | completo | últimas 30 edições | limitado |
| Validação editorial repetida | em `check` e `build` | uma vez em `verify` | 50% |

## Medição integrada

O teste completo com sete feeds, dez candidatos enriquecidos, cinco imagens armazenadas e quatro indicadores terminou em **15.518 ms**, dentro do limite de dois minutos do agendamento HTTP. A coleta simples terminou em **10.947 ms**. Os sete testes automatizados e a tipagem passaram sem erros.

## Agendamento final

A rotina agente, que repetia pesquisa, navegação, redação, testes e publicação, foi desativada. Em seu lugar, foi ativado um único agendamento HTTP para `10:00 UTC`, equivalente a **07:00 de Brasília**, que chama o algoritmo interno otimizado. O próximo disparo está registrado para `2026-09-08T10:00:00Z`. Quando a edição do dia já existe, o processo encerra antes de consultar feeds, imagens, indicadores ou qualquer modelo.

## Proteções preservadas

Permanecem ativos o bloqueio de fontes sindicais e pautas eleitorais, a exigência de cinco links e cinco imagens distintos, a maior pontuação na manchete, a nota mínima de 70 pontos, a diversidade de fontes, a deduplicação com o histórico e o encerramento imediato quando a edição do dia já existe.
