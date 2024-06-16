import {
    DashboardPage,
    DashboardPageHeader,
    DashboardPageHeaderTitle,
    DashboardPageMain,
} from "@/components/dashboard/page";

export default function SettingsPage() {
    return (
        <DashboardPage>
            <DashboardPageHeader>
                <DashboardPageHeaderTitle>
                    Configurações
                </DashboardPageHeaderTitle>
            </DashboardPageHeader>
            <DashboardPageMain>
                <h1>Configurações</h1>
            </DashboardPageMain>
        </DashboardPage>
    );
}
