
import { NavLink } from 'react-router-dom';

import {
  LayoutDashboard,
  Users,
  Building2,
  BarChart3,
  Settings,
  BriefcaseBusiness,
} from 'lucide-react';
import { useLanaguage } from '../../hooks/useLanaguage';


interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({
  isOpen,
  onClose,
}: SidebarProps) {
  const { t } = useLanaguage();

  const menuItems = [
    {
      label: t('dashboard'),
      path: '/',
      icon: LayoutDashboard,
    },
    {
      label: t('employees'),
      path: '/employees',
      icon: Users,
    },
    {
      label: t('departments'),
      path: '/departments',
      icon: Building2,
    },
    {
      label: t('reports'),
      path: '/reports',
      icon: BarChart3,
    },
    {
      label: t('settings'),
      path: '/settings',
      icon: Settings,
    },
  ];

  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      <aside
        className={`
          fixed inset-y-0 start-0 z-50
          flex w-64 flex-col bg-slate-900 text-white
          transition-transform duration-300
          lg:static lg:z-auto lg:translate-x-0
          ${isOpen
            ? 'translate-x-0'
            : 'ltr:-translate-x-full rtl:translate-x-full'
          }
        `}
      >
        {/* Logo */}

        <div className="flex h-20 items-center gap-3 border-b border-slate-700 px-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600">
            <BriefcaseBusiness size={22} />
          </div>

          <div>
            <h1 className="text-lg font-bold">
              EmployeeHub
            </h1>

            <p className="text-xs text-slate-400">
              Management System
            </p>
          </div>
        </div>

        {/* Navigation */}

        <nav className="flex-1 space-y-2 px-4 py-6">

          <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Main Menu
          </p>

          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                onClick={onClose}
                className={({ isActive }) => `
                  flex items-center gap-3 rounded-xl px-3 py-3
                  transition-colors
                  ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }
                `}
              >
                <Icon size={20} />

                <span className="text-sm font-medium">
                  {item.label}
                </span>
              </NavLink>
            );
          })}

        </nav>

        {/* Footer */}

        <div className="border-t border-slate-700 p-5">
          <p className="text-xs text-slate-400">
            Employee Management System
          </p>

          <p className="mt-1 text-xs text-slate-500">
            Version 1.0.0
          </p>
        </div>

      </aside>
    </>
  );
}
