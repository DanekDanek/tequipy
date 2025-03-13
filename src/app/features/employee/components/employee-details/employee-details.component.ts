import { Component, input } from '@angular/core';
import { EmployeeEquipmentDetailsComponent } from '../employee-equipment-details/employee-equipment-details.component';
import { EmployeePersonalDetailsComponent } from '../employee-personal-details/employee-personal-details.component';
import { Employee } from '@shared/employee.interface';

@Component({
  selector: 'app-employee-details',
  imports: [EmployeeEquipmentDetailsComponent, EmployeePersonalDetailsComponent],
  template: `
    <div class="flex flex-col gap-12">
      <app-employee-personal-details [employee]="employee()" />
      <app-employee-equipment-details [equipments]="employee().equipments" />
    </div>
  `,
})
export class EmployeeDetailsComponent {
  employee = input.required<Employee>();
}
