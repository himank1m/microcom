"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
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
          className="focus-ring group flex items-center rounded-md py-2"
          aria-label="Microware Communications - Look No Further"
          onClick={() => setOpen(false)}
        >
          <span className="relative inline-flex flex-col leading-none">
            <span className="relative inline-flex items-baseline text-[1.45rem] font-semibold tracking-[-0.035em] sm:text-[1.65rem]">
              <span className="absolute left-[4.38rem] top-[-0.52rem] hidden -translate-x-1/2 text-red-500/90 transition duration-500 group-hover:-translate-y-0.5 group-hover:text-red-500 sm:block">
                <span className="relative block h-3.5 w-5">
                  <span className="absolute inset-x-0 top-0 mx-auto h-2.5 w-5 rounded-t-full border-x-[1.5px] border-t-[1.5px] border-current" />
                  <span className="absolute inset-x-0 top-1.5 mx-auto h-1.5 w-3 rounded-t-full border-x-[1.5px] border-t-[1.5px] border-current" />
                  <span className="absolute inset-x-0 bottom-0 mx-auto size-1 rounded-full bg-current" />
                </span>
              </span>
              <span className="text-foreground">Micro</span>
              <span className="text-primary">ware</span>
            </span>
            <span className="mt-1 text-[0.58rem] font-medium uppercase tracking-[0.22em] text-muted-foreground sm:text-[0.62rem]">
              Communications
            </span>
            <span className="mt-1 text-[0.55rem] font-medium tracking-[0.08em] text-red-500/90 sm:text-[0.6rem]">
              Secure. Connect. Support.
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "focus-ring relative rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground",
                pathname === item.href && "text-primary dark:text-white"
              )}
            >
              {pathname === item.href ? (
                <motion.span
                  layoutId="active-nav"
                  className="absolute inset-0 rounded-md bg-primary/10"
                  transition={{ type: "spring", stiffness: 420, damping: 34, mass: 0.7 }}
                  aria-hidden
                />
              ) : null}
              <span className="relative z-10">{item.label}</span>
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

      <AnimatePresence>
        {open ? (
        <motion.div
          className="border-t border-border bg-white lg:hidden dark:bg-black"
          initial={{ opacity: 0, y: -10, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -8, filter: "blur(8px)" }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="container grid gap-1 py-4">
            {navItems.map((item) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "focus-ring block rounded-md px-3 py-3 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground",
                    pathname === item.href && "bg-primary/10 text-primary dark:text-white"
                  )}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
