import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { muaflow } from "@/lib/projects";

type Skill = readonly [string, 1 | 2 | 3];
const groups: { title: string; skills: Skill[] }[] = [
  {
    title: "SaaS Product Engineering",
    skills: [
      ["React", 3],
      ["TypeScript", 3],
      ["Supabase", 2],
      ["PWA", 1],
      ["Product UX", 1],
      ["Vite", 1],
      ["Angular", 1],
    ],
  },
  {
    title: "Backend & Cloud",
    skills: [
      ["PostgreSQL", 2],
      ["FastAPI", 3],
      ["Python", 3],
      ["Spring Boot", 2],
      ["Java", 1],
      ["RLS", 1],
      ["Edge Functions", 1],
      ["REST APIs", 2],
      ["Razorpay", 1],
      ["AWS", 2],
      ["GCP", 2],
      ["Vercel", 1],
      ["Cloudflare", 1],
      ["CI/CD", 1],
      ["Docker", 2],
      ["Azure DevOps", 2],
      ["Flask", 1],
      ["Node.js", 1],
      ["Microservices", 2],
      ["MongoDB", 1],
      ["MySQL", 1],
      ["Redis", 1],
    ],
  },
  {
    title: "AI & Automation",
    skills: [
      ["Agentic AI", 3],
      ["LangChain", 3],
      ["RAG Pipelines", 3],
      ["Google ADK", 2],
      ["MCP", 1],
      ["LLM Orchestration", 2],
      ["Vector Databases", 1],
      ["Azure OpenAI", 1],
    ],
  },
];
const sizes = {
  1: "text-xl md:text-2xl text-foreground/75",
  2: "text-2xl md:text-3xl",
  3: "text-3xl md:text-4xl font-bold",
};

export function SkillsCloud() {
  return (
    <>
      <div className="mt-8 flex flex-col items-start justify-between gap-6 bg-ink p-6 text-paper md:flex-row md:items-center md:p-8">
        <div>
          <p className="project-eyebrow text-accent">Primary capability / Product engineering</p>
          <h3 className="mt-2 font-display text-2xl md:text-3xl">End-to-end SaaS Development.</h3>
          <p className="mt-3 font-mono text-sm text-paper/75">Demonstrated through MUAFlow.</p>
        </div>
        <Link to={muaflow.path} className="project-button project-button-primary">
          See the evidence ↗
        </Link>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3">
        {groups.map((group, i) => (
          <Reveal key={group.title} delay={i * 80} className="min-w-0">
            <h3 className="font-label text-base tracking-widest">
              0{i + 1} / {group.title}
            </h3>
            <div className="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-3 font-display italic leading-tight">
              {group.skills.map(([name, weight]) => (
                <span className={`max-w-full wrap-anywhere ${sizes[weight]}`} key={name}>
                  {name}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}
