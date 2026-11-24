import { Link } from "@tanstack/react-router";
import { muaflow } from "@/lib/projects";
import { ProductPreview } from "./ProductPreview";
import { Reveal } from "./Reveal";

export function MUAFlowSpotlight() {
  return (
    <aside className="border-l-2 border-accent pl-5 md:pl-7">
      <p className="project-eyebrow">Independent product / 001</p>
      <h2 className="my-4 font-display text-4xl md:text-5xl">{muaflow.name}.</h2>
      <ProductPreview compact />
      <p className="my-5 font-mono text-sm leading-7 text-foreground/70">
        {muaflow.description} Designed and engineered end to end.
      </p>
      <Link className="project-link" to={muaflow.path}>
        Explore case study ↗
      </Link>
    </aside>
  );
}

export function MUAFlowFeature() {
  return (
    <section id="flagship" className="project-dark border-b border-paper/15">
      <div className="project-wrap">
        <p className="font-label tracking-widest text-accent">02 / FLAGSHIP PROJECT</p>
        <div className="mt-8 grid items-center gap-10 md:grid-cols-[1fr_1.2fr] lg:gap-15">
          <Reveal>
            <p className="project-eyebrow">Independent vertical SaaS / Product engineering</p>
            <h2 className="mt-4 font-display text-[clamp(56px,7vw,100px)] leading-none">
              MUA<em className="text-accent">Flow.</em>
            </h2>
            <h3 className="mt-6 font-display text-3xl leading-tight">
              Less admin.
              <br />
              <em className="text-accent">More artistry.</em>
            </h3>
            <p className="project-lede">
              {muaflow.description} Built around the way independent artists work.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {muaflow.stack.map((tag) => (
                <span className="border border-paper/25 px-2.5 py-1 font-mono text-xs" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="project-buttons">
              <Link to={muaflow.path} className="project-button project-button-primary">
                → View case study
              </Link>
              <a
                href={muaflow.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-button"
              >
                Live product ↗
              </a>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <ProductPreview />
          </Reveal>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-6 border-t border-paper/20 pt-7 md:grid-cols-4">
          {muaflow.ownership.map((item, i) => (
            <div key={item}>
              <p className="project-eyebrow text-accent">
                0{i + 1} / {["Design", "Engineer", "Secure", "Deploy"][i]}
              </p>
              <p className="mt-2 font-display text-xl italic md:text-2xl">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
