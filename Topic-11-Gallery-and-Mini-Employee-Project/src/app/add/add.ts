import { Component } from '@angular/core'; 
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'; 
import { RouterLink, Router } from '@angular/router'; 
import { EmployeeService } from '../services/employee'; 

@Component({
  selector: 'app-add',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './add.html',
  styleUrl: './add.css',
})
export class Add {
  // Bundling individual fields into a parent FormGroup to manage validations effectively
  employeeForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}'),
    ]),
    department: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required])
  });

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  addEmployee(): void {
    // Break execution and show error messages if the form fails validation criteria
    if (this.employeeForm.invalid) {
      this.employeeForm.markAllAsTouched();
      return; 
    }

    // Dynamic ID calculation to safely avoid ID duplication during employee records deletion
    const currentEmployees = this.employeeService.employees;
    const maxId = currentEmployees.length > 0 ? Math.max(...currentEmployees.map(e => e.id)) : 0;

    // Destructuring clean form control values
    const formValues = this.employeeForm.value;

    const newEmployee = {
      id: maxId + 1,
      name: formValues.name ?? '',
      email: formValues.email ?? '',
      department: formValues.department ?? '',
      status: formValues.status === 'true',
    };

    // Storing data into the global application service instance
    this.employeeService.addEmployee(newEmployee);
    
    // Smooth programmatic transition back to the employee list grid
    this.router.navigate(['/']);
  }
}
