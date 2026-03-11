"use server";

import { redirect } from "next/navigation";
import { verifyAdminAndSetCookie, clearAdminCookie } from "@/lib/admin-auth";

export const loginAdmin = async (formData: FormData) => {
  const secret = formData.get("secret")?.toString() ?? "";
  const ok = await verifyAdminAndSetCookie(secret);
  if (!ok) {
    return { error: "Неверный код" };
  }
  redirect("/admin/rsvp");
};

export const logoutAdmin = async () => {
  await clearAdminCookie();
  redirect("/admin/rsvp");
};
