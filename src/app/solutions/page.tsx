import type { Metadata } from "next";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SolutionsGrid } from "@/components/sections/SolutionsGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Explore Microware Communication solutions including CCTV installation, enterprise networking, server solutions, custom software, managed IT services, and IT AMC services in Jammu."
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
              description="Microware Communication specifies, deploys, integrates, and supports solutions around real operational requirements rather than generic product lists."
            />
          </Reveal>
        </div>
      </section>
      <SolutionsGrid />
      <FinalCTA />
    </>
  );
}
