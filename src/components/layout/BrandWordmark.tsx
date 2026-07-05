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
        <path d="M3.8 16.4C10.6 7 27.4 7 34.2 16.4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        <path d="M9.2 18C13.8 12.6 24.2 12.6 28.8 18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        <path d="M14.7 19.5C16.6 17.7 21.4 17.7 23.3 19.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        <circle cx="19" cy="22.4" r="1.55" fill="currentColor" />
      </svg>
    </span>
  );
}
