import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { ContactCTA } from "@/components/ContactCTA";
import { breadcrumb } from "@/lib/seo";

const TITLE = "About — Vigneshwaraa K · Full-Stack AI Engineer in Chennai";
const DESC =
  "Vigneshwaraa K — Full-Stack AI Engineer based in Chennai, India. 6 years building production AI, FastAPI, and React systems for Deloitte, Accenture, TCS, Cognizant.";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumb("About", "/about")) },
    ],
  }),
});

function AboutPage() {
  return (
    <>
      <section className="border-b border-foreground/15">
        <div className="mx-auto max-w-350 px-5 md:px-10 py-20 md:py-28">
          <SectionLabel number="06" label="STORY" />
          <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-foreground max-w-5xl">
            Who&rsquo;s Behind <em className="text-accent">the Code.</em>
          </h1>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
            <Reveal as="div" className="md:col-span-5">
              {/* Typographic monogram */}
              <div className="aspect-[4/5] bg-ink text-paper flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-4 border border-accent/60" />
                <div className="text-center">
                  <div className="font-display italic text-[140px] md:text-[180px] leading-none text-accent">
                    Vk
                  </div>
                  <div className="mt-2 font-label text-sm tracking-[0.3em] text-paper/80">
                    VIGNESHWARAA · K
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal as="div" delay={150} className="md:col-span-7">
              <div className="space-y-7 font-mono text-base md:text-lg leading-relaxed text-foreground/85">
                <p>
                  I&rsquo;m <span className="text-foreground">Vigneshwaraa</span> — a Full-Stack AI
                  Engineer based in Chennai, India, with 6 years of experience turning complex
                  enterprise problems into scalable, production-grade systems.
                </p>
                <p>
                  I don&rsquo;t just build features. I build the infrastructure that lets companies
                  move faster — whether that&rsquo;s an AI agent replacing 60% of manual DevOps
                  work, a React portal processing millions of records without breaking a sweat, or a
                  RAG pipeline that finally makes your documents useful.
                </p>
                <p>
                  Currently a <span className="text-foreground">Consultant at Deloitte</span>.
                  Previously at Accenture, TCS, and Cognizant. Open to freelance engagements where
                  the problem is hard and the impact is real.
                </p>
              </div>

              <ul className="mt-10 space-y-3">
                <li className="font-mono text-sm uppercase tracking-wider text-foreground/80">
                  <span className="text-accent">📍</span> Chennai, India
                </li>
                <li className="font-mono text-sm uppercase tracking-wider text-foreground/80">
                  <span className="text-accent">🎓</span> B.Tech CSE · SRM Institute of Science and
                  Technology
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
