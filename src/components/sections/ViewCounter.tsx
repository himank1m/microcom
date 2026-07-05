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
    const updateViews = (event: Event) => {
      const views = (event as CustomEvent<{ views?: unknown }>).detail?.views;

      if (typeof views === "number") {
        setViews(views);
      }
    };

    window.addEventListener("microware:views", updateViews);

    void fetch("/api/views", {
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

    return () => {
      controller.abort();
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
