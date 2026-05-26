interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
}

export function ServiceCard({ number, title, description }: ServiceCardProps) {
  return (
    <article className="group relative border border-foreground/25 bg-paper p-7 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(0,0,0,0.35)]">
      <span className="absolute right-0 top-0 bg-accent px-2.5 py-1 font-label text-xs text-ink">
        {number}
      </span>
      <div className="mb-6 text-accent">
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
          <path
            d="M17 2.5 30.5 10v14L17 31.5 3.5 24V10L17 2.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      </div>
      <h3 className="font-display text-2xl md:text-3xl leading-tight text-foreground">{title}</h3>
      <p className="mt-4 font-mono text-sm md:text-[15px] leading-relaxed text-foreground/75">
        {description}
      </p>
    </article>
  );
}
