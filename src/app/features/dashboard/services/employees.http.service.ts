import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Employee } from '../../../shared/types/employee.type';

@Injectable({
  providedIn: 'root',
})
export class EmployeesHttpService {
  http = inject(HttpClient);

  getEmployees() {
    return this.http.get<Employee[]>('/api/employees');
  }

  getEmployeeDetails(id: string) {
    return this.http.get<Employee>(`/api/employees/${id}`);
  }
}
