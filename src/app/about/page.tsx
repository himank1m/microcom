import type { Metadata } from "next";
import { Approach } from "@/components/sections/Approach";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Why Microware",
  description:
    "Learn why organizations choose Microware Communications, an enterprise technology solutions partner based in Jammu with over 25 years of experience.",
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
              title="Why Organizations Choose Microware"
              description="Microware Communications is an enterprise technology solutions partner based in Jammu, delivering reliable IT, surveillance, infrastructure, and software solutions for organizations across Northern India."
            />
          </Reveal>
          <Reveal>
            <div className="space-y-5 text-base leading-8 text-muted-foreground">
              <p>
                For more than 25 years, Microware Communications has supported organizations that need dependable technology infrastructure and a professional service environment. The company is headquartered at 13/C Ext. Gandhi Nagar, Jammu, and works with clients across Northern India.
              </p>
              <p>
                The work spans enterprise IT, surveillance, networking, servers, software, managed services, and AMC support. The orientation is serious and practical: understand the environment, specify carefully, deploy with discipline, and remain available after installation.
              </p>
              <p>
                Reliability is the brand promise. Attention to detail is the working philosophy. Consistency in service, communication, and design is what helps organizations trust Microware with long-term technology requirements.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      <Approach />
      <FinalCTA />
    </>
  );
}
