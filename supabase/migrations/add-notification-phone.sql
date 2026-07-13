-- Run in Supabase SQL Editor if your settings table already exists without notification_phone.
alter table public.settings
  add column if not exists notification_phone text;
