import { auth } from "@/services/auth";
import { ProfileForm } from "./__components/form";

export default async function SettingsPage() {
    const session = await auth();
    if (!session || !session.user) {
        throw new Error("User session not found");
    }
    return <ProfileForm defaultValues={session.user} />;
}