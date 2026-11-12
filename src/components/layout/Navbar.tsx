import { Bell, Languages, Menu, Search } from "lucide-react";
import { useLanaguage } from "../../hooks/useLanaguage";


interface NavbarProps {
    onMenuClick: ()=>void
}

export default function Navbar({onMenuClick}: NavbarProps){

    const {lanaguage, setLanaguage, t} = useLanaguage();


    const toggleLanaguage = ()=> {
        setLanaguage(lanaguage === 'ar' ? 'en':'ar')
    };


    return <>
    
    <header>
        <div>
            <button onClick={onMenuClick}>
                <Menu size={22} />
            </button>

            <div>
                <Search size={18} />
                <input type="search" placeholder={t('search')}/>
            </div>
        </div>


        <div>
            <button onClick={toggleLanaguage}>
                <Languages size={18} />
                {lanaguage ==='en'? 'العربية':'English'}
            </button>

            <button className="relative rounded-lg p-2 text-slate-600 hover:bg-slate-100">
                <Bell size={20} />
                <span className="absolute inset-e-2 top-2 h-2 w-2 rounded-full bg-red-500" />
            </button>

            <div className="hidden text-end sm:block">
                <p className="text-sm font-semibold text-slate-700">Admin User</p>
                <p className="text-xs text-slate-500">Adminstrator</p>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
                    AD
                </div>
            </div>
        </div>
    </header>
    </>






}