"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ViewTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const controller = new AbortController();

    void fetch("/api/views", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ path: pathname }),
      keepalive: true,
      signal: controller.signal
    })
      .then((response) => (response.ok ? response.json() : null))
      .then((data: { views?: unknown } | null) => {
        if (typeof data?.views === "number") {
          (window as Window & { __microwareViews?: number }).__microwareViews = data.views;
          window.dispatchEvent(new CustomEvent("microware:views", { detail: { views: data.views } }));
        }
      })
      .catch(() => {
        // View tracking is best-effort and should never affect browsing.
      });

    return () => {
      controller.abort();
    };
  }, [pathname]);

  return null;
}
