import { z } from "zod";

const optionalTrimmedString = z
  .string()
  .trim()
  .transform((value) => value || undefined)
  .optional();

export const whatToCookWaitlistSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .email("Enter a valid email address.")
    .transform((value) => value.toLowerCase()),
  source: optionalTrimmedString,
  medium: optionalTrimmedString,
  campaign: optionalTrimmedString,
  referrer: optionalTrimmedString,
});

export type WhatToCookWaitlistInput = z.infer<typeof whatToCookWaitlistSchema>;
