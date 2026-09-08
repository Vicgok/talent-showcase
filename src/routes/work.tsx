import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/SectionLabel";
import { TimelineEntry } from "@/components/TimelineEntry";
import { Reveal } from "@/components/Reveal";
import { ContactCTA } from "@/components/ContactCTA";
import { breadcrumb, pageMetadata } from "@/lib/seo";

const TITLE = "Selected Work — Vigneshwaraa K · Deloitte, Accenture, TCS, Cognizant";
const DESC =
  "6.5+ years of full-stack and agentic AI engineering across Deloitte, Accenture, TCS, and Cognizant. RAG, FastAPI, React, distributed systems, and measurable impact.";

const entries = [
  {
    years: "Sep 2025 — Present",
    company: "Deloitte",
    role: "Software Engineer II",
    achievements: [
      "Built an Agentic AI system automating Azure DevOps workflows → <strong>60% less manual effort, 40% faster deployments</strong>",
      "SaaS portal for millions of records using React virtualization → <strong>45% frontend performance boost</strong>",
      "FastAPI middleware and microservices with AsyncIO, caching, pagination, and database optimization → <strong>55% API latency reduction</strong>",
      "<strong>4th place nationally</strong> in Deloitte's Agentic AI Hackathon for an enterprise multi-agent workflow solution",
    ],
    tags: ["Multi-Agent AI", "LangChain", "RAG", "FastAPI", "React", "Azure DevOps"],
  },
  {
    years: "Mar 2024 — Sep 2025",
    company: "Accenture",
    role: "Senior Analyst",
    achievements: [
      "Node.js, Flask, and Spring Boot middleware services for enterprise REST API and microservice communication",
      "MongoDB / MySQL optimization → <strong>40% faster API responses</strong>",
    ],
    tags: ["Node.js", "Spring Boot", "Flask", "MongoDB", "MySQL"],
  },
  {
    years: "Sep 2022 — Mar 2024",
    company: "TCS",
    role: "Systems Engineer",
    achievements: [
      "React optimization, caching, and efficient data processing → <strong>25% faster page loads</strong>",
      "RAG-powered AI applications with vector retrieval and enterprise data sources → <strong>35% better AI-response accuracy</strong>",
      "JWT authentication, Salesforce integrations, and Docker deployments on AWS Lambda and Amazon S3",
    ],
    tags: ["RAG", "React", "Spring Boot", "Salesforce", "AWS", "Docker"],
  },
  {
    years: "Aug 2020 — Aug 2022",
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
    ...pageMetadata({ title: TITLE, description: DESC, path: "/work" }),
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
            6.5+ Years. 4 Companies.
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
