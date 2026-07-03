import { industries } from "@/data/industries";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function IndustriesGrid() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Industries"
            title="Supporting organizations across sectors including government, defence, and enterprise."
            description="Microware approaches each environment with attention to requirements, constraints, and continuity."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <Reveal key={industry.title}>
                <Card className="h-full">
                  <Icon className="size-6 text-primary" aria-hidden />
                  <h3 className="mt-5 text-base font-semibold text-foreground">{industry.title}</h3>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
