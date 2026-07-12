"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { SITE_NAME } from "@/lib/site";

export function AdminNav() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <header className="no-print border-b border-border bg-surface">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <div className="flex items-center gap-6">
          <Link href="/admin" className="font-bold text-primary">
            {SITE_NAME} Admin
          </Link>
          <nav className="flex gap-4 text-sm">
            <Link href="/admin" className="text-muted hover:text-foreground">
              Leads
            </Link>
            <Link
              href="/admin/settings"
              className="text-muted hover:text-foreground"
            >
              Settings
            </Link>
          </nav>
        </div>
        <button
          onClick={handleLogout}
          className="rounded-lg border border-border px-3 py-1.5 text-sm text-muted hover:bg-surface-soft"
        >
          Log out
        </button>
      </div>
    </header>
  );
}
