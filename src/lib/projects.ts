/** Public portfolio facts only; no customer data or private implementation identifiers. */
export const muaflow = {
  name: "MUAFlow",
  path: "/projects/muaflow",
  appUrl: "https://muaflow.app",
  websiteUrl: "https://about.muaflow.app",
  tagline: "Less admin. More artistry.",
  description:
    "A mobile-first business workspace for independent makeup artists to manage enquiries, bookings, clients, payments and availability.",
  stack: ["React", "TypeScript", "Supabase", "PostgreSQL", "PWA"],
  ownership: ["Product UX", "Full-stack SaaS", "Auth & RLS", "Cloud & CI/CD"],
  // Live status confirmed by the product owner; no revenue or usage claims implied.
  billingStatus: "Live Razorpay subscriptions",
} as const;
