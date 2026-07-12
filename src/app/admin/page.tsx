"use client";

import { useCallback, useEffect, useState } from "react";
import { SITE_NAME } from "@/lib/site";
import Link from "next/link";
import { AdminNav } from "@/components/admin/AdminNav";
import type { Lead, LeadStatus } from "@/lib/types/lead";
import { LEAD_STATUSES } from "@/lib/types/lead";

type SortField = "created_at" | "name" | "is_emergency" | "status";

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [emergencyOnly, setEmergencyOnly] = useState(false);
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState<SortField>("created_at");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    setError("");
    const params = new URLSearchParams();
    if (statusFilter !== "all") params.set("status", statusFilter);
    if (emergencyOnly) params.set("emergency", "true");
    if (search.trim()) params.set("search", search.trim());
    params.set("sort", sortField);
    params.set("dir", sortDir);

    try {
      const res = await fetch(`/api/admin/leads?${params}`);
      if (!res.ok) {
        setError("Failed to load leads.");
        return;
      }
      const data = await res.json();
      setLeads(data.leads);
    } catch {
      setError("Failed to load leads.");
    } finally {
      setLoading(false);
    }
  }, [statusFilter, emergencyOnly, search, sortField, sortDir]);

  useEffect(() => {
    void fetchLeads();
  }, [fetchLeads]);

  function toggleSort(field: SortField) {
    if (sortField === field) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortDir("desc");
    }
  }

  function exportCsv() {
    const params = new URLSearchParams();
    if (statusFilter !== "all") params.set("status", statusFilter);
    if (emergencyOnly) params.set("emergency", "true");
    if (search.trim()) params.set("search", search.trim());
    window.location.href = `/api/admin/leads/export?${params}`;
  }

  function formatDate(iso: string) {
    return new Date(iso).toLocaleString();
  }

  return (
    <div className="min-h-screen bg-background">
      <AdminNav />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="no-print mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Leads</h1>
            <p className="text-sm text-muted">
              {leads.length} lead{leads.length !== 1 ? "s" : ""}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => window.print()}
              className="rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-surface-soft"
            >
              Print List
            </button>
            <button
              onClick={exportCsv}
              className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-light"
            >
              Download CSV
            </button>
          </div>
        </div>

        <div className="no-print mb-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <input
            type="search"
            placeholder="Search name, phone, email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-xl border border-border px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30 sm:w-64"
          />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-xl border border-border px-4 py-2 text-sm"
          >
            <option value="all">All statuses</option>
            {LEAD_STATUSES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={emergencyOnly}
              onChange={(e) => setEmergencyOnly(e.target.checked)}
              className="accent-emergency"
            />
            Emergency only
          </label>
        </div>

        {error && (
          <p className="mb-4 rounded-lg bg-emergency-bg px-4 py-3 text-sm text-emergency">
            {error}
          </p>
        )}

        {loading ? (
          <p className="text-muted">Loading leads...</p>
        ) : leads.length === 0 ? (
          <p className="rounded-xl border border-border bg-surface p-8 text-center text-muted">
            No leads found. New submissions will appear here.
          </p>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-border bg-surface shadow-sm">
            <table className="print-table w-full text-left text-sm">
              <thead className="border-b border-border bg-surface-soft">
                <tr>
                  <SortHeader
                    label="Date"
                    field="created_at"
                    current={sortField}
                    dir={sortDir}
                    onSort={toggleSort}
                  />
                  <SortHeader
                    label="Name"
                    field="name"
                    current={sortField}
                    dir={sortDir}
                    onSort={toggleSort}
                  />
                  <th className="px-4 py-3 font-semibold">Phone</th>
                  <th className="px-4 py-3 font-semibold">Email</th>
                  <th className="px-4 py-3 font-semibold">Service</th>
                  <SortHeader
                    label="Emergency"
                    field="is_emergency"
                    current={sortField}
                    dir={sortDir}
                    onSort={toggleSort}
                  />
                  <SortHeader
                    label="Status"
                    field="status"
                    current={sortField}
                    dir={sortDir}
                    onSort={toggleSort}
                  />
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr
                    key={lead.id}
                    className={`border-b border-border last:border-0 ${
                      lead.is_emergency ? "bg-emergency-bg/50" : ""
                    }`}
                  >
                    <td className="px-4 py-3 whitespace-nowrap">
                      {formatDate(lead.created_at)}
                    </td>
                    <td className="px-4 py-3">
                      <Link
                        href={`/admin/leads/${lead.id}`}
                        className="no-print font-medium text-primary hover:underline"
                      >
                        {lead.name}
                      </Link>
                      <span className="print-only">{lead.name}</span>
                    </td>
                    <td className="px-4 py-3">{lead.phone}</td>
                    <td className="px-4 py-3">{lead.email}</td>
                    <td className="px-4 py-3">{lead.service_type}</td>
                    <td className="px-4 py-3">
                      {lead.is_emergency ? (
                        <span className="rounded-full bg-emergency px-2 py-0.5 text-xs font-bold text-white">
                          EMERGENCY
                        </span>
                      ) : (
                        "—"
                      )}
                    </td>
                    <td className="px-4 py-3 capitalize">{lead.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="print-only hidden">
          <h1>{SITE_NAME} — Leads</h1>
          <p>Printed {new Date().toLocaleString()}</p>
        </div>
      </main>
    </div>
  );
}

function SortHeader({
  label,
  field,
  current,
  dir,
  onSort,
}: {
  label: string;
  field: SortField;
  current: SortField;
  dir: "asc" | "desc";
  onSort: (field: SortField) => void;
}) {
  return (
    <th className="no-print px-4 py-3 font-semibold">
      <button
        type="button"
        onClick={() => onSort(field)}
        className="flex items-center gap-1 hover:text-primary"
      >
        {label}
        {current === field && (dir === "asc" ? " ↑" : " ↓")}
      </button>
    </th>
  );
}
