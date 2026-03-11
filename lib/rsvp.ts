import { getSupabase } from "@/lib/supabase/server";
import { RSVP_TABLE } from "@/utils/consts";

export type RsvpRow = {
  id: string;
  name: string;
  attendance: string | null;
  transfer: string | null;
  comment: string | null;
  created_at: string;
};


export const getRsvpList = async (): Promise<RsvpRow[]> => {
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from(RSVP_TABLE)
    .select("id, name, attendance, transfer, comment, created_at")
    .order("created_at", { ascending: false });

  if (error) return [];
  return (data ?? []) as RsvpRow[];
};
