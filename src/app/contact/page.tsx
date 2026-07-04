import type { Metadata } from "next";
import { Mail, Phone, Clock } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact Microware Communications",
  description:
    "Contact Microware Communications in Jammu for IT solutions, CCTV installation, enterprise networking, server solutions, custom software, and IT AMC services.",
  alternates: {
    canonical: "/contact"
  }
};

const contactItems = [
  { icon: Phone, label: "Phone", value: site.phone },
  { icon: Mail, label: "Email", value: site.email },
  { icon: Clock, label: "Office Hours", value: "Monday to Saturday, 10:00 AM to 6:00 PM" }
];

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Schedule a Site Assessment"
              description="Share your requirements and Microware will review the environment, priorities, and next steps with care."
            />
            <div className="mt-9 grid gap-4">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex gap-4 rounded-lg border border-border bg-card p-5">
                    <Icon className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                    <div>
                      <p className="text-sm font-semibold text-foreground">{item.label}</p>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
        <Reveal>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
