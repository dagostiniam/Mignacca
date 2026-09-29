import { Container } from "@/components/ui/Container";
import { company, isPlaceholder, resolveText } from "@/data/company";
import { services } from "@/data/services";

const items = [
  { value: company.yearsOfExperience, label: "Anos de experiência" },
  { value: company.clientsServed, label: "Empresas atendidas" },
  { value: String(services.length), label: "Áreas de atuação" },
];

export function TrustBar() {
  return (
    <section className="border-b border-border bg-background">
      <Container className="grid grid-cols-3 gap-4 py-10 sm:gap-8">
        {items.map((item) => {
          const placeholder = isPlaceholder(item.value);
          return (
            <div key={item.label} className="text-center sm:text-left">
              <p className="font-display text-2xl font-bold text-primary sm:text-3xl">
                {resolveText(item.value)}
                {placeholder && <span className="ml-1 text-sm text-accent-dark">*</span>}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-text-muted sm:text-sm">
                {item.label}
              </p>
            </div>
          );
        })}
      </Container>
      {items.some((item) => isPlaceholder(item.value)) && (
        <Container className="pb-6">
          <p className="text-xs text-text-muted">
            * Dado a confirmar pela empresa antes da publicação.
          </p>
        </Container>
      )}
    </section>
  );
}
