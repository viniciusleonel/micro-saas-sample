"use client";

import {
    Sidebar,
    SidebarFooter,
    SidebarHeader,
    SidebarMain,
    SidebarNav,
    SidebarNavHeader,
    SidebarNavHeaderTitle,
    SidebarNavLink,
    SidebarNavMain,
} from "@/components/dashboard/sidebar";
import { GearIcon, HomeIcon } from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";
import { UserDropdown } from "./user-dropdown";
import { Logo } from "@/components/logo";

export function MainSidebar() {

    const pathname = usePathname();

    const isActive = (path: string) => {
        return pathname === path;
    };

    return (
        <Sidebar>
            <SidebarHeader>
                <Logo />
            </SidebarHeader>

            <SidebarMain className="flex flex-col flex-grow">
                <SidebarNav>
                    <SidebarNavMain>
                        <SidebarNavLink className="flex items-center gap-2" href="/app" active={isActive("/app")}>
                            <HomeIcon />Tarefas
                        </SidebarNavLink>
                        <SidebarNavLink className="flex items-center gap-2" href="/app/settings" active={isActive("/app/settings")}>
                            <GearIcon />Configuraçes
                        </SidebarNavLink>
                    </SidebarNavMain>
                </SidebarNav>

                <SidebarNav className="mt-auto">
                    <SidebarNavMain>
                        <SidebarNavHeader>
                            <SidebarNavHeaderTitle>
                                Links extras
                            </SidebarNavHeaderTitle>
                        </SidebarNavHeader>
                        <SidebarNavLink href="/">
                            Precisa de ajuda?
                        </SidebarNavLink>
                        <SidebarNavLink href="/">Site</SidebarNavLink>
                    </SidebarNavMain>
                </SidebarNav>
            </SidebarMain>

            <SidebarFooter>
                <UserDropdown />
            </SidebarFooter>
        </Sidebar>
    );
}
