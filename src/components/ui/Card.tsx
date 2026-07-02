import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border/85 bg-gradient-to-br from-card via-card to-muted/35 p-6 text-card-foreground shadow-subtle transition duration-200 hover:-translate-y-1 hover:border-accent/55 hover:shadow-[0_18px_48px_hsl(var(--primary)/0.1)] dark:shadow-subtle-dark",
        className
      )}
      {...props}
    />
  );
}
