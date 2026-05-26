interface TimelineEntryProps {
  years: string;
  company: string;
  role: string;
  achievements: string[];
  tags: string[];
}

export function TimelineEntry({ years, company, role, achievements, tags }: TimelineEntryProps) {
  return (
    <article className="relative grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 pb-12 md:pb-16">
      {/* Accent rail dot — centered on the parent's md:border-l (parent has md:pl-8 = 32px) */}
      <span className="hidden md:block absolute -left-[38px] top-2 h-3 w-3 bg-accent" />

      <header className="md:col-span-4">
        <div className="font-mono text-sm text-foreground/60">{years}</div>
        <h3 className="mt-2 font-display italic text-3xl md:text-4xl leading-tight text-foreground">
          {company}
        </h3>
        <div className="mt-1 font-label text-base text-foreground/80">{role}</div>
      </header>

      <div className="md:col-span-8">
        <ul className="space-y-3">
          {achievements.map((a, i) => (
            <li key={i} className="font-mono text-[15px] leading-relaxed text-foreground/85">
              <span className="text-accent">→ </span>
              <span dangerouslySetInnerHTML={{ __html: a }} />
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="border border-foreground/30 px-2.5 py-1 font-mono text-xs uppercase tracking-wider text-foreground/80"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
