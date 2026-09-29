import { ChevronDownIcon } from "@/components/icons";
import type { FaqItem } from "@/data/faq";

export function Accordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-border rounded-lg border border-border bg-background">
      {items.map((item) => (
        <details key={item.question} className="group px-5 py-4 sm:px-6 sm:py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold text-primary marker:content-none sm:text-lg">
            {item.question}
            <ChevronDownIcon className="h-5 w-5 shrink-0 text-accent-dark transition-transform duration-200 group-open:rotate-180" />
          </summary>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-text-muted sm:text-base">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
