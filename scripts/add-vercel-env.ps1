# Adds .env.local values to Vercel (all environments).
# Usage: powershell -ExecutionPolicy Bypass -File scripts/add-vercel-env.ps1

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot\..

$envFile = ".env.local"
if (-not (Test-Path $envFile)) {
  Write-Error ".env.local not found"
}

$vars = @{}
Get-Content $envFile | ForEach-Object {
  if ($_ -match '^\s*([^#][^=]+)=(.*)$') {
    $name = $matches[1].Trim()
    if ($name -ne "VERCEL_OIDC_TOKEN") {
      $vars[$name] = $matches[2].Trim().Trim('"')
    }
  }
}

$required = @(
  "NEXT_PUBLIC_SUPABASE_URL",
  "NEXT_PUBLIC_SUPABASE_ANON_KEY",
  "SUPABASE_SERVICE_ROLE_KEY",
  "RESEND_API_KEY",
  "EMAIL_FROM"
)

foreach ($name in $required) {
  if (-not $vars.ContainsKey($name) -or [string]::IsNullOrWhiteSpace($vars[$name])) {
    Write-Error "Missing $name in .env.local"
  }

  Write-Host "Adding $name..."
  npx vercel env add $name --value $vars[$name] --yes --force 2>&1 | Out-Host
}

Write-Host "`nCurrent Vercel env vars:"
npx vercel env ls 2>&1 | Out-Host
