import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./notes/notes.component').then((m) => m.NotesComponent),
  },
  {
    path: 'customer',
    loadComponent: () =>
      import('remote/Customer').then((m) => m.CustomerComponent),
  },
];
