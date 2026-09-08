import { createClient } from "@supabase/supabase-js";
import type { WhatToCookWaitlistInput } from "@/lib/whattocook";

type WaitlistResult = { status: "success" | "duplicate" };
let supabaseAdmin: ReturnType<typeof createClient<Record<string, never>>> | undefined;

function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceRoleKey) throw new Error("Missing Supabase server environment variables.");
  if (!supabaseAdmin)
    supabaseAdmin = createClient(url, serviceRoleKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    });
  return supabaseAdmin;
}

export async function insertWhatToCookWaitlistEntry(
  input: WhatToCookWaitlistInput,
): Promise<WaitlistResult> {
  const { error } = await getSupabaseAdmin()
    .from("whattocook_waitlist")
    .insert({
      email: input.email,
      source: input.source ?? null,
      medium: input.medium ?? null,
      campaign: input.campaign ?? null,
      referrer: input.referrer ?? null,
    });
  if (!error) return { status: "success" };
  if (error.code === "23505") return { status: "duplicate" };
  console.error("WhatToCook waitlist insert failed", error);
  throw new Error("Unable to save waitlist signup.");
}
