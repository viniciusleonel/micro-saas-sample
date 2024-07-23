"use client";

import {
    DashboardSidebar,
    DashboardSidebarFooter,
    DashboardSidebarHeader,
    DashboardSidebarMain,
    DashboardSidebarNav,
    DashboardSidebarNavHeader,
    DashboardSidebarNavHeaderTitle,
    DashboardSidebarNavLink,
    DashboardSidebarNavMain,
} from "@/components/dashboard/sidebar";
import { GearIcon, HomeIcon } from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";
import { UserDropdown } from "./user-dropdown";
import { Logo } from "@/components/logo";
import { Session } from "next-auth";

type MainSidebarProps = {
    user: Session["user"];
};

export function MainSidebar({ user }: MainSidebarProps) {
    const pathname = usePathname();

    const isActive = (path: string) => {
        return pathname === path;
    };

    return (
        <DashboardSidebar>
            <DashboardSidebarHeader>
                <Logo />
            </DashboardSidebarHeader>

            <DashboardSidebarMain className="flex flex-col flex-grow">
                <DashboardSidebarNav>
                    <DashboardSidebarNavMain>
                        <DashboardSidebarNavLink
                            className="flex items-center gap-2"
                            href="/app"
                            active={isActive("/app")}
                        >
                            <HomeIcon />
                            Tarefas
                        </DashboardSidebarNavLink>
                        <DashboardSidebarNavLink
                            className="flex items-center gap-2"
                            href="/app/settings"
                            active={isActive("/app/settings")}
                        >
                            <GearIcon />
                            Configurações
                        </DashboardSidebarNavLink>
                    </DashboardSidebarNavMain>
                </DashboardSidebarNav>

                <DashboardSidebarNav className="mt-auto">
                    <DashboardSidebarNavMain>
                        <DashboardSidebarNavHeader>
                            <DashboardSidebarNavHeaderTitle>
                                Links extras
                            </DashboardSidebarNavHeaderTitle>
                        </DashboardSidebarNavHeader>
                        <DashboardSidebarNavLink href="/">
                            Precisa de ajuda?
                        </DashboardSidebarNavLink>
                        <DashboardSidebarNavLink href="https://viniciusleonel.dev.br/">
                            Site
                        </DashboardSidebarNavLink>
                    </DashboardSidebarNavMain>
                </DashboardSidebarNav>
            </DashboardSidebarMain>

            <DashboardSidebarFooter>
                <UserDropdown user={user} />
            </DashboardSidebarFooter>
        </DashboardSidebar>
    );
}
