import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thank you for contacting Microware Communications.",
  robots: {
    index: false,
    follow: false
  }
};

export default function ThankYouPage() {
  return (
    <section className="section">
      <div className="container flex min-h-[55vh] items-center justify-center">
        <div className="max-w-2xl text-center">
          <CheckCircle2 className="mx-auto size-12 text-accent" aria-hidden />
          <h1 className="mt-6 text-4xl font-semibold text-foreground">Thank you.</h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Your request has been received. Our team will review your requirements and contact you within one business day to schedule the next step.
          </p>
          <Button href="/" className="mt-8">Return Home</Button>
        </div>
      </div>
    </section>
  );
}
