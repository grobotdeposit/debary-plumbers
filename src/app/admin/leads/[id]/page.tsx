"use client";

import { useCallback, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { AdminNav } from "@/components/admin/AdminNav";
import type { Lead, LeadStatus } from "@/lib/types/lead";
import { LEAD_STATUSES } from "@/lib/types/lead";

export default function LeadDetailPage() {
  const params = useParams();
  const id = params.id as string;

  const [lead, setLead] = useState<Lead | null>(null);
  const [status, setStatus] = useState<LeadStatus>("new");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const [emailTo, setEmailTo] = useState("");
  const [emailSending, setEmailSending] = useState(false);
  const [emailMessage, setEmailMessage] = useState("");

  const fetchLead = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/leads/${id}`);
      if (!res.ok) {
        setError("Lead not found.");
        return;
      }
      const data = await res.json();
      setLead(data.lead);
      setStatus(data.lead.status);
      setNotes(data.lead.notes ?? "");
    } catch {
      setError("Failed to load lead.");
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    void fetchLead();
  }, [fetchLead]);

  async function handleSave() {
    setSaving(true);
    setMessage("");
    setError("");
    try {
      const res = await fetch(`/api/admin/leads/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status, notes: notes || null }),
      });
      if (!res.ok) {
        setError("Failed to save changes.");
        return;
      }
      const data = await res.json();
      setLead(data.lead);
      setMessage("Saved successfully.");
    } catch {
      setError("Failed to save changes.");
    } finally {
      setSaving(false);
    }
  }

  async function handleEmailLead() {
    setEmailSending(true);
    setEmailMessage("");
    try {
      const res = await fetch(`/api/admin/leads/${id}/email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ to: emailTo }),
      });
      const data = await res.json();
      if (!res.ok) {
        setEmailMessage(data.error ?? "Failed to send email.");
        return;
      }
      setEmailMessage("Lead forwarded successfully!");
      setEmailTo("");
    } catch {
      setEmailMessage("Failed to send email.");
    } finally {
      setEmailSending(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <AdminNav />
        <main className="mx-auto max-w-3xl px-4 py-8">
          <p className="text-muted">Loading...</p>
        </main>
      </div>
    );
  }

  if (!lead) {
    return (
      <div className="min-h-screen bg-background">
        <AdminNav />
        <main className="mx-auto max-w-3xl px-4 py-8">
          <p className="text-emergency">{error || "Lead not found."}</p>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <AdminNav />
      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <div className="no-print mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground">{lead.name}</h1>
          <button
            onClick={() => window.print()}
            className="rounded-lg border border-border px-4 py-2 text-sm hover:bg-surface-soft"
          >
            Print
          </button>
        </div>

        {lead.is_emergency && (
          <div className="mb-6 rounded-xl border-2 border-emergency bg-emergency-bg px-4 py-3 font-semibold text-emergency">
            EMERGENCY LEAD — respond ASAP
          </div>
        )}

        <div className="rounded-xl border border-border bg-surface p-6 shadow-sm">
          <dl className="grid gap-4 sm:grid-cols-2">
            <Detail label="Submitted" value={new Date(lead.created_at).toLocaleString()} />
            <Detail label="Phone" value={lead.phone} />
            <Detail label="Email" value={lead.email} />
            <Detail label="Address" value={lead.address} />
            <Detail label="Service" value={lead.service_type} />
            <Detail
              label="Emergency"
              value={lead.is_emergency ? "Yes" : "No"}
            />
          </dl>
          {lead.description && (
            <div className="mt-4">
              <p className="text-sm font-medium text-muted">Description</p>
              <p className="mt-1 text-foreground">{lead.description}</p>
            </div>
          )}
        </div>

        <div className="no-print mt-6 space-y-4 rounded-xl border border-border bg-surface p-6">
          <h2 className="font-semibold text-foreground">Admin notes</h2>
          <div>
            <label className="mb-1 block text-sm font-medium">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as LeadStatus)}
              className="w-full rounded-xl border border-border px-4 py-2"
            >
              {LEAD_STATUSES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">
              Internal notes
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={4}
              className="w-full rounded-xl border border-border px-4 py-2"
              placeholder="Notes visible only to admin..."
            />
          </div>
          <button
            onClick={handleSave}
            disabled={saving}
            className="rounded-full bg-primary px-6 py-2 font-semibold text-white hover:bg-primary-light disabled:opacity-60"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
          {message && <p className="text-sm text-accent">{message}</p>}
          {error && <p className="text-sm text-emergency">{error}</p>}
        </div>

        <div className="no-print mt-6 rounded-xl border border-border bg-surface p-6">
          <h2 className="font-semibold text-foreground">Email this lead</h2>
          <p className="mt-1 text-sm text-muted">
            Forward lead details to a plumbing company or partner.
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              value={emailTo}
              onChange={(e) => setEmailTo(e.target.value)}
              placeholder="recipient@company.com"
              className="flex-1 rounded-xl border border-border px-4 py-2"
            />
            <button
              onClick={handleEmailLead}
              disabled={emailSending || !emailTo}
              className="rounded-full bg-accent px-6 py-2 font-semibold text-white hover:bg-accent/90 disabled:opacity-60"
            >
              {emailSending ? "Sending..." : "Send Email"}
            </button>
          </div>
          {emailMessage && (
            <p
              className={`mt-2 text-sm ${emailMessage.includes("success") ? "text-accent" : "text-emergency"}`}
            >
              {emailMessage}
            </p>
          )}
        </div>
      </main>
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-sm font-medium text-muted">{label}</dt>
      <dd className="mt-0.5 text-foreground">{value}</dd>
    </div>
  );
}
