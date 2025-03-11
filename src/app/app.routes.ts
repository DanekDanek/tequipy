import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/dashboard/dashboard.routes').then((m) => m.dashboardRoutes),
  },
  {
    path: 'page-not-found',
    loadComponent: () =>
      import('./shared/components/page-not-found/page-not-found.component').then(
        (m) => m.PageNotFoundComponent,
      ),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'page-not-found',
  },
];
