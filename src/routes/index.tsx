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
      { title: "AI Engineer & Software Freelancer — Production AI Systems That Drive Results" },
      {
        name: "description",
        content:
          "Freelance AI engineer building production-grade systems. From idea to deployment — LLM apps, automation, and full-stack AI integration that drive measurable business impact.",
      },
      { property: "og:title", content: "AI Engineer & Software Freelancer — Production AI Systems" },
      {
        property: "og:description",
        content:
          "I design, build, and deploy AI-powered software that drives real business results. Available for select projects.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AI Engineer & Software Freelancer" },
      {
        name: "twitter:description",
        content: "Production AI systems that solve real business problems. Built fast, shipped clean.",
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
