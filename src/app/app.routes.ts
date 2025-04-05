import { Routes } from '@angular/router';
import { LayoutComponent } from './modules/layout/layout.component';

export const routes: Routes = [
  { path: 'bar', component: LayoutComponent },
  { path: '**', redirectTo: 'bar' },
];
