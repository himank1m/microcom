import Link from "next/link";
import { site } from "@/lib/utils";
import { solutions } from "@/data/solutions";

const quickLinks = [
  ["Home", "/"],
  ["Solutions", "/solutions"],
  ["Industries", "/industries"],
  ["About", "/about"],
  ["Partners", "/partners"],
  ["Contact", "/contact"]
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-white text-foreground dark:bg-black dark:text-white">
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="container grid gap-10 py-14 md:grid-cols-[1.3fr_0.7fr_1fr]">
        <div>
          <div className="inline-flex flex-col">
            <span className="relative inline-flex items-baseline text-[1.8rem] font-semibold leading-none tracking-[-0.035em]">
              <span className="absolute left-[4.72rem] top-[-0.58rem] -translate-x-1/2 text-red-500/90">
                <span className="relative block h-3.5 w-5">
                  <span className="absolute inset-x-0 top-0 mx-auto h-2.5 w-5 rounded-t-full border-x-[1.5px] border-t-[1.5px] border-current" />
                  <span className="absolute inset-x-0 top-1.5 mx-auto h-1.5 w-3 rounded-t-full border-x-[1.5px] border-t-[1.5px] border-current" />
                  <span className="absolute inset-x-0 bottom-0 mx-auto size-1 rounded-full bg-current" />
                </span>
              </span>
              <span className="text-foreground dark:text-white">Micro</span>
              <span className="text-primary">ware</span>
            </span>
            <span className="mt-2 text-[0.65rem] font-medium uppercase tracking-[0.24em] text-muted-foreground">
              Communications
            </span>
            <span className="mt-2 text-sm font-semibold text-accent">Secure. Connect. Support.</span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-6 text-muted-foreground">
            Enterprise technology solutions built around reliability.
          </p>
          <div className="mt-6 space-y-2 text-sm text-muted-foreground">
            <p>{site.phone}</p>
            <p>{site.email}</p>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground dark:text-white">Quick Links</p>
          <div className="mt-4 grid gap-2">
            {quickLinks.map(([label, href]) => (
              <Link key={href} href={href} className="text-sm text-muted-foreground transition hover:text-primary">
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground dark:text-white">Solutions</p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
            {solutions.slice(0, 8).map((solution) => (
              <Link key={solution.title} href="/solutions" className="text-sm text-muted-foreground transition hover:text-primary">
                {solution.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border py-5">
        <div className="container flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Microware Communications. All rights reserved.</p>
          <p className="text-accent">Made with love by Himank Magotra.</p>
        </div>
      </div>
    </footer>
  );
}
