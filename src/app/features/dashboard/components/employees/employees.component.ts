import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Employee } from '../../types/employee.type';

const ELEMENT_DATA: Employee[] = [
  { status: 'active', email: 1, fullName: 'Hydrogen', department: 1.0079, equipment: 'H' },
  { status: 'active', email: 2, fullName: 'Helium', department: 4.0026, equipment: 'He' },
  { status: 'active', email: 3, fullName: 'Lithium', department: 6.941, equipment: 'Li' },
  { status: 'active', email: 4, fullName: 'Beryllium', department: 9.0122, equipment: 'Be' },
  { status: 'active', email: 5, fullName: 'Boron', department: 10.811, equipment: 'B' },
  { status: 'active', email: 6, fullName: 'Carbon', department: 12.0107, equipment: 'C' },
  { status: 'active', email: 7, fullName: 'Nitrogen', department: 14.0067, equipment: 'N' },
  { status: 'active', email: 8, fullName: 'Oxygen', department: 15.9994, equipment: 'O' },
  { status: 'active', email: 9, fullName: 'Fluorine', department: 18.9984, equipment: 'F' },
  { status: 'active', email: 10, fullName: 'Neon', department: 20.1797, equipment: 'Ne' },
];

@Component({
  selector: 'app-employees',
  imports: [MatTableModule],
  templateUrl: './employees.component.html',
})
export class EmployeesComponent {
  displayedColumns: string[] = ['fullName', 'email', 'department', 'equipment', 'status'];
  dataSource = ELEMENT_DATA;
}
