import { createAdminClient } from "@/lib/supabase/admin";
import { sendEmail } from "@/lib/email/send-email";
import {
  buildNewLeadEmailHtml,
  getNewLeadSubject,
} from "@/lib/email/templates/new-lead";
import type { Lead } from "@/lib/types/lead";

export async function sendNewLeadAlert(
  lead: Lead,
  notificationEmail?: string | null,
): Promise<void> {
  let to = notificationEmail;

  if (!to) {
    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from("settings")
      .select("notification_email")
      .eq("id", 1)
      .single();

    if (error) {
      console.error("Failed to fetch notification email:", error.message);
      return;
    }

    to = data?.notification_email ?? null;
  }

  if (!to) {
    console.error("No notification_email configured in settings table");
    return;
  }

  try {
    await sendEmail({
      to,
      subject: getNewLeadSubject(lead.is_emergency),
      html: buildNewLeadEmailHtml(lead),
    });
  } catch (error) {
    console.error(
      "Failed to send new lead notification email:",
      error instanceof Error ? error.message : error,
    );
  }
}

export async function sendForwardLeadEmail(
  lead: Lead,
  to: string,
): Promise<void> {
  const { buildForwardLeadEmailHtml, getForwardLeadSubject } = await import(
    "@/lib/email/templates/new-lead"
  );

  await sendEmail({
    to,
    subject: getForwardLeadSubject(lead),
    html: buildForwardLeadEmailHtml(lead),
  });
}
