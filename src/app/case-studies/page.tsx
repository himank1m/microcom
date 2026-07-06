import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Clock3, MapPin } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { caseStudies } from "@/data/caseStudies";
import { absoluteUrl, baseUrl } from "@/lib/seo";
import { site } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Recent Projects & Case Studies",
  description:
    "Explore selected Microware Communications project stories across CCTV, networking, EPABX, biometric attendance, servers, Wi-Fi, and access control in Jammu.",
  alternates: {
    canonical: "/case-studies"
  },
  openGraph: {
    title: "Recent Projects & Case Studies | Microware Communications",
    description:
      "Selected Microware Communications project stories across enterprise IT, surveillance, networking, servers, and access control in Jammu.",
    url: absoluteUrl("/case-studies"),
    siteName: site.name,
    images: [
      {
        url: absoluteUrl("/images/enterprise-technology-hero.png"),
        width: 1200,
        height: 900,
        alt: "Microware Communications recent projects and case studies"
      }
    ],
    locale: "en_IN",
    type: "website"
  }
};

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${absoluteUrl("/case-studies")}#collection`,
  name: "Recent Projects & Case Studies",
  description:
    "Selected Microware Communications project stories across CCTV, networking, EPABX, biometric attendance, servers, Wi-Fi, and access control.",
  url: absoluteUrl("/case-studies"),
  publisher: {
    "@id": `${baseUrl}/#organization`
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: caseStudies.map((caseStudy, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: caseStudy.title,
      url: absoluteUrl(`/case-studies/${caseStudy.slug}`)
    }))
  }
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-background">
        <div className="hero-ambient" aria-hidden />
        <div className="container py-16 lg:py-24">
          <Reveal>
            <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-muted-foreground" aria-label="Breadcrumb">
              <Link href="/" className="transition hover:text-primary">Home</Link>
              <span aria-hidden>/</span>
              <span className="text-foreground">Case Studies</span>
            </nav>
            <SectionHeading
              eyebrow="Recent Projects"
              title="Practical technology work delivered for real operating environments."
              description="Selected project stories from Jammu and Northern India, showing how Microware Communications approaches infrastructure, security, communication, and support requirements with clarity."
            />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <Reveal key={caseStudy.slug}>
              <Link href={`/case-studies/${caseStudy.slug}`} className="group block h-full">
                <Card className="flex h-full flex-col">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    <Building2 className="size-4" aria-hidden />
                    {caseStudy.industry}
                  </div>
                  <h2 className="mt-5 text-xl font-semibold text-foreground">{caseStudy.shortTitle}</h2>
                  <p className="mt-4 flex-1 text-sm leading-6 text-muted-foreground">{caseStudy.summary}</p>
                  <div className="mt-6 grid gap-2 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-2">
                      <MapPin className="size-4 text-primary" aria-hidden />
                      {caseStudy.location}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Clock3 className="size-4 text-primary" aria-hidden />
                      {caseStudy.timeline}
                    </span>
                  </div>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Read case study <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden />
                  </span>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionJsonLd).replace(/</g, "\\u003c")
        }}
      />
    </>
  );
}
