import { DestroyRef, inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee } from '@shared/employee.interface';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { EmployeesHttpService } from '@shared/employees.http.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeesStoreService {
  employees$ = new BehaviorSubject<Employee[]>([]);
  destroyRef = inject(DestroyRef);
  employeesHttpService = inject(EmployeesHttpService);

  getEmployees() {
    this.employeesHttpService
      .getEmployees()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((res) => this.employees$.next(res));
  }

  offboardEmployee(id: string) {
    let employees = this.employees$.value;
    let updatedEmployee = null;

    employees = employees.map((employee) => {
      if (employee.id === id) {
        updatedEmployee = { ...employee, status: 'OFFBOARDED' };
        return updatedEmployee;
      } else {
        return employee;
      }
    });

    this.employees$.next(employees);

    if (updatedEmployee) {
      this.updateEmployee(updatedEmployee);
    }
  }

  updateEmployee(updatedEmployee: Employee) {
    this.employeesHttpService.updateEmployee(updatedEmployee).subscribe();
  }
}
