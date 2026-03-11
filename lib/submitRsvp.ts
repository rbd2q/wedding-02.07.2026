"use server";

import { getSupabase } from "@/lib/supabase/server";
import { NAME_MIN, RSVP_TABLE } from "@/utils/consts";

export type RsvpFormData = {
  name: string;
  attendance?: "yes" | "no";
  transfer?: "yes" | "no";
  comment?: string;
};

export type SubmitRsvpResult =
  | { success: true }
  | { success: false; error: string };


export async function submitRsvp(
  data: RsvpFormData,
): Promise<SubmitRsvpResult> {
  const name = data.name?.trim() ?? "";
  if (name.length < NAME_MIN) {
    return { success: false, error: "Введите имя и фамилию" };
  }

  const comment = (data.comment?.trim() ?? "") || null;
  const attendance = data.attendance ?? null;
  const transfer = data.transfer ?? null;

  try {
    const supabase = getSupabase();
    const { error } = await supabase.from(RSVP_TABLE).insert({
      name,
      attendance,
      transfer,
      comment,
    });
    if (error) {
      return { success: false, error: "Не удалось отправить. Попробуйте позже." };
    }
    return { success: true };
  } catch {
    return { success: false, error: "Не удалось отправить. Попробуйте позже." };
  }
}
