import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Employee } from '@shared/employee.interface';

@Injectable({
  providedIn: 'root',
})
export class EmployeesHttpService {
  private http = inject(HttpClient);

  getEmployees() {
    return this.http.get<Employee[]>('/api/employees');
  }

  getEmployeeDetails(id: string) {
    return this.http.get<Employee>(`/api/employees/${id}`);
  }

  updateEmployee(updatedEmployee: Employee) {
    return this.http.put(`/api/employees/${updatedEmployee.id}`, { ...updatedEmployee });
  }
}
