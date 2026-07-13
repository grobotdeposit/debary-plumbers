/**
 * Re-send notifications for a lead by ID.
 * Run: node scripts/resend-lead-alert.mjs <lead-id>
 */
import { readFileSync } from "fs";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const leadId = process.argv[2];
if (!leadId) {
  console.error("Usage: node scripts/resend-lead-alert.mjs <lead-id>");
  process.exit(1);
}

function loadEnvFile(path) {
  const env = {};
  const raw = readFileSync(path, "utf8");
  for (const line of raw.split("\n")) {
    const match = line.match(/^\s*([^#][^=]+)=(.*)$/);
    if (match) {
      let value = match[2].trim();
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }
      env[match[1].trim()] = value;
    }
  }
  return env;
}

const localEnv = loadEnvFile(".env.local");
const vercelEnv = loadEnvFile(".env.vercel.check");
const env = { ...vercelEnv, ...localEnv };

const sb = createClient(
  env.NEXT_PUBLIC_SUPABASE_URL,
  env.SUPABASE_SERVICE_ROLE_KEY,
);

const { data: lead, error } = await sb
  .from("leads")
  .select("*")
  .eq("id", leadId)
  .single();

if (error || !lead) {
  console.error("Lead not found:", error?.message);
  process.exit(1);
}

const { data: settings } = await sb
  .from("settings")
  .select("notification_email, notification_phone")
  .eq("id", 1)
  .single();

const emailFrom = (() => {
  const raw = env.EMAIL_FROM?.trim();
  if (raw && !raw.includes("onboarding@resend.dev")) return raw;
  return "Debary Plumbers <leads@debaryplumbers.com>";
})();

console.log("Sending to:", settings?.notification_email);
console.log("From:", emailFrom);

const resend = new Resend(env.RESEND_API_KEY);
const emailResult = await resend.emails.send({
  from: emailFrom,
  to: settings?.notification_email ?? "foxcapfund@gmail.com",
  subject: lead.is_emergency
    ? "🚨 NEW EMERGENCY LEAD — Debary Plumbers"
    : "NEW LEAD — Debary Plumbers",
  html: `<p><strong>${lead.name}</strong><br/>${lead.phone}<br/>${lead.service_type}<br/>${lead.address}</p>`,
});

console.log("Email:", JSON.stringify(emailResult));

if (settings?.notification_phone && env.TWILIO_ACCOUNT_SID) {
  const auth = Buffer.from(
    `${env.TWILIO_ACCOUNT_SID}:${env.TWILIO_AUTH_TOKEN}`,
  ).toString("base64");
  const smsBody = [
    `${lead.is_emergency ? "EMERGENCY LEAD" : "NEW LEAD"} — Debary Plumbers`,
    `${lead.name} | ${lead.phone}`,
    lead.service_type,
    lead.address,
  ].join("\n");

  const smsRes = await fetch(
    `https://api.twilio.com/2010-04-01/Accounts/${env.TWILIO_ACCOUNT_SID}/Messages.json`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        To: `+1${settings.notification_phone.replace(/\D/g, "").slice(-10)}`,
        From: env.TWILIO_FROM_NUMBER,
        Body: smsBody,
      }),
    },
  );
  console.log("SMS:", smsRes.status, await smsRes.text());
}
