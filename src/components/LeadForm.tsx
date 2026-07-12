"use client";

import { useState } from "react";
import { leadFormSchema, type LeadFormInput } from "@/lib/validation/lead";
import { SERVICE_TYPES } from "@/lib/types/lead";

const initialForm: LeadFormInput = {
  name: "",
  phone: "",
  email: "",
  address: "",
  service_type: "Leak/Burst pipe",
  description: "",
  is_emergency: false,
  website: "",
};

type FieldErrors = Partial<Record<keyof LeadFormInput, string>>;

export function LeadForm() {
  const [form, setForm] = useState<LeadFormInput>(initialForm);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState("");

  function updateField<K extends keyof LeadFormInput>(
    key: K,
    value: LeadFormInput[K],
  ) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
    setServerError("");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerError("");

    const parsed = leadFormSchema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: FieldErrors = {};
      parsed.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof LeadFormInput;
        if (!fieldErrors[field]) {
          fieldErrors[field] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      const data = await res.json();

      if (!res.ok) {
        setServerError(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setSuccess(true);
      setForm(initialForm);
    } catch {
      setServerError("Unable to connect. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <div
        id="lead-form"
        className="rounded-2xl border border-accent/30 bg-surface p-8 text-center shadow-lg sm:p-10"
      >
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-3xl">
          ✅
        </div>
        <h2 className="text-2xl font-bold text-foreground">Got it!</h2>
        <p className="mt-2 text-lg text-muted">
          A plumber will reach out ASAP.
        </p>
        <button
          type="button"
          onClick={() => setSuccess(false)}
          className="mt-6 text-sm font-semibold text-primary hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  const emergencyActive = form.is_emergency;

  return (
    <div
      id="lead-form"
      className={`rounded-2xl border bg-surface p-6 shadow-lg transition sm:p-8 ${
        emergencyActive
          ? "border-emergency ring-2 ring-emergency/20"
          : "border-border"
      }`}
    >
      <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
        Get a plumber to call you back
      </h2>
      <p className="mt-2 text-muted">
        Fill out the form below and someone will get back to you ASAP.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
        <div className="honeypot" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={form.website ?? ""}
            onChange={(e) => updateField("website", e.target.value)}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Full name" error={errors.name} required>
            <input
              type="text"
              value={form.name}
              onChange={(e) => updateField("name", e.target.value)}
              className={inputClass(errors.name)}
              placeholder="John Smith"
            />
          </Field>
          <Field label="Phone" error={errors.phone} required>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => updateField("phone", e.target.value)}
              className={inputClass(errors.phone)}
              placeholder="(555) 123-4567"
            />
          </Field>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Email" error={errors.email} required>
            <input
              type="email"
              value={form.email}
              onChange={(e) => updateField("email", e.target.value)}
              className={inputClass(errors.email)}
              placeholder="you@email.com"
            />
          </Field>
          <Field label="Service address / ZIP" error={errors.address} required>
            <input
              type="text"
              value={form.address}
              onChange={(e) => updateField("address", e.target.value)}
              className={inputClass(errors.address)}
              placeholder="123 Main St or 90210"
            />
          </Field>
        </div>

        <Field label="Service needed" error={errors.service_type} required>
          <select
            value={form.service_type}
            onChange={(e) =>
              updateField("service_type", e.target.value as LeadFormInput["service_type"])
            }
            className={inputClass(errors.service_type)}
          >
            {SERVICE_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Brief description (optional)" error={errors.description}>
          <textarea
            value={form.description ?? ""}
            onChange={(e) => updateField("description", e.target.value)}
            rows={3}
            className={inputClass(errors.description)}
            placeholder="Describe the problem..."
          />
        </Field>

        <label
          className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition ${
            emergencyActive
              ? "border-emergency bg-emergency-bg"
              : "border-border bg-surface-soft"
          }`}
        >
          <input
            type="checkbox"
            checked={form.is_emergency}
            onChange={(e) => updateField("is_emergency", e.target.checked)}
            className="mt-1 h-5 w-5 accent-emergency"
          />
          <span>
            <span
              className={`block font-semibold ${emergencyActive ? "text-emergency" : "text-foreground"}`}
            >
              This is an emergency
            </span>
            <span className="text-sm text-muted">
              Check this if you need immediate help (burst pipe, flooding, no
              water, etc.)
            </span>
          </span>
        </label>

        {serverError && (
          <p className="rounded-lg bg-emergency-bg px-4 py-3 text-sm text-emergency">
            {serverError}
          </p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-full bg-primary py-4 text-base font-semibold text-white shadow-md transition hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? "Submitting..." : "Request a Call Back"}
        </button>
      </form>
    </div>
  );
}

function inputClass(hasError?: string) {
  return `w-full rounded-xl border px-4 py-3 text-base outline-none transition focus:ring-2 focus:ring-primary/30 ${
    hasError ? "border-emergency" : "border-border bg-surface"
  }`;
}

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-emergency"> *</span>}
      </label>
      {children}
      {error && <p className="mt-1 text-sm text-emergency">{error}</p>}
    </div>
  );
}
