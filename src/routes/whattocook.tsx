import { useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { createServerFn, useServerFn } from "@tanstack/react-start";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ChefHat, Clock3, Flame, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { whatToCookWaitlistSchema } from "@/lib/whattocook";
import { pageMetadata } from "@/lib/seo";

const TITLE = "WhatToCook — Make more with what you have";
const DESC =
  "WhatToCook turns the ingredients you already have into meal ideas that fit what you want right now.";

const serverInputSchema = whatToCookWaitlistSchema.extend({
  source: z.string().trim().max(120).optional(),
  medium: z.string().trim().max(120).optional(),
  campaign: z.string().trim().max(120).optional(),
  referrer: z.string().trim().max(2048).optional(),
});

const submitWhatToCookWaitlist = createServerFn({ method: "POST" })
  .inputValidator(serverInputSchema)
  .handler(async ({ data }) => {
    const { insertWhatToCookWaitlistEntry } = await import("@/lib/whattocook.server");
    return insertWhatToCookWaitlistEntry(data);
  });

export const Route = createFileRoute("/whattocook")({
  component: WhatToCookPage,
  head: () => pageMetadata({ title: TITLE, description: DESC, path: "/whattocook" }),
});

function WhatToCookPage() {
  const formRef = useRef<HTMLElement | null>(null);
  const submitWaitlist = useServerFn(submitWhatToCookWaitlist);
  const [result, setResult] = useState<"success" | "duplicate" | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const form = useForm<z.input<typeof whatToCookWaitlistSchema>>({
    resolver: zodResolver(whatToCookWaitlistSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = form.handleSubmit(async ({ email }) => {
    setSubmitError(null);
    try {
      const response = await submitWaitlist({
        data: { email, referrer: typeof document === "undefined" ? undefined : document.referrer },
      });
      setResult(response.status);
    } catch (error) {
      console.error(error);
      setSubmitError("That didn't go through. Please try again in a moment.");
    }
  });

  return (
    <>
      <section className="overflow-hidden border-b border-foreground/15">
        <div className="mx-auto grid max-w-350 gap-12 px-5 py-14 md:px-10 md:py-24 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionLabel number="WC" label="BUILDING IN PUBLIC" />
            <Reveal>
              <p className="mt-10 font-mono text-xs uppercase tracking-[0.18em] text-foreground/65">
                A calmer answer to dinner indecision
              </p>
              <h1 className="mt-5 max-w-4xl font-display text-[48px] leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-[88px]">
                Stop wondering
                <br />
                what to <em className="text-accent">cook.</em>
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-7 text-foreground/72 md:text-lg">
                You already have food at home. WhatToCook helps you turn the ingredients you have
                into meals that fit what you want right now.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button
                  onClick={() =>
                    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
                  }
                  className="h-auto bg-accent px-6 py-3.5 font-label text-base tracking-widest text-ink hover:bg-accent/85"
                >
                  Join the waitlist
                </Button>
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-foreground/55">
                  Early access · no spam
                </span>
              </div>
            </Reveal>
          </div>
          <Reveal delay={200} className="lg:col-span-5">
            <div className="relative border border-foreground/15 bg-paper-deep/45 p-5 md:p-7">
              <div className="flex items-center justify-between border-b border-foreground/10 pb-4">
                <span className="font-label text-base tracking-widest">Tonight&apos;s kitchen</span>
                <ChefHat className="text-accent" />
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Chicken", "Eggs", "Rice", "Spinach", "Chilli"].map((item) => (
                  <span key={item} className="border border-foreground/15 px-3 py-1.5 text-xs">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-6 border-l-2 border-accent bg-background/45 p-5">
                <p className="font-mono text-xs uppercase tracking-wider text-foreground/55">
                  You ask
                </p>
                <p className="mt-2 font-display text-2xl italic">
                  “What can I make in 20 minutes?”
                </p>
              </div>
              <div className="mt-4 bg-ink p-5 text-paper">
                <p className="font-label text-sm tracking-widest text-accent">Try this</p>
                <p className="mt-2 font-display text-3xl">Spicy chicken rice bowl</p>
                <div className="mt-4 flex gap-4 font-mono text-xs text-paper/70">
                  <span className="flex items-center gap-1">
                    <Clock3 size={14} /> 20 min
                  </span>
                  <span className="flex items-center gap-1">
                    <Flame size={14} /> High protein
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="border-b border-foreground/15 bg-ink text-paper">
        <div className="mx-auto max-w-350 px-5 py-16 md:px-10 md:py-24">
          <p className="font-label text-sm tracking-widest text-accent">THE PROBLEM</p>
          <h2 className="mt-5 max-w-4xl font-display text-4xl leading-tight md:text-6xl">
            Most of us open the fridge, look at what&apos;s inside, and still have no idea what to
            cook.
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Order food even when ingredients are already available.",
              "Browse recipes that require things we don't have.",
              "Keep making the same few meals.",
              "Waste ingredients because we forget about them.",
            ].map((problem) => (
              <p
                key={problem}
                className="border-t border-paper/20 pt-4 text-sm leading-6 text-paper/75"
              >
                {problem}
              </p>
            ))}
          </div>
        </div>
      </section>
      <section className="border-b border-foreground/15">
        <div className="mx-auto max-w-350 px-5 py-16 md:px-10 md:py-24">
          <SectionLabel number="02" label="WHAT CHANGES" />
          <div className="mt-8 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 className="font-display text-4xl leading-tight md:text-6xl">
                What do I have <span className="text-accent">→</span> What do I want{" "}
                <span className="text-accent">→</span> What should I cook?
              </h2>
              <p className="mt-7 max-w-2xl leading-7 text-foreground/72">
                Tell WhatToCook what&apos;s in your kitchen, then ask naturally. Get meal ideas
                based on what you already have, with simple instructions to make them.
              </p>
            </div>
            <div className="grid gap-3 lg:col-span-5">
              {[
                "What can I make in 20 minutes?",
                "Give me something high-protein.",
                "I want something spicy.",
                "What can I cook with chicken, eggs and rice?",
              ].map((prompt) => (
                <div
                  key={prompt}
                  className="flex items-center gap-3 border border-foreground/15 p-4 text-sm"
                >
                  <Sparkles size={17} className="shrink-0 text-accent" />
                  {prompt}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="border-b border-foreground/15">
        <div className="mx-auto max-w-350 px-5 py-16 md:px-10 md:py-24">
          <SectionLabel number="03" label="FIRST VERSION" />
          <h2 className="mt-6 max-w-3xl font-display text-4xl leading-tight md:text-6xl">
            One question, answered <em className="text-accent">really well.</em>
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Keep track of ingredients at home.",
              "Find meals based on those ingredients.",
              "Filter by protein, calories, cuisine or cooking time.",
              "Follow clear, step-by-step instructions.",
              "Use timers while you cook.",
              "Use ingredients before they go to waste.",
            ].map((feature, index) => (
              <article key={feature} className="border border-foreground/15 p-5">
                <span className="font-label text-sm tracking-widest text-accent">0{index + 1}</span>
                <p className="mt-8 font-display text-2xl leading-tight">{feature}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section ref={formRef} className="bg-accent">
        <div className="mx-auto grid max-w-350 gap-10 px-5 py-16 md:px-10 md:py-24 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="font-label text-sm tracking-widest">EARLY ACCESS</p>
            <h2 className="mt-5 max-w-3xl font-display text-5xl leading-[0.98] md:text-7xl">
              Help shape what gets built first.
            </h2>
            <p className="mt-6 max-w-xl leading-7 text-ink/75">
              I&apos;m building WhatToCook in public — sharing the decisions, experiments, designs,
              mistakes and progress along the way.
            </p>
          </div>
          <div className="lg:col-span-5">
            {result ? (
              <div className="border-2 border-ink p-6">
                <p className="font-label tracking-widest">
                  {result === "duplicate" ? "YOU'RE ALREADY IN" : "YOU'RE ON THE LIST"}
                </p>
                <p className="mt-3 font-display text-3xl">
                  {result === "duplicate"
                    ? "We'll be in touch when there's news."
                    : "Thanks for joining the first users."}
                </p>
              </div>
            ) : (
              <form noValidate onSubmit={onSubmit} className="border-2 border-ink p-6">
                <Label htmlFor="whattocook-email" className="font-mono text-sm">
                  Email address
                </Label>
                <Input
                  {...form.register("email")}
                  id="whattocook-email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="mt-3 h-12 border-ink/40 bg-transparent placeholder:text-ink/45"
                />
                {form.formState.errors.email && (
                  <p className="mt-2 text-sm text-destructive">
                    {form.formState.errors.email.message}
                  </p>
                )}
                {submitError && <p className="mt-2 text-sm text-destructive">{submitError}</p>}
                <Button
                  type="submit"
                  disabled={form.formState.isSubmitting}
                  className="mt-5 h-auto w-full bg-ink px-5 py-3.5 font-label text-base tracking-widest text-paper hover:bg-ink/90"
                >
                  {form.formState.isSubmitting ? "Joining..." : "Join the waitlist"}
                </Button>
                <p className="mt-4 text-xs leading-5 text-ink/65">
                  No spam. Just important product updates and early-access invites.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
