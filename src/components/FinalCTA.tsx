import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface/50 p-12 text-center backdrop-blur sm:p-16">
          {/* glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-72 w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon/30 blur-[120px]" />
            <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-violet/20 blur-[100px]" />
          </div>

          <div className="relative">
            <div className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-neon">
              Let's Talk
            </div>
            <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              <span className="text-gradient">Have a problem</span>
              <br />
              <span className="text-neon-gradient">worth solving?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-muted-foreground">
              Tell me about it. If it's a fit, I'll send back a plan within 48 hours.
            </p>

            <a
              href="mailto:hello@yourname.com"
              className="group mt-8 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-foreground px-8 text-base font-semibold text-background transition-all hover:scale-[1.02] hover:shadow-[0_0_50px_-5px_color-mix(in_oklab,var(--neon)_70%,transparent)]"
            >
              Let's Build Something
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
