import type { Lead } from "@/lib/types/lead";
import { SITE_NAME } from "@/lib/site";

export function buildNewLeadSmsBody(lead: Lead): string {
  const prefix = lead.is_emergency ? "EMERGENCY LEAD" : "NEW LEAD";
  const lines = [
    `${prefix} — ${SITE_NAME}`,
    `${lead.name} | ${lead.phone}`,
    `${lead.service_type}${lead.is_emergency ? " | URGENT" : ""}`,
    lead.address,
  ];

  if (lead.description) {
    const short =
      lead.description.length > 80
        ? `${lead.description.slice(0, 77)}...`
        : lead.description;
    lines.push(short);
  }

  return lines.join("\n");
}
