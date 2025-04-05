import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-cocktail-single',
  imports: [],
  templateUrl: './cocktail-single.component.html',
  styleUrl: './cocktail-single.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CocktailSingleComponent {}
