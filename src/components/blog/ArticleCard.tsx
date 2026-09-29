import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import type { Article } from "@/data/articles";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/conteudos/${article.slug}`}
      className="group flex h-full flex-col rounded-lg border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-[var(--shadow-lifted)]"
    >
      <span className="inline-flex w-fit rounded-full bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-dark">
        {article.category}
      </span>
      <h3 className="mt-4 font-display text-xl font-semibold text-primary">
        {article.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">
        {article.excerpt}
      </p>
      <div className="mt-6 flex items-center justify-between text-xs text-text-muted">
        <span>
          {formatDate(article.date)} · {article.readingTime}
        </span>
        <ArrowRightIcon className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
