import { NavLink } from "react-router-dom"
import { BriefcaseBusiness, X } from "lucide-react";
import { BarChart3, Building2, LayoutDashboard, Settings, Users, type LucideIcon } from "lucide-react";
import { useLanaguage } from "../../hooks/useLanaguage";

interface SidebarProps {
    isOpen:boolean,
    onClose:()=>void
}
interface sidebarItemsType {
    lable:string,
    path:string,
    icon:LucideIcon
}

export default function SidebarMenu ({isOpen, onClose}:SidebarProps) {


  



const {t} = useLanaguage();

 const menuItems: sidebarItemsType[] = [
    {
        lable: t('dashboard'),
        path:"/",
        icon: LayoutDashboard
    },

    {
        lable: t('employees'),
        path:"/employees",
        icon: Users
    },

    {
        lable: t('departments'),
        path:"/departments",
        icon: Building2
    },

    {
        lable: t('reports'),
        path:"/reports",
        icon: BarChart3
    },

    {
        lable: t('settings'),
        path:"/settings",
        icon: Settings
    },
]

    return <>
    {isOpen && (<div onClick={onClose} className="fixed inset-0 z-40 bg-black lg:hidden"></div>)}

    <aside className={`fixed inset-y-0 start-0 z-50 flex w-64 flex-col bg-slate-900 text-white transition-transform duration-300 lg:static lg:z-auto lg:translate-x-0 ${isOpen? 'translate-x-0':'ltr:-translate-x-full rtl:translate-x-full'}` }>

        {/* logo */}

<div className="flex h-20 items-center gap-3 border-b border-slate-700 px-6">
<div className="flex h-20 w-10 items-center bg-blue-600 rounded-xl justify-center">
    
    <BriefcaseBusiness size={22} />

</div>

<div>
    <h1 className="text-lg font-bold">EmployeeHub</h1>

    <p className="text-xs text-slate-400">Managemnet system</p>
</div>
</div>

        <nav>

<p className="mb-4 px-3 text-xs font-semibold uppercase text-slate-400 tracking-wider ">
    Main Menu
</p>

            {menuItems.map((item)=> {
            const Icon = item.icon;

            


            return (<NavLink to={item.path} key={item.path} end={item.path=== '/'} >
                <Icon size={20} /> 
                <span className="text-sm font-medium">{item.lable}</span>
                
                </NavLink>)
        }

    )} 

        </nav>


        <footer className="border-t border-slate-700 p-5">
            <p className="text-slate-400">
                Employee Managment system
            </p>
            <p className="text-slate-500">
                Version 1.0.0
            </p>
        </footer>

    </aside>
    </>

}