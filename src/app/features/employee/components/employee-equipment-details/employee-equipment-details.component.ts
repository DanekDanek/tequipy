import { Component, input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Equipment } from '../../../../shared';

@Component({
  selector: 'app-employee-equipment-details',
  imports: [MatTableModule],
  templateUrl: './employee-equipment-details.component.html',
})
export class EmployeeEquipmentDetailsComponent {
  dataSource = input<Equipment[]>([
    { id: '1', name: 'MacBook Pro' },
    { id: '2', name: 'Apple Magic Mouse' },
  ]);
  displayedColumns = ['item', 'id'];
}
