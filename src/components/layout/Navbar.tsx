"use client";

import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn, site } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/partners", label: "Partners" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-white/82 shadow-[0_1px_0_rgba(0,0,0,0.03)] backdrop-blur-xl dark:bg-black/82 dark:shadow-[0_1px_0_rgba(255,255,255,0.04)]">
      <nav className="container flex min-h-20 items-center justify-between gap-4" aria-label="Main navigation">
        <Link
          href="/"
          className="focus-ring flex min-w-[172px] items-center rounded-md py-2"
          aria-label="Microware Communications - Look No Further"
          onClick={() => setOpen(false)}
        >
          <span className="relative block leading-none">
            <span className="absolute left-1/2 top-[-9px] flex -translate-x-1/2 flex-col items-center gap-px text-red-500/90">
              <span className="h-1.5 w-4 rounded-t-full border-x border-t border-current" />
              <span className="h-1 w-2.5 rounded-t-full border-x border-t border-current" />
              <span className="size-1 rounded-full bg-current" />
            </span>
            <span className="block text-[1.55rem] font-black tracking-tight sm:text-[1.85rem]">
              <span className="text-foreground">Micro</span>
              <span className="text-blue-400">ware</span>
            </span>
            <span className="mt-0.5 block text-[0.58rem] font-bold uppercase tracking-[0.28em] text-muted-foreground sm:text-[0.64rem]">
              Communications
            </span>
            <span className="mt-1 block text-[0.7rem] font-semibold text-red-500 sm:text-xs">
              Look No Further
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "focus-ring rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-primary",
                "hover:bg-muted hover:text-foreground",
                pathname === item.href && "bg-primary/10 text-primary dark:text-white"
              )}
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
            className="focus-ring inline-flex size-10 items-center justify-center rounded-md bg-primary text-white shadow-[0_10px_24px_hsl(var(--primary)/0.22)]"
            aria-label="Call Microware Communications"
          >
            <Phone className="size-4" aria-hidden />
          </a>
          <ThemeToggle />
          <button
            type="button"
            className="focus-ring inline-flex size-10 items-center justify-center rounded-md border border-border bg-card text-foreground"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-border bg-white lg:hidden dark:bg-black">
          <div className="container grid gap-1 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "focus-ring rounded-md px-3 py-3 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-primary",
                  "hover:bg-muted hover:text-foreground",
                  pathname === item.href && "bg-primary/10 text-primary dark:text-white"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
