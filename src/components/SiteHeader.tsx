import { useState } from "react";
import { Link } from "@tanstack/react-router";

const navLinks = [
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/expertise", label: "Expertise" },
  { to: "/about", label: "Story" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-foreground/15 bg-paper/85 backdrop-blur supports-backdrop-filter:bg-paper/70">
      <div className="mx-auto flex max-w-350 items-center justify-between px-5 md:px-10 h-16 md:h-20">
        <Link to="/" className="font-label text-xl md:text-2xl tracking-widest text-foreground">
          VIGNESHWARAA K
        </Link>

        <nav className="hidden md:flex items-center gap-7" aria-label="Primary">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-label text-base tracking-widest text-foreground/75 hover:text-foreground transition-colors"
              activeProps={{
                className:
                  "font-label text-base tracking-widest text-foreground border-b-2 border-accent pb-0.5",
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-accent text-ink px-4 py-2 font-label text-base tracking-widest hover:bg-accent/85 transition-colors"
          >
            → Hire Me
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
          className="md:hidden font-label text-lg tracking-widest text-foreground"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav
          className="md:hidden border-t border-foreground/15 bg-paper px-5 py-4"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-3">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="font-label text-lg tracking-widest text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="inline-block bg-accent text-ink px-4 py-2 font-label text-lg tracking-widest"
              >
                → Hire Me
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
