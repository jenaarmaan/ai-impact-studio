import { Bot, Workflow, Layers, Rocket } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const services = [
  {
    icon: Bot,
    title: "AI Product Development",
    desc: "Custom AI tools — LLM apps, automation agents, and copilots built for your workflow.",
  },
  {
    icon: Workflow,
    title: "Business Automation",
    desc: "Reduce manual work with AI-driven workflows that integrate into your existing stack.",
  },
  {
    icon: Layers,
    title: "Full-Stack + AI Integration",
    desc: "From frontend to backend to deployment — one engineer, one cohesive system.",
  },
  {
    icon: Rocket,
    title: "MVP to Production Scaling",
    desc: "Take ideas from prototype to real, usable systems running reliably in production.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="Services" title="What I Do" description="Four focused offerings, all delivered end-to-end." />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="card-premium group relative rounded-2xl p-6"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-elevated transition-colors group-hover:border-neon/50">
                  <Icon className="h-5 w-5 text-neon" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
