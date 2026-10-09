import { Injectable } from '@angular/core';
// Injectable are use to share one ts file info to many other files we wil study this later topics
export interface Employee {
  id: number;
  name: string;
  email: string;
  department: string;
  status: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employees: Employee[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@gmail.com',
      department: 'Developer',
      status: true,
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@gmail.com',
      department: 'HR',
      status: false,
    },
    {
      id: 3,
      name: 'Mike Ross',
      email: 'mike@gmail.com',
      department: 'Designer',
      status: true,
    },
    {
      id: 4,
      name: 'Sara Connor',
      email: 'sara@gmail.com',
      department: 'Manager',
      status: true,
    },
  ];

  getEmployeeById(id: number): Employee | undefined {
    return this.employees.find((emp) => emp.id === id);
  }
    addEmployee(employee: Employee): void {
    this.employees.push(employee);
    console.log('New Employee Added:', employee);
    console.log('Full List:', this.employees);
  }
}
