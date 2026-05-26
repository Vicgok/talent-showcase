import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/SectionLabel";
import { ServiceCard } from "@/components/ServiceCard";
import { PullQuote } from "@/components/PullQuote";
import { Reveal } from "@/components/Reveal";
import { ContactCTA } from "@/components/ContactCTA";
import { breadcrumb } from "@/lib/seo";

const TITLE = "Services — Freelance AI Engineering, FastAPI, RAG & Agentic AI";
const DESC =
  "Freelance AI engineering services: RAG systems, FastAPI backends, React SaaS portals, agentic workflow automation, cloud-native deployment, and GenAI R&D consulting.";

const services = [
  {
    number: "01",
    title: "AI Integration & RAG Systems",
    description:
      "Connect your product to LLMs. Build retrieval pipelines, chatbots, and document intelligence on your existing stack — without rebuilding what you already have.",
  },
  {
    number: "02",
    title: "FastAPI Backend Engineering",
    description:
      "Production-grade APIs that handle millions of records. Async, cached, Snowflake / Postgres-ready, and instrumented for the long haul.",
  },
  {
    number: "03",
    title: "React SaaS Portal Development",
    description:
      "Scalable frontends with lazy loading, virtualization, and disciplined state management. Built for enterprise volume, not demo day.",
  },
  {
    number: "04",
    title: "Agentic AI Workflow Automation",
    description:
      "AI agents that replace manual processes — Azure DevOps, MLOps, data pipelines, internal tooling. Real automation, not chatbots that pretend.",
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
];

const PROFESSIONAL_SERVICE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Vigneshwaraa K — AI Engineering Consulting",
  description: DESC,
  url: "/services",
  areaServed: "Worldwide",
  provider: {
    "@type": "Person",
    name: "Vigneshwaraa K",
    jobTitle: "Full-Stack AI Engineer",
  },
  serviceType: services.map((s) => s.title),
};

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(PROFESSIONAL_SERVICE_JSONLD) },
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
          <SectionLabel number="02" label="SERVICES" />
          <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-foreground max-w-5xl">
            The Work I <em className="text-accent">Do Best.</em>
          </h1>
          <p className="mt-8 font-mono text-base md:text-lg text-foreground/70 max-w-3xl">
            Six engagements I take on as a freelancer and consultant. Each one is the kind of work
            I&rsquo;ve already shipped at Deloitte, Accenture, TCS, and Cognizant.
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
