import { Component, input } from '@angular/core';
import { Employee } from '@shared/employee.interface';

@Component({
  selector: 'app-employee-personal-details',
  imports: [],
  templateUrl: './employee-personal-details.component.html',
})
export class EmployeePersonalDetailsComponent {
  employee = input.required<Employee>();
}
