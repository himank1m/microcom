export function ThemeToggle() {
  return (
    <button
      type="button"
      className="theme-toggle focus-ring inline-flex size-10 items-center justify-center rounded-md border border-border bg-card text-foreground transition duration-200 hover:border-primary/50"
      aria-label="Toggle theme"
      title="Toggle theme"
      data-theme-toggle
    >
      <span className="hidden size-4 rounded-full border-2 border-current dark:block" aria-hidden />
      <span className="size-4 rounded-full bg-current shadow-[-5px_0_0_hsl(var(--card))] dark:hidden" aria-hidden />
    </button>
  );
}
