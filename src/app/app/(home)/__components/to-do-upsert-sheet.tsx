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
            title: "To-do updated",
            description: "Your to-do has been updated",
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
                            <SheetTitle>Create ToDo</SheetTitle>
                            <SheetDescription>
                                Add or edit your ToDo here. Click save when
                                you're done.
                            </SheetDescription>
                        </SheetHeader>

                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Title</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter your title here"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        This is the title of your ToDo.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <SheetFooter className="mt-auto">
                            <Button type="submit">Save changes</Button>
                        </SheetFooter>
                    </form>
                </Form>
            </SheetContent>
        </Sheet>
    );
}
