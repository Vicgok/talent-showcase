export function SiteFooter() {
  return (
    <footer className="border-t border-foreground/15 bg-paper">
      <div className="mx-auto max-w-350 px-5 md:px-10 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="font-label text-sm md:text-base tracking-widest text-foreground/80">
          VIGNESHWARAA K · FULL-STACK AI ENGINEER · CHENNAI INDIA · © {new Date().getFullYear()}
        </p>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/vigneshwaraak"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs uppercase tracking-wider text-foreground/70 hover:text-accent"
          >
            linkedin
          </a>
          <a
            href="https://github.com/Vicgok"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs uppercase tracking-wider text-foreground/70 hover:text-accent"
          >
            github
          </a>
        </div>
      </div>
    </footer>
  );
}
