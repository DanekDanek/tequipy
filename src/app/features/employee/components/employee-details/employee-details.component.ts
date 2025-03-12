import { Component } from '@angular/core';
import { EmployeeEquipmentDetailsComponent } from '../employee-equipment-details/employee-equipment-details.component';
import { EmployeePersonalDetailsComponent } from '../employee-personal-details/employee-personal-details.component';

@Component({
  selector: 'app-employee-details',
  imports: [EmployeeEquipmentDetailsComponent, EmployeePersonalDetailsComponent],
  templateUrl: './employee-details.component.html',
})
export class EmployeeDetailsComponent {}
