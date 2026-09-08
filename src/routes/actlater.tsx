import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { createServerFn, useServerFn } from "@tanstack/react-start";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import {
  ACTLATER_CONTENT_TYPE_OPTIONS,
  ACTLATER_PLATFORM_OPTIONS,
  actLaterSearchSchema,
  actLaterWaitlistSchema,
  normalizeOptionalText,
} from "@/lib/actlater";
import { trackActLaterEvent } from "@/lib/actlater-analytics";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { pageMetadata } from "@/lib/seo";

const TITLE = "ActLater — Early Access";
const DESC =
  "Join the ActLater early-access waitlist and help validate a better way to find saved social content when it becomes useful.";

const routeSearchSchema = actLaterSearchSchema.catch({});

const actLaterServerInputSchema = actLaterWaitlistSchema.extend({
  source: z.string().trim().max(120).optional(),
  medium: z.string().trim().max(120).optional(),
  campaign: z.string().trim().max(120).optional(),
  referrer: z.string().trim().max(2048).optional(),
});

const formSchema = actLaterWaitlistSchema.pick({
  email: true,
  primaryPlatform: true,
  contentTypes: true,
  frustration: true,
});

type FormValues = z.input<typeof formSchema>;
type SubmitResult = { status: "success" | "duplicate" };

const submitActLaterWaitlist = createServerFn({ method: "POST" })
  .inputValidator(actLaterServerInputSchema)
  .handler(async ({ data }) => {
    const { insertActLaterWaitlistEntry } = await import("@/lib/actlater.server");
    return insertActLaterWaitlistEntry(data);
  });

export const Route = createFileRoute("/actlater")({
  validateSearch: (search) => routeSearchSchema.parse(search),
  component: ActLaterPage,
  head: () => pageMetadata({ title: TITLE, description: DESC, path: "/actlater" }),
});

function ActLaterPage() {
  const search = Route.useSearch();
  const submitWaitlist = useServerFn(submitActLaterWaitlist);
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const formRef = useRef<HTMLElement | null>(null);
  const [submitState, setSubmitState] = useState<SubmitResult | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      primaryPlatform: undefined,
      contentTypes: [],
      frustration: "",
    },
  });
  const emailField = form.register("email");

  useEffect(() => {
    trackActLaterEvent("actlater_page_view", {
      has_utm_source: Boolean(search.utm_source),
      has_utm_medium: Boolean(search.utm_medium),
      has_utm_campaign: Boolean(search.utm_campaign),
    });
  }, [search.utm_campaign, search.utm_medium, search.utm_source]);

  const scrollToForm = () => {
    trackActLaterEvent("actlater_waitlist_cta_click");
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => emailInputRef.current?.focus(), 250);
  };

  const onSubmit = form.handleSubmit(async (values) => {
    setSubmitError(null);
    trackActLaterEvent("actlater_waitlist_submit", {
      has_platform: Boolean(values.primaryPlatform),
      content_type_count: values.contentTypes.length,
      has_utm_source: Boolean(search.utm_source),
    });

    try {
      const result = await submitWaitlist({
        data: {
          email: values.email,
          primaryPlatform: values.primaryPlatform,
          contentTypes: values.contentTypes ?? [],
          frustration: normalizeOptionalText(values.frustration),
          source: search.utm_source,
          medium: search.utm_medium,
          campaign: search.utm_campaign,
          referrer:
            typeof document !== "undefined" ? normalizeOptionalText(document.referrer) : undefined,
        },
      });

      setSubmitState(result);
      trackActLaterEvent(
        result.status === "success" ? "actlater_waitlist_success" : "actlater_waitlist_error",
        { reason: result.status === "duplicate" ? "duplicate" : "none" },
      );
    } catch (error) {
      console.error(error);
      setSubmitError("That didn't go through. Please try again in a moment.");
      trackActLaterEvent("actlater_waitlist_error", { reason: "request_failed" });
    }
  });

  return (
    <section className="border-b border-foreground/15">
      <div className="mx-auto max-w-350 px-5 py-14 md:px-10 md:py-24">
        <SectionLabel number="AL" label="ACTLATER" />

        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-foreground/70 md:text-sm">
                Early access validation
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mt-6 max-w-4xl font-display text-[42px] leading-[0.98] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-[86px]">
                Find the things you saved when you actually need them.
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-8 max-w-3xl space-y-5 text-sm text-foreground/72 md:text-base">
                <p>
                  People save useful restaurants, workouts, products, tutorials, travel spots,
                  recommendations, and ideas across social apps.
                </p>
                <p>The problem isn&apos;t saving them.</p>
                <p>The problem is finding the right thing again when it becomes useful.</p>
                <p className="text-foreground">
                  <strong>
                    ActLater helps turn saved social content into something you can actually
                    retrieve and act on later.
                  </strong>
                </p>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button
                  type="button"
                  onClick={scrollToForm}
                  className="h-auto bg-accent px-6 py-3.5 font-label text-base tracking-widest text-ink hover:bg-accent/85"
                >
                  Join early access
                </Button>
                <p className="max-w-md font-mono text-xs uppercase tracking-[0.16em] text-foreground/55">
                  One short form. No redirects. No spammy follow-up.
                </p>
              </div>
            </Reveal>

            <Reveal delay={340}>
              <div className="mt-12 grid gap-5 border-t border-foreground/15 pt-8 md:grid-cols-3">
                {[
                  "Saved posts become impossible to retrieve at the right moment.",
                  "Search inside social apps breaks down once saves pile up.",
                  "The useful thing is there somewhere, but not when you need it.",
                ].map((statement) => (
                  <p
                    key={statement}
                    className="border-l border-accent/80 pl-4 text-sm leading-6 text-foreground/68"
                  >
                    {statement}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal as="section" delay={160} className="lg:col-span-5">
            <section
              ref={formRef}
              aria-labelledby="actlater-form-title"
              className="border border-foreground/15 bg-paper-deep/35 p-6 md:p-8"
            >
              <div className="flex items-start justify-between gap-4 border-b border-foreground/10 pb-5">
                <div>
                  <p className="font-label text-sm tracking-widest text-accent">WAITLIST</p>
                  <h2
                    id="actlater-form-title"
                    className="mt-3 font-display text-3xl leading-tight text-foreground md:text-4xl"
                  >
                    Join early access
                  </h2>
                </div>
              </div>

              {submitState ? (
                <SuccessState status={submitState.status} />
              ) : (
                <form className="mt-6 space-y-6" noValidate onSubmit={onSubmit}>
                  <div className="space-y-2">
                    <Label htmlFor="actlater-email" className="font-mono text-sm text-foreground">
                      Email address
                    </Label>
                    <Input
                      {...emailField}
                      ref={(node) => {
                        emailField.ref(node);
                        emailInputRef.current = node;
                      }}
                      id="actlater-email"
                      type="email"
                      autoComplete="email"
                      inputMode="email"
                      placeholder="you@example.com"
                      className={cn(
                        "h-11 border-foreground/20 bg-transparent text-foreground placeholder:text-foreground/40",
                        form.formState.errors.email &&
                          "border-destructive focus-visible:ring-destructive",
                      )}
                    />
                    {form.formState.errors.email ? (
                      <p className="text-sm text-destructive">
                        {form.formState.errors.email.message}
                      </p>
                    ) : (
                      <p className="text-xs text-foreground/55">
                        We&apos;ll only use this for ActLater early-access updates.
                      </p>
                    )}
                  </div>

                  <Controller
                    control={form.control}
                    name="primaryPlatform"
                    render={({ field }) => (
                      <fieldset className="space-y-3">
                        <legend className="font-mono text-sm text-foreground">
                          Where do you save the most useful content?
                        </legend>
                        <RadioGroup
                          value={field.value}
                          onValueChange={field.onChange}
                          className="grid gap-3 sm:grid-cols-2"
                        >
                          {ACTLATER_PLATFORM_OPTIONS.map((option) => (
                            <label
                              key={option}
                              className="flex cursor-pointer items-center gap-3 border border-foreground/15 px-3 py-3 text-sm text-foreground transition-colors hover:border-accent"
                            >
                              <RadioGroupItem value={option} id={`platform-${option}`} />
                              <span>{option}</span>
                            </label>
                          ))}
                        </RadioGroup>
                      </fieldset>
                    )}
                  />

                  <Controller
                    control={form.control}
                    name="contentTypes"
                    render={({ field }) => (
                      <fieldset className="space-y-3">
                        <legend className="font-mono text-sm text-foreground">
                          What do you usually save?
                        </legend>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {ACTLATER_CONTENT_TYPE_OPTIONS.map((option) => {
                            const checked = field.value?.includes(option) ?? false;
                            return (
                              <label
                                key={option}
                                className="flex cursor-pointer items-center gap-3 border border-foreground/15 px-3 py-3 text-sm text-foreground transition-colors hover:border-accent"
                              >
                                <Checkbox
                                  checked={checked}
                                  onCheckedChange={(nextChecked) => {
                                    const currentValues = field.value ?? [];
                                    if (nextChecked) {
                                      field.onChange([...currentValues, option]);
                                      return;
                                    }

                                    field.onChange(
                                      currentValues.filter((value) => value !== option),
                                    );
                                  }}
                                  aria-label={option}
                                />
                                <span>{option}</span>
                              </label>
                            );
                          })}
                        </div>
                      </fieldset>
                    )}
                  />

                  <div className="space-y-2">
                    <Label
                      htmlFor="actlater-frustration"
                      className="font-mono text-sm text-foreground"
                    >
                      What&apos;s the most frustrating thing about finding something you saved?
                    </Label>
                    <Textarea
                      {...form.register("frustration")}
                      id="actlater-frustration"
                      rows={4}
                      placeholder="Optional"
                      className="border-foreground/20 bg-transparent text-foreground placeholder:text-foreground/40"
                    />
                    {form.formState.errors.frustration ? (
                      <p className="text-sm text-destructive">
                        {form.formState.errors.frustration.message}
                      </p>
                    ) : (
                      <p className="text-xs text-foreground/55">
                        Optional, but useful if you want to help shape the product.
                      </p>
                    )}
                  </div>

                  {submitError ? <p className="text-sm text-destructive">{submitError}</p> : null}

                  <Button
                    type="submit"
                    disabled={form.formState.isSubmitting}
                    className="h-auto w-full bg-ink px-5 py-3.5 font-label text-base tracking-widest text-paper hover:bg-ink/92"
                  >
                    {form.formState.isSubmitting ? "Submitting..." : "Join early access"}
                  </Button>
                </form>
              )}
            </section>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function SuccessState({ status }: SubmitResult) {
  const copy =
    status === "duplicate"
      ? {
          title: "You're already on the ActLater early-access list.",
          body: "We'll reach out when there's something ready for early users.",
        }
      : {
          title: "You're on the list.",
          body: "We'll let you know when ActLater is ready for early users.",
        };

  return (
    <div className="mt-6 border border-accent/30 bg-accent/8 p-5">
      <p className="font-label text-sm tracking-widest text-accent">CONFIRMED</p>
      <h3 className="mt-3 font-display text-3xl text-foreground">{copy.title}</h3>
      <p className="mt-3 max-w-md text-sm leading-6 text-foreground/72">{copy.body}</p>
    </div>
  );
}
