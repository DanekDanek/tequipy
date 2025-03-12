import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Employee } from '../../../../shared';
import { EmployeesService } from '../../services/employees.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-employees',
  imports: [MatTableModule],
  templateUrl: './employees.component.html',
})
export class EmployeesComponent implements OnInit {
  displayedColumns: string[] = ['fullName', 'email', 'department', 'equipments', 'status'];
  dataSource: Employee[] = [];
  employeesService = inject(EmployeesService);
  destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.employeesService
      .getEmployees()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((response) => (this.dataSource = response));
  }
}
