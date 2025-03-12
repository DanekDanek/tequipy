import { Routes } from '@angular/router';
import { EmployeeDetailsPageComponent } from './pages/employee-details-page/employee-details-page.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';

export const employeeRoutes: Routes = [
  {
    path: '',
    component: EmployeeDetailsPageComponent,
    children: [
      {
        path: ':id',
        component: EmployeeDetailsComponent,
      },
    ],
  },
];
