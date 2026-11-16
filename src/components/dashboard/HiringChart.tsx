import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import { hiringStats } from '../../data/mockData';
import { useLanaguage } from '../../hooks/useLanaguage';

export default function HiringChart() {
  const { language } = useLanaguage();

  const isArabic = language === 'ar';

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-slate-900">
          {isArabic ? 'معدل التوظيف' : 'Hiring Overview'}
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          {isArabic
            ? 'عدد الموظفين الجدد خلال الأشهر'
            : 'Number of new employees over the months'}
        </p>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={hiringStats}
            margin={{ top: 5, right: 10, left: -20, bottom: 5 }}
          >
            <defs>
              <linearGradient id="hiringGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366f1" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#e2e8f0"
            />

            <XAxis
              dataKey="month"
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

            <Area
              type="monotone"
              dataKey="employees"
              name={isArabic ? 'الموظفون الجدد' : 'New Employees'}
              stroke="#6366f1"
              strokeWidth={3}
              fill="url(#hiringGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}