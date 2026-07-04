import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container flex min-h-[55vh] items-center justify-center">
        <div className="max-w-xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">404</p>
          <h1 className="mt-4 text-4xl font-semibold text-foreground">Page not found</h1>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            The page you are looking for may have moved, or the link may no longer be available.
          </p>
          <Button href="/" className="mt-8">Return Home</Button>
        </div>
      </div>
    </section>
  );
}
