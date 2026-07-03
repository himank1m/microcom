import { CalendarCheck, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/utils";

export function FinalCTA() {
  return (
    <section className="section border-y border-border bg-muted text-foreground dark:bg-black">
      <div className="container max-w-4xl text-center">
        <Reveal>
          <div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Ready to discuss a requirement?</p>
              <h2 className="mx-auto mt-3 max-w-3xl text-balance text-3xl font-semibold leading-tight sm:text-4xl">
                Speak with Microware about a reliable technology plan for your organization.
              </h2>
            </div>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
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
