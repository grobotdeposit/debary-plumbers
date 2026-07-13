"use client";

import { useEffect, useState } from "react";
import { AdminNav } from "@/components/admin/AdminNav";

export default function AdminSettingsPage() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/admin/settings");
        if (!res.ok) {
          setError("Failed to load settings.");
          return;
        }
        const data = await res.json();
        setEmail(data.settings.notification_email ?? "");
        setPhone(data.settings.notification_phone ?? "");
      } catch {
        setError("Failed to load settings.");
      } finally {
        setLoading(false);
      }
    }
    void load();
  }, []);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setMessage("");
    setError("");
    try {
      const res = await fetch("/api/admin/settings", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          notification_email: email,
          notification_phone: phone,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Failed to save settings.");
        return;
      }
      setMessage("Notification settings updated.");
    } catch {
      setError("Failed to save settings.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <AdminNav />
      <main className="mx-auto max-w-xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        <p className="mt-2 text-muted">
          Configure where new lead alerts are sent by email and text message.
        </p>

        {loading ? (
          <p className="mt-6 text-muted">Loading...</p>
        ) : (
          <form onSubmit={handleSave} className="mt-6 space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium">
                Notification email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-xl border border-border px-4 py-3 outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="you@email.com"
              />
              <p className="mt-1 text-xs text-muted">
                Receives an email every time a new lead is submitted.
              </p>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">
                Notification phone (SMS)
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-xl border border-border px-4 py-3 outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="(407) 555-1234"
              />
              <p className="mt-1 text-xs text-muted">
                Receives a text message for each new lead. Requires Twilio env
                vars on Vercel. Leave blank to disable SMS alerts.
              </p>
            </div>
            <button
              type="submit"
              disabled={saving}
              className="rounded-full bg-primary px-6 py-2.5 font-semibold text-white hover:bg-primary-light disabled:opacity-60"
            >
              {saving ? "Saving..." : "Save Settings"}
            </button>
            {message && <p className="text-sm text-accent">{message}</p>}
            {error && <p className="text-sm text-emergency">{error}</p>}
          </form>
        )}
      </main>
    </div>
  );
}
