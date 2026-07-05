create table if not exists public.site_views (
  id text primary key,
  count bigint not null default 0,
  updated_at timestamptz not null default now()
);

alter table public.site_views enable row level security;

drop policy if exists "Allow public read access to site views" on public.site_views;
drop policy if exists "Allow public insert access to site views" on public.site_views;
drop policy if exists "Allow public update access to site views" on public.site_views;

create policy "Allow public read access to site views"
on public.site_views
for select
to anon, authenticated
using (true);

create policy "Allow public insert access to site views"
on public.site_views
for insert
to anon, authenticated
with check (true);

create policy "Allow public update access to site views"
on public.site_views
for update
to anon, authenticated
using (true)
with check (true);

insert into public.site_views (id, count)
values ('total', 315)
on conflict (id) do nothing;

grant usage on schema public to anon, authenticated;
grant select, insert, update on public.site_views to anon, authenticated;
