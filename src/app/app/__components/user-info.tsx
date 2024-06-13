'use client'

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";

type UserInfoProps = {
    user: Session['user']
}

export function UserInfo({ user }: UserInfoProps) {
    
    if (!user) {
        return 
    }
    
    return (
        <div className="flex flex-col space-y-4 items-center gap-2">
                <Avatar>
                    <AvatarFallback>
                        U
                        {/* {session?.user?.email} */}
                    </AvatarFallback>
                </Avatar>   
                <span>{user?.email}</span>

                <Button
                    variant="outline"
                    onClick={() => signOut()}
                >
                    Logout
                </Button>
            </div>
    )
}