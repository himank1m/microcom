import { Approach } from "@/components/sections/Approach";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { PartnersGrid } from "@/components/sections/PartnersGrid";
import { SolutionsGrid } from "@/components/sections/SolutionsGrid";
import { TrustMetrics } from "@/components/sections/TrustMetrics";
import { WhyChoose } from "@/components/sections/WhyChoose";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustMetrics />
      <WhyChoose />
      <SolutionsGrid compact />
      <IndustriesGrid />
      <PartnersGrid />
      <Approach />
      <FinalCTA />
    </>
  );
}
