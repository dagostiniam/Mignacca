import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui/Section";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { SearchIcon } from "@/components/icons";
import { pageMetadata } from "@/lib/metadata";
import { articles, categories } from "@/data/articles";
import { cn } from "@/lib/utils";

export const metadata: Metadata = pageMetadata({
  title: "Conteúdos sobre contabilidade e gestão",
  description:
    "Artigos sobre contabilidade, impostos, Simples Nacional e gestão para pequenas e médias empresas.",
  path: "/conteudos",
});

export default async function ConteudosPage(props: PageProps<"/conteudos">) {
  const params = await props.searchParams;
  const query = typeof params.q === "string" ? params.q.toLowerCase() : "";
  const category = typeof params.categoria === "string" ? params.categoria : undefined;

  const filtered = articles.filter((article) => {
    const matchesQuery =
      !query ||
      article.title.toLowerCase().includes(query) ||
      article.excerpt.toLowerCase().includes(query);
    const matchesCategory = !category || article.category === category;
    return matchesQuery && matchesCategory;
  });

  return (
    <>
      <PageHeader
        eyebrow="Conteúdos"
        title="Contabilidade e gestão em linguagem simples"
        description="Artigos para ajudar você a entender melhor a contabilidade, os impostos e a gestão financeira da sua empresa."
        breadcrumb={[{ label: "Início", href: "/" }, { label: "Conteúdos" }]}
      />

      <Section tone="default" className="pb-0!">
        <form method="GET" className="relative max-w-md">
          <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
          <input
            type="search"
            name="q"
            defaultValue={query}
            placeholder="Buscar por assunto..."
            className="w-full rounded-md border border-border bg-background py-3 pl-11 pr-4 text-sm text-text placeholder:text-text-muted focus:border-primary focus:outline-none"
          />
          {category && <input type="hidden" name="categoria" value={category} />}
        </form>

        <div className="mt-6 flex flex-wrap gap-2">
          <Link
            href="/conteudos"
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
              !category
                ? "border-primary bg-primary text-text-on-primary"
                : "border-border text-text-muted hover:border-primary hover:text-primary",
            )}
          >
            Todos
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/conteudos?categoria=${encodeURIComponent(cat)}`}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                category === cat
                  ? "border-primary bg-primary text-text-on-primary"
                  : "border-border text-text-muted hover:border-primary hover:text-primary",
              )}
            >
              {cat}
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="default">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <p className="text-text-muted">
            Nenhum conteúdo encontrado para essa busca. Tente outro termo ou
            categoria.
          </p>
        )}
      </Section>
    </>
  );
}
