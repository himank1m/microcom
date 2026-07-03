import Image from "next/image";
import { CalendarCheck, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div className="container flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center gap-12 py-16 text-center lg:py-20">
        <Reveal className="mx-auto max-w-4xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Enterprise technology solutions in Jammu
          </p>
          <h1 className="text-balance text-5xl font-semibold leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
            Technology infrastructure, calmly delivered.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">
            Microware Communications builds reliable networking, surveillance, access control, server, Wi-Fi, and support systems for serious operating environments.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
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
        <Reveal className="w-full">
          <div className="group relative mx-auto aspect-[16/8] max-w-5xl overflow-hidden rounded-lg bg-muted">
            <Image
              src="/images/enterprise-technology-hero.png"
              alt="Abstract enterprise infrastructure composition representing surveillance, networking, servers, displays, and software systems"
              fill
              priority
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.015]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
