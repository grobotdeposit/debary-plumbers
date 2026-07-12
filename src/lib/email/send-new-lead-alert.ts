import { createAdminClient } from "@/lib/supabase/admin";
import { getResendClient, getEmailFrom } from "@/lib/email/resend";
import {
  buildNewLeadEmailHtml,
  getNewLeadSubject,
} from "@/lib/email/templates/new-lead";
import type { Lead } from "@/lib/types/lead";

async function getNotificationEmail(): Promise<string | null> {
  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("settings")
    .select("notification_email")
    .eq("id", 1)
    .single();

  if (error) {
    console.error("Failed to fetch notification email:", error.message);
    return null;
  }

  return data?.notification_email ?? null;
}

export async function sendNewLeadAlert(lead: Lead): Promise<void> {
  const to = await getNotificationEmail();
  if (!to) {
    console.error("No notification_email configured in settings table");
    return;
  }

  try {
    const resend = getResendClient();
    await resend.emails.send({
      from: getEmailFrom(),
      to,
      subject: getNewLeadSubject(lead.is_emergency),
      html: buildNewLeadEmailHtml(lead),
    });
  } catch (error) {
    console.error("Failed to send new lead notification email:", error);
  }
}

export async function sendForwardLeadEmail(
  lead: Lead,
  to: string,
): Promise<void> {
  const { buildForwardLeadEmailHtml, getForwardLeadSubject } = await import(
    "@/lib/email/templates/new-lead"
  );

  const resend = getResendClient();
  await resend.emails.send({
    from: getEmailFrom(),
    to,
    subject: getForwardLeadSubject(lead),
    html: buildForwardLeadEmailHtml(lead),
  });
}
