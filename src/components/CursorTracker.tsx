import { useEffect, useRef, useState } from "react";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export function CursorTracker() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [hovering, setHovering] = useState(false);
  const idRef = useRef(0);

  useEffect(() => {
    // Disable on touch / coarse pointers
    if (window.matchMedia("(pointer: coarse)").matches) return;

    // Initialize at first mouse position to avoid offset from (-100,-100)
    let initialized = false;

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (!initialized) {
        ring.current.x = e.clientX;
        ring.current.y = e.clientY;
        initialized = true;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX - 4}px, ${e.clientY - 4}px, 0)`;
      }
      const el = e.target as HTMLElement | null;
      setHovering(!!el?.closest("a,button,[role=button]"));
    };

    const onClick = (e: MouseEvent) => {
      const id = ++idRef.current;
      setRipples((r) => [...r, { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => setRipples((r) => r.filter((p) => p.id !== id)), 700);
    };

    let raf = 0;
    const tick = () => {
      ring.current.x += (target.current.x - ring.current.x) * 0.35;
      ring.current.y += (target.current.y - ring.current.y) * 0.35;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("click", onClick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] hidden md:block" aria-hidden>
      <div
        ref={dotRef}
        className="absolute top-0 left-0 h-2 w-2 rounded-full bg-accent mix-blend-difference"
      />
      <div ref={ringRef} className="absolute top-0 left-0" style={{ mixBlendMode: "difference" }}>
        <div
          className={`h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-[transform,border-color,opacity] duration-200 ${
            hovering
              ? "scale-150 opacity-90 border-foreground"
              : "scale-100 opacity-70 border-accent"
          }`}
          style={{ transformOrigin: "center" }}
        />
      </div>
      {ripples.map((r) => (
        <span
          key={r.id}
          className="absolute block h-4 w-4 rounded-full border border-accent animate-ripple"
          style={{ left: r.x - 8, top: r.y - 8 }}
        />
      ))}
    </div>
  );
}
