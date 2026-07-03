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
    <footer className="border-t border-primary/20 bg-primary text-white">
      <div className="h-1 bg-gradient-to-r from-accent via-blue-500 to-slate-300" />
      <div className="container grid gap-10 py-14 md:grid-cols-[1.3fr_0.7fr_1fr]">
        <div>
          <div className="inline-flex flex-col leading-none">
            <span className="relative inline-block text-[1.9rem] font-black tracking-tight">
              <span className="absolute left-1/2 top-[-10px] flex -translate-x-1/2 flex-col items-center gap-px text-red-500/90">
                <span className="h-1.5 w-4 rounded-t-full border-x border-t border-current" />
                <span className="h-1 w-2.5 rounded-t-full border-x border-t border-current" />
                <span className="size-1 rounded-full bg-current" />
              </span>
              <span className="text-white">Micro</span>
              <span className="text-blue-400">ware</span>
            </span>
            <span className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.3em] text-slate-300">
              Communications
            </span>
            <span className="mt-2 text-sm font-semibold text-accent">{site.tagline}</span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-6 text-slate-300">
            Enterprise technology solutions built around reliability.
          </p>
          <div className="mt-6 space-y-2 text-sm text-slate-300">
            <p>{site.phone}</p>
            <p>{site.email}</p>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Quick Links</p>
          <div className="mt-4 grid gap-2">
            {quickLinks.map(([label, href]) => (
              <Link key={href} href={href} className="text-sm text-slate-300 transition hover:text-accent">
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Solutions</p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
            {solutions.slice(0, 8).map((solution) => (
              <Link key={solution.title} href="/solutions" className="text-sm text-slate-300 transition hover:text-accent">
                {solution.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container flex flex-col gap-2 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Microware Communications. All rights reserved.</p>
          <p className="text-accent">Made with love by Himank Magotra.</p>
        </div>
      </div>
    </footer>
  );
}
