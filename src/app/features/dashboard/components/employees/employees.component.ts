import { Component, inject, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Employee } from '../../../../shared';
import { RouterLink } from '@angular/router';
import { EmployeesStoreService } from '../../services/employees-store.service';

@Component({
  selector: 'app-employees',
  imports: [MatTableModule, RouterLink],
  templateUrl: './employees.component.html',
})
export class EmployeesComponent implements OnInit {
  displayedColumns: string[] = ['fullName', 'email', 'department', 'equipments', 'status'];
  dataSource: Employee[] = [];
  employeesStoreService = inject(EmployeesStoreService);

  ngOnInit(): void {
    this.employeesStoreService.getEmployees();
    this.employeesStoreService.employees$.subscribe((employees) => (this.dataSource = employees));
  }
}
