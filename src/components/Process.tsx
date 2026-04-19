import { SectionHeader } from "./SectionHeader";

const steps = [
  { n: "01", title: "Understand", desc: "Deep dive into the problem, users, and constraints. No solution before clarity." },
  { n: "02", title: "Design", desc: "Architect an AI-driven solution that fits the real workflow, not a slide deck." },
  { n: "03", title: "Build", desc: "Ship a fast MVP that proves the impact in days — not months." },
  { n: "04", title: "Iterate", desc: "Deploy, measure, iterate. A production system that compounds over time." },
];

export function Process() {
  return (
    <section id="process" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="Process" title="How I Work" description="Four steps. No theatre." />

        <div className="relative mt-16">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block" />

          <div className="grid gap-6 md:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="relative">
                <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-border bg-background font-mono text-sm font-semibold text-neon transition-all hover:border-neon hover:shadow-[0_0_30px_-5px_color-mix(in_oklab,var(--neon)_70%,transparent)]">
                  {s.n}
                </div>
                <div className="mt-5 text-center">
                  <h3 className="font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
