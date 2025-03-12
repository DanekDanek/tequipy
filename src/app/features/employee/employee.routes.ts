import { Routes } from '@angular/router';
import { EmployeeDetailsPageComponent } from './pages/employee-details-page/employee-details-page.component';
import { EmployeeResolver } from './resolvers/employee-details.resolver';

export const employeeRoutes: Routes = [
  {
    path: ':id',
    component: EmployeeDetailsPageComponent,
    resolve: {
      employee: EmployeeResolver,
    },
  },
];
