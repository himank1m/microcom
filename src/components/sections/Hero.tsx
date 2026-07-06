import Image from "next/image";
import { CalendarCheck, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div className="hero-ambient" aria-hidden />
      <div className="container flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center gap-12 py-16 text-center lg:py-20">
        <div className="hero-copy mx-auto max-w-4xl">
          <p className="hero-enter mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Enterprise technology solutions
          </p>
          <h1 className="hero-enter text-balance text-5xl font-semibold leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
            Technology infrastructure, Calmly delivered.
          </h1>
          <p className="hero-enter mx-auto mt-6 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">
            Microware Communications builds reliable CCTV, computers, networking, custom software, custom websites, server, Wi-Fi, and support systems with 25+ years of practical technology experience.
          </p>
          <div className="hero-enter mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={`tel:${site.phone.replace(/\s/g, "")}`}>
              <Phone className="size-4" aria-hidden />
              Call Us
            </Button>
            <Button href="/contact" variant="secondary">
              <CalendarCheck className="size-4" aria-hidden />
              Schedule a Meeting
            </Button>
          </div>
        </div>
        <div className="hero-media w-full">
          <div className="group relative mx-auto aspect-[16/8] max-w-5xl overflow-hidden rounded-lg bg-muted">
            <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.008]">
              <Image
                src="/images/enterprise-technology-hero.png"
                alt="Abstract enterprise infrastructure composition representing surveillance, networking, servers, displays, and software systems"
                fill
                priority
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-transparent" />
            <div className="hero-sheen" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
