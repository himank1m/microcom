import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const totalViewsId = "total";
const pathViewsPrefix = "path:";
const viewBaseline = 315;

type ViewRow = {
  count: number | string | null;
};

function getSupabaseConfig() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL;
  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY ??
    process.env.SUPABASE_SERVICE_KEY ??
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    return null;
  }

  return { key, url };
}

function getSupabaseServerClient() {
  const config = getSupabaseConfig();

  if (!config) {
    return null;
  }

  return createClient(config.url, config.key, {
    auth: {
      persistSession: false
    }
  });
}

function parseCount(value: unknown) {
  if (typeof value === "number") {
    return value;
  }

  if (typeof value === "string") {
    const parsed = Number.parseInt(value, 10);
    return Number.isFinite(parsed) ? parsed : viewBaseline;
  }

  return viewBaseline;
}

function normalizePath(value: unknown) {
  return typeof value === "string" && value.startsWith("/") ? value : "/";
}

async function getViewCount(client: NonNullable<ReturnType<typeof getSupabaseServerClient>>) {
  const { data, error } = await client
    .from("site_views")
    .select("count")
    .eq("id", totalViewsId)
    .maybeSingle<ViewRow>();

  if (error) {
    throw error;
  }

  return parseCount(data?.count);
}

async function incrementViewCount(
  client: NonNullable<ReturnType<typeof getSupabaseServerClient>>,
  rowId: string
) {
  const { data, error } = await client.rpc("increment_site_views", { row_id: rowId });

  if (error) {
    throw error;
  }

  return parseCount(data);
}

export async function GET() {
  try {
    const client = getSupabaseServerClient();

    if (!client) {
      return NextResponse.json({ configured: false, views: viewBaseline });
    }

    return NextResponse.json({
      configured: true,
      views: await getViewCount(client)
    });
  } catch {
    return NextResponse.json({ configured: false, views: viewBaseline }, { status: 503 });
  }
}

export async function POST(request: Request) {
  try {
    const client = getSupabaseServerClient();

    if (!client) {
      return NextResponse.json({ configured: false, views: viewBaseline });
    }

    const body = (await request.json().catch(() => ({}))) as { path?: unknown };
    const path = normalizePath(body.path);
    const views = await incrementViewCount(client, totalViewsId);

    await incrementViewCount(client, `${pathViewsPrefix}${path}`).catch(() => {
      // Per-route counts are useful, but total count should still succeed if this fails.
    });

    return NextResponse.json({
      configured: true,
      views
    });
  } catch {
    return NextResponse.json({ configured: false, views: viewBaseline }, { status: 503 });
  }
}
