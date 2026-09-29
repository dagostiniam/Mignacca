import { Section, Eyebrow } from "@/components/ui/Section";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <Section tone="default">
      <Eyebrow>Depoimentos</Eyebrow>
      <h2 className="balance mt-4 max-w-2xl font-display text-3xl font-bold text-primary sm:text-4xl">
        Quem confia na Mignacca
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </Section>
  );
}
