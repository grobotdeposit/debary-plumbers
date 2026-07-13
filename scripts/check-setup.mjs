/**
 * Run: npm run check-setup
 * Verifies .env.local values and Supabase connectivity (no secrets printed).
 */
import { readFileSync } from "fs";
import { createClient } from "@supabase/supabase-js";

function loadEnv() {
  const raw = readFileSync(".env.local", "utf8");
  const env = {};
  for (const line of raw.split("\n")) {
    const match = line.match(/^\s*([^#][^=]+)=(.*)$/);
    if (match) env[match[1].trim()] = match[2].trim();
  }
  return env;
}

function mask(value) {
  if (!value || value.length < 8) return "(missing or too short)";
  return `${value.slice(0, 4)}...${value.slice(-4)}`;
}

const env = loadEnv();
const checks = [];

const url = env.NEXT_PUBLIC_SUPABASE_URL;
const anon = env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const service = env.SUPABASE_SERVICE_ROLE_KEY;
const resend = env.RESEND_API_KEY;
const from = env.EMAIL_FROM;

checks.push(["SUPABASE_URL set", !!url && !url.includes("your-project")]);
checks.push(["ANON_KEY set", !!anon && !anon.includes("your-anon")]);
checks.push(["SERVICE_ROLE_KEY set", !!service && !service.includes("your-service")]);
checks.push(["RESEND_API_KEY set", !!resend && !resend.includes("your_api")]);
checks.push(["EMAIL_FROM set", !!from]);

console.log("\nDebary Plumbers — setup check\n");
for (const [label, ok] of checks) {
  console.log(`${ok ? "✓" : "✗"} ${label}`);
}

if (!checks.every(([, ok]) => ok)) {
  console.log("\nFix .env.local placeholders, then re-run: npm run check-setup\n");
  process.exit(1);
}

console.log(`\nUsing Supabase URL: ${url}`);
console.log(`Service key: ${mask(service)}`);
console.log(`Resend key: ${mask(resend)}\n`);

const sb = createClient(url, service);
const { data: settings, error: settingsError } = await sb
  .from("settings")
  .select("*");

if (settingsError) {
  console.log("✗ Supabase connection failed:", settingsError.message);
  console.log(
    "\nIf you see 'relation does not exist', run supabase/schema.sql in the SQL Editor.\n",
  );
  process.exit(1);
}

console.log("✓ Supabase connected");
console.log("✓ settings table exists");
console.log(
  `  notification_email: ${settings?.[0]?.notification_email ?? "(not set)"}`,
);
console.log(
  `  notification_phone: ${settings?.[0]?.notification_phone ?? "(not set)"}`,
);

const twilioSid = env.TWILIO_ACCOUNT_SID;
const twilioToken = env.TWILIO_AUTH_TOKEN;
const twilioFrom = env.TWILIO_FROM_NUMBER;
const twilioOk =
  !!twilioSid &&
  !twilioSid.includes("your_account") &&
  !!twilioToken &&
  !twilioToken.includes("your_auth") &&
  !!twilioFrom &&
  !twilioFrom.includes("5551234567");

console.log(
  twilioOk
    ? "✓ Twilio SMS configured"
    : "○ Twilio SMS not configured (optional — add TWILIO_* to .env.local)",
);

const { error: leadsError } = await sb.from("leads").select("id").limit(1);
if (leadsError) {
  console.log("✗ leads table:", leadsError.message);
  process.exit(1);
}
console.log("✓ leads table exists");
console.log("\nAll checks passed. Run: npm run dev\n");
