import Image from "next/image";
import { CalendarCheck, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/utils";

export function Hero() {
  return (
    <section className="overflow-hidden border-b border-border/70">
      <div className="container grid min-h-[calc(100vh-5rem)] items-center gap-12 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:py-20">
        <Reveal>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Enterprise technology solutions in Jammu</p>
          <h1 className="max-w-3xl text-balance text-5xl font-semibold leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
            Enterprise Technology Built Around Reliability.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">
            From surveillance and enterprise networking to mission-critical infrastructure and custom software,
            Microware Communication delivers technology solutions trusted by organizations for over 25 years.
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
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-card shadow-subtle dark:shadow-subtle-dark">
            <Image
              src="/images/enterprise-technology-hero.png"
              alt="Abstract enterprise infrastructure composition representing surveillance, networking, servers, displays, and software systems"
              fill
              priority
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/30 via-transparent to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
