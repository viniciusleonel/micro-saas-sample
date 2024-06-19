"use client";

/* eslint-disable react/no-unescaped-entities */
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { updateProfileSchema } from "../schema";
import { upsertProfile } from "../actions";
import { z } from "zod";
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
} from "@/components/ui/form";
import {
    SheetHeader,
    SheetTitle,
    SheetDescription,
    SheetFooter,
    SheetContent,
    Sheet,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Session } from "next-auth";

type ProfileFormProps = {
    defaultValues: Session["user"];
};

export function ProfileForm({ defaultValues }: ProfileFormProps) {
    const router = useRouter();

    const form = useForm<z.infer<typeof updateProfileSchema>>({
        resolver: zodResolver(updateProfileSchema),
        defaultValues: {
            name: defaultValues?.name || "",
            email: defaultValues?.email || "",
        },
    });

    const onSubmit = form.handleSubmit(
        async (data: z.infer<typeof updateProfileSchema>) => {
            await upsertProfile(data);
            router.refresh();

            toast({
                title: "Perfil atualizado",
                description: "Seu perfil foi atualizado com sucesso",
                variant: "success",
            });
        }
    );

    return (
        <Form {...form}>
            <form
                onSubmit={onSubmit}
                className="space-y-8"
            >
                <Sheet>
                    <SheetHeader>
                        <SheetTitle>Atualizar Perfil</SheetTitle>
                        <SheetDescription>
                            Edite seu perfil aqui. Clique em salvar quando terminar.
                        </SheetDescription>
                    </SheetHeader>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nome</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Digite seu nome aqui"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>
                                    Este é o nome que aparecerá no seu perfil.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Digite seu email aqui"
                                        {...field}
                                        readOnly
                                        className="bg-gray-100 text-gray-500"
                                    />
                                </FormControl>
                                <FormDescription>
                                    Este é o seu email. Para alterá-lo, entre em contato com nosso suporte.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <SheetFooter className="mt-auto">
                        <Button 
                        type="submit"
                        disabled={form.formState.isSubmitting}
                        >
                            {form.formState.isSubmitting ? "Salvando..." : "Salvar alterações"}
                        </Button>
                    </SheetFooter>
                </Sheet>
            </form>
        </Form>
    );
}
