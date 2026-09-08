import { createFileRoute, Link } from "@tanstack/react-router";
import { ContactCTA } from "@/components/ContactCTA";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { breadcrumb, pageMetadata } from "@/lib/seo";

const TITLE = "Resume — Vigneshwaraa K | Full Stack & Agentic AI Engineer";
const DESC =
  "Resume of Vigneshwaraa K, a Full Stack and Agentic AI Engineer in Chennai with 6.5+ years of experience in React, Python, FastAPI, LangChain, RAG, and distributed systems.";

const experience = [
  {
    period: "Sep 2025 — Present",
    company: "Deloitte, Chennai",
    role: "Software Engineer II",
    highlights: [
      "Built an enterprise React and TypeScript SaaS platform for millions of records, improving application performance by 45%.",
      "Developed Python and FastAPI middleware and microservices with AsyncIO, caching, pagination, and database optimization, reducing API latency by 55%.",
      "Engineered agentic AI automation for enterprise DevOps workflows, cutting manual effort by 60% and accelerating deployments by 40%.",
    ],
  },
  {
    period: "Mar 2024 — Sep 2025",
    company: "Accenture, Chennai",
    role: "Packaged App Development Senior Analyst",
    highlights: [
      "Developed Node.js, Flask, and Spring Boot services for enterprise REST API and microservice communication.",
      "Optimized MongoDB and MySQL queries, reducing API response times by 40%.",
    ],
  },
  {
    period: "Sep 2022 — Mar 2024",
    company: "Tata Consultancy Services, Chennai",
    role: "Systems Engineer",
    highlights: [
      "Improved React application performance through front-end optimization, caching, and efficient data processing.",
      "Designed RAG-powered AI applications using vector retrieval and enterprise data sources, improving AI-response accuracy by 35%.",
      "Built backend APIs with Spring Boot, Flask, and Node.js, and deployed containerized workloads using Docker, AWS Lambda, and Amazon S3.",
    ],
  },
  {
    period: "Aug 2020 — Aug 2022",
    company: "Cognizant, Chennai",
    role: "Programmer Analyst",
    highlights: [
      "Developed React and Angular enterprise applications with 25% faster page-load performance.",
      "Built secure Java and Spring Boot REST services and optimized APIs and database queries to improve reliability.",
    ],
  },
];

const skillGroups = [
  {
    title: "AI & Agentic Systems",
    skills:
      "LangChain, Google ADK, Multi-Agent Systems, RAG, MCP, LLM Orchestration, Vector Databases, Azure OpenAI, Anthropic",
  },
  {
    title: "Full Stack Engineering",
    skills:
      "React.js, TypeScript, JavaScript, Python, FastAPI, Flask, Node.js, Java, Spring Boot, REST APIs, Microservices",
  },
  {
    title: "Data, Cloud & Architecture",
    skills:
      "PostgreSQL, MySQL, MongoDB, Redis, pgvector, AWS, GCP, Azure DevOps, Docker, CI/CD, Distributed Systems, System Design",
  },
];

export const Route = createFileRoute("/resume")({
  component: ResumePage,
  head: () => ({
    ...pageMetadata({ title: TITLE, description: DESC, path: "/resume" }),
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumb("Resume", "/resume")) },
    ],
  }),
});

function ResumePage() {
  return (
    <>
      <section className="border-b border-foreground/15">
        <div className="mx-auto max-w-350 px-5 py-20 md:px-10 md:py-28">
          <SectionLabel number="08" label="RESUME" />
          <h1 className="mt-6 max-w-5xl font-display text-5xl leading-[0.95] text-foreground md:text-7xl lg:text-8xl">
            Full Stack &amp; <em className="text-accent">Agentic AI Engineer.</em>
          </h1>
          <p className="mt-8 max-w-3xl font-mono text-base leading-7 text-foreground/75 md:text-lg">
            Vigneshwaraa K is a Chennai-based engineer with 6.5+ years of experience designing
            scalable enterprise applications, AI systems, and distributed services.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block border border-foreground/60 px-5 py-3 font-label text-base tracking-widest text-foreground transition-colors hover:bg-foreground hover:text-paper"
          >
            Contact Vigneshwaraa
          </Link>
        </div>
      </section>

      <section className="border-b border-foreground/15">
        <div className="mx-auto max-w-350 px-5 py-16 md:px-10 md:py-24">
          <h2 className="font-display text-4xl text-foreground md:text-5xl">
            Professional summary
          </h2>
          <p className="mt-6 max-w-4xl font-mono leading-7 text-foreground/75">
            Full stack and agentic AI engineer experienced in React, TypeScript, Python, FastAPI,
            LangChain, RAG, and multi-agent systems. Focused on maintainable, production-grade
            applications for high-volume workflows, AI orchestration, and enterprise integrations.
          </p>
        </div>
      </section>

      <section className="border-b border-foreground/15">
        <div className="mx-auto max-w-350 px-5 py-16 md:px-10 md:py-24">
          <h2 className="font-display text-4xl text-foreground md:text-5xl">Experience</h2>
          <div className="mt-12 space-y-12">
            {experience.map((item, index) => (
              <Reveal key={item.company} delay={index * 60}>
                <article className="border-l-2 border-accent pl-6 md:pl-8">
                  <p className="font-mono text-xs uppercase tracking-wider text-foreground/60">
                    {item.period}
                  </p>
                  <h3 className="mt-3 font-display text-3xl leading-tight text-foreground md:text-4xl">
                    {item.role}
                  </h3>
                  <p className="mt-2 font-label text-sm tracking-widest text-foreground/75">
                    {item.company}
                  </p>
                  <ul className="mt-5 max-w-4xl space-y-3 font-mono text-sm leading-7 text-foreground/75">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>— {highlight}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-foreground/15">
        <div className="mx-auto grid max-w-350 gap-10 px-5 py-16 md:px-10 md:py-24 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-display text-4xl text-foreground md:text-5xl">Technical skills</h2>
            <div className="mt-10 space-y-8">
              {skillGroups.map((group) => (
                <article key={group.title}>
                  <h3 className="font-label text-sm tracking-widest text-accent">{group.title}</h3>
                  <p className="mt-3 font-mono leading-7 text-foreground/75">{group.skills}</p>
                </article>
              ))}
            </div>
          </div>
          <aside className="border-l border-foreground/15 pl-0 lg:pl-8">
            <h2 className="font-display text-3xl text-foreground">Credentials</h2>
            <ul className="mt-6 space-y-4 font-mono text-sm leading-6 text-foreground/75">
              <li>Google Associate Cloud Engineer</li>
              <li>Claude Certified Architect</li>
            </ul>
            <h2 className="mt-10 font-display text-3xl text-foreground">Education</h2>
            <p className="mt-4 font-mono text-sm leading-6 text-foreground/75">
              B.Tech, Computer Science and Engineering
              <br />
              SRM Institute of Science and Technology, Chennai
              <br />
              2020
            </p>
            <h2 className="mt-10 font-display text-3xl text-foreground">Recognition</h2>
            <p className="mt-4 font-mono text-sm leading-6 text-foreground/75">
              Top Performer &amp; Impact Performer, Deloitte. Fourth place in Deloitte&apos;s
              national Agentic AI Hackathon.
            </p>
          </aside>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
