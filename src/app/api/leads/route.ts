import { after, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { leadFormSchema } from "@/lib/validation/lead";
import { notifyNewLead } from "@/lib/notifications/notify-new-lead";
import type { Lead } from "@/lib/types/lead";

export const maxDuration = 30;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = leadFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const { website, description, ...leadData } = parsed.data;

    // Honeypot: silently reject bot submissions
    if (website && website.length > 0) {
      return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
    }

    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from("leads")
      .insert({
        ...leadData,
        description: description || null,
      })
      .select()
      .single();

    if (error || !data) {
      const detail = error?.message ?? "unknown";
      const cause =
        error && "cause" in error
          ? String((error as { cause?: unknown }).cause)
          : "";
      console.error("Failed to insert lead:", detail, cause);
      return NextResponse.json(
        { error: "Unable to save your request. Please try again or call us." },
        { status: 500 },
      );
    }

    // Keep the function alive on Vercel until notifications finish (after uses waitUntil)
    after(async () => {
      await notifyNewLead(data as Lead);
    });

    return NextResponse.json(
      {
        message: "Got it! A plumber will reach out ASAP.",
        id: data.id,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Unexpected error in POST /api/leads:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
