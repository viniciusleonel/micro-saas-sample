"use client"

import { Button } from "@/components/ui/button";
import { SVGProps, useState } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { toast } from "@/components/ui/use-toast";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { FcGoogle } from "react-icons/fc";
import ThemeSwitch from "@/app/app/settings/theme/__components/theme-switch";

export function AuthForm() {

    const [isSubmitting, setIsSubmitting] = useState(false)

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

    const handleGoogleSignIn = async () => {
        setIsSubmitting(true)
        try {
            await signIn("google", { redirect: false });
        } catch (error) {
            toast({
                title: "Erro",
                variant: "destructive",
                description: "Ocorreu um erro ao fazer login com o Google.",
            });
        }
        finally {
            setIsSubmitting(false)
        }
    };

    const handleGithubSignIn = async () => {
        setIsSubmitting(true)
        try {
            await signIn("github", { redirect: false });
        } catch (error) {
            toast({
                title: "Erro",
                variant: "destructive",
                description: "Ocorreu um erro ao fazer login com o GitHub.",
            });
        }
        finally {
            setIsSubmitting(false)
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="mx-auto max-w-md space-y-6">
                <div className="space-y-2 text-center">
                    <div className="flex justify-center items-center">
                        <h1 className="text-3xl font-bold ms-8 mx-4">
                            Sign In
                        </h1>
                        <ThemeSwitch className="mt-[2px]"/>
                    </div>
                    
                    {/* <p className="text-gray-500 dark:text-gray-400">
                        Enter your email to sign in with a magic link.
                    </p> */}
                </div>
                {/* <form className="space-y-4" onSubmit={handleSubmit}>
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
                </form> */}
                <Button
                    disabled={isSubmitting}
                    className="w-full mt-4"
                    onClick={handleGoogleSignIn}
                >
                    <FcGoogle className="w-4 h-4 mr-2" />
                    Sign in with Google
                </Button>
                <Button
                    disabled={isSubmitting}
                    className="w-full mt-4"
                    onClick={handleGithubSignIn}
                >
                    <GitHubLogoIcon className="w-4 h-4 mr-2" />
                    Sign in with GitHub
                </Button>
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
