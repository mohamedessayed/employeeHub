import { createContext, useEffect, useState, type ReactNode } from "react";

type Lanaguage = 'en' | 'ar';

const translations = {
    en:{
        dashboard:"Dashboard",
        employees: "Employees",
        departments:'Departments',
        reports:'Reports',
        settings:'Settings',
        search:'Search...'
    },

    ar:{
         dashboard:"لوحة التحكم",
         employees: "الموظفين",
         departments:'الاقسام',
        reports:'التقارير',
        settings:'الاعدادات',
        search:'البحث....',
    }
};


type TranslationKey = keyof typeof translations.en

interface LanaguageContextType {
    lanaguage: Lanaguage
    setLanaguage: (lanaguage: Lanaguage) => void,
    t: (key:TranslationKey)=>string
}

export const LanaguageContext = createContext<LanaguageContextType|undefined>(undefined)

interface LanaguageProviderProps{
    children:ReactNode
}

export function LanaguageProvider({children}:LanaguageProviderProps){

    const [lanaguage,setLanaguage] = useState<Lanaguage>('en');

    useEffect(()=>{
        document.documentElement.lang = lanaguage;
        document.documentElement.dir = lanaguage === 'ar' ? 'rtl' : 'ltr';
    },[lanaguage])

    const t = (key: TranslationKey) => translations[lanaguage][key];

    return <LanaguageContext.Provider value={{lanaguage,setLanaguage,t}} >
        {children}
    </LanaguageContext.Provider>
}