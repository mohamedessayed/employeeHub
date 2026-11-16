import type { LucideIcon } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: number;
  change: string;
  icon: LucideIcon;
  iconColor: string;
  iconBackground: string;
}

export default function StatCard({
  title,
  value,
  change,
  icon: Icon,
  iconColor,
  iconBackground,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h3 className="mt-3 text-3xl font-bold text-slate-900">
            {value.toLocaleString()}
          </h3>
        </div>

        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl ${iconBackground}`}
        >
          <Icon size={23} className={iconColor} />
        </div>
      </div>

      <div className="mt-5 flex items-center gap-1">
        <ArrowUpRight size={16} className="text-emerald-600" />

        <span className="text-sm font-semibold text-emerald-600">
          {change}
        </span>

        <span className="text-sm text-slate-400">
          vs last month
        </span>
      </div>
    </div>
  );
}