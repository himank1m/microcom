create table if not exists public.site_views (
  id text primary key,
  count bigint not null default 0,
  updated_at timestamptz not null default now()
);

alter table public.site_views enable row level security;

drop policy if exists "Allow public read access to site views" on public.site_views;

create policy "Allow public read access to site views"
on public.site_views
for select
to anon, authenticated
using (true);

insert into public.site_views (id, count)
values ('total', 315)
on conflict (id) do nothing;

drop function if exists public.increment_site_views(text);

create function public.increment_site_views(row_id text)
returns bigint
language sql
security definer
set search_path = public
as '
  insert into public.site_views (id, count)
  values (
    row_id,
    case
      when row_id = ''total'' then 316
      else 1
    end
  )
  on conflict (id) do update
  set count = public.site_views.count + 1,
      updated_at = now()
  returning count;
';

grant usage on schema public to anon, authenticated;
grant select on public.site_views to anon, authenticated;
grant execute on function public.increment_site_views(text) to anon, authenticated;
