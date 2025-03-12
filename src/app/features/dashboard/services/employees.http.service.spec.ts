import { TestBed } from '@angular/core/testing';

import { EmployeesHttpService } from './employees.http.service';

describe('EmployeesService', () => {
  let service: EmployeesHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeesHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
