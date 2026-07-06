import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getLocalService, type LocalServicePage } from "@/data/localServices";

type ServiceLinksBandProps = {
  description: string;
  eyebrow?: string;
  serviceSlugs: string[];
  title: string;
};

export function ServiceLinksBand({ description, eyebrow = "Services in Jammu", serviceSlugs, title }: ServiceLinksBandProps) {
  const services = serviceSlugs
    .map((slug) => getLocalService(slug))
    .filter((service): service is LocalServicePage => Boolean(service));

  return (
    <section className="section border-t border-border bg-muted/45 dark:bg-background">
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Reveal key={service.slug}>
              <Link href={`/${service.slug}`} className="group block h-full">
                <Card className="h-full p-6">
                  <h3 className="text-base font-semibold text-foreground">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{service.hero}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    View service <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden />
                  </span>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
