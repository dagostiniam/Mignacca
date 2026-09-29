import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

export function Card({ as: Tag = "div", children, className, hoverable = false }: CardProps) {
  return (
    <Tag
      className={cn(
        "rounded-lg border border-border bg-background p-6 shadow-[var(--shadow-soft)]",
        hoverable &&
          "transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lifted)] hover:border-border-strong",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-border-strong bg-surface px-3 py-1 text-xs font-medium text-text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
