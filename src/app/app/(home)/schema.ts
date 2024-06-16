import { z } from "zod";

export const upsertToDoSchema = z.object({
    id: z.string().optional(),
    title: z.string().optional(),
    doneAt: z.date().optional().nullable(),
});

export const deleteToDoSchema = z.object({
    id: z.string(),
});