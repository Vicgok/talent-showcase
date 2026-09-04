create extension if not exists pgcrypto;

create table if not exists public.whattocook_waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  source text, medium text, campaign text, referrer text,
  created_at timestamptz not null default now(),
  constraint whattocook_waitlist_email_normalized check (email = lower(btrim(email)))
);

create unique index if not exists whattocook_waitlist_email_unique on public.whattocook_waitlist (email);
alter table public.whattocook_waitlist enable row level security;
revoke all on public.whattocook_waitlist from anon, authenticated;
drop policy if exists "whattocook_waitlist_no_anon_access" on public.whattocook_waitlist;
create policy "whattocook_waitlist_no_anon_access" on public.whattocook_waitlist
  as restrictive for all to anon, authenticated using (false) with check (false);
