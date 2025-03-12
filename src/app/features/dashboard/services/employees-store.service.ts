import { DestroyRef, inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee } from '../../../shared';
import { EmployeesHttpService } from './employees.http.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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
}
