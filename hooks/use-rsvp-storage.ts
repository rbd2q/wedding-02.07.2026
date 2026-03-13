"use client";

import { useEffect, useState } from "react";
import type { Attendance, RsvpFormData } from "@/lib/submit-rsvp";
import { RSVP_STORAGE_KEY } from "@/utils/consts";

export type StoredRsvp = {
  id: string;
  name: string;
  attendance: Attendance;
  transfer: Attendance | null;
  comment: string | null;
  savedAt: string;
};

const createId = () => {
  if (typeof window === "undefined") return "";

  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
};

const readSavedRsvp = (): StoredRsvp | null => {
  if (typeof window === "undefined") return null;

  try {
    const value = localStorage.getItem(RSVP_STORAGE_KEY);
    if (!value) return null;

    const parsed = JSON.parse(value) as
      | { attendance?: Attendance; savedAt?: string }
      | { rsvp?: StoredRsvp };

    if ("rsvp" in parsed && parsed.rsvp) {
      return parsed.rsvp;
    }

    if ("attendance" in parsed && parsed.attendance) {
      return {
        id: createId(),
        name: "",
        attendance: parsed.attendance,
        transfer: null,
        comment: null,
        savedAt: parsed.savedAt || new Date().toISOString(),
      };
    }

    return null;
  } catch {
    return null;
  }
};

export const useRsvpStorage = () => {
  const [savedRsvp, setSavedRsvp] = useState<StoredRsvp | null>(() => null);

  useEffect(() => {
    setSavedRsvp(readSavedRsvp());
  }, []);

  const saveRsvp = (data: RsvpFormData) => {
    if (!data.attendance) return;

    const id = data.clientId || createId();
    const trimmedName = data.name?.trim() ?? "";
    const trimmedComment = data.comment?.trim() ?? "";
    const attendance = data.attendance;
    const transfer =
      attendance === "yes" && data.transfer ? data.transfer : null;

    const stored: StoredRsvp = {
      id,
      name: trimmedName,
      attendance,
      transfer,
      comment: trimmedComment || null,
      savedAt: new Date().toISOString(),
    };

    try {
      localStorage.setItem(
        RSVP_STORAGE_KEY,
        JSON.stringify({ rsvp: stored }),
      );
      setSavedRsvp(stored);
    } catch {
      // ignore quota / private mode
    }
  };

  return { savedRsvp, saveRsvp };
};
