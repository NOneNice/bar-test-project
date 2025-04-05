import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Card } from 'primeng/card';
import { Drink } from '../../../../interface/drinks.dto';

@Component({
  selector: 'app-cocktail-single-card',
  imports: [Card],
  templateUrl: './cocktail-single-card.component.html',
  styleUrl: './cocktail-single-card.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CocktailSingleCardComponent {
  @Input({ required: true }) entity!: Drink;

  get allIngredients() {
    return Object.entries(this.entity)
      .filter(([key, value]) => key.startsWith('strIngredient') && !!value)
      .map(([, value]) => value);
  }
}
