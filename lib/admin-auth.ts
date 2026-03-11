import { cookies } from "next/headers";
import { createHmac } from "crypto";

const COOKIE_NAME = "admin_session";
const COOKIE_SALT = "rsvp-admin-v1";
const MAX_AGE = 60 * 60 * 24; // 24h

function getToken(secret: string): string {
  return createHmac("sha256", secret).update(COOKIE_SALT).digest("hex");
}

export function isAdminTokenValid(token: string | undefined): boolean {
  const secret = process.env.ADMIN_SECRET;
  if (!secret || !token) return false;
  return token === getToken(secret);
}

export async function assertAdmin(): Promise<boolean> {
  const store = await cookies();
  const token = store.get(COOKIE_NAME)?.value;
  return isAdminTokenValid(token);
}

export async function setAdminCookie(): Promise<void> {
  const secret = process.env.ADMIN_SECRET;
  if (!secret) return;
  const store = await cookies();
  store.set(COOKIE_NAME, getToken(secret), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: MAX_AGE,
    path: "/",
  });
}

export async function verifyAdminAndSetCookie(secret: string): Promise<boolean> {
  const expected = process.env.ADMIN_SECRET;
  if (!expected || secret?.trim() !== expected) return false;
  await setAdminCookie();
  return true;
}

export async function clearAdminCookie(): Promise<void> {
  const store = await cookies();
  store.delete(COOKIE_NAME);
}
