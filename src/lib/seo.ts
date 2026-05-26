export const PERSON_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vigneshwaraa K",
  jobTitle: "Full-Stack AI Engineer",
  description:
    "Full-Stack AI Engineer with 6+ years building production AI systems, FastAPI backends, React portals, and agentic AI workflows for enterprise clients.",
  email: "mailto:vigneshwaraa.k12@gmail.com",
  telephone: "+91-9597442187",
  url: "/",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "SRM Institute of Science and Technology",
  },
  worksFor: {
    "@type": "Organization",
    name: "Deloitte",
  },
  sameAs: ["https://github.com/vigneshwaraak"],
  knowsAbout: [
    "Agentic AI",
    "LangChain",
    "RAG Pipelines",
    "FastAPI",
    "React",
    "Spring Boot",
    "Snowflake",
    "Azure DevOps",
    "AWS",
    "GCP",
    "Docker",
    "MLOps",
  ],
};

export function breadcrumb(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name, item: path },
    ],
  };
}
