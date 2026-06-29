import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-card p-6 text-card-foreground shadow-subtle transition duration-200 hover:-translate-y-1 hover:border-accent/45 dark:shadow-subtle-dark",
        className
      )}
      {...props}
    />
  );
}
