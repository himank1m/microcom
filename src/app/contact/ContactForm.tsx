"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

const organizationTypes = ["Business / Enterprise", "Government Department", "Defence / Military", "Manufacturing", "Other"];
const requirementTypes = ["Surveillance & Security", "Enterprise Networking", "Servers & Infrastructure", "Custom Software", "Managed IT Services", "AMC Support", "Multiple Requirements"];

export function ContactForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function submitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST"
      });

      if (!response.ok) {
        throw new Error("Unable to send request");
      }

      router.push("/thank-you");
    } catch {
      setError("We could not send your request right now. Please call or email Microware directly.");
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={submitForm} className="grid gap-5 rounded-lg border border-border bg-card p-6 shadow-subtle dark:shadow-subtle-dark">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-foreground">
          Name
          <input required name="name" className="rounded-md border-border bg-background" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-foreground">
          Organization
          <input required name="organization" className="rounded-md border-border bg-background" />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-foreground">
          Phone
          <input required name="phone" type="tel" className="rounded-md border-border bg-background" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-foreground">
          Email
          <input required name="email" type="email" className="rounded-md border-border bg-background" />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-foreground">
          Organization Type
          <select required name="organizationType" className="rounded-md border-border bg-background">
            <option value="">Select type</option>
            {organizationTypes.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium text-foreground">
          Requirement Type
          <select required name="requirementType" className="rounded-md border-border bg-background">
            <option value="">Select requirement</option>
            {requirementTypes.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="grid gap-2 text-sm font-medium text-foreground">
        Message / Requirements
        <textarea required name="message" rows={5} className="rounded-md border-border bg-background" />
      </label>
      <label className="grid gap-2 text-sm font-medium text-foreground">
        Preferred Contact Time
        <input name="preferredTime" className="rounded-md border-border bg-background" placeholder="Example: Weekdays, 11 AM to 2 PM" />
      </label>
      {error ? <p className="text-sm font-medium text-primary" role="alert">{error}</p> : null}
      <Button type="submit" className="w-full sm:w-auto" disabled={submitting}>
        {submitting ? "Sending Request..." : "Schedule a Meeting"}
      </Button>
    </form>
  );
}
