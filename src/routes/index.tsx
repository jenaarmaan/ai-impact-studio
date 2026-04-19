import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { WhyMe } from "@/components/WhyMe";
import { Process } from "@/components/Process";
import { TechStack } from "@/components/TechStack";
import { Testimonials } from "@/components/Testimonials";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ACube — AI Systems Studio | Production AI That Solves Real Business Problems" },
      {
        name: "description",
        content:
          "ACube is an AI systems studio. We design, build, and deploy production-ready AI software that delivers measurable business impact — not prototypes.",
      },
      { property: "og:title", content: "ACube — AI Systems Studio" },
      {
        property: "og:description",
        content:
          "We build production AI systems that solve real business problems. Case studies, process, and contact.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "ACube — AI Systems Studio" },
      {
        name: "twitter:description",
        content: "Production AI systems that solve real business problems. Designed, built, and deployed by ACube.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Projects />
        <WhyMe />
        <Process />
        <TechStack />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
