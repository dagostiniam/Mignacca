import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { company } from "@/data/company";
import mark from "../../public/logo/mark.png";

interface LogoProps {
  variant?: "header" | "footer";
  inverted?: boolean;
  className?: string;
}

/**
 * The mark (public/logo/mark.png) was extracted from the brand's own header
 * artwork and is colored for use on LIGHT backgrounds only — the business
 * card shows a white/gold inverted version for dark backgrounds that we
 * don't have as a standalone file yet. Until that's provided, the icon only
 * renders in the non-inverted (light-background) variant; the footer keeps
 * the typographic wordmark alone rather than showing a low-contrast mark.
 */
export function Logo({ variant = "header", inverted = false, className }: LogoProps) {
  const isFooter = variant === "footer";

  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-3", className)}
      aria-label={`${company.name} — página inicial`}
    >
      {!inverted && (
        <Image
          src={mark}
          alt=""
          priority
          className={isFooter ? "h-14 w-auto" : "h-12 w-auto"}
        />
      )}
      <span className="inline-flex flex-col leading-none">
        <span
          className={cn(
            "font-display font-bold tracking-[0.08em]",
            isFooter ? "text-4xl" : "text-3xl",
            inverted ? "text-text-on-primary" : "text-primary",
          )}
        >
          MIGNACCA
        </span>
        {isFooter && (
          <span
            className={cn(
              "mt-2 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em]",
              inverted ? "text-accent-light" : "text-accent-dark",
            )}
          >
            <span className="h-px w-4 bg-current opacity-70" />
            Assessoria · Consultoria · Contabilidade
          </span>
        )}
      </span>
    </Link>
  );
}
