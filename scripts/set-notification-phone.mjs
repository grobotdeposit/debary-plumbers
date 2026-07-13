/**
 * Run: node scripts/set-notification-phone.mjs 4075084636
 */
import { readFileSync } from "fs";
import { createClient } from "@supabase/supabase-js";

const phone = process.argv[2];
if (!phone) {
  console.error("Usage: node scripts/set-notification-phone.mjs <phone>");
  process.exit(1);
}

function loadEnv() {
  const raw = readFileSync(".env.local", "utf8");
  const env = {};
  for (const line of raw.split("\n")) {
    const match = line.match(/^\s*([^#][^=]+)=(.*)$/);
    if (match) env[match[1].trim()] = match[2].trim();
  }
  return env;
}

const env = loadEnv();
const sb = createClient(
  env.NEXT_PUBLIC_SUPABASE_URL,
  env.SUPABASE_SERVICE_ROLE_KEY,
);

const { data, error } = await sb
  .from("settings")
  .update({
    notification_phone: phone,
    updated_at: new Date().toISOString(),
  })
  .eq("id", 1)
  .select("notification_email, notification_phone")
  .single();

if (error) {
  console.error("Failed to update settings:", error.message);
  process.exit(1);
}

console.log("✓ Notification phone saved");
console.log(`  email: ${data.notification_email}`);
console.log(`  phone: ${data.notification_phone}`);
