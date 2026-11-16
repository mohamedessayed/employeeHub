import {
  Users,
  UserCheck,
  UserX,
  Building2,
} from 'lucide-react';

import StatCard from '../components/dashboard/StatCard';
import EmployeeTable from '../components/dashboard/EmployeeTable';
import DepartmentChart from '../components/dashboard/DepartmentChart';
import HiringChart from '../components/dashboard/HiringChart';

import {
  employees,
  departmentStats,
} from '../data/mockData';
import { useLanaguage } from '../hooks/useLanaguage';


export default function Dashboard() {
  const { language } = useLanaguage();

  const isArabic = language === 'ar';

  const totalEmployees = employees.length;

  const activeEmployees = employees.filter(
    (employee) => employee.status === 'Active',
  ).length;

  const inactiveEmployees = employees.filter(
    (employee) => employee.status === 'Inactive',
  ).length;

  const totalDepartments = departmentStats.length;

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          {isArabic ? 'لوحة التحكم' : 'Dashboard'}
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          {isArabic
            ? 'مرحباً بك! إليك ملخص بيانات الموظفين.'
            : 'Welcome back! Here is your employee overview.'}
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title={isArabic ? 'إجمالي الموظفين' : 'Total Employees'}
          value={totalEmployees}
          change="+12.5%"
          icon={Users}
          iconColor="text-indigo-600"
          iconBackground="bg-indigo-50"
        />

        <StatCard
          title={isArabic ? 'الموظفون النشطون' : 'Active Employees'}
          value={activeEmployees}
          change="+8.2%"
          icon={UserCheck}
          iconColor="text-emerald-600"
          iconBackground="bg-emerald-50"
        />

        <StatCard
          title={isArabic ? 'الموظفون غير النشطين' : 'Inactive Employees'}
          value={inactiveEmployees}
          change="-2.4%"
          icon={UserX}
          iconColor="text-red-600"
          iconBackground="bg-red-50"
        />

        <StatCard
          title={isArabic ? 'الأقسام' : 'Departments'}
          value={totalDepartments}
          change="+2"
          icon={Building2}
          iconColor="text-amber-600"
          iconBackground="bg-amber-50"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
        <DepartmentChart />
        <HiringChart />
      </div>

      {/* Employee Table */}
      <EmployeeTable />
    </div>
  );
}