import { CalendarCheck, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/utils";

export function FinalCTA() {
  return (
    <section className="section border-y border-border bg-muted text-foreground dark:bg-black">
      <div className="container">
        <Reveal>
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-medium opacity-75">Ready to discuss a requirement?</p>
              <h2 className="mt-3 max-w-3xl text-balance text-3xl font-semibold leading-tight sm:text-4xl">
                Speak with Microware about a reliable technology plan for your organization.
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button href={`tel:${site.phone.replace(/\s/g, "")}`}>
                <Phone className="size-4" aria-hidden />
                Call Us
              </Button>
              <Button href="/contact" variant="secondary">
                <CalendarCheck className="size-4" aria-hidden />
                Schedule a Site Assessment
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
