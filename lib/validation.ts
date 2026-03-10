import { z } from 'zod';

export const rsvpSchema = z.object({
  name: z
    .string()
    .min(2, 'Введите имя и фамилию')
    .max(200, 'Слишком длинное имя'),
  attendance: z.enum(['yes', 'no'], {
    required_error: 'Выберите вариант',
  }),
  comment: z.string().max(1000).optional(),
});

export type RsvpFormData = z.infer<typeof rsvpSchema>;
