# Focar Econômico: Supabase + Vercel

O site foi adaptado a partir do código exportado do Manus. O layout editorial permanece no React original; a fonte de dados da edição passa a ser a tabela `public.editions` do Supabase.

## Variáveis no Vercel

Cadastre:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

Use a URL e a chave pública `anon` do projeto Supabase. Não coloque `service_role` no frontend.

## Dados esperados

O site consulta:

`public.editions` → `id`, `display_date`, `payload`, `status`

O `payload` atual do n8n pode conter:

```json
{
  "date": "2026-09-12",
  "title": "Foco Econômico",
  "articles": []
}
```

Cada artigo pode usar `source_id`, `subject`, `title`, `url`, `published_at`, `description` e `image_url`.

A primeira notícia do payload vira a manchete. As demais aparecem em “Mais Notícias do Dia”.

## RLS

Se o Supabase estiver com RLS habilitado na tabela `editions`, crie uma política de leitura pública somente para as edições que o site pode exibir. Como o fluxo atual usa `draft`, a política precisa permitir `draft` durante a fase de validação.

Exemplo:

```sql
create policy "public can read non-failed editions"
on public.editions
for select
to anon
using (status <> 'failed');
```

## Imagens

As imagens do cabeçalho e rodapé ainda apontam temporariamente para o armazenamento público do Manus. Isso é intencional nesta etapa: o Manus permanece ativo enquanto validamos o novo site. Depois de confirmar a migração, os ativos podem ser copiados para o Supabase Storage e os endereços atualizados.
