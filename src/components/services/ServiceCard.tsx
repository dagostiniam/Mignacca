import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { ArrowRightIcon, LedgerIcon, ReceiptIcon, PeopleIcon, CompassIcon, RocketIcon, ShieldIcon } from "@/components/icons";
import type { Service, ServiceIcon } from "@/data/services";

const iconMap: Record<ServiceIcon, typeof LedgerIcon> = {
  ledger: LedgerIcon,
  receipt: ReceiptIcon,
  people: PeopleIcon,
  compass: CompassIcon,
  rocket: RocketIcon,
  shield: ShieldIcon,
};

export function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon];

  return (
    <Card hoverable className="flex h-full flex-col">
      <div className="flex h-11 w-11 items-center justify-center rounded-md bg-surface text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-5 font-display text-xl font-semibold text-primary">
        {service.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">
        {service.shortDescription}
      </p>
      <Link
        href={`/servicos/${service.slug}`}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent-dark"
      >
        Saiba mais
        <ArrowRightIcon className="h-4 w-4" />
      </Link>
    </Card>
  );
}
