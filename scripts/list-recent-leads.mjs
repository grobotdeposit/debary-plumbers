import { readFileSync } from "fs";
import { createClient } from "@supabase/supabase-js";

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

const env = { ...loadEnvFile(".env.vercel.check"), ...loadEnvFile(".env.local") };
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

const { data, error } = await sb
  .from("leads")
  .select("id, name, phone, created_at, is_emergency")
  .order("created_at", { ascending: false })
  .limit(5);

if (error) {
  console.error(error.message);
  process.exit(1);
}

console.log(JSON.stringify(data, null, 2));
