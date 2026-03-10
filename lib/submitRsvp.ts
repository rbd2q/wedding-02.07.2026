"use server";

export type RsvpFormData = {
  name: string;
  attendance?: "yes" | "no";
  comment?: string;
};

export type SubmitRsvpResult =
  | { success: true }
  | { success: false; error: string };

const NAME_MIN = 2;

export async function submitRsvp(
  data: RsvpFormData,
): Promise<SubmitRsvpResult> {
  const name = data.name?.trim() ?? "";
  if (name.length < NAME_MIN) {
    return { success: false, error: "Введите имя и фамилию" };
  }

  const comment = data.comment?.trim() ?? "";

  // TODO: persist to database (e.g. Supabase)
  // eslint-disable-next-line no-console
  console.log("RSVP submitted:", {
    name,
    attendance: data.attendance,
    comment,
  });

  return { success: true };
}
