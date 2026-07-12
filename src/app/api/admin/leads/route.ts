import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { requireAdminUser } from "@/lib/auth/admin";
import { applyLeadFilters } from "@/lib/supabase/leads-query";
import type { Lead } from "@/lib/types/lead";

type SortField = "created_at" | "name" | "is_emergency" | "status";

export async function GET(request: Request) {
  try {
    await requireAdminUser();
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const sortField = (searchParams.get("sort") as SortField) || "created_at";
  const sortDir = searchParams.get("dir") === "asc" ? "asc" : "desc";

  const supabase = createAdminClient();
  let query = applyLeadFilters(
    supabase.from("leads").select("*"),
    searchParams,
  );

  if (sortField === "is_emergency") {
    query = query
      .order("is_emergency", { ascending: sortDir === "asc" })
      .order("created_at", { ascending: false });
  } else {
    query = query.order(sortField, { ascending: sortDir === "asc" });
  }

  const { data, error } = await query;

  if (error) {
    console.error("Failed to fetch leads:", error.message);
    return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 });
  }

  const leads = (data as Lead[]).slice().sort((a, b) => {
    if (a.is_emergency !== b.is_emergency) {
      return a.is_emergency ? -1 : 1;
    }
    return (
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
  });

  return NextResponse.json({ leads });
}
