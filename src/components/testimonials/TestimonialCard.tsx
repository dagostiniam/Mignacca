import type { Testimonial } from "@/data/testimonials";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex h-full flex-col rounded-lg border border-border bg-background p-7">
      <svg aria-hidden viewBox="0 0 32 24" className="h-6 w-8 fill-accent-light">
        <path d="M0 24V13.6C0 6.4 4.8 1.2 12.8 0l1.6 3.6C8.8 5.2 6.4 8.4 6 12.8h6.8V24H0Zm17.6 0V13.6c0-7.2 4.8-12.4 12.8-13.6l1.6 3.6c-5.6 1.6-8 4.8-8.4 9.2H30V24H17.6Z" />
      </svg>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-text">
        {testimonial.quote}
      </p>
      <div className="mt-6 border-t border-border pt-4">
        <p className="text-sm font-semibold text-primary">{testimonial.name}</p>
        <p className="text-xs text-text-muted">
          {testimonial.role} · {testimonial.company}
        </p>
      </div>
    </div>
  );
}
