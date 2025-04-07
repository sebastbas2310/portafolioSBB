import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./components/home/items.module').then(m => m.ItemsModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('./components/projects/orders.module').then(m => m.OrdersModule)
  }
];
