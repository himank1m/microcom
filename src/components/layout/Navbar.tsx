"use client";

import Link from "next/link";
import Image from "next/image";
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
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-white/90 shadow-[0_8px_30px_rgba(9,30,58,0.06)] backdrop-blur-xl dark:bg-background/88">
      <nav className="container flex min-h-20 items-center justify-between gap-4" aria-label="Main navigation">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-md" onClick={() => setOpen(false)}>
          <span className="relative flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-md border border-primary/10 bg-white shadow-sm">
            <Image
              src="/images/microware-logo.png"
              alt="Microware Communications logo"
              fill
              sizes="48px"
              className="object-contain p-1"
              priority
            />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold text-primary">Microware Communications</span>
            <span className="block text-xs font-medium text-accent">Look No Further</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "focus-ring rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-primary",
                pathname === item.href && "bg-accent/8 text-primary"
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
            className="focus-ring inline-flex size-10 items-center justify-center rounded-md bg-accent text-white shadow-[0_10px_24px_hsl(var(--accent)/0.28)]"
            aria-label="Call Microware Communications"
          >
            <Phone className="size-4" aria-hidden />
          </a>
          <ThemeToggle />
          <button
            type="button"
            className="focus-ring inline-flex size-10 items-center justify-center rounded-md border border-primary/15 bg-white text-primary dark:bg-card dark:text-foreground"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-primary/10 bg-white lg:hidden dark:bg-background">
          <div className="container grid gap-1 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "focus-ring rounded-md px-3 py-3 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-primary",
                  pathname === item.href && "bg-accent/8 text-primary"
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
