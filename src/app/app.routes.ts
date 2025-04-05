import { ActivatedRouteSnapshot, Routes } from '@angular/router';
import { CocktailListComponent } from './modules/cocktail/list/cocktail-list.component';
import { CocktailSingleComponent } from './modules/cocktail/single/cocktail-single.component';
import { BarService } from './service/bar.service';
import { inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { LayoutComponent } from './modules/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },

      {
        path: 'list',
        component: CocktailListComponent,
      },
      {
        path: ':id',
        loadComponent: () => CocktailSingleComponent,
        resolve: {
          entity: async (route: ActivatedRouteSnapshot) => {
            const service = inject(BarService);

            const entity = await firstValueFrom(
              service.findById(route.paramMap.get('id')!),
            );

            return entity.drinks ? entity.drinks[0] : null;
          },
        },
      },
    ],
  },

  { path: '**', redirectTo: 'list' },
];
