import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionLabel } from "@/components/SectionLabel";
import { StatBlock } from "@/components/StatBlock";
import { CountUp } from "@/components/CountUp";
import { ServiceCard } from "@/components/ServiceCard";
import { Reveal } from "@/components/Reveal";
import { ContactCTA } from "@/components/ContactCTA";
import { pageMetadata, PERSON_JSONLD, PROFILE_PAGE_JSONLD, WEBSITE_JSONLD } from "@/lib/seo";

const TITLE = "Vigneshwaraa K | Full Stack & Agentic AI Engineer";
const DESC =
  "Full Stack and Agentic AI Engineer with 6.5+ years of experience building scalable applications using React, TypeScript, Python, FastAPI, LangChain, RAG, multi-agent systems, cloud platforms, and distributed architectures.";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    ...pageMetadata({ title: TITLE, description: DESC, path: "/", type: "profile" }),
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(PERSON_JSONLD) },
      { type: "application/ld+json", children: JSON.stringify(WEBSITE_JSONLD) },
      { type: "application/ld+json", children: JSON.stringify(PROFILE_PAGE_JSONLD) },
    ],
  }),
});

const teaserServices = [
  {
    number: "01",
    title: "AI Integration & RAG Systems",
    description:
      "Connect your product to LLMs. Build retrieval pipelines, chatbots, and document intelligence on your existing stack.",
  },
  {
    number: "02",
    title: "FastAPI Backend Engineering",
    description:
      "Production-grade APIs and middleware for high-volume workflows. AsyncIO, caching, pagination, and database optimization built in.",
  },
  {
    number: "03",
    title: "Agentic AI Workflow Automation",
    description:
      "Multi-agent AI systems for enterprise workflows, DevOps automation, intelligent task orchestration, and decision support.",
  },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-foreground/15">
        <div className="mx-auto max-w-350 px-5 md:px-10 pt-14 md:pt-24 pb-16 md:pb-28">
          <SectionLabel number="01" label="HERO" />

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="font-mono text-xs md:text-sm uppercase tracking-[0.18em] text-foreground/70">
                  Full Stack &amp; Agentic AI Engineer · Chennai · 6.5+ Years
                </p>
              </Reveal>

              <Reveal delay={120}>
                <h1 className="mt-6 font-display text-[44px] sm:text-6xl md:text-7xl lg:text-[96px] leading-[0.95] tracking-tight text-foreground">
                  I Engineer
                  <br />
                  AI Systems
                  <br />
                  <em className="text-accent">Built to Scale.</em>
                </h1>
              </Reveal>

              <Reveal delay={220}>
                <p className="mt-8 font-mono text-base md:text-lg text-foreground/70">
                  React · TypeScript · Python · FastAPI · LangChain · RAG · Multi-Agent Systems
                </p>
              </Reveal>

              <Reveal delay={300}>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="bg-accent text-ink px-6 py-3.5 font-label text-base tracking-widest text-center hover:bg-accent/85 transition-colors"
                  >
                    → Start a Project
                  </Link>
                  <Link
                    to="/work"
                    className="border border-foreground/60 text-foreground px-6 py-3.5 font-label text-base tracking-widest text-center hover:bg-foreground hover:text-paper transition-colors"
                  >
                    View My Work
                  </Link>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={150}>
                <div className="border-l-2 border-accent pl-6 md:pl-8 space-y-10">
                  <div>
                    {/* <div className="font-display italic text-6xl md:text-7xl text-foreground leading-none">
                      6<span className="text-accent">+</span>
                    </div>
                    <div className="mt-2 font-mono text-xs uppercase tracking-wider text-foreground/70">
                      Years Building Enterprise AI
                    </div> */}
                  </div>
                  <div>
                    {/* <div className="font-display italic text-6xl md:text-7xl text-foreground leading-none">
                      <CountUp to={55} suffix="%" />
                    </div>
                    <div className="mt-2 font-mono text-xs uppercase tracking-wider text-foreground/70">
                      API Latency Reduced
                    </div> */}
                  </div>
                  <div>
                    {/* <div className="font-display italic text-6xl md:text-7xl text-foreground leading-none">
                      4<span className="font-mono text-3xl align-top">th</span>
                    </div> */}
                    {/* <div className="mt-2 font-mono text-xs uppercase tracking-wider text-foreground/70">
                      Nationally · Deloitte AI Hackathon
                    </div> */}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT STRIP — inverted */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-350 px-5 md:px-10 py-16 md:py-24">
          <Reveal>
            <p className="font-label text-sm tracking-widest text-accent">02 / IMPACT</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-display text-3xl md:text-5xl text-paper max-w-3xl">
              Numbers from <em className="text-accent">real production systems.</em>
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
            {[
              { v: 60, label: "Manual Effort", sub: "Cut by Agentic AI" },
              { v: 55, label: "API Latency", sub: "Reduced (FastAPI + async)" },
              { v: 45, label: "Frontend Perf", sub: "Boost (React virtualization)" },
              { v: 35, label: "AI Response", sub: "Accuracy Up (RAG)" },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <StatBlock
                  inverted
                  value={<CountUp to={s.v} suffix="%" />}
                  label={s.label}
                  sublabel={s.sub}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES TEASER */}
      <section className="border-b border-foreground/15">
        <div className="mx-auto max-w-350 px-5 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-7">
              <SectionLabel number="03" label="SERVICES" />
              <h2 className="mt-6 font-display text-4xl md:text-6xl leading-tight text-foreground">
                The Work I <em>Do Best.</em>
              </h2>
            </div>
            <div className="md:col-span-5 md:text-right">
              <Link
                to="/services"
                className="font-label text-base tracking-widest text-foreground hover:text-accent"
              >
                → All Services
              </Link>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {teaserServices.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <ServiceCard {...s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WORK TEASER */}
      <section className="border-b border-foreground/15">
        <div className="mx-auto max-w-350 px-5 md:px-10 py-20 md:py-28">
          <SectionLabel number="04" label="WORK" />
          <h2 className="mt-6 font-display text-4xl md:text-6xl leading-tight text-foreground max-w-4xl">
            6.5+ Years. 4 Companies.
            <br />
            <em className="text-accent">Real Results.</em>
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { y: "2025 — Present", c: "Deloitte", r: "Software Engineer II" },
              { y: "2024 — 2025", c: "Accenture", r: "Senior Analyst" },
              { y: "2022 — 2024", c: "TCS", r: "Systems Engineer" },
              { y: "2020 — 2022", c: "Cognizant", r: "Programmer Analyst" },
            ].map((e, i) => (
              <Reveal key={e.c} delay={i * 80}>
                <article className="border-t-2 border-accent pt-5">
                  <div className="font-mono text-xs uppercase tracking-wider text-foreground/60">
                    {e.y}
                  </div>
                  <div className="mt-3 font-display italic text-2xl md:text-3xl text-foreground leading-tight">
                    {e.c}
                  </div>
                  <div className="mt-1 font-label text-sm tracking-widest text-foreground/80">
                    {e.r}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-12">
            <Link
              to="/work"
              className="font-label text-base tracking-widest text-foreground hover:text-accent"
            >
              → Full Work History
            </Link>
          </div>
        </div>
      </section>

      {/* BUILD IN PUBLIC */}
      <section className="border-b border-foreground/15">
        <div className="mx-auto max-w-350 px-5 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionLabel number="05" label="BUILD IN PUBLIC" />
            </div>

            <div className="lg:col-span-8">
              <Reveal>
                <h2 className="max-w-4xl font-display text-4xl leading-tight text-foreground md:text-6xl">
                  I&apos;m validating product ideas in public.
                  <br />
                  <em className="text-accent">WhatToCook is the newest one.</em>
                </h2>
              </Reveal>

              <Reveal delay={100}>
                <p className="mt-6 max-w-3xl font-mono text-sm leading-7 text-foreground/70 md:text-base">
                  WhatToCook is a product experiment for the everyday question of what to make with
                  the food already at home. I&apos;m using a small waitlist to validate the problem
                  and let early users shape what gets built first.
                </p>
              </Reveal>

              <Reveal delay={180}>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Link
                    to="/build-in-public"
                    className="bg-accent px-6 py-3.5 text-center font-label text-base tracking-widest text-ink transition-colors hover:bg-accent/85"
                  >
                    → View the experiments
                  </Link>
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-foreground/55">
                    Early access page with inline signup and no external form redirect.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
