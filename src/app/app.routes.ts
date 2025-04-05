import { Routes } from '@angular/router';
import { CocktailListComponent } from './modules/cocktail/list/cocktail-list.component';
import { CocktailSingleComponent } from './modules/cocktail/single/cocktail-single.component';

export const routes: Routes = [
  {
    path: 'list',
    component: CocktailListComponent,
  },
  {
    path: ':id',
    loadComponent: () => CocktailSingleComponent,
  },
  { path: '**', redirectTo: 'list' },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
];
