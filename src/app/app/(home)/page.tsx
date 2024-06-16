import {
    DashboardPage,
    DashboardPageHeader,
    DashboardPageHeaderTitle,
    DashboardPageMain,
    DashboardPageHeaderNav,
} from "@/components/dashboard/page";
import { ToDoDataTable } from "./__components/to-do-data-table";
import { ToDoUpsertSheet } from "./__components/to-do-upsert-sheet";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import { getUserToDos } from "./actions";

export default async function AppPage() {

    const toDos = await getUserToDos();
    
    return (
        <DashboardPage>
            <DashboardPageHeader>
                <DashboardPageHeaderTitle>Tarefas</DashboardPageHeaderTitle>
                <DashboardPageHeaderNav>
                    <ToDoUpsertSheet>
                        <Button variant="outline" size="sm">
                            <PlusIcon className="w-4 h-4 mr-3" />
                            Add todo
                        </Button>
                    </ToDoUpsertSheet>
                </DashboardPageHeaderNav>
            </DashboardPageHeader>

            <DashboardPageMain>
                <ToDoDataTable data={toDos} />
            </DashboardPageMain>
        </DashboardPage>
    );
}
