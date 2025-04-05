import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG } from '../tokens/config.token';
import { DrinksDto } from '../interface/drinks.dto';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CocktailService {
  private readonly http = inject(HttpClient);
  private readonly config = inject(APP_CONFIG);

  public findCocktailByName(name: string): Observable<DrinksDto> {
    return this.http.get<DrinksDto>(`${this.config.cocktailUrl}s=${name}`);
  }
}
