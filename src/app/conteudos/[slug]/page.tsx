import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
import { Section, Eyebrow } from "@/components/ui/Section";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { articles, getArticleBySlug, getRelatedArticles } from "@/data/articles";
import { company, siteUrl } from "@/data/company";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata(props: PageProps<"/conteudos/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return pageMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/conteudos/${article.slug}`,
  });
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default async function ArticlePage(props: PageProps<"/conteudos/[slug]">) {
  const { slug } = await props.params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getRelatedArticles(article);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    author: { "@type": "Organization", name: company.name },
    publisher: { "@type": "Organization", name: company.name },
    mainEntityOfPage: `${siteUrl}/conteudos/${article.slug}`,
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <PageHeader
        eyebrow={article.category}
        title={article.title}
        description={`${formatDate(article.date)} · ${article.readingTime}`}
        breadcrumb={[
          { label: "Início", href: "/" },
          { label: "Conteúdos", href: "/conteudos" },
          { label: article.title },
        ]}
      />

      <Section tone="default">
        <article className="prose-content mx-auto max-w-2xl">
          {article.content.map((block, index) => {
            if (block.type === "h2") {
              return (
                <h2
                  key={index}
                  className="mt-10 font-display text-2xl font-bold text-primary first:mt-0"
                >
                  {block.text}
                </h2>
              );
            }
            if (block.type === "ul") {
              return (
                <ul key={index} className="mt-4 list-disc space-y-2 pl-5">
                  {block.items.map((item) => (
                    <li key={item} className="text-base leading-relaxed text-text">
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={index} className="mt-4 text-base leading-relaxed text-text">
                {block.text}
              </p>
            );
          })}
        </article>
      </Section>

      {related.length > 0 && (
        <Section tone="surface">
          <Eyebrow>Continue lendo</Eyebrow>
          <h2 className="mt-4 font-display text-2xl font-bold text-primary">
            Artigos relacionados
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <ArticleCard key={item.slug} article={item} />
            ))}
          </div>
        </Section>
      )}

      <CTASection />
    </>
  );
}
