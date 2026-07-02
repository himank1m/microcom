import Image from "next/image";
import { CalendarCheck, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-primary/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(241,245,249,0.94))] dark:bg-[linear-gradient(135deg,hsl(var(--background)),hsl(216_42%_13%))]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-16 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="container grid min-h-[calc(100vh-5rem)] items-center gap-12 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:py-20">
        <Reveal>
          <p className="mb-5 inline-flex rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Enterprise technology solutions in Jammu
          </p>
          <h1 className="max-w-3xl text-balance text-5xl font-semibold leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
            Enterprise Technology Built Around Reliability.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">
            From surveillance and enterprise networking to mission-critical infrastructure and custom software,
            Microware Communications delivers technology solutions trusted by organizations for over 25 years.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={`tel:${site.phone.replace(/\s/g, "")}`}>
              <Phone className="size-4" aria-hidden />
              Call Us
            </Button>
            <Button href="/contact" variant="secondary">
              <CalendarCheck className="size-4" aria-hidden />
              Schedule a Site Assessment
            </Button>
          </div>
        </Reveal>
        <Reveal className="relative">
          <div className="absolute -left-6 top-8 h-24 w-1 rounded-full bg-accent" />
          <div className="absolute -right-4 bottom-10 h-32 w-1 rounded-full bg-primary/70" />
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-primary/15 bg-card shadow-[0_28px_70px_rgba(9,30,58,0.16)] dark:shadow-subtle-dark">
            <Image
              src="/images/enterprise-technology-hero.png"
              alt="Abstract enterprise infrastructure composition representing surveillance, networking, servers, displays, and software systems"
              fill
              priority
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-accent/10" />
            <div className="absolute bottom-5 left-5 right-5 grid gap-2 rounded-md border border-white/20 bg-white/88 p-4 shadow-lg backdrop-blur dark:bg-primary/88 sm:grid-cols-3">
              {["Networking", "Surveillance", "Infrastructure"].map((item) => (
                <span key={item} className="text-xs font-semibold uppercase tracking-[0.14em] text-primary dark:text-white">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
