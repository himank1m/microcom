import Image from "next/image";
import { partners } from "@/data/partners";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PartnersGrid() {
  return (
    <section className="section bg-muted/45 dark:bg-background">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Technology Partners"
            title="Technology Partners"
            description="Microware Communications works with trusted global technology brands to deliver dependable infrastructure, security, networking, and workplace solutions."
          />
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {partners.map((partner) => (
            <Reveal key={partner.name}>
              <div className="group flex min-h-56 flex-col justify-between rounded-lg border border-border bg-card p-5 text-center shadow-none transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-primary/45 hover:shadow-[0_24px_70px_rgba(0,0,0,0.07)] dark:hover:shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
                <div className="flex h-32 items-center justify-center rounded-md border border-border/70 bg-white p-5">
                  {partner.logo ? (
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={220}
                      height={110}
                      className="max-h-24 w-auto max-w-full object-contain transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
                    />
                  ) : (
                    <span className="text-5xl font-semibold leading-none text-primary">
                      +
                    </span>
                  )}
                </div>
                <div className="pt-5">
                  <h3 className="text-base font-semibold text-primary">
                    {partner.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {partner.category}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
