import type { Metadata } from "next";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { ServiceLinksBand } from "@/components/sections/ServiceLinksBand";
import { SolutionsGrid } from "@/components/sections/SolutionsGrid";
import { TrustMetrics } from "@/components/sections/TrustMetrics";

export const metadata: Metadata = {
  alternates: {
    canonical: "/"
  }
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustMetrics />
      <SolutionsGrid compact />
      <ServiceLinksBand
        title="Core IT services available in Jammu."
        description="Explore focused Microware services for hardware, surveillance, networking, custom software, websites, and maintenance support."
        serviceSlugs={[
          "computer-dealer-jammu",
          "cctv-installation-jammu",
          "software-solutions-jammu",
          "networking-solutions-jammu",
          "server-solutions-jammu",
          "annual-maintenance-contract-jammu",
          "biometric-attendance-jammu",
          "access-control-systems-jammu"
        ]}
      />
      <FinalCTA />
    </>
  );
}
