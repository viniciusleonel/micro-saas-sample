"use client"

/* eslint-disable react/no-unescaped-entities */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SVGProps } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { toast } from "@/components/ui/use-toast";

export function AuthForm() {

    const form = useForm()

    const handleSubmit = form.handleSubmit(async(data) => {
        try {
            await signIn("nodemailer", {
                    email: data.email,
                    redirect: false
            })

            toast({
                title: "Email enviado",
                variant: "success",
                description: "Verifique seu email para um link mágico de acesso.",
            })
        } catch (error) {
            toast({
                title: "Erro",
                variant: "destructive",
                description: "Ocorreu um erro ao enviar o email.",
            })
        }
    });


    return (
        <div className="flex justify-center items-center h-screen">
            <div className="mx-auto max-w-md space-y-6">
                <div className="space-y-2 text-center">
                    <h1 className="text-3xl font-bold">Sign In</h1>
                    <p className="text-gray-500 dark:text-gray-400">
                        Enter your email to sign in with a magic link.
                    </p>
                </div>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            required
                            {...form.register("email")}
                        />
                    </div>
                    <Button
                        type="submit"
                        className="w-full"
                        disabled={form.formState.isSubmitting}
                    >
                        {form.formState.isSubmitting ? "Sending..." : "Send Magic Link"}
                    </Button>
                </form>
            </div>
        </div>
    );
}

function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 6 9 17l-5-5" />
        </svg>
    );
}
