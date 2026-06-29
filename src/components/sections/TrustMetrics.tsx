import { Reveal } from "@/components/ui/Reveal";

const metrics = [
  { value: "25+ Years", label: "Years of Experience" },
  { value: "15+ Technology Partners", label: "Working with Industry-Leading Brands" }
];

export function TrustMetrics() {
  return (
    <section className="border-b border-border/70 bg-muted/35 py-8">
      <div className="container grid gap-4 sm:grid-cols-2">
        {metrics.map((metric) => (
          <Reveal key={metric.value}>
            <div className="rounded-lg border border-border bg-card p-6">
              <p className="text-2xl font-semibold text-foreground">{metric.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{metric.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
