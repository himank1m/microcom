"use client";

import { useEffect, useState } from "react";

const storageKey = "microware-home-views";

export function ViewCounter() {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    const storedViews = Number.parseInt(window.localStorage.getItem(storageKey) ?? "0", 10);
    const nextViews = Number.isFinite(storedViews) ? storedViews + 1 : 1;

    window.localStorage.setItem(storageKey, String(nextViews));
    setViews(nextViews);
  }, []);

  return (
    <section className="border-b border-border py-5">
      <div className="container flex justify-center">
        <p className="rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-muted-foreground">
          Local views <span className="tabular-nums text-primary">{views === null ? "--" : views.toLocaleString("en-IN")}</span>
        </p>
      </div>
    </section>
  );
}
