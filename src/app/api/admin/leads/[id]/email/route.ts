import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { requireAdminUser } from "@/lib/auth/admin";
import { forwardLeadSchema } from "@/lib/validation/lead";
import { sendForwardLeadEmail } from "@/lib/email/send-new-lead-alert";
import type { Lead } from "@/lib/types/lead";

interface RouteContext {
  params: Promise<{ id: string }>;
}

export async function POST(request: Request, context: RouteContext) {
  try {
    await requireAdminUser();
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await context.params;
  const body = await request.json();
  const parsed = forwardLeadSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("leads")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) {
    return NextResponse.json({ error: "Lead not found" }, { status: 404 });
  }

  try {
    await sendForwardLeadEmail(data as Lead, parsed.data.to);
    return NextResponse.json({ message: "Lead forwarded successfully" });
  } catch (err) {
    console.error("Failed to forward lead email:", err);
    return NextResponse.json(
      { error: "Failed to send email. Check Resend configuration." },
      { status: 500 },
    );
  }
}
