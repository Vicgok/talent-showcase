import { z } from "zod";

export const ACTLATER_PLATFORM_OPTIONS = [
  "Instagram",
  "TikTok",
  "YouTube",
  "Reddit",
  "LinkedIn",
  "Other",
] as const;

export const ACTLATER_CONTENT_TYPE_OPTIONS = [
  "Restaurants",
  "Travel",
  "Workouts",
  "Products",
  "Tutorials",
  "Books / Movies",
  "Learning",
  "Other",
] as const;

export const actLaterSearchSchema = z.object({
  utm_source: z.string().trim().min(1).max(120).optional(),
  utm_medium: z.string().trim().min(1).max(120).optional(),
  utm_campaign: z.string().trim().min(1).max(120).optional(),
});

const optionalTrimmedString = z
  .string()
  .trim()
  .transform((value) => value || undefined)
  .optional();

export const actLaterWaitlistSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .email("Enter a valid email address.")
    .transform((value) => value.toLowerCase()),
  primaryPlatform: z.enum(ACTLATER_PLATFORM_OPTIONS).optional(),
  contentTypes: z.array(z.enum(ACTLATER_CONTENT_TYPE_OPTIONS)).max(8).default([]),
  frustration: z.string().trim().max(500, "Keep this under 500 characters.").optional(),
  source: optionalTrimmedString,
  medium: optionalTrimmedString,
  campaign: optionalTrimmedString,
  referrer: optionalTrimmedString,
});

export type ActLaterSearch = z.infer<typeof actLaterSearchSchema>;
export type ActLaterWaitlistInput = z.infer<typeof actLaterWaitlistSchema>;

export function normalizeOptionalText(value?: string | null) {
  const normalized = value?.trim();
  return normalized ? normalized : undefined;
}
