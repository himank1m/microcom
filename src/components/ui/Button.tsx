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
    "bg-primary text-white shadow-none hover:-translate-y-px hover:bg-primary/90 active:translate-y-0",
  secondary:
    "border border-border bg-card text-foreground hover:-translate-y-px hover:border-primary/35 hover:bg-muted active:translate-y-0 dark:border-white/18 dark:text-foreground dark:hover:bg-white/5",
  ghost: "text-foreground hover:bg-muted active:scale-[0.99]"
};

export function Button({ variant = "primary", className, children, ...props }: LinkProps | NativeButtonProps) {
  const classes = cn(
    "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
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
