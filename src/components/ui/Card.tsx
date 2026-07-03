import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border/85 bg-card p-6 text-card-foreground shadow-subtle transition duration-200 hover:-translate-y-1 hover:border-primary/45 hover:shadow-[0_18px_48px_hsl(var(--primary)/0.1)] dark:shadow-subtle-dark",
        className
      )}
      {...props}
    />
  );
}
