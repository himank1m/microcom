"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";

const organizationTypes = ["Business / Enterprise", "Government Department", "Defence / Military", "Manufacturing", "Other"];
const requirementTypes = ["Surveillance & Security", "Enterprise Networking", "Servers & Infrastructure", "Custom Software", "Managed IT Services", "AMC Support", "Multiple Requirements"];

export function ContactForm() {
  const router = useRouter();

  function submitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: Connect this form to backend email/CRM handling before production launch.
    router.push("/thank-you");
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
      <Button type="submit" className="w-full sm:w-auto">Schedule a Meeting</Button>
    </form>
  );
}
