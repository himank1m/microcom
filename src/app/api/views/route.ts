import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const totalViewsKey = "microware:views:total";
const pathViewsPrefix = "microware:views:path:";
const viewBaseline = 315;

type RedisResponse = {
  result?: unknown;
};

function getRedisConfig() {
  const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    return null;
  }

  return {
    token,
    url: url.replace(/\/$/, "")
  };
}

function parseCount(value: unknown) {
  if (typeof value === "number") {
    return value;
  }

  if (typeof value === "string") {
    const parsed = Number.parseInt(value, 10);
    return Number.isFinite(parsed) ? parsed : 0;
  }

  return 0;
}

async function redisCommand(command: string, ...parts: string[]) {
  const config = getRedisConfig();

  if (!config) {
    return null;
  }

  const path = [command, ...parts].map(encodeURIComponent).join("/");
  const response = await fetch(`${config.url}/${path}`, {
    headers: {
      Authorization: `Bearer ${config.token}`
    },
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error(`Redis command failed: ${response.status}`);
  }

  return (await response.json()) as RedisResponse;
}

export async function GET() {
  try {
    const data = await redisCommand("get", totalViewsKey);
    const storedViews = data ? parseCount(data.result) : 0;

    return NextResponse.json({
      configured: data !== null,
      views: viewBaseline + storedViews
    });
  } catch {
    return NextResponse.json({ configured: false, views: viewBaseline }, { status: 503 });
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json().catch(() => ({}))) as { path?: unknown };
    const path = typeof body.path === "string" && body.path.startsWith("/") ? body.path : "/";
    const total = await redisCommand("incr", totalViewsKey);

    if (!total) {
      return NextResponse.json({ configured: false, views: viewBaseline });
    }

    await redisCommand("incr", `${pathViewsPrefix}${path}`);

    return NextResponse.json({
      configured: true,
      views: viewBaseline + parseCount(total.result)
    });
  } catch {
    return NextResponse.json({ configured: false, views: viewBaseline }, { status: 503 });
  }
}
