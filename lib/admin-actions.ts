"use server";

import { redirect } from "next/navigation";
import { verifyAdminAndSetCookie, clearAdminCookie } from "@/lib/admin-auth";

export async function loginAdmin(formData: FormData) {
  const secret = formData.get("secret")?.toString() ?? "";
  const ok = await verifyAdminAndSetCookie(secret);
  if (!ok) {
    return { error: "Неверный код" };
  }
  redirect("/admin/rsvp");
}

export async function logoutAdmin() {
  await clearAdminCookie();
  redirect("/admin/rsvp");
}
