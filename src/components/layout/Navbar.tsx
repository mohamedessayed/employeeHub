
import {
  Menu,
  Search,
  Bell,
  Languages,
} from 'lucide-react';

import { useLanguage } from '../../context/LanguageContext';

interface NavbarProps {
  onMenuClick: () => void;
}

export default function Navbar({
  onMenuClick,
}: NavbarProps) {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <header className="flex h-20 items-center justify-between gap-4 border-b border-slate-200 bg-white px-4 sm:px-6">

      {/* Left Side */}

      <div className="flex items-center gap-3">

        <button
          onClick={onMenuClick}
          className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>

        <div className="relative hidden sm:block">
          <Search
            size={18}
            className="absolute start-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="search"
            placeholder={t('search')}
            className="w-56 rounded-xl border border-slate-200 bg-slate-50 py-2.5 ps-10 pe-4 text-sm outline-none focus:border-blue-500"
          />
        </div>

      </div>

      {/* Right Side */}

      <div className="flex items-center gap-3">

        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100"
        >
          <Languages size={18} />

          {language === 'en' ? 'العربية' : 'English'}
        </button>

        <button
          className="relative rounded-lg p-2 text-slate-600 hover:bg-slate-100"
          aria-label="Notifications"
        >
          <Bell size={20} />

          <span className="absolute end-2 top-2 h-2 w-2 rounded-full bg-red-500" />
        </button>

        <div className="flex items-center gap-3 border-s border-slate-200 ps-3">

          <div className="hidden text-end sm:block">
            <p className="text-sm font-semibold text-slate-800">
              Admin User
            </p>

            <p className="text-xs text-slate-500">
              Administrator
            </p>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
            AD
          </div>

        </div>

      </div>

    </header>
  );
}
