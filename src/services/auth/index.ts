import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/nodemailer";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "../database";

export const { 
    handlers: { GET, POST},
    auth
} = NextAuth({
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
        })
    ],
});
