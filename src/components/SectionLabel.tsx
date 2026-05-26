interface SectionLabelProps {
  number: string;
  label: string;
}

export function SectionLabel({ number, label }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 font-label text-sm md:text-base text-foreground/70">
      <span className="text-accent">{number}</span>
      <span className="h-px w-8 bg-foreground/40" />
      <span>{label}</span>
    </div>
  );
}
