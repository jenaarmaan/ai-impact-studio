import { Check } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const points = [
  {
    title: "Usable systems, not demos",
    desc: "Anything I ship runs in production with real users — not a Twitter screenshot.",
  },
  {
    title: "Real-world impact first",
    desc: "Every decision is measured against time saved, revenue gained, or pain removed.",
  },
  {
    title: "Fast execution, clean architecture",
    desc: "Move quickly without leaving a mess. Future-you (and your team) will thank me.",
  },
  {
    title: "AI + Engineering + Product",
    desc: "I think like a product owner, build like an engineer, and design like an AI native.",
  },
];

export function WhyMe() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="Differentiation" title="Why Me?" />

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
