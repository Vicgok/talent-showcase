import { createFileRoute } from "@tanstack/react-router";
import { ContactCTA } from "@/components/ContactCTA";
import { breadcrumb } from "@/lib/seo";

const TITLE = "Contact — Hire Vigneshwaraa K · Freelance AI Engineering";
const DESC =
  "Get in touch with Vigneshwaraa K for freelance AI engineering, consulting, or full-time roles. Email, phone, and GitHub.";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumb("Contact", "/contact")) },
    ],
  }),
});

function ContactPage() {
  return <ContactCTA />;
}
