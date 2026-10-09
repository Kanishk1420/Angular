import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EmployeeService, Employee } from '../services/employee';

@Component({
  selector: 'app-detail',
  imports: [RouterLink],
  templateUrl: './detail.html',
  styleUrl: './detail.css',
})
export class Detail {
  
  employee: Employee | undefined;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.employee = this.employeeService.getEmployeeById(id);
  }
}