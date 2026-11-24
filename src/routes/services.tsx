import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/SectionLabel";
import { ServiceCard } from "@/components/ServiceCard";
import { PullQuote } from "@/components/PullQuote";
import { Reveal } from "@/components/Reveal";
import { ContactCTA } from "@/components/ContactCTA";
import { breadcrumb, pageMetadata } from "@/lib/seo";

const TITLE = "Services — SaaS Development, Backend, Cloud & Agentic AI";
const DESC =
  "End-to-end SaaS product development and AI engineering: RAG systems, FastAPI backends, React SaaS portals, agentic workflow automation, cloud-native deployment, and GenAI R&D.";

const services = [
  {
    number: "02",
    title: "AI Integration & RAG Systems",
    description:
      "Connect your product to LLMs. Build retrieval pipelines, chatbots, and document intelligence on your existing stack — without rebuilding what you already have.",
  },
  {
    number: "03",
    title: "FastAPI Backend Engineering",
    description:
      "Production-grade APIs and middleware for high-volume workflows. AsyncIO, caching, pagination, and database optimization built for the long haul.",
  },
  {
    number: "01",
    title: "End-to-end SaaS Development",
    description:
      "Product discovery, mobile-first UX, React interfaces, secure Supabase backends, payment integrations and cloud delivery. End-to-end ownership demonstrated through MUAFlow.",
  },
  {
    number: "04",
    title: "Agentic AI Workflow Automation",
    description:
      "Multi-agent AI systems for DevOps workflows, enterprise integrations, intelligent task orchestration, and decision support.",
  },
  {
    number: "05",
    title: "Cloud-Native Deployment",
    description:
      "Docker, AWS Lambda, GCP, S3 — containerized and production-ready. Cost-tuned, observable, and shippable on day one.",
  },
  {
    number: "06",
    title: "GenAI R&D Consulting",
    description:
      "Help your team evaluate, prototype, and ship LLM-powered features faster. Pragmatic recommendations, not vendor pitches.",
  },
].sort((a, b) => a.number.localeCompare(b.number));

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    ...pageMetadata({ title: TITLE, description: DESC, path: "/services" }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumb("Services", "/services")),
      },
    ],
  }),
});

function ServicesPage() {
  return (
    <>
      <section className="border-b border-foreground/15">
        <div className="mx-auto max-w-350 px-5 md:px-10 py-20 md:py-28">
          <SectionLabel number="04" label="SERVICES" />
          <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-foreground max-w-5xl">
            The Work I <em className="text-accent">Do Best.</em>
          </h1>
          <p className="mt-8 font-mono text-base md:text-lg text-foreground/70 max-w-3xl">
            From independent SaaS products like MUAFlow to enterprise systems at Deloitte,
            Accenture, TCS, and Cognizant.
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 70}>
                <ServiceCard {...s} />
              </Reveal>
            ))}
          </div>

          <div className="mt-20">
            <PullQuote>
              You bring the problem. I&rsquo;ll bring the system that solves it.
            </PullQuote>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
