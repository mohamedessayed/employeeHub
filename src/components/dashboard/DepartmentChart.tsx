import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import { departmentStats } from '../../data/mockData';
import { useLanaguage } from '../../hooks/useLanaguage';

export default function DepartmentChart() {
  const { language } = useLanaguage();

  const isArabic = language === 'ar';

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-slate-900">
          {isArabic ? 'الموظفون حسب القسم' : 'Employees by Department'}
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          {isArabic
            ? 'توزيع الموظفين على أقسام الشركة'
            : 'Employee distribution across departments'}
        </p>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={departmentStats}
            margin={{ top: 5, right: 10, left: -20, bottom: 5 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#e2e8f0"
            />

            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#64748b', fontSize: 12 }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#64748b', fontSize: 12 }}
            />

            <Tooltip />

            <Bar
              dataKey="employees"
              name={isArabic ? 'عدد الموظفين' : 'Employees'}
              fill="#6366f1"
              radius={[6, 6, 0, 0]}
              barSize={35}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}