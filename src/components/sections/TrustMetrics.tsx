import { Reveal } from "@/components/ui/Reveal";

const metrics = [
  { value: "25+ Years", label: "Years of Experience" },
  { value: "15+ Technology Partners", label: "Working with Industry-Leading Brands" }
];

export function TrustMetrics() {
  return (
    <section className="border-b border-border py-10">
      <div className="container grid gap-8 text-center sm:grid-cols-2">
        {metrics.map((metric) => (
          <Reveal key={metric.value}>
            <div>
              <p className="text-3xl font-semibold text-foreground sm:text-4xl">{metric.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{metric.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
