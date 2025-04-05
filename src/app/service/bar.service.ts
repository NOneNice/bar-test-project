import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG } from '../tokens/config.token';
import { DrinksDto } from '../interface/drinks.dto';
import { Observable } from 'rxjs';
import { DrinkName } from '../interface/drink-name';

@Injectable({ providedIn: 'root' })
export class BarService {
  private readonly http = inject(HttpClient);
  private readonly config = inject(APP_CONFIG);

  private readonly searchUrlByName = this.config.cocktailUrl + 'search.php?s=';

  public findCocktailByName(name: DrinkName): Observable<DrinksDto> {
    return this.http.get<DrinksDto>(this.searchUrlByName + name);
  }
  public findRandomCocktail(): Observable<DrinksDto> {
    return this.http.get<DrinksDto>(this.config.cocktailUrl + 'random.php');
  }
}
