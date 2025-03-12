import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Employee } from '../types/employee.type';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const employees: Employee[] = [
      {
        id: 'vvv1323',
        name: 'John Doe',
        department: 'Engineering',
        status: 'ACTIVE',
        email: 'some.email@wp.pl',
        equipments: [
          {
            id: 'aaa123456',
            name: 'Macbook air',
          },
          {
            id: 'aaa123456',
            name: 'Magic Mouse',
          },
        ],
      },
    ];

    return { employees };
  }
}
