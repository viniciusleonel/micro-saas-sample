import {
    DashboardPage,
    DashboardPageHeader,
    DashboardPageHeaderTitle,
    DashboardPageMain,
} from "@/components/dashboard/page";
import { ToDoDataTable } from "./__components/to-do-data-table";

export default async function AppPage() {
    return (
        <DashboardPage>
            <DashboardPageHeader>
                <DashboardPageHeaderTitle>Tarefas</DashboardPageHeaderTitle>
            </DashboardPageHeader>
            <DashboardPageMain>
                <ToDoDataTable />
            </DashboardPageMain>
        </DashboardPage>
    );
}
