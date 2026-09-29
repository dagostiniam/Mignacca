import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Breadcrumb, type Crumb } from "@/components/Breadcrumb";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumb: Crumb[];
  children?: ReactNode;
}

export function PageHeader({ eyebrow, title, description, breadcrumb, children }: PageHeaderProps) {
  return (
    <section className="border-b border-border bg-primary text-text-on-primary">
      <Container className="py-14 sm:py-16">
        <div className="text-text-on-primary/60">
          <Breadcrumb items={breadcrumb} />
        </div>
        {eyebrow && (
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-accent-light">
            {eyebrow}
          </p>
        )}
        <h1 className="balance mt-3 max-w-3xl font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-on-primary/75 sm:text-lg">
            {description}
          </p>
        )}
        {children}
      </Container>
    </section>
  );
}
