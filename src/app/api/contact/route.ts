import { NextResponse } from "next/server";
import { site } from "@/lib/utils";

export const dynamic = "force-dynamic";

const notificationRecipient = process.env.CONTACT_NOTIFICATION_EMAIL ?? "roopesh@microwaremail.com";
const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "Microware Website <onboarding@resend.dev>";

type ContactPayload = {
  email?: unknown;
  message?: unknown;
  name?: unknown;
  organization?: unknown;
  organizationType?: unknown;
  phone?: unknown;
  preferredTime?: unknown;
  requirementType?: unknown;
};

function getString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function createEmailHtml(fields: Record<string, string>) {
  const rows = [
    ["Name", fields.name],
    ["Organization", fields.organization],
    ["Phone", fields.phone],
    ["Email", fields.email],
    ["Organization Type", fields.organizationType],
    ["Requirement Type", fields.requirementType],
    ["Preferred Contact Time", fields.preferredTime || "Not specified"],
    ["Message / Requirements", fields.message]
  ];

  return `
    <div style="margin:0;background:#f6f8fb;padding:28px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;color:#111827;">
      <div style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #dbe3ef;border-radius:16px;overflow:hidden;">
        <div style="background:#061a38;padding:24px 28px;color:#ffffff;">
          <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.16em;text-transform:uppercase;color:#93c5fd;">New website enquiry</p>
          <h1 style="margin:0;font-size:24px;line-height:1.3;">Schedule a Meeting Request</h1>
          <p style="margin:10px 0 0;color:#dbeafe;font-size:14px;">${escapeHtml(site.name)} website contact form</p>
        </div>
        <div style="padding:24px 28px;">
          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            <tbody>
              ${rows
                .map(
                  ([label, value]) => `
                    <tr>
                      <td style="width:34%;padding:14px 12px;border-bottom:1px solid #e5e7eb;color:#475569;font-weight:700;vertical-align:top;">${escapeHtml(label)}</td>
                      <td style="padding:14px 12px;border-bottom:1px solid #e5e7eb;color:#111827;white-space:pre-wrap;line-height:1.55;">${escapeHtml(value)}</td>
                    </tr>
                  `
                )
                .join("")}
            </tbody>
          </table>
          <div style="margin-top:22px;padding:16px;border-radius:12px;background:#f8fafc;border:1px solid #e2e8f0;">
            <p style="margin:0;color:#334155;font-size:13px;line-height:1.6;">
              Reply directly to <strong>${escapeHtml(fields.email)}</strong> or call <strong>${escapeHtml(fields.phone)}</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  `;
}

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as ContactPayload | null;

  const fields = {
    email: getString(payload?.email),
    message: getString(payload?.message),
    name: getString(payload?.name),
    organization: getString(payload?.organization),
    organizationType: getString(payload?.organizationType),
    phone: getString(payload?.phone),
    preferredTime: getString(payload?.preferredTime),
    requirementType: getString(payload?.requirementType)
  };

  if (!fields.name || !fields.organization || !fields.phone || !fields.email || !fields.organizationType || !fields.requirementType || !fields.message) {
    return NextResponse.json({ ok: false, reason: "missing_required_fields" }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ ok: false, reason: "missing_email_provider" }, { status: 503 });
  }

  const response = await fetch("https://api.resend.com/emails", {
    body: JSON.stringify({
      from: fromEmail,
      html: createEmailHtml(fields),
      reply_to: fields.email,
      subject: `New meeting request from ${fields.name} - ${fields.organization}`,
      text: Object.entries(fields)
        .map(([key, value]) => `${key}: ${value || "Not specified"}`)
        .join("\n"),
      to: [notificationRecipient]
    }),
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json"
    },
    method: "POST"
  });

  if (!response.ok) {
    return NextResponse.json({ ok: false, reason: "email_send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
