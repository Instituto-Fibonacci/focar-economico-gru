/*
 * Direção visual: clipping econômico institucional inspirado em jornal impresso,
 * com serifa clássica, carvão, dourado e vermelho editorial; interações discretas.
 */
import React from "react";
import { CalendarDays, Printer, RefreshCw, Share2 } from "lucide-react";
import { toast } from "sonner";
import editionsData from "./editions.json";
import fallbackEditions from "./editions.json";
import { supabase } from "@/lib/supabase";

type Indicator = { label: string; value: string; detail: string };
type Article = {
  source: string;
  category: string;
  time: string;
  title: string;
  summary: string;
  url: string;
  image: string;
  relevanceScore?: number;
  publishedAt?: string;
};
type Edition = {
  id: string;
  displayDate: string;
  indicators: Indicator[];
  main: Article;
  articles: Article[];
};
const fallbackEditions = editionsData as Edition[];

const categoryTone: Record<string, string> = {
  Tecnologia: "tone-red",
  Trabalho: "tone-blue",
  Crédito: "tone-copper",
  Bancos: "tone-violet",
  Economia: "tone-green",
};

function formatArchiveDate(id: string) {
  const [year, month, day] = id.split("-");
  const months = ["JAN.", "FEV.", "MAR.", "ABR.", "MAI.", "JUN.", "JUL.", "AGO.", "SET.", "OUT.", "NOV.", "DEZ."];
  return `${Number(day)} ${months[Number(month) - 1]} ${year}`;
}

function safeImage(event: React.SyntheticEvent<HTMLImageElement>) {
  event.currentTarget.style.opacity = "0";
}

function Masthead({ edition }: { edition: Edition }) {
  const share = async () => {
    const shareData = {
      title: `Focar Econômico — ${edition.displayDate}`,
      text: edition.main.title,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast.success("Endereço copiado para a área de transferência.");
      }
    } catch (error) {
      if ((error as DOMException).name !== "AbortError") {
        toast.error("Não foi possível compartilhar agora.");
      }
    }
  };

  return (
    <>
      <header className="masthead">
        <div className="masthead-actions" aria-label="Ações da edição">
          <button type="button" onClick={() => window.print()}>
            <Printer aria-hidden="true" />
            <span>Imprimir</span>
          </button>
          <button type="button" onClick={share}>
            <Share2 aria-hidden="true" />
            <span>Compartilhar</span>
          </button>
        </div>

        <a
          className="union-logo-wrap"
          href="https://www.bancariosdeguarulhos.com.br/"
          target="_blank"
          rel="noreferrer"
          aria-label="Visitar o Sindicato dos Bancários de Guarulhos e Região"
        >
          <img
            className="union-logo"
            src="/manus-storage/logo-bancarios-guarulhos_3eb39fce.png"
            alt="Sindicato dos Bancários de Guarulhos e Região"
          />
        </a>

        <h1>Focar Econômico</h1>
        <p>Clipping diário do sistema financeiro</p>
        <time dateTime={edition.id}>
          <CalendarDays aria-hidden="true" /> {edition.displayDate}
        </time>
      </header>

      <section className="economic-strip" aria-label="Termômetro econômico">
        <div className="economic-inner">
          <h2><span aria-hidden="true">◆</span> Termômetro Econômico</h2>
          <div className="indicator-list">
            {edition.indicators.map((indicator) => (
              <div className="indicator" key={indicator.label}>
                <span>{indicator.label}</span>
                <strong>{indicator.value}</strong>
                <small>{indicator.detail}</small>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function EditionToolbar({ isLatest }: { isLatest: boolean }) {
  return (
    <nav className="edition-toolbar" aria-label="Navegação da edição">
      <a href="/" className={isLatest ? "active" : ""}>Hoje</a>
      <button type="button" onClick={() => window.location.reload()}>
        <RefreshCw aria-hidden="true" /> Atualizar
      </button>
    </nav>
  );
}

function LeadStory({ article }: { article: Article }) {
  return (
    <article className="lead-card">
      <div className="lead-image-wrap">
        <img src={article.image} alt={article.title} onError={safeImage} />
        <div className="lead-kicker">
          <span aria-hidden="true">☆</span> {article.category || "Destaque do dia"} <i>•</i> {article.source}
        </div>
      </div>
      <div className="lead-copy">
        <h2>{article.title}</h2>
        <p>{article.summary}</p>
        <footer>
          <a href={article.url} target="_blank" rel="noreferrer">Leia a matéria completa</a>
          <time>{article.time}</time>
        </footer>
      </div>
    </article>
  );
}

function NewsCard({ article, index }: { article: Article; index: number }) {
  return (
    <article className="news-card">
      <div className="news-meta">
        <strong>{index + 1}</strong>
        <span>{article.source}</span>
        <b className={categoryTone[article.category] || "tone-green"}>{article.category}</b>
        <time>{article.time}</time>
      </div>
      <div className="news-image-wrap">
        <img src={article.image} alt={article.title} loading="lazy" onError={safeImage} />
      </div>
      <div className="news-copy">
        <h3>{article.title}</h3>
        <p>{article.summary}</p>
        <a href={article.url} target="_blank" rel="noreferrer">Ler matéria</a>
      </div>
    </article>
  );
}

function ArchiveCard({ edition }: { edition: Edition }) {
  return (
    <a className="archive-card" href={`/?date=${edition.id}`} aria-label={`Abrir edição de ${edition.displayDate}`}>
      <div className="archive-image-wrap">
        <img src={edition.main.image} alt="" loading="lazy" onError={safeImage} />
        <time dateTime={edition.id}>{formatArchiveDate(edition.id)}</time>
      </div>
      <h3>{edition.main.title}</h3>
      <footer>
        <span>{edition.articles.length + 1} notícias</span>
        <strong>{edition.main.source}</strong>
      </footer>
    </a>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <h2>Focar Econômico</h2>
        <p>Clipping Bancário &amp; Sindical</p>
      </div>
      <div className="footer-partners">
        <div>
          <span>Produzido por</span>
          <img src="/manus-storage/logo-manfrin-advogados_e4de40b5.png" alt="Manfrin Advogados" />
        </div>
        <div>
          <span>Apoio</span>
          <img src="/manus-storage/logo-grupo-focar_820462ed.png" alt="Grupo Focar" />
        </div>
      </div>
      <p className="footer-note">Conteúdo de caráter informativo. As matérias permanecem vinculadas às fontes originais.</p>
    </footer>
  );
}

function sourceName(sourceId: unknown) {
  const map: Record<string, string> = { "1": "Poder360", "2": "Seu Dinheiro", "3": "InfoMoney", "4": "G1" };
  return map[String(sourceId)] || "Fonte";
}

function formatTime(value: unknown) {
  if (!value) return "";
  const date = new Date(String(value));
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("pt-BR", { hour: "2-digit", minute: "2-digit", timeZone: "America/Sao_Paulo" }).format(date);
}

function formatDisplayDate(id: string) {
  const [year, month, day] = id.split("-");
  return year && month && day ? `${day}/${month}/${year}` : id;
}

function mapSupabaseEdition(row: any): Edition {
  const payload = typeof row.payload === "string" ? JSON.parse(row.payload) : row.payload || {};
  const rawArticles = Array.isArray(payload.articles) ? payload.articles : [];
  const articles: Article[] = rawArticles.map((a: any) => ({
    source: a.source || sourceName(a.source_id),
    category: a.category || a.subject || "Economia",
    time: a.time || formatTime(a.published_at),
    relevanceScore: Number(a.relevanceScore ?? a.score ?? 0),
    title: a.title || "",
    summary: a.summary || a.description || "",
    url: a.url || "#",
    image: a.image || a.image_url || fallbackEditions[0]?.main.image || "",
    publishedAt: a.publishedAt || a.published_at,
  }));
  const fallback = fallbackEditions[0];
  const date = row.display_date || payload.date || fallback.id;
  const main = articles[0] || fallback.main;
  return { id: date, displayDate: formatDisplayDate(date), indicators: fallback.indicators, main, articles: articles.slice(1) };
}

export default function Home() {
  const [editions, setEditions] = React.useState<Edition[]>(fallbackEditions);

  React.useEffect(() => {
    let cancelled = false;
    async function load() {
      if (!supabase) return;
      const { data, error } = await supabase.from("editions").select("id, display_date, payload, status").order("display_date", { ascending: false });
      if (!cancelled && !error && data?.length) setEditions(data.map(mapSupabaseEdition));
    }
    load();
    return () => { cancelled = true; };
  }, []);

  const latestEdition = editions[0];
  const requestedDate = new URLSearchParams(window.location.search).get("date");
  const edition = editions.find((item) => item.id === requestedDate) || latestEdition;
  const archive = editions.filter((item) => item.id !== edition.id);

  return (
    <div className="site-frame">
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Masthead edition={edition} />
      <EditionToolbar isLatest={edition.id === latestEdition.id} />

      <main id="conteudo" className="editorial-main">
        <LeadStory article={edition.main} />

        <section className="news-section" aria-labelledby="mais-noticias">
          <div className="section-heading section-heading-left">
            <h2 id="mais-noticias">Mais Notícias do Dia</h2>
            <span />
          </div>
          <div className="news-grid">
            {edition.articles.map((article, index) => (
              <NewsCard article={article} index={index} key={`${edition.id}-${index}-${article.title}`} />
            ))}
          </div>
        </section>

        <section className="archive-section" aria-labelledby="edicoes-anteriores">
          <div className="section-heading section-heading-center">
            <span />
            <h2 id="edicoes-anteriores"><i aria-hidden="true" /> Edições Anteriores</h2>
            <span />
          </div>
          <div className="archive-grid">
            {archive.map((item) => <ArchiveCard edition={item} key={item.id} />)}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
