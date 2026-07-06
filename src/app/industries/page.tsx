import type { Metadata } from "next";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { ServiceLinksBand } from "@/components/sections/ServiceLinksBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Microware Communications supports businesses, government departments, defence environments, and manufacturing across Northern India.",
  alternates: {
    canonical: "/industries"
  }
};

export default function IndustriesPage() {
  return (
    <>
      <section className="section border-b border-border">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Industries"
              level="h1"
              title="Supporting organizations across sectors including government, defence, and enterprise."
              description="Each sector brings its own operating conditions, infrastructure constraints, and reliability expectations. Microware approaches these environments with careful planning and professional support."
            />
          </Reveal>
        </div>
      </section>
      <IndustriesGrid />
      <ServiceLinksBand
        title="Services matched to operational environments."
        description="Different sectors need different infrastructure priorities. Explore the services most often connected to secure, reliable, multi-user environments."
        serviceSlugs={[
          "cctv-installation-jammu",
          "access-control-systems-jammu",
          "biometric-attendance-jammu",
          "structured-cabling-jammu",
          "wireless-networking-jammu",
          "server-solutions-jammu",
          "epabx-systems-jammu",
          "cyber-security-jammu"
        ]}
      />
      <FinalCTA />
    </>
  );
}
