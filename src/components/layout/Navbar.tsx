import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { site } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/partners", label: "Partners" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-white/82 shadow-[0_1px_0_rgba(0,0,0,0.03)] backdrop-blur-xl dark:bg-black/82 dark:shadow-[0_1px_0_rgba(244,63,94,0.1)]">
      <nav className="container flex min-h-24 items-center justify-between gap-3 sm:min-h-20 sm:gap-4" aria-label="Main navigation">
        <Link
          href="/"
          className="focus-ring group flex items-center rounded-md py-2"
          aria-label="Microware Communications - Look No Further"
        >
          <span className="relative inline-flex flex-col leading-none">
            <span className="relative inline-flex items-baseline text-[1.58rem] font-semibold tracking-[-0.035em] sm:text-[1.65rem]">
              <span className="absolute left-[4.38rem] top-[-0.52rem] hidden -translate-x-1/2 text-primary/90 transition duration-500 group-hover:-translate-y-0.5 group-hover:text-primary sm:block">
                <span className="relative block h-3.5 w-5">
                  <span className="absolute inset-x-0 top-0 mx-auto h-2.5 w-5 rounded-t-full border-x-[1.5px] border-t-[1.5px] border-current" />
                  <span className="absolute inset-x-0 top-1.5 mx-auto h-1.5 w-3 rounded-t-full border-x-[1.5px] border-t-[1.5px] border-current" />
                  <span className="absolute inset-x-0 bottom-0 mx-auto size-1 rounded-full bg-current" />
                </span>
              </span>
              <span className="text-foreground">Micro</span>
              <span className="text-primary">ware</span>
            </span>
            <span className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground sm:text-[0.62rem] sm:font-medium sm:tracking-[0.22em]">
              Communications
            </span>
            <span className="mt-1 text-[0.64rem] font-medium tracking-[0.04em] text-primary/90 sm:text-[0.6rem] sm:tracking-[0.08em]">
              Secure. Connect. Support.
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:bg-primary/10 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href={`tel:${site.phone.replace(/\s/g, "")}`} className="px-4">
            <Phone className="size-4" aria-hidden />
            Call Us
          </Button>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            className="focus-ring inline-flex size-10 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-[0_10px_24px_hsl(var(--primary)/0.22)]"
            aria-label="Call Microware Communications"
          >
            <Phone className="size-4" aria-hidden />
          </a>
          <ThemeToggle />
          <details className="mobile-menu-details">
            <summary
              className="focus-ring inline-flex size-10 cursor-pointer list-none items-center justify-center rounded-md border border-border bg-card text-foreground"
              aria-label="Toggle menu"
            >
              <Menu className="size-5" aria-hidden />
            </summary>
            <div className="mobile-menu-panel absolute inset-x-0 top-full border-t border-border bg-white dark:bg-black">
              <div className="container grid gap-1 py-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="focus-ring block rounded-md px-3 py-3 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </details>
        </div>
      </nav>
    </header>
  );
}
