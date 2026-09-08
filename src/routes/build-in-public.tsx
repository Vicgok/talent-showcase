import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ChefHat, BookmarkCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { pageMetadata } from "@/lib/seo";

const TITLE = "Build in Public — Product Experiments";
const DESC = "Independent product experiments being built and validated in public.";

const projects = [
  {
    to: "/whattocook",
    number: "01",
    eyebrow: "FOOD DECISIONS",
    title: "WhatToCook",
    description:
      "Turn the ingredients you already have into meal ideas that fit what you want right now.",
    details: ["Ingredient-led meal ideas", "Natural-language preferences", "Early-access waitlist"],
    icon: ChefHat,
  },
  {
    to: "/actlater",
    number: "02",
    eyebrow: "SAVED CONTENT",
    title: "ActLater",
    description:
      "Find saved social posts when they become useful, instead of losing them in an endless list.",
    details: [
      "Retrievable saved content",
      "Social-app problem validation",
      "Early-access waitlist",
    ],
    icon: BookmarkCheck,
  },
] as const;

export const Route = createFileRoute("/build-in-public")({
  component: BuildInPublicPage,
  head: () => pageMetadata({ title: TITLE, description: DESC, path: "/build-in-public" }),
});

function BuildInPublicPage() {
  return (
    <>
      <section className="border-b border-foreground/15">
        <div className="mx-auto max-w-350 px-5 py-14 md:px-10 md:py-24">
          <SectionLabel number="BP" label="BUILD IN PUBLIC" />
          <Reveal>
            <p className="mt-10 font-mono text-xs uppercase tracking-[0.18em] text-foreground/65">
              Product experiments, openly validated
            </p>
            <h1 className="mt-5 max-w-5xl font-display text-5xl leading-[0.95] tracking-tight md:text-7xl lg:text-[88px]">
              Small ideas. <em className="text-accent">Real problems.</em>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-7 text-foreground/72 md:text-lg">
              I&apos;m sharing the decisions, experiments, designs, mistakes, and progress behind
              products I&apos;m validating before building them further.
            </p>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-350 px-5 py-16 md:px-10 md:py-24">
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Reveal key={project.to} delay={index * 100}>
                  <Link
                    to={project.to}
                    className="group flex h-full flex-col border border-foreground/15 p-6 transition-colors hover:border-accent md:p-8"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="font-label text-sm tracking-widest text-accent">
                        {project.number} / {project.eyebrow}
                      </span>
                      <Icon className="text-foreground/65 transition-colors group-hover:text-accent" />
                    </div>
                    <h2 className="mt-14 font-display text-4xl leading-tight md:text-5xl">
                      {project.title}
                    </h2>
                    <p className="mt-5 max-w-md leading-7 text-foreground/72">
                      {project.description}
                    </p>
                    <ul className="mt-10 space-y-3 border-t border-foreground/12 pt-5">
                      {project.details.map((detail) => (
                        <li
                          key={detail}
                          className="font-mono text-xs uppercase tracking-[0.12em] text-foreground/62"
                        >
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-10 flex items-center gap-2 font-label text-base tracking-widest">
                      View experiment{" "}
                      <ArrowUpRight
                        size={18}
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
