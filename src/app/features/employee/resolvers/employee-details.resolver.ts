import { inject, Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeesHttpService } from '../../dashboard/services/employees.http.service';
import { Employee } from '../../../shared';

@Injectable({ providedIn: 'root' })
export class EmployeeResolver implements Resolve<Employee> {
  employeesHttpService = inject(EmployeesHttpService);

  resolve(route: ActivatedRouteSnapshot): Observable<Employee> | Promise<Employee> | Employee {
    const employeeId = route.paramMap.get('id') ?? '';
    return this.employeesHttpService.getEmployeeDetails(employeeId);
  }
}
