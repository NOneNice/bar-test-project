import { effect, inject, Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { BarState } from './bar.state';
import { filter, map, Observable, switchMap, tap } from 'rxjs';
import { DrinkName } from '../interface/drink-name';
import { BarService } from '../service/bar.service';
import { RANDOM_KEY } from '../const/random-key-state.const';

const initialState: BarState = {
  currentDrinkName: '',
  drinksMap: {},
  loadingStatus: 'init',
};

@Injectable()
export class BarStore extends ComponentStore<BarState> {
  private readonly service = inject(BarService);

  public readonly isLoading$ = this.select(
    (state) => state.loadingStatus === 'loading',
  );

  public readonly drinks$ = this.select(
    (state) => state.drinksMap[state.currentDrinkName],
  ).pipe(
    filter(Boolean),
    map((item) => item.drinks),
  );

  constructor() {
    super(initialState);
    effect(() => console.log(this.state()));
  }

  public readonly findByDrinkName = this.effect(
    (name$: Observable<DrinkName>) =>
      name$.pipe(
        tap((name) => {
          if (this.state().drinksMap[name]) {
            this.patchState({ currentDrinkName: name });
          }
        }),
        filter((name) => !this.state().drinksMap[name]),
        tap(() => this.patchState({ loadingStatus: 'loading' })),
        switchMap((name) =>
          this.service.findCocktailByName(name).pipe(
            tap((res) => {
              this.setState((state) => ({
                drinksMap: { ...state.drinksMap, [name]: res },
                currentDrinkName: name,
                loadingStatus: 'loaded',
              }));
            }),
          ),
        ),
      ),
  );

  public randomCocktail = this.effect((trigger) =>
    trigger.pipe(
      tap(() => this.patchState({ loadingStatus: 'loading' })),
      switchMap(() =>
        this.service.findRandomCocktail().pipe(
          tap((res) =>
            this.setState((state) => ({
              drinksMap: { ...state.drinksMap, [RANDOM_KEY]: res },
              currentDrinkName: RANDOM_KEY,
              loadingStatus: 'loaded',
            })),
          ),
        ),
      ),
    ),
  );
}
