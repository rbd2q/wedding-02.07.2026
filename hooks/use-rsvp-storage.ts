"use client";

import { useEffect, useState } from "react";
import type { Attendance } from "@/lib/submit-rsvp";
import { RSVP_STORAGE_KEY } from "@/utils/consts";

const readSavedAttendance = (): Attendance | null => {
  if (typeof window === "undefined") return null;

  try {
    const value = localStorage.getItem(RSVP_STORAGE_KEY);
    if (!value) return null;
    const parsed = JSON.parse(value) as { attendance?: Attendance };
    return parsed.attendance ?? null;
  } catch {
    return null;
  }
};

export const useRsvpStorage = () => {
  const [savedAttendance, setSavedAttendance] = useState<Attendance | null>(
    () => null,
  );

  useEffect(() => {
    setSavedAttendance(readSavedAttendance());
  }, []);

  const saveRsvp = (attendance: Attendance) => {
    try {
      localStorage.setItem(
        RSVP_STORAGE_KEY,
        JSON.stringify({
          attendance,
          savedAt: new Date().toISOString(),
        }),
      );
    } catch {
      // ignore quota / private mode
    }
  };

  return { savedAttendance, saveRsvp };
};
