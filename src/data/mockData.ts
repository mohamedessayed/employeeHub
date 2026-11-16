import type { hiringDates } from '../types/chart';
import type { DepartmentStat } from '../types/department';
import type { Employee } from '../types/employee';

export const employees: Employee[] = [
  {
    id: 1,
    name: 'Ahmed Hassan',
    email: 'ahmed@company.com',
    position: 'Senior Developer',
    department: 'IT',
    avatar: 'https://i.pravatar.cc/150?img=12',
    status: 'Active',
    joinDate: '2024-02-15',
    salary: 25000,
  },
  {
    id: 2,
    name: 'Sara Mohamed',
    email: 'sara@company.com',
    position: 'UI/UX Designer',
    department: 'Design',
    avatar: 'https://i.pravatar.cc/150?img=47',
    status: 'Active',
    joinDate: '2023-11-10',
    salary: 18000,
  },
  {
    id: 3,
    name: 'Omar Ali',
    email: 'omar@company.com',
    position: 'HR Specialist',
    department: 'Human Resources',
    avatar: 'https://i.pravatar.cc/150?img=13',
    status: 'Inactive',
    joinDate: '2022-06-20',
    salary: 15000,
  },
  {
    id: 4,
    name: 'Mariam Adel',
    email: 'mariam@company.com',
    position: 'Marketing Manager',
    department: 'Marketing',
    avatar: 'https://i.pravatar.cc/150?img=44',
    status: 'Active',
    joinDate: '2024-05-01',
    salary: 22000,
  },
  {
    id: 5,
    name: 'Youssef Samir',
    email: 'youssef@company.com',
    position: 'Backend Developer',
    department: 'IT',
    avatar: 'https://i.pravatar.cc/150?img=60',
    status: 'On Leave',
    joinDate: '2023-08-12',
    salary: 20000,
  },
  {
    id: 6,
    name: 'Nour Ahmed',
    email: 'nour@company.com',
    position: 'Accountant',
    department: 'Finance',
    avatar: 'https://i.pravatar.cc/150?img=45',
    status: 'Active',
    joinDate: '2025-01-18',
    salary: 16000,
  },
];

export const departmentStats: DepartmentStat[] = [
  { name: 'IT', employees: 45 },
  { name: 'HR', employees: 18 },
  { name: 'Design', employees: 25 },
  { name: 'Marketing', employees: 32 },
  { name: 'Finance', employees: 20 },
];

export const hiringStats: hiringDates[] = [
  { month: 'Jan', employees: 12 },
  { month: 'Feb', employees: 18 },
  { month: 'Mar', employees: 15 },
  { month: 'Apr', employees: 24 },
  { month: 'May', employees: 20 },
  { month: 'Jun', employees: 30 },
];