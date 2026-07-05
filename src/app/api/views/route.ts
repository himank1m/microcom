import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const totalViewsId = "total";
const pathViewsPrefix = "path:";
const viewBaseline = 315;

type ViewRow = {
  count: number | string | null;
};

function getErrorDetails(error: unknown) {
  if (error && typeof error === "object") {
    const details = error as { code?: unknown; details?: unknown; hint?: unknown; message?: unknown };

    return {
      code: typeof details.code === "string" ? details.code : undefined,
      details: typeof details.details === "string" ? details.details : undefined,
      hint: typeof details.hint === "string" ? details.hint : undefined,
      message: typeof details.message === "string" ? details.message : "Unknown Supabase error"
    };
  }

  return {
    message: error instanceof Error ? error.message : "Unknown Supabase error"
  };
}

function json(body: Record<string, unknown>, init?: ResponseInit) {
  return NextResponse.json(body, {
    ...init,
    headers: {
      "Cache-Control": "no-store",
      ...init?.headers
    }
  });
}

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

async function ensureViewRow(client: SupabaseClient, rowId: string, count: number) {
  const { error } = await client.from("site_views").upsert(
    {
      count,
      id: rowId
    },
    {
      ignoreDuplicates: true,
      onConflict: "id"
    }
  );

  if (error) {
    throw error;
  }
}

async function getViewCount(client: SupabaseClient) {
  const { data, error } = await client
    .from("site_views")
    .select("count")
    .eq("id", totalViewsId)
    .maybeSingle<ViewRow>();

  if (error) {
    throw error;
  }

  if (!data) {
    await ensureViewRow(client, totalViewsId, viewBaseline);
    return viewBaseline;
  }

  return parseCount(data.count);
}

async function incrementViewCount(client: SupabaseClient, rowId: string) {
  const initialCount = rowId === totalViewsId ? viewBaseline + 1 : 1;
  const current = await client.from("site_views").select("count").eq("id", rowId).maybeSingle<ViewRow>();

  if (current.error) {
    throw current.error;
  }

  if (!current.data) {
    const inserted = await client.from("site_views").insert({ count: initialCount, id: rowId }).select("count").single<ViewRow>();

    if (inserted.error) {
      throw inserted.error;
    }

    return parseCount(inserted.data.count);
  }

  const nextCount = parseCount(current.data.count) + 1;
  const updated = await client
    .from("site_views")
    .update({
      count: nextCount
    })
    .eq("id", rowId)
    .select("count")
    .single<ViewRow>();

  if (updated.error) {
    throw updated.error;
  }

  return parseCount(updated.data.count);
}

export async function GET() {
  try {
    const client = getSupabaseServerClient();

    if (!client) {
      return json({ configured: false, reason: "missing_supabase_env", views: viewBaseline });
    }

    return json({
      configured: true,
      views: await getViewCount(client)
    });
  } catch (error) {
    return json(
      { configured: false, error: getErrorDetails(error), reason: "supabase_read_failed", views: viewBaseline },
      { status: 503 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const client = getSupabaseServerClient();

    if (!client) {
      return json({ configured: false, reason: "missing_supabase_env", views: viewBaseline });
    }

    const body = (await request.json().catch(() => ({}))) as { path?: unknown };
    const path = normalizePath(body.path);
    const views = await incrementViewCount(client, totalViewsId);

    await incrementViewCount(client, `${pathViewsPrefix}${path}`).catch(() => {
      // Per-route counts are useful, but total count should still succeed if this fails.
    });

    return json({
      configured: true,
      views
    });
  } catch (error) {
    return json(
      { configured: false, error: getErrorDetails(error), reason: "supabase_increment_failed", views: viewBaseline },
      { status: 503 }
    );
  }
}
