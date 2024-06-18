import {
    DashboardPage,
    DashboardPageHeader,
    DashboardPageHeaderTitle,
    DashboardPageMain,
} from "@/components/dashboard/page";
import { SettingsSidebar } from "./__components/settings-sidebar";

export default function SettingsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <DashboardPage>
            <DashboardPageHeader>
                <DashboardPageHeaderTitle>
                    Configurações
                </DashboardPageHeaderTitle>
            </DashboardPageHeader>
            <DashboardPageMain>
                <div className="container max-w-screen-lg">
                    <div className="grid grid-cols-[16rem_1fr] gap-6 ">
                        <SettingsSidebar />
                        <div>{children}</div>
                    </div>
                </div>
            </DashboardPageMain>
        </DashboardPage>
    );
}
