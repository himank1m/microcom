"use client";

import { useEffect, useRef, useState } from "react";

type ViewsResponse = {
  configured: boolean;
  views: number | null;
};

function formatViews(value: number) {
  return value.toString().padStart(6, "0");
}

export function ViewCounter() {
  const [views, setViews] = useState(315);
  const hasTrackedView = useRef(false);

  useEffect(() => {
    const controller = new AbortController();
    const trackView = () => {
      if (hasTrackedView.current) {
        return;
      }

      hasTrackedView.current = true;

      void fetch(`/api/views?t=${Date.now()}`, {
        body: JSON.stringify({ path: window.location.pathname }),
        cache: "no-store",
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        signal: controller.signal
      })
        .then((response) => (response.ok ? response.json() : null))
        .then((data: ViewsResponse | null) => {
          if (typeof data?.views === "number") {
            setViews(data.views);
            (window as Window & { __microwareViews?: number }).__microwareViews = data.views;
          }
        })
        .catch(() => {
          setViews(315);
        });
    };

    trackView();

    return () => {
      controller.abort();
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
