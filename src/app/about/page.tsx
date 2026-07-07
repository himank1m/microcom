import type { Metadata } from "next";
import { Approach } from "@/components/sections/Approach";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ServiceLinksBand } from "@/components/sections/ServiceLinksBand";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Why Microware",
  description:
    "Learn why organizations choose Microware Communications, an enterprise technology solutions partner with over 25 years of experience.",
  alternates: {
    canonical: "/about"
  }
};

export default function AboutPage() {
  return (
    <>
      <section className="section border-b border-border">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeading
              eyebrow="About Microware"
              level="h1"
              title="Why Organizations Choose Microware"
              description="Microware Communications is an enterprise technology solutions partner delivering reliable IT, surveillance, infrastructure, and software solutions for serious organizations."
            />
          </Reveal>
          <Reveal>
            <div className="space-y-5 text-base leading-8 text-muted-foreground">
              <p>
                For more than 25 years, Microware Communications has supported organizations that need dependable technology infrastructure and a professional service environment.
              </p>
              <p>
                The work spans enterprise IT, CCTV, computers, surveillance, networking, servers, custom software, custom websites, managed services, and AMC support. The orientation is serious and practical: understand the environment, specify carefully, deploy with discipline, and remain available after installation.
              </p>
              <p>
                Reliability is the brand promise. Attention to detail is the working philosophy. Consistency in service, communication, and design is what helps organizations trust Microware with long-term technology requirements.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      <Approach />
      <ServiceLinksBand
        eyebrow="Experience across services"
        title="Technology areas Microware supports every day."
        description="From computers and CCTV to software, websites, networks, servers, and AMC support, Microware brings practical experience across the systems organizations depend on."
        serviceSlugs={[
          "enterprise-it-solutions-jammu",
          "computer-dealer-jammu",
          "cctv-installation-jammu",
          "software-solutions-jammu",
          "it-infrastructure-jammu",
          "annual-maintenance-contract-jammu",
          "cloud-solutions-jammu",
          "cyber-security-jammu"
        ]}
      />
      <FinalCTA />
    </>
  );
}
