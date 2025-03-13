import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Employee } from '../interfaces/employee.interface';

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
      {
        id: 'vvv1410',
        name: 'Justine Owens',
        department: 'Sales',
        status: 'ACTIVE',
        email: 'justine@tequipy.com',
        equipments: [
          {
            id: 'aaa1232256',
            name: 'MacBook Pro',
          },
          {
            id: 'aaa123213456',
            name: 'Xiaomi Mi 3',
          },
          {
            id: 'aaa12976556',
            name: 'Dell 200XP',
          },
        ],
      },
      {
        id: 'vvv1832',
        name: 'Amrita Blackmore',
        department: 'Marketing',
        status: 'ACTIVE',
        email: 'amrita@tequipy.com',
        equipments: [
          {
            id: 'aaa091572256',
            name: 'MacBook Set',
          },
        ],
      },
    ];

    return { employees };
  }
}
