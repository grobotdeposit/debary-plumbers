import type { Lead } from "@/lib/types/lead";
import { SITE_NAME } from "@/lib/site";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleString("en-US", {
    dateStyle: "full",
    timeStyle: "short",
  });
}

export function buildNewLeadEmailHtml(lead: Lead): string {
  const emergencyBanner = lead.is_emergency
    ? `<div style="background:#fef2f2;border:2px solid #ef4444;border-radius:8px;padding:16px;margin-bottom:24px;">
        <strong style="color:#b91c1c;font-size:18px;">🚨 EMERGENCY LEAD</strong>
        <p style="color:#991b1b;margin:8px 0 0;">This customer marked their request as an emergency. Respond ASAP.</p>
      </div>`
    : "";

  const rows = [
    ["Name", lead.name],
    ["Phone", lead.phone],
    ["Email", lead.email],
    ["Address / ZIP", lead.address],
    ["Service needed", lead.service_type],
    ["Emergency", lead.is_emergency ? "YES — URGENT" : "No"],
    ["Description", lead.description || "—"],
    ["Submitted", formatDate(lead.created_at)],
  ];

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr>
          <td style="padding:10px 12px;border-bottom:1px solid #e2e8f0;color:#64748b;font-weight:600;width:160px;">${escapeHtml(label)}</td>
          <td style="padding:10px 12px;border-bottom:1px solid #e2e8f0;color:#0f172a;">${escapeHtml(value)}</td>
        </tr>`,
    )
    .join("");

  return `<!DOCTYPE html>
<html>
  <body style="font-family:Arial,sans-serif;background:#f8fafc;margin:0;padding:24px;">
    <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;padding:32px;box-shadow:0 4px 6px rgba(0,0,0,0.05);">
      <h1 style="color:#0369a1;margin:0 0 8px;font-size:24px;">${SITE_NAME}</h1>
      <p style="color:#64748b;margin:0 0 24px;">A new lead has been submitted.</p>
      ${emergencyBanner}
      <table style="width:100%;border-collapse:collapse;">${tableRows}</table>
    </div>
  </body>
</html>`;
}

export function buildForwardLeadEmailHtml(lead: Lead): string {
  return buildNewLeadEmailHtml(lead).replace(
    "A new lead has been submitted.",
    `Lead details forwarded from ${SITE_NAME} admin.`,
  );
}

export function getNewLeadSubject(isEmergency: boolean): string {
  return isEmergency
    ? `🚨 NEW EMERGENCY LEAD — ${SITE_NAME}`
    : `NEW LEAD — ${SITE_NAME}`;
}

export function getForwardLeadSubject(lead: Lead): string {
  const prefix = lead.is_emergency ? "🚨 EMERGENCY LEAD" : "Plumbing Lead";
  return `${prefix} — ${lead.name} — ${SITE_NAME}`;
}
