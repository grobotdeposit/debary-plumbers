import { buildNewLeadSmsBody } from "@/lib/sms/templates/new-lead";
import { isTwilioConfigured, sendSms } from "@/lib/sms/twilio";
import type { Lead } from "@/lib/types/lead";

export async function sendNewLeadSms(
  lead: Lead,
  notificationPhone: string | null,
): Promise<void> {
  if (!notificationPhone) {
    return;
  }

  if (!isTwilioConfigured()) {
    console.error(
      "SMS skipped: Twilio env vars not configured (TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_FROM_NUMBER)",
    );
    return;
  }

  try {
    await sendSms({
      to: notificationPhone,
      body: buildNewLeadSmsBody(lead),
    });
  } catch (error) {
    console.error(
      "Failed to send new lead notification SMS:",
      error instanceof Error ? error.message : error,
    );
  }
}
