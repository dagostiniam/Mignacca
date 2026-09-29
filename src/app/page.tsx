import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Differentials } from "@/components/sections/Differentials";
import { Audiences } from "@/components/sections/Audiences";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { AboutPreview } from "@/components/sections/AboutPreview";
// Depoimentos reais ainda não foram fornecidos — seção desativada até então.
// Para reativar: descomente este import e a linha <Testimonials /> abaixo,
// e preencha os depoimentos reais em src/data/testimonials.ts.
// import { Testimonials } from "@/components/sections/Testimonials";
import { FAQPreview } from "@/components/sections/FAQPreview";
import { CTASection } from "@/components/sections/CTASection";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Contabilidade em Belo Horizonte para pequenas e médias empresas",
  description:
    "Escritório de contabilidade em Belo Horizonte com atendimento próximo. Contabilidade, fiscal, departamento pessoal, abertura de empresa e consultoria tributária.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <Differentials />
      <Audiences />
      <HowItWorks />
      <AboutPreview />
      {/* <Testimonials /> — desativado até termos depoimentos reais, ver nota no import acima */}
      <FAQPreview />
      <CTASection />
    </>
  );
}
