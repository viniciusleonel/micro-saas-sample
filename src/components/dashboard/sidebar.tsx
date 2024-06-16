import Link from "next/link";

import { cn } from "@/lib/utils";

export type DashboardSidebarGenericProps<T = unknown> = {
    children: React.ReactNode;
    className?: string;
} & T;

export function DashboardSidebar({ children, className }: DashboardSidebarGenericProps) {
    return (
        <aside className={cn(["border-r border-border flex flex-col space-y-6", className])}>
            {children}
        </aside>
    );
}

export function DashboardSidebarHeader({ children, className }: DashboardSidebarGenericProps) {
    return (
        <header className={cn(["p-6 py-3 border-b border-border", className])}>
            {children}
        </header>
    );
}
export function DashboardSidebarHeaderTitle({ children, className }: DashboardSidebarGenericProps) {
    return (
        <h2 className={cn(["", className])}>
            {children}
        </h2>
    );
}

export function DashboardSidebarMain({ children, className }: DashboardSidebarGenericProps) {
    return (
        <main className={cn([" px-3 ", className])}>
            {children}
        </main>
    );
}

export function DashboardSidebarNav({ children, className }: DashboardSidebarGenericProps) {
    return (
        <nav className={cn(["", className])}>
            {children}
        </nav>
    );
}

export function DashboardSidebarNavHeader({ children, className }: DashboardSidebarGenericProps) {
    return (
        <header className={cn(["", className])}>
            {children}
        </header>
    );
}

export function DashboardSidebarNavHeaderTitle({ children, className }: DashboardSidebarGenericProps) {
    return (
        <h4 className={cn(["text-sm uppercase ml-3 text-muted-foreground", className])}>
            {children}
        </h4>
    );
}

export function DashboardSidebarNavMain({ children, className }: DashboardSidebarGenericProps) {
    return (
        <main className={cn(["flex flex-col", className])}>
            {children}
        </main>
    );
}

type DashboardSidebarNavLinkProps = {
    href: string;
    active?: boolean;
};

export function DashboardSidebarNavLink({
    href,
    children,
    className,
    active,
}: DashboardSidebarGenericProps<DashboardSidebarNavLinkProps>) {
    return (
        <Link
            href={href}
            className={cn([
                "text-xs px-3 py-2 rounded-md",
                active ? "bg-secondary" : "",
                className,
            ])}
        >
            {children}
        </Link>
    );
}

export function DashboardSidebarFooter({ children, className }: DashboardSidebarGenericProps) {
    return (
        <footer className={cn(["p-6 mt-auto border-t border-border", className])}>
            {children}
        </footer>
    );
}
