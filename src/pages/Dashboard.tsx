
import {
  Users,
  UserCheck,
  UserX,
  Building2,
} from 'lucide-react';
import { useLanaguage } from '../hooks/useLanaguage';


export default function Dashboard() {
  const { t } = useLanaguage();

  const stats = [
    {
      title: t('totalEmployees'),
      value: '248',
      icon: Users,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      title: t('activeEmployees'),
      value: '220',
      icon: UserCheck,
      color: 'bg-green-100 text-green-600',
    },
    {
      title: t('inactiveEmployees'),
      value: '28',
      icon: UserX,
      color: 'bg-red-100 text-red-600',
    },
    {
      title: t('departmentsCount'),
      value: '12',
      icon: Building2,
      color: 'bg-purple-100 text-purple-600',
    },
  ];

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          {t('welcome')}
        </h1>

        <p className="mt-2 text-slate-500">
          {t('dashboardDescription')}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center justify-between">

                <div>
                  <p className="text-sm text-slate-500">
                    {stat.title}
                  </p>

                  <h2 className="mt-2 text-3xl font-bold text-slate-800">
                    {stat.value}
                  </h2>
                </div>

                <div className={`rounded-xl p-3 ${stat.color}`}>
                  <Icon size={24} />
                </div>

              </div>
            </div>
          );
        })}

      </div>

      <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-slate-800">
          {t('recentEmployees')}
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Employee data will be displayed here in the next phase.
        </p>
      </div>

    </div>
  );
}
