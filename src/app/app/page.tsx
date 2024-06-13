import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { auth } from "@/services/auth";
import { UserInfo } from "./__components/user-info";

export default async function AppPage() {

    const session = await auth();

    return (
        <main className="flex  items-center justify-center h-screen">
            <UserInfo user={session?.user} />
        </main>
    );
}