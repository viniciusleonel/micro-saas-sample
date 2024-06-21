import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/nodemailer";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "../database";
import { createStripeCustomer } from "../stripe";

export const {
    handlers: { GET, POST },
    auth,
} = NextAuth({
    pages: {
        signIn: "/auth",
        signOut: "/auth",
        error: "/auth",
        verifyRequest: "/auth",
        newUser: "/app",
    },
    adapter: PrismaAdapter(prisma),
    providers: [
        EmailProvider({
            server: {
                host: process.env.EMAIL_SERVER,
                port: process.env.EMAIL_PORT,
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASSWORD,
                },
            },
            from: process.env.EMAIL_FROM,
        }),
    ],
    events: {
        createUser: async (message) => {
            await createStripeCustomer({
                name: message.user.name as string,
                email: message.user.email as string,
            });
        },
    },
});
