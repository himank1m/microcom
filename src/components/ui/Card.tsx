import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border/70 bg-card p-8 text-card-foreground shadow-none transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_24px_70px_rgba(0,0,0,0.07)] dark:bg-card dark:hover:shadow-[0_24px_70px_rgba(0,0,0,0.28)]",
        className
      )}
      {...props}
    />
  );
}
