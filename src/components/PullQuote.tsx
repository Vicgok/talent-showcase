import type { ReactNode } from "react";

export function PullQuote({ children }: { children: ReactNode }) {
  return (
    <figure className="relative py-10 md:py-16">
      <div className="rule mb-8 md:mb-12" />
      <blockquote className="font-display italic text-3xl md:text-5xl lg:text-6xl leading-tight text-foreground max-w-5xl">
        &ldquo;{children}&rdquo;
      </blockquote>
      <div className="rule mt-8 md:mt-12" />
    </figure>
  );
}
