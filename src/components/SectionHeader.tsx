interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function SectionHeader({ eyebrow, title, description }: Props) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <div className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-neon">
          {eyebrow}
        </div>
      )}
      <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-xl text-balance text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
