import type { Metadata } from "next";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Microware Communication supports businesses, government departments, defence environments, education, healthcare, finance, and manufacturing across Northern India."
};

export default function IndustriesPage() {
  return (
    <>
      <section className="section border-b border-border">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Industries"
              title="Supporting organizations across sectors including government, defence, and enterprise."
              description="Each sector brings its own operating conditions, infrastructure constraints, and reliability expectations. Microware approaches these environments with careful planning and professional support."
            />
          </Reveal>
        </div>
      </section>
      <IndustriesGrid />
      <FinalCTA />
    </>
  );
}
