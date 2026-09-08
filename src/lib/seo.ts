export const SITE_URL = "https://www.vigneshwaraak.co.in";
export const SITE_NAME = "Vigneshwaraa K";
export const DEFAULT_OG_IMAGE = "/vigneshwaraa-k-og.png";

export function absoluteUrl(path = "/") {
  return new URL(path, `${SITE_URL}/`).toString();
}

type PageMetadata = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "profile";
  noIndex?: boolean;
};

export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  noIndex = false,
}: PageMetadata) {
  const url = absoluteUrl(path);
  const image = absoluteUrl(DEFAULT_OG_IMAGE);

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: noIndex ? "noindex, nofollow" : "index, follow" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:type", content: type },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { property: "og:image:width", content: "1734" },
      { property: "og:image:height", content: "907" },
      { property: "og:image:alt", content: "Vigneshwaraa K — Full Stack & Agentic AI Engineer" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
      { name: "twitter:image:alt", content: "Vigneshwaraa K — Full Stack & Agentic AI Engineer" },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export const PERSON_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vigneshwaraa K",
  url: SITE_URL,
  jobTitle: "Full Stack & Agentic AI Engineer",
  description:
    "Full Stack and Agentic AI Engineer with 6.5+ years building scalable enterprise applications, production LLM systems, FastAPI services, and React platforms.",
  sameAs: ["https://www.linkedin.com/in/vigneshwaraak/", "https://github.com/Vicgok"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chennai",
    addressCountry: "IN",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "SRM Institute of Science and Technology",
  },
  knowsAbout: [
    "React.js",
    "TypeScript",
    "JavaScript",
    "Python",
    "FastAPI",
    "Flask",
    "Node.js",
    "Java",
    "Spring Boot",
    "LangChain",
    "Retrieval-Augmented Generation",
    "Multi-Agent Systems",
    "Agentic AI",
    "LLM Orchestration",
    "Vector Databases",
    "pgvector",
    "AWS",
    "GCP",
    "Azure",
    "Docker",
    "Distributed Systems",
    "System Design",
  ],
};

export const WEBSITE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: PERSON_JSONLD.description,
};

export const PROFILE_PAGE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: PERSON_JSONLD.name,
    url: PERSON_JSONLD.url,
  },
  url: SITE_URL,
};

export function breadcrumb(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name, item: absoluteUrl(path) },
    ],
  };
}
