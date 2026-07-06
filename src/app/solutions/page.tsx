import type { Metadata } from "next";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SolutionsGrid } from "@/components/sections/SolutionsGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Explore Microware Communications solutions including CCTV installation, computers, custom software, custom websites, enterprise networking, server solutions, managed IT services, and IT AMC services in Jammu.",
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
              title="Technology capabilities for organizations that value continuity."
              description="Microware Communications specifies, deploys, integrates, and supports solutions around real operational requirements, including experienced custom software and website development for organizations that need practical digital systems."
            />
          </Reveal>
        </div>
      </section>
      <SolutionsGrid />
      <FinalCTA />
    </>
  );
}
