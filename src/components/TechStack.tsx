import { Brain, Server, Layout, Cloud } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const stack = [
  { icon: Brain, title: "AI / ML", items: ["OpenAI", "Anthropic", "LangChain", "Pinecone", "PyTorch"] },
  { icon: Server, title: "Backend", items: ["Python", "FastAPI", "Node.js", "Postgres", "Redis"] },
  { icon: Layout, title: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind", "Tanstack"] },
  { icon: Cloud, title: "Deployment", items: ["Vercel", "AWS", "Docker", "Cloudflare", "Supabase"] },
];

export function TechStack() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="Tech Stack" title="The Toolkit" />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stack.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="card-premium rounded-2xl p-6">
                <Icon className="h-6 w-6 text-neon" />
                <div className="mt-4 text-sm font-semibold tracking-tight">{s.title}</div>
                <ul className="mt-3 space-y-1.5">
                  {s.items.map((i) => (
                    <li key={i} className="font-mono text-xs text-muted-foreground">
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
