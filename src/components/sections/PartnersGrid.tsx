import { partners } from "@/data/partners";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PartnersGrid() {
  return (
    <section className="section bg-[linear-gradient(180deg,hsl(var(--muted)/0.55),hsl(var(--background)))]">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Technology Partners"
            title="Working with industry-leading brands."
            description="Microware collaborates with established technology partners to deliver practical, dependable solutions."
          />
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
          {partners.map((partner) => (
            <Reveal key={partner}>
              <div className="group flex min-h-24 items-center justify-center rounded-lg border border-primary/10 bg-card px-4 text-center shadow-subtle">
                <span className="text-sm font-semibold text-muted-foreground grayscale transition duration-200 group-hover:text-accent group-hover:grayscale-0">
                  {partner}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
