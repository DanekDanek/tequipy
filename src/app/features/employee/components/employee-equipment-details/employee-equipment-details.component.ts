import { Component, input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Equipment } from '@shared/equipment.interface';

@Component({
  selector: 'app-employee-equipment-details',
  imports: [MatTableModule],
  templateUrl: './employee-equipment-details.component.html',
})
export class EmployeeEquipmentDetailsComponent {
  equipments = input.required<Equipment[]>();
  displayedColumns = ['item', 'id'];
}
