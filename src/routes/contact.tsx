import { createFileRoute } from "@tanstack/react-router";
import { ContactCTA } from "@/components/ContactCTA";
import { breadcrumb, pageMetadata } from "@/lib/seo";

const TITLE = "Contact — Vigneshwaraa K · Full-Stack & Agentic AI Engineer";
const DESC =
  "Get in touch with Vigneshwaraa K about full-stack engineering, agentic AI, and full-time roles. Email, phone, LinkedIn, and GitHub.";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    ...pageMetadata({ title: TITLE, description: DESC, path: "/contact" }),
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumb("Contact", "/contact")) },
    ],
  }),
});

function ContactPage() {
  return <ContactCTA headingLevel={1} />;
}
