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
  const [views, setViews] = useState<number | null>(null);
  const hasTrackedView = useRef(false);

  useEffect(() => {
    const controller = new AbortController();
    const storedViews = window.localStorage.getItem("microware:views");

    if (storedViews) {
      const parsedViews = Number.parseInt(storedViews, 10);

      if (Number.isFinite(parsedViews)) {
        setViews(parsedViews);
      }
    }

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
            window.localStorage.setItem("microware:views", String(data.views));
            (window as Window & { __microwareViews?: number }).__microwareViews = data.views;
          }
        })
        .catch(() => {});
    };

    let idleCallback: number | null = null;
    let timeout: ReturnType<typeof globalThis.setTimeout> | null = null;

    if (typeof window.requestIdleCallback === "function") {
      idleCallback = window.requestIdleCallback(trackView, { timeout: 2500 });
    } else {
      timeout = globalThis.setTimeout(trackView, 1200);
    }

    return () => {
      controller.abort();
      if (idleCallback !== null) {
        window.cancelIdleCallback(idleCallback);
      }

      if (timeout !== null) {
        globalThis.clearTimeout(timeout);
      }
    };
  }, []);

  return (
    <p className="inline-flex w-fit items-center rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground">
      Website Views{" "}
      <span className="ml-1 tabular-nums text-primary" aria-live="polite">
        {typeof views === "number" ? formatViews(views) : "------"}
      </span>
    </p>
  );
}
