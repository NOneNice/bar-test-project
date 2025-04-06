import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CocktailSingleCardComponent } from './cocktail-single-card/cocktail-single-card.component';
import { map, Observable } from 'rxjs';
import { Drink } from '../../../interface/drinks.dto';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-cocktail-single',
  imports: [CocktailSingleCardComponent, AsyncPipe],
  templateUrl: './cocktail-single.component.html',
  styleUrl: './cocktail-single.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CocktailSingleComponent {
  private readonly activeRouter = inject(ActivatedRoute);

  public entity: Observable<Drink | null> = this.activeRouter.data.pipe(
    map((data) => data['entity']),
  );
}
