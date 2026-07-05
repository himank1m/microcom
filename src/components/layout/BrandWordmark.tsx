import { cn } from "@/lib/utils";

type BrandWordmarkProps = {
  className?: string;
  size?: "header" | "footer";
};

export function BrandWordmark({ className, size = "header" }: BrandWordmarkProps) {
  return (
    <svg
      viewBox="0 0 720 250"
      className={cn(size === "footer" ? "h-auto w-64" : "h-auto w-48 sm:w-56", className)}
      role="img"
      aria-label="Microware Communications - Secure Connect Support"
    >
      <defs>
        <filter id="brand-wordmark-soft-shadow" x="-8%" y="-20%" width="116%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="currentColor" floodOpacity="0.16" />
        </filter>
      </defs>
      <g className="text-foreground" filter="url(#brand-wordmark-soft-shadow)">
        <text
          x="38"
          y="118"
          fill="currentColor"
          fontFamily="Arial Black, Arial, Helvetica, sans-serif"
          fontSize="88"
          fontWeight="900"
          lengthAdjust="spacingAndGlyphs"
          textLength="300"
        >
          MICRO
        </text>
        <text
          x="407"
          y="118"
          fill="currentColor"
          fontFamily="Arial Black, Arial, Helvetica, sans-serif"
          fontSize="88"
          fontWeight="900"
          lengthAdjust="spacingAndGlyphs"
          textLength="278"
        >
          WARE
        </text>
      </g>

      <g fill="none" strokeLinecap="round" strokeWidth="10">
        <path d="M308 35C338 10 382 10 412 35" className="stroke-accent" />
        <path d="M323 55C344 38 376 38 397 55" className="stroke-blue-950 dark:stroke-red-500" />
        <path d="M337 75C350 65 370 65 383 75" className="stroke-accent" />
        <path d="M350 93C356 88 364 88 370 93" className="stroke-foreground" />
      </g>
      <circle cx="360" cy="111" r="8.5" className="fill-foreground" />

      <g className="text-accent">
        <line x1="45" y1="164" x2="122" y2="164" stroke="currentColor" strokeWidth="3" />
        <line x1="598" y1="164" x2="675" y2="164" stroke="currentColor" strokeWidth="3" />
        <text
          x="360"
          y="176"
          textAnchor="middle"
          fill="currentColor"
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="38"
          fontWeight="700"
          letterSpacing="22"
        >
          COMMUNICATIONS
        </text>
      </g>

      <g className="text-foreground">
        <text
          x="160"
          y="230"
          textAnchor="middle"
          fill="currentColor"
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="30"
          fontWeight="400"
          letterSpacing="15"
        >
          SECURE
        </text>
        <circle cx="250" cy="219" r="5.5" className="fill-blue-950 dark:fill-red-500" />
        <text
          x="360"
          y="230"
          textAnchor="middle"
          fill="currentColor"
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="30"
          fontWeight="400"
          letterSpacing="15"
        >
          CONNECT
        </text>
        <circle cx="470" cy="219" r="5.5" className="fill-accent" />
        <text
          x="585"
          y="230"
          textAnchor="middle"
          fill="currentColor"
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="30"
          fontWeight="400"
          letterSpacing="15"
        >
          SUPPORT
        </text>
      </g>
    </svg>
  );
}
