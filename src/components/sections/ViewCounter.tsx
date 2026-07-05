"use client";

import { useEffect, useState } from "react";

type ViewsResponse = {
  configured: boolean;
  views: number | null;
};

function formatViews(value: number) {
  return value.toString().padStart(6, "0");
}

export function ViewCounter() {
  const [views, setViews] = useState(315);

  useEffect(() => {
    const controller = new AbortController();
    const getLiveViews = () => (window as Window & { __microwareViews?: number }).__microwareViews;
    const updateViews = (event: Event) => {
      const views = (event as CustomEvent<{ views?: unknown }>).detail?.views;

      if (typeof views === "number") {
        setViews(views);
      }
    };
    const fetchViews = () => {
      void fetch(`/api/views?t=${Date.now()}`, {
        cache: "no-store",
        signal: controller.signal
      })
        .then((response) => (response.ok ? response.json() : null))
        .then((data: ViewsResponse | null) => {
          setViews(data?.views ?? 315);
        })
        .catch(() => {
          setViews(315);
        });
    };

    window.addEventListener("microware:views", updateViews);

    const latestViews = getLiveViews();

    if (typeof latestViews === "number") {
      setViews(latestViews);
    }

    fetchViews();

    const delayedRefresh = window.setTimeout(fetchViews, 1200);
    const intervalRefresh = window.setInterval(fetchViews, 15000);

    return () => {
      controller.abort();
      window.clearTimeout(delayedRefresh);
      window.clearInterval(intervalRefresh);
      window.removeEventListener("microware:views", updateViews);
    };
  }, []);

  return (
    <section className="border-b border-border py-5">
      <div className="container flex justify-center">
        <p className="rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-muted-foreground">
          Website views <span className="tabular-nums text-primary">{formatViews(views)}</span>
        </p>
      </div>
    </section>
  );
}
