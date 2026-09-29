import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHeader } from "@/components/PageHeader";
import { ArticlesCatalog } from "@/components/blog/ArticlesCatalog";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Conteúdos sobre contabilidade e gestão",
  description:
    "Artigos sobre contabilidade, impostos, Simples Nacional e gestão para pequenas e médias empresas.",
  path: "/conteudos",
});

export default function ConteudosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Conteúdos"
        title="Contabilidade e gestão em linguagem simples"
        description="Artigos para ajudar você a entender melhor a contabilidade, os impostos e a gestão financeira da sua empresa."
        breadcrumb={[{ label: "Início", href: "/" }, { label: "Conteúdos" }]}
      />
      <Suspense>
        <ArticlesCatalog />
      </Suspense>
    </>
  );
}
