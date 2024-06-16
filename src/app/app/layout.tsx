import { auth } from "@/services/auth";
import { MainSidebar } from "./__components/main-sidebar";

export default async function AppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await auth();

    return (
        <div className="grid grid-cols-[16rem_1fr]">
            <MainSidebar user={session?.user} />

            <main>{children}</main>
        </div>
    );
}
