import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { ContactCTA } from "@/components/ContactCTA";
import { breadcrumb, pageMetadata } from "@/lib/seo";

const TITLE = "Expertise — AI/ML, Backend, Frontend & Cloud Stack | Vigneshwaraa K";
const DESC =
  "The stack I reach for: Agentic AI, LangChain, Google ADK, RAG, FastAPI, Spring Boot, React, AWS, GCP, and Azure DevOps. Google Cloud and Claude certifications included.";
const GCP_CREDLY_URL = "https://www.credly.com/badges/441d5b5a-d058-48ed-9385-1d05786226f8";
const CLAUDE_CREDLY_URL = "https://www.credly.com/badges/ce9d94f6-7916-452f-9fdb-bb90b720e53f";

const certifications = [
  {
    name: "Google Cloud Associate Cloud Engineer",
    href: GCP_CREDLY_URL,
    ariaLabel: "View Google Cloud Associate Cloud Engineer credential on Credly",
  },
  {
    name: "Claude Certified Architect - Foundations",
    href: CLAUDE_CREDLY_URL,
    ariaLabel: "View Claude Certified Architect - Foundations credential on Credly",
  },
] as const;

interface Skill {
  name: string;
  weight: 1 | 2 | 3 | 4;
}

const ai: Skill[] = [
  { name: "Agentic AI", weight: 4 },
  { name: "LangChain", weight: 4 },
  { name: "Google ADK", weight: 3 },
  { name: "RAG Pipelines", weight: 4 },
  { name: "LLM Orchestration", weight: 3 },
  { name: "MCP", weight: 2 },
  { name: "Vector Databases", weight: 2 },
  { name: "Azure OpenAI", weight: 2 },
];
const backend: Skill[] = [
  { name: "FastAPI", weight: 4 },
  { name: "Python", weight: 4 },
  { name: "Spring Boot", weight: 3 },
  { name: "Flask", weight: 2 },
  { name: "Node.js", weight: 2 },
  { name: "REST APIs", weight: 3 },
  { name: "Microservices", weight: 3 },
];
const frontendCloud: Skill[] = [
  { name: "React.js", weight: 4 },
  { name: "Angular", weight: 2 },
  { name: "Docker", weight: 3 },
  { name: "AWS", weight: 3 },
  { name: "GCP", weight: 3 },
  { name: "Azure DevOps", weight: 3 },
  { name: "MongoDB", weight: 2 },
  { name: "PostgreSQL", weight: 2 },
  { name: "MySQL", weight: 2 },
  { name: "Redis", weight: 2 },
];

const sizeFor: Record<Skill["weight"], string> = {
  1: "text-xl md:text-2xl text-foreground/55",
  2: "text-2xl md:text-3xl text-foreground/75",
  3: "text-3xl md:text-5xl text-foreground",
  4: "text-4xl md:text-6xl text-foreground",
};

function Cloud({ items }: { items: Skill[] }) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-5 gap-y-3 font-display italic leading-tight">
      {items.map((s) => (
        <span key={s.name} className={sizeFor[s.weight]}>
          {s.name}
        </span>
      ))}
    </div>
  );
}

export const Route = createFileRoute("/expertise")({
  component: ExpertisePage,
  head: () => ({
    ...pageMetadata({ title: TITLE, description: DESC, path: "/expertise" }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumb("Expertise", "/expertise")),
      },
    ],
  }),
});

function ExpertisePage() {
  return (
    <>
      <section className="border-b border-foreground/15">
        <div className="mx-auto max-w-350 px-5 md:px-10 py-20 md:py-28">
          <SectionLabel number="05" label="EXPERTISE" />
          <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-foreground max-w-5xl">
            The Stack I <em className="text-accent">Reach For.</em>
          </h1>
          <p className="mt-8 font-mono text-base md:text-lg text-foreground/70 max-w-3xl">
            Scale of type = depth of expertise. The bigger the name, the more production miles it
            has.
          </p>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
            <Reveal>
              <div>
                <h2 className="font-label text-base tracking-widest text-accent">01 / AI · ML</h2>
                <div className="mt-6">
                  <Cloud items={ai} />
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div>
                <h2 className="font-label text-base tracking-widest text-accent">02 / BACKEND</h2>
                <div className="mt-6">
                  <Cloud items={backend} />
                </div>
              </div>
            </Reveal>
            <Reveal delay={220}>
              <div>
                <h2 className="font-label text-base tracking-widest text-accent">
                  03 / FRONTEND · CLOUD
                </h2>
                <div className="mt-6">
                  <Cloud items={frontendCloud} />
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={320}>
            <div className="mt-20 flex flex-col gap-4 md:max-w-3xl">
              {certifications.map((certification) => (
                <a
                  key={certification.name}
                  href={certification.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-between gap-4 border border-accent px-5 py-3 transition-colors hover:bg-accent hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  aria-label={certification.ariaLabel}
                >
                  <span className="font-label text-base tracking-widest text-foreground">
                    {certification.name}
                  </span>
                  <span className="text-accent font-mono text-lg">✓</span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
