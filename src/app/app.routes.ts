import { ActivatedRouteSnapshot, Routes } from '@angular/router';
import { CocktailListComponent } from './modules/cocktail/list/cocktail-list.component';
import { CocktailSingleComponent } from './modules/cocktail/single/cocktail-single.component';
import { BarService } from './service/bar.service';
import { inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { LayoutComponent } from './modules/layout/layout.component';
import { Title } from '@angular/platform-browser';

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
        path: 'single/:id',
        loadComponent: () => CocktailSingleComponent,
        resolve: {
          entity: async (route: ActivatedRouteSnapshot) => {
            const service = inject(BarService);

            const title = inject(Title);

            const entity = await firstValueFrom(
              service.findById(route.paramMap.get('id')!),
            );

            if (entity.drinks) {
              const firstEntit = entity.drinks[0];

              title.setTitle(`Коктель: ${firstEntit.strDrink}`);

              return firstEntit;
            } else {
              title.setTitle('Коктейль не был найден');

              return null;
            }
          },
        },
      },
    ],
  },

  { path: '**', redirectTo: 'list' },
];
