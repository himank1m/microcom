import { CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  ["Proven Experience", "Over 25 years of delivering technology solutions for organizations that value reliability."],
  ["Enterprise-First Approach", "Solutions designed around operational requirements, not generic product lists."],
  ["Government & Defence Experience", "Experience supporting secure, structured, and mission-critical environments."],
  ["End-to-End Delivery", "From assessment and planning to installation, integration, and long-term support."],
  ["Trusted Technology Partners", "Collaboration with leading global technology brands."],
  ["Long-Term Support", "AMC and service support designed for continuity and peace of mind."]
];

export function WhyChoose() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Why organizations choose Microware"
            title="Calm, structured delivery for serious technology environments."
            description="Microware Communications works with organizations that need reliable infrastructure, careful deployment, and a professional dealing environment from first conversation to long-term support."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map(([title, description]) => (
            <Reveal key={title}>
              <Card className="h-full">
                <CheckCircle2 className="size-5 text-primary" aria-hidden />
                <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
