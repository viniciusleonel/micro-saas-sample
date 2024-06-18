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
                title: "Profile updated",
                description: "Your profile has been updated",
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
                        <SheetTitle>Update Profile</SheetTitle>
                        <SheetDescription>
                            Edit your profile here. Click save when you're done.
                        </SheetDescription>
                    </SheetHeader>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Enter your title here"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>
                                    This is the name that shows on your profile.
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
                                        placeholder="Enter your title here"
                                        {...field}
                                        readOnly
                                        className="bg-gray-100 text-gray-500"
                                    />
                                </FormControl>
                                <FormDescription>
                                    This is your email. To change it, contact
                                    our support team.
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
                            {form.formState.isSubmitting ? "Loading..." : "Save changes"}
                        </Button>
                    </SheetFooter>
                </Sheet>
            </form>
        </Form>
    );
}
