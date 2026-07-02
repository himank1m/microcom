import { Reveal } from "@/components/ui/Reveal";

const metrics = [
  { value: "25+ Years", label: "Years of Experience" },
  { value: "15+ Technology Partners", label: "Working with Industry-Leading Brands" }
];

export function TrustMetrics() {
  return (
    <section className="border-b border-primary/10 bg-white/72 py-8 backdrop-blur dark:bg-muted/25">
      <div className="container grid gap-4 sm:grid-cols-2">
        {metrics.map((metric) => (
          <Reveal key={metric.value}>
            <div className="rounded-lg border border-primary/10 bg-card p-6 shadow-subtle">
              <p className="text-2xl font-semibold text-foreground">{metric.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{metric.label}</p>
              <div className="mt-5 h-1 w-12 rounded-full bg-accent" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
