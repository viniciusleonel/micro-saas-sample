"use server";

import { auth } from "@/services/auth";
import { prisma } from "@/services/database";
import { deleteToDoSchema, upsertToDoSchema } from "./schema";
import { z } from "zod";

export async function getUserToDos() {
    const session = await auth();
    const toDos = await prisma.todo.findMany({
        where: {
            userId: session?.user?.id,
        },
        orderBy: {
            createdAt: "desc",
        },
    });

    return toDos;
}

export async function upsertToDo(input: z.infer<typeof upsertToDoSchema>) {
    const session = await auth();

    if (!session?.user?.id) {
        return {
            error: "Unauthorized",
            data: null,
        };
    }

    if (input.id) {
        const toDo = await prisma.todo.findUnique({
            where: {
                id: input.id,
                userId: session?.user?.id,
            },
            select: {
                id: true,
            },
        });

        if (!toDo) {
            return {
                error: "Not found",
                data: null,
            };
        }

        const updatedToDo = await prisma.todo.update({
            where: {
                id: input.id,
                userId: session?.user?.id,
            },
            data: {
                title: input.title,
                doneAt: input.doneAt,
            },
        });

        return {
            error: null,
            data: updatedToDo,
        };
    }

    if (!input.title) {
        return {
            error: "Title is required",
            data: null,
        };
    }

    const toDo = await prisma.todo.create({
        data: {
            title: input.title,
            userId: session?.user?.id,
        },
    });

    return toDo;
}

export async function deleteToDo(input: z.infer<typeof deleteToDoSchema>) {
    const session = await auth();

    if (!session?.user?.id) {
        return {
            error: "Unauthorized",
            data: null,
        };
    }

    const toDo = await prisma.todo.findUnique({
        where: {
            id: input.id,
            userId: session?.user?.id,
        },
        select: {
            id: true,
        },
    });

    if (!toDo) {
        return {
            error: "Not found",
            data: null,
        };
    }

    await prisma.todo.delete({
        where: {
            id: input.id,
            userId: session?.user?.id,
        },
    });

    return {
        error: null,
        data: "To-do deleted successfully",
    };
}
