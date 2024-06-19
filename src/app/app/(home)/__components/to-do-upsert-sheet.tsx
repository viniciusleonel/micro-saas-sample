"use client";

/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { ToDo } from "../types";
import { useRef } from "react";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { upsertToDo } from "../actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { upsertToDoSchema } from "../schema";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";
import { z } from "zod";

type ToDoUpsertSheetProps = {
    children?: React.ReactNode;
    defaultValue?: ToDo;
};

export function ToDoUpsertSheet({
    children,
    defaultValue,
}: ToDoUpsertSheetProps) {

    const ref = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const form = useForm<z.infer<typeof upsertToDoSchema>>({
        resolver: zodResolver(upsertToDoSchema),
    });

    const onSubmit = form.handleSubmit(async (data: z.infer<typeof upsertToDoSchema>) => {
        await upsertToDo(data);
        router.refresh();
        
        ref.current?.click();

        toast({
            title: "Tarefa atualizada",
            description: "Sua tarefa foi atualizada",
            variant: "success",
        });
    });

    return (
        <Sheet>
            <SheetTrigger asChild>
                <div ref={ref}>{children}</div>
            </SheetTrigger>
            <SheetContent>
                <Form {...form}>
                    <form
                        onSubmit={onSubmit}
                        className="space-y-8 h-screen"
                    >
                        <SheetHeader>
                            <SheetTitle>Criar Tarefa</SheetTitle>
                            <SheetDescription>
                                Adicione ou edite sua tarefa aqui. Clique em salvar quando terminar.
                            </SheetDescription>
                        </SheetHeader>

                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Título</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Digite o título aqui"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Este é o título da sua tarefa.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <SheetFooter className="mt-auto">
                            <Button type="submit">Salvar alterações</Button>
                        </SheetFooter>
                    </form>
                </Form>
            </SheetContent>
        </Sheet>
    );
}
