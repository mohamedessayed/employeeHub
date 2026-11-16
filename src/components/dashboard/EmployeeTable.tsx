import { employees } from '../../data/mockData';
import { useLanaguage } from '../../hooks/useLanaguage';

export default function EmployeeTable() {
  const { language } = useLanaguage();

  const isArabic = language === 'ar';

  const labels = {
    name: isArabic ? 'الموظف' : 'Employee',
    position: isArabic ? 'الوظيفة' : 'Position',
    department: isArabic ? 'القسم' : 'Department',
    status: isArabic ? 'الحالة' : 'Status',
    joinDate: isArabic ? 'تاريخ التعيين' : 'Join Date',
    active: isArabic ? 'نشط' : 'Active',
    inactive: isArabic ? 'غير نشط' : 'Inactive',
    onLeave: isArabic ? 'إجازة' : 'On Leave',
  };

  const statusStyles = {
    Active: 'bg-emerald-50 text-emerald-700',
    Inactive: 'bg-red-50 text-red-700',
    'On Leave': 'bg-amber-50 text-amber-700',
  };

  const statusLabels = {
    Active: labels.active,
    Inactive: labels.inactive,
    'On Leave': labels.onLeave,
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="flex items-center justify-between p-5">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            {isArabic ? 'أحدث الموظفين' : 'Recent Employees'}
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            {isArabic
              ? 'قائمة بأحدث الموظفين في الشركة'
              : 'Latest employees in your company'}
          </p>
        </div>

        <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-800">
          {isArabic ? 'عرض الكل' : 'View All'}
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[750px] text-start">
          <thead className="bg-slate-50">
            <tr className="text-xs font-semibold uppercase text-slate-500">
              <th className="px-5 py-4 text-start">{labels.name}</th>
              <th className="px-5 py-4 text-start">{labels.position}</th>
              <th className="px-5 py-4 text-start">{labels.department}</th>
              <th className="px-5 py-4 text-start">{labels.status}</th>
              <th className="px-5 py-4 text-start">{labels.joinDate}</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {employees.map((employee) => (
              <tr key={employee.id} className="hover:bg-slate-50">
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={employee.avatar}
                      alt={employee.name}
                      className="h-10 w-10 rounded-full object-cover"
                    />

                    <div>
                      <p className="font-semibold text-slate-800">
                        {employee.name}
                      </p>

                      <p className="text-xs text-slate-400">
                        {employee.email}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-5 py-4 text-sm text-slate-600">
                  {employee.position}
                </td>

                <td className="px-5 py-4 text-sm text-slate-600">
                  {employee.department}
                </td>

                <td className="px-5 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[employee.status]}`}
                  >
                    {statusLabels[employee.status]}
                  </span>
                </td>

                <td className="px-5 py-4 text-sm text-slate-500">
                  {employee.joinDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}