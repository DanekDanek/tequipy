import { Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { EmployeesComponent } from './components/employees/employees.component';

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'employees',
        pathMatch: 'full',
      },
      {
        path: 'employees',
        component: EmployeesComponent,
      },
    ],
  },
];
