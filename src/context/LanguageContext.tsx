
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

type Language = 'en' | 'ar';

const translations = {
  en: {
    dashboard: 'Dashboard',
    employees: 'Employees',
    departments: 'Departments',
    reports: 'Reports',
    settings: 'Settings',
    search: 'Search...',
    welcome: 'Welcome back!',
    dashboardDescription: 'Here is what is happening in your company today.',
    totalEmployees: 'Total Employees',
    activeEmployees: 'Active Employees',
    inactiveEmployees: 'Inactive Employees',
    departmentsCount: 'Departments',
    recentEmployees: 'Recent Employees',
    viewAll: 'View All',
  },

  ar: {
    dashboard: 'لوحة التحكم',
    employees: 'الموظفون',
    departments: 'الأقسام',
    reports: 'التقارير',
    settings: 'الإعدادات',
    search: 'ابحث...',
    welcome: 'مرحباً بعودتك!',
    dashboardDescription: 'إليك ملخص ما يحدث في شركتك اليوم.',
    totalEmployees: 'إجمالي الموظفين',
    activeEmployees: 'الموظفون النشطون',
    inactiveEmployees: 'الموظفون غير النشطين',
    departmentsCount: 'الأقسام',
    recentEmployees: 'أحدث الموظفين',
    viewAll: 'عرض الكل',
  },
};

type TranslationKey = keyof typeof translations.en;

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<
  LanguageContextType | undefined
>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({
  children,
}: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir =
      language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const t = (key: TranslationKey) => {
    return translations[language][key];
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      'useLanguage must be used inside LanguageProvider'
    );
  }

  return context;
}
