import Link from "next/link";
import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type CommonProps = {
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  children: ReactNode;
};

type LinkProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

const styles = {
  primary:
    "bg-accent text-white shadow-[0_14px_30px_hsl(var(--accent)/0.26)] hover:-translate-y-0.5 hover:bg-accent/92 hover:shadow-[0_18px_36px_hsl(var(--accent)/0.32)]",
  secondary:
    "border border-primary/25 bg-card text-primary hover:-translate-y-0.5 hover:border-accent/60 hover:bg-accent/5 dark:border-white/18 dark:text-foreground dark:hover:bg-white/5",
  ghost: "text-foreground hover:bg-muted"
};

export function Button({ variant = "primary", className, children, ...props }: LinkProps | NativeButtonProps) {
  const classes = cn(
    "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition duration-200",
    styles[variant],
    className
  );

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
