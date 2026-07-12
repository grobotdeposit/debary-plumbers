import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { requireAdminUser } from "@/lib/auth/admin";
import { applyLeadFilters } from "@/lib/supabase/leads-query";
import type { Lead } from "@/lib/types/lead";

function escapeCsv(value: string): string {
  if (value.includes(",") || value.includes('"') || value.includes("\n")) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

export async function GET(request: Request) {
  try {
    await requireAdminUser();
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const supabase = createAdminClient();
  const query = applyLeadFilters(
    supabase.from("leads").select("*").order("created_at", {
      ascending: false,
    }),
    searchParams,
  );

  const { data, error } = await query;
  if (error) {
    return NextResponse.json({ error: "Failed to export leads" }, { status: 500 });
  }

  const leads = data as Lead[];
  const headers = [
    "Date",
    "Name",
    "Phone",
    "Email",
    "Address",
    "Service",
    "Emergency",
    "Status",
    "Description",
    "Notes",
  ];

  const rows = leads.map((lead) =>
    [
      new Date(lead.created_at).toISOString(),
      lead.name,
      lead.phone,
      lead.email,
      lead.address,
      lead.service_type,
      lead.is_emergency ? "Yes" : "No",
      lead.status,
      lead.description ?? "",
      lead.notes ?? "",
    ]
      .map(escapeCsv)
      .join(","),
  );

  const csv = [headers.join(","), ...rows].join("\n");

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="leads-${new Date().toISOString().slice(0, 10)}.csv"`,
    },
  });
}
