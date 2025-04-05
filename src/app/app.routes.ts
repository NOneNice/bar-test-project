import { Routes } from '@angular/router';
import { CocktailListComponent } from './modules/cocktail-list/cocktail-list.component';

export const routes: Routes = [
  {
    path: 'list',
    component: CocktailListComponent,
  },
  { path: '**', redirectTo: 'list' },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
];
