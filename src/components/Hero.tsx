import { ArrowRight, Sparkles } from "lucide-react";
import { AnimatedBackground } from "./AnimatedBackground";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <AnimatedBackground />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
          <Sparkles className="h-3 w-3 text-neon" />
          <span>AI Engineer · Building production systems</span>
        </div>

        <h1
          className="animate-fade-up mt-6 text-balance text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="text-gradient">I Build AI Systems</span>
          <br />
          <span className="text-neon-gradient">That Solve Real</span>
          <br />
          <span className="text-gradient">Business Problems</span>
        </h1>

        <p
          className="animate-fade-up mx-auto mt-8 max-w-2xl text-balance text-lg text-muted-foreground sm:text-xl"
          style={{ animationDelay: "0.2s" }}
        >
          From idea to production — I design, build, and deploy AI-powered software that drives measurable results.
        </p>

        <div
          className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#projects"
            className="group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full bg-foreground px-7 text-sm font-semibold text-background transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_-5px_color-mix(in_oklab,var(--neon)_60%,transparent)]"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-secondary/40 px-7 text-sm font-semibold backdrop-blur transition-all hover:border-neon/50 hover:bg-secondary"
          >
            Work With Me
          </a>
        </div>

        {/* Code preview chip */}
        <div
          className="animate-fade-up mx-auto mt-20 max-w-2xl"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="card-premium rounded-2xl p-1">
            <div className="rounded-xl bg-background/80 p-5 text-left font-mono text-xs sm:text-sm">
              <div className="mb-3 flex items-center gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
                <div className="h-2.5 w-2.5 rounded-full bg-chart-4/60" />
                <div className="h-2.5 w-2.5 rounded-full bg-chart-3/60" />
                <span className="ml-2 text-muted-foreground">~/build-ai-system</span>
              </div>
              <div className="space-y-1.5 text-muted-foreground">
                <div><span className="text-violet">const</span> <span className="text-foreground">system</span> = <span className="text-neon">await</span> ai.deploy({"{"}</div>
                <div className="pl-4">model: <span className="text-chart-4">"production"</span>,</div>
                <div className="pl-4">impact: <span className="text-chart-3">"measurable"</span>,</div>
                <div className="pl-4">status: <span className="text-neon">"shipping"</span> ✓</div>
                <div>{"}"});</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
