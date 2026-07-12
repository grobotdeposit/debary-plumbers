import { createClient } from "@supabase/supabase-js";

/**
 * Service-role Supabase client — SERVER ROUTES ONLY.
 *
 * RLS is enabled with zero public policies. The anon key cannot read/write
 * leads or settings. All DB access goes through Next.js API routes using
 * this service role key, which bypasses RLS.
 */
export function createAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error("Missing Supabase environment variables");
  }

  return createClient(url, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
