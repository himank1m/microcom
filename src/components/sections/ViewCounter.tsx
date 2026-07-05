"use client";

import { useEffect, useState } from "react";

type ViewsResponse = {
  configured: boolean;
  views: number | null;
};

export function ViewCounter() {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    void fetch("/api/views", {
      cache: "no-store",
      signal: controller.signal
    })
      .then((response) => (response.ok ? response.json() : null))
      .then((data: ViewsResponse | null) => {
        setViews(data?.views ?? null);
      })
      .catch(() => {
        setViews(null);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <section className="border-b border-border py-5">
      <div className="container flex justify-center">
        <p className="rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-muted-foreground">
          Website views <span className="tabular-nums text-primary">{views === null ? "--" : views.toLocaleString("en-IN")}</span>
        </p>
      </div>
    </section>
  );
}
