import { track } from "@vercel/analytics";

export type ActLaterEventName =
  | "actlater_page_view"
  | "actlater_waitlist_cta_click"
  | "actlater_waitlist_submit"
  | "actlater_waitlist_success"
  | "actlater_waitlist_error";

type EventProperties = Record<string, string | number | boolean | null | undefined>;

export function trackActLaterEvent(name: ActLaterEventName, properties?: EventProperties) {
  if (typeof window === "undefined") {
    return;
  }

  track(name, properties);
}
