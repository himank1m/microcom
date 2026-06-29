import type { Metadata } from "next";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { PartnersGrid } from "@/components/sections/PartnersGrid";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Technology Partners",
  description:
    "Microware Communication works with technology brands including HP, Dell, Lenovo, Microsoft, Cisco, Hikvision, CP Plus, Epson, Canon, Logitech, TP-Link, and Matrix."
};

export default function PartnersPage() {
  return (
    <>
      <section className="section border-b border-border">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Technology Partners"
              title="Established brands, carefully integrated."
              description="Partner relationships help Microware deliver dependable IT, surveillance, networking, infrastructure, and collaboration solutions."
            />
          </Reveal>
        </div>
      </section>
      <PartnersGrid />
      <FinalCTA />
    </>
  );
}
