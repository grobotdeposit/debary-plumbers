-- Debary Plumbers (debaryplumbers.com) — database schema
-- Run this in the Supabase SQL Editor after creating your project.

-- leads table: stores all form submissions
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  phone text not null,
  email text not null,
  address text not null,
  service_type text not null,
  description text,
  is_emergency boolean not null default false,
  status text not null default 'new' check (status in ('new', 'contacted', 'sold', 'closed')),
  notes text
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_is_emergency_idx on public.leads (is_emergency desc, created_at desc);
create index if not exists leads_status_idx on public.leads (status);

-- settings table: single-row config for notification email and SMS
create table if not exists public.settings (
  id int primary key default 1 check (id = 1),
  notification_email text,
  notification_phone text,
  updated_at timestamptz default now()
);

-- Security: RLS enabled with NO public policies.
-- The anon key cannot read or write leads or settings.
-- All database access goes through Next.js server routes using the service role key,
-- which bypasses RLS. This keeps the public site from talking to the DB directly.
alter table public.leads enable row level security;
alter table public.settings enable row level security;

-- Seed the single settings row (update notification_email to your real address)
insert into public.settings (id, notification_email)
values (1, 'your-email@example.com')
on conflict (id) do nothing;
