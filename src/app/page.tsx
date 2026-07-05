import type { Metadata } from "next";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
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
      <FinalCTA />
    </>
  );
}
