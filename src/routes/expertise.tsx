import { SkillsCloud } from "@/components/SkillsCloud";
import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { ContactCTA } from "@/components/ContactCTA";
import { breadcrumb, pageMetadata } from "@/lib/seo";

const TITLE = "Expertise — SaaS Product Engineering, Backend, Cloud & AI | Vigneshwaraa K";
const DESC =
  "SaaS product engineering demonstrated through MUAFlow: React, TypeScript, Supabase, PostgreSQL, cloud, backend and Agentic AI. Professional certifications included.";
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
          <SectionLabel number="06" label="EXPERTISE" />
          <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-foreground max-w-5xl">
            The Stack I <em className="text-accent">Reach For.</em>
          </h1>
          <p className="mt-8 font-mono text-base md:text-lg text-foreground/70 max-w-3xl">
            Scale of type = depth of expertise. The bigger the name, the more production miles it
            has.
          </p>

          <SkillsCloud />

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
