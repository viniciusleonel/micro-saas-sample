import { MainSidebar } from "./__components/main-sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
    <div className="grid grid-cols-[16rem_1fr] gap-4">
        
        <MainSidebar />

        <main>
            {children}
        </main>
        
    </div>
        
    );
}