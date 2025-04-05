import { effect, inject, Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { BarState } from './bar.state';
import { filter, Observable, switchMap, tap } from 'rxjs';
import { DrinkName } from '../interface/drink-name';
import { BarService } from '../service/bar.service';

const initialState: BarState = {
  currentDrinkName: '',
  drinksMap: {},
};

@Injectable()
export class BarStore extends ComponentStore<BarState> {
  private readonly service = inject(BarService);

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
        switchMap((name) =>
          this.service.findCocktailByName(name).pipe(
            tap((res) => {
              this.setState((state) => ({
                drinksMap: { ...state.drinksMap, [name]: res },
                currentDrinkName: name,
              }));
            }),
          ),
        ),
      ),
  );
}
