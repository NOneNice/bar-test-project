import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-cocktail-list',
  imports: [],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CocktailListComponent {}
