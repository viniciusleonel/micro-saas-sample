import {
    DashboardPage,
    DashboardPageHeader,
    DashboardPageHeaderTitle,
    DashboardPageMain,
    DashboardPageHeaderNav,
} from "@/components/dashboard/page";
import { ToDoDataTable } from "./__components/to-do-data-table";

import { getUserToDos } from "./actions";

export default async function AppPage() {

    const toDos = await getUserToDos();
    
    return (
        <DashboardPage>
            <DashboardPageHeader>
                <DashboardPageHeaderTitle>Tarefas</DashboardPageHeaderTitle>
                
            </DashboardPageHeader>

            <DashboardPageMain>
                <ToDoDataTable data={toDos} />
            </DashboardPageMain>
        </DashboardPage>
    );
}
