import type { ReactNode } from "react";

interface StatBlockProps {
  value: ReactNode;
  label: string;
  sublabel?: string;
  inverted?: boolean;
}

export function StatBlock({ value, label, sublabel, inverted }: StatBlockProps) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className={`font-display italic leading-none text-6xl md:text-7xl lg:text-8xl ${
          inverted ? "text-accent" : "text-foreground"
        }`}
      >
        {value}
      </div>
      <div
        className={`font-mono text-xs md:text-sm uppercase tracking-wider ${inverted ? "text-paper/80" : "text-foreground/70"}`}
      >
        {label}
        {sublabel && (
          <>
            <br />
            <span className="opacity-70">{sublabel}</span>
          </>
        )}
      </div>
    </div>
  );
}
