import {
    DashboardPage,
    DashboardPageHeader,
    DashboardPageHeaderTitle,
    DashboardPageMain,
} from "@/components/dashboard/page";
import { SettingsSidebar } from "./__components/settings-sidebar";
import ThemeForm from "./theme/__components/theme-switch";

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
            <DashboardPageMain className="!px-0">
                <div className="container ">
                    <div className="grid grid-cols-[10rem_1fr] gap-12 ">
                        <SettingsSidebar />
                        <div>{children}</div>
                    </div>
                </div>
            </DashboardPageMain>
        </DashboardPage>
    );
}
