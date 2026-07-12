# Clears stale shell env overrides, then starts Next.js dev server.
# Windows may cache placeholder values that override .env.local.
$vars = @(
  "NEXT_PUBLIC_SUPABASE_URL",
  "NEXT_PUBLIC_SUPABASE_ANON_KEY",
  "SUPABASE_SERVICE_ROLE_KEY",
  "RESEND_API_KEY",
  "EMAIL_FROM"
)

foreach ($name in $vars) {
  Remove-Item "Env:$name" -ErrorAction SilentlyContinue
}

$env:NODE_OPTIONS = "--dns-result-order=ipv4first"
Set-Location $PSScriptRoot\..
npm run dev
