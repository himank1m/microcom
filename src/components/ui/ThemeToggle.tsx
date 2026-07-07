export function ThemeToggle() {
  return (
    <button
      type="button"
      className="theme-toggle focus-ring inline-flex size-10 items-center justify-center rounded-md border border-border bg-card text-foreground transition duration-200 hover:border-primary/50"
      aria-label="Toggle theme"
      title="Toggle theme"
      data-theme-toggle
    >
      <span className="theme-icon-sun" aria-hidden />
      <span className="theme-icon-moon" aria-hidden />
    </button>
  );
}
