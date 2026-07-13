import { sendNewLeadAlert as sendNewLeadEmail } from "@/lib/email/send-new-lead-alert";
import { getNotificationSettings } from "@/lib/notifications/settings";
import { sendNewLeadSms } from "@/lib/sms/send-new-lead-alert";
import type { Lead } from "@/lib/types/lead";

export async function notifyNewLead(lead: Lead): Promise<void> {
  const settings = await getNotificationSettings();

  if (!settings) {
    console.error("No notification settings found — skipping email and SMS alerts");
    return;
  }

  await Promise.allSettled([
    sendNewLeadEmail(lead, settings.notification_email),
    sendNewLeadSms(lead, settings.notification_phone),
  ]);
  console.log("Lead notifications attempted for", lead.id);
}
