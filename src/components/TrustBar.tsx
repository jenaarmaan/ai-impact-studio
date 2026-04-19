const stats = [
  { value: "20+", label: "AI Projects Built" },
  { value: "100%", label: "End-to-End Deployments" },
  { value: "12", label: "Live Production Systems" },
  { value: "<2wk", label: "Avg. MVP Delivery" },
];

export function TrustBar() {
  return (
    <section className="relative border-y border-border/60 bg-surface/30 py-10 backdrop-blur">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center md:text-left">
            <div className="text-3xl font-semibold tracking-tight text-neon-gradient sm:text-4xl">
              {s.value}
            </div>
            <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
