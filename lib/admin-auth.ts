import { cookies } from "next/headers";
import { createHmac } from "crypto";

const COOKIE_NAME = "admin_session";
const COOKIE_SALT = "rsvp-admin-v1";
const MAX_AGE = 60 * 60 * 24; // 24h

const getToken = (secret: string): string =>
  createHmac("sha256", secret).update(COOKIE_SALT).digest("hex");

export const isAdminTokenValid = (token: string | undefined): boolean => {
  const secret = process.env.ADMIN_SECRET;
  if (!secret || !token) return false;
  return token === getToken(secret);
};

export const assertAdmin = async (): Promise<boolean> => {
  const store = await cookies();
  const token = store.get(COOKIE_NAME)?.value;
  return isAdminTokenValid(token);
};

export const setAdminCookie = async (): Promise<void> => {
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
};

export const verifyAdminAndSetCookie = async (secret: string): Promise<boolean> => {
  const expected = process.env.ADMIN_SECRET;
  if (!expected || secret?.trim() !== expected) return false;
  await setAdminCookie();
  return true;
};

export const clearAdminCookie = async (): Promise<void> => {
  const store = await cookies();
  store.delete(COOKIE_NAME);
};
