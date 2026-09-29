import type { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps) {
  return {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    ...props,
  };
}

export function LedgerIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 3.5h9.5L20 8v12.5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1Z" />
      <path d="M15 3.5V8h5" />
      <path d="M8.5 12h7M8.5 15h7M8.5 18h4" />
    </svg>
  );
}

export function ReceiptIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 3h12v18l-2.5-1.5L13 21l-2.5-1.5L8 21l-2-1.5V3Z" />
      <path d="M9 8h6M9 11.5h6M9 15h4" />
    </svg>
  );
}

export function PeopleIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
      <circle cx="17.5" cy="9.5" r="2.5" />
      <path d="M15.5 13.2a4.6 4.6 0 0 1 5 4.3" />
    </svg>
  );
}

export function CompassIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m14.8 9.2-1.9 4.7-4.7 1.9 1.9-4.7 4.7-1.9Z" />
    </svg>
  );
}

export function RocketIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 2.5c2.8 1.4 4.5 4.3 4.5 8 0 2-.6 3.8-1.6 5.3L12 18l-2.9-2.2c-1-1.5-1.6-3.3-1.6-5.3 0-3.7 1.7-6.6 4.5-8Z" />
      <circle cx="12" cy="9.5" r="1.7" />
      <path d="M9.3 15.5 7 17.8V21l3-1.3M14.7 15.5 17 17.8V21l-3-1.3" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3 5 5.5V11c0 4.6 3 7.9 7 9 4-1.1 7-4.4 7-9V5.5L12 3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6.2 3.5h2.7l1.4 4-2 1.5a11.5 11.5 0 0 0 5.7 5.7l1.5-2 4 1.4v2.7a1.5 1.5 0 0 1-1.6 1.5A16.5 16.5 0 0 1 4.7 5.1a1.5 1.5 0 0 1 1.5-1.6Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
      <path d="m4.5 6.5 7.5 6 7.5-6" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.45 1.34 4.94L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.5 0 9.96-4.46 9.96-9.96C22 6.46 17.54 2 12.04 2Zm5.84 14.06c-.25.7-1.24 1.28-2.03 1.45-.54.11-1.25.2-3.63-.78-2.87-1.19-4.71-4.06-4.85-4.25-.14-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.08 1-2.36.25-.28.55-.35.73-.35h.53c.17 0 .4-.06.62.48.25.6.85 2.08.92 2.23.07.15.12.32.02.51-.09.19-.14.31-.28.48-.14.16-.29.36-.42.49-.14.14-.29.29-.12.57.17.28.75 1.24 1.61 2.01 1.11 1 2.04 1.31 2.32 1.46.28.14.44.12.61-.07.17-.19.72-.83.91-1.12.19-.28.38-.23.63-.14.25.09 1.62.77 1.9.91.28.14.46.21.53.33.07.12.07.68-.18 1.39Z" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 21.5s7-6.4 7-12a7 7 0 1 0-14 0c0 5.6 7 12 7 12Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 6.5h16M4 12h16M4 17.5h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m5 5 14 14M19 5 5 19" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4.5 12h15M13 5.5l6.5 6.5-6.5 6.5" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m20 20-4.3-4.3" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="16.8" cy="7.2" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
      <path d="M8 10.5V17M8 7.6v.1M12.2 17v-3.8c0-1.3.9-2.2 2.1-2.2 1.2 0 1.9.9 1.9 2.2V17" />
    </svg>
  );
}

export function BarsUpIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 20V14M9.5 20V10M15 20V6M20 20v-9" />
      <path d="m16.5 5 3.5-1v3.5" />
    </svg>
  );
}
