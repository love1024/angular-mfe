import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'customer',
    pathMatch: 'full',
  },
  {
    path: 'customer',
    loadComponent: () =>
      import('./customer/customer.component').then((m) => m.CustomerComponent),
  },
];
