import { createClient } from "@/lib/supabase/server";
import type { AuthUser } from "@supabase/supabase-js";
import { asAuthGetUser } from "@/lib/auth/supabase-auth";

export async function getAdminUser(): Promise<AuthUser | null> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await asAuthGetUser(supabase.auth).getUser();
  return user;
}

export async function requireAdminUser(): Promise<AuthUser> {
  const user = await getAdminUser();
  if (!user) {
    throw new Error("Unauthorized");
  }
  return user;
}
