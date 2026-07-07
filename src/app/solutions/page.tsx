import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SolutionsGrid } from "@/components/sections/SolutionsGrid";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { localServices } from "@/data/localServices";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Explore Microware Communications solutions including CCTV installation, computers, custom software, custom websites, enterprise networking, server solutions, managed IT services, and IT AMC services.",
  alternates: {
    canonical: "/solutions"
  }
};

export default function SolutionsPage() {
  return (
    <>
      <section className="section border-b border-border">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Solutions"
              level="h1"
              title="Technology capabilities for organizations that value continuity."
              description="Microware Communications specifies, deploys, integrates, and supports solutions around real operational requirements, including experienced custom software and website development for organizations that need practical digital systems."
            />
          </Reveal>
        </div>
      </section>
      <SolutionsGrid />
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Service expertise"
              title="Explore Microware services in detail."
              description="Find focused information for computers, CCTV, networking, software, websites, cabling, servers, cloud, security, and AMC support."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {localServices.map((service) => (
              <Reveal key={service.slug}>
                <Link href={`/${service.slug}`} className="group block h-full">
                  <Card className="h-full">
                    <h2 className="text-lg font-semibold text-foreground">{service.title}</h2>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{service.hero}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      View service <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden />
                    </span>
                  </Card>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
