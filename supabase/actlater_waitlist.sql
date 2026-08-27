create extension if not exists pgcrypto;

create table if not exists public.actlater_waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  primary_platform text,
  content_types text[],
  frustration text,
  source text,
  medium text,
  campaign text,
  referrer text,
  created_at timestamptz not null default now(),
  constraint actlater_waitlist_email_normalized check (email = lower(btrim(email)))
);

create unique index if not exists actlater_waitlist_email_unique
  on public.actlater_waitlist (email);

alter table public.actlater_waitlist enable row level security;

revoke all on public.actlater_waitlist from anon, authenticated;

drop policy if exists "actlater_waitlist_no_anon_access" on public.actlater_waitlist;
create policy "actlater_waitlist_no_anon_access"
  on public.actlater_waitlist
  as restrictive
  for all
  to anon, authenticated
  using (false)
  with check (false);
