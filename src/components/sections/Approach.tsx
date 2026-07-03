import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  ["Listen", "We begin by understanding the organization, environment, requirements, and constraints."],
  ["Assess", "We conduct site assessments where required to evaluate infrastructure and operational needs."],
  ["Design", "We recommend practical, scalable, and reliable solutions."],
  ["Deploy", "We install, configure, integrate, and test with attention to detail."],
  ["Support", "We provide long-term support through service and AMC engagements."]
];

export function Approach() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Our Approach"
            title="Listen, assess, design, deploy, support."
            description="A structured process helps keep technology decisions grounded in the operating environment."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 lg:grid-cols-5">
          {steps.map(([title, description], index) => (
            <Reveal key={title}>
              <div className="relative h-full rounded-lg border border-border bg-card p-6">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-semibold text-primary">{String(index + 1).padStart(2, "0")}</span>
                  {index < steps.length - 1 ? <ArrowRight className="hidden size-4 text-muted-foreground lg:block" aria-hidden /> : null}
                </div>
                <h3 className="mt-8 text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
