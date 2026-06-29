import { solutions } from "@/data/solutions";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SolutionsGrid({ compact = false }: { compact?: boolean }) {
  const items = compact ? solutions.slice(0, 6) : solutions;

  return (
    <section className="section bg-muted/35">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Solutions"
            title="Reliable technology infrastructure, specified around operational needs."
            description="Capability-focused solutions for organizations that need continuity, security, and thoughtful support."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((solution) => {
            const Icon = solution.icon;
            return (
              <Reveal key={solution.title}>
                <Card className="h-full">
                  <Icon className="size-6 text-accent" aria-hidden />
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{solution.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{solution.description}</p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
