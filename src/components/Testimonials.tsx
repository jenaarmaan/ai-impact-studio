import { SectionHeader } from "./SectionHeader";

const quotes = [
  {
    quote: "Shipped a production AI system in two weeks that would have taken our team a quarter. Genuinely changed how we operate.",
    author: "Founder",
    role: "Series A SaaS",
  },
  {
    quote: "The rare engineer who actually thinks like a product person. Every line of code mapped to a business outcome.",
    author: "CTO",
    role: "Fintech Startup",
  },
  {
    quote: "Took our messy automation idea and turned it into a clean, reliable system. Best money we've spent this year.",
    author: "Head of Ops",
    role: "Growth-stage company",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="Social Proof" title="What People Say" />

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {quotes.map((q) => (
            <figure key={q.author} className="card-premium rounded-2xl p-6">
              <div className="font-mono text-3xl leading-none text-neon">"</div>
              <blockquote className="mt-2 text-sm leading-relaxed text-foreground/90">
                {q.quote}
              </blockquote>
              <figcaption className="mt-5 border-t border-border pt-4">
                <div className="text-sm font-semibold">{q.author}</div>
                <div className="text-xs text-muted-foreground">{q.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
