create table if not exists public.site_views (
  id text primary key,
  count bigint not null default 315,
  updated_at timestamptz not null default now()
);

insert into public.site_views (id, count)
values ('total', 315)
on conflict (id) do nothing;

create or replace function public.increment_site_views(row_id text)
returns bigint
language plpgsql
security definer
set search_path = public
as $$
declare
  new_count bigint;
begin
  insert into public.site_views (id, count)
  values (row_id, 315)
  on conflict (id) do update
  set count = site_views.count + 1,
      updated_at = now()
  returning count into new_count;

  return new_count;
end;
$$;
