import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'player/:type',
    loadComponent: () => import('./content-plyaer/content-player.component').then((m) => m.ContentPlayerComponent),
  },
  {
    path: '',
    redirectTo: 'player',
    pathMatch: 'full',
  },
];
