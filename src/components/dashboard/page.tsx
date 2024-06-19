import { cn } from "@/lib/utils";

export type DashboardPageGenericProps<T = unknown> = {
    children: React.ReactNode;
    className?: string;
} & T;

type DashboardPageNavLinkProps = {
    href: string;
    active?: boolean;
};

export function DashboardPage({ children, className }: DashboardPageGenericProps) {
    return (
        <section className={cn(["h-screen", className])}>
            {children}
        </section>
    )
}

export function DashboardPageHeader({ children, className }: DashboardPageGenericProps) {
    return (
        <header className={cn(["p-6 py-3 border-b border-border flex items-center justify-between", className])}>
            {children}
        </header>
    )
}

export function DashboardPageHeaderTitle({ children, className }: DashboardPageGenericProps) {
    return (
        <span className={cn(["text-md text-muted-foreground uppercase", className])}>
            {children}
        </span>
    )
}

export function DashboardPageHeaderNav( { children, className }: DashboardPageGenericProps) {
    return (
        <nav className={cn(["", className])}>
            {children}
        </nav>
    )
}

export function DashboardPageMain( { children, className }: DashboardPageGenericProps) {
    return (
        <main className={cn(["p-6", className])}>
            {children}
        </main>
    )
}