import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Clock3, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { caseStudies, getCaseStudy } from "@/data/caseStudies";
import { getLocalService, localServices } from "@/data/localServices";
import { absoluteUrl, baseUrl } from "@/lib/seo";
import { site } from "@/lib/utils";

type CaseStudyPageProps = {
  params: Promise<{ caseStudySlug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({
    caseStudySlug: caseStudy.slug
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { caseStudySlug } = await params;
  const caseStudy = getCaseStudy(caseStudySlug);

  if (!caseStudy) {
    return {};
  }

  const url = absoluteUrl(`/case-studies/${caseStudy.slug}`);

  return {
    title: caseStudy.metaTitle,
    description: caseStudy.metaDescription,
    alternates: {
      canonical: `/case-studies/${caseStudy.slug}`
    },
    openGraph: {
      title: caseStudy.metaTitle,
      description: caseStudy.metaDescription,
      url,
      siteName: site.name,
      images: [
        {
          url: absoluteUrl("/images/enterprise-technology-hero.png"),
          width: 1200,
          height: 900,
          alt: `${caseStudy.shortTitle} by ${site.name}`
        }
      ],
      locale: "en_IN",
      type: "article"
    },
    twitter: {
      card: "summary_large_image",
      title: caseStudy.metaTitle,
      description: caseStudy.metaDescription,
      images: [absoluteUrl("/images/enterprise-technology-hero.png")]
    }
  };
}

function createJsonLd(caseStudy: NonNullable<ReturnType<typeof getCaseStudy>>) {
  const caseStudyUrl = absoluteUrl(`/case-studies/${caseStudy.slug}`);

  return [
    {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": `${baseUrl}/#localbusiness`,
      name: site.name,
      url: baseUrl,
      email: site.email,
      telephone: `+91${site.phone}`,
      image: absoluteUrl("/images/enterprise-technology-hero.png"),
      areaServed: ["Jammu", "Jammu & Kashmir", "Northern India"],
      priceRange: "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${caseStudyUrl}#case-study`,
      headline: caseStudy.title,
      description: caseStudy.metaDescription,
      url: caseStudyUrl,
      image: absoluteUrl("/images/enterprise-technology-hero.png"),
      author: {
        "@id": `${baseUrl}/#organization`
      },
      publisher: {
        "@id": `${baseUrl}/#organization`
      },
      about: caseStudy.relatedServices.map((slug) => {
        const service = getLocalService(slug);

        return {
          "@type": "Service",
          name: service?.title ?? slug,
          url: absoluteUrl(`/${slug}`)
        };
      }),
      inLanguage: "en-IN"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${caseStudyUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: baseUrl
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Case Studies",
          item: absoluteUrl("/case-studies")
        },
        {
          "@type": "ListItem",
          position: 3,
          name: caseStudy.shortTitle,
          item: caseStudyUrl
        }
      ]
    }
  ];
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { caseStudySlug } = await params;
  const caseStudy = getCaseStudy(caseStudySlug);

  if (!caseStudy) {
    notFound();
  }

  const relatedServices = caseStudy.relatedServices
    .map((slug) => getLocalService(slug))
    .filter(Boolean) as typeof localServices;

  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-background">
        <div className="hero-ambient" aria-hidden />
        <div className="container py-16 lg:py-24">
          <Reveal>
            <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-muted-foreground" aria-label="Breadcrumb">
              <Link href="/" className="transition hover:text-primary">Home</Link>
              <span aria-hidden>/</span>
              <Link href="/case-studies" className="transition hover:text-primary">Case Studies</Link>
              <span aria-hidden>/</span>
              <span className="text-foreground">{caseStudy.shortTitle}</span>
            </nav>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">{caseStudy.industry}</p>
            <h1 className="max-w-5xl text-balance text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              {caseStudy.title}
            </h1>
            <p className="mt-6 max-w-3xl text-pretty text-lg leading-8 text-muted-foreground">{caseStudy.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2">
                <MapPin className="size-4 text-primary" aria-hidden />
                {caseStudy.location}
              </span>
              <span className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2">
                <Clock3 className="size-4 text-primary" aria-hidden />
                {caseStudy.timeline}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-6 lg:grid-cols-3">
          {[
            ["Problem", caseStudy.problem],
            ["Solution Provided", caseStudy.solution],
            ["Outcome", caseStudy.outcome]
          ].map(([label, value]) => (
            <Reveal key={label}>
              <Card className="h-full">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{label}</p>
                <p className="mt-4 text-base leading-7 text-muted-foreground">{value}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section bg-muted/45 dark:bg-background">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Technologies Used</p>
              <h2 className="mt-3 text-3xl font-semibold text-foreground">A practical stack selected for reliability.</h2>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {caseStudy.technologies.map((technology) => (
              <Reveal key={technology}>
                <Card className="flex gap-3 p-5">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                  <h3 className="text-base font-semibold text-foreground">{technology}</h3>
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
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Project Impact</p>
              <h2 className="mt-3 text-3xl font-semibold text-foreground">What changed after implementation</h2>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {caseStudy.metrics.map((metric) => (
              <Reveal key={metric}>
                <Card className="h-full">
                  <CheckCircle2 className="size-5 text-primary" aria-hidden />
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{metric}</h3>
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
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Related Services</p>
              <h2 className="mt-3 text-3xl font-semibold text-foreground">Microware capabilities connected to this work</h2>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {relatedServices.map((service) => (
              <Reveal key={service.slug}>
                <Link href={`/${service.slug}`} className="group block h-full">
                  <Card className="h-full">
                    <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{service.hero}</p>
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
              <h2 className="text-3xl font-semibold text-foreground">Planning a similar requirement?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
                Talk to Microware Communications about the site, existing setup, timeline, and support expectations before you commit to a technology plan.
              </p>
              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <Button href="/contact">Schedule a Meeting</Button>
                <Button href="/solutions" variant="secondary">Explore Solutions</Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(createJsonLd(caseStudy)).replace(/</g, "\\u003c")
        }}
      />
    </>
  );
}
