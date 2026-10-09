import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EmployeeService, Employee } from '../services/employee';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employees = this.employeeService.employees;
    console.log('🏠 Home Employees:', this.employees);
  }
}