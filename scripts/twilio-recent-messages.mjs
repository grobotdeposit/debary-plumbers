import { readFileSync } from "fs";

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
const sid = env.TWILIO_ACCOUNT_SID;
const token = env.TWILIO_AUTH_TOKEN;
const auth = Buffer.from(`${sid}:${token}`).toString("base64");

const res = await fetch(
  `https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json?PageSize=10&To=%2B14075084636`,
  { headers: { Authorization: `Basic ${auth}` } },
);

const data = await res.json();
if (!res.ok) {
  console.error("Twilio API error:", data);
  process.exit(1);
}

for (const msg of data.messages ?? []) {
  console.log(
    [
      msg.date_sent ?? msg.date_created,
      msg.status,
      msg.error_code ?? "-",
      msg.error_message ?? "-",
      (msg.body ?? "").slice(0, 60),
    ].join(" | "),
  );
}
