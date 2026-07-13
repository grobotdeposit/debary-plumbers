/**
 * Normalize a US phone number to E.164 format for Twilio.
 * Returns null if the number cannot be normalized.
 */
export function toE164(phone: string): string | null {
  const trimmed = phone.trim();
  const digits = trimmed.replace(/\D/g, "");

  if (digits.length === 10) {
    return `+1${digits}`;
  }

  if (digits.length === 11 && digits.startsWith("1")) {
    return `+${digits}`;
  }

  if (trimmed.startsWith("+") && digits.length >= 10) {
    return `+${digits}`;
  }

  return null;
}

export function isTwilioConfigured(): boolean {
  const hasAuth = !!(
    process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN
  );
  const hasSender = !!(
    process.env.TWILIO_MESSAGING_SERVICE_SID || process.env.TWILIO_FROM_NUMBER
  );
  return hasAuth && hasSender;
}

type SendSmsInput = {
  to: string;
  body: string;
};

export async function sendSms({ to, body }: SendSmsInput): Promise<void> {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_FROM_NUMBER;
  const messagingServiceSid = process.env.TWILIO_MESSAGING_SERVICE_SID;

  if (!accountSid || !authToken) {
    throw new Error(
      "Twilio is not configured. Set TWILIO_ACCOUNT_SID and TWILIO_AUTH_TOKEN.",
    );
  }

  if (!messagingServiceSid && !from) {
    throw new Error(
      "Twilio sender is not configured. Set TWILIO_MESSAGING_SERVICE_SID (recommended for US 10DLC) or TWILIO_FROM_NUMBER.",
    );
  }

  const toE164Number = toE164(to);
  if (!toE164Number) {
    throw new Error(`Invalid notification phone number: ${to}`);
  }

  const params = new URLSearchParams({
    To: toE164Number,
    Body: body,
  });

  if (messagingServiceSid) {
    params.set("MessagingServiceSid", messagingServiceSid);
  } else {
    const fromE164 = toE164(from!) ?? from!;
    params.set("From", fromE164);
  }

  const response = await fetch(
    `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`${accountSid}:${authToken}`).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params,
    },
  );

  const responseBody = await response.text();

  if (!response.ok) {
    throw new Error(`Twilio SMS failed (${response.status}): ${responseBody}`);
  }

  try {
    const parsed = JSON.parse(responseBody) as { sid?: string; status?: string };
    console.log("Twilio SMS queued:", parsed.sid, parsed.status);
  } catch {
    // Non-JSON success bodies are fine; delivery status is checked asynchronously.
  }
}
