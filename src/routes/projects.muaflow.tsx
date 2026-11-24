import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ProductPreview } from "@/components/ProductPreview";
import { Reveal } from "@/components/Reveal";
import { muaflow } from "@/lib/projects";
import { absoluteUrl, breadcrumb, pageMetadata, PERSON_JSONLD } from "@/lib/seo";

export const Route = createFileRoute("/projects/muaflow")({
  component: MUAFlowPage,
  head: () => ({
    ...pageMetadata({
      title: "MUAFlow — SaaS Product Engineering Case Study | Vigneshwaraa K",
      description: muaflow.description,
      path: muaflow.path,
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumb("MUAFlow", muaflow.path)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: "MUAFlow — Product engineering case study",
          url: absoluteUrl(muaflow.path),
          description: muaflow.description,
          author: { "@type": "Person", name: PERSON_JSONLD.name, url: PERSON_JSONLD.url },
          about: {
            "@type": "SoftwareApplication",
            name: muaflow.name,
            url: muaflow.appUrl,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
          },
        }),
      },
    ],
  }),
});

function CaseSection({
  number,
  label,
  title,
  dark = false,
  children,
}: {
  number: string;
  label: string;
  title: ReactNode;
  dark?: boolean;
  children: ReactNode;
}) {
  return (
    <section className={`border-b border-foreground/15 ${dark ? "project-dark" : ""}`}>
      <div className="project-wrap">
        <p className="font-label tracking-widest text-inherit">
          {number} / {label}
        </p>
        <Reveal>
          <h2 className="mt-7 max-w-4xl font-display text-4xl leading-tight md:text-6xl">
            {title}
          </h2>
          {children}
        </Reveal>
      </div>
    </section>
  );
}

function Panels({ items }: { items: { title: string; body: string }[] }) {
  return (
    <div className="mt-9 grid gap-5 md:grid-cols-3">
      {items.map((item, i) => (
        <article className="min-w-0 border border-current/20 p-6" key={item.title}>
          <p className="project-eyebrow">0{i + 1}</p>
          <h3 className="mt-3 font-display text-2xl leading-tight">{item.title}</h3>
          <p className="project-lede text-sm">{item.body}</p>
        </article>
      ))}
    </div>
  );
}

function MUAFlowPage() {
  return (
    <>
      <section className="border-b border-foreground/15">
        <div className="project-wrap">
          <Link to="/" className="project-link">
            ← Back to portfolio
          </Link>
          <p className="mt-8 font-label tracking-widest">Selected work / 001</p>
          <p className="project-eyebrow mt-6">Vertical SaaS / Independent product</p>
          <h1 className="mt-3 font-display text-[clamp(64px,12vw,150px)] leading-none">
            MUA<em className="text-accent">Flow.</em>
          </h1>
          <h2 className="mt-5 font-display text-2xl md:text-3xl">{muaflow.tagline}</h2>
          <p className="project-lede max-w-3xl">
            {muaflow.description} Designed around the daily workflow, from the first enquiry to the
            completed appointment.
          </p>
          <dl className="my-9 grid gap-5 border-t border-foreground/20 pt-5 md:grid-cols-3">
            {[
              ["Role", "End-to-end product engineer"],
              ["Platform", "Mobile-first PWA"],
              ["Project", "Independent SaaS"],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="project-eyebrow">{label}</dt>
                <dd className="mt-2 font-display text-xl">{value}</dd>
              </div>
            ))}
          </dl>
          <ProductPreview />
          <div className="project-buttons">
            <a
              className="project-button project-button-primary"
              href={muaflow.appUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open product ↗
            </a>
            <a
              className="project-button"
              href={muaflow.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Product website ↗
            </a>
          </div>
        </div>
      </section>
      <CaseSection
        number="01"
        label="THE PROBLEM & PRODUCT RESEARCH"
        title={
          <>
            From scattered tools to <em className="text-accent">one workspace.</em>
          </>
        }
      >
        <p className="project-lede max-w-3xl">
          Independent makeup artists coordinate enquiries, appointments, client details and payment
          records across chats, spreadsheets and calendars. MUAFlow brings those operations into a
          single workspace, keeping the booking and its next action at the centre.
        </p>
        <Panels
          items={[
            {
              title: "Workflow before features",
              body: "Product research is framed around the enquiry-to-booking journey: what an artist needs to capture, decide and follow up. That workflow informs the information hierarchy and keeps the next booking action visible.",
            },
            {
              title: "Mobile-first decisions",
              body: "Prioritize upcoming appointments, clear booking states and short forms for work between appointments. Keep client and payment context close to the booking instead of spread across disconnected screens.",
            },
            {
              title: "An easier starting point",
              body: "Reusable packages reduce repeated entry while negotiated pricing supports individual bookings. Data imports provide a path from existing records without requiring every client to be entered again.",
            },
          ]}
        />
      </CaseSection>
      <CaseSection
        number="02"
        label="PRODUCT EXPERIENCE"
        title={
          <>
            From enquiry to <em className="text-accent">completion.</em>
          </>
        }
      >
        <p className="project-lede">
          A structured lifecycle connects client, appointment and payment information.
        </p>
        <ol className="mt-7 flex flex-wrap gap-2" aria-label="Booking lifecycle">
          {["New enquiry", "Quoted", "Deposit pending", "Confirmed", "Completed"].map((step, i) => (
            <li
              key={step}
              className={`border border-current/25 px-4 py-3 font-mono text-xs ${step === "Confirmed" ? "bg-accent text-ink" : ""}`}
            >
              <span className="mr-2 opacity-70">0{i + 1}</span>
              {step}
            </li>
          ))}
        </ol>
        <p className="project-lede text-sm">Lost and cancelled are separate exit states.</p>
        <Panels
          items={[
            {
              title: "Bookings & clients",
              body: "Keep enquiries, contact details, packages and negotiated pricing together. A client record provides context across appointments, while booking states make follow-up work visible.",
            },
            {
              title: "Calendar & payments",
              body: "Coordinate availability and blocked dates alongside deposits and outstanding balances. Booking payment records and the artist’s SaaS subscription are distinct concerns.",
            },
            {
              title: "On the go",
              body: "An installable PWA supports a mobile workflow. A limited, read-only snapshot of confirmed bookings provides offline access; it does not imply offline editing or full database synchronization.",
            },
          ]}
        />
      </CaseSection>
      <CaseSection
        number="03"
        label="ENGINEERING ARCHITECTURE"
        dark
        title={
          <>
            Under <em className="text-accent">the hood.</em>
          </>
        }
      >
        <p className="project-lede max-w-3xl">
          End-to-end ownership spans product UX, application engineering, data access and delivery.
          The authenticated workspace and public product website serve separate user needs.
        </p>
        <Panels
          items={[
            {
              title: "React + TypeScript",
              body: "Vite powers a responsive application with reusable interface components. PWA installation and browser storage support a bounded offline booking viewer rather than a second, fully synchronized application.",
            },
            {
              title: "Supabase + PostgreSQL",
              body: "Supabase Auth provides identity, PostgreSQL stores product records, and ownership-based row-level security constrains data access. Edge Functions handle server-side operations; migrations keep schema changes versioned.",
            },
            {
              title: "Cloud & CI/CD",
              body: "Vercel and Cloudflare support delivery and domains, with GitHub workflows for CI/CD. Environment separation keeps deployment configuration and secrets outside the browser bundle.",
            },
          ]}
        />
        <div className="mt-8 border-t border-paper/20 pt-7">
          <p className="project-eyebrow text-accent">Billing / {muaflow.billingStatus}</p>
          <h3 className="mt-3 font-display text-2xl">Subscription billing as a server concern.</h3>
          <p className="project-lede max-w-4xl">
            Razorpay subscriptions are live. Subscription lifecycle handling and payment
            verification belong behind server-side boundaries, separate from the client’s display of
            billing state. This is platform subscription billing, distinct from tracking client
            deposits and balances.
          </p>
        </div>
      </CaseSection>
      <CaseSection
        number="04"
        label="PRODUCT WALKTHROUGH"
        title={
          <>
            See it <em className="text-accent">in action.</em>
          </>
        }
      >
        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {["Dashboard", "Booking journey", "Calendar"].map((title) => (
            <article className="min-w-0 border border-foreground/20 p-4" key={title}>
              <ProductPreview compact label={`${title} / screenshot placeholder`} />
              <h3 className="mt-5 font-display text-2xl">{title}</h3>
              <p className="project-lede text-xs">
                Awaiting an anonymized product capture. Illustration only.
              </p>
            </article>
          ))}
        </div>
        <p className="project-lede text-sm">
          All visuals here are illustrative placeholders, not actual application screenshots or
          usage statistics.
        </p>
      </CaseSection>
      <section className="project-wrap text-center">
        <h2 className="font-display text-4xl md:text-6xl">
          Built for <em className="text-accent">real work.</em>
        </h2>
        <div className="project-buttons justify-center">
          <a
            href={muaflow.appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-button project-button-primary"
          >
            Explore MUAFlow ↗
          </a>
          <Link to="/expertise" className="project-button">
            Explore my expertise
          </Link>
        </div>
      </section>
    </>
  );
}
