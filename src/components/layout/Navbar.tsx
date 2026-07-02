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
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/86 backdrop-blur-xl">
      <nav className="container flex min-h-20 items-center justify-between gap-4" aria-label="Main navigation">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-md" onClick={() => setOpen(false)}>
          <span className="flex size-10 items-center justify-center rounded-md bg-primary text-sm font-semibold text-primary-foreground">
            MC
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold text-foreground">Microware Communications</span>
            <span className="block text-xs text-muted-foreground">Look No Further</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "focus-ring rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground",
                pathname === item.href && "text-foreground"
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
            className="focus-ring inline-flex size-10 items-center justify-center rounded-md bg-primary text-primary-foreground"
            aria-label="Call Microware Communications"
          >
            <Phone className="size-4" aria-hidden />
          </a>
          <ThemeToggle />
          <button
            type="button"
            className="focus-ring inline-flex size-10 items-center justify-center rounded-md border border-border bg-card"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container grid gap-1 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "focus-ring rounded-md px-3 py-3 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground",
                  pathname === item.href && "bg-muted text-foreground"
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
