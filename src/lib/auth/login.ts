import { createClient } from "@/lib/supabase/client";
import { asAuthPasswordSignIn } from "@/lib/auth/supabase-auth";

export async function signInWithPassword(email: string, password: string) {
  const supabase = createClient();
  return asAuthPasswordSignIn(supabase.auth).signInWithPassword({
    email,
    password,
  });
}
