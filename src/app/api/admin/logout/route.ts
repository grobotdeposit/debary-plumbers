import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { asAuthSignOut } from "@/lib/auth/supabase-auth";

export async function POST() {
  const supabase = await createClient();
  await asAuthSignOut(supabase.auth).signOut();
  return NextResponse.json({ message: "Logged out" });
}
