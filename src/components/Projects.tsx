import { ArrowUpRight, Github, Zap } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const projects = [
  {
    name: "Project Alpha",
    problem: "Sales teams wasting hours on manual lead qualification.",
    solution: "AI agent that scores, enriches, and routes leads in real time.",
    impact: "10× faster qualification · 38% higher conversion",
    tags: ["LLM", "Automation", "Next.js"],
  },
  {
    name: "Project Nova",
    problem: "Support backlog growing faster than the team could handle.",
    solution: "Custom RAG copilot trained on internal docs and ticket history.",
    impact: "72% deflection rate · <2s response time",
    tags: ["RAG", "Embeddings", "FastAPI"],
  },
  {
    name: "Project Helix",
    problem: "Manual content review pipeline blocking release cycles.",
    solution: "Multi-agent system handling moderation, tagging, and publishing.",
    impact: "Reduced review time from 4h → 8min",
    tags: ["Agents", "OpenAI", "Postgres"],
  },
  {
    name: "Project Pulse",
    problem: "Founders flying blind on product analytics.",
    solution: "Natural-language analytics layer over their data warehouse.",
    impact: "From query to insight in seconds, no SQL needed",
    tags: ["Text-to-SQL", "Analytics", "React"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Proof of Work"
          title="Shipped, Not Sketched"
          description="Real systems, in production, solving real problems. Replace with your own."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.name}
              className="card-premium group relative overflow-hidden rounded-2xl p-7"
            >
              {/* corner glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-neon/10 blur-3xl transition-opacity group-hover:opacity-100 opacity-50" />

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">{p.name}</h3>
                  <div className="mt-1 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-surface-elevated px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-elevated transition-all group-hover:border-neon/50 group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4 text-neon" />
                </div>
              </div>

              <div className="mt-6 space-y-3 text-sm">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Problem</div>
                  <p className="mt-1 text-foreground/90">{p.problem}</p>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Solution</div>
                  <p className="mt-1 text-foreground/90">{p.solution}</p>
                </div>
                <div className="flex items-start gap-2 rounded-lg border border-neon/20 bg-neon/5 p-3">
                  <Zap className="mt-0.5 h-4 w-4 shrink-0 text-neon" />
                  <p className="text-sm font-medium text-foreground">{p.impact}</p>
                </div>
              </div>

              <div className="mt-6 flex gap-2">
                <a
                  href="#"
                  className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-foreground px-4 py-2 text-xs font-semibold text-background transition-transform hover:scale-[1.02]"
                >
                  Live Demo <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <a
                  href="#"
                  className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border bg-secondary/50 px-4 py-2 text-xs font-semibold transition-colors hover:border-neon/50"
                >
                  <Github className="h-3.5 w-3.5" /> View Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
