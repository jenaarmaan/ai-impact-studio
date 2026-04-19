import { Check } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const points = [
  {
    title: "Production-ready, not experiments",
    desc: "Every system we ship runs in production with real users and real accountability.",
  },
  {
    title: "Built around real workflows",
    desc: "We design for the actual business process, not isolated models in a notebook.",
  },
  {
    title: "AI + Engineering + Product",
    desc: "We combine all three disciplines so what we build is intelligent, reliable, and usable.",
  },
  {
    title: "Optimized for usability",
    desc: "Smart isn't enough. Our systems are fast, clear, and obvious to the people who use them.",
  },
];

export function WhyMe() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="Differentiation" title="Why ACube?" />

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {points.map((p) => (
            <div
              key={p.title}
              className="group flex gap-4 rounded-2xl border border-border bg-surface/40 p-6 backdrop-blur transition-all hover:border-neon/40 hover:bg-surface/60"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neon/10 ring-1 ring-neon/30">
                <Check className="h-4 w-4 text-neon" />
              </div>
              <div>
                <h3 className="font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
