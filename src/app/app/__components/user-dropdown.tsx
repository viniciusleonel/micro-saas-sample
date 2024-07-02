import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ExitIcon, GearIcon, RocketIcon } from "@radix-ui/react-icons";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import ThemeSwitch from "../settings/theme/__components/theme-switch";
import Link from "next/link";

type UserDropdownProps = {
    user: Session["user"];
};

export function UserDropdown({ user }: UserDropdownProps) {
    if (!user) {
        return;
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="link"
                    className="relative h-8 flex items-center space-x-2 !px-0 justify-between w-full"
                >
                    <Avatar className="h-9 w-9">
                        <AvatarImage
                            src={user.image as string}
                            alt={user.name as string}
                        />
                        <AvatarFallback className="text-lg uppercase">
                            {user.email?.[0]}
                        </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col flex-1 text-left space-y-1 ">
                        {user.name && (
                            <p className="text-sm font-medium leading-none">
                                {user.name}
                            </p>
                        )}
                        <p className="text-xs leading-none text-muted-foreground">
                            {user.email}
                        </p>
                    </div>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="w-56"
                align="end"
                forceMount
            >
                <DropdownMenuLabel className="font-normal">
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col space-y-1">
                            <p className="text-sm font-medium leading-none">
                                {user.name}
                            </p>
                            <p className="text-xs leading-none text-muted-foreground">
                                {user.email}
                            </p>
                        </div>
                        <ThemeSwitch />
                    </div>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                <DropdownMenuGroup>
                    <DropdownMenuItem className="flex items-center gap-2">
                        <GearIcon />
                        <Link href="/app/settings">
                            Configuraçes
                        </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem className="flex items-center gap-2">
                        <RocketIcon />
                        <Link href="/app/settings/billing">
                            Upgrade
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    className="flex items-center gap-2"
                    onClick={() => signOut()}
                >
                    <ExitIcon />
                    Log out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
