export function ContactCTA({ headingLevel = 2 }: { headingLevel?: 1 | 2 }) {
  const Heading = headingLevel === 1 ? "h1" : "h2";

  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-350 px-5 md:px-10 py-24 md:py-32 text-center">
        <p className="font-label text-sm md:text-base tracking-widest text-accent">07 / CONTACT</p>
        <Heading className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-paper">
          Let&rsquo;s Build
          <br />
          <em className="text-accent">Something Real.</em>
        </Heading>
        <p className="mt-8 font-mono text-sm md:text-base text-paper/75 max-w-2xl mx-auto">
          Open to full-time roles and conversations about production AI, full-stack systems, and
          enterprise automation.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:vickygogeta1@gmail.com"
            className="border border-accent text-accent px-6 py-3 font-label text-base tracking-widest hover:bg-accent hover:text-ink transition-colors"
          >
            → vickygogeta1@gmail.com
          </a>
          <a
            href="tel:+919597442187"
            className="bg-accent text-ink px-6 py-3 font-label text-base tracking-widest hover:bg-accent/85 transition-colors"
          >
            → +91-9597442187
          </a>
        </div>

        <div className="mt-8 flex gap-6 justify-center">
          <a
            href="https://www.linkedin.com/in/vigneshwaraak"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-sm text-paper/70 hover:text-accent"
          >
            linkedin
          </a>
          <a
            href="https://github.com/Vicgok"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-sm text-paper/70 hover:text-accent"
          >
            github
          </a>
        </div>
      </div>
    </section>
  );
}
