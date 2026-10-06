import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export function getSupabase() {
  if (!url || !key) throw new Error("Supabase n'est pas configuré (variables NEXT_PUBLIC_SUPABASE_*).");
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
