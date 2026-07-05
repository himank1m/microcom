import { cn } from "@/lib/utils";

type BrandWordmarkProps = {
  className?: string;
  markClassName?: string;
  size?: "header" | "footer";
};

export function BrandWordmark({ className, markClassName, size = "header" }: BrandWordmarkProps) {
  const isFooter = size === "footer";

  return (
    <span
      className={cn(
        "relative inline-grid w-fit grid-cols-[auto_auto] items-baseline font-semibold leading-none tracking-[-0.035em]",
        isFooter ? "text-[1.8rem]" : "text-[1.58rem] sm:text-[1.65rem]",
        className
      )}
    >
      <span className="text-foreground">Micro</span>
      <span className="text-primary">ware</span>
      <svg
        viewBox="0 0 48 42"
        className={cn(
          "pointer-events-none absolute left-1/2 h-6 w-8 -translate-x-1/2 text-primary",
          isFooter ? "-top-[1.32rem]" : "-top-[1.18rem]",
          markClassName
        )}
        fill="none"
        aria-hidden="true"
      >
        <path d="M6 13.8C15.8 4.8 32.2 4.8 42 13.8" stroke="currentColor" strokeWidth="6.2" strokeLinecap="round" />
        <path d="M13.2 23C19.2 17.4 28.8 17.4 34.8 23" stroke="currentColor" strokeWidth="6.2" strokeLinecap="round" />
        <path d="M20 31C22.4 28.9 25.6 28.9 28 31" stroke="currentColor" strokeWidth="6.2" strokeLinecap="round" />
        <circle cx="24" cy="38" r="3.8" fill="currentColor" />
      </svg>
    </span>
  );
}
