import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { EmployeeService } from '../services/employee';

@Component({
  selector: 'app-edit',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './edit.html',
  styleUrl: './edit.css',
})
export class Edit {
  employeeForm!: FormGroup;
  employeeId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {
    this.employeeId = Number(this.route.snapshot.paramMap.get('id'));
    const employeeData = this.employeeService.getEmployeeById(this.employeeId);

    if (employeeData) {
      this.employeeForm = new FormGroup({
        name: new FormControl(employeeData.name, [Validators.required, Validators.minLength(3)]),
        email: new FormControl(employeeData.email, [
          Validators.required,
          Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}'),
        ]),
        department: new FormControl(employeeData.department, [Validators.required]),
        status: new FormControl(String(employeeData.status), [Validators.required]) 
      });
    }
  }

  updateEmployee(): void {
    if (this.employeeForm.invalid) {
      this.employeeForm.markAllAsTouched();
      return;
    }

    // Find the old employee matching record inside the service array using a basic loop
    const allEmployees = this.employeeService.employees;
    
    for (let i = 0; i < allEmployees.length; i++) {
      if (allEmployees[i].id === this.employeeId) {
        
        // Overwrite the existing array item with the updated values coming from the HTML form
        allEmployees[i] = {
          id: this.employeeId,
          name: this.employeeForm.value.name,
          email: this.employeeForm.value.email,
          department: this.employeeForm.value.department,
          status: this.employeeForm.value.status === 'true'
        };
        
        break; // Stop running the loop because our update operation is finished successfully
      }
    }

    //Transition smoothly back to the home route view grid without causing any manual page reload
    this.router.navigate(['/']);
  }
}
