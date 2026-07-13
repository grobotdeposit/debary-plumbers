/**
 * Run: node scripts/migrate-notification-phone.mjs
 * Adds notification_phone column to settings if missing.
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

const env = loadEnv();
const sb = createClient(
  env.NEXT_PUBLIC_SUPABASE_URL,
  env.SUPABASE_SERVICE_ROLE_KEY,
);

const probe = await sb
  .from("settings")
  .select("notification_email, notification_phone")
  .eq("id", 1)
  .single();

if (!probe.error) {
  console.log("✓ notification_phone column already exists");
  console.log(`  notification_email: ${probe.data?.notification_email ?? "(not set)"}`);
  console.log(`  notification_phone: ${probe.data?.notification_phone ?? "(not set)"}`);
  process.exit(0);
}

if (!probe.error.message.includes("notification_phone")) {
  console.error("✗ Unexpected error:", probe.error.message);
  process.exit(1);
}

console.log("Column missing — run this SQL in Supabase SQL Editor:");
console.log("");
console.log(
  "alter table public.settings add column if not exists notification_phone text;",
);
console.log("");
process.exit(1);
