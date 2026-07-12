import type { createAdminClient } from "@/lib/supabase/admin";

// Return type after .from("leads").select("*") — has .eq, .or, .order
export type LeadsSelectQuery = ReturnType<
  ReturnType<ReturnType<typeof createAdminClient>["from"]>["select"]
>;

export function applyLeadFilters(
  query: LeadsSelectQuery,
  params: URLSearchParams,
): LeadsSelectQuery {
  const status = params.get("status");
  const emergency = params.get("emergency");
  const search = params.get("search")?.trim();

  let result = query;

  if (status && status !== "all") {
    result = result.eq("status", status);
  }
  if (emergency === "true") {
    result = result.eq("is_emergency", true);
  }
  if (search) {
    result = result.or(
      `name.ilike.%${search}%,phone.ilike.%${search}%,email.ilike.%${search}%`,
    );
  }

  return result;
}
