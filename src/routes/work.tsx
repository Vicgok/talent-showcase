import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/SectionLabel";
import { TimelineEntry } from "@/components/TimelineEntry";
import { Reveal } from "@/components/Reveal";
import { ContactCTA } from "@/components/ContactCTA";
import { breadcrumb } from "@/lib/seo";

const TITLE = "Selected Work — Vigneshwaraa K · Deloitte, Accenture, TCS, Cognizant";
const DESC =
  "Six years of full-stack AI engineering across Deloitte, Accenture, TCS, and Cognizant. Agentic AI, RAG, FastAPI, React — with measurable impact.";

const entries = [
  {
    years: "2025 — Present",
    company: "Deloitte",
    role: "Consultant",
    achievements: [
      "Built an Agentic AI system automating Azure DevOps workflows → <strong>60% less manual effort, 40% faster deployments</strong>",
      "SaaS portal for millions of records using React virtualization → <strong>45% frontend performance boost</strong>",
      "FastAPI + Snowflake services with async processing → <strong>55% API latency reduction</strong>",
    ],
    tags: ["Agentic AI", "FastAPI", "React", "Snowflake", "Azure DevOps"],
  },
  {
    years: "2024 — 2025",
    company: "Accenture",
    role: "Senior Analyst",
    achievements: [
      "GenAI-enabled MLOps platform with LLM features → <strong>35% better data insights</strong>",
      "Spring Boot + Flask microservices built for enterprise scale",
      "MongoDB / MySQL optimization → <strong>40% faster API responses</strong>",
    ],
    tags: ["Spring Boot", "Flask", "GenAI", "MLOps", "React"],
  },
  {
    years: "2022 — 2024",
    company: "TCS",
    role: "Systems Engineer",
    achievements: [
      "RAG-powered AI platforms with MERN + vector retrieval → <strong>35% better AI accuracy</strong>",
      "Docker, AWS Lambda, S3 cloud-native deployments",
    ],
    tags: ["RAG", "LangChain", "MERN", "AWS", "Docker"],
  },
  {
    years: "2020 — 2022",
    company: "Cognizant",
    role: "Programmer Analyst",
    achievements: [
      "React + Angular apps → <strong>25% faster page loads</strong>",
      "Java Spring Boot secure backend services",
    ],
    tags: ["React", "Angular", "Spring Boot", "Java"],
  },
];

export const Route = createFileRoute("/work")({
  component: WorkPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/work" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumb("Work", "/work")) },
    ],
  }),
});

function WorkPage() {
  return (
    <>
      <section className="border-b border-foreground/15">
        <div className="mx-auto max-w-350 px-5 md:px-10 py-20 md:py-28">
          <SectionLabel number="04" label="WORK" />
          <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-foreground max-w-5xl">
            6 Years. 4 Companies.
            <br />
            <em className="text-accent">Real Results.</em>
          </h1>
          <p className="mt-8 font-mono text-base md:text-lg text-foreground/70 max-w-3xl">
            A chronological record of the systems I&rsquo;ve built, the impact they had, and the
            tools I reached for to ship them.
          </p>

          <div className="mt-20 relative md:pl-8 md:border-l border-foreground/20">
            {entries.map((e, i) => (
              <Reveal key={e.company} delay={i * 80}>
                <TimelineEntry {...e} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
