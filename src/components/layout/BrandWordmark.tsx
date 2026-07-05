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
        viewBox="0 0 38 25"
        className={cn(
          "pointer-events-none absolute left-1/2 h-5 w-9 -translate-x-1/2 text-primary",
          isFooter ? "-top-[0.94rem]" : "-top-[0.86rem]",
          markClassName
        )}
        fill="none"
        aria-hidden="true"
      >
        <path d="M3 9.4C11.5 2.4 26.5 2.4 35 9.4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        <path d="M8.4 14.2C14 9.9 24 9.9 29.6 14.2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        <path d="M13.8 18.4C16.4 16.6 21.6 16.6 24.2 18.4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        <circle cx="19" cy="21.8" r="1.55" fill="currentColor" />
      </svg>
    </span>
  );
}
