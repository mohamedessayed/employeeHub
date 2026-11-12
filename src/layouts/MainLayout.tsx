import { useState, type ReactNode } from "react"
import SidebarMenu from "../components/layout/SidebarMenu"
import Navbar from "../components/layout/Navbar";

interface MainLayoutProps {
    children:ReactNode
}


export default function MainLayout({children}:MainLayoutProps){

    const [sidebarOpen,setSidebarOpen] = useState<boolean>(false);
    return <>
    <div className="flex min-h-screen bg-slate-50">

        <SidebarMenu isOpen={sidebarOpen} onClose={()=>setSidebarOpen(false)} />
        
        <div className="flex min-w-0 flex-1 flex-col">
            <Navbar onMenuClick={()=>setSidebarOpen(true)} /> 

                <main className="flex-1 p-4 sm:p-6 lg:p-8">
                    {children}
                </main>
        </div>

    </div>
    </>
}