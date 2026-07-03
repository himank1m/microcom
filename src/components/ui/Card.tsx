import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border/70 bg-card p-8 text-card-foreground shadow-none transition duration-200 hover:-translate-y-0.5 hover:border-primary/35 dark:bg-card",
        className
      )}
      {...props}
    />
  );
}
