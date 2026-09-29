import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "whatsapp";
type Size = "md" | "lg" | "sm";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-primary text-text-on-primary hover:bg-primary-light focus-visible:bg-primary-light",
  secondary:
    "bg-accent text-primary-dark hover:bg-accent-dark hover:text-text-on-primary",
  outline:
    "border border-current bg-transparent text-primary hover:bg-primary hover:text-text-on-primary",
  ghost: "bg-transparent text-primary hover:bg-surface-alt",
  whatsapp: "bg-[#25D366] text-white hover:bg-[#1fb958]",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-sm sm:text-base",
  lg: "px-7 py-4 text-base sm:text-lg",
};

const shared =
  "inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors duration-200 whitespace-nowrap disabled:opacity-50 disabled:pointer-events-none";

interface CommonProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

interface ButtonAsButton
  extends CommonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  href?: undefined;
}

interface ButtonAsLink extends CommonProps {
  href: string;
  external?: boolean;
  onClick?: () => void;
}

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = "primary", size = "md", children, className, icon } = props;
  const classes = cn(shared, variantClasses[variant], sizeClasses[size], className);

  if ("href" in props && props.href) {
    const { href, external, onClick } = props;
    if (external || href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel")) {
      return (
        <a
          href={href}
          className={classes}
          onClick={onClick}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {children}
          {icon}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
        {icon}
      </Link>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- stripped so they aren't spread onto the DOM node
  const { variant: _variant, size: _size, children: _c, className: _cn, icon: _icon, type = "button", ...rest } =
    props as ButtonAsButton;

  return (
    <button type={type} className={classes} {...rest}>
      {children}
      {icon}
    </button>
  );
}
