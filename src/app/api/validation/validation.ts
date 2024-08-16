import { z } from "zod";

export const EventSchema = z.object({
  id: z.string(),
  title: z.string().min(1),
  image: z.string().url().min(1),
  description: z.string().min(1),
  video: z.string().url().min(1),
});

export type EventFormData = z.infer<typeof EventSchema>;
