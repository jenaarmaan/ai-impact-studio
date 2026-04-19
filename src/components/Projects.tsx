import { ArrowUpRight, Github, Zap } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const projects = [
  {
    name: "PromptPilot",
    problem: "Teams waste hours rewriting prompts and losing track of what actually works.",
    solution: "A prompt workspace that versions, tests, and ranks prompts against real outputs.",
    impact: "5× faster prompt iteration · centralized prompt library across the team",
    tags: ["LLM", "Prompt Ops", "React"],
    demo: "https://promptpilot-kohl.vercel.app/",
    code: "https://github.com/ca-cube/PromptPilot.git",
  },
  {
    name: "AI Confidence Evidence Layer",
    problem: "LLM answers ship without proof, so teams can't trust them in critical workflows.",
    solution: "An evidence layer that attaches sources, confidence scores, and reasoning to every AI response.",
    impact: "Audit-ready AI outputs · review time cut from minutes to seconds",
    tags: ["RAG", "Trust", "Evaluation"],
    demo: "https://confidenceprooflayer.vercel.app/",
    code: "https://github.com/ca-cube/AI-Confidence-Evidence-Layer.git",
  },
  {
    name: "Business Context Engine",
    problem: "Generic LLMs don't understand a company's products, customers, or internal language.",
    solution: "A context engine that ingests business data and grounds every model call in the right facts.",
    impact: "Higher answer accuracy · zero hallucinations on core business questions",
    tags: ["Context", "Embeddings", "RAG"],
    demo: "https://businesscontextengine.vercel.app/",
    code: "https://github.com/ca-cube/Business-Context-Engine.git",
  },
  {
    name: "AI Decision Receipt System",
    problem: "AI-driven decisions disappear into a black box with no record of why they were made.",
    solution: "Generates a structured decision receipt — inputs, reasoning, and outcome — for every AI action.",
    impact: "Full decision traceability · compliance-ready logs out of the box",
    tags: ["Governance", "Logging", "LLM"],
    demo: "https://decisionreceiptsystem.vercel.app/",
    code: "https://github.com/ca-cube/AI-Decision-Receipt-System.git",
  },
  {
    name: "AI Feedback Intelligence Dashboard",
    problem: "Customer feedback piles up across channels and never reaches the people who can act on it.",
    solution: "Aggregates feedback, clusters themes, and surfaces what's actually moving retention and revenue.",
    impact: "Hours of manual triage replaced with minutes of insight review",
    tags: ["NLP", "Analytics", "Dashboard"],
    demo: "https://feedbackintelligence.vercel.app/",
    code: "https://github.com/ca-cube/AI-Feedback-Intelligence-Dashboard.git",
  },
  {
    name: "Unified Knowledge AI",
    problem: "Company knowledge is fragmented across docs, chats, and tools nobody searches.",
    solution: "A single AI interface that searches and reasons across every connected knowledge source.",
    impact: "One question → one trustworthy answer · onboarding time cut in half",
    tags: ["RAG", "Search", "Knowledge"],
    demo: "https://unifiedknowledge.vercel.app/",
    code: "https://github.com/ca-cube/Unified-Knowledge-AI.git",
  },
  {
    name: "AI Proposal Builder",
    problem: "Sales teams spend days writing tailored proposals from scratch for every prospect.",
    solution: "Generates accurate, on-brand proposals from a short brief and the client's own context.",
    impact: "Proposal turnaround dropped from days to under an hour",
    tags: ["LLM", "Sales", "Generation"],
    demo: "https://proposalbuilder-tau.vercel.app/",
    code: "https://github.com/ca-cube/AI-Proposal-Builder.git",
  },
  {
    name: "AI Meeting Action Extractor",
    problem: "Action items from meetings get lost in transcripts no one re-reads.",
    solution: "Pulls owners, decisions, and next steps out of any meeting transcript automatically.",
    impact: "Zero missed action items · structured follow-ups in every recap",
    tags: ["Transcripts", "LLM", "Productivity"],
    demo: "https://ai-meeting-action-extractor.vercel.app/",
    code: "https://github.com/ca-cube/AI-Meeting-Action-Extractor.git",
  },
  {
    name: "AI Follow-Up Engine",
    problem: "Deals and conversations stall because no one sends the right follow-up at the right time.",
    solution: "Detects open threads and drafts personalized follow-ups grounded in past context.",
    impact: "More replies, faster cycles · no manual reminder management",
    tags: ["Automation", "LLM", "CRM"],
    demo: "https://ai-follow-up-engine.vercel.app/",
    code: "https://github.com/ca-cube/AI-Follow-Up-Engine.git",
  },
  {
    name: "Auto CRM Updater",
    problem: "Reps avoid updating the CRM, so pipeline data is always stale and unreliable.",
    solution: "Reads emails, calls, and notes, then keeps CRM records updated without human input.",
    impact: "Clean pipeline data · hours per rep returned every week",
    tags: ["CRM", "Automation", "LLM"],
    demo: "https://auto-crm-updater.vercel.app/",
    code: "https://github.com/ca-cube/Auto-CRM-Updater.git",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Proof of Work"
          title="Case Studies"
          description="Ten production AI systems we designed, built, and deployed."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.name}
              className="card-premium group relative overflow-hidden rounded-2xl p-7"
            >
              {/* corner glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-neon/10 blur-3xl transition-opacity opacity-50 group-hover:opacity-100" />

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
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`Open ${p.name} live demo`}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-elevated transition-all group-hover:rotate-45 group-hover:border-neon/50"
                >
                  <ArrowUpRight className="h-4 w-4 text-neon" />
                </a>
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
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-foreground px-4 py-2 text-xs font-semibold text-background transition-transform hover:scale-[1.02]"
                >
                  Live Demo <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <a
                  href={p.code}
                  target="_blank"
                  rel="noreferrer noopener"
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
