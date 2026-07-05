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
    }).catch(() => {
      // View tracking is best-effort and should never affect browsing.
    });

    return () => {
      controller.abort();
    };
  }, [pathname]);

  return null;
}
