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
        viewBox="0 0 28 24"
        className={cn(
          "pointer-events-none absolute left-1/2 h-5 w-7 -translate-x-1/2 text-primary",
          isFooter ? "-top-[0.92rem]" : "-top-[0.84rem]",
          markClassName
        )}
        fill="none"
        aria-hidden="true"
      >
        <path d="M2.8 8.8C8.9 3.1 19.1 3.1 25.2 8.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M7.1 13.1C10.9 9.7 17.1 9.7 20.9 13.1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M11 17C12.7 15.6 15.3 15.6 17 17" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <circle cx="14" cy="20.4" r="1.55" fill="currentColor" />
      </svg>
    </span>
  );
}
