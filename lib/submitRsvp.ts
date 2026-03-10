'use server';

import { rsvpSchema, type RsvpFormData } from './validation';

export type SubmitRsvpResult = { success: true } | { success: false; error: string };

export async function submitRsvp(data: RsvpFormData): Promise<SubmitRsvpResult> {
  const parsed = rsvpSchema.safeParse(data);
  if (!parsed.success) {
    const first = parsed.error.flatten().fieldErrors;
    const message = Object.values(first).flat().join(' ') || 'Ошибка валидации';
    return { success: false, error: message };
  }

  // TODO: persist to database
  // eslint-disable-next-line no-console
  console.log('RSVP submitted:', parsed.data);

  return { success: true };
}
