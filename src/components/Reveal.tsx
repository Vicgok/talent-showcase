import type { CSSProperties, ReactNode } from "react";
import { useInView } from "@/hooks/use-in-view";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  as?: "div" | "section" | "article" | "header" | "footer" | "li";
  className?: string;
}

export function Reveal({ children, delay = 0, as = "div", className = "" }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const Tag = as as "div";
  const style: CSSProperties = { transitionDelay: `${delay}ms` };
  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      style={style}
      className={`reveal ${inView ? "is-visible" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
