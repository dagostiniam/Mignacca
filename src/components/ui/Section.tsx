import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  tone?: "default" | "surface" | "primary";
}

const toneClasses: Record<NonNullable<SectionProps["tone"]>, string> = {
  default: "bg-background",
  surface: "bg-surface",
  primary: "bg-primary text-text-on-primary",
};

export function Section({
  as: Tag = "section",
  children,
  className,
  containerClassName,
  tone = "default",
}: SectionProps) {
  return (
    <Tag className={cn("py-16 sm:py-20 lg:py-24", toneClasses[tone], className)}>
      <Container className={containerClassName}>{children}</Container>
    </Tag>
  );
}

export function Eyebrow({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "dark" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]",
        tone === "light" ? "text-accent-dark" : "text-accent-light",
      )}
    >
      <span className="h-px w-6 bg-current" />
      {children}
    </span>
  );
}
