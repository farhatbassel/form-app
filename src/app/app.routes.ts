import { Routes } from '@angular/router';

export const routes: Routes = [{
  path: 'form-v1',
  loadComponent: () => import('./form-v1/form').then((c) => c.FormV1)
}, {
  path: 'form-v2',
  loadComponent: () => import('./form-v2/form-v2').then((c) => c.FormV2)
}, {
  path: 'form-v3',
  loadComponent: () => import('./form-v3/form-v3').then((c) => c.FormV3)
}, {
  path: 'form-v4',
  loadComponent: () => import('./form-v4/form-v4').then((c) => c.FormV4)
}, {
  path: 'form-v5',
  loadComponent: () => import('./form-v5/form-v5').then((c) => c.FormV5)
}, {
  path: '**',
  loadComponent: () => import('./start-page/start-page').then((c) => c.StartPage)
}];
