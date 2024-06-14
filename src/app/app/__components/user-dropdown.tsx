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

export function UserDropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="link"
                    className="relative h-8 flex items-center space-x-2 !px-0 justify-between w-full"
                >
                    <Avatar className="h-9 w-9">
                        <AvatarImage
                            src="/avatars/03.png"
                            alt="@shadcn"
                        />
                        <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col flex-1 text-left space-y-1">
                        <p className="text-sm font-medium leading-none">
                            shadcn
                        </p>
                        <p className="text-xs leading-none text-muted-foreground">
                            m@example.com
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
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">
                            shadcn
                        </p>
                        <p className="text-xs leading-none text-muted-foreground">
                            m@example.com
                        </p>
                    </div>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                <DropdownMenuGroup>

                    <DropdownMenuItem className="flex items-center gap-2">
                        <GearIcon />
                        Configuraçes
                    </DropdownMenuItem>

                    <DropdownMenuItem className="flex items-center gap-2">
                        <RocketIcon />
                        Upgrade
                    </DropdownMenuItem>

                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="flex items-center gap-2">
                    <ExitIcon />
                    Log out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
