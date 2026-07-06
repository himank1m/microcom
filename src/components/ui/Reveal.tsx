import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("content-reveal", className)}>{children}</div>;
}
