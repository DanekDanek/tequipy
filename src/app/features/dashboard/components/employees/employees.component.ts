import { Component, inject, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Employee } from '../../../../shared';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';
import { EmployeesStoreService } from '../../services/employees-store.service';

@Component({
  selector: 'app-employees',
  imports: [MatTableModule, MatFormFieldModule, MatInputModule, RouterLink],
  host: {
    class: 'relative',
  },
  templateUrl: './employees.component.html',
})
export class EmployeesComponent implements OnInit {
  displayedColumns: string[] = ['fullName', 'email', 'department', 'equipments', 'status'];
  dataSource: Employee[] = [];
  employees: Employee[] = [];

  employeesStoreService = inject(EmployeesStoreService);
  route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.employeesStoreService.getEmployees();

    this.employeesStoreService.employees$.subscribe((employees) => {
      this.employees = employees;
      this.dataSource = this.employees;
    });

    this.route.queryParams.subscribe((params) => {
      this.applyFilter(params);
    });
  }

  applyFilter(params: Params) {
    const searchPhrase = params['search'] || '';
    this.dataSource = this.employees.filter(
      (employee) =>
        employee.name.includes(searchPhrase) || employee.department.includes(searchPhrase),
    );
  }
}
