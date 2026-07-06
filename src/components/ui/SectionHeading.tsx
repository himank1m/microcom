type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  level?: "h1" | "h2";
};

export function SectionHeading({ eyebrow, title, description, align = "left", level = "h2" }: SectionHeadingProps) {
  const Heading = level;

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
      ) : null}
      <Heading className="text-balance text-3xl font-semibold leading-tight text-foreground sm:text-4xl">{title}</Heading>
      {description ? <p className="mt-4 text-pretty text-base leading-7 text-muted-foreground">{description}</p> : null}
    </div>
  );
}
