/* eslint-disable react/no-unescaped-entities */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SVGProps } from "react";

export function AuthForm() {
    return (
        <div className="mx-auto max-w-md space-y-6">
            <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold">Sign In</h1>
                <p className="text-gray-500 dark:text-gray-400">
                    Enter your email to sign in with a magic link.
                </p>
            </div>
            <form className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        required
                    />
                </div>
                <Button
                    type="submit"
                    className="w-full"
                >
                    Send Magic Link
                </Button>
            </form>
            <div className="rounded-md bg-green-50 p-4 dark:bg-green-900/20">
                <div className="flex">
                    <div className="flex-shrink-0">
                        <CheckIcon className="h-5 w-5 text-green-400 dark:text-green-500" />
                    </div>
                    <div className="ml-3">
                        <p className="text-sm font-medium text-green-800 dark:text-green-200">
                            We've sent a magic link to your email. Check your
                            inbox to sign in.
                        </p>
                    </div>
                </div>
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
