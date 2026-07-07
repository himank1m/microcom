import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import type { LocalServicePage } from "@/data/localServices";

type LocalServiceLandingProps = {
  relatedServices: LocalServicePage[];
  service: LocalServicePage;
};

export function LocalServiceLanding({ relatedServices, service }: LocalServiceLandingProps) {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-background">
        <div className="hero-ambient" aria-hidden />
        <div className="container grid gap-12 py-16 lg:grid-cols-[1fr_0.82fr] lg:items-center lg:py-24">
          <Reveal>
            <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-muted-foreground" aria-label="Breadcrumb">
              <Link href="/" className="transition hover:text-primary">Home</Link>
              <span aria-hidden>/</span>
              <Link href="/solutions" className="transition hover:text-primary">Solutions</Link>
              <span aria-hidden>/</span>
              <span className="text-foreground">{service.title}</span>
            </nav>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Service expertise</p>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">{service.title}</h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">{service.hero}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">Schedule a Meeting</Button>
              <Button href="/industries" variant="secondary">Industries Served</Button>
            </div>
          </Reveal>
          <Reveal>
            <div className="relative overflow-hidden rounded-lg border border-border bg-card shadow-[0_28px_90px_rgba(0,0,0,0.08)] dark:shadow-[0_28px_90px_rgba(0,0,0,0.32)]">
              <div className="aspect-[4/3]">
                <Image
                  src="/images/enterprise-technology-hero.png"
                  alt={`${service.title} by Microware Communications`}
                  fill
                  quality={62}
                  sizes="(min-width: 1024px) 38vw, calc(100vw - 2rem)"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/55 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Overview</p>
              <h2 className="mt-3 text-3xl font-semibold text-foreground">Professional {service.title.toLowerCase()} for organizations.</h2>
            </div>
          </Reveal>
          <Reveal>
            <div className="space-y-5 text-base leading-8 text-muted-foreground">
              <p>{service.intro}</p>
              {service.overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-muted/45 dark:bg-background">
        <div className="container">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">What is included</p>
              <h2 className="mt-3 text-3xl font-semibold text-foreground">Services included in this solution</h2>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.included.map((item) => (
              <Reveal key={item}>
                <Card className="flex h-full gap-3 p-5">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                  <h3 className="text-base font-semibold text-foreground">{item}</h3>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-2">
          <Reveal>
            <Card className="h-full">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Why choose Microware Communications</p>
              <h2 className="mt-3 text-3xl font-semibold text-foreground">Experienced technology partner</h2>
              <p className="mt-5 text-base leading-7 text-muted-foreground">
                Microware Communications brings 25+ years of practical IT, infrastructure, surveillance, software, and support experience to organizations that need dependable guidance before and after deployment.
              </p>
              <div className="mt-8 grid gap-3">
                {service.benefits.map((benefit) => (
                  <div key={benefit} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
          <Reveal>
            <Card className="h-full">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Industries served</p>
              <h2 className="mt-3 text-3xl font-semibold text-foreground">Built for real operating environments</h2>
              <div className="mt-8 grid gap-3">
                {service.industries.map((industry) => (
                  <h3 key={industry} className="rounded-md border border-border bg-background px-4 py-3 text-sm font-semibold text-foreground">
                    {industry}
                  </h3>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="section bg-muted/45 dark:bg-background">
        <div className="container">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Process</p>
              <h2 className="mt-3 text-3xl font-semibold text-foreground">Step-by-step implementation process</h2>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {service.process.map((step, index) => (
              <Reveal key={step}>
                <Card className="h-full">
                  <p className="text-sm font-semibold text-primary">Step {index + 1}</p>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{step}</h3>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">FAQ</p>
              <h2 className="mt-3 text-3xl font-semibold text-foreground">Frequently asked questions</h2>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {service.faqs.map((faq) => (
              <Reveal key={faq.question}>
                <Card className="h-full p-6">
                  <h3 className="text-base font-semibold text-foreground">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{faq.answer}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-muted/45 dark:bg-background">
        <div className="container">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Related services</p>
              <h2 className="mt-3 text-3xl font-semibold text-foreground">Explore connected Microware capabilities</h2>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {relatedServices.map((related) => (
              <Reveal key={related.slug}>
                <Link href={`/${related.slug}`} className="group block h-full">
                  <Card className="h-full">
                    <h3 className="text-lg font-semibold text-foreground">{related.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{related.hero}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      View service <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden />
                    </span>
                  </Card>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-12 rounded-lg border border-border bg-card p-8 text-center">
              <h2 className="text-3xl font-semibold text-foreground">Need {service.title.toLowerCase()}?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
                Speak with Microware Communications about your requirement, current setup, and the most practical next step.
              </p>
              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <Button href="/contact">Schedule a Meeting</Button>
                <Button href="/about" variant="secondary">About Microware</Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
