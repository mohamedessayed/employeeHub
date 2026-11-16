export type EmployeeStatus = 'Active' | 'Inactive' | 'On Leave';

export interface Employee {
  id: number;
  name: string;
  email: string;
  position: string;
  department: string;
  avatar: string;
  status: EmployeeStatus;
  joinDate: string;
  salary: number;
}