export function ViewCounter() {
  return (
    <p className="inline-flex w-fit items-center rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground">
      Website Views{" "}
      <span id="microware-view-count" className="ml-1 tabular-nums text-primary" aria-live="polite">
        ------
      </span>
    </p>
  );
}
