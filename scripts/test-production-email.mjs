import { readFileSync } from "fs";
import { Resend } from "resend";

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
const resend = new Resend(env.RESEND_API_KEY);
const from = "Debary Plumbers <leads@debaryplumbers.com>";

const result = await resend.emails.send({
  from,
  to: "foxcapfund@gmail.com",
  subject: "TEST — Debary Plumbers lead alert",
  html: "<p>If you see this, production email alerts will work.</p>",
});

console.log(JSON.stringify(result, null, 2));
